export const text1_1 = `
# 네이티브 모듈 소개

React Native 앱은 JavaScript에서 기본적으로 제공되지 않는 네이티브 플랫폼 API (예: Apple 또는 Google Play에 액세스하는 네이티브 API)에 액세스해야 하는 경우가 있습니다. 기존 Objective-C, Swift, Java 또는 C++ 라이브러리를 JavaScript로 재구현할 필요 없이 재사용하기를 원하거나, 이미지 처리와 같은 작업을 위해 고성능 멀티 스레드 코드를 작성하고자 할 수 있습니다. 

NativeModule 시스템은 Java/Objective-C/C++ (네이티브) 클래스의 인스턴스를 JavaScript (JS)에 JS 객체로 표시하기 때문에, JS 내에서 임의로 네이티브 코드를 실행할 수 있습니다. 이 기능이 일반적인 개발 프로세스의 일부가 되지는 않겠지만, 반드시 존재해야 합니다. 만약 React Native에서 JS 앱에 필요한 네이티브 API를 내보내지 않으면, 직접 export할 수 있어야 합니다!

## 네이티브 모듈 설정

React Native 애플리케이션에 맞는 네이티브 모듈을 작성하는 방법은 두 가지가 있습니다. 

1. React Native 애플리케이션의 iOS/Android 프로젝트 내부에서 바로 작성합니다. 
2. 내 React Native 애플리케이션 또는 다른 React Native 애플리케이션에 의해 종속성으로 설치될 수 있는 NPM 패키지로 작성합니다.

이 가이드에서는 먼저 React Native 애플리케이션 내에서 바로 네이티브 모듈을 구현하는 방법에 대해 알아봅니다. 물론 다음 가이드를 따라 구현한 네이티브 모듈을 NPM 패키지로 배포할 수도 있습니다. 원하는 경우 [Native Module을 NPM 패키지로 설정](https://reactnative.dev/docs/native-modules-setup) 가이드를 참조하십시오.

## 시작하기

다음 섹션에서는 React Native 애플리케이션 안에서 바로 네이티브 모듈을 구현하는 방법에 대한 가이드를 제공합니다. React Native 애플리케이션이 필요합니다. React Native 애플리케이션이 아직 없는 경우 [여기](https://reactnative.dev/docs/getting-started)에서 단계를 따라 설정할 수 있습니다. 

캘린더 이벤트를 생성하기 위해 React Native 애플리케이션 내에서 JavaScript로 iOS/Android의 네이티브 캘린더에 액세스한다고 가정해봅시다. React Native는 네이티브 캘린더 API와 통신하기 위해 JavaScript API를 노출하지 않습니다. 그러나, 네이티브 모듈을 통해서 네이티브 캘린더 API와 통신하는 네이티브 코드를 작성할 수는 있습니다. 그런 다음 해당 네이티브 코드를 React Native 애플리케이션 안의 JavaScript를 통해 호출할 수 있습니다. 

다음 섹션에서는 이러한 Android용, iOS용 캘린더 네이티브 모듈을 생성할 수 있습니다. 

`
export const text2_1 = `
# Android 네이티브 모듈

Android용 네이티브 모듈에 오신 것을 환영합니다. 네이티브 모듈이 무엇인지 소개하는 [네이티브 모듈 소개](https://reactnative.dev/docs/native-modules-intro) 를 먼저 읽어보십시오. 

## 캘린더 네이티브 모듈 생성하기

다음 가이드에서는 JavaScript에서 Android의 캘린더 API에 액세스할 수 있도록 해주는 네이티브 모듈인 \`CalendarModule\` 을 생성합니다. 최종적으로는 JavaScript에서 캘린더 이벤트를 생성하는 Java 메소드를 발생시켜  \`CalendarModule.createCalendarEvent('Dinner Party', 'My House');\` 를 호출할 수 있게 될 것입니다. 

> React Native 팀은 현재 네이티브 모듈 시스템의 재구성을 진행하고 있습니다. 새로운 시스템은 TurboModules라고 불리며, React Native 브릿지에 의존하지 않고도 JavaScript와 네이티브 간에 더 효율적인 타입 세이프 통신을  가능하게 할 것입니다. 기존 네이티브 모듈 시스템에서는 불가능했던 새 확장기능도 사용할 수 있습니다. 자세한 내용은 [여기](https://github.com/react-native-community/discussions-and-proposals/issues/40)에서 확인할 수 있습니다. 이 문서 전반에 걸쳐 우리는 네이티브 모듈 부분 중에서 TurboModules 릴리즈에서 변경될 부분과, TurboModules로의 원활한 업그레이드를 준비하는 방법에 대한 참고 사항을 추가해두었습니다. 

### 설정

시작하려면 Android Studoi에서 React Native 애플리케이션의 Android 프로젝트를 여십시오. React Native 앱 내부에서 Android 프로젝트를 찾을 수 있습니다. 

![Image of opening up an Android project within a React Native app inside of Android Studio.](https://reactnative.dev/docs/assets/native-modules-android-open-project.png)

네이티브 코드 작성에는 Android Studio를 사용하는 것이 좋습니다. Android studio는 Android 개발을 위해 구축된 IDE이며, 이를 사용하면 코드 구문 오류와 같은 사소한 문제들을 신속하게 해결할 수 있습니다. 

또한 [Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html)을 사용해 Java 코드에서 반복 시 빌드 속도를 높이는 것을 권장합니다. 

### 사용자 정의 네이티브 모듈 파일 생성하기 

첫 번째 단계는 \`android/app/src/main/java/com/your-app-name/ folder\` 내에 Java 파일 \`CalendarModule.java\` 를 생성하는 것입니다. 이 Java 파일에는 네이티브 모듈 Java 클래스가 포함됩니다. 

![Image of adding a class called CalendarModule.java within the Android Studio.](https://reactnative.dev/docs/assets/native-modules-android-add-class.png)

그리고 다음 내용을 추가합니다. 

\`\`\`java
package com.your-app-name; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }
}
\`\`\`

보시는 것처럼 \`CalendarModule\` 클래스는 \`ReactContextBaseJavaModule\` 클래스를 확장합니다. Android의 경우, Java 네이티브 모듈은 \`ReactContextBaseJavaModule\`을 확장하고 JavaScript에 필요한 기능을 구현하는 클래스로 작성됩니다. 

> 기술적으로 Java 클래스는 \`BaseJavaModule\` 클래스를 확장하거나 \`NativeModule\` 인터페이스를 구현하기만 하면 React Native에서 네이티브 모듈로 간주한다는 점에 주목할 필요가 있습니다. 

> 그러나 위에서와 같이 \`ReactContextBaseJavaModule\` 을 사용하는 것이 좋습니다. \`ReactContextBaseJavaModule\`은 액티비티 생명주기 메소드에 연결되어야 하는 네이티브 모듈에 유용한 \`ReactApplicationContext\` (RAC)에 대한 액세스를 제공합니다. \`ReactContextBaseJavaModule\` 를 사용하면, 네이티브 모듈이 향후 타입 안정성을 갖추도록 할 수 있습니다. 향후 릴리즈에 출시될 네이티브 모듈의 타입 안정성에 있어서, React Native는 각 네이티브 모듈의 JavaScript 사양을 살펴보고, \`ReactContextBaseJavaModule\` 를 확장하는 추상 기본 클래스를 생성합니다. 

### 모듈 이름

Android의 모든 Java 네이티브 모듈은 \`getName()\` 메소드를 구현해야 합니다. 이 메소드는 네이티브 모듈의 이름을 나타내는 문자열을 반환합니다. 그런 다음 네이티브 모듈의 이름을 사용해 JavaScript에서 액세스할 수 있습니다. 예를 들어, 아래 코드 조각에서, \`getName()\` 은 \`"CalendarModule"\` 을 반환합니다. 

\`\`\`java
// add to CalendarModule.java
@Override
public String getName() {
   return "CalendarModule";
}
\`\`\`

그러면 다음과 같이 JS에서 네이티브 모듈에 액세스할 수 있습니다. 

\`\`\`js
const { CalendarModule } = ReactNative.NativeModules;
\`\`\`

### 네이티브 메서드를 JavaScript로 내보내기

다음으로 네이티브 모듈에 캘린더 이벤트를 생성하고 JavaScript에서 호출할 수 있는 메소드를 추가해야 합니다. JavaScript에서 호출되는 모든 네이티브 모듈 메서드에는 \`@ReactMethod\` 주석을 달아야 합니다. 

\`CalendarModule.createCalendarEvent()\`를 통해 JS에서 호출될 수 있는 \`CalendarModule\`에 대해 \`createCalendarEvent()\` 메소드를 설정합니다. 현재 메소드는 이름과 위치를 문자열로 받습니다. 인자 타입 옵션은 잠시 후에 설명하겠습니다. 

\`\`\`java
@ReactMethod
public void createCalendarEvent(String name, String location) {
}
\`\`\`

메소드에 디버그 로그를 추가하여 애플리케이션에서 메소드를 호출할 때 디버그 로그가 호출되었는지 확인합니다. 아래는 Android 유틸 패키지에서 [Log](https://developer.android.com/reference/android/util/Log) 클래스를 가져오고 사용하는 방법에 대한 예제입니다. 

\`\`\`java
import android.util.Log;

@ReactMethod
public void createCalendarEvent(String name, String location) {
   Log.d("CalendarModule", "Create event called with name: " + name
   + " and location: " + location);
}
\`\`\`

네이티브 모듈 구현을 완료하고 JavaScript에 연결하면 [이 단계](https://developer.android.com/studio/debug/am-logcat.html)에 따라 앱에서 로그를 볼 수 있습니다. 

### 동기식 메소드

\`isBlockingSynchronousMethod = true\` 를 네이티브 메소드에 전달하여 동기 메서드로 표시할 수 있습니다.

\`\`\`java
@ReactMethod(isBlockingSynchronousMethod = true)
\`\`\`

메소드를 동기적으로 호출하는 것이 강력한 성능 저하를 가져올 수 있고 네이티브 모듈에 스레딩 관련 버그를 도입할 수 있으므로, 현재로서는 이 방법을 권장하지 않습니다. 또한 \`isBlockingSynchronousMethod\` 를 활성화하면 앱이 Google Chrome 디버거를 더 이상 사용할 수 없습니다. 이는 동기식 메소드에는 앱과 메모리를 공유할 JS VM이 필요하기 때문입니다. Google Chrome 디버거의 경우, React Native는 Google Chrome 내부의 JS VM에서 실행되며, 웹소켓을 통해 모바일 기기와 비동기적으로 통신합니다. 

### 모듈 등록하기 (Android 전용)

네이티브 모듈이 작성되면 React Native에 등록해야 합니다. 그러기 위해서는 \`ReactPackage\`에  네이티브 모듈을 추가하고 React Native에 \`ReactPackage\` 를 등록해야 합니다. 초기화 중에 React Native는 모든 패키지를 순회하고, 각 \`ReactPackage\` 에 대해 각각의 네이티브 모듈을 등록합니다. 

React Native는 등록할 네이티브 모듈의 목록을 가져오기 위해서 \`ReactPackage\`에서 \`createNativeModules()\` 메소드를 호출합니다. Android의 경우, 모듈이 인스턴스화되지 않고 createNativeModules로 반환되면 JavaScript에서 모듈을 사용할 수 없습니다. 

네이티브 모듈을 \`ReactPackage\` 에 추가하려면, 먼저  \`android/app/src/main/java/com/your-app-name/\` 폴더 안에 \`ReactPackage\` 를 구현하는 새 자바 클래스 \`MyAppPackage.java\` 를 생성합니다. 

그리고 다음 내용을 추가합니다. 

\`\`\`java
package com.your-app-name; // replace your-app-name with your app’s name
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyAppPackage implements ReactPackage {

   @Override
   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       return Collections.emptyList();
   }

   @Override
   public List<NativeModule> createNativeModules(
           ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();

       modules.add(new CalendarModule(reactContext));

       return modules;
   }

}
\`\`\`

이 파일은 사용자가 만든 네이티브 모듈인 \`CalendarModule\` 을 가져옵니다. 이어서 \`createNativeModules()\` 함수 안에서 \`CalendarModule\` 을 인스턴스화하고, 등록할 \`NativeModules\` 의 리스트를 반환합니다. 진행 중에 네이티브 모듈을 더 추가하려면, 추가할 모듈들 또한 인스턴스화하고 여기에서 반환된 목록에 추가할 수 있습니다. 

> 이러한 네이티브 모듈의 등록 방식은, 애플리케이션이 시작할 때 모든 네이티브 모듈을 초기화함으로써 애플리케이션의 시작 시간을 증가시킨다는 점에 주목할 필요가 있습니다.  [TurboReactPackage](https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/TurboReactPackage.java) 를 대안으로 사용할 수 있습니다. 인스턴스화된 네이티브 모듈 객체 목록을 반환하는 \`createNativeModules\` 대신에, TurboReactPackage는 필요한 경우 네이티브 모듈 객체를 생성하는 \`getModule(String name, ReactApplicationContext rac)\` 메소드를 구현합니다. TurboReactPackage는 현재 구현하기가 좀 더 복잡합니다.  \`getModule()\` 메소드를 구현하는 것 외에도, 패키지가 해당 모듈들을 인스턴스화하는 함수에 따라 인스턴스화할 수 있는 모든 네이티브 모듈의 목록을 반환하는 \`getReactModuleInfoProvider()\` 메소드를 구현해야 합니다. [여기](https://github.com/facebook/react-native/blob/8ac467c51b94c82d81930b4802b2978c85539925/ReactAndroid/src/main/java/com/facebook/react/CoreModulesPackage.java#L86-L165)에서 예제를 확인하십시오. 다시 한 번, TurboReactPackage를 사용하면 애플리케이션의 시작 시간이 단축되지만, 현재 작성하기에는 약간 번거롭습니다. 따라서 TurboReactPackage를 사용할 경우 주의하여 진행하십시오. 

\`CalendarModule\` 패키지를 등록하려면, ReactNativeHost의 \`getPackages()\` 메소드에서 반환된 패키지 리스트에 \`MyAppPackage\`를 추가해야 합니다. \`MainApplication.java\` 파일을 엽니다. 다음 경로에서 찾을 수 있습니다. : \`android/app/src/main/java/com/your-app-name/MainApplication.java\`

ReactNativeHost의 \`getPackages()\` 메소드를 찾고 \`getPackages()\` 가 리턴하는 패키지 목록에 패키지를 추가합니다. 

\`\`\`java
@Override
  protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // below MyAppPackage is added to the list of packages returned
    packages.add(new MyAppPackage());
    return packages;
  }
\`\`\`

이제 Android용 네이티브 모듈을 성공적으로 등록했습니다!

### 구현한 항목 테스트하기

이 시점에서, Android에서 네이티브 모듈의 기본 토대를 완성했습니다. 네이티브 모듈에 액세스하고 해당 모듈이 내보내고 있는 메소드를 JavaScript에서 호출하여 테스트해봅시다. 

애플리케이션에서 네이티브 모듈의 \`createCalendarEvent()\` 호출을 추가할 위치를 찾습니다. 아래는 앱에서 추가할 수 있는 \`NatieModuleButton\` 컴포넌트의 예시입니다. \`NewModuleButton\` 안의 \`onPress()\` 함수에서 네이티브 모듈을 호출할 수 있습니다. 

\`\`\`java
import React from 'react';
import { NativeModules, Button } from 'react-native';

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
\`\`\`

JavaScript에서 네이티브 모듈에 액세스하려면, 먼저 React Native에서 \`NativeModules\` 를 가져와야 합니다. 

\`\`\`jsx
import { NativeModules } from 'react-native';
\`\`\`

그런 다음 \`NativeModules\` 중에서  \`CalendarModule\` 네이티브 모듈에 액세스할 수 있습니다.

\`\`\`jsx
const { CalendarModule } = NativeModules;
\`\`\`

이제 CalendarModule 네이티브 모듈을 사용할 수 있으므로, \`createCalendarEvent()\` 네이티브 메소드를 호출할 수 있습니다. 아래에는, \`NewModuleButton\`에 \`onPress()\` 메소드가 추가되어 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEvent('testName', 'testLocation');
};
\`\`\`

마지막 단계는, 최신 네이티브 코드 (새로운 네이티브 모듈과 함께!)를 사용하기 위해서 React Native 앱을 다시 빌드하는 것입니다. React Native 애플리케이션이 위치한 곳의 커맨드 라인에서 다음을 실행하십시오. 

\`\`\`shell
npx react-native run-android
\`\`\`

### 코드에 적용 후 빌드하기

가이드를 살펴본 후에 네이티브 모듈에 이를 적용할 때, JavaScript에서 최신 변경 사항에 액세스하려면 애플리케이션의 네이티브를 다시 빌드해야 합니다. 이는 작성 중인 코드가 애플리케이션의 네이티브 부분에 있기 때문입니다. React Native의 Metro 번들러는 JavaScript의 변경 사항을 확인하고 즉시 다시 빌드할 수 있지만, 네이티브 코드에서는 그렇지 않습니다. 따라서 최신 네이티브 변경 사항을 테스트하려면 \`npx react-native run-android\` 명령을 사용해 다시 빌드해야 합니다.

### 복습✨

이제 앱의 네이티브 모듈에서 \`createCalendarEvent()\` 메서드를 호출할 수 있습니다. 이 예제에서는 \`NewModuleButton\` 을 눌렀을 때 (메서드 호출이) 발생합니다. \`createCalendarEvent()\` 메서드에서 설정한 로그를 보고 확인할 수 있습니다. [이 단계](https://developer.android.com/studio/debug/am-logcat.html)에 따라 앱에서 ADB 로그를 볼 수 있습니다. 그런 다음 \`Log.d\` 메세지를 검색하고(다음 예시에서는 "Create event called with name: testName and location: testLocation") 네이티브 모듈 메서드를 호출할 때마다 로그 메세지를 확인할 수 있습니다. 

![Image of logs.](https://reactnative.dev/docs/assets/native-modules-android-logs.png)(Android Studio의 ADB 로그 이미지)

Android 네이티브 모듈을 생성하고, React Native 애플리케이션의 JavaScript에서 해당 모듈의 네이티브 메소드를 호출했습니다. 이제 네이티브 모듈 메서드에서 사용 가능한 인자 타입과 콜백 및 프로미스 설정 방법에 대해 알아보겠습니다. 

## 캘린더 네이티브 모듈 생성 이후

### 더 나은 네이티브 모듈 내보내기

위와 같이 네이티브 모듈을 \`NativeModules\`에서 떼어내어 가져오는 것은 조금 세련되지 못한 방법입니다. 

사용자가 네이티브 모듈에 액세스할 때마다 이 작업을 수행할 필요가 없도록 하려면, 해당 모듈에 대한 JavaScript wrapper를 만들어야 합니다. JavaScript 파일 \`CalendarModule.js\`을 작성하고 그 안에 다음 내용을 작성하십시오. 

\`\`\`jsx
/**
* This exposes the native CalendarModule module as a JS module. This has a
* function 'createCalendarEvent' which takes the following parameters:

* 1. String name: A string representing the name of the event
* 2. String location: A string representing the location of the event
*/
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;
export default CalendarModule;
\`\`\`

또한 이 JavaScript 파일은 JavaScript 사이드 기능을 추가할 수 있는 좋은 위치가 됩니다. 예를 들어, TypeScript와 같은 타입 시스템을 사용하는 경우, 네이티브 모듈에 대한 타입 주석을 추가할 수 있습니다. React Native가 아직 Native에서 JS로의 타입 안정성을 지원하지 않는 반면에, 사용자의 모든 JS 코드는 타입 안정성을 갖게 됩니다. 이렇게 하면 타입 안전성을 갖춘 네이티브 모듈로 쉽게 전환할 수 있습니다. 다음은 캘린더 모듈에 타입 안전성을 추가하는 예제입니다. 

\`\`\`jsx
/**
* This exposes the native CalendarModule module as a JS module. This has a
* function 'createCalendarEvent' which takes the following parameters:
*
* 1. String name: A string representing the name of the event
* 2. String location: A string representing the location of the event
*/
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules
interface CalendarInterface {
   createCalendarEvent(name: string, location: string): void;
}
export default CalendarModule as CalendarInterface;
\`\`\`

다른 JavaScript 파일에서는 네이티브 모듈에 액세스하여 다음과 같은 메소드를 호출할 수 있습니다. 

\`\`\`jsx
import CalendarModule from './CalendarModule';
CalendarModule.createCalendarEvent('foo', 'bar');
\`\`\`

> 위 예제는 \`CalendarModule\`을 가져오는 위치가 \`CalendarModule.js\` 와 동일한 계층에 있다고 가정합니다. 필요에 따라 상대 경로에서 가져오도록 변경합니다. 

### 인자 타입(유형)

JavaScript에서 네이티브 모듈 메소드가 호출되면, React Native는 JS 객체에서 Java 객체 아날로그로 인자를 전환합니다. 따라서 예를 들어, Java 네이티브 모듈 메소드가 double 타입을 받으면, JS에서는 number 타입으로 해당 메소드를 호출해야 합니다. React Native가 이러한 변환을 대신 처리해줍니다. 아래는 네이티브 메소드에서 지원하는 인자 타입과, 해당 타입에 매핑되는 JavaScript의 인자 타입 목록입니다. 

| JAVA          | JAVASCRIPT |
| :------------ | :--------- |
| Boolean       | ?boolean   |
| boolean       | boolean    |
| Double        | ?number    |
| double        | number     |
| String        | string     |
| Callback      | Function   |
| ReadableMap   | Object     |
| ReadableArray | Array      |

> 다음 타입들은 현재 지원되지만, TurboModules에서는 지원되지 않습니다.
> 사용하지 않는 것을 권장합니다. 
> - Integer -> ?number
> - int -> number
> - Float -> ?number
> - float -> number

위에 나열되지 않은 인자 타입의 경우, 변환을 직접 처리해야 합니다. 예를 들어, Android에서 \`Date\` 변환은 즉시 지원되지 않습니다. 네이티브 메소드에서 \`Date\` 타입의 변환은 다음과 같이 직접 처리해야 합니다. 

\`\`\`java
    String dateFormat = "yyyy-MM-dd";
    SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
    Calendar eStartDate = Calendar.getInstance();
    try {
        eStartDate.setTime(sdf.parse(startDate));
    }

\`\`\`

### 상수 내보내기

네이티브 모듈은 JS에서 사용할 수 있는 네이티브 메소드 \`getConstants()\` 를 구현함으로써 상수를 내보낼 수 있다. 아래 예제에서는 \`getConstants()\` 를 구현하고, JavaScript에서 액세스할 수 있는 \`DEFAULT_EVENT_NAME\` 상수가 포함된 맵을 반환합니다. 

\`\`\`java
@Override
public Map<String, Object> getConstants() {
   final Map<String, Object> constants = new HashMap<>();
   constants.put("DEFAULT_EVENT_NAME", "New Event");
   return constants;
}
\`\`\`

그런 다음 JS의 네이티브 모듈에서 \`getConstants\` 를 호출함으로써 해당 상수에 액세스할 수 있습니다. 

\`\`\`jsx
const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();
console.log(DEFAULT_EVENT_NAME);
\`\`\`

기술적으로는, 네이티브 모듈 객체에서 직접 \`getConstants()\` 로 내보낸 상수에 액세스할 수 있습니다. 그러나 이는 TurboModules에서는 더 이상 지원되지 않으므로, 위와 같은 접근 방식으로 전환하여 필요한 마이그레이션이 중단되지 않도록 하는 것을 권장하고 있습니다. 

> 현재 상수는 초기화 시에만 내보내기 때문에 런타임에 getConstants 값을 바꾸더라도 JavaScript 환경에 영향을 미치지 않습니다. 이는 TurboModules에서는 변경됩니다. TurboModules에서는, \`getConstants()\` 가 일반 네이티브 모듈 메소드로 전환되고, 각 호출이 네이티브 측에 전달됩니다. 

### 콜백

네이티브 모듈은 특별한 타입의 인자, "콜백"도 지원합니다. 콜백은 Java에서 JavaScript로, 비동기 메소드에 데이터를 넘겨주기 위해 사용됩니다. 또한 네이티브 측에서 JavaScript를 비동기적으로 실행하는 데에도 사용될 수 있습니다. 

콜백을 가진 네이티브 모듈을 생성하려면, 먼저 \`Callback\` 인터페이스를 가져오고, 네이티브 모듈 메소드에 \`Callback\` 타입의 새로운 파라미터를 추가해야 합니다. 콜백 인자에는 몇 가지 뉘앙스가 있으며, 이는 곧 TurboModules에도 적용될 것입니다. 우선, 함수 인자로는 successCallback과 failureCallback, 두 개의 콜백만을 받을 수 있습니다. 또한, 네이티브 모듈 메소드 호출의 마지막 인자가 함수인 경우, successCallback으로 인식되며, 뒤에서 두 번째 인자가 함수인 경우 failureCallback으로 인식됩니다. 

\`\`\`java
import com.facebook.react.bridge.Callback;

@ReactMethod
public void createCalendarEvent(String name, String location, Callback callBack) {
}
\`\`\`

Java 메소드에서 콜백을 호출하여 JavaScript에 넘겨줄 데이터를 제공할 수 있습니다. 직렬화할 수 있는 데이터만 네이티브 코드에서 JavaScript로 전달할 수 있다는 점에 주의하십시오. 네이티브 객체를 다시 전달해야하는 경우 \`WriteableMaps\` 를 사용하고, 컬렉션을 사용해야 하는 경우 \`WriteableArrays\` 를 사용합니다. 또한, 해당 콜백이 네이티브 함수가 완료된 이후 즉시 호출되지 않았음을 강조하는 것이 중요합니다. 아래 예제에서는 이전 호출에서 생성된 이벤트의 ID가 콜백으로 전달됩니다. 

\`\`\`java
  @ReactMethod
   public void createCalendarEvent(String name, String location, Callback callBack) {
       Integer eventId = ...
       callback.invoke(eventId);
   }
\`\`\`

그런 다음 JavaScript를 사용해 이 메소드에 액세스할 수 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEvent(
    'Party',
    'My House',
    (eventId) => {
      console.log(\`Created a new event with id \${eventId}\`);
    }
  );
};
\`\`\`

또 한 가지 주의해야할 점은, 네이티브 모듈 메소드가 한 번에 하나의 콜백만 호출할 수 있다는 점입니다. 즉, 성공 콜백 또는 실패 콜백 둘 중 하나를 호출할 수 있지만, 둘 다 호출할 수는 없으며, 각 콜백은 최대 한 번만 호출할 수 있습니다. 그러나 네이티브 모듈은 콜백을 저장해두고 나중에 호출할 수 있습니다. 

콜백과 관련된 오류 처리에는 두 가지 접근 방법이 있습니다. 첫 번째는 Node 컨벤션을 따라 콜백에 전달되는 첫 번째 인자를 오류 객체로 처리하는 것입니다. 

\`\`\`java
@ReactMethod
public void createCalendarEvent(String name, String location, Callback myFailureCallback, Callback callBack) {
    Integer eventId = ...
    callBack.invoke(null, eventId);
}
\`\`\`

그런 다음 JavaScript에서 첫 번째 인자를 체크해 오류가 전달되었는지 확인할 수 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEventCallback(
    'testName',
    'testLocation',
    (error, eventId) => {
      if (error) {
        console.error(\`Error found! \${error}\`);
      }
      console.log(\`event id \${eventId} returned\`);
    }
  );
};
\`\`\`

다른 옵션은 onSuccess 및 onFailure 콜백을 사용하는 것입니다. 

\`\`\`java
@ReactMethod
public void createCalendarEvent(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
}
\`\`\`

그리고 나서 JavaScript에서 오류와 성공 응답에 대해 별도의 콜백을 추가할 수 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEventCallback(
    'testName',
    'testLocation',
    (error) => {
      console.error(\`Error found! \${error}\`);
    },
    (eventId) => {
      console.log(\`event id \${eventId} returned\`);
    }
  );
};
\`\`\`

### 프로미스 (Promise)

또한 네이티브 모듈은 [프로미스(Promise)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 수행할 수 있습니다. 프로미스를 통해, 특히 ES2016의 [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) 구문을 사용할 때 JavaScript를 단순화할 수 있습니다. 네이티브 모듈 Java 메소드의 마지막 파라미터가 프로미스일 때, 이에 상응하는 JS 메소드는 JS 프로미스 객체를 반환합니다. 

콜백 대신에 프로미스를 사용하기 위해 위의 코드를 리팩토링한 결과는 다음과 같습니다. 

\`\`\`java
import com.facebook.react.bridge.Promise;

@ReactMethod
public void createCalendarEvent(String name, String location, Promise promise) {
    try {
        Integer eventId = ...
        promise.resolve(eventId);
    } catch(Exception e) {
        promise.reject("Create Event Error", e);
    }
}
\`\`\`

> 콜백과 마찬가지로, 네이티브 모듈 메소드는 프로미스를 거부(reject)하거나 해결(resolve)할 수 있으나, 둘 다 수행할 수는 없으며 최대 한 번만 수행할 수 있습니다.  즉, 성공 콜백 또는 실패 콜백 둘 중 하나를 호출할 수 있지만, 둘 다 호출할 수는 없으며, 각 콜백은 최대 한 번만 호출할 수 있습니다. 그러나 네이티브 모듈은 콜백을 저장해두고 나중에 호출할 수 있습니다.  

JavaScript에서 이 메소드와 상응하는 메소드는 프로미스를 리턴합니다. 이는 비동기 함수 내에서 \`await\` 키워드를 사용해 호출하고 결과를 기다릴 수 있다는 것을 의미합니다. 

\`\`\`jsx
const onSubmit = async () => {
  try {
    const eventId = await CalendarModule.createCalendarEvent(
      'Party',
      'My House'
    );
    console.log(\`Created a new event with id \${eventId}\`);
  } catch (e) {
    console.error(e);
  }
};
\`\`\`

거부(reject) 메소드는 다음 인자들의 다른 조합들을 받습니다. 

\`\`\`java
String code, String message, WritableMap userInfo, Throwable throwable
\`\`\`

자세한 내용은 [여기](https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java#L1) \`Promise.java\` 인터페이스 부분을 살펴보세요. \`userInfo\`가 제공되지 않으면, React Native는 이를 null로 설정하고, 나머지 파라미터의 경우 기본값을 사용합니다. \`message\` 인자는 오류 콜 스택의 상단에 오류 \`message\` 를 제공합니다. 아래 예제는 다음과 같은 Java에서의 reject 호출에 대해 JavaScript에서 표시되는 오류 메세지입니다. 

Java rejct 호출: 

\`\`\`java
promise.reject("Create Event error", "Error parsing date", e);
\`\`\`

프로미스가 거부(reject)되었을 때 React Native 앱의 오류 메세지:

![Image of error message in React Native app.](https://reactnative.dev/docs/assets/native-modules-android-errorscreen.png)

### JavaScript에 이벤트 보내기

네이티브 모듈은 직접 호출되지 않고도 JavaScript에 이벤트를 전송할 수 있습니다. 예를 들어, 네이티브 Android 캘린더 앱의 캘린더 이벤트가 곧 발생한다는 리마인더를 JavaScript에 보낼 수 있습니다. 가장 쉬운 방법은 아래 코드 조각에서와 같이 \`ReactContext\` 를 통해 얻을 수 있는 \`RCTDeviceEventEmitter\` 를 사용하는 것입니다. 

\`\`\`java
...
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
...
private void sendEvent(ReactContext reactContext,
                      String eventName,
                      @Nullable WritableMap params) {
 reactContext
     .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
     .emit(eventName, params);
}
...
WritableMap params = Arguments.createMap();
params.putString("eventProperty", "someValue");
...
sendEvent(reactContext, "EventReminder", params);
\`\`\`

그런 다음 JavaScript 모듈은 [NativeEventEmitter](https://github.com/facebook/react-native/blob/master/Libraries/EventEmitter/NativeEventEmitter.js) 클래스에서 \`addListener\` 로 이벤트를 수신하기 위해서 등록할 수 있습니다. 

\`\`\`jsx
import { NativeEventEmitter, NativeModules } from 'react-native';
...

 componentDidMount() {
   ...
   const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
   this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
      console.log(event.eventProperty) // "someValue"
   });
   ...
 }

 componentWillUnmount() {
   this.eventListener.remove(); //Removes the listener
 }
\`\`\`

### startActivityForResult에서 액티비티 결과 얻기

\`startActivityForResult\` 로 시작한 액티비티의 결과를 얻으려면, \`onActivityResult\`를 들어야 합니다. 그러려면 \`BaseActivityEventListener\`를 확장하거나 \`ActivityEventListener\`를 구현해야 합니다. 전자가 API 변화에 보다 탄력적이기 때문에 선호됩니다. 그리고 나서 모듈의 생성자에 다음과 같이 리스너를 등록해야 합니다. 

\`\`\`java
reactContext.addActivityEventListener(mActivityResultListener);
\`\`\`

이제 다음 메소드를 구현하여 \`onActivityResult\`를 들을 수 있습니다. 

\`\`\`java
@Override
public void onActivityResult(
 final Activity activity,
 final int requestCode,
 final int resultCode,
 final Intent intent) {
 // Your logic here
}
\`\`\`

이를 시연하기 위해, 기본 이미지 피커를 구현해봅시다. 이미지 피커는 \`pickImage\` 메소드를 JavaScript에 노출시켜, 호출 시 이미지의 경로를 반환합니다. 

\`\`\`java
public class ImagePickerModule extends ReactContextBaseJavaModule {

  private static final int IMAGE_PICKER_REQUEST = 1;
  private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
  private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
  private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
  private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

  private Promise mPickerPromise;

  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
      if (requestCode == IMAGE_PICKER_REQUEST) {
        if (mPickerPromise != null) {
          if (resultCode == Activity.RESULT_CANCELED) {
            mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
          } else if (resultCode == Activity.RESULT_OK) {
            Uri uri = intent.getData();

            if (uri == null) {
              mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
            } else {
              mPickerPromise.resolve(uri.toString());
            }
          }

          mPickerPromise = null;
        }
      }
    }
  };

  ImagePickerModule(ReactApplicationContext reactContext) {
    super(reactContext);

    // Add the listener for \`onActivityResult\`
    reactContext.addActivityEventListener(mActivityEventListener);
  }

  @Override
  public String getName() {
    return "ImagePickerModule";
  }

  @ReactMethod
  public void pickImage(final Promise promise) {
    Activity currentActivity = getCurrentActivity();

    if (currentActivity == null) {
      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
      return;
    }

    // Store the promise to resolve/reject when picker returns data
    mPickerPromise = promise;

    try {
      final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

      galleryIntent.setType("image/*");

      final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

      currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
    } catch (Exception e) {
      mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
      mPickerPromise = null;
    }
  }
}
\`\`\`

### 생명 주기 이벤트 Listening하기

\`onResume\`, \`onPause\` 와 같은 액티비티의 생명주기 이벤트를 Listening하는 것은 \`ActivityEventListener\` 가 구현된 방식과 매우 비슷합니다. 모듈은 \`LifecycleEventListener\` 를 반드시 구현해야 합니다. 그리고 나서 모듈의 생성자에 다음과 같이 리스너를 등록해야 합니다. 

\`\`\`java
reactContext.addLifecycleEventListener(this);
\`\`\`

이제 다음 메소드를 구현해 액티비티의 생명주기 이벤트를 들을 수 있습니다. 

\`\`\`java
@Override
public void onHostResume() {
   // Activity \`onResume\`
}
@Override
public void onHostPause() {
   // Activity \`onPause\`
}
@Override
public void onHostDestroy() {
   // Activity \`onDestroy\`
}
\`\`\`

### 스레딩

현재까지 Android에서 모든 네이티브 모듈 비동기 메서드는 하나의 스레드에서 실행됩니다. 현재의 스레드 할당은 향후 변경될 수 있으므로, 네이티브 모듈은 호출되는 스레드에 대해 가정하지 않아야 합니다. 만약 blocking 호출이 필요하면, 내부적으로 관리되는 작업자 스레드와, 해당 스레드로부터 배포되는 모든 콜백에 무거운 작업이 전송되어야 합니다. 
`

