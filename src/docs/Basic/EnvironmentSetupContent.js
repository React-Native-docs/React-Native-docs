export const text1_1 = `
<-- Tab: Expo CLI Quickstart -->

# 개발 환경 설정

이 페이지는 첫 번째 React Native 앱을 설치하고 빌드하는 데 도움이 됩니다. 

***\\*모바일 개발이 처음인 경우\\****, 가장 쉽게 시작하는 방법은 Expo CLI를 사용하는 것입니다. Expo는 React Native를 중심으로 구축된 툴들의 모음이며, 많은 [기능들](features)을 가지고 있지만 지금 우리에게 가장 필요한 기능은 몇 분 안에 React Native 앱을 작성할 수 있게 해주는 기능입니다. 최신 버전의 Node.js와 휴대폰 또는 에뮬레이터만 있으면 됩니다. 툴을 설치하기 전에 웹 브라우저에서 먼저 React Native를 사용해보고 싶다면, [Snack](https://snack.expo.io/)을 사용해보세요. 

***\\*이미 모바일 개발 경험이 있다면\\****, React Native CLI를 사용해도 좋습니다. React Native CLI를 시작하려면 XCode 또는 Android Studio가 필요합니다. 이미 이러한 툴이 설치되어 있다면, 몇 분 내에 바로 실행할 수 있습니다. 설치되어 있지 않다면, 설치 및 설정에 한 시간 정도가 소요됩니다. 

## Expo CLI Quickstart

Node 12 LTS 이상 버전이 설치되어 있다고 가정하고, npm을 사용해 Expo CLI 커맨드 라인 유틸리티를 설치할 수 있습니다. 

- npm 

  \`\`\`shell
  npm install -g expo-cli
  \`\`\`

- yarn

  \`\`\`shell
  yarn global add expo-cli
  \`\`\`

그리고 "AwesomeProject"라는 이름의 새로운 React Native 프로젝트를 생성하기 위해 다음 명령을 실행합니다. 

- npm

  \`\`\`shell
  expo init AwesomeProject
  
  cd AwesomeProject
  npm start # you can also use: expo start
  \`\`\`

- yarn

  \`\`\`shell
  expo init AwesomeProject
  
  cd AwesomeProject
  yarn start # you can also use: expo start
  \`\`\`

 위 명령을 실행하면 개발 서버가 시작됩니다. 

## React Native 애플리케이션 실행하기

Expo 클라이언트 앱을 iOS나 Android 휴대폰에 설치하고, 컴퓨터와 동일한 무선 네트워크에 연결합니다. Android의 경우, 터미널에서 프로젝트를 열고 Expo 앱으로 QR 코드를 스캔합니다. iOS의 경우, 카메라 앱의 내장 QR 코드 스캐너를 사용합니다. 

### 앱 수정하기

이제 성공적으로 앱을 실행했으므로, 수정을 해봅시다. 원하는 텍스트 에디터에서 \`App.js\`를 열고 몇 줄을 수정해보세요. 변경사항을 저장하면 애플리케이션이 자동으로 리로드됩니다. 

### 끝!

축하합니다! 성공적으로 첫 번째 React Native 앱을 실행하고 수정했습니다. 

![img](https://reactnative.dev/docs/assets/GettingStartedCongratulations.png)

### 이제 무엇을 하나요?

Expo 툴과 관련된 질문이 있는 경우, Expo에 참조할 수 있는 [문서](https://docs.expo.io/)가 있습니다. [Expo 포럼](https://forums.expo.io/)에서 도움을 요청할 수도 있습니다. 

Expo와 같은 도구를 사용하면 빠르게 시작할 수 있지만, Expo CLI를 사용해 앱을 구축하기 전에는 [제한 사항](https://docs.expo.io/versions/latest/introduction/why-not-expo/)에 대해 먼저 알아보는 것이 좋습니다. 

Expo와 관련해 문제가 있다면, 새로운 issue를 생성하기 전에 관련된 이슈가 존재하는지 먼저 확인해주세요. 

- [Expo CLI issues](https://github.com/expo/expo-cli/issues) (Expo CLI 관련 이슈)

-  [Expo issues](https://github.com/expo/expo/issues) (Expo 클라이언트 또는 SDK 관련 이슈)

React Native에 대해 더 알고 싶다면, [React Native에 대한 소개](https://reactnative.dev/docs/getting-started)를 확인하세요. 

### 시뮬레이터나 가상 디바이스에서 앱 실행하기

Expo CLI를 사용하면 React Native 앱을 실제 디바이스에서 개발 환경 설정 없이 실행할 수 있습니다. iOS 시뮬레이터나 Android 가상 디바이스에서 앱을 실행하고 싶다면, "React Native CLI Quickstart"의 지침을 참고해 XCode 설치하는 방법 또는 Android 개발 환경 설정하는 방법을 알아보세요. 

설정이 끝나면, Android 가상 디바이스에서 \`npm run android\`를 실행해 앱을 시작하거나, iOS 시뮬레이터에서 \`npm run ios\` (macOS only) 를 실행해 앱을 시작할 수 있습니다. 

### 주의사항

Expo를 사용해 프로젝트를 만들 때 네이티브 코드를 빌드하지 않으므로, Expo 클라이언트 앱에서 사용할 수 있는 React Native API 및 컴포넌트 이외의 사용자 지정 네이티브 모듈은 포함할 수 없습니다. 

결국 네이티브 코드를 include 해야 한다는 점을 고려하더라도, Expo는 좋은 시작이 될 수 있습니다. 이 경우 직접 네이티브 빌드를 생성하기 위해서는 "eject"를 해야 합니다. eject를 실행한다면, 프로젝트를 계속 진행하기 위해 "React Native CLI Quickstart" 지침을 읽어봐야 합니다. 

Expo CLI는 프로젝트가 Expo 클라이언트 앱에서 지원되는 최신 React Native 버전을 사용하도록 설정합니다. Expo 클라이언트 앱은 일반적으로 React Native 버전이 stable로 릴리즈되고 나서 약 일주일 후에 해당 React Native 버전을 지원하게 됩니다. 어떤 버전이 지원되는지 알아보려면 [이 문서](https://docs.expo.io/versions/latest/sdk/overview/#sdk-version)를 확인해보세요. 

React Native를 이미 존재하는 프로젝트에 통합하는 중이라면, Expo CLI를 건너뛰고 바로 네이티브 빌드 환경 설정으로 가세요. 위에서 "React Native CLI Quickstart"를 선택해 React Native 네이티브 빌드 환경 설정에 대한 가이드를 볼 수 있습니다. 
    
`

export const text1_2_1 = `
    <-- Tab: React Native CLI Quickstart -->

<-- Inner Tab: macOS/Android -->

# 개발 환경 설정

이 페이지는 React Native 앱을 설치하고 빌드하는 첫 걸음에 도움이 됩니다.

**모바일 개발이 처음인 경우**, 시작하는 가장 쉬운 방법은 Expo CLI를 사용하는 것입니다. Expo는 React Native를 중심으로 구축 된 도구 모음이며 [features](https://expo.io/features)이 많지만 현재 가장 관련성이 높은 기능은 몇 분 안에 React Native 앱을 작성할 수 있다는 것입니다. 최신 버전의 Node.js와 핸드폰 또는 에뮬레이터만 있으면 됩니다. 도구를 설치하기 전에 웹 브라우저에서 직접 React Native를 사용해보고 싶다면 [Snack](https://snack.expo.io/)를 사용해보세요.

**이미 모바일 개발에 익숙한 경우**, React Native CLI를 사용할 수 있습니다. 시작하려면 Xcode 또는 Android Studio가 필요합니다. 이러한 도구 중 하나가 이미 설치되어있는 경우 몇 분 내에 시작하여 실행할 수 있습니다. 설치되지 않은 경우 설치 및 구성하는 데 약 1시간이 소요됩니다.

## React Native CLI 빠르게 시작하기

프로젝트에서 네이티브 코드를 빌드해야하는 경우 다음 지침을 따르세요. 예를 들어 React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 이 섹션이 필요합니다.

지침은 개발 운영 체제 및 iOS 또는 Android 용 개발을 시작할지 여부에 따라 약간 다릅니다. Android와 iOS 공용으로 개발하고 싶다면 괜찮습니다. 설정이 약간 다르기 때문에 어떤 것을 시작할지 하나를 선택할 수 있습니다.

#### 개발 OS[#](https://reactnative.dev/docs/environment-setup#development-os): macOS

#### 타겟 OS[#](https://reactnative.dev/docs/environment-setup#target-os): Android

## Installing dependencies[#](https://reactnative.dev/docs/environment-setup#installing-dependencies)

Node, Watchman, React Native command line 인터페이스, JDK 및 Android Studio가 필요합니다.

선택한 편집기를 사용하여 앱을 개발할 수 있지만 Android 용 React Native 앱을 빌드하는 데 필요한 도구를 설정하려면 Android Studio를 설치해야합니다.

### Node & Watchman

[Homebrew](http://brew.sh/)를 사용하여 Node 및 Watchman을 설치하는 것이 좋습니다. Homebrew를 설치 한 후 터미널에서 다음 명령을 실행하십시오:

\`\`\`shell
brew install node
brew install watchman
    \`\`\`

시스템에 Node를 이미 설치 한 경우 Node 12 이상인지 확인하십시오.

[Watchman](https://facebook.github.io/watchman)은 파일 시스템의 변경 사항을 감시하기위한 Facebook 도구입니다. 더 나은 성능을 위해 설치하는 것이 좋습니다.

### Java Development Kit

[Homebrew](http://brew.sh/)를 사용하여 JDK을 설치하는 것이 좋습니다. Homebrew를 설치 한 후 터미널에서 다음 명령을 실행하십시오:

\`\`\`shell
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
    \`\`\`

시스템에 이미 JDK를 설치 한 경우 JDK 8 이상인지 확인하십시오.

### Android development environment

Android 개발을 처음 접하는 경우 개발 환경 설정이 다소 지루할 수 있습니다. Android 개발에 이미 익숙한 경우 구성해야 할 몇 가지 사항이 있습니다. 두 경우 모두 다음 몇 단계를 주의 깊게 따르십시오:

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). Android Studio 설치 마법사에서 다음 모든 항목 옆의 확인란이 선택되어 있는지 확인합니다:

- \`Android SDK\`

- \`Android SDK Platform\`

- \`Android Virtual Device\`

그런 다음 "다음"을 클릭하여 이러한 구성 요소를 모두 설치합니다.

>  확인란이 회색으로 표시되면 나중에 이러한 구성 요소를 설치할 수 있습니다.

설정이 완료되고 시작 화면이 표시되면 다음 단계로 진행합니다.

#### 2. Install the Android SDK

Android Studio는 기본적으로 최신 Android SDK를 설치합니다. 그러나 네이티브 코드로 React Native 앱을 빌드하려면 특히\`Android 10 (Q)\` SDK가 필요합니다. Android Studio의 SDK Manager를 통해 추가 Android SDK를 설치할 수 있습니다.

이를 위해 Android Studio를 열고 "Configure" 버튼을 클릭 한 다음 "SDK Manager"를 선택합니다.

![Android Studio Welcome](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png)

>  SDK Manager는 ***\*Appearance & Behavior\**** → ***\*System Settings\**** → ***\*Android SDK\**** 의 Android Studio "Preferences" 대화 상자에서도 찾을 수 있습니다.

SDK Manager 내에서 "SDK Platforms" 탭을 선택한 다음 오른쪽 하단의 "Show Package Details" 옆에있는 확인란을 선택합니다. \`Android 10 (Q)\`항목을 찾아 확장 한 후 다음 항목이 선택되었는지 확인합니다:

- \`Android SDK Platform 29\`

- \`Intel x86 Atom_64 System Image\` or \`Google APIs Intel x86 Atom System Image\`

그런 다음 "SDK Tools" 탭을 선택하고 여기에서 "Show Package Details" 옆의 확인란도 선택합니다. "Android SDK Build-Tools" 항목을 찾아 펼친 다음, \`29.0.2\`이 선택되어 있는지 확인하고 "Android SDK Command-line Tools (latest)"를 확인합니다.

마지막으로 "Apply" 을 클릭하여 Android SDK 및 관련 빌드 도구를 다운로드하고 설치합니다.

#### 3. Configure the ANDROID_HOME environment variable

React Native 도구는 네이티브 코드로 앱을 빌드하기 위해 몇 가지 환경 변수를 설정해야합니다.

\`$HOME/.bash_profile\` 또는 \`$HOME/.bashrc\`(\`zsh\`를 사용하는 경우 \`~/.zprofile\` or \`~/.zshrc\`) 구성 파일에 다음 행을 추가하십시오:

\`\`\`sh
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
    \`\`\`

> \`.bash_profile\` 은 \`bash\` 에만 해당됩니다. 다른 shell 을 사용하는 경우 적절한 shell 별 구성 파일을 편집해야합니다.

\`bash\`에 \`source $HOME/.bash_profile\`을 입력하거나 \`source $HOME/.zprofile\`을 입력하여 현재 셸에 구성을 로드합니다. \`echo $ANDROID_HOME\`을 실행하여 ANDROID_HOME이 설정되어 있고\`echo $PATH\`를 실행하여 경로에 적절한 디렉토리가 추가되었는지 확인합니다.

> 올바른 Android SDK 경로를 사용하고 있는지 확인하십시오. Android Studio "Preferences" 대화 상자의 ***\*Appearance & Behavior\**** → ***\*System Settings\**** → ***\*Android SDK\**** 에서 SDK의 실제 위치를 찾을 수 있습니다.


### React Native Command Line Interface

React Native에는 기본 제공 command line 인터페이스가 있습니다. CLI의 특정 버전을 전역적으로 설치하고 관리하는 대신 Node.js와 함께 제공되는 \`npx\`를 사용하여 런타임에 현재 버전에 액세스하는 것이 좋습니다. \`npx react-native <command>\`를 사용하면 명령이 실행될 때 현재 안정된 버전의 CLI가 다운로드되고 실행됩니다.


## Creating a new application

> 이전에 글로벌 \`react-native-cli\` 패키지를 설치 한 경우 예기치 않은 문제가 발생할 수 있으므로 제거하십시오.

React Native에는 새 프로젝트를 생성하는 데 사용할 수있는 기본 제공 command line 인터페이스가 있습니다. Node.js와 함께 제공되는 \`npx\`를 사용하여 전역 적으로 설치하지 않고도 액세스 할 수 있습니다. "AwesomeProject"라는 새로운 React Native 프로젝트를 만들어 보겠습니다:


\`\`\`shell
npx react-native init AwesomeProject
    \`\`\`

React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 또는 기존 React Native 프로젝트에 Android 지원을 추가하는 경우에는 필요하지 않습니다. ([Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)를 참고하세요.) [Ignite CLI](https://github.com/infinitered/ignite)와 같은 타사 CLI를 사용하여 React Native 앱을 초기화 할 수도 있습니다.


### [Optional] Using a specific version or template

특정 React Native 버전으로 새 프로젝트를 시작하려면 \`--version\` 인수를 사용할 수 있습니다:

\`\`\`shell
npx react-native init AwesomeProject --version X.XX.X
    \`\`\`

TypeScript와 같은 사용자 지정 React Native 템플릿을 \`--template\` 인수와 함께 사용하여 프로젝트를 시작할 수도 있습니다.

\`\`\`shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
    \`\`\`

## Preparing the Android device

React Native Android 앱을 실행하려면 Android 기기가 필요합니다. 이것은 실제 Android 기기 일 수도 있고, 더 일반적으로 컴퓨터에서 Android 기기를 에뮬레이션 할 수있는 Android 가상 기기를 사용할 수 있습니다.

어느 쪽이든 개발을 위해 Android 앱을 실행할 수 있도록 기기를 준비해야합니다.


### Using a physical device

실제 Android 기기가 있는 경우 USB 케이블을 사용하여 컴퓨터에 연결하고 [here](https://reactnative.dev/docs/running-on-device) 안내에 따라 AVD 기기 대신 개발에 사용할 수 있습니다.


### Using a virtual device

Android Studio를 사용하여 \`./AwesomeProject/android\`를 여는 경우 Android Studio 내에서 "AVD Manager"를 열어 사용 가능한 Android Virtual Devices(AVDs) 목록을 볼 수 있습니다. 다음과 같은 아이콘을 찾으십시오:

![Android Studio AVD Manager](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=)

최근에 Android Studio를 설치했다면 [create a new AVD](https://developer.android.com/studio/run/managing-avds.html)이 필요할 수 있습니다. "Create Virtual Device..."를 선택한 다음 목록에서 기기를 선택하고 "Next"을 클릭 한 다음 ***\*Q\**** API Level 29 이미지를 선택합니다.

"Next"을 클릭 한 다음 "Finish"을 클릭하여 AVD를 만듭니다. 이 시점에서 AVD 옆에있는 녹색 삼각형 버튼을 클릭하여 시작하고 다음 단계로 진행할 수 있습니다.


## Running your React Native application

### Step 1: Start Metro

먼저 React Native와 함께 제공되는 JavaScript 번들러 인 Metro를 시작해야합니다. Metro는 "입력 파일과 다양한 옵션을 가져 와서 모든 코드와 해당 종속성을 포함하는 단일 JavaScript 파일을 반환합니다."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

Metro를 시작하려면 React Native 프로젝트 폴더 내에서\`npx react-native start\`를 실행하세요:


\`\`\`shell
npx react-native start
    \`\`\`

\`react-native start\`은 Metro Bundler를 시작합니다.

> Yarn 패키지 관리자를 사용하는 경우 기존 프로젝트 내에서 React Native 명령을 실행할 때 \`npx\` 대신\`yarn\`을 사용할 수 있습니다.

> 웹 개발에 익숙하다면 Metro는 React Native 앱용 webpack과 매우 유사합니다. Kotlin 또는 Java와 달리 JavaScript는 컴파일되지 않으며 React Native도 아닙니다. 번들링은 컴파일과 동일하지 않지만 시작 성능을 향상시키고 일부 플랫폼 별 JavaScript를 더 많은 JavaScript로 변환하는 데 도움이 될 수 있습니다.


### Step 2: Start your application

Metro Bundler가 자체 터미널에서 실행되도록하십시오. React Native 프로젝트 폴더에서 새 터미널을 엽니다. 다음을 실행하십시오:

\`\`\`shell
npx react-native run-android
    \`\`\`

모든 것이 올바르게 설정되면 곧 Android 에뮬레이터에서 새 앱이 실행되는 것을 볼 수 있습니다.

![AwesomeProject on Android](https://reactnative.dev/assets/images/GettingStartedAndroidSuccessMacOS-b854b8ed8b950832a43645e723a98961.png)



\`npx react-native run-android\`는 앱을 실행하는 한 가지 방법입니다. Android Studio 내에서 직접 실행할 수도 있습니다.

> 이 작업을 수행할 수 없는 경우 [Troubleshooting](https://reactnative.dev/docs/troubleshooting#content) 페이지를 확인하세요..

### Modifying your app

이제 앱을 성공적으로 실행했으므로 수정해 보겠습니다.

-선택한 텍스트 편집기에서 \`App.js\`를 열고 몇 줄을 편집합니다.

-\`R\` 키를 두 번 누르거나 개발자 메뉴 (\`⌘M\`)에서\`Reload\`를 선택하여 변경 사항을 확인하세요!

### That's it!

축하합니다! 첫 번째 React Native 앱을 성공적으로 실행하고 수정했습니다.


![img](https://reactnative.dev/docs/assets/GettingStartedCongratulations.png)



**## Now what?**

-이 새로운 React Native 코드를 기존 애플리케이션에 추가하려면 [통합 가이드](https://reactnative.dev/docs/integration-with-existing-apps)를 확인하세요.

React Native에 대해 자세히 알고 싶다면 [Introduction to React Native](https://reactnative.dev/docs/getting-started)를 확인하세요.
`

