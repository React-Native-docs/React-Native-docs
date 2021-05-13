export const text1_1_1 = `
<-- Android/macOS -->

# 디바이스에서 실행하기

앱을 릴리즈하기 전에 실제 기기에서 테스트해보는 것이 좋습니다. 이 문서는 디바이스에서 React Native 앱을 실행하고 배포 준비를 하기 위해서 필요한 단계들을 안내합니다. 

Expo CLI나 Create React Native App을 사용해서 프로젝트를 설정한 경우, Expo 앱에서 QR 코드를 스캔해 디바이스에서 앱을 미리보기할 수 있습니다. 그러나 디바이스에서 앱을 빌드하고 실행하기 위해서는, [환경 설정 가이드](https://reactnative.dev/docs/environment-setup) 에서 네이티브 코드 종속성을 eject하고 설치해야합니다. 

## Android 기기에서 앱 실행하기

#### 개발 OS: macOS

### 1. USB를 통한 디버깅 활성화하기

대부분의 Android 기기는 기본적으로, Google Play에서 다운로드받은 앱만 설치하고 실행할 수 있습니다. 개발 단계에 기기에 앱을 설치하려면 기기에서 USB 디버깅을 활성화해야 합니다. 

USB 디버깅을 활성화하려면, 먼저 **설정** -> **휴대폰 정보** -> **소프트웨어 정보**에서 "개발자 옵션" 메뉴를 활성화해야 합니다. 그리고 나서 아래 쪽의 \`빌드 번호\` 를 일곱 번 터치합니다. 그리고 **설정** -> **개발자 옵션**으로 돌아가서 "USB 디버깅"을 활성화할 수 있습니다. 

### 2. USB를 통해 기기 연결하기

이제 React Native 프로젝트를 실행할 Android 기기를 설정합니다. USB를 통해 개발 컴퓨터에 디바이스를 연결합니다. 

이제 \`adb devices\` 를 실행해 기기가 ADB (Android Debug Bridge) 에 올바르게 연결되었는지 확인하십시오. 

\`\`\`shell
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
\`\`\`

오른쪽 열에 \`device\` 가 보이면, 기기가 연결된 것입니다. **한 번에 하나의 기기만 연결**해야 합니다.

### 3. 앱 실행하기

명령 프롬프트에 다음을 입력하여 기기에 앱을 설치하고 시작합니다. 

\`\`\`shell
$ npx react-native run-android
\`\`\`

> "브릿지 설정을 사용할 수 없습니다" 오류 발생 시 [adb reverse 사용](https://reactnative.dev/docs/running-on-device#method-1-using-adb-reverse-recommended)을 참고하세요. 

> 힌트: \`React Native CLI\` 를 사용해서 \`Release\` 빌드를 생성하고 실행할 수도 있습니다. (예: \`npx react-native run-android --variant=release\`).

## 개발 서버에 접속하기

개발 컴퓨터에서 실행중인 개발 서버에 접속해 기기에서 빠르게 반복할 수도 있습니다. USB 케이블 또는 Wi-Fi 네트워크에 액세스할 수 있는지에 따라, 여러 가지 방법으로 이 작업을 수행할 수 있습니다. 

### 방법 1: adb reverse 사용하기 (권장)

Android 5.0 (Lollipop) 이상 기기에서 USB 디버깅이 활성화되어 있고, 개발 컴퓨터에 USB를 통해 연결되어 있는 경우 이 방법을 사용할 수 있습니다. 

명령 프롬프트에서 다음을 실행하세요. 

\`\`\`shell
$ adb -s <device name> reverse tcp:8081 tcp:8081
\`\`\`

장치 이름을 찾으려면 다음 adb 명령을 실행하세요. 

\`\`\`shell
$ adb devices
\`\`\`

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

### 방법 2: Wi-Fi를 통해 연결하기

Wi-Fi를 통해 개발 서버에 연결할 수도 있습니다. 먼저 USB 케이블을 사용해 기기에 앱 설치가 완료되면, 다음 지침에 따라 무선으로 디버깅할 수 있습니다. 진행하기 전에 개발 컴퓨터의 현재 IP 주소가 필요합니다. 

**시스템 설정** -> **네트워크** 에서 해당 IP 주소를 찾을 수 있습니다. 

1. 컴퓨터(노트북)과 휴대폰이 **동일한** Wi-Fi 네트워크에 연결되어 있는지 확인하세요. 
2. 디바이스에서 React Native 앱을 실행하세요. 
3. 그러면 [오류와 함께 붉은색 화면](https://reactnative.dev/docs/debugging#in-app-errors-and-warnings)이 뜨지만, 다음 단계에서 해결할 수 있습니다. 
4. 인앱 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에 들어가세요.
5. **개발 설정** → **장치 디버깅 서버 호스트 & 포트**로 이동하세요. 
6. 컴퓨터(노트북)의 IP 주소와 로컬 개발 서버의 포트를 입력하세요. (예: 10.0.1.1:8081).
7. **개발자 메뉴**로 돌아가서 **JS 리로드**를 선택하세요.

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

## 배포를 위해 앱 빌드하기

React Native를 사용해 멋진 앱을 만들었습니다. 이제 Play Store에서 이 앱을 릴리즈해봅시다. 이 과정은 다른 모든 네이티브 Android 앱과 동일하며, 몇 가지 추가적인 고려사항이 있습니다. 자세한 내용은 [signed APK 생성하기](https://reactnative.dev/docs/signed-apk-android)를 참고하십시오. 
`

export const text1_1_2 = `
<-- Android/Windows -->

# 디바이스에서 실행하기

앱을 릴리즈하기 전에 실제 기기에서 테스트해보는 것이 좋습니다. 이 문서는 디바이스에서 React Native 앱을 실행하고 배포 준비를 하기 위해서 필요한 단계들을 안내합니다. 

Expo CLI나 Create React Native App을 사용해서 프로젝트를 설정한 경우, Expo 앱에서 QR 코드를 스캔해 디바이스에서 앱을 미리보기할 수 있습니다. 그러나 디바이스에서 앱을 빌드하고 실행하기 위해서는, [환경 설정 가이드](https://reactnative.dev/docs/environment-setup) 에서 네이티브 코드 종속성을 eject하고 설치해야합니다. 

## Android 기기에서 앱 실행하기

#### 개발 OS: Windows

### 1. USB를 통한 디버깅 활성화하기

대부분의 Android 기기는 기본적으로, Google Play에서 다운로드받은 앱만 설치하고 실행할 수 있습니다. 개발 단계에 기기에 앱을 설치하려면 기기에서 USB 디버깅을 활성화해야 합니다. 

USB 디버깅을 활성화하려면, 먼저 **설정** -> **휴대폰 정보** -> **소프트웨어 정보**에서 "개발자 옵션" 메뉴를 활성화해야 합니다. 그리고 나서 아래 쪽의 \`빌드 번호\` 를 일곱 번 터치합니다. 그리고 **설정** -> **개발자 옵션**으로 돌아가서 "USB 디버깅"을 활성화할 수 있습니다. 

### 2. USB를 통해 기기 연결하기

이제 React Native 프로젝트를 실행할 Android 기기를 설정합니다. USB를 통해 개발 컴퓨터에 디바이스를 연결합니다. 

이제 \`adb devices\` 를 실행해 기기가 ADB (Android Debug Bridge) 에 올바르게 연결되었는지 확인하십시오. 

\`\`\`shell
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
\`\`\`

오른쪽 열에 \`device\` 가 보이면, 기기가 연결된 것입니다. **한 번에 하나의 기기만 연결**해야 합니다.

### 3. 앱 실행하기

명령 프롬프트에 다음을 입력하여 기기에 앱을 설치하고 시작합니다. 

\`\`\`shell
$ npx react-native run-android
\`\`\`

XCode 프로젝트 네비게이터에서 프로젝트를 선택한 다음, 메인 타겟을 선택합니다. (타겟은 프로젝트와 동일한 이름을 가져야 함). "Signing & Capabilities" 탭을 찾습니다. "Signing"으로 이동하여 Team 드롭다운 메뉴에서 애플 개발자 계정 또는 팀이 선택되었는지 확인합니다. 테스트 타겟에 대해서도 동일한 작업을 수행합니다. (메인 타겟 아래에 있으며, "테스트"로 끝남). 

> 힌트: \`React Native CLI\` 를 사용해서 \`Release\` 빌드를 생성하고 실행할 수도 있습니다. (예: \`npx react-native run-android --variant=release\`).

## 개발 서버에 접속하기

개발 컴퓨터에서 실행중인 개발 서버에 접속해 기기에서 빠르게 반복할 수도 있습니다. USB 케이블 또는 Wi-Fi 네트워크에 액세스할 수 있는지에 따라, 여러 가지 방법으로 이 작업을 수행할 수 있습니다. 

### 방법 1: adb reverse 사용하기 (권장)

Android 5.0 (Lollipop) 이상 기기에서 USB 디버깅이 활성화되어 있고, 개발 컴퓨터에 USB를 통해 연결되어 있는 경우 이 방법을 사용할 수 있습니다. 

명령 프롬프트에서 다음을 실행하세요. 

\`\`\`shell
$ adb -s <device name> reverse tcp:8081 tcp:8081
\`\`\`

장치 이름을 찾으려면 다음 adb 명령을 실행하세요. 

\`\`\`shell
$ adb devices
\`\`\`

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

### 방법 2: Wi-Fi를 통해 연결하기

Wi-Fi를 통해 개발 서버에 연결할 수도 있습니다. 먼저 USB 케이블을 사용해 기기에 앱 설치가 완료되면, 다음 지침에 따라 무선으로 디버깅할 수 있습니다. 진행하기 전에 개발 컴퓨터의 현재 IP 주소가 필요합니다. 

명령 프롬프트를 열고 \`ipconfig\` 를 입력해 컴퓨터의 IP 주소를 찾습니다. 

1. 컴퓨터(노트북)과 휴대폰이 **동일한** Wi-Fi 네트워크에 연결되어 있는지 확인하세요. 
2. 디바이스에서 React Native 앱을 실행하세요. 
3. 그러면 [오류와 함께 붉은색 화면](https://reactnative.dev/docs/debugging#in-app-errors-and-warnings)이 뜨지만, 다음 단계에서 해결할 수 있습니다. 
4. 인앱 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에 들어가세요.
5. **개발 설정** → **장치 디버깅 서버 호스트 & 포트**로 이동하세요. 
6. 컴퓨터(노트북)의 IP 주소와 로컬 개발 서버의 포트를 입력하세요. (예: 10.0.1.1:8081).
7. **개발자 메뉴**로 돌아가서 **JS 리로드**를 선택하세요.

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

## 배포를 위해 앱 빌드하기

React Native를 사용해 멋진 앱을 만들었습니다. 이제 Play Store에서 이 앱을 릴리즈해봅시다. 이 과정은 다른 모든 네이티브 Android 앱과 동일하며, 몇 가지 추가적인 고려사항이 있습니다. 자세한 내용은 [signed APK 생성하기](https://reactnative.dev/docs/signed-apk-android)를 참고하십시오. 
`