export const text3_1 = `
# iOS 네이티브 모듈

iOS용 네이티브 모듈에 오신 것을 환영합니다. 네이티브 모듈이 무엇인지 소개하는 [네이티브 모듈 소개](https://reactnative.dev/docs/native-modules-intro)를 먼저 읽어보시기 바랍니다.

## 캘린더 네이티브 모듈 생성하기

다음 가이드에서는 JavaScript에서 Apple의 캘린더 API에 액세스할 수 있도록 해주는 네이티브 모듈인 \`CalendarModule\` 을 생성합니다. 마지막에는 캘린더 이벤트를 생성하는 네이티브 메소드를 호출해 JavaScript에서  \`CalendarModule.createCalendarEvent('Dinner Party', 'My House');\` 를 호출할 수 있게 됩니다. 

> React Native 팀은 현재 네이티브 모듈 시스템의 재구성을 진행하고 있습니다. 새로운 시스템은 TurboModules라고 불리며, React Native 브릿지에 의존하지 않고도 JavaScript와 네이티브 간에 더 효율적인 타입 세이프 통신을  가능하게 할 것입니다. 기존 네이티브 모듈 시스템에서는 불가능했던 새 확장기능도 사용할 수 있습니다. 자세한 내용은 [여기](https://github.com/react-native-community/discussions-and-proposals/issues/40)에서 확인할 수 있습니다. 이 문서 전반에 걸쳐 우리는 네이티브 모듈 부분 중에서 TurboModules 릴리즈에서 변경될 부분과, TurboModules로의 원활한 업그레이드를 준비하는 방법에 대한 참고 사항을 추가해두었습니다. 

### 설정

시작하려면 XCode에서 React Native 애플리케이션의 iOS 프로젝트를 여십시오. React Native 앱 내부에서 iOS 프로젝트를 찾을 수 있습니다. 

![Image of opening up an iOS project within a React Native app inside of xCode.](https://reactnative.dev/docs/assets/native-modules-ios-open-project.png)

네이티브 코드 작성에는 Xcode를 사용하는 것이 좋습니다. Xcode는 iOS 개발을 위해 구축되었으며, 이를 사용하면 코드 구문 오류와 같은 사소한 문제들을 신속하게 해결할 수 있습니다. 

### 사용자 정의 네이티브 모듈 파일 생성하기

첫 번째 단계는 사용자 정의 네이티브 모듈 헤더 및 구현 파일을 생성하는 것입니다. \`RCTCalendarModule.h\` 라는 새 파일을 생성합니다. 

![Image of creating a class called  RCTCalendarModule.h.](https://reactnative.dev/docs/assets/native-modules-ios-add-class.png)

그리고 다음 내용을 추가합니다. 

\`\`\`swift
//  RCTCalendarModule.h
#import <React/RCTBridgeModule.h>
@interface RCTCalendarModule : NSObject <RCTBridgeModule>
@end

\`\`\`

작성 중인 네이티브 모듈에 적합한 어떤 이름이든 사용할 수 있습니다. 캘린더 네이티브 모듈을 생성 중이므로, 클래스의 이름은 \`RCTCalendarModule\` 로 지정합니다. ObjC는 Java나 C++와 같은 네임스페이스에 대해 언어 수준에서 지원하지 않기 때문에, 클래스 이름을 하위 문자열로 지정하는 컨벤션이 있습니다. 이는 애플리케이션 이름 또는 인프라 이름의 줄임말일 수 있습니다. 이 예제에서 RCT는 React를 참조합니다. 

아래처럼, CalendarModule 클래스는 \`RCTBridgeModule\` 프로토콜을 구현합니다. 네이티브 모듈은 \`RCTBridgeModule\` 프로토콜을 구현하는 Objective-C 클래스입니다. 

다음으로, 네이티브 모듈 구현을 시작하겠습니다. 동일한 폴더에서, 구현 파일 \`RCTCalendarModule.m\` 에 해당하는 파일을 생성하고 다음 내용을 추가합니다. 

\`\`\`swift
// RCTCalendarModule.m
#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

@end

\`\`\`

### 모듈 이름

현재 \`RCTCalendarModule.m\` 네이티브 모듈에는 \`RCT_EXPORT_MODULE\` 매크로만 포함되어 있으며, 이 매크로에서는 네이티브 모듈 클래스를 React Native로 내보내고 등록합니다. 또한  \`RCT_EXPORT_MODULE\` 매크로는 JavaScript 코드에서처럼 모듈에 액세스할 수 있는 이름을 지정하는 선택적 인자를 받습니다. 

이 인자는 문자열 리터럴이 아닙니다. 아래 예제에서는 \`RCT_EXPORT_MODULE("CalendarModuleFoo")\`가 아닌  \`RCT_EXPORT_MODULE(CalendarModuleFoo)\`가 전달됩니다. 

\`\`\`objective-c
// To export a module named CalendarModuleFoo
RCT_EXPORT_MODULE(CalendarModuleFoo);
\`\`\`

그러면 다음과 같이 JS에서 네이티브 모듈에 액세스할 수 있습니다. 

\`\`\`jsx
const { CalendarModuleFoo } = ReactNative.NativeModules;
\`\`\`

이름을 지정하지 않으면, JavaScript 모듈 이름은 "RCT" 또는 "RX" 접두사를 제거한 Objective-C 클래스명과 일치하게 됩니다. 

아래 예제에 따라 아무 인자 없이  \`RCT_EXPORT_MODULE\` 를 호출해봅시다. 결과적으로, 해당 모듈은 RCT가 제거된 Objective-C 클래스명인 \`CalendarModule\` 이라는 이름을 사용해 React Native에 노출됩니다. 

\`\`\`objective-c
// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT_EXPORT_MODULE();
\`\`\`

그러면 다음과 같이 JS에서 네이티브 모듈에 액세스할 수 있습니다. 

\`\`\`jsx
const { CalendarModule } = ReactNative.NativeModules;
\`\`\`

### 네이티브 메서드를 JavaScript로 내보내기

React Native는 명시적으로 지시하지 않는 한 JavaScript에 네이티브 모듈의 메소드를 노출시키지 않습니다. 이 작업은 \`RCT_EXPORT_METHOD\` 매크로를 사용해 수행할 수 있습니다.  \`RCT_EXPORT_METHOD\` 매크로에서 작성된 메소드들은 비동기적이므로, 반환 타입은 항상 비어 있습니다. \`RCT_EXPORT_METHOD\` 메소드에서 JavaScript로 결과를 전달하려면 콜백이나 이벤트 방출(아래에서 다룰 예정)을 사용할 수 있습니다. 이제 \`RCT_EXPORT_METHOD\` 매크로를 사용해서  \`CalendarModule\` 네이티브 모듈에 네이티브 메소드를 설정해보겠습니다. 이 메소드를  \`createCalendarEvent()\` 라고 부르고, 이름과 위치 인자를 문자열로 지정합니다. 인자 타입 옵션에 대해서는 잠시 후에 설명하겠습니다. 

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
}
\`\`\`

> \`RCT_EXPORT_METHOD\` 매크로는, 메소드가 RCT 인자 전환에 의존하지 않는 한 TurboModules에서 필요하지 않습니다(아래 인자 타입 참고). 궁극적으로 React Native는 \`RCT_EXPORT_MACRO\` 를 제거할 것이기 때문에, \`RCTConvert\` 사용을 장려합니다. 대신에 메소드 바디에서 인자 전환을 수행할 수 있습니다. 

 \`createCalendarEvent()\` 메소드의 기능을 구현하기 전에, 메소드에 콘솔 로그를 추가하면 React Native 애플리케이션의 JavaScript에서 해당 메소드가 호출되었는지 확인할 수 있습니다. React의 \`RCTLog\` API를 사용합니다. 파일 맨 위에 있는 헤더를 가져온 다음, 로그 호출을 추가해보겠습니다. 

\`\`\`swift
#import <React/RCTLog.h>
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
\`\`\`

### 동기식 메소드

\`RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD\` 를 사용해서 동기식 네이티브 메소드를 생성할 수 있습니다. 

\`\`\`swift
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}
\`\`\`

이 메소드의 반환 타입은 객체 타입(id)이어야 하며, JSON으로 직렬화할 수 있어야 합니다. 즉, hook은 0 또는 JSON 값만 반환할 수 있습니다. (예: NSNumber, NSString, NSArray, NSDictionary)

현재로서는, 동기식 메소드의 사용은 권장되지 않습니다. 동기식으로 메소드를 호출하는 것은 강력한 성능 저하를 가져올 수 있고, 네이티브 모듈에 스레드 관련 버그를 발생시킬 수 있기 때문입니다. 또한, \`RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD\` 를 사용할 경우 앱은 더 이상 Google Chrome 디버거를 사용할 수 없습니다. 이는 동기식 메소드에는 앱과 메모리를 공유할 JS VM이 필요하기 때문입니다. Google Chrome 디버거의 경우, React Native는 Google Chrome 내부의 JS VM에서 실행되며, 웹소켓을 통해 모바일 기기와 비동기적으로 통신합니다. 

### 구현한 모듈 테스트하기

iOS에서 네이티브 모듈의 기본 토대를 완성했습니다. 네이티브 모듈에 액세스하고 해당 모듈이 내보내고 있는 메소드를 JavaScript에서 호출하여 테스트해봅시다. 

애플리케이션에서 네이티브 모듈의 \`createCalendarEvent()\` 호출을 추가할 위치를 찾습니다. 아래는 앱에서 추가할 수 있는 \`NewModuleButton\` 컴포넌트의 예시입니다. \`NewModuleButton\` 안의 \`onPress()\` 함수에서 네이티브 모듈을 호출할 수 있습니다. 

\`\`\`jsx
import React from 'react';
import { NativeModules, Button } from 'react-native';

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
\`\`\`

JavaScript에서 네이티브 모듈에 액세스하려면, 먼저 React Native에서 \`NativeModules\` 를 가져와야 합니다. 

\`\`\`jsx
import { NativeModules } from 'react-native';
\`\`\`

그런 다음 \`NativeModules\` 중에서  \`CalendarModule\` 네이티브 모듈에 액세스할 수 있습니다.

\`\`\`jsx
const { CalendarModule } = NativeModules;
\`\`\`

이제 CalendarModule 네이티브 모듈을 사용할 수 있으므로, \`createCalendarEvent()\` 네이티브 메소드를 호출할 수 있습니다. 아래에는, \`NewModuleButton\`에 \`onPress()\` 메소드가 추가되어 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEvent('testName', 'testLocation');
};
\`\`\`

마지막 단계는, 최신 네이티브 코드 (새로운 네이티브 모듈과 함께!)를 사용하기 위해서 React Native 앱을 다시 빌드하는 것입니다. React Native 애플리케이션이 위치한 곳의 커맨드 라인에서 다음을 실행하십시오. 

\`\`\`jsx
npx react-native run-ios
\`\`\`

### 코드에 적용 후 빌드하기

가이드를 살펴본 후에 네이티브 모듈에 이를 적용할 때, JavaScript에서 최신 변경 사항에 액세스하려면 애플리케이션의 네이티브를 다시 빌드해야 합니다. 이는 작성 중인 코드가 애플리케이션의 네이티브 부분에 있기 때문입니다. React Native의 Metro 번들러는 JavaScript의 변경 사항을 확인하고 즉시 다시 빌드할 수 있지만, 네이티브 코드에서는 그렇지 않습니다. 따라서 최신 네이티브 변경 사항을 테스트하려면 \`npx react-native run-ios\` 명령을 사용해 다시 빌드해야 합니다.

### 복습✨

이제 앱의 네이티브 모듈에서 \`createCalendarEvent()\` 메서드를 호출할 수 있습니다. 해당 함수에서 \`RCTLog\` 를 사용하므로, [앱에서 디버깅 모드를 활성화]()하고 Chrome이나 모바일 앱 디버거 Flipper에서 JS 콘솔을 확인함으로써 네이티브 메소드가 호출되었는지 확인할 수 있습니다. 네이티브 모듈 메소드를 호출할 때마다 \`RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);\` 메세지를 확인해야 합니다. 

![Image of logs.](https://reactnative.dev/docs/assets/native-modules-ios-logs.png)

iOS 네이티브 모듈을 생성하고, React Native 애플리케이션의 JavaScript에서 해당 모듈의 메소드를 호출했습니다. 이제 네이티브 모듈 메서드에서 사용 가능한 인자 타입과, 네이티브 모듈에서의 콜백 및 프로미스 설정 방법에 대해 알아보겠습니다. 

## 캘린더 모듈 생성 이후

### Better Native Module Export[#](https://reactnative.dev/docs/native-modules-ios#better-native-module-export)

위와 같이 네이티브 모듈을 \`NativeModules\`에서 떼어내어 가져오는 것은 조금 세련되지 못한 방법입니다. 

사용자가 네이티브 모듈에 액세스할 때마다 이 작업을 수행할 필요가 없도록 하려면, 해당 모듈에 대한 JavaScript wrapper를 만들어야 합니다. JavaScript 파일 \`CalendarModule.js\`을 작성하고 그 안에 다음 내용을 작성하십시오. 

\`\`\`jsx
/**
* This exposes the native CalendarModule module as a JS module. This has a
* function 'createCalendarEvent' which takes the following parameters:

* 1. String name: A string representing the name of the event
* 2. String location: A string representing the location of the event
*/
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;
export default CalendarModule;
\`\`\`

또한 이 JavaScript 파일은 JavaScript 사이드 기능을 추가할 수 있는 좋은 위치가 됩니다. 예를 들어, TypeScript와 같은 타입 시스템을 사용하는 경우, 네이티브 모듈에 대한 타입 주석을 추가할 수 있습니다. React Native는 아직 네이티브에서 JS로의 타입 안정성을 지원하지 않지만, 타입 주석이 있으면 사용자의 모든 JS 코드가 타입 안정성을 갖게 됩니다. 또한 이러한 주석을 사용하면 타입 안전성을 갖춘 네이티브 모듈로 쉽게 전환할 수 있습니다. 다음은 캘린더 모듈에 타입 안전성을 추가하는 예제입니다. 

\`\`\`jsx
/**
* This exposes the native CalendarModule module as a JS module. This has a
* function 'createCalendarEvent' which takes the following parameters:
*
* 1. String name: A string representing the name of the event
* 2. String location: A string representing the location of the event
*/
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules
interface CalendarInterface {
   createCalendarEvent(name: string, location: string): void;
}
export default CalendarModule as CalendarInterface;
\`\`\`

다른 JavaScript 파일에서는 네이티브 모듈에 액세스하여 다음과 같은 메소드를 호출할 수 있습니다. 

\`\`\`jsx
import NativeCalendarModule from './NativeCalendarModule';
NativeCalendarModule.createCalendarEvent('foo', 'bar');
\`\`\`

> 위 예제는 \`CalendarModule\`을 가져오는 위치가 \`CalendarModule.js\` 와 동일한 계층에 있다고 가정합니다. 필요에 따라 상대 경로에서 가져오도록 변경합니다. 

### 인자 타입(유형)

JavaScript에서 네이티브 모듈 메소드가 호출되면, React Native는 JS 객체에서 Java 객체 아날로그로 인자를 전환합니다. 따라서 예를 들어, Objective-C 네이티브 모듈 메소드가 NSNumber 타입을 받으면, JS에서는 number 타입으로 해당 메소드를 호출해야 합니다. React Native가 이러한 변환을 대신 처리해줍니다. 아래는 네이티브 메소드에서 지원하는 인자 타입과, 해당 타입에 매핑되는 JavaScript의 인자 타입 목록입니다. 

| OBJECTIVE-C                                   | JAVASCRIPT         |
| :-------------------------------------------- | :----------------- |
| NSString                                      | string, ?string    |
| BOOL                                          | boolean            |
| NSNumber                                      | ?boolean           |
| double                                        | number             |
| NSNumber                                      | ?number            |
| NSArray                                       | Array, ?Array      |
| NSDictionary                                  | Object, ?Object    |
| RCTResponseSenderBlock                        | Function (success) |
| RCTResponseSenderBlock                        | Function (failure) |
| RCTResponseErrorBlock                         | Function (failure) |
| RCTPromiseResolveBlock                        | Promise            |
| RCTPromiseRejectBlock                         | Promise            |

> 다음 타입들은 현재 지원되지만, TurboModules에서는 지원되지 않습니다.
> 사용하지 않는 것을 권장합니다. 
> - Function (failure) -> RCTResponseErrorBlock
> - Number -> NSInteger
> - Number -> CGFloat
> - Number -> float

iOS의 경우, \`RCTConvert\` 에서 지원되는 모든 인수 타입을 사용해 네이티브 모듈 메소드를 작성할 수 있습니다 (지원되는 항목에 대한 자세한 내용은 [RCTConvert](https://github.com/facebook/react-native/blob/master/React/Base/RCTConvert.h) 참조). RCTConvert helper 함수는 모두 JSON 값을 입력으로 받아들여 이를 네이티브 Objective-C 타입 또는 클래스에 매핑합니다. 

### 상수 내보내기

네이티브 모듈은 네이티브 메서드 \`constantToExport()\`를 재정의(오버라이딩)하여 상수를 내보낼 수 있습니다. 아래의 \`constantToExport()\` 는 재정의되었으며, JavaScript에서 다음과 같이 액세스할 수 있는 기본 이벤트 이름 속성을 포함한 Dictionary를 반환합니다. 

\`\`\`swift
- (NSDictionary *)constantsToExport
{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}
\`\`\`

{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}

그런 다음 JS의 네이티브 모듈에서 다음과 같이 \`getConstants()\` 를 호출함으로써 해당 상수에 액세스할 수 있습니다. 

\`\`\`jsx
const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();
console.log(DEFAULT_EVENT_NAME);
\`\`\`

기술적으로는, 네이티브 모듈 객체에서 직접 \`getConstants()\` 로 내보낸 상수에 액세스할 수 있습니다. 그러나 이는 TurboModules에서는 더 이상 지원되지 않으므로, 위와 같은 접근 방식으로 전환하여 필요한 마이그레이션이 중단되지 않도록 하는 것을 권장하고 있습니다. 

> 상수는 초기화 시에만 내보내므로, 런타임에 \`constantsToExport()\` 값을 변경해도 JavaScript 환경에는 영향을 미치지 않습니다. 

iOS에서는  \`constantsToExport()\` 를 오버라라이드한 경우, JavaScript 코드가 실행되기 전에, React Native가 메인 스레드에서 모듈을 초기화해야 하는지 여부를 알 수 있도록  \`+ requiresMainQueueSetup\` 를 구현해야 합니다. 그렇지 않으면, 향후 모듈이 백그라운드 스레드에서 초기화될 때 명시적으로 \`+ requiresMainQueueSetup:\` 를 선택하지 않는 이상 경고가 표시됩니다. 모듈에서 UIkit에 액세스할 필요가 없는 경우,  \`+ requiresMainQueueSetup\` 에 NO로 응답해야 합니다. 

### 콜백

네이티브 모듈은 특별한 타입의 인자, "콜백"도 지원합니다. 콜백은 Objective-C에서 JavaScript로, 비동기 메소드에 데이터를 넘겨주기 위해 사용됩니다. 또한 네이티브 측에서 JavaScript를 비동기적으로 실행하는 데에도 사용될 수 있습니다. 

iOS의 경우, 콜백은 \`RCTResponseSenderBlock\` 타입을 사용해 구현됩니다. 아래 예제에서는 콜백 파라미터 \`myCallBack\`이 \`createCalendarEventMethod()\`에 추가되었습니다. 

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                location:(NSString *)location
                myCallback:(RCTResponseSenderBlock)callback)

\`\`\`

그런 다음 네이티브 함수에서 콜백을 호출해, 배열에서 JavaScript에 전달할 결과를 제공할 수 있습니다.  \`RCTResponseSenderBlock\` 는 하나의 인자(JavaScript 콜백에 전달될 배열 파라미터)만 허용한다는 점에 유의하십시오. 아래 예제에서는 이전 호출에서 생성된 이벤트의 ID를 다시 전달합니다. 

> 네이티브 함수가 완료된 직후에 콜백이 호출되지 않는 다는 점을 강조해야 합니다. 통신이 비동기적이라는 점을 기억하십시오. 

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
 NSInteger eventId = ...
 callback(@[@(eventId)]);

 RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}

\`\`\`

그런 다음 JavaScript를 사용해 이 메소드에 액세스할 수 있습니다. 

\`\`\`jsx
const onSubmit = () => {
  CalendarModule.createCalendarEvent(
    'Party',
    '04-12-2020',
    (eventId) => {
      console.log(\`Created a new event with id \${eventId}\`);
    }
  );
};
\`\`\`

네이티브 모듈은 콜백을 한 번만 호출해야 하지만, 콜백을 저장해두었다가 나중에 호출할 수 있습니다. 이러한 패턴은 위임이 필요한 iOS API를 래핑하는 데에 자주 사용됩니다 (예: [RCTAlert Manager](https://github.com/facebook/react-native/blob/3a11f0536ea65b87dc0f006665f16a87cfa14b5e/React/CoreModules/RCTAlertManager.mm) 참조). 콜백이 호출되지 않으면, 일부 메모리가 누수됩니다.

콜백과 관련된 오류 처리에는 두 가지 접근 방법이 있습니다. 첫 번째는 Node 컨벤션을 따라 콜백에 전달되는 첫 번째 인자를 오류 객체로 처리하는 것입니다. 

콜백에 대한 오류 처리에는 두 가지 접근 방법이 있습니다. 첫 번째는 Node의 컨벤션을 따라

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
  NSNumber *eventId = [NSNumber numberWithInt:123];
  callback(@[[NSNull null], eventId]);
}
\`\`\`

그런 다음 JavaScript에서 첫 번째 인자를 체크해 오류가 전달되었는지 확인할 수 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEventCallback(
    'testName',
    'testLocation',
    (error, eventId) => {
      if (error) {
        console.error(\`Error found! \${error}\`);
      }
      console.log(\`event id \${eventId} returned\`);
    }
  );
};
\`\`\`

다른 옵션은 onSuccess 및 onFailure 콜백을 사용하는 것입니다. 

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title
                  location:(NSString *)location
                  errorCallback: (RCTResponseSenderBlock)errorCallback
                  successCallback: (RCTResponseSenderBlock)successCallback)
{
  @try {
    NSNumber *eventId = [NSNumber numberWithInt:123];
    successCallback(@[eventId]);
  }

  @catch ( NSException *e ) {
    errorCallback(@[e]);
  }
}
\`\`\`

그리고 나서 JavaScript에서 오류와 성공 응답에 대해 별도의 콜백을 추가할 수 있습니다. 

\`\`\`jsx
const onPress = () => {
  CalendarModule.createCalendarEventCallback(
    'testName',
    'testLocation',
    (error) => {
      console.error(\`Error found! \${error}\`);
    },
    (eventId) => {
      console.log(\`event id \${eventId} returned\`);
    }
  );
};
\`\`\`

JavaScript에 오류로 취급되는 객체를 전달하려면 [RCTUtils.h]의 \`RCTMakeError\` 를 사용합니다. 지금은 JavaScript에 오류 형태의 사전만 전달하지만, React Native는 향후 실제 JavaScript 오류 객체를 자동으로 생성하는 것을 목표로 하고 있습니다. 또한 오류 콜백에 사용되며  \`NSError \\* object\` 를 받는 \`RCTResponseErrorBlock\` 인자를 제공할 수 있습니다. 이 인자 유형은 TurboModules에서 지원되지 않습니다. 

### 프로미스 (Promise)

또한 네이티브 모듈은 프로미스(Promise)를 수행할 수 있습니다. 프로미스를 통해, 특히 ES2016의 \`async/await\` 구문을 사용할 때 JavaScript를 단순화할 수 있습니다. 네이티브 모듈 메소드의 마지막 파라미터가 \`RCTPromiseResolveBlock\`와 \`RCTPromiseRejectBlock\` 일 때, 이에 상응하는 JS 메소드는 JS 프로미스 객체를 반환합니다. 

콜백 대신에 프로미스를 사용하기 위해 위의 코드를 리팩토링한 결과는 다음과 같습니다. 

\`\`\`objc
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
 NSInteger eventId = createCalendarEvent();
 if (eventId) {
    resolve(@[@(eventId)]);
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}

\`\`\`

JavaScript에서 이 메소드와 상응하는 메소드는 프로미스를 반환합니다. 이는 비동기 함수 내에서 \`await\` 키워드를 사용해 호출하고 결과를 기다릴 수 있다는 것을 의미합니다. 

\`\`\`jsx
const onSubmit = async () => {
  try {
    const eventId = await CalendarModule.createCalendarEvent(
      'Party',
      'my house'
    );
    console.log(\`Created a new event with id \${eventId}\`);
  } catch (e) {
    console.error(e);
  }
};
\`\`\`

### JavaScript에 이벤트 전달하기

네이티브 모듈은 직접 호출되지 않고도 JavaScript에 이벤트를 전송할 수 있습니다. 예를 들어, 네이티브 iOS 캘린더 앱의 캘린더 이벤트가 곧 발생한다는 리마인더를 JavaScript에 보낼 수 있습니다. 그렇게 하기 위해서 가장 선호되는 방식은  \`RCTEventEmitter\`를 하위클래스화하고, \`supportedEvents\`를 구현하고,  \`sendEventWithName\`를 자체 호출하는 것입니다. 

헤더 클래스를 업데이트하여 \`RCTEventEmitter\` 및 \`RCTEventEmitter\` 하위 클래스를 가져옵니다. 

\`\`\`objc
//  CalendarModule.h

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface CalendarModule : RCTEventEmitter <RCTBridgeModule>
@end

\`\`\`

JavaScript 코드는 모듈 주변에 새 \`NativeEventEmitter\` 인스턴스를 생성하여 이러한 이벤트를 구독할 수 있습니다. 

수신자가 없는 상태에서 이벤트를 방출시킴으로써 불필요하게 자원을 낭비하는 경우, 경고가 표시됩니다. 이를 방지하고 모듈의 작업량을 최적화하기 위해서(예: 업스트림 알림의 구독을 취소하거나 백그라운드 작업을 중단하는 것) \`RCTEventEmitter\` 하위 클래스에서  \`startObserving\`과  \`startObserving\` 를 재정의할 수 있습니다. 

\`\`\`objc
@implementation CalendarManager
{
  bool hasListeners;
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  if (hasListeners) { // Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
}

\`\`\`

### 스레딩

네이티브 모듈이 자체 메서드 큐를 제공하지 않는 한, 호출되는 스레드에 대한 어떠한 가정도 해서는 안 됩니다. 현재 네이티브 모듈이 메서드 큐를 제공하지 않는다면, React Native는 별도의 GCD 큐를 생성하고 그 곳에서 해당 메서드를 호출합니다. 이는 구현 세부 정보이므로 변경될 수 있습니다. 네이티브 모듈에 명시적으로 메서드 큐를 제공하고 싶다면, 해당 네이티브 모듈에서 \`(dispatch_queue_t) methodQueue\` 메소드를 명시적으로 재정의합니다. 예를 들어, 메인 스레드 전용 iOS API를 사용해야 하는 경우, 다음을 통해 지정해야 합니다. 

\`\`\`objc
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
\`\`\`

마찬가지로, 작업을 완료하는 데에 시간이 오래 걸리는 경우 네이티브 모듈은 작업을 실행할 자체 대기열을 지정할 수 있습니다. 다시 한 번, 현재 React Native는 네이티브 모듈에 대해 별도의 메소드를 제공하지만, 이는 사용자가 의존해서는 안 되는 구현 세부 정보입니다. 자체 메서드 큐를 제공하지 않는다면, 향후에 네이티브 모듈의 장시간 실행 작업으로 인해 관련 없는 다른 네이티브 모듈에서 비동기 메소드가 호출되지 않을 수도 있습니다. 예를 들어, 여기서 \`RCTAsyncLocalStorage\` 모듈은 자체 대기열을 생성하므로, 느린 디스크 액세스를 위해 잠재적으로 대기 중이더라도 React 큐가 차단되지 않습니다. 

\`\`\`objc
- (dispatch_queue_t)methodQueue
{
 return dispatch_queue_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH_QUEUE_SERIAL);
}
\`\`\`

지정한  \`methodQueue\` 는 모듈의 모든 메서드에 의해 공유됩니다. 사용자의 메서드 중 하나만 장기 실행 중인 경우 (또는 어떠한 이유로 다른 메서드와는 다른 큐에서 실행되어야 하는 경우), 메서드 내에서 \`dispatch_async\` 를 사용하여  다른 메서드에 영향을 주지 않고, 다른 큐에서 특정한 메서드의 코드를 수행할 수 있습니다. 

\`\`\`objc
RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
 dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
   // Call long-running code on background thread
   ...
   // You can invoke callback from any thread/queue
   callback(@[...]);
 });
}

\`\`\`

> 모듈 간의 디스패치 큐 공유
>
> \`methodQueue\` 메서드는 모듈이 초기화될 때 한 번 호출된 다음, React Native에 의해 유지됩니다. 따라서 모듈 내에서 사용하려는 경우를 제외하고는, 직접 큐에 대한 참조를 보관할 필요가 없습니다. 그러나 여러 모듈 간에 동일한 큐를 공유하고 싶다면 각 모듈에 대해 동일한 큐 인스턴스를 유지하고 반환해야 합니다. 

### 종속성 주입

React Native는 등록된 모든 네이티브 모듈을 자동으로 생성하고 초기화합니다. 그러나, 종속성을 주입하는 등의 방법으로 직접 모듈 인스턴스를 생성하고 초기화할 수도 있습니다. 

\`RCTBridgeDelegate\` 프로토콜을 구현하는 클래스를 생성하고, 대리자와 함께 \`RCTBridge\` 를 인자로 초기화시키며, 초기화된 브릿지로 \`RCTRootView\` 를 초기화하면 됩니다. 

\`\`\`objc
id<RCTBridgeDelegate> moduleInitialiser = [[classThatImplementsRCTBridgeDelegate alloc] init];

RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:moduleInitialiser launchOptions:nil];

RCTRootView *rootView = [[RCTRootView alloc]
                        initWithBridge:bridge
                            moduleName:kModuleName
                     initialProperties:nil];
\`\`\`

### Swift 내보내기

Swift는 매크로를 지원하지 않으므로, 네이티브 모듈과 메서드들을 JavaScript에 노출하려면 약간의 추가적인 설정이 필요합니다. 그러나, 이는 비교적 동일하게 작동합니다. 동일한 \`CalendarModule\` 을 Swift 클래스로 가지고 있다고 가정해봅시다. 

\`\`\`swift
// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: NSObject {

 @objc(addEvent:location:date:)
 func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
   // Date is ready to use!
 }

 @objc
 func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"]
 }

}
\`\`\`

> \`@objc\` 한정자를 사용하여 클래스와 함수를 Objective-C 런타임으로 적절하게 내보내는 것이 중요합니다. 

그런 다음 React Native에 필요한 정보를 등록하는 private 구현 파일을 생성합니다. 

\`\`\`swift
// CalendarManagerBridge.m
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end
\`\`\`

Swift 및 Objective-C가 처음이라면 [iOS 프로젝트에서 두 언어를 혼합](https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html)할 때마다, Objective-C 파일을 Swift로 노출하기 위해서 "브릿징 헤더"라고 알려진 브릿징 파일이 추가로 필요합니다. Xcode \`파일 > 새 파일\` 메뉴 옵션을 통해 앱에 Swift 파일을 추가하는 경우, Xcode에서 이 헤더 파일을 생성해줍니다. 이 헤더 파일에서  \`RCTBridgeModule.h\` 를 가져와야 합니다. 

\`\`\`swift
// CalendarManager-Bridging-Header.h
#import <React/RCTBridgeModule.h>
\`\`\`

You can also use \`RCT_EXTERN_REMAP_MODULE\` and \`_RCT_EXTERN_REMAP_METHOD\` to alter the JavaScript name of the module or methods you are exporting. For more information see [\`RCTBridgeModule\`](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridgeModule.h)

또한  \`RCT_EXTERN_REMAP_MODULE\`와 \`_RCT_EXTERN_REMAP_METHOD\` 를 사용하여 내보낼 모듈이나 메서드의 JavaScript 이름을 변경할 수 있습니다. 자세한 정보는 [RCTBridgeModule](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridgeModule.h)를 참고하세요. 

> Swift를 사용하는 정적 라이브러리는 Xcode 9 이상 버전에서만 지원됩니다. 모듈에 포함된 iOS 정적 라이브러리에서 Swift를 사용할 때 Xcode 프로젝트가 빌드되려면, 메인 앱 프로젝트에 Swift 코드와 브릿징 헤더가 있어야 합니다. 앱 프로젝트에 Swift 코드가 없는 경우, 빈 .swift 파일과 빈 브릿징 헤더를 사용해 해결할 수 있습니다. 

### 예약된 메서드 이름

#### invalidate()

네이티브 모듈은 \`invalidate()\` 메서드를 구현하여 iOS에서 [RCTInvalidating](https://github.com/facebook/react-native/blob/0.62-stable/React/Base/RCTInvalidating.h) 프로토콜을 준수할 수 있습니다. 이 메서드는 네이티브 브리지가 무효화되었을 때 [호출될 수 있습니다](https://github.com/facebook/react-native/blob/0.62-stable/ReactCommon/turbomodule/core/platform/ios/RCTTurboModuleManager.mm#L456) (예: 개발 모드 다시 로드 시). 네이티브 모듈의 정리가 필요한 경우 이 메커니즘을 사용하십시오. 
`