export const text1_2_2 = `
<-- Tab: React Native CLI Quickstart -->

<-- Inner Tab: macOS/iOS -->

# 개발 환경 설정

이 페이지는 React Native 앱을 설치하고 빌드하는 첫 걸음에 도움이 됩니다.

**모바일 개발이 처음인 경우**, 시작하는 가장 쉬운 방법은 Expo CLI를 사용하는 것입니다. Expo는 React Native를 중심으로 구축 된 도구 모음이며 [features](https://expo.io/features)이 많지만 현재 가장 관련성이 높은 기능은 몇 분 안에 React Native 앱을 작성할 수 있다는 것입니다. 최신 버전의 Node.js와 핸드폰 또는 에뮬레이터만 있으면 됩니다. 도구를 설치하기 전에 웹 브라우저에서 직접 React Native를 사용해보고 싶다면 [Snack](https://snack.expo.io/)를 사용해보세요.

**이미 모바일 개발에 익숙한 경우**, React Native CLI를 사용할 수 있습니다. 시작하려면 Xcode 또는 Android Studio가 필요합니다. 이러한 도구 중 하나가 이미 설치되어있는 경우 몇 분 내에 시작하여 실행할 수 있습니다. 설치되지 않은 경우 설치 및 구성하는 데 약 1시간이 소요됩니다.

## React Native CLI 빠르게 시작하기

프로젝트에서 네이티브 코드를 빌드해야하는 경우 다음 지침을 따르세요. 예를 들어 React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 이 섹션이 필요합니다.

지침은 개발 운영 체제 및 iOS 또는 Android 용 개발을 시작할지 여부에 따라 약간 다릅니다. Android와 iOS 공용으로 개발하고 싶다면 괜찮습니다. 설정이 약간 다르기 때문에 어떤 것을 시작할지 하나를 선택할 수 있습니다.

#### 개발 OS[#](https://reactnative.dev/docs/environment-setup#development-os): macOS

#### 타겟 OS[#](https://reactnative.dev/docs/environment-setup#target-os): iOS

## Installing dependencies[#](https://reactnative.dev/docs/environment-setup#installing-dependencies)

Node, Watchman, React Native command line 인터페이스, Xcode 및 CocoaPods가 필요합니다.

선택한 편집기를 사용하여 앱을 개발할 수 있지만 iOS 용 React Native 앱을 빌드하는 데 필요한 도구를 설정하려면 Xcode를 설치해야합니다.

### Node & Watchman[#](https://reactnative.dev/docs/environment-setup#node--watchman)

[Homebrew](http://brew.sh/)를 사용하여 Node 및 Watchman을 설치하는 것이 좋습니다. Homebrew를 설치 한 후 터미널에서 다음 명령을 실행하십시오:

\`\`\`shell
brew install node
brew install watchman
\`\`\`

시스템에 Node를 이미 설치 한 경우 Node 12 이상인지 확인하십시오.

[Watchman](https://facebook.github.io/watchman)은 파일 시스템의 변경 사항을 감시하기위한 Facebook 도구입니다. 더 나은 성능을 위해 설치하는 것이 좋습니다.

### Xcode[#](https://reactnative.dev/docs/environment-setup#xcode)

Xcode를 설치하는 가장 쉬운 방법은 [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)를 사용하는 것입니다. Xcode를 설치하면 iOS 시뮬레이터와 iOS 앱을 빌드하는 데 필요한 모든 도구도 설치됩니다.

시스템에 Xcode를 이미 설치 한 경우 버전 10 이상인지 확인하십시오.

#### Command Line Tools[#](https://reactnative.dev/docs/environment-setup#command-line-tools)

Xcode Command Line 도구도 설치해야합니다. Xcode를 연 다음 Xcode 메뉴에서 "Preferences..."을 선택합니다. 위치 패널로 이동하고 Command Line 도구 드롭 다운에서 최신 버전을 선택하여 도구를 설치합니다.

![Xcode Command Line Tools](https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png)

#### Installing an iOS Simulator in Xcode[#](https://reactnative.dev/docs/environment-setup#installing-an-ios-simulator-in-xcode)

시뮬레이터를 설치하려면 **Xcode > Preferences...** 를 열고 **Components** 탭을 선택합니다. 사용하려는 iOS 버전이있는 시뮬레이터를 선택하십시오.

#### CocoaPods[#](https://reactnative.dev/docs/environment-setup#cocoapods)

[CocoaPods](https://cocoapods.org/)는 Ruby로 빌드되었으며 macOS에서 사용할 수있는 기본 Ruby로 설치할 수 있습니다. Ruby 버전 관리자를 사용할 수 있지만 수행중인 작업을 모르는 경우 macOS에서 사용할 수있는 표준 Ruby를 사용하는 것이 좋습니다.

기본 Ruby 설치를 사용하려면 gem을 설치할 때 \`sudo\`를 사용해야합니다. (하지만 이것은 gem 설치 중에 만 문제가됩니다.)

\`\`\`shell
sudo gem install cocoapods
\`\`\`

더 많은 정보는 [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html)를 참고하세요.

### React Native Command Line Interface[#](https://reactnative.dev/docs/environment-setup#react-native-command-line-interface)

React Native에는 기본 제공 command line 인터페이스가 있습니다. CLI의 특정 버전을 전역적으로 설치하고 관리하는 대신 Node.js와 함께 제공되는 \`npx\`를 사용하여 런타임에 현재 버전에 액세스하는 것이 좋습니다. \`npx react-native <command>\`를 사용하면 명령이 실행될 때 현재 안정된 버전의 CLI가 다운로드되고 실행됩니다.
## Creating a new application[#](https://reactnative.dev/docs/environment-setup#creating-a-new-application)

> 이전에 글로벌 \`react-native-cli\` 패키지를 설치 한 경우 예기치 않은 문제가 발생할 수 있으므로 제거하십시오.

React Native의 내장 명령 줄 인터페이스를 사용하여 새 프로젝트를 생성 할 수 있습니다. "AwesomeProject" 라는 새로운 React Native 프로젝트를 만들어 보겠습니다.

\`\`\`shell
npx react-native init AwesomeProject
\`\`\`

React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 또는 기존 React Native 프로젝트에 Android 지원을 추가하는 경우에는 필요하지 않습니다. ([Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)를 참고하세요.) [Ignite CLI](https://github.com/infinitered/ignite)와 같은 타사 CLI를 사용하여 React Native 앱을 초기화 할 수도 있습니다.

### [Optional] Using a specific version or template[#](https://reactnative.dev/docs/environment-setup#optional-using-a-specific-version-or-template)

특정 React Native 버전으로 새 프로젝트를 시작하려면 \`--version\` 인수를 사용할 수 있습니다:

\`\`\`shell
npx react-native init AwesomeProject --version X.XX.X
\`\`\`

TypeScript와 같은 사용자 지정 React Native 템플릿을 \`--template\` 인수와 함께 사용하여 프로젝트를 시작할 수도 있습니다.

\`\`\`shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
\`\`\`

> **참고** 위 명령이 실패하면 이전 버전의 \`react-native\` 또는 \`react-native-cli\`가 PC에 전역적으로 설치되어있을 수 있습니다. cli를 제거하고 \`npx\`를 사용하여 cli를 실행하십시오.

## Running your React Native application[#](https://reactnative.dev/docs/environment-setup#running-your-react-native-application)

### Step 1: Start Metro[#](https://reactnative.dev/docs/environment-setup#step-1-start-metro)

먼저 React Native와 함께 제공되는 JavaScript 번들러 인 Metro를 시작해야합니다. Metro는 "입력 파일과 다양한 옵션을 가져 와서 모든 코드와 해당 종속성을 포함하는 단일 JavaScript 파일을 반환합니다."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

Metro를 시작하려면 React Native 프로젝트 폴더 내에서\`npx react-native start\`를 실행하세요:

\`\`\`shell
npx react-native start
\`\`\`

\`react-native start\`은 Metro Bundler를 시작합니다.

> Yarn 패키지 관리자를 사용하는 경우 기존 프로젝트 내에서 React Native 명령을 실행할 때 \`npx\` 대신\`yarn\`을 사용할 수 있습니다.

> 웹 개발에 익숙하다면 Metro는 React Native 앱용 webpack과 매우 유사합니다. Kotlin 또는 Java와 달리 JavaScript는 컴파일되지 않으며 React Native도 아닙니다. 번들링은 컴파일과 동일하지 않지만 시작 성능을 향상시키고 일부 플랫폼 별 JavaScript를 더 광범위하게 지원되는 JavaScript로 변환하는 데 도움이 될 수 있습니다.

### Step 2: Start your application[#](https://reactnative.dev/docs/environment-setup#step-2-start-your-application)

Metro Bundler가 자체 터미널에서 실행되도록하십시오. React Native 프로젝트 폴더에서 새 터미널을 엽니다. 다음을 실행하십시오:

\`\`\`shell
npx react-native run-ios
\`\`\`

곧 iOS 시뮬레이터에서 새 앱이 실행되는 것을 볼 수 있습니다.

![AwesomeProject on iOS](https://reactnative.dev/assets/images/GettingStartediOSSuccess-e6dd7fc2baa303d1f30373d996a6e51d.png)

\`npx react-native run-ios\`는 앱을 실행하는 한 가지 방법입니다. Xcode 내에서 직접 실행할 수도 있습니다.

>이 기능이 작동하지 않으면 [Troubleshooting](https://reactnative.dev/docs/troubleshooting#content) 페이지를 참조하세요.

### Running on a device[#](https://reactnative.dev/docs/environment-setup#running-on-a-device)

위의 명령은 기본적으로 iOS 시뮬레이터에서 앱을 자동으로 실행합니다. 실제 실제 iOS 기기에서 앱을 실행하려면 [here](https://reactnative.dev/docs/running-on-device) 안내를 따르세요.

### Modifying your app[#](https://reactnative.dev/docs/environment-setup#modifying-your-app)

이제 앱을 성공적으로 실행했으므로 수정해 보겠습니다.

-선택한 텍스트 편집기에서 \`App.js\`를 열고 몇 줄을 편집합니다.

-iOS Simulator에서 \`⌘R\`를 눌러 리로드하고 변경 사항을 확인하세요!


### That's it! [#](https://reactnative.dev/docs/environment-setup#thats-it)

축하합니다! 첫 번째 React Native 앱을 성공적으로 실행하고 수정했습니다.


![img](https://reactnative.dev/docs/assets/GettingStartedCongratulations.png)

## Now what?[#](https://reactnative.dev/docs/environment-setup#now-what)

-이 새로운 React Native 코드를 기존 애플리케이션에 추가하려면 [통합 가이드](https://reactnative.dev/docs/integration-with-existing-apps)를 확인하세요.

React Native에 대해 자세히 알고 싶다면 [Introduction to React Native](https://reactnative.dev/docs/getting-started)를 확인하세요.


`

