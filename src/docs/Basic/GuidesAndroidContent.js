export const text1_1 = `
# Headless JS

Headless JS는 앱이 백그라운드에 있는 동안 JavaScript에서 작업을 실행하는 방법입니다. 예를 들어, 새 데이터를 동기화하거나, 푸시 알림을 처리하거나, 음악을 재생하는 데 사용할 수 있습니다. 

## JS API

이 작업은 \`AppRegistry\` 에 등록하는 비동기 함수로, React 애플리케이션을 등록하는 것과 유사합니다. 

\`\`\`jsx
import { AppRegistry } from 'react-native';
AppRegistry.registerHeadlessTask('SomeTaskName', () =>
  require('SomeTaskName')
);
\`\`\`

그리고 \`SomeTaskName.js\`에 다음 내용을 추가합니다. 

\`\`\`jsx
module.exports = async (taskData) => {
  // do stuff
};
\`\`\`

UI를 건드리지 않는 한, 네트워크 요청, 타이머 등 모든 작업을 수행할 수 있습니다. 작업이 완료되면 (즉, Promise가 resolved되면), React Native는 "일시 중지" 모드로 전환됩니다 (다른 작업이 실행 중이거나 포그라운드 앱이 없는 경우). 

## Java API

물론 아직 네이티브 코드가 필요하긴 하지만, 상당히 짧습니다. \`HeadlessJsTaskService\` 를 확장하고 \`getTaskConfig\` 를 재정의해야 합니다. 

\`\`\`java
package com.your_application_name;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;

public class MyTaskService extends HeadlessJsTaskService {

  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
      return new HeadlessJsTaskConfig(
          "SomeTaskName",
          Arguments.fromBundle(extras),
          5000, // timeout for the task
          false // optional: defines whether or not  the task is allowed in foreground. Default is false
        );
    }
    return null;
  }
}
\`\`\`

그런 다음 \`AndroidManifest.xml\` 파일에 service를 추가합니다. 

\`\`\`xml
<service android:name="com.example.MyTaskService" />
\`\`\`

이제 서비스를 시작할 때마다 (정기적인 작업으로, 또는 몇몇 시스템 이벤트 / 브로드캐스트에 대한 응답으로), JS는 스핀업, 실행, 스핀다운을 수행하게 됩니다. 

예시: 

\`\`\`java
Intent service = new Intent(getApplicationContext(), MyTaskService.class);
Bundle bundle = new Bundle();

bundle.putString("foo", "bar");
service.putExtras(bundle);

getApplicationContext().startService(service);
\`\`\`

## 재시도 (Retries)

기본적으로, 헤드리스 JS 작업은 리트라이를 수행하지 않습니다. 리트라이를 하려면 \`HeadlessJsRetryPolicy\` 를 생성해 특정한 \`Error\` 를 던져야 합니다. 

\`LinearCountingRetryPolicy\`은 각 시도 사이에 일정한 지연으로 최대 리트라이 횟수를 지정할 수 있는  \`HeadlessJsRetryPolicy\`를 구현한 것입니다. 앱에 사용하기 적합하지 않다면, 직접 \`HeadlessJsRetryPolicy\`를 구현할 수도 있습니다. 이러한 정책은 예를 들어 \`HeadlessJsTaskConfig\` 생성자에 대한 추가 인자로 전달될 수 있습니다. 

\`\`\`java
HeadlessJsRetryPolicy retryPolicy = new LinearCountingRetryPolicy(
  3, // Max number of retry attempts
  1000 // Delay between each retry attempt
);

return new HeadlessJsTaskConfig(
  'SomeTaskName',
  Arguments.fromBundle(extras),
  5000,
  false,
  retryPolicy
);
\`\`\`

리트라이 시도는 특정 \`Error\` 가 발생한 경우에만 수행됩니다. 리트라이 시도가 필요할 때, 헤드리스 JS 작업 내에서 오류를 가져와 throw할 수 있습니다. 

예시:

\`\`\`jsx
import {HeadlessJsTaskError} from 'HeadlessJsTask';

module.exports = async (taskData) => {
  const condition = ...;
  if (!condition) {
    throw new HeadlessJsTaskError();
  }
};
\`\`\`

모든 오류가 리트라이 시도를 발생시키게 하려면, 해당 오류를 catch하여 위의 오류를 throw해야 합니다. 

## 주의사항

- \`setTimeout\` 에 전달된 함수가 항상 예상대로 동작하지는 않습니다. 대신 이 함수는 애플리케이션이 다시 시작될 때만 호출됩니다. 기다리기만 하면 되는 경우에 리트라이 기능을 사용하십시오. 
- 기본적으로, 앱이 포그라운드에 있는 동안 작업을 실행하려고 하면 앱이 중단됩니다. 이는 개발자들이 작업에서 많은 일을 하고 UI가 느려지게 하는 등 스스로 발등을 찍는 행동을 하지 않게 하기 위해서 입니다. 이 동작을 제어하려면 네번째 \`boolean\` 인자를 전달하면 됩니다. 
- \`BroadcastReceiver\`에서 서비스를 시작하려면, \`onReceive()\`를 반환하기 전에 \`HeadlessJsTaskService.acquireWakeLockNow()\`를 호출해야 합니다. 

## 사용 예시

Java API에서 서비스를 시작할 수 있습니다. 먼저 서비스 시작 시기를 결정하고, 그에 맞게 솔루션을 구현해야 합니다. 다음은 네트워크 연결 변경에 대응하는 예시입니다. 

다음은 브로드캐스트 수신기를 등록하기 위한 Android 매니페스트 파일의 일부입니다. 

\`\`\`xml
<receiver android:name=".NetworkChangeReceiver" >
  <intent-filter>
    <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
  </intent-filter>
</receiver>
\`\`\`

그런 다음 브로드캐스트 수신기는 onReceive 함수에서 브로드캐스팅된 intent를 처리합니다. 이는 앱이 포그라운드에 있는지 여부를 확인할 수 있는 좋은 방법입니다. 앱이 포그라운드에 없는 경우 \`putExtra\`를 사용하여 번들로 제공되는 정보나 추가 정보 없이 시작하려는 intent를 준비할 수 있습니다 (번들은 파싱 가능한 값으로만 처리할 수 있다는 점에 주의하십시오). 최종적으로 서비스가 시작되고, wakelock이 취득됩니다. 

\`\`\`java
public class NetworkChangeReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(final Context context, final Intent intent) {
        /**
          This part will be called every time network connection is changed
          e.g. Connected -> Not Connected
        **/
        if (!isAppOnForeground((context))) {
            /**
              We will start our service and send extra info about
              network connections
            **/
            boolean hasInternet = isNetworkAvailable(context);
            Intent serviceIntent = new Intent(context, MyTaskService.class);
            serviceIntent.putExtra("hasInternet", hasInternet);
            context.startService(serviceIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
        }
    }

    private boolean isAppOnForeground(Context context) {
        /**
          We need to check if app is in foreground otherwise the app will crash.
         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not
        **/
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> appProcesses =
        activityManager.getRunningAppProcesses();
        if (appProcesses == null) {
            return false;
        }
        final String packageName = context.getPackageName();
        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {
            if (appProcess.importance ==
            ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&
             appProcess.processName.equals(packageName)) {
                return true;
            }
        }
        return false;
    }

    public static boolean isNetworkAvailable(Context context) {
        ConnectivityManager cm = (ConnectivityManager)
        context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return (netInfo != null && netInfo.isConnected());
    }


}
\`\`\`

`

