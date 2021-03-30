# React-Native-docs
React-Native-docs 요약 &amp; 번역 &amp; 예제구현

# 참가자

    minsekim mina seomoon jiwonlee

<!-- #### [블로그문서](https://mins97.github.io/rndoc2/) -->

<!-- #### [블로그문서파일](https://github.com/Mins97/rndoc2/blob/gh-pages/index.md) -->

#### [프로젝트소스코드](https://github.com/Mins97/rndoc2)

#### [번역 원문](https://velog.io/@leejiwonn/RN-React-Native-Docs-1-The-Basics)

# 목적

    공식문서의 정리와 API components 실제 구동 확인용

# 핵심 폴더 구조

```
component => 커스텀파일
page => Navigation에 들어갈 파일(보기 예시용)
page/docs => 공식문서 예제

.
├── API
│   ├── APIs
│   │   ├── AccessibilityInfo.js
│   │   ├── Alert.js
│   │   ├── Animated.Value.js
│   │   ├── Animated.ValueXY.js
│   │   ├── Animated.js
│   │   ├── AppRegistry.js
│   │   ├── AppState.js
│   │   ├── Appearance.js
│   │   ├── DevSettings.js
│   │   ├── Dimensions.js
│   │   ├── Easing.js
│   │   ├── InteractionManager.js
│   │   ├── Keyboard.js
│   │   ├── LayoutAnimation.js
│   │   ├── Linking.js
│   │   ├── PanResponder.js
│   │   ├── PixelRatio.js
│   │   ├── Platform.js
│   │   ├── PlatformColor.js
│   │   ├── Share.js
│   │   ├── StyleSheet.js
│   │   ├── Systrace.js
│   │   ├── Transforms.js
│   │   └── Vibration.js
│   ├── AndroidAPIs
│   │   ├── BackHandler.js
│   │   ├── PermissionsAndroid.js
│   │   └── ToastAndroid.js
│   ├── Hooks
│   │   ├── useColorScheme.js
│   │   └── useWindowDimensions.js
│   └── iOSAPIs
│       ├── ActionSheetIOS.js
│       ├── DynamicColorIOS.js
│       └── Settings.js
├── Components
│   ├── CoreComponents
│   │   ├── ActivityIndicator.js
│   │   ├── Button.js
│   │   ├── CoreComponentsAndAPIs.js
│   │   ├── FlatList.js
│   │   ├── Image.js
│   │   ├── ImageBackground.js
│   │   ├── KeyboardAvoidingView.js
│   │   ├── Modal.js
│   │   ├── Pressable.js
│   │   ├── RefreshControl.js
│   │   ├── ScrollView.js
│   │   ├── SectionList.js
│   │   ├── StatusBar.js
│   │   ├── Switch.js
│   │   ├── Text.js
│   │   ├── TextInput.js
│   │   ├── TouchableHighlight.js
│   │   ├── TouchableOpacity.js
│   │   ├── TouchableWithoutFeedback.js
│   │   ├── View.js
│   │   └── VirtualizedList.js
│   ├── ObjectTypes
│   │   ├── LayoutEventObjectType.js
│   │   ├── PressEventObjectType.js
│   │   ├── ReactNodeObjectType.js
│   │   ├── RectObjectType.js
│   │   └── ViewTokenObjectType.js
│   └── Props
│       ├── ImageStyleProps.js
│       ├── LayoutProps.js
│       ├── ShadowProps.js
│       ├── TextStyleProps.js
│       └── ViewStyleProps.js
├── Home.js
├── ReactNativeDocs
│   └── screen
│       ├── Connectivity.js
│       ├── Design.js
│       ├── EnvironmentSetup.js
│       ├── GuidesAndroid.js
│       ├── GuidesiOS.js
│       ├── Inclustion.js
│       ├── Interacton.js
│       ├── JavaScriptRuntime.js
│       ├── NativeComponents.js
│       ├── NativeModules.js
│       ├── Performance.js
│       ├── TheBasics.js
│       └── Workflow.js
├── Styles.js
└── example
    ├── ActivityIndicatorFunctionComponentExample.js
    ├── AnimationExample.js
    ├── ButtonBasics.js
    ├── ButtonExample.js
    ├── Cleartext.js
    ├── CurlyBraces.js
    ├── CurlyBraces2.js
    ├── FetchExample.js
    ├── FlatList1.js
    ├── FlatList2.js
    ├── FlatListBasics.js
    ├── FlexDimensions.js
    ├── ForwardingsetNativeProps.js
    ├── FunctionComponentExample.js
    ├── FunctionComponentExample2.js
    ├── HandlingTextInput.js
    ├── HeightandWidth.js
    ├── HelloWorld.js
    ├── ImageBackground.js
    ├── KeyboardAvoidingView.js
    ├── MultipleComponents.js
    ├── MultipleProps.js
    ├── Props.js
    ├── State.js
    ├── StyleExam.js
    ├── UsingScrollView.js
    ├── YourCat.js
    ├── default.js
    ├── flatlist-selectable.js
    ├── flatlist-simple.js
    ├── measureLayoutexample.js
    └── setNativePropswithCompositeComponents.js

```

# 결과(미리보기)

<img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248.jpg?raw=true" width="300" height="700"/><img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248_01.jpg?raw=true" width="300" height="700"/><img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248_02.jpg?raw=true" width="300" height="700"/><img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248_03.jpg?raw=true" width="300" height="700"/><img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248_04.jpg?raw=true" width="300" height="700"/><img src="https://github.com/Mins97/rndoc2/blob/main/readmeImg/KakaoTalk_20210224_062030248_05.jpg?raw=true" width="300" height="700"/>