export const text1_2_3 = `
<-- Tab: React Native CLI Quickstart -->

<-- Inner Tab: Windows/Android -->

# 개발 환경 설정

이 페이지는 React Native 앱을 설치하고 빌드하는 첫 걸음에 도움이 됩니다.

**모바일 개발이 처음인 경우**, 시작하는 가장 쉬운 방법은 Expo CLI를 사용하는 것입니다. Expo는 React Native를 중심으로 구축 된 도구 모음이며 [features](https://expo.io/features)이 많지만 현재 가장 관련성이 높은 기능은 몇 분 안에 React Native 앱을 작성할 수 있다는 것입니다. 최신 버전의 Node.js와 핸드폰 또는 에뮬레이터만 있으면 됩니다. 도구를 설치하기 전에 웹 브라우저에서 직접 React Native를 사용해보고 싶다면 [Snack](https://snack.expo.io/)를 사용해보세요.

**이미 모바일 개발에 익숙한 경우**, React Native CLI를 사용할 수 있습니다. 시작하려면 Xcode 또는 Android Studio가 필요합니다. 이러한 도구 중 하나가 이미 설치되어있는 경우 몇 분 내에 시작하여 실행할 수 있습니다. 설치되지 않은 경우 설치 및 구성하는 데 약 1시간이 소요됩니다.

## React Native CLI 빠르게 시작하기

프로젝트에서 네이티브 코드를 빌드해야하는 경우 다음 지침을 따르세요. 예를 들어 React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 이 섹션이 필요합니다.

지침은 개발 운영 체제 및 iOS 또는 Android 용 개발을 시작할지 여부에 따라 약간 다릅니다. Android와 iOS 공용으로 개발하고 싶다면 괜찮습니다. 설정이 약간 다르기 때문에 어떤 것을 시작할지 하나를 선택할 수 있습니다.

#### 개발 OS[#](https://reactnative.dev/docs/environment-setup#development-os): Windows

#### 타겟 OS[#](https://reactnative.dev/docs/environment-setup#target-os-1): Android

## Installing dependencies

Node, React Native command line 인터페이스, JDK 및 Android Studio가 필요합니다.

선택한 편집기를 사용하여 앱을 개발할 수 있지만 Android 용 React Native 앱을 빌드하는 데 필요한 도구를 설정하려면 Android Studio를 설치해야합니다.

### Node, JDK

Windows 용으로 널리 사용되는 패키지 관리자인 [Chocolatey](https://chocolatey.org/)을 통해 Node를 설치하는 것이 좋습니다.

다른 노드 버전 간에 전환하려면 Windows 용 노드 버전 관리자인 [nvm-windows](https://github.com/coreybutler/nvm-windows)를 통해 Node를 설치하는 것이 좋습니다.

React Native 에는 [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk8/)도 필요하며 Chocolatey를 사용하여 설치할 수도 있습니다.

관리자 명령 프롬프트를 열고 (명령 프롬프트를 마우스 오른쪽 단추로 클릭하고 "관리자 권한으로 실행"선택) 다음 명령을 실행합니다:


\`\`\`powershell
choco install -y nodejs.install openjdk8
\`\`\`

시스템에 Node를 이미 설치 한 경우 Node 12 이상인지 확인하십시오. 시스템에 이미 JDK가 있는 경우 버전 8 이상인지 확인하십시오.

> [Node's Downloads page](https://nodejs.org/en/download/)에서 추가 설치 옵션을 찾을 수 있습니다.

> 최신 버전의 Java Development Kit를 사용하는 경우 JDK를 인식 할 수 있도록 프로젝트의 Gradle 버전을 변경해야 합니다. \`{project root folder}\\android\\gradle\\wrapper\\gradle-wrapper.properties\`로 이동하고 \`distributionUrl\`값을 변경하여 Gradle 버전을 업그레이드하면됩니다. [here the lastest releases of Gradle](https://gradle.org/releases/)를 확인할 수 있습니다.



### Android development environment

Android 개발을 처음 접하는 경우 개발 환경 설정이 다소 지루할 수 있습니다. Android 개발에 이미 익숙한 경우 구성해야 할 몇 가지 사항이 있습니다. 두 경우 모두 다음 몇 단계를 주의 깊게 따르십시오:

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). Android Studio 설치 마법사에서 다음 모든 항목 옆의 확인란이 선택되어 있는지 확인합니다:

- \`Android SDK\`
- \`Android SDK Platform\`
- \`Android Virtual Device\`
- If you are not already using Hyper-V: \`Performance (Intel ® HAXM)\` ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

그런 다음 "다음"을 클릭하여 이러한 구성 요소를 모두 설치합니다.

>  확인란이 회색으로 표시되면 나중에 이러한 구성 요소를 설치할 수 있습니다.

설정이 완료되고 시작 화면이 표시되면 다음 단계로 진행합니다.

#### 2. Install the Android SDK

Android Studio는 기본적으로 최신 Android SDK를 설치합니다. 그러나 네이티브 코드로 React Native 앱을 빌드하려면 특히\`Android 10 (Q)\` SDK가 필요합니다. Android Studio의 SDK Manager를 통해 추가 Android SDK를 설치할 수 있습니다.

이를 위해 Android Studio를 열고 "Configure" 버튼을 클릭 한 다음 "SDK Manager"를 선택합니다.

![Android Studio Welcome](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeWindows-b88d46e9a7fe5e050224a9a295148222.png)

> SDK Manager는 **Appearance & Behavior** → **System Settings** → **Android SDK** 아래의 Android Studio "Preferences" 대화 상자에서도 찾을 수 있습니다.

SDK Manager 내에서 "SDK Platforms" 탭을 선택한 다음 오른쪽 하단의 "Show Package Details" 옆에있는 확인란을 선택합니다. \`Android 10 (Q)\`항목을 찾아 확장 한 후 다음 항목이 선택되었는지 확인합니다:

- \`Android SDK Platform 29\`
- \`Intel x86 Atom_64 System Image\` or \`Google APIs Intel x86 Atom System Image\`

그런 다음 "SDK Tools" 탭을 선택하고 여기에서 "Show Package Details" 옆의 확인란도 선택합니다. "Android SDK Build-Tools" 항목을 찾아 펼친 다음, \`29.0.2\`이 선택되어 있는지 확인합니다.

마지막으로 "Apply" 을 클릭하여 Android SDK 및 관련 빌드 도구를 다운로드하고 설치합니다.

#### 3. Configure the ANDROID_HOME environment variable

React Native 도구는 네이티브 코드로 앱을 빌드하기 위해 몇 가지 환경 변수를 설정해야합니다.

1. **Windows Control Panel.** 열기
2. **User Accounts,** 클릭 후 **User Accounts** 다시 클릭
3. **Change my environment variables** 클릭
4. **New...** 을 클릭하여 Android SDK의 경로를 가리키는 \`ANDROID_HOME\` 사용자 변수를 생성하기:

![ANDROID_HOME Environment Variable](data:image/png;base64,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)

SDK는 기본적으로 다음 위치에 설치됩니다:

\`\`\`powershell
%LOCALAPPDATA%\\Android\\Sdk
\`\`\`

**Appearance & Behavior** → **System Settings** → **Android SDK**.아래의 Android Studio "Settings" 대화 상자에서 SDK의 실제 위치를 찾을 수 있습니다.


다음 단계로 진행하기 전에 새 환경 변수가 로드되었는지 확인하려면 새 명령 프롬프트 창을 엽니다.

1. powershell 열기
2. **Get-ChildItem -Path Env:\\** 를 powershell에 복사하여 붙여넣기
3. \`ANDROID_HOME\`이 추가되었는지 확인

#### 4. Add platform-tools to Path

1. **Windows Control Panel.** 열기
2. **User Accounts,** 클릭 후 **User Accounts** 다시 클릭
3. **Change my environment variables** 클릭
4. **Path** 변수 선택
5. **Edit.** 클릭
6. **New** 클릭 후 목록에 platform-tools 경로 추가

이 폴더의 기본 위치는 다음과 같습니다:

\`\`\`powershell
%LOCALAPPDATA%\\Android\\Sdk\\platform-tools
\`\`\`

### React Native Command Line Interface

React Native에는 기본 제공 command line 인터페이스가 있습니다. CLI의 특정 버전을 전역적으로 설치하고 관리하는 대신 Node.js와 함께 제공되는 \`npx\`를 사용하여 런타임에 현재 버전에 액세스하는 것이 좋습니다. \`npx react-native <command>\`를 사용하면 명령이 실행될 때 현재 안정된 버전의 CLI가 다운로드되고 실행됩니다.


## Creating a new application

> 이전에 글로벌 \`react-native-cli\` 패키지를 설치 한 경우 예기치 않은 문제가 발생할 수 있으므로 제거하십시오.

React Native에는 새 프로젝트를 생성하는 데 사용할 수있는 기본 제공 command line 인터페이스가 있습니다. Node.js와 함께 제공되는 \`npx\`를 사용하여 전역 적으로 설치하지 않고도 액세스 할 수 있습니다. "AwesomeProject"라는 새로운 React Native 프로젝트를 만들어 보겠습니다:

\`\`\`shell
npx react-native init AwesomeProject
\`\`\`


React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 또는 기존 React Native 프로젝트에 Android 지원을 추가하는 경우에는 필요하지 않습니다. ([Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)를 참고하세요.) [Ignite CLI](https://github.com/infinitered/ignite)와 같은 타사 CLI를 사용하여 React Native 앱을 초기화 할 수도 있습니다.

### [Optional] Using a specific version or template

특정 React Native 버전으로 새 프로젝트를 시작하려면 \`--version\` 인수를 사용할 수 있습니다:

\`\`\`shell
npx react-native init AwesomeProject --version X.XX.X
\`\`\`

TypeScript와 같은 사용자 지정 React Native 템플릿을 \`--template\` 인수와 함께 사용하여 프로젝트를 시작할 수도 있습니다.

\`\`\`shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
\`\`\`

## Preparing the Android device

React Native Android 앱을 실행하려면 Android 기기가 필요합니다. 이것은 실제 Android 기기 일 수도 있고, 더 일반적으로 컴퓨터에서 Android 기기를 에뮬레이션 할 수있는 Android 가상 기기를 사용할 수 있습니다.

어느 쪽이든 개발을 위해 Android 앱을 실행할 수 있도록 기기를 준비해야합니다.


### Using a physical device

실제 Android 기기가 있는 경우 USB 케이블을 사용하여 컴퓨터에 연결하고 [here](https://reactnative.dev/docs/running-on-device) 안내에 따라 AVD 기기 대신 개발에 사용할 수 있습니다.


### Using a virtual device

Android Studio를 사용하여 \`./AwesomeProject/android\`를 여는 경우 Android Studio 내에서 "AVD Manager"를 열어 사용 가능한 Android Virtual Devices(AVDs) 목록을 볼 수 있습니다. 다음과 같은 아이콘을 찾으십시오:

![Android Studio AVD Manager](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=)

최근에 Android Studio를 설치했다면 [create a new AVD](https://developer.android.com/studio/run/managing-avds.html)이 필요할 수 있습니다. "Create Virtual Device..."를 선택한 다음 목록에서 기기를 선택하고 "Next"을 클릭 한 다음 ***\\*Q\\**** API Level 29 이미지를 선택합니다.

> HAXM이 설치되어 있지 않은 경우 "Install HAXM"를 클릭하거나 [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows)에 따라 설치합니다. 그런 다음 AVD Manag로 돌아가십시오.


"Next"을 클릭 한 다음 "Finish"을 클릭하여 AVD를 만듭니다. 이 시점에서 AVD 옆에있는 녹색 삼각형 버튼을 클릭하여 시작하고 다음 단계로 진행할 수 있습니다.

## Running your React Native application

### Step 1: Start Metro

먼저 React Native와 함께 제공되는 JavaScript 번들러 인 Metro를 시작해야합니다. Metro는 "입력 파일과 다양한 옵션을 가져 와서 모든 코드와 해당 종속성을 포함하는 단일 JavaScript 파일을 반환합니다."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

Metro를 시작하려면 React Native 프로젝트 폴더 내에서 \`npx react-native start\`를 실행하세요:

\`\`\`shell
npx react-native start
\`\`\`

\`react-native start\`은 Metro Bundler를 시작합니다.

> Yarn 패키지 관리자를 사용하는 경우 기존 프로젝트 내에서 React Native 명령을 실행할 때 \`npx\` 대신\`yarn\`을 사용할 수 있습니다.

> 웹 개발에 익숙하다면 Metro는 React Native 앱용 webpack과 매우 유사합니다. Kotlin 또는 Java와 달리 JavaScript는 컴파일되지 않으며 React Native도 아닙니다. 번들링은 컴파일과 동일하지 않지만 시작 성능을 향상시키고 일부 플랫폼 별 JavaScript를 더 광범위하게 지원되는 JavaScript로 변환하는 데 도움이 될 수 있습니다.


### Step 2: Start your application

Metro Bundler가 자체 터미널에서 실행되도록하십시오. React Native 프로젝트 폴더에서 새 터미널을 엽니다. 다음을 실행하십시오:

\`\`\`shell
npx react-native run-android
\`\`\`

모든 것이 올바르게 설정되면 곧 Android 에뮬레이터에서 새 앱이 실행되는 것을 볼 수 있습니다.

![AwesomeProject on Android](https://reactnative.dev/assets/images/GettingStartedAndroidSuccessWindows-7ae949ba8187936ba342678c432d78f6.png)


\`npx react-native run-android\`는 앱을 실행하는 한 가지 방법입니다. Android Studio 내에서 직접 실행할 수도 있습니다.

> 이 작업을 수행할 수 없는 경우 [Troubleshooting](https://reactnative.dev/docs/troubleshooting#content) 페이지를 확인하세요.



### Modifying your app

이제 앱을 성공적으로 실행했으므로 수정해 보겠습니다.

-선택한 텍스트 편집기에서 \`App.js\`를 열고 몇 줄을 편집합니다.

-\`R\` 키를 두 번 누르거나 개발자 메뉴 (\`Ctrl + M\`)에서\`Reload\`를 선택하여 변경 사항을 확인하세요!


### That's it!

축하합니다! 첫 번째 React Native 앱을 성공적으로 실행하고 수정했습니다.

![img](https://reactnative.dev/docs/assets/GettingStartedCongratulations.png)

## Now what?

-이 새로운 React Native 코드를 기존 애플리케이션에 추가하려면 [통합 가이드](https://reactnative.dev/docs/integration-with-existing-apps)를 확인하세요.

React Native에 대해 자세히 알고 싶다면 [Introduction to React Native](https://reactnative.dev/docs/getting-started)를 확인하세요.


`

export const text1_2_4 = `
<-- Tab: React Native CLI Quickstart -->

<-- Inner Tab: Linux/Android -->

# 개발 환경 설정

이 페이지는 React Native 앱을 설치하고 빌드하는 첫 걸음에 도움이 됩니다.

**모바일 개발이 처음인 경우**, 시작하는 가장 쉬운 방법은 Expo CLI를 사용하는 것입니다. Expo는 React Native를 중심으로 구축 된 도구 모음이며 [features](https://expo.io/features)이 많지만 현재 가장 관련성이 높은 기능은 몇 분 안에 React Native 앱을 작성할 수 있다는 것입니다. 최신 버전의 Node.js와 핸드폰 또는 에뮬레이터만 있으면 됩니다. 도구를 설치하기 전에 웹 브라우저에서 직접 React Native를 사용해보고 싶다면 [Snack](https://snack.expo.io/)를 사용해보세요.

**이미 모바일 개발에 익숙한 경우**, React Native CLI를 사용할 수 있습니다. 시작하려면 Xcode 또는 Android Studio가 필요합니다. 이러한 도구 중 하나가 이미 설치되어있는 경우 몇 분 내에 시작하여 실행할 수 있습니다. 설치되지 않은 경우 설치 및 구성하는 데 약 1시간이 소요됩니다.

## React Native CLI 빠르게 시작하기

프로젝트에서 네이티브 코드를 빌드해야하는 경우 다음 지침을 따르세요. 예를 들어 React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 이 섹션이 필요합니다.

지침은 개발 운영 체제 및 iOS 또는 Android 용 개발을 시작할지 여부에 따라 약간 다릅니다. Android와 iOS 공용으로 개발하고 싶다면 괜찮습니다. 설정이 약간 다르기 때문에 어떤 것을 시작할지 하나를 선택할 수 있습니다.

#### 개발 OS[#](https://reactnative.dev/docs/environment-setup#development-os): Linux

#### 타겟 OS[#](https://reactnative.dev/docs/environment-setup#target-os-2): Android

## Installing dependencies[#](https://reactnative.dev/docs/environment-setup#installing-dependencies)

Node, React Native command line 인터페이스, JDK 및 Android Studio가 필요합니다.

선택한 편집기를 사용하여 앱을 개발할 수 있지만 Android 용 React Native 앱을 빌드하는 데 필요한 도구를 설정하려면 Android Studio를 설치해야합니다.

### Node

[Linux 배포판 설치 지침](https://nodejs.org/en/download/package-manager/)에 따라 Node 12 이상을 설치합니다.

### Java Development Kit

React Native에는 최소한 JDK(Java SE Development Kit) 버전 8이 필요합니다. [AdoptOpenJDK](https://adoptopenjdk.net/) 또는 시스템 패키저에서 [OpenJDK](http://openjdk.java.net/)를 다운로드하여 설치할 수 있습니다. 원하는 경우 [Oracle JDK 14 다운로드 및 설치](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)도 가능합니다.

### Android development environment

Android 개발을 처음 접하는 경우 개발 환경 설정이 다소 지루할 수 있습니다. Android 개발에 이미 익숙한 경우 구성해야 할 몇 가지 사항이 있습니다. 두 경우 모두 다음 몇 단계를 주의 깊게 따르십시오:

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). Android Studio 설치 마법사에서 다음 모든 항목 옆의 확인란이 선택되어 있는지 확인합니다:

- \`Android SDK\`
- \`Android SDK Platform\`
- \`Android Virtual Device\`

그런 다음 "다음"을 클릭하여 이러한 구성 요소를 모두 설치합니다.

>  확인란이 회색으로 표시되면 나중에 이러한 구성 요소를 설치할 수 있습니다.

설정이 완료되고 시작 화면이 표시되면 다음 단계로 진행합니다.

#### 2. Install the Android SDK
Android Studio는 기본적으로 최신 Android SDK를 설치합니다. 그러나 네이티브 코드로 React Native 앱을 빌드하려면 특히\`Android 10 (Q)\` SDK가 필요합니다. Android Studio의 SDK Manager를 통해 추가 Android SDK를 설치할 수 있습니다.

이를 위해 Android Studio를 열고 "Configure" 버튼을 클릭 한 다음 "SDK Manager"를 선택합니다.

> SDK Manager는 **Appearance & Behavior** → **System Settings** → **Android SDK** 아래의 Android Studio "Preferences" 대화 상자에서도 찾을 수 있습니다.

SDK Manager 내에서 "SDK Platforms" 탭을 선택한 다음 오른쪽 하단의 "Show Package Details" 옆에있는 확인란을 선택합니다. \`Android 10 (Q)\`항목을 찾아 확장 한 후 다음 항목이 선택되었는지 확인합니다:

- \`Android SDK Platform 29\`
- \`Intel x86 Atom_64 System Image\` or \`Google APIs Intel x86 Atom System Image\`

그런 다음 "SDK Tools" 탭을 선택하고 여기에서 "Show Package Details" 옆의 확인란도 선택합니다. "Android SDK Build-Tools" 항목을 찾아 펼친 다음, \`29.0.2\`이 선택되어 있는지 확인합니다.

마지막으로 "Apply" 을 클릭하여 Android SDK 및 관련 빌드 도구를 다운로드하고 설치합니다.

#### 3. Configure the ANDROID_HOME environment variable

React Native 도구는 네이티브 코드로 앱을 빌드하기 위해 몇 가지 환경 변수를 설정해야합니다.

 \`$HOME/.bash_profile\` 또는 \`$HOME/.bashrc\`(\`zsh\`를 사용하는 경우 \`~/.zprofile\` 또는 \`~/.zshrc\`) 구성 파일에 다음 행을 추가하십시오:

\`\`\`sh
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
\`\`\`

>\`.bash_profile\`은 \`bash\`에만 해당됩니다. 다른 셸을 사용하는 경우 적절한 셸별 구성 파일을 편집해야합니다.

\`bash\`에 \`source $HOME/.bash_profile\`을 입력하거나 \`source $HOME/.zprofile\`을 입력하여 현재 셸에 구성을 로드합니다. \`echo $ANDROID_HOME\`을 실행하여 ANDROID_HOME이 설정되어 있고 \`echo $PATH\`를 실행하여 경로에 적절한 디렉토리가 추가되었는지 확인합니다.

> 올바른 Android SDK 경로를 사용하고 있는지 확인하십시오. **Appearance & Behavior** → **System Settings** → **Android SDK** 아래의 Android Studio "Preferences" 대화 상자에서 SDK의 실제 위치를 찾을 수 있습니다.


### Watchman

[Watchman installation guide](https://facebook.github.io/watchman/docs/install/#buildinstall)에 따라 소스에서 Watchman을 컴파일하고 설치합니다.

> [Watchman](https://facebook.github.io/watchman/docs/install/)은 파일 시스템의 변경 사항을 확인하기위한 Facebook 도구입니다. 특정 엣지 케이스에서 더 나은 성능과 향상된 호환성을 위해 설치하는 것이 좋습니다.(바꾸어말하면, 이것을 설치하지 않고도 진행할 순 있지만 mileage는 다를 수 있습니다. 지금 설치하면 나중에 더 수월해질 수 있습니다.)


### React Native Command Line Interface

React Native에는 기본 제공 command line 인터페이스가 있습니다. CLI의 특정 버전을 전역적으로 설치하고 관리하는 대신 Node.js와 함께 제공되는 \`npx\`를 사용하여 런타임에 현재 버전에 액세스하는 것이 좋습니다. \`npx react-native <command>\`를 사용하면 명령이 실행될 때 현재 안정된 버전의 CLI가 다운로드되고 실행됩니다.


## Creating a new application

> 이전에 글로벌 \`react-native-cli\` 패키지를 설치 한 경우 예기치 않은 문제가 발생할 수 있으므로 제거하십시오.

React Native에는 새 프로젝트를 생성하는 데 사용할 수있는 기본 제공 command line 인터페이스가 있습니다. Node.js와 함께 제공되는 \`npx\`를 사용하여 전역 적으로 설치하지 않고도 액세스 할 수 있습니다. "AwesomeProject"라는 새로운 React Native 프로젝트를 만들어 보겠습니다:

\`\`\`shell
npx react-native init AwesomeProject
\`\`\`


React Native를 기존 애플리케이션에 통합하거나 Expo에서 "ejected"한 경우 또는 기존 React Native 프로젝트에 Android 지원을 추가하는 경우에는 필요하지 않습니다. ([Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)를 참고하세요.) [Ignite CLI](https://github.com/infinitered/ignite)와 같은 타사 CLI를 사용하여 React Native 앱을 초기화 할 수도 있습니다.

### [Optional] Using a specific version or template

특정 React Native 버전으로 새 프로젝트를 시작하려면 \`--version\` 인수를 사용할 수 있습니다:

\`\`\`shell
npx react-native init AwesomeProject --version X.XX.X
\`\`\`

TypeScript와 같은 사용자 지정 React Native 템플릿을 \`--template\` 인수와 함께 사용하여 프로젝트를 시작할 수도 있습니다.

\`\`\`shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
\`\`\`

## Preparing the Android device

React Native Android 앱을 실행하려면 Android 기기가 필요합니다. 이것은 실제 Android 기기 일 수도 있고, 더 일반적으로 컴퓨터에서 Android 기기를 에뮬레이션 할 수있는 Android 가상 기기를 사용할 수 있습니다.

어느 쪽이든 개발을 위해 Android 앱을 실행할 수 있도록 기기를 준비해야합니다.


### Using a physical device

실제 Android 기기가 있는 경우 USB 케이블을 사용하여 컴퓨터에 연결하고 [here](https://reactnative.dev/docs/running-on-device) 안내에 따라 AVD 기기 대신 개발에 사용할 수 있습니다.


### Using a virtual device

Android Studio를 사용하여 \`./AwesomeProject/android\`를 여는 경우 Android Studio 내에서 "AVD Manager"를 열어 사용 가능한 Android Virtual Devices(AVDs) 목록을 볼 수 있습니다. 다음과 같은 아이콘을 찾으십시오:


![Android Studio AVD Manager](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=)

최근에 Android Studio를 설치했다면 [create a new AVD](https://developer.android.com/studio/run/managing-avds.html)이 필요할 수 있습니다. "Create Virtual Device..."를 선택한 다음 목록에서 기기를 선택하고 "Next"을 클릭 한 다음 ***\\*Q\\**** API Level 29 이미지를 선택합니다.

> 성능 향상을 위해 시스템에서 [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux)을 구성하는 것이 좋습니다. 이러한 지침을 따랐으면 AVD Manager로 돌아갑니다.


"Next"을 클릭 한 다음 "Finish"을 클릭하여 AVD를 만듭니다. 이 시점에서 AVD 옆에있는 녹색 삼각형 버튼을 클릭하여 시작하고 다음 단계로 진행할 수 있습니다.

## Running your React Native application

### Step 1: Start Metro

먼저 React Native와 함께 제공되는 JavaScript 번들러 인 Metro를 시작해야합니다. Metro는 "입력 파일과 다양한 옵션을 가져 와서 모든 코드와 해당 종속성을 포함하는 단일 JavaScript 파일을 반환합니다."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

Metro를 시작하려면 React Native 프로젝트 폴더 내에서 \`npx react-native start\`를 실행하세요:

\`\`\`shell
npx react-native start
\`\`\`

\`react-native start\`은 Metro Bundler를 시작합니다.

> Yarn 패키지 관리자를 사용하는 경우 기존 프로젝트 내에서 React Native 명령을 실행할 때 \`npx\` 대신\`yarn\`을 사용할 수 있습니다.

> 웹 개발에 익숙하다면 Metro는 React Native 앱용 webpack과 매우 유사합니다. Kotlin 또는 Java와 달리 JavaScript는 컴파일되지 않으며 React Native도 아닙니다. 번들링은 컴파일과 동일하지 않지만 시작 성능을 향상시키고 일부 플랫폼 별 JavaScript를 더 광범위하게 지원되는 JavaScript로 변환하는 데 도움이 될 수 있습니다.

### Step 2: Start your application

Metro Bundler가 자체 터미널에서 실행되도록하십시오. React Native 프로젝트 폴더에서 새 터미널을 엽니다. 다음을 실행하십시오:

\`\`\`shell
npx react-native run-android
\`\`\`

모든 것이 올바르게 설정되면 곧 Android 에뮬레이터에서 새 앱이 실행되는 것을 볼 수 있습니다.

\`npx react-native run-android\`는 앱을 실행하는 한 가지 방법입니다. Android Studio 내에서 직접 실행할 수도 있습니다.

> 이 작업을 수행할 수 없는 경우 [Troubleshooting](https://reactnative.dev/docs/troubleshooting#content) 페이지를 확인하세요.

### Modifying your app

이제 앱을 성공적으로 실행했으므로 수정해 보겠습니다.

- 선택한 텍스트 편집기에서 \`App.js\`를 열고 몇 줄을 편집합니다.
-\`R\` 키를 두 번 누르거나 개발자 메뉴 (\`Ctrl + M\`)에서\`Reload\`를 선택하여 변경 사항을 확인하세요!

### That's it!

축하합니다! 첫 번째 React Native 앱을 성공적으로 실행하고 수정했습니다.

![img](https://reactnative.dev/docs/assets/GettingStartedCongratulations.png)

## Now what?

-이 새로운 React Native 코드를 기존 애플리케이션에 추가하려면 [통합 가이드](https://reactnative.dev/docs/integration-with-existing-apps)를 확인하세요.

React Native에 대해 자세히 알고 싶다면 [Introduction to React Native](https://reactnative.dev/docs/getting-started)를 확인하세요.

`