export const text2_1 = `
# Google Play Store에 게시하기

Android에서는 모든 앱이 설치 전에 인증서를 사용해 디지털 서명을 마쳐야 합니다. [Google Playstore](https://play.google.com/store) 를 통해 Android 애플리케이션을 배포하려면 향후 모든 업데이트에서 사용될 릴리스 키로 서명되어야 합니다. 2017년부터 [Play 앱 서명](https://developer.android.com/studio/publish/app-signing#app-signing-google-play) 기능을 통해 자동으로 서명 릴리스를 관리할 수 있지만, 애플리케이션 바이너리가 Google Play에 업로드 되기 전에 업로드 키로 서명되어야 합니다. Android 개발자 문서의 [앱 서명](https://developer.android.com/tools/publishing/app-signing.html) 페이지에 자세히 설명되어 있습니다. 이 가이드에서는 해당 과정을 간략하게 다루고, JavaScript 번들을 패키징하는 데 필요한 단계를 나열합니다. 

## 업로드 키 생성하기

\`keytool\` 을 사용해 개인 서명 키를 생성할 수 있습니다. Windows에서 \`keytool\` 은 반드시 \`C:\\Program Files\\Java\\jdkx.x.x_x\\bin\` 에서 실행되어야 합니다. 

\`\`\`shell
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
\`\`\`

이 명령을 수행하면 키 저장소 및 키의 암호와, 키의 고유 이름 필드에 대한 입력을 받습니다. 그런 다음 키 저장소를 \`my-upload-key.keystore\` 라는 파일로 생성합니다. 

키 저장소에는 10000일 간 유효한 단일 키가 포함되어 있습니다. 별칭(alias)은 나중에 앱에 서명할 때 사용할 이름이므로 기록해 두는 것이 좋습니다. 

Mac에서 JDK bin 폴더의 위치를 모른다면 다음 명령을 수행하여 폴더를 찾습니다. 

\`\`\`shell
/usr/libexec/java_home
\`\`\`

이 명령은 다음과 같이 JDK의 경로를 출력해줍니다. 

\`\`\`shell
/usr/libexec/java_home
\`\`\`

\`cd /your/jdk/path\` 명령을 사용해 해당 디렉토리로 이동하고, 아래와 같이 sudo 권한과 함께 keytool 명령을 실행합니다. 

\`\`\`shell
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
\`\`\`

> 참고: 키 저장소 파일은 비공개로 유지해야 합니다. 업로드 키를 잃어버렸거나 손상된 경우 [다음 지침을 따르십시오](https://support.google.com/googleplay/android-developer/answer/7384423#reset).

## Gradle 변수 설정하기

1. \`my-upload-key.keystore\` 파일을 프로젝트 폴더의 \`android/app\` 디렉터리 하위에 배치합니다. 
2. \`~/.gradle/gradle.properties\` 또는 \`android/gradle.properties\` 파일을 편집하고 다음을 추가합니다. (\`*****\` 를 정확한 키 저장소 암호, 별칭, 키 암호로 대체합니다). 

\`\`\`shell
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
\`\`\`

위 변수들은 전역 Gradle 변수가 됩니다. 나중에 Gradle config에서 이 변수들을 사용하여 앱에 서명할 수 있습니다. 

> 일반 텍스트에 암호를 저장하는 데 관심이 없고 macOS를 실행 중인 경우, [키 체인 액세스 앱에 자격 증명을 저장](https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/)할 수도 있습니다. 그런 다음 \`~/.gradle/gradle.properties\`에서 마지막 두 줄을 건너 뛸 수 있습니다. 

## 앱의 config에 서명 설정 추가하기

마지막으로 수행해야 하는 설정 단계는 업로드 키를 사용해 서명할 릴리스 빌드를 설정하는 것입니다. 프로젝트 폴더에서 \`android/app/build.gradle\` 파일을 편집하고 서명 설정을 추가합니다. 

\`\`\`json
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
\`\`\`

## 릴리스 AAB 생성하기

터미널에서 다음을 실행합니다. 

\`\`\`shell
cd android
./gradlew bundleRelease
\`\`\`

Gradle의 \`bundleRelease\` 는 앱을 실행하는 데 필요한 모든 JavaScript를 AAB([Android App Bundle](https://developer.android.com/guide/app-bundle))로 번들링합니다. JavaScript 번들링 또는 그리기 가능한 리소스 번들링 방식을 변경해야 하는 경우 (예: 기본 파일/폴더 이름 또는 프로젝트의 구조를 변경해야 하는 경우), \`android/app/build.gradle\`에서 이러한 변경을 반영하도록 업데이트할 수 있는 방법을 확인하십시오. 

> 참고: \`gradle.properties\` 에 \`org.gradle.configureondemand=true\` 가 포함되어 있지 않은지 확인하십시오. 그렇게 하면 릴리스 빌드가 JS와 asset이 앱 바이너리로 번들링되는 단계를 건너뛰게 됩니다. 

생성된 AAB는 \`android/app/build/outputs/bundle/release/app.aab\` 에서 찾을 수 있으며, Google Play에 업로드 될 준비가 된 상태입니다. 

Google Play에서 AAB 포맷을 허용하려면, Google Play 콘솔에서 애플리케이션에 대한 Play 앱 서명이 설정되어야 합니다. Play 앱 서명을 사용하지 않는 기존 앱을 업데이트하는 경우, [마이그레이션 섹션](https://reactnative.dev/docs/signed-apk-android#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play)에서 해당 설정을 변경하는 방법에 대해 알아보십시오. 

## 앱의 릴리스 빌드 테스트하기

Play Store에 릴리스 빌드를 업로드하기 전에, 앱을 철저히 테스트해야 합니다. 먼저 이미 설치한 앱의 이전 버전을 제거하십시오. 프로젝트 루트에서 다음 명령을 사용해 디바이스에 앱을 설치합니다. 

\`\`\`shell
npx react-native run-android --variant=release
\`\`\`

\`--variant release\` 는 위에서 설명한 대로, 서명을 설정한 경우에만 사용할 수 있습니다. 

모든 프레임워크와 JavaScript 코드가 APK의 asset에서 번들링된 후에는, 실행 중인 번들러 인스턴스를 모두 종료할 수 있습니다. 

## 다른 스토어에 게시하기

기본적으로, 생성된 APK는 x86 및 ARMv7a CPU 아키텍처에 대한 네이티브 코드를 가지고 있습니다. 따라서 거의 모든 Android 디바이스에서 실행되는 APK들을 더 쉽게 공유할 수 있습니다. 그러나 이 경우 모든 디바이스에 사용되지 않는 일부 네이티브 코드가 존재하여, 불필요하게 더 큰 APK가 만들어질 수 있다는 단점이 있습니다. 

android/app/build.gradle에서 다음 행을 변경하여 각 CPU에 맞는 APK를 생성할 수 있습니다. 

\`\`\`shell
- ndk {
-   abiFilters "armeabi-v7a", "x86"
- }
- def enableSeparateBuildPerCPUArchitecture = false
+ def enableSeparateBuildPerCPUArchitecture = true
\`\`\`

두 파일으 모두 [Google Play](https://developer.android.com/google/play/publishing/multiple-apks.html) 및 [Amazon AppStore](https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html) 와 같이 디바이스 타겟팅을 지원하는 마켓에 업로드하면, 사용자는 자동으로 적절한 APK를 받게 됩니다. 단일 앱에 대해 여러 APK를 지원하지 않는 [APKFiles](https://www.apkfiles.com/) 등 다른 마켓에 업로드하려면 다음 행도 변경하여 두 CPU 모두에 대한 바이너리가 포함된 기본 범용 APK를 생성하십시오. 

\`\`\`shell
- universalApk false  // If true, also generate a universal APK
+ universalApk true  // If true, also generate a universal APK
\`\`\`

## APK 사이즈를 줄이기 위해 Proguard 활성화하기 (선택)

Proguard는 APK의 크기를 약간 줄일 수 있는 도구입니다. 이 작업은 앱이 사용하지 않는 React Native Java 바이트 코드 (및 종속성)의 일부를 제거하는 방식으로 이루어집니다. 

> **중요**: Proguard를 활성화한 경우, 앱을 철저히 테스트해야 합니다. Proguard는 사용 중인 각 네이티브 라이브러리에 맞는 설정이 필요할 때가 많습니다. \`app/proguard-rules.pro\` 를 참조하십시오. 

Proguard를 활성화하려면, \`android/app/build.gradle\` 를 편집하십시오. 

\`\`\`shell
/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = true
\`\`\`

## Play 앱 서명 사용을 위해 기존 Android React Native 앱 마이그레이션하기

이전 버전의 React Native에서 마이그레이션한 경우, 앱이 Play 앱 서명 기능을 사용하지 않을 가능성이 있습니다. 자동 앱 분할과 같은 기능을 사용하려면 Play 앱 서명을 활성화하는 것이 좋습니다. 이전 서명 방식에서 마이그레이션하려면, [새 업로드 키 생성](https://reactnative.dev/docs/signed-apk-android #generation-an-upload-upload-gradle)에서  \`android/app/build.gradle\`의 서명 설정을 변경해 릴리스 키 대신 업로드 키를 사용합니다 ([Gradle에 서명 설정 추가](https://reactnative.dev/docs/signed-apk-android#adding-signing-config-to-your-app-s-gradle-config)에 관한 섹션을 참고하세요). 이 작업이 완료되면 [Google Play Help 웹 사이트의 지침](https://support.google.com/googleplay/android-developer/answer/7384423)을 따라 기존 릴리스 키를 Google Play에 보내야 합니다. 

## 기본 권한

기본적으로 거의 모든 앱이 \`INTERNET\` 권한을 사용하기 때문에, 앱에 \`INTERNET\` 권한이 추가됩니다. \`SYSEM_ALERT_WINDOW\` 권한은 디버그 모드에서 Android APK에는 추가되지만, 프로덕션에서는 제거됩니다. 
`