export const text1_1_3 = `
<-- Android/Linux -->

# 디바이스에서 실행하기

앱을 릴리즈하기 전에 실제 기기에서 테스트해보는 것이 좋습니다. 이 문서는 디바이스에서 React Native 앱을 실행하고 배포 준비를 하기 위해서 필요한 단계들을 안내합니다. 

Expo CLI나 Create React Native App을 사용해서 프로젝트를 설정한 경우, Expo 앱에서 QR 코드를 스캔해 디바이스에서 앱을 미리보기할 수 있습니다. 그러나 디바이스에서 앱을 빌드하고 실행하기 위해서는, [환경 설정 가이드](https://reactnative.dev/docs/environment-setup) 에서 네이티브 코드 종속성을 eject하고 설치해야합니다. 

## Android 기기에서 앱 실행하기

#### 개발 OS: Windows

### 1. USB를 통한 디버깅 활성화하기

대부분의 Android 기기는 기본적으로, Google Play에서 다운로드받은 앱만 설치하고 실행할 수 있습니다. 개발 단계에 기기에 앱을 설치하려면 기기에서 USB 디버깅을 활성화해야 합니다. 

USB 디버깅을 활성화하려면, 먼저 **설정** -> **휴대폰 정보** -> **소프트웨어 정보**에서 "개발자 옵션" 메뉴를 활성화해야 합니다. 그리고 나서 아래 쪽의 \`빌드 번호\` 를 일곱 번 터치합니다. 그리고 **설정** -> **개발자 옵션**으로 돌아가서 "USB 디버깅"을 활성화할 수 있습니다. 

### 2. USB를 통해 기기 연결하기

이제 React Native 프로젝트를 실행할 Android 기기를 설정합니다. USB를 통해 개발 컴퓨터에 디바이스를 연결합니다. 

그런 다음 \`lsusb\` 를 사용해 제조업체 코드를 확인합니다. (mac에서는 먼저 [lsusb를 설치]()](https://github.com/jlhonora/lsusb) 해야합니다). \`lsusb\` 는 다음과 같은 내용을 출력합니다. 

\`\`\`shell
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
\`\`\`

각 라인은 현재 컴퓨터에 연결된 USB 장치를 나타냅니다. 

휴대폰이 연결된 것이 맞는지 확인해보고 싶다면, 휴대폰의 연결을 해제하고 해당 명령을 다시 실행해보세요. 

\`\`\`shell
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
\`\`\`

휴대폰 연결을 해제한 후, 휴대폰 모델을 나타내는 라인이 (이 경우 "Motorola PCS") 목록에서 사라진 것을 확인할 수 있습니다. 다음 라인을 주목하세요. 

\`Bus 001 Device 003: ID 22b8:2e76 Motorola PCS\`

위 라인에서 장치 ID(\`22b8:2e76\`)의 처음 4자리를 확인하고 싶다면, 이 경우 \`22b8\` 입니다. 이것이 Motorola의 식별자입니다. 시작 및 실행하려면 udev rules에 다음을 입력해야 합니다. 

\`\`\`shell
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
\`\`\`

\`22b8\` 을 위 명령에서 얻은 식별자로 변경해야 합니다. 이제 adb 장치를 실행해 기기가 ADB(Android Debug Bridge)에 올바르게 연결되었는지 확인합니다. 

\`\`\`shell
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
\`\`\`

오른쪽 열에 장치가 보이면, 장치가 연결되어 있음을 의미합니다. 한 번에 하나의 장치만 연결해야 합니다. 

### 3. 앱 실행하기

명령 프롬프트에 다음을 입력하여 기기에 앱을 설치하고 시작합니다. 

\`\`\`shell
$ npx react-native run-android
\`\`\`

> "브릿지 설정을 사용할 수 없습니다" 오류 발생 시 [adb reverse 사용](https://reactnative.dev/docs/running-on-device#method-1-using-adb-reverse-recommended)을 참고하세요. 

> 힌트: \`React Native CLI\` 를 사용해서 \`Release\` 빌드를 생성하고 실행할 수도 있습니다. (예: \`npx react-native run-android --variant=release\`).

## 개발 서버에 접속하기

개발 컴퓨터에서 실행중인 개발 서버에 접속해 기기에서 빠르게 반복할 수도 있습니다. USB 케이블 또는 Wi-Fi 네트워크에 액세스할 수 있는지에 따라, 여러 가지 방법으로 이 작업을 수행할 수 있습니다. 

### 방법 1: adb reverse 사용하기 (권장)

Android 5.0 (Lollipop) 이상 기기에서 USB 디버깅이 활성화되어 있고, 개발 컴퓨터에 USB를 통해 연결되어 있는 경우 이 방법을 사용할 수 있습니다. 

명령 프롬프트에서 다음을 실행하세요. 

\`\`\`shell
$ adb -s <device name> reverse tcp:8081 tcp:8081
\`\`\`

장치 이름을 찾으려면 다음 adb 명령을 실행하세요. 

\`\`\`shell
$ adb devices
\`\`\`

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

### 방법 2: Wi-Fi를 통해 연결하기

Wi-Fi를 통해 개발 서버에 연결할 수도 있습니다. 먼저 USB 케이블을 사용해 기기에 앱 설치가 완료되면, 다음 지침에 따라 무선으로 디버깅할 수 있습니다. 진행하기 전에 개발 컴퓨터의 현재 IP 주소가 필요합니다. 

터미널을 열고 \`/sbin/ifconfig\` 를 입력해서 컴퓨터의 IP 주소를 찾으세요. 

1. 컴퓨터(노트북)과 휴대폰이 **동일한** Wi-Fi 네트워크에 연결되어 있는지 확인하세요. 
2. 디바이스에서 React Native 앱을 실행하세요. 
3. 그러면 [오류와 함께 붉은색 화면](https://reactnative.dev/docs/debugging#in-app-errors-and-warnings)이 뜨지만, 다음 단계에서 해결할 수 있습니다. 
4. 인앱 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에 들어가세요.
5. **개발 설정** → **장치 디버깅 서버 호스트 & 포트**로 이동하세요. 
6. 컴퓨터(노트북)의 IP 주소와 로컬 개발 서버의 포트를 입력하세요. (예: 10.0.1.1:8081).
7. **개발자 메뉴**로 돌아가서 **JS 리로드**를 선택하세요.

이제 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)에서 라이브 리로딩을 활성화할 수 있습니다. 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

## 배포를 위해 앱 빌드하기

React Native를 사용해 멋진 앱을 만들었습니다. 이제 Play Store에서 이 앱을 릴리즈해봅시다. 이 과정은 다른 모든 네이티브 Android 앱과 동일하며, 몇 가지 추가적인 고려사항이 있습니다. 자세한 내용은 [signed APK 생성하기](https://reactnative.dev/docs/signed-apk-android)를 참고하십시오. 
`

export const text1_2 = `
<-- iOS/macOS -->

# 디바이스에서 실행하기

앱을 릴리즈하기 전에 실제 기기에서 테스트해보는 것이 좋습니다. 이 문서는 디바이스에서 React Native 앱을 실행하고 배포 준비를 하기 위해서 필요한 단계들을 안내합니다. 

Expo CLI나 Create React Native App을 사용해서 프로젝트를 설정한 경우, Expo 앱에서 QR 코드를 스캔해 디바이스에서 앱을 미리보기할 수 있습니다. 그러나 디바이스에서 앱을 빌드하고 실행하기 위해서는, [환경 설정 가이드](https://reactnative.dev/docs/environment-setup) 에서 네이티브 코드 종속성을 eject하고 설치해야합니다. 

## iOS 기기에서 앱 실행하기

#### 개발 OS: macOS

> iOS 기기용 앱을 구축하려면 Mac이 필요합니다. 대신에 Expo CLI를 사용하여 앱을 만드는 방법에 대해 알아보려면 [환경 설정 가이드](https://reactnative.dev/docs/environment-setup)를 참고하십시오. Expo 클라이언트 앱을 사용해 앱을 실행할 수 있습니다. 

### 1. USB를 통해 장치 연결하기

USB 라이트닝 케이블을 사용해 Mac에 iOS 기기를 연결하세요. 프로젝트의 \`ios\` 폴더로 들어가서 \`.xcodeproj\` 파일을 열거나, CoCoaPods을 사용하는 경우 XCode를 사용해 해당 폴더에서 \`.xcworkspace\` 파일을 엽니다. 

iOS 기기에서 앱을 처음으로 앱을 실행하는 경우, 기기를 개발용으로 등록해야할 수도 있습니다. XCode 메뉴 바에서 **Production** 메뉴를 연 다음 **Destination**으로 이동합니다. 목록에서 기기를 찾아 선택합니다. 그러면 XCode가 기기를 개발용으로 등록합니다. 

### 2. Configure code signing

아직 [Apple 개발자 계정]()이 없다면 계정을 등록하십시오. 

XCode Project Navigator에서 프로젝트를 선택한 다음 메인 타겟을 선택합니다. (프로젝트와 동일한 이름을 가져야 함). "일반" 탭을 찾습니다. "Signing"으로 이동하여 Team 드롭다운 하위에서 Apple 개발자 계정 또는 팀이 선택되었는지 확인합니다. 테스트 타겟에 대해서도 동일한 작업을 수행하세요. (메인 타겟 아래에 있으며, "테스트"로 끝남). 

프로젝트의 **테스트** 타겟에 대해 이 단계를 **반복하세요. **

![img](https://reactnative.dev/assets/images/RunningOnDeviceCodeSigning-daffe4c45a59c3f5031b35f6b24def1d.png)

### 3. 앱 빌드하고 실행하기

모든 것이 올바르게 설정되었다면, 장치가 XCode 툴바의 빌드 대상으로 나열되고, 디바이스 창 (\`⇧⌘2\`)에도 나타납니다. 이제 **빌드 후 실행** 버튼을 누르거나 (\`⌘R\`) **Product** 메뉴에서 **실행**을 선택합니다. 앱이 기기에서 곧 시작됩니다. 

![img](data:image/png;base64,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)

> 문제가 발생하면 Apple의 [기기에서 앱 시작하기](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html#//apple_ref/doc/uid/TP40012582-CH27-SW4) 문서를 살펴보세요. 

## 개발 서버에 접속하기

개발 컴퓨터에서 실행중인 개발 서버에 접속해 기기에서 빠르게 반복할 수도 있습니다. USB 케이블 또는 Wi-Fi 네트워크에 액세스할 수 있는지에 따라, 여러 가지 방법으로 이 작업을 수행할 수 있습니다. 기기를 흔들어서 [개발자 메뉴](https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu)를 열고, 라이브 리로드를 활성화하세요. 이제 앱은 JavaScript 코드가 변경될 때마다 다시 로드됩니다. 

![img](https://reactnative.dev/assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png)

### 문제 해결

> 문제가 있는 경우, Mac과 디바이스가 동일한 네트워크에 있고 서로 접근할 수 있는지 확인하십시오. 종속 포털이 있는 많은 개방형 무선 네트워크는 기기가 네트워크 상의 다른 기기에 접근하지 못하도록 설정되어 있습니다. 이 경우 기기의 개인 핫스팟 기능을 사용해야할 수도 있습니다. 또한 매우 빠른 전송 속도를 위해 Mac에서 기기로 USB를 통해 인터넷(Wifi/이더넷) 연결을 공유하고 이 터널을 통해 번들러에 연결할 수도 있습니다. 

개발 서버에 연결하려고 할 때 [오류가 있는 붉은색 화면](https://reactnative.dev/docs/debugging#in-app-errors-and-warnings)이 다음 설명과 함께 표시될 수 있습니다. 

> \`http://localhost:8081/debugger-proxy?role=client\`에 대한 연결 시간이 초과되었습니다. 노드 프록시를 실행 중입니까? 장치에서 실행 중인 경우, \`RCTWebSocketExecutor.m\`에 정확한 IP 주소가 있는지 확인하십시오.

이 문제를 해결하려면 다음 사항을 확인하십시오. 

#### 1. Wi-Fi 네트워크.

컴퓨터(노트북)과 휴대폰이 **동일한 ** Wi-Fi 네트워크에 연결되어 있는지 확인하세요. 

#### 2. IP 주소

빌드 스크립트가 컴퓨터의 IP 주소를 정확하게 인식했는지 확인하세요. (예: 10.0.1.123)

![img](https://reactnative.dev/assets/images/XcodeBuildIP-dfc8243436f5436466109acb8f9e0502.png)

**Report navigator** 탭을 열고, 최근 **빌드**를 선택한 후  \`IP=\` 다음에 IP 주소를 검색합니다. 앱에 포함된 IP 주소는 컴퓨터의 IP 주소와 일치해야 합니다. 

## 배포를 위해 앱 빌드하기

React Native를 사용해 멋진 앱을 만들었습니다. 이제 App Store에서 이 앱을 릴리즈해봅시다. 이 과정은 다른 모든 네이티브 iOS 앱과 동일하며, 몇 가지 추가적인 고려사항이 있습니다.

Follow the guide for [publishing to the Apple App Store](https://reactnative.dev/docs/publishing-to-app-store) to learn more.
`