export const text2_1=`
<-- Tab: Android (Java) -->

# Integration with Existing Apps

새 모바일 앱을 처음부터 시작할 때 Ract Native가 좋습니다. 그러나 기존 native 어플리케이션에 single view 또는 사용자 흐름을 추가하는 데도 유용합니다. 몇 단계로 새로운 React Native 기반 features, screens, view 등을 추가할 수 있습니다.

구체적인 단계는 대상 플랫폼에 따라 다릅니다.
  
-  **Android (Java)**

- iOS (Objective-C)
- iOS (Swift)

## Key Concepts[#](https://reactnative.dev/docs/integration-with-existing-apps#key-concepts)

Ract Native 구성 요소를 Android 애플리케이션에 통합하는 방법은 다음과 같습니다.
  
1. React Native 종속성 및 디렉토리 구조를 설정합니다.
2. JavaScript에서 React Native 구성 요소를 개발하십시오.
3. Android 앱에 'RactRootView'를 추가합니다. 이 보기는 React Native 구성 요소의 컨테이너 역할을 합니다.
4. React Native 서버를 시작하고 기본 애플리케이션을 실행합니다.
5. 애플리케이션의 React Native aspect가 예상대로 작동하는지 확인합니다.

## Prerequisites[#](https://reactnative.dev/docs/integration-with-existing-apps#prerequisites)

[환경 설정 가이드](https://reactnative.dev/docs/environment-setup) 의 React Native CLI Quickstart에 따라 Android용 React Native 앱을 구축하기 위한 개발 환경을 구성합니다.

### 1. Set up directory structure[#](https://reactnative.dev/docs/integration-with-existing-apps#1-set-up-directory-structure)

원활한 환경을 위해 통합 React Native 프로젝트의 새 폴더를 생성한 다음 기존 Android 프로젝트를 \`/android\` 하위 폴더에 복사하십시오.

### 2. Install JavaScript dependencies[#](https://reactnative.dev/docs/integration-with-existing-apps#2-install-javascript-dependencies)

프로젝트의 루트 디렉터리로 이동한 후 다음 내용으로 새 \`package.json\` 파일을 만드십시오.
  
\`\`\`jsx
{
"name": "MyReactNativeApp",
"version": "0.0.1",
"private": true,
"scripts": {
    "start":  "yarn react-native start"
    }
}
\`\`\`

다음으로, [yarn package manager 설치](https://yarnpkg.com/lang/en/docs/install/) 를 확인하세요.

\`react\` 와 \`react-native\` 패키지를 설치합니다. 터미널 또는 명령 프롬프트를 연 다음, \`package.json\` 파일이 있는 디렉토리로 이동하여 실행하세요:

\`\`\`jsx
$  yarn  add  react-native
\`\`\`

이렇게 하면 다음과 유사한 메시지가 출력됩니다(스크롤하여 출력을 확인합니다).

> warning "react-native@0.52.2" has unmet peer dependency "react@16.2.0".

이제 React를 설치해야합니다.:

\`\`\`jsx
$  yarn  add  react@version_printed_above
\`\`\`

Yarn이 새 \`/node_modules\` 폴더를 만들었습니다. 이 폴더는 프로젝트를 빌드하는 데 필요한 모든 JavaScript 종속성을 저장합니다.

\`node_modules/\` 를 \`.gitignore\` 파일에 추가하세요.

## Adding React Native to your app[#](https://reactnative.dev/docs/integration-with-existing-apps#adding-react-native-to-your-app)

### Configuring maven[#](https://reactnative.dev/docs/integration-with-existing-apps#configuring-maven)

앱의 \`build.gradle\` 파일에 React Native 및 JSC 종속성을 추가합니다.
  
\`\`\`jsx
dependencies {

implementation  "com.android.support:appcompat-v7:27.1.1"

...

implementation  "com.facebook.react:react-native:+"  // From node_modules

implementation  "org.webkit:android-jsc:+"

}
\`\`\`

> 기본 빌드에서 항상 특정 React Native 버전을 사용하고 있는지 확인하려면 +를 npm에서 다운로드한 실제 React Native 버전으로 바꿉니다.

로컬 React Native 및 JSC maven 디렉토리에 대한 항목을 최상위 수준 \`build.gradle\`에 추가합니다. 다른 maven 리포지토리 위의 "allprojects" 블록에 추가해야 합니다.

\`\`\`jsx

allprojects {

repositories {

maven {

// All of React Native (JS, Android binaries) is installed from npm

url  "$rootDir/../node_modules/react-native/android"

}

maven {

// Android JSC is installed from npm

url("$rootDir/../node_modules/jsc-android/dist")

}

...

}

...

}

\`\`\`

> 경로가 올바른지 확인하십시오! Android Studio에서 Gradle 동기화를 실행한 후 "Failed to resolve: com.facebook.react:react-native:0.x.x" 오류가 발생하면 안 됩니다.

### Enable native modules autolinking[#](https://reactnative.dev/docs/integration-with-existing-apps#enable-native-modules-autolinking)

[autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md)을 사용하려면 몇 군데 적용해야 합니다. 먼저 다음 항목을 \`settings.gradle\`에 추가하십시오.:

\`\`\`jsx
apply  from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
\`\`\`

다음으로 \`app/build.gradle\` 의 맨 아래에 다음 항목을 추가합니다.:

\`\`\`jsx
apply  from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
\`\`\`

### Configuring permissions[#](https://reactnative.dev/docs/integration-with-existing-apps#configuring-permissions)

다음으로 \`AndroidManifest.xml\`에 인터넷 사용 권한이 있는지 확인합니다.:

\`\`\`jsx
<uses-permission  android:name="android.permission.INTERNET"  />
\`\`\`

\`DevSettingsActivity\` 에 접근해야 한다면 \`AndroidManifest.xml\`에 다음을 추가하세요:

\`\`\`jsx
<activity  android:name="com.facebook.react.devsupport.DevSettingsActivity"  />
\`\`\`

이 기능은 개발 서버에서 JavaScript를 다시 로드할 때만 개발 모드에서 사용되므로 필요할 경우 릴리즈 빌드에서 이 기능을 제거할 수 있습니다.

### Cleartext Traffic (API level 28+)[#](https://reactnative.dev/docs/integration-with-existing-apps#cleartext-traffic-api-level-28)

> Android 9(API 레벨 28)부터는 기본적으로 일반 텍스트 트래픽이 사용되지 않도록 설정되므로 응용 프로그램이 Metro 번들러에 연결할 수 없습니다. 아래 변경 사항을 통해 디버그 빌드에서 텍스트 트래픽을 지울 수 있습니다.

### 1. Apply the \`usesCleartextTraffic\` option to your Debug \`AndroidManifest.xml\`[#](https://reactnative.dev/docs/integration-with-existing-apps#1-apply-the-usescleartexttraffic-option-to-your-debug-androidmanifestxml)

\`\`\`jsx
<!-- ... -->
<application
android:usesCleartextTraffic="true"  tools:targetApi="28"  >
<!-- ... -->
</application>
<!-- ... -->
\`\`\`

이는 릴리즈 빌드에 필요하지 않습니다.

네트워크 보안 구성 및 일반 텍스트 트래픽 정책에 대해 자세히 알아보려면  [다음과 같이 하십시오](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted).

### Code integration[#](https://reactnative.dev/docs/integration-with-existing-apps#code-integration)

이제 React Native를 통합하기 위해 기본 Android 애플리케이션을 수정하겠습니다.

### The React Native component[#](https://reactnative.dev/docs/integration-with-existing-apps#the-react-native-component)

첫 번째 코드는 애플리케이션에 통합될 새로운 "High Score" 화면의 실제 리액트 네이티브 코드입니다.

### 1. Create a \`index.js\` file[#](https://reactnative.dev/docs/integration-with-existing-apps#1-create-a-indexjs-file)

먼저 React Native 프로젝트의 루트에 빈 \`index.js\` 파일을 생성합니다.

\`index.js\`는 React Native 애플리케이션의 시작점이며 항상 필요합니다. 이 파일은 React Native 구성 요소 또는 애플리케이션의 일부인 다른 파일을 \`require\`로 하는 작은 파일일 수도 있고, 필요한 모든 코드를 포함할 수도 있습니다. 우리의 경우, 우리는 모든 것을 \`index.js\`에 넣을 것입니다.

### 2. Add your React Native code[#](https://reactnative.dev/docs/integration-with-existing-apps#2-add-your-react-native-code)

 \`index.js\`에서 구성 요소를 생성합니다. 여기 샘플에서는 스타일 \`<View>\`내에\`<Text>\` 구성요소를 추가할 것입니다.:

\`\`\`jsx
import  React  from  'react';

import {

AppRegistry,

StyleSheet,

Text,

View

} from  'react-native';

  

class  HelloWorld  extends  React.Component {

render() {

return (

<View  style={styles.container}>

<Text  style={styles.hello}>Hello, World</Text>

</View>

);

}

}

var  styles = StyleSheet.create({

container: {

flex:  1,

justifyContent:  'center'

},

hello: {

fontSize:  20,

textAlign:  'center',

margin:  10

}

});

  

AppRegistry.registerComponent(

'MyReactNativeApp',

() =>  HelloWorld

);
\`\`\`

### 3. Configure permissions for development error overlay[#](https://reactnative.dev/docs/integration-with-existing-apps#3-configure-permissions-for-development-error-overlay)

앱이 Android \`API level 23\` 이상을 대상으로 하는 경우 개발 빌드에 대해\`android.permission.SYSTEM_ALERT_WINDOW\` 사용 권한을 가지고 있는지 확인합니다. \`Settings.canDrawOverlays(this);\`에서 이를 확인할 수 있습니다. 이 오류는 다른 모든 창보다 위에 표시되어야 하므로 개발 빌드에 필요합니다. API 레벨 23(Android M)에 도입된 새로운 권한 시스템으로 인해 사용자가 승인해야 합니다. 다음 코드를 \`onCreate()\` 메소드의 액티비티에 추가하면 됩니다.
  

\`\`\`jsx
private  final  int  OVERLAY_PERMISSION_REQ_CODE = 1; // Choose any value...

if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

if (!Settings.canDrawOverlays(this)) {

Intent  intent = new  Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,

Uri.parse("package:" + getPackageName()));

startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);

}

}
\`\`\`

마지막으로, 일관된 UX에 대한 허용 또는 거부된 사례를 처리하려면 \`onActivityResult()\` 메서드(아래 코드 참조)를 재정의해야 합니다. 또한 \`startActivityForResult\`를 사용하는 Native Module의 통합을 위해서는 \`ReactInstanceManager\` 인스턴스의 \`onActivityResult\` 메서드로 결과를 전달해야 합니다.

\`\`\`jsx

@Override

protected  void  onActivityResult(int  requestCode, int  resultCode, Intent  data) {

if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {

if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

if (!Settings.canDrawOverlays(this)) {

// SYSTEM_ALERT_WINDOW permission not granted

}

}

}

mReactInstanceManager.onActivityResult( this, requestCode, resultCode, data );

}

\`\`\`

  

### The Magic: \`ReactRootView\`[#](https://reactnative.dev/docs/integration-with-existing-apps#the-magic-reactrootview)

  

React Native 런타임을 시작하고 JS 구성 요소를 렌더링하기 위해 네이티브 코드를 추가해 보겠습니다. 이를 위해 \`ReactRootView\`를 만들어 그 안에 있는 React 애플리케이션을 시작하고 이를 주요 콘텐츠 보기로 설정하는 \`Activity\`를 만들 예정입니다.

  

> Android 버전이 <5 인 경우에서는 Activity 대신 com.android.support:appcompat 패키지의 AppCompatActivity를 사용하세요.

  

\`\`\`jsx

public  class  MyReactActivity  extends  Activity  implements  DefaultHardwareBackBtnHandler {

private  ReactRootView  mReactRootView;

private  ReactInstanceManager  mReactInstanceManager;

  

@Override

protected  void  onCreate(Bundle  savedInstanceState) {

super.onCreate(savedInstanceState);

SoLoader.init(this, false);

  

mReactRootView = new  ReactRootView(this);

List<ReactPackage> packages = new  PackageList(getApplication()).getPackages();

// Packages that cannot be autolinked yet can be added manually here, for example:

// packages.add(new MyReactNativePackage());

// Remember to include them in \`settings.gradle\` and \`app/build.gradle\` too.

  

mReactInstanceManager = ReactInstanceManager.builder()

.setApplication(getApplication())

.setCurrentActivity(this)

.setBundleAssetName("index.android.bundle")

.setJSMainModulePath("index")

.addPackages(packages)

.setUseDeveloperSupport(BuildConfig.DEBUG)

.setInitialLifecycleState(LifecycleState.RESUMED)

.build();

// The string here (e.g. "MyReactNativeApp") has to match

// the string in AppRegistry.registerComponent() in index.js

mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);

  

setContentView(mReactRootView);

}

  

@Override

public  void  invokeDefaultOnBackPressed() {

super.onBackPressed();

}

}

\`\`\`

  

> React Native에 스타터 키트를 사용하는 경우 "HelloWorld" 문자열을 index.js 파일의 문자열로 바꿉니다(AppRegistry.registerComponent() 메서드에 대한 첫 번째 인수입니다).

  

“Sync Project files with Gradle”를 실행합니다.

  

Android Studio를 사용하는 경우\`Alt + Enter\`를 사용하여 MyReactActivity 클래스에 누락된 모든 import를 추가합니다. \`facebook\`패키지의 \`BuildConfig\`가 아닌 당신의 \`BuildConfig\`를 사용하십시오.

  

일부 리액트 네이티브 UI 구성 요소가 이 theme를 사용하므로\`MyReactActivity\`이라는 theme를 \`Theme.AppCompat.Light.NoActionBar\`로 정해야 합니다.

  

\`\`\`jsx

<activity

android:name=".MyReactActivity"

android:label="@string/app_name"

android:theme="@style/Theme.AppCompat.Light.NoActionBar">

</activity>

\`\`\`

  

> ReactInstanceManager는 여러 작업 및/또는fragments로 공유할 수 있습니다. ReactFragment 또는 ReactActivity를 직접 만들고 ReactInstanceManager를 보유하는 싱글톤 홀더를 보유하고자 합니다. ReactInstanceManager(예: ReactInstance Manager를 해당 Activities 또는 Fragments의 lifecycle 에 연결)가 필요한 경우 싱글톤에서 제공하는 기능을 사용하십시오.

  

다음으로, 작업 수명 주기 콜백을 \`ReactInstanceManager\`와 \`ReactRootView\`에 전달해야 합니다.:

  

\`\`\`jsx

@Override

protected  void  onPause() {

super.onPause();

  

if (mReactInstanceManager != null) {

mReactInstanceManager.onHostPause(this);

}

}

  

@Override

protected  void  onResume() {

super.onResume();

  

if (mReactInstanceManager != null) {

mReactInstanceManager.onHostResume(this, this);

}

}

  

@Override

protected  void  onDestroy() {

super.onDestroy();

  

if (mReactInstanceManager != null) {

mReactInstanceManager.onHostDestroy(this);

}

if (mReactRootView != null) {

mReactRootView.unmountReactApplication();

}

}

\`\`\`

  

또한 React Native에  back button events를 전달해야 합니다.:

  

\`\`\`jsx

@Override

public  void  onBackPressed() {

if (mReactInstanceManager != null) {

mReactInstanceManager.onBackPressed();

} else {

super.onBackPressed();

}

}

\`\`\`

  

이를 통해 JavaScript는 사용자가 하드웨어 back button(예: implement navigation)을 누를 때 발생하는 작업을 제어할 수 있습니다. JavaScript에서 뒤로 버튼을 누르지 않으면 \`invokeDefaultOnBackPressed\`  메서드가 호출됩니다. 기본적으로 \`Activity\` 가 완료됩니다.

  

마지막으로 개발 메뉴를 연결해야 합니다. 기본적으로 이 기능은 장치를 흔들 때(rage) 활성화되지만 에뮬레이터에서는 사용하기 어렵습니다. 따라서 하드웨어 메뉴 버튼을 누르면 표시됩니다(Android Studio 에뮬레이터를 사용하는 경우 \`Ctrl + M\`사용).

  

\`\`\`jsx

@Override

public  boolean  onKeyUp(int  keyCode, KeyEvent  event) {

if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {

mReactInstanceManager.showDevOptionsDialog();

return  true;

}

return  super.onKeyUp(keyCode, event);

}

\`\`\`

  

이제 activity는 JavaScript code를 실행할 준비가 되었습니다.

  

### 통합 테스트[#](https://reactnative.dev/docs/integration-with-existing-apps#test-your-integration)

  


이제 React Native를 현재 애플리케이션과 통합하기위한 모든 기본 단계를 완료했습니다. 이제 [Metro bundler](https://facebook.github.io/metro/)를 시작하여 \`index.bundle\` 패키지를 빌드하고, 이를 제공하기 위해 localhost에서 실행중인 서버를 빌드합니다.

  

### 1. 패키저 실행[#](https://reactnative.dev/docs/integration-with-existing-apps#1-run-the-packager)

  

앱을 실행하려면 먼저 개발 서버를 시작해야합니다. 이를 위해서, React Native 프로젝트의 루트 디렉터리에서 다음 명령을 실행하세요:

  

\`\`\`jsx

$  yarn  start

\`\`\`

  

### 2. 앱 실행하기[#](https://reactnative.dev/docs/integration-with-existing-apps#2-run-the-app)

  

이제 정상적으로 Android 앱을 빌드하고 실행합니다.


앱 내에서 React 기반 활동에 도달하면 개발 서버에서 JavaScript 코드를 로드하고 다음을 표시해야합니다:

  

![image](https://user-images.githubusercontent.com/65345381/113375058-94321b80-93a9-11eb-94d9-c352701a6171.png)


  

### Android Studio에서 릴리스 빌드 생성하기[#](https://reactnative.dev/docs/integration-with-existing-apps#creating-a-release-build-in-android-studio)

  
Android Studio를 사용하여 릴리스 빌드를 만들 수 있습니다! 기존의 native Android 앱의 release build를 만드는 것만큼 빠릅니다. 모든 릴리스 빌드 전에 수행해야하는 추가적인 단계가 하나 있습니다. native Android 앱에 포함될 React Native 번들을 생성하려면 다음을 실행해야합니다:


\`\`\`jsx

$  npx  react-native  bundle --platform  android --dev  false --entry-file  index.js --bundle-output  android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest  android/com/your-company-name/app-package-name/src/main/res/

\`\`\`

  
> 경로를 올바른 경로로 바꾸고, 만약 assets 폴더가 없다면 이를 만드는 것을 잊지 마십시오.
  

이제 기존과 같이 Android Studio 내에서 native 앱의 릴리스 빌드를 생성하면됩니다.

  

### Now what?[#](https://reactnative.dev/docs/integration-with-existing-apps#now-what)

  
이 시점에서 기존처럼 앱을 계속 개발할 수 있습니다. React Native 작업에 대한 자세한 내용은 [debugging](https://reactnative.dev/docs/debugging) 및 [deployment](https://reactnative.dev/docs/running-on-device)문서를 참조하세요.

  

`

