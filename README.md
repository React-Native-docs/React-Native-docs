# React-Native-docs
React-Native-docs 요약 &amp; 번역 &amp; 예제구현

# 결과(미리보기) 구글 플레이 스토어

https://play.google.com/store/apps/details?id=com.hyuna.rnproject

# 결과(미리보기) iOS 앱 스토어

https://fnd.io/#/kr/ios-universal-app/1570059041-rndoc-by-minsung-kim

![2048x2732bb](https://user-images.githubusercontent.com/23623248/122731082-e5212400-d2b5-11eb-82cf-b7e4e240220b.png)
![1242x2688bb (1)](https://user-images.githubusercontent.com/23623248/122731150-f4a06d00-d2b5-11eb-98b2-f23a0cfec6cd.png)
![1242x2688bb](https://user-images.githubusercontent.com/23623248/122731041-daff2580-d2b5-11eb-970a-b76d7550c73f.png)
![1242x2688bb (4)](https://user-images.githubusercontent.com/23623248/122731061-e05c7000-d2b5-11eb-872c-f59bbe09afa5.png)
![1242x2688bb (3)](https://user-images.githubusercontent.com/23623248/122731065-e18d9d00-d2b5-11eb-8997-3cdfe5788fba.png)
![1242x2688bb (2)](https://user-images.githubusercontent.com/23623248/122731069-e2beca00-d2b5-11eb-9f23-0167ad067f63.png)


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
    ├── MeasureLayoutexample.js
    └── SetNativePropswithCompositeComponents.js

```