export const text2 = `
# Fast Refresh (빠른 새로고침)

Fast Refresh는 React 컴포넌트의 변경 사항에 대해서 거의 즉각적인 피드백을 받을 수 있게 해주는 React Native 기능입니다. Fast Refresh는 기본적으로 활성화되어 있으며, React Naitve 개발자 메뉴에서 "Fast Refresh 활성화"를 선택해 활성화 또는 비활성화 할 수 있습니다. Fast Refresh를 사용하면 대부분의 편집 내용이 1~2초 내에 반영됩니다. 

## 작동 방식

- React 컴포넌트만 내보내는 모듈을 편집하는 경우, Fast Refresh는 해당 모듈에 대해서만 코드를 업데이트하고 컴포넌트를 다시 렌더링합니다. 스타일, 렌더링 로직, 이벤트 핸들러, 효과 등 해당 파일의 모든 항목을 편집할 수 있습니다. 
- React 컴포넌트가 아닌 항목을 내보내는 모듈을 편집하는 경우, Fast Refresh는 해당 모듈과, 해당 모듈을 가져오는 다른 모듈들을 전부 다시 실행합니다. 따라서 \`Button.js\` 와 \`Modal.js\` 가 \`Theme.js\` 를 import하고 있다면, \`Theme.js\` 를 편집했을 때 두 컴포넌트( \`Button.js\`, \`Modal.js\` )가 모두 업데이트됩니다. 
- 마지막으로, **React 트리 외부에 있는 모듈에서 import되는 파일을 편집**하는 경우, Fast Refresh는 **전체 리로드를 수행**합니다. React 컴포넌트를 렌더링하지만, **React 컴포넌트가 아닌 컴포넌트**에서 가져온 값을 내보내는 파일이 있을 수도 있습니다. 예를 들어, 컴포넌트가 상수를 내보내고, React가 아닌 유틸리티 모듈이 이 상수를 가져온다고 합시다. 이 경우 쿼리를 별도의 파일로 마이그레이션하고 이를 두 파일로 가져오는 것이 좋습니다. 이렇게 하면 Fast Refresh가 다시 활성화됩니다. 다른 경우들도 대부분 비슷한 방법으로 해결할 수 있습니다. 

## 에러 복구

Fast Refresh 세션 중에 **문법 오류**가 있으면, 이를 수정한 후 파일을 다시 저장할 수 있습니다. 그러면 빨간 상자가 사라집니다. 문법 오류가 있는 모듈들은 실행되지 않기 때문에 앱을 다시 로드할 필요가 없습니다. 

모듈 초기화 중에 런타임 에러가 발생한 경우 (예를 들어, \`StyleSheet.create\` 대신 \`Style.create\` 를 입력한 경우), Fast Refresh 세션은 에러를 고친 후에 다시 진행됩니다. 에러를 고치면 빨간 상자가 사라지고 모듈은 업데이트됩니다. 

오류가 발생하여 컴포넌트 내에서 런타임 에러가 발생하는 경우에도, Fast Refresh 세션은 마찬가지로 오류를 고친 후에 계속 진행됩니다. 이 경우 React는 업데이트된 코드를 사용해 애플리케이션을 다시 마운트합니다. 

엡에 [에러 바운더리](https://reactjs.org/docs/error-boundaries.html)(배포에서의 실패에 대비하는 데 좋은 방법)가 있으면, 에러 박스(빨간색 박스) 이후 편집에서 렌더링을 다시 시도합니다. 그런 의미에서 에러 바운더리가 있으면, 루트 앱 화면으로 매번 튕겨나가는 것을 방지할 수 있습니다. 그러나, 에러 바운더리가 너무 세분화되어서는 안 됩니다. 에러 바운더리는 React 배포에서 사용되며, 항상 의도적으로 설계되어야 합니다. 

## 한계점

Fast Refresh는 편집 중인 컴포넌트에서 로컬 React state를 유지합니다. 단, 해당 state를 유지하는 것이 안전한 경우에만 그렇게 합니다. 파일을 편집할 때마다 로컬 state가 리셋되는 데에는 몇 가지 이유가 있습니다. 

- 클래스형 컴포넌트에서는 로컬 state를 보존하지 않습니다. (함수형 컴포넌트와 Hooks에서만 state를 보존합니다). 
- 편집 중인 모듈이 React 컴포넌트 외에 추가적으로 내보내는 요소들을 가지고 있을 수 있습니다. 
- 모듈이 \`createNavigationContainer(MyScreen)\`와 같은 고차 컴포넌트를 호출한 결과를 내보내기도 합니다. 반환된 컴포넌트가 클래스인 경우, state는 리셋됩니다. 

장기적으로는, 코드가 함수형 컴포넌트와 Hooks 기반으로 많이 옮겨갈수록, state가 보존되는 경우가 더 많아질 것입니다. 

## 팁

- Fast Refresh는 함수형 컴포넌트 (그리고 Hooks)에서 기본적으로 React 로컬 state를 보존합니다. 
- 때때로 state가 리셋되고, 컴포넌트가 다시 마운트되도록 강제해야 하는 경우가 있습니다. 이러한 경우  \`// @refresh reset\` 을 편집 중인 파일의 아무 곳에나 추가하면 됩니다. 이 지시문은 파일의 로컬이며, Fast Refresh가 파일을 편집할 때마다 해당 파일에 정의된 컴포넌트들을 다시 마운트하도록 지시합니다. 예를 들어 마운트에서만 발생하는 애니메이션을 수정해야하는 경우에 이 기능을 유용하게 사용할 수 있습니다. 

## Fast Refresh와 Hooks

Fast Refresh는 편집 사이에 컴포넌트의 state를 가능하면 유지하려고 합니다. 특히 \`useState\` 와 \`useRef\` 는 Hooks 호출의 순서나 인자를 변경하지 않는 이상 이전 값을 유지합니다. 

\`useEffect\`, \`useMemo\`, \`useCallback\` 과 같이 종속성이 있는 Hooks는 Fast Refresh 중에 *항상* 업데이트됩니다. Fast Refresh가 발생하는 동안 이들의 종속성 목록은 무시됩니다. 

예를 들어  \`useMemo(() => x * 2, [x])\` 를  \`useMemo(() => x * 10, [x])\` 로 수정하는 경우, \`x\` (종속성)가 바뀌지 않았다고 하더라도 다시 실행됩니다. React에서 그렇게 하지 않으면 수정사항이 화면에 반영되지 않기 때문입니다. 

때로는 이것이 예상치 못한 결과로 이어질 수 있습니다. 예를 들어 종속성 배열이 비어 있는 \`useEffect\` 도 Fast Refresh 중에 한 번 다시 실행됩니다. 그러나, Fast Refresh 없이도 \`useEffect\` 를 가끔씩 다시 실행할 때 복원력이 있는 코드를 작성하는 것은 좋은 습관입니다. 나중에 새로운 종속성을 더 쉽게 도입할 수 있게 해주기 때문입니다. 
`