export const text2_2 = `
<-- Tab: iOS (Objective-C) -->

# Integration with Existing Apps

새 모바일 앱을 처음부터 시작할 때 Ract Native가 좋습니다. 그러나 기존 native 어플리케이션에 single view 또는 사용자 흐름을 추가하는 데도 유용합니다. 몇 단계로 새로운 React Native 기반 features, screens, view 등을 추가할 수 있습니다.

구체적인 단계는 대상 플랫폼에 따라 다릅니다.


- Android (Java)
- **iOS (Objective-C)**
- iOS (Swift)

## Key Concepts[#](https://reactnative.dev/docs/integration-with-existing-apps#key-concepts)

React Native 구성 요소를 iOS 애플리케이션에 통합하기위한 핵심은 다음과 같습니다.

1. React Native 종속성 및 디렉터리 구조를 설정합니다.
2. 앱에서 사용할 React Native 구성 요소를 이해합니다.
3. CocoaPods를 사용하여 이러한 구성 요소를 종속성으로 추가합니다.
4. JavaScript로 React Native 구성 요소를 개발합니다.
5. iOS 앱에\`RCTRootView\`를 추가합니다. 이 뷰는 React Native 구성 요소의 컨테이너 역할을합니다.
6. React Native 서버를 시작하고 기본 애플리케이션을 실행합니다.
7. 애플리케이션의 React Native 부분이 예상대로 작동하는지 확인합니다.


## Prerequisites[#](https://reactnative.dev/docs/integration-with-existing-apps#prerequisites)

iOS 용 React Native 앱 빌드를위한 개발 환경을 구성하려면 [환경 설정 가이드](https://reactnative.dev/docs/environment-setup)의 React Native CLI 빠른 시작을 따르세요.


### 1. Set up directory structure[#](https://reactnative.dev/docs/integration-with-existing-apps#1-set-up-directory-structure)

원활한 진행을 위해서 통합된 React Native 프로젝트를 위한 새 폴더를 만든 다음 기존 iOS 프로젝트를 \`/ios\`하위 폴더에 복사합니다.

### 2. Install JavaScript dependencies[#](https://reactnative.dev/docs/integration-with-existing-apps#2-install-javascript-dependencies)

프로젝트의 루트 디렉터리로 이동하여 다음 내용으로 새 \`package.json\` 파일을 만듭니다.

\`\`\`json
{
  "name": "MyReactNativeApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "yarn react-native start"
  }
}
\`\`\`

[installed the yarn package manager](https://yarnpkg.com/lang/en/docs/install/)를 진행했는지 확인합니다.

\`react\` 및\`react-native\` 패키지를 설치합니다. 터미널 또는 명령 프롬프트를 열고\`package.json\` 파일이있는 디렉토리로 이동하여 다음을 실행합니다.

- npm

  \`\`\`shell
  npm install react-native
  \`\`\`

- Yarn

  \`\`\`shell
  yarn add react-native
  \`\`\`

그러면 다음과 유사한 메시지가 출력됩니다(yarn 출력에서 위로 스크롤하여 확인).

> warning "[react-native@0.52.2](mailto:react-native@0.52.2)" has unmet peer dependency "[react@16.2.0](mailto:react@16.2.0)".

괜찮습니다. 이는 React를 설치해야 함을 의미합니다.

- npm

  \`\`\`shell
  npm install react@version_printed_above
  \`\`\`

- Yarn

  \`\`\`shell
  yarn add react@version_printed_above
  \`\`\`

설치 과정에서 새로운\`/node_modules\` 폴더가 생성되었습니다. 이 폴더는 프로젝트를 빌드하는 데 필요한 모든 JavaScript 종속성을 저장합니다.

\`.gitignore\` 파일에\`node_modules/\`를 추가합니다.

### 3. Install CocoaPods[#](https://reactnative.dev/docs/integration-with-existing-apps#3-install-cocoapods)

[CocoaPods](http://cocoapods.org/)는 iOS 및 macOS 개발을위한 패키지 관리 도구입니다. 이를 사용하여 실제 React Native 프레임 워크 코드를 현재 프로젝트에 로컬로 추가합니다.

[Homebrew](http://brew.sh/)이용하여 CocoaPods를 설치하는 것을 추천합니다.

\`\`\`shell
brew install cocoapods
\`\`\`

> 기술적으로 CocoaPods를 사용하지 않는 것이 가능하지만 수동 라이브러리 및 링커 추가가 필요하므로 이 프로세스가 지나치게 복잡해집니다.

## Adding React Native to your app[#](https://reactnative.dev/docs/integration-with-existing-apps#adding-react-native-to-your-app)

[app for integration](https://github.com/JoelMarcey/iOS-2048)이 [2048](https://en.wikipedia.org/wiki/2048_(video_game))게임이라고 가정합니다. 다음은 React Native가 없는 네이티브 애플리케이션의 메인 메뉴입니다.

![Before RN Integration](data:image/png;base64,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)

### Command Line Tools for Xcode[#](https://reactnative.dev/docs/integration-with-existing-apps#command-line-tools-for-xcode)

명령 줄 도구를 설치합니다. Xcode 메뉴에서 "Preferences..."를 선택하십시오. 위치 패널로 이동하고 명령 줄 도구 드롭 다운에서 최신 버전을 선택하여 도구를 설치합니다.

![Xcode Command Line Tools](https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png)

### Configuring CocoaPods dependencies[#](https://reactnative.dev/docs/integration-with-existing-apps#configuring-cocoapods-dependencies)

React Native를 애플리케이션에 통합하기 전에 React Native 프레임 워크의 어떤 부분을 통합할지 결정해야합니다. CocoaPods를 사용하여 앱이 의존 할 이러한 "subspecs"을 지정합니다.

지원되는\`subspec\` 목록은 [\`/node_modules/react-native/React.podspec\`](https://github.com/facebook/react-native/blob/master/React.podspec)에서 확인할 수 있습니다. 일반적으로 기능에 따라 이름이 지정됩니다. 예를 들어, 일반적으로 항상\`Core\` \`subspec\`이 필요합니다. 그러면 \`AppRegistry\`,\`StyleSheet\`,\`View\` 및 기타 핵심 React Native 라이브러리가 제공됩니다. React Native \`Text\` 라이브러리 (예 :\`<Text>\`요소 용)를 추가하려면\`RCTText\` \`subspec\`이 필요합니다. \`Image\` 라이브러리 (예 :\`<Image>\`요소의 경우)를 원한다면\`RCTImage\` \`subspec\`이 필요합니다.

앱이 'Podfile'파일에 의존 할 \`subspec\`을 지정할 수 있습니다. \`Podfile\`을 만드는 가장 쉬운 방법은 프로젝트의\`/ios\` 하위 폴더에서 CocoaPods\` init\` 명령을 실행하는 것입니다.

\`\`\`shell
pod init
\`\`\`

\`Podfile\`에는 통합 목적으로 조정할 상용구 설정이 포함됩니다.

> \`Podfile\` 버전은\`react-native\` 버전에 따라 변경됩니다. 사용해야 하는\`Podfile\`의 특정 버전은 https://react-native-community.github.io/upgrade-helper/ 를 참조하십시오.

궁극적으로\`Podfile\`은 다음과 유사해야합니다:

\`\`\`jsx
# The target name is most likely the name of your project.
target 'NumberTileGame' do

  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the \`:path\` accordingly
  pod 'FBLazyVector', :path => "../node_modules/react-native/Libraries/FBLazyVector"
  pod 'FBReactNativeSpec', :path => "../node_modules/react-native/Libraries/FBReactNativeSpec"
  pod 'RCTRequired', :path => "../node_modules/react-native/Libraries/RCTRequired"
  pod 'RCTTypeSafety', :path => "../node_modules/react-native/Libraries/TypeSafety"
  pod 'React', :path => '../node_modules/react-native/'
  pod 'React-Core', :path => '../node_modules/react-native/'
  pod 'React-CoreModules', :path => '../node_modules/react-native/React/CoreModules'
  pod 'React-Core/DevSupport', :path => '../node_modules/react-native/'
  pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'
  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
  pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'
  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
  pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'
  pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'
  pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'
  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
  pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'
  pod 'React-Core/RCTWebSocket', :path => '../node_modules/react-native/'

  pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'
  pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'
  pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'
  pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'
  pod 'ReactCommon/callinvoker', :path => "../node_modules/react-native/ReactCommon"
  pod 'ReactCommon/turbomodule/core', :path => "../node_modules/react-native/ReactCommon"
  pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

end
\`\`\`

\`Podfile\`을 생성했으면 React Native pod를 설치할 준비가되었습니다.

\`\`\`shell
$ pod install
\`\`\`

다음과 같은 출력을 확인할 수 있습니다:

\`\`\`shell
Analyzing dependencies
Fetching podspec for \`React\` from \`../node_modules/react-native\`
Downloading dependencies
Installing React (0.62.0)
Generating Pods project
Integrating client project
Sending stats
Pod installation complete! There are 3 dependencies from the Podfile and 1 total pod installed.
\`\`\`

> 이것이\`xcrun\`을 언급하는 오류와 함께 실패하면 **Preferences > Locations**의 Xcode에서 Command Line Tools가 할당되었는지 확인합니다.

### Code integration[#](https://reactnative.dev/docs/integration-with-existing-apps#code-integration)

이제 실제로 네이티브 iOS 애플리케이션을 수정하여 React Native를 통합합니다. 2048 샘플 앱의 경우 React Native에 "High Score"화면을 추가합니다.

#### The React Native component[#](https://reactnative.dev/docs/integration-with-existing-apps#the-react-native-component)

우리가 작성할 첫 번째 코드는 애플리케이션에 통합 될 새로운 "High Score" 화면에 대한 실제 React Native 코드입니다.

##### 1. Create a \`index.js\` file[#](https://reactnative.dev/docs/integration-with-existing-apps#1-create-a-indexjs-file)

먼저 React Native 프로젝트의 루트에 빈\`index.js\` 파일을 만듭니다.

\`index.js\`는 React Native 애플리케이션의 시작점이며 항상 필요합니다. React Native 구성 요소 또는 애플리케이션의 일부인 다른 파일을 \`require\` 하는 작은 파일이나 필요한 모든 코드를 포함 할 수 있습니다. 우리의 경우 모든 것을 \`index.js\`에 넣을 것입니다.

##### 2. Add your React Native code[#](https://reactnative.dev/docs/integration-with-existing-apps#2-add-your-react-native-code)

\`index.js\`에서 구성 요소를 만듭니다. 여기 샘플에서는 스타일이 지정된\`<View>\`내에\`<Text>\`구성 요소를 추가합니다.

\`\`\`jsx
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RNHighScores extends React.Component {
  render() {
    var contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\\n'}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
\`\`\`

> \`RNHighScores\`는 iOS 애플리케이션 내에서 React Native에 뷰를 추가 할 때 사용할 모듈의 이름입니다.


#### The Magic: \`RCTRootView\`[#](https://reactnative.dev/docs/integration-with-existing-apps#the-magic-rctrootview)

이제 React Native 구성 요소가 \`index.js\`를 통해 생성되었으므로 해당 구성 요소를 신규 또는 기존 \`ViewController\`에 추가해야합니다. 가장 쉬운 방법은 선택적으로 구성 요소에 대한 이벤트 경로를 만든 다음 해당 구성 요소를 기존 \`ViewController\`에 추가하는 것입니다.

React Native 구성 요소를 실제로 \`RCTRootView\`라는 이름을 포함하는 \`ViewController\`의 새 네이티브 뷰와 연결합니다.

##### 1. Create an Event Path[#](https://reactnative.dev/docs/integration-with-existing-apps#1-create-an-event-path)

메인 게임 메뉴에 새로운 링크를 추가하여 "High Score"React Native 페이지로 이동할 수 있습니다.

![Event Path](data:image/png;base64,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fh9SKZfLzWazVqsJLsAD4/G42+1Wq9WQym63S3bo9XqCC/BAHMdJbYfD4Xq9Dp9Ur9cHg0Gyw2w2i6KoVCo5wwV44L22qVf1+/3wDQQX4HQ6CS4Aggs8kWKxKLgAH/r89cVVo9HIlALAPYVCYbvdJsMGIZVkbbJDq9UK9wkuQLvdnkwmcRyHVPL5fKfTCc/M84zAD/A8IwA+mgEILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIL75AAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABPd4PF6v1wAguJk6HA7L5XKxWGguILgZulwuq9Xqdrudz2fNBQQ3Q7lcLoqit9+aCwhutiqVSqPR0FxAcDUXIEVwNRdAcDUXEFzNBUgfXM0FEFzN5ZV9uwBvIs3jOP5m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)

##### 2. Event Handler[#](https://reactnative.dev/docs/integration-with-existing-apps#2-event-handler)

이제 메뉴 링크에서 이벤트 핸들러를 추가합니다. 애플리케이션의 메인 \`ViewController\`에 메소드가 추가됩니다. 이것이 \`RCTRootView\`가 작동하는 곳 입니다.

React Native 애플리케이션을 빌드 할 때 [Metro bundler](https://facebook.github.io/metro/)를 사용하여 React Native 서버에서 제공 할 \`index.bundle\`을 만듭니다. \`index.bundle\` 내부에는\`RNHighScore\` 모듈이 있습니다. 따라서 \`RCTRootView\`가 \`index.bundle\` 리소스의 위치(\`NSURL\`을 통해)를 가리키고 모듈에 연결해야합니다.

디버깅 목적으로 이벤트 핸들러가 호출되었음을 기록합니다. 그런 다음 \`index.bundle\` 내에 존재하는 React Native 코드의 위치로 문자열을 생성합니다. 마지막으로 메인 \`RCTRootView\`를 생성합니다.  React Native 컴포넌트에 대한 코드를 작성할 때 [위](https://reactnative.dev/docs/integration-with-existing-apps#the-react-native-component)에서 생성한 \`moduleName\`으로 \`RNHighScores\`를 제공하는 방법에 주목하십시오.

먼저 \`RCTRootView\`헤더를 \`import\`합니다.

\`\`\`objective-c
#import <React/RCTRootView.h>
\`\`\`

> \`initialProperties\`는 예시 목적으로 여기에 있으므로 높은 점수 화면에 대한 데이터가 있습니다. React Native 컴포넌트에서 \`this.props\`를 사용하여 해당 데이터에 액세스합니다.

\`\`\`objective-c
- (IBAction)highScoreButtonPressed:(id)sender {
    NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                  moduleName: @"RNHighScores"
                           initialProperties:
                             @{
                               @"scores" : @[
                                 @{
                                   @"name" : @"Alex",
                                   @"value": @"42"
                                  },
                                 @{
                                   @"name" : @"Joel",
                                   @"value": @"10"
                                 }
                               ]
                             }
                               launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}
\`\`\`

> \`RCTRootView initWithURL\`은 새 JSC VM을 시작합니다. 리소스를 절약하고 네이티브 앱의 다른 부분에서 RN 뷰 간의 통신을 단순화하기 위해 단일 JS 런타임과 연결된 React Native 에서 제공하는 여러 뷰를 가질 수 있습니다. 그렇게하려면 \`[RCTRootView alloc] initWithURL\`을 사용하는 대신 [\`RCTBridge initWithBundleURL\`](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L93)을 사용하여 브리지를 만든 다음 \`RCTRootView initWithBridge\`를 사용하세요.

> 앱을 프로덕션으로 이동할 때\`NSURL\`은\`[[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];\`과 같은 것을 통해 디스크의 사전 번들 파일을 가리킬 수 있습니다. \`node_modules/react-native/scripts/\`의 \`react-native-xcode.sh\` 스크립트를 사용하여 사전 번들 파일을 생성 할 수 있습니다.

##### 3. Wire Up[#](https://reactnative.dev/docs/integration-with-existing-apps#3-wire-up)

메인 메뉴의 새 링크를 새로 추가 된 이벤트 핸들러 메서드에 연결합니다.

![Event Path](https://reactnative.dev/assets/images/react-native-add-react-native-integration-wire-up-37137857e0876d2aca7049db6d82fcb6.png)

> 이를 수행하는 더 쉬운 방법 중 하나는 스토리 보드에서 뷰를 열고 새 링크를 마우스 오른쪽 단추로 클릭하는 것입니다. \`Touch Up Inside\`이벤트와 같은 것을 선택하고 스토리 보드로 드래그 한 다음 제공된 목록에서 생성 된 방법을 선택합니다.

### Test your integration[#](https://reactnative.dev/docs/integration-with-existing-apps#test-your-integration)

이제 React Native를 현재 애플리케이션과 통합하기 위한 모든 기본 단계를 완료했습니다. 이제 [Metro bundler](https://facebook.github.io/metro/)를 시작하여\`index.bundle\` 패키지를 빌드하고\`localhost\`에서 실행되는 서버를 제공합니다.

##### 1. Add App Transport Security exception[#](https://reactnative.dev/docs/integration-with-existing-apps#1-add-app-transport-security-exception)

Apple은 implicit cleartext HTTP 리소스로드를 차단했습니다. 따라서 다음 프로젝트의 \`Info.plist\` (또는 이와 동등한) 파일을 추가해야합니다.

\`\`\`xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
\`\`\`

> 앱 전송 보안은 사용자에게 좋습니다. 프로덕션 용으로 앱을 출시하기 전에 다시 활성화해야합니다.

##### 2. Run the packager[#](https://reactnative.dev/docs/integration-with-existing-apps#2-run-the-packager)

앱을 실행하려면 먼저 개발 서버를 시작해야합니다. 이렇게하려면 React Native 프로젝트의 루트 디렉터리에서 다음 명령을 실행합니다.

- npm

  \`\`\`shell
  npm start
  \`\`\`

- Yarn

  \`\`\`shell
  yarn start
  \`\`\`

##### 3. Run the app[#](https://reactnative.dev/docs/integration-with-existing-apps#3-run-the-app)

Xcode 또는 선호하는 편집기를 사용하는 경우 기본 iOS 애플리케이션을 정상적으로 빌드하고 실행하십시오. 또는 다음을 사용하여 명령 줄에서 앱을 실행할 수 있습니다.

\`\`\`shell
# From the root of your project
$ npx react-native run-ios
\`\`\`

샘플 애플리케이션에서 "High Scores"에 대한 링크를 확인한 다음 이를 클릭하면 React Native 구성 요소의 렌더링을 볼 수 있습니다.

*native* 애플리케이션 홈 화면은 다음과 같습니다:

![Home Screen](data:image/png;base64,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)

*React Native* 의 high score 스크린입니다:

![High Scores](data:image/png;base64,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)

> 애플리케이션 실행시 module resolution 문제가 발생하는 경우 [this GitHub issue](https://github.com/facebook/react-native/issues/4968)에서 정보와 가능한 해결 방법을 참조하세요. [This comment](https://github.com/facebook/react-native/issues/4968#issuecomment-220941717)이 가능한 최신 해결 방법 인 것 같습니다.


### See the Code[#](https://reactnative.dev/docs/integration-with-existing-apps#see-the-code)

샘플 앱에 React Native 화면을 추가 한 코드는 [GitHub](https://github.com/JoelMarcey/iOS-2048/commit/9ae70c7cdd53eb59f5f7c7daab382b0300ed3585)에서 확인할 수 있습니다.

### Now what?[#](https://reactnative.dev/docs/integration-with-existing-apps#now-what)

이 시점에서 평소처럼 앱을 계속 개발할 수 있습니다. React Native 작업에 대한 자세한 내용은 [debugging](https://reactnative.dev/docs/debugging) 및 [deployment](https://reactnative.dev/docs/running-on-device) 문서를 참조하세요.

`