export const text4_1 = `
# 네이티브 모듈 NPM 패키지 설정

일반적인 JavaScript 위에 플랫폼별 네이티브 코드를 일부 포함하고 있다는 점을 제외하면, 네이티브 모듈은 일반적으로 npm 패키지로 배포됩니다. npm 패키지에 대해 자세히 알아보려면 [이 가이드](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)가 유용할 수 있습니다.

네이티브 모듈의 기본적인 프로젝트 구조를 설정하기 위해서  [create-react-native-library](https://github.com/callstack/react-native-builder-bob) 라고 불리는 커뮤니티 툴을 사용합니다. 더 나아가 해당 라이브러리의 작동 방식에 대해 알아볼 수도 있지만, 우선은 다음의 기본 스크립트만 실행합니다. 

\`\`\`shell
npx create-react-native-library react-native-awesome-module
\`\`\`

여기에서 \`react-native-awesome-module\` 은 새 모듈의 이름입니다. 이렇게 하면 \`react-native-awesome-module\` 폴더로 들어가 다음을 실행하여 예제 프로젝트를 부트스트랩합니다. 

\`\`\`shell
yarn
\`\`\`

부트스트랩이 완료되면 다음 명령 중 하나를 실행하여 예제 앱을 시작할 수 있습니다. 

\`\`\`shell
# Android app
yarn example android
# iOS app
yarn example ios
\`\`\`

위의 모든 단계가 완료되면, [Android Native Modules](https://reactnative.dev/docs/native-modules-android) 또는 [iOS Native Modules](https:///reactnative.dev/docs/native-modules-ios) 가이드를 통해 일부 코드를 추가할 수 있습니다. 

> 좀 더 사용자의 의견이 적게 들어가는 설정은, 서드 파티 툴 [create-react-native-module](https://github.com/brodybits/create-react-native-module) 를 참조하십시오. 
`