export const text3 = `
# 디버깅

## 인앱 개발자 메뉴에 접근하기

디바이스를 흔들거나 iOS 시뮤레이터에서 하드웨어 메뉴의 "흔들기 제스쳐"를 선택해 개발자 메뉴에 접근할 수 있습니다. 앱이 iOS 시뮬레이터에서 실행중인 경우 키보드 단축키 \`⌘D\` 를 눌러 개발자 메뉴에 접근할 수 있습니다. MacOS에서 Android 에뮬레이터를 이용해 앱을 실행하는 경우에는  \`⌘M\` , Windows나 Linux에서 Android 에뮬레이터로 앱을 실행하는 경우에는 \`Ctrl+M\` 을 누르면 됩니다. Android의 경우, \`adb shell input keyevent 82\` 명령을 실행해 개발자 메뉴를 열 수도 있습니다. (82는 메뉴 키 코드)

![img](https://reactnative.dev/assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png)

> 릴리즈 빌드에서는 개발자 메뉴가 비활성화됩니다. 

## Fast Refresh 활성화하기

Fast Refresh는 React 컴포넌트의 변경 사항에 대해서 거의 즉각적인 피드백을 받을 수 있게 해주는 React Native 기능입니다. 디버깅 중에 [Fast Refresh](https://reactnative.dev/docs/fast-refresh) 를 활성화하면 도움이 됩니다. Fast Refresh는 기본적으로 활성화되어 있으며, React Naitve 개발자 메뉴에서 "Fast Refresh 활성화"를 선택해 활성화 또는 비활성화 할 수 있습니다. Fast Refresh를 사용하면 대부분의 편집 내용이 1~2초 내에 반영됩니다. 

## 키보드 단축키 활성화하기

React Native supports a few keyboard shortcuts in the iOS Simulator. They are described below. To enable them, open the Hardware menu, select Keyboard, and make sure that "Connect Hardware Keyboard" is checked.

React Native는 iOS 시뮬레이터에서 몇 가지 키보드 단축키를 지원합니다. 지원되는 단축키들은 아래에 설명되어 있습니다. 키보드 단축키를 사용하려면 하드웨어 메뉴를 열고 키보드를 선택한 다음, "하드웨어 키보드 연결"이 선택되어 있는지 확인합니다. 

## LogBox 

개발 빌드에서의 오류 및 경고들은 앱 내의 LogBox에 표시됩니다. 

> 릴리즈(배포) 빌드에서 LogBox는 자동으로 비활성화됩니다. 

### 콘솔 오류 및 경고

콘솔 오류 및 경고는 각각 빨간색 또는 노란색 배지가 있는 화면 알림과, 콘솔에서의 오류 및 경고 갯수로 표시됩니다. 콘솔 오류 또는 경고를 보려면, 알림을 눌러서 로그에 대한 전체 화면 정보를 보고 콘솔의 모든 로그들을 페이지화할 수 있습니다. 

이러한 알림은 \`LogBox.ignoreAllLogs()\` 를 사용해 숨길 수 있습니다. 이 기능은 제품 데모를 제공할 때 유용합니다. \`LogBox.ignoreLogs()\` 를 통해 로그별로 알림을 숨길 수도 있습니다. 이 는 서드파티 종속성에서 발생한 경고와 같이, 고칠 수 없는 시끄러운 경고가 있을 때 유용합니다. 

> 마지막 수단으로 로그를 무시하고, 무시된 로그들을 수정하는 작업을 만듭니다. 

\`\`\`jsx
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
\`\`\`

### 처리되지 않은 오류

\`undefined is not a function\` 과 같이 처리되지 않은 JavaScript 오류가 있으면, 오류의 원인과 함께 자동으로 전체 화면으로 LogBox 오류가 열립니다. 이러한 오류는 무시할 수 있고, 최소화할 수 있기 때문에 이러한 오류가 발생했을 때 앱의 상태를 확인할 수는 있습니다. 그러나 이러한 오류는 반드시 해결되어야 합니다. 

### 문법 오류

문법 오류가 발생하면, 문법 오류의 스택 추적 및 위치와 함께 자동으로 LogBox 오류 창이 전체 화면으로 열립니다. 문법 오류는 앱을 계속하기 전에 반드시 수정해야 하는 잘못된 자바스크립트 실행을 나타내기 때문에 무시할 수 없습니다. 이러한 오류를 해제하려면, 문법 오류를 수정한 다음 파일을 저장해서 자동으로 해제되도록 하거나 (Fast Refresh가 활성화되어 있는 경우), \`cmd+r\` 을 눌러 리로드하면 됩니다 (Fast Refresh가 비활성화되어 있는 경우).

## Chrome 개발자 도구

Chrome에서 JavaScript 코드를 디버깅하려면, 개발자 메뉴에서 "원격으로 JS 디버깅하기"를 선택합니다. 그러면 http://localhost:8081/debugger-ui에서 새로운 탭이 열립니다. 

Chrome 메뉴에서 \`도구 -> 개발자 도구\` 를 선택해 [개발자 도구](https://developer.chrome.com/devtools) 를 엽니다. 키보드 단축키를 사용해 개발자도구에 접근할 수도 있습니다 (macOS에서는 \`⌘⌥I\`, Windows에서는 \`Ctrl\` \`Shift\` \`I\`). 더 나은 디버깅 환경을 위해 [예외 발생 시 코드 자동 중지(Pause On Caught Exceptions)](http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511)  기능을 활성화할 수도 있습니다. 

> 참고: Android에서 디버거와 디바이스 사이에 시간이 경과한 경우, 애니메이션, 이벤트 동작 등의 작업이 제대로 작동하지 않거나 결과가 정확하지 않을 수 있습니다. 디버거 기기에서 다음 명령을 실행해서 이를 해결합니다. 
>
> \`\`\`shell
> adb shell "date \`date +%m%d%H%M%Y.%S%3N\`"
> \`\`\`
>
> 실제 디바이스에서 사용하려면 루트 접근 권한이 필요합니다. 

> 참고: React 개발자 도구 Chrome 확장 기능은 React Native에서 작동하지 않지만, 대신에 해당 독립형 버전을 사용할 수 있습니다. 자세한 내용은 [이 섹션](https://reactnative.dev/docs/debugging#react-developer-tools)을 참조하십시오. 

### 사용자 지정 JavaScript 디버거를 사용한 디버깅

Chrome 개발자 도구 대신에 사용자 지정 JavaScript 디버거를 사용하려면 \`REACT_DEBUGGER\` 환경 변수를 사용자 지정 디버거를 시작하는 명령으로 설정하십시오. 그런 다음 개발자 메뉴에서 "원격으로 JS 디버깅하기"를 선택해 디버깅을 시작할 수 있습니다. 

디버거는 모든 프로젝트 루트의 목록을 공백으로 구분하여 받습니다. 예를 들어 \`REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative"\` 명령을 설정하면,  \`node /path/to/launchDebugger.js --port 2345 --type ReactNative /path/to/reactNative/app\`  명령을 사용해 디버거를 시작할 수 있습니다.

> 이러한 방식으로 실행되는 사용자 지정 디버거 명령은, 수명이 짧은 프로세스여야 하며, 200 kilobytes 이상의 출력을 생성해서는 안 됩니다. 

## Safari 개발자 도구

"원격으로 JS 디버깅하기"를 활성화할 필요 없이, Safari를 사용해 앱의 iOS 버전을 디버깅할 수 있습니다. 

- Safari에서 개발 메뉴 활성화하기: \`설정 → 고급 → "메뉴 바에서 개발 메뉴 보기" 선택\`
- 앱의 JSContext 선택하기: \`개발 → 시뮬레이터 → JSContext\`
- 콘솔과 디버거가 있는 Safari의 Web Inspector를 열여야 합니다. 

소스 맵은 기본적으로 활성화되어 있지만, [이 가이드](http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html) 또는 [비디오](https://www.youtube.com/watch?v=GrGqIIz51k4)에 따라 소스 맵을 활성화하고 소스 코드의 올바른 위치에 중단점을 설정할 수 있습니다. 

그러나, 앱이 다시 로드될 때마다 (live reload를 사용함으로써, 또는 수동으로 다시 로드함으로써), 새로운 JSContext가 생성됩니다. "JSContext용 Web Inspectors 자동 표시"를 선택하면 최신 JSContext를 수동으로 선택할 필요가 없습니다. 

## React 개발자 도구

[React 개발자 도구의 독립형(standalone) 버전](https://github.com/facebook/react/tree/master/packages/react-devtools)을 사용해 React 컴포넌트 계층을 디버깅할 수 있습니다. 이 패키지를 사용하려면 \`react-devtools\` 패키지를 전역으로 설치하십시오. 

> 참고: \`react-devtools\` 버전 4가 제대로 작동하려면 \`react-native\` 버전이 0.62이상이어야 합니다.

- npm

  \`\`\`shell
  npm install -g react-devtools
  \`\`\`

- Yarn

  \`\`\`shell
  yarn global add react-devtools
  \`\`\`

이제 터미널에서 \`react-devtools\` 명령을 실행해 독립형 개발자도구 앱을 시작하세요.

\`\`\`shell
react-devtools
\`\`\`

![React DevTools](https://reactnative.dev/assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png)

그러면 몇 초 안에 시뮬레이터에 접속됩니다. 

> 참고: 전역 설치를 피하고 싶다면, \`react-devtools\` 를 프로젝트 종속성으로 추가할 수 있습니다. \`npm install --save-dev react-devtools\` 로 \`react-devtools\` 패키지를 프로젝트에 추가한 다음, \`package.json\` 의 \`script\` 섹션에 \`"react-devtools": "react-devtools"\` 를 추가합니다. 그리고 프로젝트 폴더에서 \`npm run react-devtools\` 를 실행해 개발도구를 엽니다. 

### React Native Inspector와의 통합

인앱 개발자 메뉴를 열고 "Inspector 활성화"를 선택합니다. 그러면 UI 엘리먼트를 누르고 해당 엘리먼트에 대한 정보를 볼 수 있는 오버레이가 나타납니다. 

![React Native Inspector](https://reactnative.dev/assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif)

\`react-devtools\` 가 실행중일 때는 Inspector가 축소 모드가 되고, 대신에 DevTools를 기본 UI로 사용합니다. 이 모드에서는 시뮬레이터에서 무언가를 클릭하면 DevTools에서 관련된 컴포넌트가 표시됩니다. 

![React DevTools Inspector Integration](https://reactnative.dev/assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif)

이 모드를 종료하려면 동일한 메뉴(=인앱 개발자 메뉴)에서 "Inspector 비활성화"를 선택하면 됩니다. 

### 컴포넌트 인스턴스 검사

Chrome에서 JavaScript를 디버깅할 때, 브라우저 콘솔에서 React 컴포넌트의 props와 state를 검사할 수 있습니다. 

먼저, Chrome 디버깅 가이드에 따라 Chrome 콘솔을 엽니다. 

Chrome 콘솔의 왼쪽 상단 드롭다운에 \`debuggerWorker.js\` 가 표시되는지 확인하십시오. **이 단계는 필수입니다.**

그리고 React DevTools에서 React 컴포넌트를 선택하세요. 이름으로 컴포넌트를 찾을 수 있도록 상단에 검색 상자가 있습니다. 선택하는 즉시 Chrome 콘솔에서 \`$r\` 로 사용할 수 있으므로 props, state, 인스턴스 및 속성을 검사할 수 있습니다. 

![React DevTools Chrome Console Integration](https://reactnative.dev/assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif)

## 성능 모니터

개발자 메뉴에서 "성능 모니터"를 선택해 성능 오버레이를 활성화하여 성능 문제를 디버깅할 수 있습니다. 

------

## 애플리케이션 상태 디버깅

[Reactotron](https://github.com/infinitered/reactotron) 은 Redux나 MobX-State-Tree 애플리케이션 상태를 검사하고, 사용자 지정 로그 보기 기능, 사용자 지정 명령어 실행하기(state, store, restore state snapshots 등) 기능, 그리고 React Native 앱의 다른 유용한 디버깅 기능들을 사용할 수 있게 해주는 오픈 소스 데스크탑 앱입니다. 

[README에서](https://github.com/infinitered/reactotron) 설치 가이드를 볼 수 있습니다. Expo를 사용 중이라면, [Expo에 설치하는 방법](https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a)을 참고하세요. 

# 네이티브 디버깅

### 네이티브 코드로만 작성된 프로젝트

다음 섹션은 네이티브 코드가 expose된 프로젝트에만 적용됩니다. \`expo-cli\` 워크플로우를 사용하는 경우, 이 API를 사용하기 위해 [ejecting](https://docs.expo.io/versions/latest/workflow/customizing/) 에 관한 가이드를 참고하십시오. 

## 콘솔 로그에 접근하기

앱이 실행 중일 때 터미널에서 다음 명령어들을 실행함으로써 iOS 또는 Android 앱용 콘솔 로그를 표시할 수 있습니다. 

\`\`\`shell
npx react-native log-ios
npx react-native log-android
\`\`\`

또한 iOS 시뮬레이터에서는 \`디버깅 -> 시스템 로그 열기...\` 를 통해, Android 앱이 디바이스나 에뮬레이터에서 실행중일 때는 터미널에서 \`adb logcat *:S ReactNative:V ReactNativeJS:V\` 을 실행함으로써 콘솔 로그에 접근할 수 있습니다. 

> Create React Native App 또는 Expo CLI를 사용 중인 경우, 콘솔 로그는 번들러와 동일한 터미널 출력에 이미 나타납니다. 

## 디바이스에서 Chrome 개발자 도구로 디버깅하기

> Create React Native App 또는 Expo CLI를 사용 중인 경우 이미 설정이 되어 있습니다. 

iOS 디바이스에서 컴퓨터의 IP 주소로 파일을 열고, 개발자 메뉴에서 "원격으로 JS 디버깅하기"를 선택합니다. [\`RCTWebSocketExecutor.m\`](https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/RCTWebSocketExecutor.m)

USB를 통해 연결된 Android 5.0 이상의 기기에서는, \`adb\` 커맨드 라인 툴을 사용해 디바이스로부터 컴퓨터까지의 포워딩 포트를 설정할 수 있습니다. 

\`adb reverse tcp:8081 tcp:8081\`

또는 개발자 메뉴에서 "개발 설정"을 선택한 후 "디바이스 디버깅 서버 호스트"를 컴퓨터의 IP 주소와 일치하도록 업데이트합니다. 

> 문제가 발생하면 Chrome 확장 프로그램 중 하나가 디버거와 예상치 못한 방식으로 상호작용하고 있을 수 있습니다. 확장 프로그램을 모두 비활성화하고, 문제가 있는 확장 프로그램을 찾을 때까지 하나씩 활성화해보십시오. 

## 네이티브 코드 디버깅하기

네이티브 모듈 작성 등 네이티브 코드 작업 시, 안드로이드 스튜디오나 XCode에서 앱을 시작하고, 표준 네이티브 앱을 구축할 때와 마찬가지로 네이티브 디버깅 기능(중단점 설정 등)을 활용할 수 있다. 
`

export const text4 = `
# 스택 추적 디버깅 심볼 생성하기 (Symbolicating a stack trace)

React Native 앱이 릴리즈 빌드에서 처리되지 않은 예외를 발생시키는 경우, 출력이 난독화되어 읽기 어려울 수 있습니다. 

\`\`\`shell
07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:
07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161
07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084
07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854
07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119
\`\`\`

\`p@1:132161\` 과 같은 부분은 최소화된 함수 이름과 바이트코드 오프셋입니다. 이 문제를 디버깅하려면, 이러한 부분을 파일, 라인, 함수명 (\`AwesomeProject/App.js:54:initializeMap\`) 으로 변환해야 합니다. 이를 **디버깅 심볼 생성 (symbolication)** 이라고 합니다. 생성된 소스맵과 스택 추적 결과를 \`metro-symbolicate\` 로 전달함으로써, 위와 같이 축약된 함수명과 바이트코드로 심볼을 생성할 수 있습니다. 

> \`metro-symbolicate\` 패키지는 [개발 환경 설정](https://reactnative.dev/docs/environment-setup)의 React Native 템플릿 프로젝트에 기본적으로 설치되어 있습니다. 

스택 추적을 포함하는 파일에서: 

\`\`\`shell
npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt
\`\`\`

\`adb logcat\`에서 직접: 

\`\`\`shell
adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map
\`\`\`

이렇게하면 축약된 함수명과 \`p@1:132161\` 과 같은 오프셋이 실제 파일과 실제 함수명 \`AwesomeProject/App.js:54:initializeMap \`으로 바뀝니다. 

## Notes on Sourcemaps 소스맵에 관한 참고사항

- 빌드 프로세스에 의해 여러 소스 맵이 생성될 수 있습니다. 예제에서 보여주는 위치에 있는 것을 사용해야 합니다. 
- 사용하는 소스맵이 충돌을 일으킨 앱의 정확한 커밋과 일치하는지 확인해야 합니다. 소스 코드에서의 사소한 변경으로 인해 오프셋에 큰 차이가 발생할 수 있습니다. 
- \`metro-symbolicate\` 가 성공적으로 즉시 종료되는 경우, 입력은 터미널이 아니라 파이프나 리다이렉션에서 와야 합니다. 
`