export const text2_3 = `
<-- Tab: iOS (Swift) -->

# Integration with Existing Apps

새 모바일 앱을 처음부터 시작할 때 Ract Native가 좋습니다. 그러나 기존 native 어플리케이션에 single view 또는 사용자 흐름을 추가하는 데도 유용합니다. 몇 단계로 새로운 React Native 기반 features, screens, view 등을 추가할 수 있습니다.

구체적인 단계는 대상 플랫폼에 따라 다릅니다.

- Android (Java)
- iOS (Objective-C)
- **iOS (Swift)**

## Key Concepts[#](https://reactnative.dev/docs/integration-with-existing-apps#key-concepts)

React Native 구성 요소를 iOS 애플리케이션에 통합하기위한 핵심은 다음과 같습니다.

React Native 종속성 및 디렉터리 구조를 설정합니다.
앱에서 사용할 React Native 구성 요소를 이해합니다.
CocoaPods를 사용하여 이러한 구성 요소를 종속성으로 추가합니다.
JavaScript로 React Native 구성 요소를 개발합니다.
iOS 앱에RCTRootView를 추가합니다. 이 뷰는 React Native 구성 요소의 컨테이너 역할을합니다.
React Native 서버를 시작하고 기본 애플리케이션을 실행합니다.
애플리케이션의 React Native 부분이 예상대로 작동하는지 확인합니다.

## Prerequisites[#](https://reactnative.dev/docs/integration-with-existing-apps#prerequisites)

iOS 용 React Native 앱 빌드를위한 개발 환경을 구성하려면 [환경 설정 가이드](https://reactnative.dev/docs/environment-setup)의 React Native CLI 빠른 시작을 따르세요.

### 1. Set up directory structure[#](https://reactnative.dev/docs/integration-with-existing-apps#1-set-up-directory-structure)

원활한 진행을 위해서 통합된 React Native 프로젝트를 위한 새 폴더를 만든 다음 기존 iOS 프로젝트를 \`/ios\`하위 폴더에 복사합니다.

### 2. Install JavaScript dependencies[#](https://reactnative.dev/docs/integration-with-existing-apps#2-install-javascript-dependencies)

프로젝트의 루트 디렉터리로 이동하여 다음 내용으로 새 \`package.json\` 파일을 만듭니다.

\`\`\`json
{
  "name": "MyReactNativeApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "yarn react-native start"
  }
}
\`\`\`

[installed the yarn package manager](https://yarnpkg.com/lang/en/docs/install/)를 진행했는지 확인합니다.

\`react\` 및\`react-native\` 패키지를 설치합니다. 터미널 또는 명령 프롬프트를 열고\`package.json\` 파일이있는 디렉토리로 이동하여 다음을 실행합니다.

\`\`\`shell
$ yarn add react-native
\`\`\`

그러면 다음과 유사한 메시지가 출력됩니다(yarn 출력에서 위로 스크롤하여 확인).

> warning "[react-native@0.52.2](mailto:react-native@0.52.2)" has unmet peer dependency "[react@16.2.0](mailto:react@16.2.0)".

괜찮습니다. 이는 React를 설치해야 함을 의미합니다.

\`\`\`shell
$ yarn add react@version_printed_above
\`\`\`

yarn이 새로운\`/node_modules\` 폴더를 생성했습니다. 이 폴더는 프로젝트를 빌드하는 데 필요한 모든 JavaScript 종속성을 저장합니다.

\`.gitignore\` 파일에\`node_modules/\`를 추가합니다.

### 3. Install CocoaPods[#](https://reactnative.dev/docs/integration-with-existing-apps#3-install-cocoapods)

[CocoaPods](http://cocoapods.org/)는 iOS 및 macOS 개발을위한 패키지 관리 도구입니다. 이를 사용하여 실제 React Native 프레임 워크 코드를 현재 프로젝트에 로컬로 추가합니다.

[Homebrew](http://brew.sh/)이용하여 CocoaPods를 설치하는 것을 추천합니다.

\`\`\`shell
$ brew install cocoapods
\`\`\`

> 기술적으로 CocoaPods를 사용하지 않는 것이 가능하지만 수동 라이브러리 및 링커 추가가 필요하므로 이 프로세스가 지나치게 복잡해집니다.

## Adding React Native to your app[#](https://reactnative.dev/docs/integration-with-existing-apps#adding-react-native-to-your-app)

[app for integration](https://github.com/JoelMarcey/swift-2048)이 [2048](https://en.wikipedia.org/wiki/2048_(video_game))게임이라고 가정합니다. 다음은 React Native가 없는 네이티브 애플리케이션의 메인 메뉴입니다.


![Before RN Integration](data:image/png;base64,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)

### Command Line Tools for Xcode[#](https://reactnative.dev/docs/integration-with-existing-apps#command-line-tools-for-xcode)

명령 줄 도구를 설치합니다. Xcode 메뉴에서 "Preferences..."를 선택하십시오. 위치 패널로 이동하고 명령 줄 도구 드롭 다운에서 최신 버전을 선택하여 도구를 설치합니다.

![Xcode Command Line Tools](https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png)

### Configuring CocoaPods dependencies[#](https://reactnative.dev/docs/integration-with-existing-apps#configuring-cocoapods-dependencies)

React Native를 애플리케이션에 통합하기 전에 React Native 프레임 워크의 어떤 부분을 통합할지 결정해야합니다. CocoaPods를 사용하여 앱이 의존 할 이러한 "subspecs"을 지정합니다.

지원되는\`subspec\` 목록은 [\`/node_modules/react-native/React.podspec\`](https://github.com/facebook/react-native/blob/master/React.podspec)에서 확인할 수 있습니다. 일반적으로 기능에 따라 이름이 지정됩니다. 예를 들어, 일반적으로 항상\`Core\` \`subspec\`이 필요합니다. 그러면 \`AppRegistry\`,\`StyleSheet\`,\`View\` 및 기타 핵심 React Native 라이브러리가 제공됩니다. React Native \`Text\` 라이브러리 (예 :\`<Text>\`요소 용)를 추가하려면\`RCTText\` \`subspec\`이 필요합니다. \`Image\` 라이브러리 (예 :\`<Image>\`요소의 경우)를 원한다면\`RCTImage\` \`subspec\`이 필요합니다.

앱이 'Podfile'파일에 의존 할 \`subspec\`을 지정할 수 있습니다. \`Podfile\`을 만드는 가장 쉬운 방법은 프로젝트의\`/ios\` 하위 폴더에서 CocoaPods\` init\` 명령을 실행하는 것입니다.

\`\`\`shell
$ pod init
\`\`\`

\`Podfile\`에는 통합 목적으로 조정할 상용구 설정이 포함됩니다.

> \`Podfile\` 버전은\`react-native\` 버전에 따라 변경됩니다. 사용해야 하는\`Podfile\`의 특정 버전은 https://react-native-community.github.io/upgrade-helper/ 를 참조하십시오.

궁극적으로\`Podfile\`은 다음과 유사해야합니다:

\`\`\`json
source 'https://github.com/CocoaPods/Specs.git'

# Required for Swift apps
platform :ios, '8.0'
use_frameworks!

# The target name is most likely the name of your project.
target 'swift-2048' do

  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the \`:path\` accordingly
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge', # Include this for RN >= 0.47
    'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # needed for debugging
    # Add any other subspecs you want to use in your project
  ]
  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod "Yoga", :path => "../node_modules/react-native/ReactCommon/yoga"

  # Third party deps podspec link
  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

end
\`\`\`

\`Podfile\`을 생성했으면 React Native pod를 설치할 준비가되었습니다.

\`\`\`shell
$ pod install
\`\`\`

다음과 같은 출력을 확인할 수 있습니다:

\`\`\`json
Analyzing dependencies
Fetching podspec for \`React\` from \`../node_modules/react-native\`
Downloading dependencies
Installing React (0.62.0)
Generating Pods project
Integrating client project
Sending stats
Pod installation complete! There are 3 dependencies from the Podfile and 1 total pod installed.
\`\`\`

> 이것이\`xcrun\`을 언급하는 오류와 함께 실패하면 **Preferences > Locations**의 Xcode에서 Command Line Tools가 할당되었는지 확인합니다.

> "*The \`swift-2048 [Debug]\` target overrides the \`FRAMEWORK_SEARCH_PATHS\` build setting defined in \`Pods/Target Support Files/Pods-swift-2048/Pods-swift-2048.debug.xcconfig\`. This can lead to problems with the CocoaPods installation*"와 같은 오류가 출력된다면, \`Debug\` 및 \`Release\` 모두에 대한 \`Build Settings\`의 \`Framework Search Paths\`에 \`$(inherited)\`만 포함되어 있는지 확인합니다.


### Code integration[#](https://reactnative.dev/docs/integration-with-existing-apps#code-integration)

이제 실제로 네이티브 iOS 애플리케이션을 수정하여 React Native를 통합합니다. 2048 샘플 앱의 경우 React Native에 "High Score"화면을 추가합니다.

#### The React Native component[#](https://reactnative.dev/docs/integration-with-existing-apps#the-react-native-component)

우리가 작성할 첫 번째 코드는 애플리케이션에 통합 될 새로운 "High Score" 화면에 대한 실제 React Native 코드입니다.

##### 1. Create a \`index.js\` file[#](https://reactnative.dev/docs/integration-with-existing-apps#1-create-a-indexjs-file)

먼저 React Native 프로젝트의 루트에 빈\`index.js\` 파일을 만듭니다.

\`index.js\`는 React Native 애플리케이션의 시작점이며 항상 필요합니다. React Native 구성 요소 또는 애플리케이션의 일부인 다른 파일을 \`require\` 하는 작은 파일이나 필요한 모든 코드를 포함 할 수 있습니다. 우리의 경우 모든 것을 \`index.js\`에 넣을 것입니다.


##### 2. Add your React Native code[#](https://reactnative.dev/docs/integration-with-existing-apps#2-add-your-react-native-code)

\`index.js\`에서 구성 요소를 만듭니다. 여기 샘플에서는 스타일이 지정된\`<View>\`내에\`<Text>\`구성 요소를 추가합니다.

\`\`\`jsx
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RNHighScores extends React.Component {
  render() {
    var contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\\n'}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
\`\`\`

> \`RNHighScores\`는 iOS 애플리케이션 내에서 React Native에 뷰를 추가 할 때 사용할 모듈의 이름입니다.

#### The Magic: \`RCTRootView\`[#](https://reactnative.dev/docs/integration-with-existing-apps#the-magic-rctrootview)

이제 React Native 구성 요소가 \`index.js\`를 통해 생성되었으므로 해당 구성 요소를 신규 또는 기존 \`ViewController\`에 추가해야합니다. 가장 쉬운 방법은 선택적으로 구성 요소에 대한 이벤트 경로를 만든 다음 해당 구성 요소를 기존 \`ViewController\`에 추가하는 것입니다.

React Native 구성 요소를 실제로 \`RCTRootView\`라는 이름을 포함하는 \`ViewController\`의 새 네이티브 뷰와 연결합니다.

##### 1. Create an Event Path[#](https://reactnative.dev/docs/integration-with-existing-apps#1-create-an-event-path)

메인 게임 메뉴에 새로운 링크를 추가하여 "High Score"React Native 페이지로 이동할 수 있습니다.

![Event Path](data:image/png;base64,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fh9SKZfLzWazVqsJLsAD4/G42+1Wq9WQym63S3bo9XqCC/BAHMdJbYfD4Xq9Dp9Ur9cHg0Gyw2w2i6KoVCo5wwV44L22qVf1+/3wDQQX4HQ6CS4Aggs8kWKxKLgAH/r89cVVo9HIlALAPYVCYbvdJsMGIZVkbbJDq9UK9wkuQLvdnkwmcRyHVPL5fKfTCc/M84zAD/A8IwA+mgEILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIL75AAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABPd4PF6v1wAguJk6HA7L5XKxWGguILgZulwuq9Xqdrudz2fNBQQ3Q7lcLoqit9+aCwhutiqVSqPR0FxAcDUXIEVwNRdAcDUXEFzNBUgfXM0FEFzN5ZV9uwBvIs3jOP5m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)

##### 2. Event Handler[#](https://reactnative.dev/docs/integration-with-existing-apps#2-event-handler)

이제 메뉴 링크에서 이벤트 핸들러를 추가합니다. 애플리케이션의 메인 \`ViewController\`에 메소드가 추가됩니다. 이것이 \`RCTRootView\`가 작동하는 곳 입니다.

React Native 애플리케이션을 빌드 할 때 [Metro bundler](https://facebook.github.io/metro/)를 사용하여 React Native 서버에서 제공 할 \`index.bundle\`을 만듭니다. \`index.bundle\` 내부에는\`RNHighScore\` 모듈이 있습니다. 따라서 \`RCTRootView\`가 \`index.bundle\` 리소스의 위치(\`NSURL\`을 통해)를 가리키고 모듈에 연결해야합니다.

디버깅 목적으로 이벤트 핸들러가 호출되었음을 기록합니다. 그런 다음 \`index.bundle\` 내에 존재하는 React Native 코드의 위치로 문자열을 생성합니다. 마지막으로 메인 \`RCTRootView\`를 생성합니다.  React Native 컴포넌트에 대한 코드를 작성할 때 [위](https://reactnative.dev/docs/integration-with-existing-apps#the-react-native-component)에서 생성한 \`moduleName\`으로 \`RNHighScores\`를 제공하는 방법에 주목하십시오.

먼저 \`React\` 라이브러리를 \`import\`합니다.

\`\`\`jsx
import React
\`\`\`

> \`initialProperties\`는 예시 목적으로 여기에 있으므로 높은 점수 화면에 대한 데이터가 있습니다. React Native 컴포넌트에서 \`this.props\`를 사용하여 해당 데이터에 액세스합니다.

\`\`\`swift
@IBAction func highScoreButtonTapped(sender : UIButton) {
  NSLog("Hello")
  let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
  let mockData:NSDictionary = ["scores":
      [
          ["name":"Alex", "value":"42"],
          ["name":"Joel", "value":"10"]
      ]
  ]

  let rootView = RCTRootView(
      bundleURL: jsCodeLocation,
      moduleName: "RNHighScores",
      initialProperties: mockData as [NSObject : AnyObject],
      launchOptions: nil
  )
  let vc = UIViewController()
  vc.view = rootView
  self.present(vc, animated: true, completion: nil)
}
\`\`\`

> \`RCTRootView bundleURL\`은 새 JSC VM을 시작합니다. 리소스를 절약하고 네이티브 앱의 다른 부분에서 RN 뷰 간의 통신을 단순화하기 위해 단일 JS 런타임과 연결된 React Native에서 제공하는 여러 뷰를 가질 수 있습니다. 이렇게하려면 \`RCTRootView bundleURL\`을 사용하는 대신 [\`RCTBridge initWithBundleURL\`](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L89)를 사용하여 브리지를 사용한 다음\`RCTRootView initWithBridge\`를 사용합니다.

> 앱을 프로덕션으로 이동할 때 \`NSURL\`은 \`let mainBundle = NSBundle(URLForResource: "main" withExtension:"jsbundle")\`과 같은 것을 통해 디스크의 사전 번들 파일을 가리킬 수 있습니다. \`node_modules/react-native/scripts/\`의\`react-native-xcode.sh\` 스크립트를 사용하여 사전 번들 파일을 생성 할 수 있습니다.


##### 3. Wire Up[#](https://reactnative.dev/docs/integration-with-existing-apps#3-wire-up)

메인 메뉴의 새 링크를 새로 추가 된 이벤트 핸들러 메서드에 연결합니다.

![Event Path](https://reactnative.dev/assets/images/react-native-add-react-native-integration-wire-up-37137857e0876d2aca7049db6d82fcb6.png)

> 이를 수행하는 더 쉬운 방법 중 하나는 스토리 보드에서 뷰를 열고 새 링크를 마우스 오른쪽 단추로 클릭하는 것입니다. \`Touch Up Inside\`이벤트와 같은 것을 선택하고 스토리 보드로 드래그 한 다음 제공된 목록에서 생성 된 방법을 선택합니다.

### Test your integration[#](https://reactnative.dev/docs/integration-with-existing-apps#test-your-integration)

이제 React Native를 현재 애플리케이션과 통합하기 위한 모든 기본 단계를 완료했습니다. 이제 [Metro bundler](https://facebook.github.io/metro/)를 시작하여\`index.bundle\` 패키지를 빌드하고\`localhost\`에서 실행되는 서버를 제공합니다.

##### 1. Add App Transport Security exception[#](https://reactnative.dev/docs/integration-with-existing-apps#1-add-app-transport-security-exception)

Apple은 implicit cleartext HTTP 리소스로드를 차단했습니다. 따라서 다음 프로젝트의 \`Info.plist\` (또는 이와 동등한) 파일을 추가해야합니다.

\`\`\`xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
\`\`\`

> 앱 전송 보안은 사용자에게 좋습니다. 프로덕션 용으로 앱을 출시하기 전에 다시 활성화해야합니다.

##### 2. Run the packager[#](https://reactnative.dev/docs/integration-with-existing-apps#2-run-the-packager)

앱을 실행하려면 먼저 개발 서버를 시작해야합니다. 이렇게하려면 React Native 프로젝트의 루트 디렉터리에서 다음 명령을 실행합니다.

\`\`\`shell
$ npm start
\`\`\`

##### 3. Run the app[#](https://reactnative.dev/docs/integration-with-existing-apps#3-run-the-app)

Xcode 또는 선호하는 편집기를 사용하는 경우 기본 iOS 애플리케이션을 정상적으로 빌드하고 실행하십시오. 또는 다음을 사용하여 명령 줄에서 앱을 실행할 수 있습니다.

\`\`\`shell
# From the root of your project
$ npx react-native run-ios
\`\`\`

샘플 애플리케이션에서 "High Scores"에 대한 링크를 확인한 다음 이를 클릭하면 React Native 구성 요소의 렌더링을 볼 수 있습니다.

*native* 애플리케이션 홈 화면은 다음과 같습니다:


![Home Screen](data:image/png;base64,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)

*React Native* 의 high score 스크린입니다:

![High Scores](data:image/png;base64,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)

> 애플리케이션 실행시 module resolution 문제가 발생하는 경우 [this GitHub issue](https://github.com/facebook/react-native/issues/4968)에서 정보와 가능한 해결 방법을 참조하세요. [This comment](https://github.com/facebook/react-native/issues/4968#issuecomment-220941717)이 가능한 최신 해결 방법 인 것 같습니다.

### See the Code[#](https://reactnative.dev/docs/integration-with-existing-apps#see-the-code)

샘플 앱에 React Native 화면을 추가 한 코드는 [GitHub](https://github.com/JoelMarcey/swift-2048/commit/13272a31ee6dd46dc68b1dcf4eaf16c1a10f5229)에서 확인할 수 있습니다.

### Now what?[#](https://reactnative.dev/docs/integration-with-existing-apps#now-what)

이 시점에서 평소처럼 앱을 계속 개발할 수 있습니다. React Native 작업에 대한 자세한 내용은 [debugging](https://reactnative.dev/docs/debugging) 및 [deployment](https://reactnative.dev/docs/running-on-device) 문서를 참조하세요.

`

export const text3 = `
# Android Fragment와 통합

[기존 앱과 통합하기](https://reactnative.dev/docs/integration-with-existing-apps) 가이드에서는 전체 화면 React Native 앱을 기존 Android 앱에 활동으로 통합하는 방법을 자세히 설명합니다. 기존 앱의 Fragments 내에서 React Native 구성 요소를 사용하려면 몇 가지 추가 설정이 필요합니다. 이것의 이점은 네이티브 앱이 활동의 네이티브 프래그먼트와 함께 React 네이티브 구성 요소를 통합 할 수 있다는 것입니다.

### 1. 앱에 React Native 추가[#](https://reactnative.dev/docs/integration-with-android-fragment#1-add-react-native-to-your-app)

코드 통합 섹션까지 [기존 앱과 통합하기](https://reactnative.dev/docs/integration-with-existing-apps) 가이드를 따르세요. 계속해서 1 단계를 따르십시오. \`index.android.js\` 파일을 만들고 2 단계를 따르십시오. 이 섹션에서 React Native 코드를 추가하십시오.

### 2. 앱을 React Native Fragment와 통합[#](https://reactnative.dev/docs/integration-with-android-fragment#2-integrating-your-app-with-a-react-native-fragment)

React Native 구성 요소를 전체 화면 React Native Activity 대신 Fragment로 렌더링 할 수 있습니다. 구성 요소는 "screen" 또는 "fragment"이라고 할 수 있으며 하위 구성 요소를 포함하는 Android fragment와 동일한 방식으로 작동합니다. 이러한 구성 요소는\`/fragments\` 폴더에 배치 할 수 있으며 프래그먼트를 구성하는 데 사용되는 하위 구성 요소는\`/components\` 폴더에 배치 할 수 있습니다.

메인 Application Java 클래스에서 ReactApplication 인터페이스를 구현해야합니다. 기본 활동으로 Android Studio에서 새 프로젝트를 만든 경우 새 클래스를 만들어야합니다. (예:  \`MyReactApplication.java\`) 기존 클래스 인 경우 \`AndroidManifest.xml\` 파일에서 이 기본 클래스를 찾을 수 있습니다. \`<application />\` 태그 아래에 \`android:name\` 속성이 표시되어야합니다. (예: \`android:name=".MyReactApplication"\`) 이 값은 구현하고자 하며, 필요한 메서드를 제공하려는 클래스입니다.

기본 Application Java 클래스가 ReactApplication을 구현하는지 확인하십시오:

\`\`\`java
public class MyReactApplication extends Application implements ReactApplication {...}
\`\`\`

Override the required methods \`getUseDeveloperSupport\`, \`getPackages\` and \`getReactNativeHost\`:

\`\`\`java
public class MyReactApplication extends Application implements ReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, false);
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        protected List<ReactPackage> getPackages() {
            List<ReactPackage> packages = new PackageList(this).getPackages();
            // Packages that cannot be autolinked yet can be added manually here
            return packages;
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
\`\`\`

Android Studio를 사용하는 경우 Alt + Enter를 사용하여 누락 된 모든 import를 클래스에 추가합니다. 또는 다음은 수동으로 포함하는 데 필요한 import입니다.

\`\`\`java
import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.List;
\`\`\`

"Sync Project files with Gradle" 작업을 수행합니다.

### Step 3. React Native Fragment에 대한 FrameLayout 추가t[#](https://reactnative.dev/docs/integration-with-android-fragment#step-3-add-a-framelayout-for-the-react-native-fragment)

이제 React Native Fragment를 액티비티에 추가합니다. 새 프로젝트의 경우 이 액티비티는 \`MainActivity\`가 되지만 어떤 액티비티든 될 수 있으며 더 많은 React Native 구성 요소를 앱에 통합 할 때 추가 액티비티에 더 많은 프래그먼트를 추가 할 수 있습니다.

먼저 액티비티의 레이아웃에 React Native Fragment를 추가합니다. 예를 들어\`res/layouts\` 폴더의 \`main_activity.xml\`입니다.

ID, 너비 및 높이가있는\`<FrameLayout>\`을 추가합니다. 이것은 React Native Fragment를 찾고 렌더링 할 레이아웃입니다.

\`\`\`jsx
<FrameLayout
    android:id="@+id/reactNativeFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
\`\`\`

### Step 4. FrameLayout에 React Native Fragment 추가[#](https://reactnative.dev/docs/integration-with-android-fragment#step-4-add-a-react-native-fragment-to-the-framelayout)

React Native Fragment를 레이아웃에 추가하려면 Activity가 있어야합니다. 새 프로젝트에서 언급했듯이 이것은 \`MainActivity\`입니다. 이 활동에서 버튼과 이벤트 리스너를 추가합니다. 버튼을 클릭하면 React Native Fragment를 렌더링합니다.

버튼을 추가하려면 액티비티 레이아웃을 수정하세요:

\`\`\`jsx
<Button
    android:layout_margin="10dp"
    android:id="@+id/button"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="Show react fragment" />
\`\`\`

이제 Activity 클래스에서 예를 들어 \`MainActivity.java\`는 버튼에 OnClickListener를 추가하고 ReactFragment를 인스턴스화 한 다음 프레임 레이아웃에 추가해야합니다.

활동 상단에 버튼 필드를 추가합니다:

\`\`\`java
private Button mButton;
\`\`\`

다음과 같이 활동의 onCreate 메소드를 업데이트하십시오:

\`\`\`java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main_activity);

    mButton = findViewById(R.id.button);
    mButton.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Fragment reactNativeFragment = new ReactFragment.Builder()
                    .setComponentName("HelloWorld")
                    .setLaunchOptions(getLaunchOptions("test message"))
                    .build();

            getSupportFragmentManager()
                    .beginTransaction()
                    .add(R.id.reactNativeFragment, reactNativeFragment)
                    .commit();

        }
    });
}
\`\`\`

위의 코드에서 \`Fragment reactNativeFragment = new ReactFragment.Builder()\`는 ReactFragment를 생성하고 \`etSupportFragmentManager().beginTransaction().add()\`는 Fragment를 프레임 레이아웃에 추가합니다.

React Native 용 스타터 키트를 사용하는 경우 "HelloWorld" 문자열을 \`index.js\`또는 \`index.android.js\`파일의 문자열로 바꿉니다. (AppRegistry.registerComponent() 메서드의 첫 번째 인자입니다).

컴포넌트에 props을 전달할 수 있는 \`getLaunchOptions\` 메소드를 추가합니다. 이것은 선택 사항이며 props을 전달할 필요가 없으면 \`setLaunchOptions\`를 제거 할 수 있습니다.


\`\`\`java
private Bundle getLaunchOptions(String message) {
    Bundle initialProperties = new Bundle();
    initialProperties.putString("message", message);
    return initialProperties;
}
\`\`\`

활동 클래스에 누락된 imports를 모두 추가하십시오. 페이스북 패키지가 아닌 패키지의 BuildConfig를 사용하도록주의하세요! 또는 다음은 수동으로 포함하는 데 필요한 imports입니다:

\`\`\`java
import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
\`\`\`

"Sync Project files with Gradle"작업을 수행합니다.


### Step 5. 통합 테스트[#](https://reactnative.dev/docs/integration-with-android-fragment#step-5-test-your-integration)

react-native dependencies을 설치하려면\`yarn\`을 실행하고 메트로 번들러를 시작하려면 \`yarn native\`를 실행해야합니다. Android Studio에서 Android 앱을 실행하면 개발 서버에서 JavaScript 코드를 로드하고 Activity의 React Native Fragment에 표시해야합니다.


### Step 6. 추가 설정-기본 모듈[#](https://reactnative.dev/docs/integration-with-android-fragment#step-6-additional-setup---native-modules)

react component에서 기존 Java 코드를 호출해야 할 수도 있습니다. 네이티브 모듈을 사용하면 네이티브 코드를 호출하고 네이티브 앱에서 메서드를 실행할 수 있습니다. 여 곳의 설정을 따르십시오. [native-modules-android](https://reactnative.dev/docs/native-modules-android)

`