export const text5 = `
# 테스트

코드베이스가 확장되면서, 예상치 못한 작은 오류와 에지 케이스들이 더 큰 장애로 이어질 수 있습니다. 버그는 사용자 경험을 악화시켜 결과적으로 비즈니스 손실로 이어집니다. 취약한 프로그래밍을 방지하는 한 가지 방법은, 코드를 내놓기 전에 먼저 테스트하는 것입니다. 

이 가이드에서는 정적 분석에서부터 엔드 투 엔드 테스트까지, 앱이 예상대로 작동되는지 확인할 수 있는 여러 가지 자동화된 방식들을 다룹니다. 

![Testing is a cycle of fixing, testing, and either passing to release or failing back into testing.](https://reactnative.dev/docs/assets/diagram_testing.svg)

## 테스트를 해야 하는 이유

우리는 인간이고, 인간은 실수를 합니다. 테스트는 이러한 오류를 발견하고 코드가 작동하는지 확인하는 데에 도움이 되기 때문에 중요합니다. 더욱 중요한 것은, 테스트를 통해 나중에 새로운 기능을 추가하거나, 기존 기능을 리팩토링하거나, 프로젝트의 주요 종속성을 업그레이드하더라도 코드가 잘 작동되도록 할 수 있다는 점입니다. 

테스트를 하는 것에는 생각보다 많은 가치가 있습니다. 코드에서 버그를 고치는 가장 좋은 방법 중 하나는 버그를 노출시키는 실패 테스트 케이스를 작성하는 것입니다. 그런 다음 버그를 수정하고 테스트를 다시 실행할 때, 테스트를 통과하면 버그가 수정되었음을 의미하며, 코드 베이스에 다시 들어가지 않습니다. 

또한 테스트는 팀에 새롭게 합류하는 사람들을 위한 문서로서의 역할도 할 수 있습니다. 코드베이스를 한 번도 본 적이 없는 사람들에게 있어서, 테스트를 읽어보는 것은 코드의 작동 방식을 이해하는 데에 도움이 될 수 있습니다. 

마지막으로, 보다 자동화된 테스트를 통해 수동 QA에 소요되는 시간이 줄어들어 귀중한 시간을 확보할 수 있습니다. 

## 정적 분석

코드 품질을 향상시키는 첫 번째 단계는 정적 분석 도구를 사용하는 것입니다. 정적 분석은 코드를 실행하지 않고, 코드를 작성하는 단계에 오류를 검사합니다. 

- **Linters** 는 unused code와 같은 일반적인 오류를 잡아내기 위해서, 함정을 피하기 위해서, 그리고 공백 대신 탭을 사용하는 것과 같이 (또는 설정에 따라 반대로) 금지된 스타일 가이드를 표시하기 위해서 코드를 분석합니다. 

- **타입 체킹** 은 함수가 설계된 의도에 맞는 인자를 전달받도록 합니다. 예를 들어 숫자를 전달받을 것으로 예상되는 카운팅 함수에 문자열을 전달하는 일을 방지합니다. 

React Native는 linting을 위한 도구로 [ESLint](https://eslint.org/) , 타입 체킹을 위한 도구로 [Flow](https://flow.org/en/docs/)를 같이 제공합니다. 일반 JavaScript로 컴파일되는 타입형 언어인 [TypeScript](https://reactnative.dev/docs/typescript)를 사용할 수도 있습니다. 

## 테스트가 가능한 코드 작성하기

테스트를 시작하려면, 먼저 테스트가 가능한 코드를 작성해야 합니다. 비행기 제조과정을 떠올려보세요. 모델이 최초로 출시되기 전에, 모든 복잡한 시스템이 함께 잘 작동되며, 개별 부품이 안전하고 올바르게 기능함을 보장하기 위해 테스트됩니다. 예를 들어 날개는 극한의 하중으로 구부리고, 엔진 부품은 내구성을 시험하며, 전면 유리는 조류와의 충돌 시뮬레이션을 통해 테스트합니다. 

소프트웨어도 비슷합니다. 여러 줄로 이루어진 하나의 큰 파일로 프로그램 전체를 작성하는 대신에, 여러 개의 작은 모듈로 코드를 작성해서, 전체를 테스트하는 것보다 더 철저하게 테스트할 수 있도록 합니다. 이러한 방식으로, 테스트 가능한 코드를 작성하는 것은 클린한, 모듈화된 코드를 작성하는 것과 관련되어 있습니다.

앱을 좀 더 테스트가 용이하게 만들려면, 앱의 뷰 부분(React 컴포넌트)을 비즈니스 로직과 앱의 상태(Redux, MobX 또는 다른 솔루션 사용 여부에 관계 없이)로부터 분리하는 것에서 시작합니다. 이렇게 하면, React 컴포넌트에 의존해서는 안 되는 비즈니스 로직 테스트를, 앱의 UI를 렌더링하는 것이 주된 역할인 컴포넌트와 독립적으로 유지할 수 있습니다!

이론적으로는 컴포넌트에서 가져오는 모든 로직과 데이터를 옮기는 것까지 생각해볼 수 있습니다. 이렇게 하면 컴포넌트는 온전히 렌더링만 하게 됩니다. state는 컴포넌트로부터 완전히 독립됩니다. 앱의 로직은 어떠한 React 컴포넌트도 없이 작동할 수 있습니다!

> 다른 학습 자료를 통해 테스트 가능한 코드에 대해 더 자세히 살펴보기를 권장합니다. 

## 테스트 작성하기

테스트 가능한 코드를 작성했다면, 이제 실제 테스트를 작성해봅시다. React Native의 기본 템플릿은 [Jest](https://jestjs.io/) 테스트 프레임워크와 같이 제공됩니다. 이 프레임워크는 React Native 환경에 맞게 조정된 사전 설정(프리셋)을 가지고 있어서, 설정이나 mocks를 수정하지 않고도 바로 생산적으로 사용할 수 있습니다 ([mocks에 대해 더 알아보기](https://reactnative.dev/docs/testing-overview)). Jest를 사용해 이 가이드에서 다루는 모든 유형의 테스트를 작성할 수 있습니다. 

> 테스트 주도 개발을 하는 경우, 실제로 테스트를 먼저 작성하게 되어서, 코드의 테스트 가능성이 보장됩니다. 

### 테스트 작성하기

테스트는 짧아야 하며 이상적으로는 한 가지만 테스트해야 합니다. Jest로 작성된 단위 테스트 예제로 시작해봅시다. 

\`\`\`jsx
it('given a date in the past, colorForDueDate() returns red', () => {
  expect(colorForDueDate('2000-10-20')).toBe('red');
});
\`\`\`

테스트는  [\`it\`](https://jestjs.io/docs/en/api#testname-fn-timeout))) 함수에 전달된 문자열로 설명됩니다. 테스트 대상이 무엇인지 분명히 알 수 있도록 설명을 작성하는 데 세심한 주의를 기울이십시오. 다음 사항에 최선을 다하십시오. 

1. **Given** - 전제 조건
2. **When** - 테스트 중인 함수에 의해 실행되는 작업
3. **Then** - 예상 결과

이를 AAA (Arrange, Act, Assert)라고도 합니다. 

Jest는 테스트 구성을 돕는 describe 함수를 제공합니다. 하나의 기능에 속하는 모든 테스트를 그룹화하는 데에 \`describe\` 를 사용하십시오. Describe들은 필요한 경우 중첩시킬 수도 있습니다. 그 외에 일반적으로 사용하는 함수는 테스트 중인 객체를 셋팅하기 위해 사용할 수 있는 \`beforeEach\` 또는 \`beforeAll\` 입니다. [Jest api refrence](https://jestjs.io/docs/en/api) 에서 더 자세히 알아보세요. 

테스트 단계가 많거나 기대 수준이 높은 경우, 여러 개의 작은 단계로 분할할 수 있습니다. 또한 테스트가 서로 완전히 독립되어 있는지 확인하십시오. 각 테스트는 다른 테스트를 먼저 실행하지 않고 자체적으로 실행할 수 있어야 합니다. 반대로, 모든 테스트를 함께 실행하는 경우, 첫 번째 테스트가 두 번째 테스트의 출력에 영향을 미치지 않아야 합니다.

마지막으로, 개발자로서 우리는 코드가 잘 작동하고 충돌하지 않는 것을 좋아합니다. 그러나 테스트를 할 때는, 실패한 테스트를 *좋은 기회*라고 생각할 필요가 있습니다. 테스트에 실패한다는 것은, 무언가 잘못되었다는 것을 의미합니다. 이는 문제가 사용자에게 영향을 미치기 전에 해결할 기회를 줍니다. 

## 단위 테스트 (Unit Tests)

단위 테스트는 개별 함수 또는 클래스와 같은, 코드의 가장 작은 부분을 다룹니다. 

When the object being tested has any dependencies, you’ll often need to mock them out, as described in the next paragraph.

테스트 대상 객체에 종속성이 있는 경우, 다음 단락에서 설명하는 대로 이를 모킹(moking)해야 할 때가 많습니다. 

단위 테스트의 장점은, 빠르게 작성하고 실행할 수 있다는 점입니다. 따라서 작업을 하면서 테스트가 통과되고 있는지에 대한 피드백을 빠르게 받을 수 있습니다. Jest에는 편집 중인 코드와 관련된 테스트를 지속적으로 실행할 수 있는 옵션도 있습니다. 

![ ](https://reactnative.dev/docs/assets/p_tests-unit.svg)

### 모킹 (Mocking)

때때로, 테스트된 객체가 외부 종속성을 가지고 있는 경우, 이를 "mock out"해야할 수 있습니다. "모킹(Mocking)"은 코드의 일부 종속성을 사용자 자신의 구현으로 대체하는 것입니다. 

> 일반적으로, 테스트에서 실제 객체를 사용하는 것이 mocks를 사용하는 것보다 낫지만, 그것이 불가능한 상황도 있습니다. (예: JS 단위 테스트가 Java나 Objective-C로 작성된 네이티브 모듈에 의존하는 경우)

여러분이 도시의 현재 날씨를 보여주는 앱을 작성하고 있고, 날씨 정보를 제공하는 외부 서비스나 다른 의존성을 사용한다고 상상해 보세요. 비가 내리는 경우 비구름과 함께 이미지를 보여주려고 합니다. 테스트에서 해당 서비스를 호출하지 않으려는 이유는 다음과 같습니다.

- (관련된 네트워크 요청으로 인해) 테스트가 느리고 불안정해질 수 있습니다. 
- 테스트를 실행할 때마다 서비스가 다른 데이터를 반환할 수 있습니다. 
- 테스트를 꼭 실행해야 할 때 서드 파티 서비스가 오프라인 상태가 될 수 있습니다. 

따라서, 여러분은 수천 줄의 코드와 온라인 온도계를 효과적으로 대체하면서 서비스의 mock 구현을 제공할 수 있습니다! 

> Jest는 기능 수준에서부터 모듈 수준까지의 [모킹에 대한 지원](https://jestjs.io/docs/en/mock-functions#mocking-modules)과 함께 제공됩니다. 

## 통합 테스트 (Integration Tests)

큰 소프트웨어 시스템을 작성할 때, 작은 개별 소프트웨어들은 서로 상호작용해야 합니다. 단위 테스트에서 단위가 다른 단위에 의존하고 있는 경우, 결국 이를 가짜로 대체하면서 해당 종속성을 모킹해야할 수도 있습니다. 

통합 테스트에서, 실제 개별 단위를 결합하고 (앱에서와 동일하게) 함께 테스트해 예상한대로 작동하는지 확인합니다. 이는 여기에서 모킹이 일어나지 않는다고 말하는 것이 아닙니다. 여전히 모킹이 필요할 것입니다(예를 들어 기상청과의 소통을 모킹하기 위해). 그러나 단위 테스트에서보다는 모킹이 훨씬 적게 필요할 것입니다. 

> 통합 테스트가 의미하는 바가 무엇인지에 대해서 용어가 항상 일치하는 것은 아닙니다. 또한 단위 테스트와 통합 테스트의 구분이 항상 명확하지는 않을 수 있습니다. 이 가이드에서는 다음과 같은 경우가 "통합 테스트"에 해당됩니다. 
>
> - 위에서 설명된 대로 여러 모듈을 조합하는 경우
> - 외부 시스템을 사용하는 경우
> - 다른 애플리케이션 (기상 서비스 API 등)에 대한 네트워크 호출을 하는 경우
> - 모든 종류의 파일 또는 데이터베이스 입출력(I/O)를 실행하는 경우

![ ](https://reactnative.dev/docs/assets/p_tests-integration.svg)

## 컴포넌트 테스트

React 컴포넌트는 앱을 렌더링하는 역할을 하며, 사용자는 출력된 컴포넌트와 직접적으로 상호작용 합니다. 앱의 비즈니스 로직이 높은 테스트 적용 범위를 가지고 있고 올바른 경우에도, 컴포넌트 테스트를 거치지 않으면 사용자에게 손상된 UI를 제공하게 될 수 있습니다. 컴포넌트 테스트는 단위 테스트와 통합 테스트 모두에 포함될 수 있지만, React Native의 핵심적인 부분이기 때문에 별도로 다루겠습니다. 

React 컴포넌트를 테스트 하는 경우, 다음 두 가지를 테스트할 수 있습니다. 

- 상호 작용: 사용자와 상호 작용할 때 컴포넌트가 올바르게 작동하는지 확인합니다. (예: 사용자가 버튼을 누를 때)
- 렌더링: React에서 사용되는 컴포넌트의 렌더링 결과가 올바른지 확인합니다. (예: 버튼의 모양 및 UI 내에서의 위치)

예를 들어, \`onPress\` 리스너를 가진 버튼이 있다면, 해당 버튼이 올바르게 표시되는지 여부와 버튼을 눌렀을 때 컴포넌트가 올바르게 처리되는지 여부를 테스트하려고 합니다. 

이를 테스트하는 데 도움이 되는 몇 가지 라이브러리들이 있습니다. 

- React 코어와 함께 개발된 React의 [Test Renderer](https://reactjs.org/docs/test-renderer.html)는 DOM이나 네이티브 모바일 환경에 의존하지 않고 순수 JavaScript 객체에 React 컴포넌트를 렌더링하는 데 사용할 수 있는 리액트 렌더러를 제공합니다. 

- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)는 React의 테스트 렌더러 위에 구축되며, 다음 단락에서 설명할 \`fireEvent\`와 \`query\` API를 추가합니다. 

> 컴포넌트 테스트는 Node.js 환경에서 실행되는 JavaScript 테스트에 불과합니다. 컴포넌트 테스트는 React Native 컴포넌트를 지원하는 iOS, Android 또는 다른 플랫폼 코드를 고려하지 않습니다. 따라서 모든 것이 사용자 입장에서 잘 작동할 것이라고 100% 확신할 수는 없습니다. iOS 또는 Android 코드에 버그가 있다면, 컴포넌트 테스트로는 이를 찾을 수 없을 것입니다. 

![ ](https://reactnative.dev/docs/assets/p_tests-component.svg)

### 사용자 상호작용 테스트

UI 렌더링 외에도, 컴포넌트는 \`TextInput\` 의 경우  \`onChangeText\` , \`Button\` 의 경우 \`onPress\` 와 같은 이벤트를 처리합니다. 또한 다른 함수나 이벤트 콜백을 포함할 수도 있습니다. 다음 예제를 참고하세요. 

\`\`\`jsx
function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={(text) => setGroceryItem(text)}
      />
      <Button
        title="Add the item to list"
        onPress={addNewItemToShoppingList}
      />
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
}
\`\`\`

사용자 상호 작용을 테스트 할 때, 사용자 관점에서 컴포넌트를 테스트하십시오. (페이지에는 어떤 내용이 있는지, 상호 작용했을 때 어떤 변화가 있는지 등)

일반적으로는, 사용자가 보거나 들을 수 있는 것을 사용하는 것을 선호합니다. 

- 렌더링된 텍스트 또는 [접근성 도우미](https://reactnative.dev/docs/accessibility#accessibility-properties)를 사용하는 테스트

반대로, 다음을 피해야 합니다. 

- 컴포넌트 props 또는 state에 대한 테스트
- 테스트ID 쿼리

props나 state와 같은 구현 세부 정보를 테스트하지 마십시오. 이러한 테스트는 사용자가 컴포넌트와 상호 작용하는 방식을 지향하지 않으며, 리팩토링에 의해 깨지는 경우가 있습니다 (예를 들어 일부 항목의 이름을 변경하거나 hooks를 사용해 클래스형 컴포넌트를 다시 작성하는 경우). 

> React 클래스형 컴포넌트는 특히 내부 state, props 또는 이벤트 핸들러와 같은 구현 세부정보를 테스트하기 쉽습니다. 구현 세부 정보를 테스트하지 않으려면, Hooks와 함께 함수형 컴포넌트를 사용하는 것이 좋습니다. 함수형 컴포넌트는 컴포넌트 내부에 의존하기 어렵게 만듭니다. 

[React Native Testing Library](https://callstack.github.io/react-native-testing-library/) 와 같은 컴포넌트 테스트 라이브러리는 제공된 API를 신중하게 선택함으로써 사용자 중심의 테스트를 작성할 수 있도록 지원합니다. 다음 예제에서는 사용자가 컴포넌트와 상호 작용하는 것을 시뮬레이션하는 \`fireEvent\` 메소드 \`changeText\` 와 \`press\` 를 사용하며, 렌더링 결과에서 일치하는 \`Text\` 노드를 찾는 \`getAllByText\` 쿼리 메소드를 사용합니다. 

\`\`\`jsx
test('given empty GroceryShoppingList, user can add an item to it', () => {
  const { getByPlaceholder, getByText, getAllByText } = render(
    <GroceryShoppingList />
  );

  fireEvent.changeText(
    getByPlaceholder('Enter grocery item'),
    'banana'
  );
  fireEvent.press(getByText('Add the item to list'));

  const bananaElements = getAllByText('banana');
  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
\`\`\`

이 예제는 함수를 호출할 때 state가 어떻게 변경되는지 테스트하지 않습니다. \`TextInput\` 에서 사용자가 텍스트를 변경하고, \`Button\` 을 누를 때 발생하는 작업을 테스트합니다!

### 렌더링된 결과 테스트

[Snapshot testing](https://jestjs.io/docs/en/snapshot-testing) 은 Jest에서 지원하는 고급 테스트입니다. 이는 매우 강력한 low-level의 도구이므로, 사용 시 각별한 주의가 필요합니다. 

"컴포넌트 스냅샷"은 Jest에 내장된 사용자 지정 React serializer에 의해 생성되는, JSX와 유사한 문자열입니다. 이 serializer를 사용하면 Jest가 React 컴포넌트 트리를 사람이 읽을 수 있는 문자열로 변환해 줍니다. 다시 말해서, 컴포넌트 스냅샷은 테스트 실행 중에 생성되는 컴포넌트 렌더링 결과를 텍스트로 표현한 것입니다. 이는 다음과 같이 보일 수 있습니다. 

\`\`\`jsx
<Text
  style={
    Object {
      "fontSize": 20,
      "textAlign": "center",
    }
  }>
  Welcome to React Native!
</Text>
\`\`\`

일반적으로 컴포넌트를 먼저 구현한 다음 스냅샷 테스트를 수행합니다. 그리고 스냅샷 테스트는 스냅샷을 생성하고 이를 저장소의 파일에 참조 스냅샷으로 저장합니다. **해당 파일은 코드 리뷰 시 확인되고 커밋됩니다.** 이후에 컴포넌트의 렌더링 결과물을 변경하면 스냅샷이 변경되어 테스트에 실패합니다. 테스트를 통과하려면 저장된 참조 스냅샷을 업데이트해야 합니다. 변경 사항은 그 후 다시 커밋되고 리뷰되어야 합니다. 

스냅샷은 몇 가지 취약점을 가지고 있습니다.

- 개발자나 리뷰어의 경우, 스냅샷의 변경이 의도된 것인지 아니면 버그의 증거인지를 구별하기가 어려울 수 있습니다. 특히 규모가 큰 스냅샷은 빠르게 이해하기 어렵고, 추가된 가치가 낮아질 수 있습니다. 
- 스냅샷 생성 시, 렌더링 결과물이 실제로는 잘못된 경우에도 해당 스냅샷은 올바른 것으로 간주됩니다. 
- 스냅샷이 실패한 경우, 변경 예상 여부를 조사하지 않고 jest 옵션  \`--updateSnapshot\` 을 사용해 이를 업데이트할 수 있ㅅ브니다. 따라서 특정한 개발 규칙이 필요합니다. 

스냅샷 자체는 컴포넌트 렌더링 로직이 올바른지 보장해주지 않습니다. 단지 예기치 않은 변경을 방지하고, 테스트 대상인 React 트리의 컴포넌트가 예상된 props (style 등) 를 받는지 확인할 뿐입니다

작은 스냅샷만 사용하기를 권장합니다 ([no-large-snapshots rule](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md) 참고). 두 개의 React 컴포넌트 state 간의 변경 사항을 테스트하고 싶다면, [snapshot-diff](https://github.com/jest-community/snapshot-diff) 를 사용하십시오. 이러한 툴에 의구심이 든다면 이전 단락에서 설명한 명시적 기대를 사용하는 것도 좋습니다. 

![ ](https://reactnative.dev/docs/assets/p_tests-snapshot.svg)

## 엔드 투 엔드 테스트 (End-to-End Tests)

엔드 투 엔드 (E2E) 테스트에서는 사용자 관점에서, 앱이 디바이스에서 (또는 시뮬레이터 / 에뮬레이터에서) 예상대로 작동하는지 확인합니다. 

이는 릴리즈 설정에서 앱을 구축하고 그에 대한 테스트를 실행함으로써 수행됩니다. E2E 테스트에서는 React 컴포넌트, React Native API, Redux stores, 또는 어떠한 비즈니스 로직에 대해서도 더 이상 고려하지 않습니다. 이는 E2E 테스트의 목적이 아니며, E2E 테스트 중에 접근도 불가능합니다. 

대신에 E2E 테스트 라이브러리는 앱의 화면에 있는 엘리먼트를 찾고 제어할 수 있게 해줍니다. 예를 들어, 실제 사용자와 같은 방식으로 *실제로* 버튼을 누르거나 \`TextInput\` 에 텍스트를 삽입합니다. 그런 다음 앱의 화면에 특정한 엘리먼트가 존재하는지 여부, 표시되는지 여부, 어떤 텍스트가 포함되어 있는지 등에 대해 확인할 수 있습니다. 

E2E 테스트는 앱의 작동에 대해 가장 높은 신뢰도를 주는 테스트입니다. 그러나 다음과 같은 단점도 있습니다. 

- 다른 유형의 테스트에 비해 작성 시간이 더 많이 소요됩니다. 
- 실행 속도가 느립니다. 
- 다른 테스트에 비해 flaky한 경향이 있습니다. ("flaky" 테스트는 코드를 변경하지 않고 무작위로 통과하거나 실패하는 테스트입니다. )

E2E 테스트로 인증 흐름, 핵심 기능, 결제 등 앱의 중요한 부분을 다루십시오. 앱의 중요하지 않은 부분에 대해서는 더 빠른 JS 테스트를 사용합니다. 더 많은 테스트를 추가할수록 신뢰도는 높아지지만, 동시에 유지 및 실행에 더 많은 시간이 소요됩니다. 장단점을 고려하여 최선의 선택을 하십시오. 

사용 가능한 E2E 테스트 도구가 몇 가지 있습니다. React Native 커뮤니티에서, [Detox](https://github.com/wix/detox/)는 React Native 앱에 적합하기 때문에 널리 사용되는 프레임워크입니다. iOS 및 Android 앱 영역에서 또 다른 인기 있는 라이브러리는 [Appium](http://appium.io/)입니다. 

![ ](https://reactnative.dev/docs/assets/p_tests-e2e.svg)

## 요약

이 가이드를 즐겁게 읽었길 바라며, 배운 점이 있길 바랍니다. 앱을 테스트할 수 있는 방법은 여러 가지가 있습니다. 처음에는 무엇을 사용할지 결정하기 어려울 수 있지만, 일단 React Native 앱에 테스트를 추가하기 시작하면 문서의 내용을 더 잘 이해하게 될 것입니다. 지금 바로 시작하세요!

### 링크

- [React 테스트 개요](https://reactjs.org/docs/testing.html)
- [React Native 테스트 라이브러리](https://callstack.github.io/react-native-testing-library/)
- [Jest 문서](https://jestjs.io/docs/en/tutorial-react-native)
- [Detox](https://github.com/wix/detox/)
- [Appium](
`

export const text6 = `
# 라이브러리 사용하기

React Native는 앱에서 사용할 수 있는 빌트인 [코어 컴포넌트와 API들]((https://reactnative.dev/docs/components-and-apis))을 제공합니다. React Native와 함께 번들로 제공되는 컴포넌트와 API만 사용할 수 있는 것은 아닙니다. React Native 커뮤니티에는 수 천명의 개발자들이 있습니다. 만약 코어 컴포넌트나 API에 원하는 기능이 없는 경우, 커뮤니티에서 라이브러리를 찾아 설치하여 앱에 기능을 추가할 수 있습니다. 

## 패키지 매니저 선택하기

React Native 라이브러리는 일반적으로 [npm CLI](https://docs.npmjs.com/cli/npm) 또는 [Yarn 클래식](https://classic.yarnpkg.com/en/)과 같은 Node.js 패키지 매니저를 사용하는 [npm 레지스트리](https://www.npmjs.com/)를 통해 설치됩니다. 

컴퓨터에 Node.js가 설치되어 있다면 npm CLI도 이미 설치되어 있습니다. 일부 개발자는 설치 시간을 약간 단축하고, Workspaces와 같은 고급 기능을 추가로 사용하기 위해 Yarn 클래식 사용을 선호하기도 합니다. 두 가지 툴 모두 React Native에서 잘 작동합니다. 단순하게 설명하기 위해서 이 가이드에서는 npm을 사용하는 것으로 가정하겠습니다. 

> 💡 JavaScript 커뮤니티에서는 "라이브러리"와 "패키지"라는 용어를 따로 구별하지 않고 같은 뜻으로 사용합니다. 

## 라이브러리 설치하기

프로젝트에 라이브러리를 설치하려면, 터미널에서 프로젝트 디렉토리로 들어가서 설치 명령어를 실행합니다. \`react-native-webview\` 로 시작해봅시다. 

- npm

  \`\`\`shell
  npm install react-native-webview
  \`\`\`

- Yarn

  \`\`\`shell
  yarn add react-native-webview
  \`\`\`

설치된 라이브러리는 네이티브 코드를 포함하며, 사용하기 전에 앱에 먼저 연결해야 합니다. 

## iOS에서 네이티브 코드 연결(Linking)하기

React Native는 CocoaPods를 사용해 iOS 프로젝트 종속성을 관리하고, 대부분의 React Native 라이브러리는 동일한 규칙을 따릅니다. 만약 사용 중인 라이브러리가 CocoaPods을 사용하지 않는 경우, 해당 라이브러리의 README를 추가로 참고하세요. 대부분의 경우, 다음 지침을 따르면 됩니다. 

\`ios\` 디렉토리에서 \`pod install\` 을 실행해 네이티브 iOS 프로젝트에 라이브러리를 연결합니다. ios 디렉토리로 이동하지 않고 이 작업을 수행하려면 \`npx pod-install\` 을 실행합니다. 

\`\`\`shell
npx pod-install
\`\`\`

완료되면, 새로운 라이브러리 사용을 위해 앱 바이너리를 다시 빌드하십시오. 

\`\`\`shell
npx react-native run-ios
\`\`\`

## Android에서 네이티브 코드 연결(Linking)하기

React Native는 Android 프로젝트 종속성 관리에 Gradle을 사용합니다. 네이티브 종속성을 가진 라이브러리를 설치한 후에는, 새로운 라이브러리 사용을 위해 앱 바이너리를 다시 빌드해야 합니다. 

\`\`\`shell
npx react-native run-android
\`\`\`

## 라이브러리 찾기

[React Native 디렉토리](https://reactnative.directory/)는 React Native용으로 제작된, 검색이 가능한 라이브러리 데이터베이스입니다. React Native 앱에 사용할 라이브러리는 이 곳에서 가장 먼저 찾아볼 수 있습니다. 

디렉토리에서 찾게 될 라이브러리 중 대다수는 React Native 커뮤니티 또는 Expo에서 가져온 것입니다. 

React Native 커뮤니티에서 제작된 라이브러리는 React Native를 사용하는 회사의 자원봉사자와 개인에 의해 구동됩니다. iOS, tvOS, Android, Windows를 지원하는 경우가 많지만, 지원 범위는 프로젝트마다 다릅니다. 많은 라이브러리가 React Native 코어 컴포넌트와 API를 기반으로 만들어졌습니다. 

Expo에서 제작된 라이브러리는 모두 TypeScript로 작성되었으며, iOS, Android, react-native-web을 지원합니다. React Native 앱에서 사용하려면 일반적으로 [react-native-unimodules](https://github.com/expo/expo/tree/master/packages/react-native-unimodules)을 먼저 설치해야 합니다. 

디렉토리에서 React Native에 적합한 라이브러리를 찾을 수 없는 경우에는, React Native 디렉토리 다음으로 [npm 레지스트리](https://www.npmjs.com/)를 확인해보는 것이 좋습니다. npm 레지스트리는 JavaScript 라이브러리의 최종적인 소스이지만, 이 곳의 라이브러리들은 React Native와 모두 호환되지는 않을 수도 있습니다. React Native는 Node.js, 웹 브라우저, Electron 등 많은 JavaScript 프로그래밍 환경 중 하나이며, npm에는 이러한 모든 환경에서 작동하는 라이브러리들을 포함되어 있기 때문입니다. 

## 라이브러리 호환성 확인하기

### React Native에서 작동하는가?

일반적으로 *다른 플랫폼 전용*으로 구축된 라이브러리는 React Native에서 작동하지 않습니다. 웹 전용으로 구축되었으며 \`react-dom\` 을 타겟으로 하는 \`react-select\`, Node.js를 위해 구축되었으며 컴퓨터 파일 시스템과 상호 작용하는 \`rimraf\` 등이 그 예입니다. \`lodash\` 와 같은 다른 라이브러리들은 JavaScript 언어의 기능만을 사용해 어떤 환경에서도 작동합니다. 시간이 지남에 따라 이 부분에 대해 감을 잡게 되겠지만, 그 전까지 가장 쉬운 방식은 직접 시도해보는 것입니다. 해당 라이브러리가 React Native와 호환되지 않는 경우 \`npm uninstall\` 을 사용해 패키지를 제거할 수 있습니다. 

### 앱이 지원하는 플랫폼에서 작동하는가?

[React Native 디렉토리](https://reactnative.directory/)에서는 iOS, Android, 웹, Windows와 같은 플랫폼 호환성에 따라 필터링을 할 수 있습니다. 사용하려는 라이브러리가 현재 목록에 없는 경우, 자세한 내용은 해당 라이브러리의 README를 참조하십시오. 

### 앱의 React Native 버전과 호환되는가?

라이브러리의 최신 버전은 일반적으로 React Native의 최신 버전과 호환됩니다. 이전 버전을 사용하는 경우, README를 참고해 어떤 버전의 라이브러리를 설치해야하는지 확인해야 합니다. \`npm install <library-name>@<version-number>\` 를 실행해 라이브러리의 특정 버전을 설치할 수 있습니다. 예: \`npm install @react-native-community/netinfo@^2.0.0\`. 
`