export const text4_1 = `
<-- Tab : Android TV -->

# TV기기를 위한 구축

TV 장치 지원은 기존 React Native 응용 프로그램이 Apple TV 및 Android TV에서 작동하도록 구현되었으며 응용 프로그램의 JavaScript 코드를 거의 또는 전혀 변경하지 않아도됩니다.


## 빌드 변경[#](https://reactnative.dev/docs/building-for-tv#build-changes)

- *Native layer* : Android TV에서 React Native 프로젝트를 실행하려면\`AndroidManifest.xml\`을 다음과 같이 변경해야합니다:


\`\`\`xml
  <!-- Add custom banner image to display as Android TV launcher icon -->
 <application
  ...
  android:banner="@drawable/tv_banner"
  >
    ...
    <intent-filter>
      ...
      <!-- Needed to properly create a launch intent when running on Android TV -->
      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>
    </intent-filter>
    ...
  </application>
\`\`\`

- *JavaScript layer*: Android TV 지원이\`Platform.android.js\`에 추가되었습니다. 다음을 수행하여 코드가 Android TV에서 실행 중인지 확인할 수 있습니다:

\`\`\`js
var Platform = require('Platform');
var running_on_android_tv = Platform.isTV;
\`\`\`



## 코드 변경[#](https://reactnative.dev/docs/building-for-tv#code-changes)

- *Access to touchable controls*: Android TV에서 실행할 때 Android 프레임 워크는 뷰에서 포커스 가능한 요소의 상대적 위치를 기반으로 방향 탐색 체계를 자동으로 적용합니다. \`Touchable\` 믹스인에는 포커스 변경을 감지하고 기존 방법을 사용하여 구성 요소의 스타일을 적절하게 지정하고 TV 리모컨을 사용하여보기를 선택할 때 적절한 작업을 시작하는 코드가 추가되었으므로\`TouchableWithoutFeedback\`,\`TouchableHighlight\`,\`TouchableOpacity\` 및\` TouchableNativeFeedback\`이 예상대로 작동합니다. 특히:
  - \`onFocus\` 는 터치 가능한 뷰에 초점이 맞춰지면 실행됩니다.
  - \`onBlur\` 는 터치 가능한 뷰가 초점을 벗어나면 실행됩니다.
  - \`onPress\` 는 TV 리모컨의 "선택"버튼을 눌러 터치 가능한 뷰가 실제로 선택되면 실행됩니다.
- *TV remote/keyboard input*: 새로운 네이티브 클래스\`ReactAndroidTVRootViewHelper\`는 TV 원격 이벤트에 대한 주요 이벤트 핸들러를 설정합니다. TV 원격 이벤트가 발생하면이 클래스는 JS 이벤트를 발생시킵니다. 이 이벤트는\`TVEventHandler\` 자바 스크립트 개체의 인스턴스에 의해 선택됩니다. TV 원격 이벤트의 사용자 지정 처리를 구현해야하는 애플리케이션 코드는 다음 코드에서와 같이\`TVEventHandler\`의 인스턴스를 만들고 이러한 이벤트를 수신 할 수 있습니다:
- 

\`\`\`jsx
var TVEventHandler = require('TVEventHandler');

class Game2048 extends React.Component {
  _tvEventHandler: any;

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function (cmp, evt) {
      if (evt && evt.eventType === 'right') {
        cmp.setState({ board: cmp.state.board.move(2) });
      } else if (evt && evt.eventType === 'up') {
        cmp.setState({ board: cmp.state.board.move(1) });
      } else if (evt && evt.eventType === 'left') {
        cmp.setState({ board: cmp.state.board.move(0) });
      } else if (evt && evt.eventType === 'down') {
        cmp.setState({ board: cmp.state.board.move(3) });
      } else if (evt && evt.eventType === 'playPause') {
        cmp.restartGame();
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }
}
\`\`\`

- *Dev Menu support*: 에뮬레이터에서 cmd-M은 Android와 유사한 개발자 메뉴를 표시합니다. 실제 Android TV 기기에서 불러 오려면 메뉴 버튼을 누르거나 리모컨의 빨리 감기 버튼을 길게 누르세요. (안드로이드 TV 기기를 흔들지 마십시오. 작동하지 않습니다. :) )
- *Known issues*:
  - \`TextInput\` 구성 요소는 현재 작동하지 않습니다. (즉, 자동으로 포커스를받을 수 없습니다. [this comment](https://github.com/facebook/react-native/pull/16500#issuecomment-629285638)를 참조하세요.)
    - 그러나 ref를 사용하여 \`inputRef.current.focus()\`를 수동으로 트리거 할 수 있습니다.
    - 입력을 \`TouchableWithoutFeedback\` 구성 요소로 감싸고 해당 터치 가능의 \`onFocus\` 이벤트에서 포커스를 트리거 할 수 있습니다. 이렇게 하면 화살표 키를 통해 키보드를 열 수 있습니다.
    - 키보드는 키를 누를 때마다 상태를 재설정 할 수 있습니다 (Android TV 에뮬레이터 내에서만 가능할 수 있음).
  - \`Modal\` 구성 요소의 콘텐츠는 포커스를 받을 수 없습니다. 자세한 내용은 [this issue](https://github.com/facebook/react-native/issues/24448)를 참조하세요.

`

export const text4_2 = `
<-- Tab : 🚧 tvOS -->

# TV 기기를 위한 빌드

TV 장치 지원은 기존 React Native 응용 프로그램이 Apple TV 및 Android TV에서 작동하도록 구현되었으며 응용 프로그램의 JavaScript 코드를 거의 또는 전혀 변경하지 않아도됩니다.


> **사용되지 않음.** [react-native-tvos](https://github.com/react-native-community/react-native-tvos)를 대신 사용하세요. [0.62 release blog post](https://reactnative.dev/blog/#moving-apple-tv-to-react-native-tvos)에서 상세 내용을 확인할 수 있습니다.

## 빌드 변경[#](https://reactnative.dev/docs/building-for-tv#build-changes-1)

- *Native layer*: React Native Xcode 프로젝트는 이제 이름이 \`-tvOS\`문자열로 끝나는 Apple TV 빌드 대상을 갖습니다.
- *react-native init*: \`react-native init\`로 생성 된 새로운 React Native 프로젝트에는 XCode 프로젝트에서 Apple TV 대상이 자동으로 생성됩니다.
- *JavaScript layer*: Apple TV 지원이\`Platform.ios.js\`에 추가되었습니다. 다음을 수행하여 코드가 AppleTV에서 실행 중인지 확인할 수 있습니다.

\`\`\`js
var Platform = require('Platform');
var running_on_tv = Platform.isTV;

// If you want to be more specific and only detect devices running tvOS
// (but no Android TV devices) you can use:
var running_on_apple_tv = Platform.isTVOS;
\`\`\`

## 코드 변경[#](https://reactnative.dev/docs/building-for-tv#code-changes-1)

- *General support for tvOS*: 네이티브 코드의 Apple TV 특정 변경 사항은 모두 TARGET_OS_TV 정의에 의해 래핑됩니다. 여기에는 tvOS에서 지원되지 않는 API (예 : 웹보기, 슬라이더, 스위치, 상태 표시 줄 등)를 막기 위한 변경 사항과 TV 리모컨 또는 키보드에서 사용자 입력을 지원하기 위한 변경 사항이 포함됩니다.
- *Common codebase*: tvOS와 iOS는 대부분의 Objective-C 및 JavaScript 코드를 공통적으로 공유하므로 iOS에 대한 대부분의 문서는 tvOS에 동일하게 적용됩니다.
- *Access to touchable controls*: Apple TV에서 실행할 때 네이티브 뷰 클래스는\`RCTTVView\`이며 tvOS 포커스 엔진을 사용하기위한 추가 메서드가 있습니다. \`Touchable\` 믹스인에는 포커스 변경을 감지하고 기존 방법을 사용하여 구성 요소의 스타일을 적절하게 지정하고 TV 리모컨을 사용하여보기를 선택할 때 적절한 작업을 시작하는 코드가 추가되어\`TouchableWithoutFeedback\`,\`TouchableHighlight\` 및\`TouchableOpacity\`가 예상대로 작동합니다. 특히:
  - \`onFocus\`는 터치 가능한 뷰에 초점이 맞춰지면 실행됩니다.
  - \`onBlur\`는 터치 가능한 뷰의 초점이 맞지 않을 때 실행됩니다.
  - \`onPress\`는 TV 리모컨의 "선택"버튼을 눌러 실제로 터치 가능한 보기를 선택한 경우 실행됩니다.
- *TV remote/keyboard input*: 새로운 네이티브 클래스\`RCTTVRemoteHandler\`는 TV 원격 이벤트에 대한 제스처 인식기를 설정합니다. TV 원격 이벤트가 발생하면 이 클래스는\`RCTTVNavigationEventEmitter\` (\`RCTEventEmitter\`의 하위 클래스)에 의해 선택되는 알림을 발생시켜 JS 이벤트를 발생시킵니다. 이 이벤트는\`TVEventHandler\` 자바 스크립트 개체의 인스턴스에 의해 선택됩니다. TV 원격 이벤트의 사용자 지정 처리를 구현해야하는 애플리케이션 코드는 다음 코드에서와 같이\`TVEventHandler\`의 인스턴스를 만들고 이러한 이벤트를 수신 할 수 있습니다:

\`\`\`js
var TVEventHandler = require('TVEventHandler');

class Game2048 extends React.Component {
  _tvEventHandler: any;

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function (cmp, evt) {
      if (evt && evt.eventType === 'right') {
        cmp.setState({ board: cmp.state.board.move(2) });
      } else if (evt && evt.eventType === 'up') {
        cmp.setState({ board: cmp.state.board.move(1) });
      } else if (evt && evt.eventType === 'left') {
        cmp.setState({ board: cmp.state.board.move(0) });
      } else if (evt && evt.eventType === 'down') {
        cmp.setState({ board: cmp.state.board.move(3) });
      } else if (evt && evt.eventType === 'playPause') {
        cmp.restartGame();
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }
}
\`\`\`

- *Dev Menu support*: 시뮬레이터에서 cmd-D는 iOS와 유사한 개발자 메뉴를 표시합니다. 실제 Apple TV 장치에서 불러 오려면 리모컨의 재생/일시 중지 버튼을 길게 누릅니다. (작동하지 않는 Apple TV 장치를 흔들지 마세요 :) )
- *TV remote animations*: \`RCTTVView\` 네이티브 코드는 사용자가 뷰를 탐색 할 때 눈을 안내하는 데 도움이되는 Apple 권장 시차 애니메이션을 구현합니다. 애니메이션은 새로운 선택적 뷰 속성으로 비활성화하거나 조정할 수 있습니다.
- *Back navigation with the TV remote menu button*: 원래 Android 뒤로 버튼을 지원하도록 작성된\`BackHandler\` 구성 요소는 이제 TV 리모컨의 메뉴 버튼을 사용하여 Apple TV에서 뒤로 탐색을 지원합니다.
- *TabBarIOS behavior*: \`TabBarIOS\` 구성 요소는 Apple TV에서 다르게 작동하는 기본\`UITabBar\` API를 래핑합니다. tvOS에서 탭 표시 줄이 불안정하게 다시 렌더링되는 것을 방지하기 위해 ([this issue](https://github.com/facebook/react-native/issues/15081)를 참조하세요.) 선택한 탭 표시 줄 항목은 JavaScript에서만 설정할 수 있습니다. 초기 렌더링시 사용자가 네이티브 코드를 통해 제어합니다.
- *Known issues*:
  - [ListView scrolling](https://github.com/facebook/react-native/issues/12793). 이 문제는 ListView 및 유사한 구성 요소에서\`removeClippedSubviews\`를 false로 설정하여 해결할 수 있습니다. 이 문제에 대한 자세한 내용은 [this PR](https://github.com/facebook/react-native/pull/12944)을 참조하세요.

`

export const text5 = `
# Out-of-Tree Platforms

React Native는 Android 및 iOS 만을 위한 것은 아닙니다 - 다음과 같이 다른 플랫폼으로 가져 오는 커뮤니티 지원 프로젝트가 있습니다:

- [React Native Windows](https://github.com/Microsoft/react-native-windows) - Microsoft의 Universal Windows 플랫폼(UWP)을 대상으로하는 React Native 지원.
- [React Native macOS](https://github.com/microsoft/react-native-macos) - macOS 및 Cocoa를 대상으로하는 React Native 포크.
- [React Native DOM](https://github.com/vincentriemer/react-native-dom) - 웹에 대한 React Native의 실험적이고 포괄적인 포트입니다. (목적이 다른 [React Native Web](https://github.com/necolas/react-native-web)과 혼동하지 마세요.)
- [React Native Turbolinks](https://github.com/lazaronixon/react-native-turbolinks) - Turbolinks 5로 하이브리드 앱을 빌드하기위한 React Native 어댑터.
- [React Native Desktop](https://github.com/status-im/react-native-desktop) - Qt의 QML을 사용하여 React Native를 데스크톱에 가져 오는 것을 목표로하는 프로젝트입니다. 더 이상 유지되지 않는 [React Native Ubuntu](https://github.com/CanonicalLtd/react-native/)의 포크입니다.
- [React Native tvOS](https://github.com/react-native-community/react-native-tvos) - Apple tvOS를 위한 React Native의 적응.
- [alita](https://github.com/areslabs/alita) - mini-program(微信小程序)에 대한 React Native의 실험적이고 포괄적인 포트.
- [Proton Native](https://github.com/kusti8/proton-native) - Qt를 사용하는 Linux, MacOS 및 Windows를 대상으로 한 React Native 용 래퍼.

## 나만의 React Native 플랫폼 만들기[#](https://reactnative.dev/docs/out-of-tree-platforms#creating-your-own-react-native-platform)

현재 React Native 플랫폼을 처음부터 만드는 과정은 문서화가 잘되어 있지 않습니다 - 다가오는 재구축의 목표([Fabric](https://reactnative.dev/blog/2018/06/14/state-of-react-native-2018)) 중 하나는 플랫폼을보다 쉽게 유지 관리하는 것입니다.

### 번들링[#](https://reactnative.dev/docs/out-of-tree-platforms#bundling)

React Native 0.57부터 이제 React Native의 JavaScript 번들러 [Metro](https://facebook.github.io/metro/)에 React Native 플랫폼을 등록 할 수 있습니다. 즉,\`--platform example\`을\`npx react-native bundle\`에 전달할 수 있으며\`.example.js\` 접미사가있는 JavaScript 파일을 찾습니다.

RNPM에 플랫폼을 등록하려면 모듈 이름이 다음 패턴 중 하나와 일치해야합니다:

- \`react-native-example\` - \`react-native-\` 으로 시작하는 모든 최상위 모듈을 검색합니다.
- \`@org/react-native-example\` - 모든 범위에서\`react-native-\`로 시작하는 모듈을 검색합니다.
- \`@react-native-example/module\` - 이름이\`@ react-native-\`로 시작하는 범위 아래의 모든 모듈에서 검색됩니다.

또한 다음과 같은 항목이 \`package.json\`에 있어야합니다:

\`\`\`json
{
  "rnpm": {
    "haste": {
      "providesModuleNodeModules": ["react-native-example"],
      "platforms": ["example"]
    }
  }
}
\`\`\`

\` "providesModuleNodeModules"\`는 Haste 모듈 검색 경로에 추가 될 모듈의 배열이고\` "platforms"\`는 유효한 플랫폼으로 추가 될 플랫폼 접미사의 배열입니다.


`