export const text7 = `
# TypeScript 사용하기

[TypeScript](https://www.typescriptlang.org/)는 [Flow](https://flow.org/)와 비슷하게, JavaScript에 타입 정의를 추가한 JavaScript 확장판 언어입니다. React Native는 Flow에 내장되어 있지만, 기본적으로 TypeScript와 Flow 둘 다 지원합니다. 

## TypeScript 시작하기

몇 가지 다른 방법으로 새 프로젝트를 시작할 수 있습니다. 

[TypeScript 템플릿](https://github.com/react-native-community/react-native-template-typescript)을 사용할 수 있습니다. 

\`\`\`shell
npx react-native init MyApp --template react-native-template-typescript
\`\`\`

> **참고:** 위의 명령이 실패할 경우, \`react-native\` 나 \`react-native-cli\` 의 이전 버전이 시스템에 전역으로 설치되어 있을 수 있습니다. 문제를 해결하려면 CLI를 제거해 보십시오. 
>
> - \`npm uninstall -g react-native-cli\` 또는 \`yarn global remove react-native-cli\`
>
> 그리고 나서 \`npx\` 명령을 다시 실행해보세요. 

두 개의 TypeScript 템플릿이 있는 [Expo](https://expo.io/)를 사용할 수 있습니다. 

- npm

  \`\`\`shell
  npm install -g expo-cli
  expo init MyTSProject
  \`\`\`

- Yarn

  \`\`\`shell
  yarn global add expo-cli
  expo init MyTSProject
  \`\`\`

또는 마찬가지로 TypeScript 템플릿이 있는 [Ignite](https://github.com/infinitered/ignite)를 사용할 수도 있습니다. 

- npm

  \`\`\`shell
  npm install -g ignite-cli
  ignite new MyTSProject
  \`\`\`

- Yarn

  \`\`\`shell
  yarn global add ignite-cli
  ignite new MyTSProject
  \`\`\`

## 기존 프로젝트에 TypeScript 추가하기

1. TypeScript와 React Native의 types, Jest를 프로젝트에 추가하세요. 

- npm

  \`\`\`shell
  npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
  \`\`\`

- Yarn

  \`\`\`shell
  yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
  \`\`\`

2. TypeScript 설정 파일을 추가하세요. 프로젝트 루트에 \`tsconfig.json\` 를 생성합니다. 

\`\`\`json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
\`\`\`

3. TypeScript를 사용하기 위해 \`jest.config.js\` 파일을 생성합니다. 

\`\`\`json
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
\`\`\`

4. JavaScript 파일(\`*.js\`)들의 확장자를 \`*.tsx\` 로 변경합니다. 

> 진입점(entrypoint) 파일 \`./index.js\` 는 그대로 두어야 합니다. 그렇지 않으면 프로덕션 빌드를 번들링할 때 문제가 발생할 수 있습니다. 

5. \`yarn tsc\` 를 실행해 새로운 TypeScript 파일들의 타입 체크를 합니다. 

## TypeScript와 React Native의 작동 방식

파일을 JavaScript로 즉시 변환하는 작업은 TypeScript가 아닌 React Native 프로젝트와 동일한 Babel 인프라를 통해 작동합니다. TypeScript 컴파일러는 타입 체킹에만 사용하는 것을 권장합니다. 기존 TypeScript 코드를 React Native로 포팅한 경우, TypeScript 대신 Babel을 사용할 때 [한 두가지 주의사항](https://babeljs.io/docs/en/next/babel-plugin-transform-typescript)이 있습니다. 

## React Native + TypeScript 예시

JSX로 컴포넌트를 작성할 때 에디터 자동완성 기능과 타입체크 기능을 제공하는 \`React.Component<Props, State>\` 를 통해, React 컴포넌트의 [Props](https://reactnative.dev/docs/props)와 [State](https://reactnative.dev/docs/state)에 대한 인터페이스를 제공할 수 있습니다. 

**components/Hello.tsx**

\`\`\`jsx
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel
  );

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Hello;
\`\`\`

[TypeScript playground](https://www.typescriptlang.org/play?strictNullChecks=false&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteILBI4ABRxgAznAC8DKnBwpiBIAFxwnjBQwBwA5hSUgQBGKJ5IAKIcMGLMnsCpIAAySFZCAPzhHMwgSUhQCZq2lGickXAAEkhCQhDhyIYAdABiAMIAPO4QXgB8vnAAFPRBKCE8KWmZ2bn5nkUlXXMADHCaAJS+s-QBcC0cbQDaSFk5eQXFpTxpMJsvO3ulAF05v0MANcqIYGYkPN1hlnts3vshKcEtdbm1OABJDhoIghLJzebnHyzL4-BG7d5deZPLavSlIuAAajgAEYUWjWvBOAARJC4pD4+B+IkXCJScn0-7U2m-RGlOCzY5lOCyinSoRwIxsuDhQ4cyicu7wWIS+RoIQrMzATgAWRQUAA1t4RVUQCMxA7PJVqrUoMTZm6PV7FXBlXAAIJQKAoATzIOeqDeFnsgYAKwgMXm+AAhPhzuF8DZDYk4EQYMwoBwFtdAmNVBoIoIRD56JFhEhPANbpCYnVNNNa4E4GM5Iomx3W+2RF3YkQpDFYgOh8OOl0evR8ARGqXV4F6MEkDu98P6KbvubLSBrXaHc6afCpVTkce92MAPRjmCD3fD+tqdQfxPOsWDYTgVz3cwYBbAAibEBVSFw1SlGCINXdA0E7PIkmAIRgEEQoUFqIQfBgmIBSFVDfxPTh3Cw1ssRxPFaVfYCbggHooFIpIhGYJAqLY98gOAsZQPYDg0OHKDYL5BC0lVR8-gEti4AwrDgBwvCCKIrpSIAE35ZismUtjaKITxPAYjhZKMmBWOAlpONIog9JMvchIgj8G0AocvIA4SDU0VFmi5CcZzmfgO3ESQYG7AwYGhK5Sx7FA+ygcIktXTARHkcJWS4IcUDw2IOExBKQG9OAYMwrI6hggrfzTXJzEwAQRk4BKsnCaraTq65NAawI5xixcMqHTAOt4YAAC8wjgAAmQ5BuHCasgAdSQYBYjEGBCySDi9PwZbAmvKBYhiPKADZloGqgzmC+xoHgAzMBQZghHgTpuggBIgA)에서 더 자세한 문법을 확인할 수 있습니다. 

## 유용한 정보를 찾을 수 있는 곳

- [TypeScript 핸드북](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React의 TypeScript 관련 문서](https://reactjs.org/docs/static-type-checking.html#typescript)
- [React + TypeScript 치트시트](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)는 TypeScript를 React와 함께 사용하는 방법에 대한 좋은 개요를 제공합니다. 

## TypeScript와 함께 사용자 정의 경로 Alias 사용하기

TypeScript와 함께 사용자 정의 경로 alias를 사용하려면, Babel 및 TypeScript에서 모두 작동할 경로 alias를 설정해야 합니다. 방법은 다음과 같습니다. 

1. \`tsconfig.json\` 을 수정해 [사용자 정의 경로 매핑](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)을 사용합니다. \`src\` 루트의 모든 항목을 이전 경로의 참조 없이 사용할 수 있도록 설정하고, \`tests/File.tsx\` 를 사용해 모든 테스트 파일에 접근할 수 있도록 합니다. 

   \`\`\`json
       "target": "esnext",
   +     "baseUrl": ".",
   +     "paths": {
   +       "*": ["src/*"],
   +       "tests": ["tests/*"],
   +       "@components/*": ["src/components/*"],
   +     },
       }
   \`\`\`

2. 프로젝트 개발 패키지로 [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)를 추가합니다. 

- npm

  \`\`\`shell
  npm install --save-dev babel-plugin-module-resolver
  \`\`\`

- Yarn

  \`\`\`shell
  yarn add --dev babel-plugin-module-resolver
  \`\`\`

3. 마지막으로, \`babel.config.js\` 를 설정하세요 (\`babel.config.js\` 의 문법은 \`tsconfig.json\` 과 다릅니다). 

\`\`\`json
{
  plugins: [
+    [
+       'module-resolver',
+       {
+         root: ['./src'],
+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
+         alias: {
+           tests: ['./tests/'],
+           "@components": "./src/components",
+         }
+       }
+    ]
  ]
}
\`\`\`


`

export const text8 = `
# 새로운 버전으로 업그레이드하기

React Native의 새 버전으로 업그레이드하면 더 많은 API, 뷰, 개발자 도구 및 기타 유용한 정보에 액세스할 수 있습니다. 업그레이드에는 약간의 노력이 필요하지만, 우리는 업그레이드가 쉽게 이루어지도록 노력합니다. 

## Expo 프로젝트

Expo 프로젝트를 새로운 버전의 React Native로 업그레이드하려면,\`package.json\` 에서  \`react-native\`, \`react\`, \`expo\` 패키지 버전을 업데이트해야 합니다. 지원되는 버전을 확인하려면 [이 목록](https://docs.expo.io/versions/latest/sdk/#sdk-version)을 참조하세요. 또한 \`app.json\` 파일에서 올바른 \`sdkVersion\` 을 설정해야 합니다. 

프로젝트 업그레이드에 대한 최신 정보는 [Expo SDK Walkthrough 업그레이드](https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough)를 참조하십시오.

## React Native 프로젝트

일반적인 React Native 프로젝트는 기본적으로 Android 프로젝트, iOS 프로젝트, JavaScript 프로젝트로 구성되어 있기 때문에 업그레이드가 다소 까다로울 수 있습니다. 현재 React Native 프로젝트를 업그레이드하는 방법은, [React Native CLI](https://github.com/react-native-community/cli)를 사용하거나 [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)를 사용해 수동으로 업그레이드하는, 두 가지 방법이 있습니다. 

### React Native CLI

[React Native CLI](https://github.com/react-native-community/cli)는 최소한의 충돌로 소스 파일을 한 번에 업그레이드하는 \`upgrade\` 명령을 가지고 있으며, 내부적으로 [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge)를 사용해 어떤 파일이 생성되어야 하는지, 제거 또는 수정되어야 하는지 찾아냅니다. 

#### 1. \`upgrade\` 명령 실행하기

> \`upgrade\` 명령은 3-way merge와 함께 \`git apply\` 를 사용해 Git 위에서 작동하므로, Git을 사용해야 합니다. Git을 사용하지 않고 이 솔루션을 적용하려면, 하단의 문제 해결 섹션에서 방법을 확인할 수 있습니다. 

다음 명령을 실행하여 최신 버전으로 업그레이드하는 프로세스를 시작합니다.

\`\`\`shell
npx react-native upgrade
\`\`\`

인자를 전달해 React Native 버전을 지정할 수 있습니다. (예: \`0.61.0-rc.0\` 버전으로 업그레이드하려면 다음과 같이 실행하세요). 

\`\`\`shell
npx react-native upgrade 0.61.0-rc.0
\`\`\`

프로젝트는 3-way merge와 함께  \`git apply\` 를 사용해 업그레이드되는데, 업그레이드 완료 후 몇 가지 충돌을 해결해야 할 수도 있습니다. 

#### 2. 충돌 해결하기

충돌된 파일에는 변경 사항이 발생한 위치를 명확히 표시해주는 구분 기호가 있습니다. 예를 들어 다음과 같습니다. 

\`\`\`json
13B07F951A680F5B00A75B9A /* Release */ = {
  isa = XCBuildConfiguration;
  buildSettings = {
    ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
<<<<<<< ours
    CODE_SIGN_IDENTITY = "iPhone Developer";
    FRAMEWORK_SEARCH_PATHS = (
      "$(inherited)",
      "$(PROJECT_DIR)/HockeySDK.embeddedframework",
      "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",
    );
=======
    CURRENT_PROJECT_VERSION = 1;
>>>>>>> theirs
    HEADER_SEARCH_PATHS = (
      "$(inherited)",
      /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,
      "$(SRCROOT)/../node_modules/react-native/React/**",
      "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",
    );
\`\`\`

"ours"는 "your team"으로, "theirs"는 "the React Native development team"으로 생각할 수 있습니다. 

### 업그레이드 도우미 (Upgrade Helper)

[Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)는 두 버전 간에 발생하는 모든 변경 사항을 제공해, 앱을 업그레이드할 때 도움이 되는 웹 도구입니다. 이는 또한 변경이 필요한 이유를 이해하는 데에 도움이 되는, 특정 파일에 대한 설명도 제공합니다. 

#### 1. 버전 선택하기

먼저 업그레이드할 버전을 선택해야 하며, 기본적으로 최신 주요 버전이 선택됩니다. 선택 후에는 "업그레이드 방법 보기" 버튼을 누를 수 있습니다. 

💡 주요 업데이트의 경우, 업그레이드 시 도움이 되는 링크가 포함된 "유용한 콘텐츠" 섹션이 상단에 나타납니다. 

#### 2. 종속성 업그레이드하기

가장 먼저 나타나는 파일은 \`package.json\` 입니다. 이 파일에 있는 종속성을 업데이트하는 것이 좋습니다. 예를 들어, \`react-native\` 와 \`react\` 가 변경된 것으로 나타나면 \`yarn add\` 를 실행해 프로젝트에 설치할 수 있습니다. 

\`\`\`shell
# {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff
yarn add react-native@{{VERSION}}
yarn add react@{{REACT_VERSION}}
\`\`\`

#### 3. 프로젝트 파일 업그레이드하기

The new release may contain updates to other files that are generated when you run \`npx react-native init\`, those files are listed after the \`package.json\` in the Upgrade Helper page. If there aren't other changes then you only need to rebuild the project to continue developing.

In case there are changes then you can either update them manually by copying and pasting from the changes in the page or you can do it with the React Native CLI upgrade command by running:

새 릴리즈에는 \`npx react-native init\` 을 실행해 생성할 수 있는 다른 파일들에 대한 업데이트가 포함될 수 있으며, 이러한 파일들은 Upgrade Helper 페이지에서 \`package.json\` 다음에 나열됩니다. 다른 변경 사항이 없는 경우, 개발을 계속하려면 프로젝트를 다시 빌드하기만 하면 됩니다.

변경 사항이 있는 경우 페이지의 변경 사항을 복사 붙여넣기하여 수동으로 업데이트하거나, React Native CLI의 업그레이드 명령을 사용해 업데이트할 수 있습니다. 

\`\`\`shell
npx react-native upgrade
\`\`\`

이렇게 하면 최신 템플릿과 비교하여 파일을 확인하고, 다음을 수행합니다.

- 템플릿에 새로운 파일이 있으면 생성됩니다. 
- 템플릿의 파일이 프로젝트의 파일과 동일하면 건너뜁니다.
- 프로젝트에서 파일이 템플릿과 다를 경우, 해당 파일을 유지하거나 템플릿 버전으로 덮어쓰는 옵션이 나타납니다. 

> 일부 업그레이드는 React Native CLI에서 자동으로 수행되지 않으며, 수동 작업이 필요합니다. (예: \`0.28\` ~ \`0.29\`, 또는 \`0.56\` ~ \`0.57\`). 업그레이드 시  [release notes](https://github.com/facebook/react-native/releases)를 확인하여 특정 프로젝트에 필요한 수동 변경 사항을 확인할 수 있습니다. 

### 문제 해결

#### React Native CLI를 사용하여 업그레이드하려고 하지만 Git을 사용하지 않습니다

프로젝트가 Git 버전 관리 시스템에서 다루어져야 할 필요는 없지만, (Mercurial, SVN, 또는 아무것도 사용하지 않을 수도 있음), 그럼에도 \`npx react-native upgrade\` 를 사용하려면 시스템에 [Git을 설치](https://git-scm.com/downloads)해야 합니다. Git은 또한 \`PATH\` 에서 사용할 수 있어야 합니다. 프로젝트에서 Git을 사용하지 않는 경우, 이를 초기화하고 다음을 커밋하십시오. 

\`\`\`shell
git init # Initialize a Git repository
git add . # Stage all the current files
git commit -m "Upgrade react-native" # Save the current files in a commit
\`\`\`

업그레이드를 완료한 후 \`.git\` 디렉토리를 제거할 수 있습니다.

#### 모든 변경 사항을 수행했지만 앱이 여전히 이전 버전을 사용하고 있습니다

이러한 오류는 일반적으로 캐싱과 관련이 있으므로,  [react-native-clean-project](https://github.com/pmadruga/react-native-clean-project) 를 설치해 프로젝트의 모든 캐시를 지운 다음 다시 실행하는 것을 권장합니다. 
`