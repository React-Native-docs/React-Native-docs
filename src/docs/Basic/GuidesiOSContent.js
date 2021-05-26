export const text1_1 = `
# 라이브러리 연결하기

모든 앱이 네이티브 기능을 사용하는 것은 아니며, 이러한 모든 기능을 지원하는 코드를 포함하는 것은 바이너리 크기에 영향을 미칠 수 있습니다. 그러나 우리는 필요할 때마다 이러한 기능들을 추가할 수 있도록 지원합니다. 

우리는 이를 염두에 두고, 이러한 기능들 중 많은 부분을 독립적인 정적 라이브러리로 노출시켰습니다. 

대부분의 라이브러리의 경우, 파일 두 개를 드래그앤드롭하는 것만큼 빠르게 연결되며, 때로는 세 번째 단계가 필요할 수도 있지만 그 이상은 아닙니다. 

React Native와 함께 제공되는 모든 라이브러리들은 저장소 루트의 \`Libraries\` 폴더에 있습니다. 그 중 일부는 순수한 JavaScript로 이루어져 있어서 \`require\` 하기만 하면 됩니다. 다른 일부 라이브러리들은 일부 네이티브 코드를 사용합니다. 이 경우 이러한 파일들을 앱에 추가해야하고, 그렇게 하지 않으면 라이브러리를 사용하려고 할 때 앱에서 바로 오류가 발생합니다. 

## 네이티브 코드가 포함된 라이브러리 연결하는 방법

### 자동 연결 (Automatic linking)

#### 1단계

네이티브 종속성을 가진 라이브러리를 설치합니다. 

\`\`\`shell
npm install <library-with-native-dependencies> --save
\`\`\`

> ***참고:*** \`--save\` 또는 \`--save-dev\` 플래그는 이 단계에서 매우 중요합니다. React Native는 \`package.json\`의  \`dependencies\`와 \`devDependencies\`를 기반으로 라이브러리를 연결합니다. 

#### 2단계

네이티브 종속성을 연결합니다. 

\`\`\`shell
npx react-native link
\`\`\`

끝입니다! 네이티브 종속성을 가진 모든 라이브러리가 성공적으로 iOS/Android 프로젝트의 연결되어야 합니다. 

> ***참고:*** iOS 프로젝트가 CocoaPods(\`Podfile\` 포함)을 사용하고 있고, 연결된 라이브러리에 \`podspec\` 파일이 있다면,  \`npx react-native link\` 는 Podfile을 이용해 라이브러리를 연결합니다. non-trivial Podfiles을 지원하려면, pods이 추가될 자리에  \`# Add new pods below this line\` 주석을 추가하십시오. 

### 수동 연결 (Manual linking)

#### 1단계

라이브러리에 네이티브 코드가 포함되어 있다면, 해당 라이브러리의 폴더 안에 \`.xcodeproj\` 파일이 반드시 있어야 합니다. Xcode에서 이 파일을 프로젝트로 드래그하십시오. (일반적으로 Xcode의 \`Libraries\` 그룹 하위에 있습니다). 

![img](https://reactnative.dev/assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png)

#### 2단계

메인 프로젝트 파일(\`.xcodeproj\` 확장자를 가진 파일)을 클릭해 \`Build Phases\` 를 선택하고, 가져올 정적 라이브러리를 라이브러리의 \`Products\` 폴더에서 \`Link Binary With Libraries\` 로 드래그합니다. 

![img](https://reactnative.dev/assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png)

#### 3단계

모든 라이브러리에서 이 단계가 필요한 것은 아닙니다. 이 단계가 필요한지 파악하기 위해 고려해야 할 사항은 다음과 같습니다. 

*컴파일할 때 라이브러리의 내용을 알아야 하는지?*

즉, 이 라이브러리를 네이티브 측에서 사용하고 있는지, 아니면 JavaScript에서만 사용하고 있는지 여부입니다. JavaScript에서만 사용한다면, 그냥 지나가시면 됩니다!

네이티브에서 호출해야하는 경우, 라이브러리의 헤더를 알아야 합니다. 라이브러리의 헤더는 프로젝트 파일로 가서 \`Build Settings\` 를 선택하고, \`Header Search Paths\` 를 검색하면 찾을 수 있습니다. 여기에는 라이브러리 경로가 포함되어야 합니다. (이 문서에서는 그동안 \`recursive\` 사용을 권장해왔지만, 특히 CocoaPods의 경우 약한 빌드 실패를 유발할 수 있기 때문에 더 이상 권장하지 않습니다. )

![img](https://reactnative.dev/assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png)


`

export const text2_1 = `
# 시뮬레이터에서 실행하기

## 시뮬레이터 시작하기

React Native 프로젝트 초기화를 완료했다면, 새로 생성된 프로젝트 디렉토리 안에서\`npx react-native run-ios\` 를 실행할 수 있습니다. 모든 것이 올바르게 설정된 경우, 잠시 후 앱이 iOS 시뮬레이터에서 실행됩니다. 

## 디바이스 지정하기

\`--simulator\` 플래그 뒤에 디바이스 이름을 문자열로 입력해 시뮬레이터가 실행할 디바이스를 지정할 수 있습니다. 기본값은 \`"iPhone 11"\` 입니다. iPhone SE에서 앱을 실행하려면, \`npx react-native run-ios --simulator="iPhone SE (1st generation)"\` 을 실행하십시오. 

디바이스 이름은 Xcode의 사용가능한 디바이스 목록에 있는 것과 일치합니다. 콘솔에서 \`xcrun simctl list devices\` 를 실행해 사용가능한 디바이스를 확인할 수 있습니다. 
`

export const text3_1 = `
# 네이티브와 React Native 간의 통신

[기존 앱과의 통합 가이드](https://reactnative.dev/docs/integration-with-existing-apps)와 [네이티브 UI 컴포넌트 가이드](https://reactnative.dev/docs/native-components-ios)에서 네이티브 컴포넌트에 React Native를 임베드하는 방법과 React Native 컴포넌트에 네이티브를 임베드하는 방법에 대해 학습합니다. 네이티브와 React Native 컴포넌트를 혼합해보면, 결국 이 두 세계 간에 통신할 필요성이 있다는 것을 알게 됩니다. 그 방법은 다른 가이드들에서 이미 언급되었습니다. 이 가이드에는 사용가능한 테크닉들이 요약되어 있습니다. 

## 소개

React Native는 React에서 영감을 얻어 만들어졌기 때문에, 정보 흐름의 기본적인 개념은 유사합니다. React에서의 흐름은 단방향입니다. 각 컴포넌트가  상위 컴포넌트나 내부 state에만 의존하는 컴포넌트 계층을 유지합니다. 프로퍼티를 사용해 데이터를 부모에서 자식으로, top-down 방식으로 전달합니다. 상위 컴포넌트가 하위 컴포넌트의 state에 의존하는 경우, 하위 컴포넌트에서 상위 컴포넌트를 업데이트하기 위해 사용될 콜백을 전달해줘야 합니다. 

동일한 개념이 React Native에도 적용됩니다. 순수하게 프레임워크 내에서만 애플리케이션을 구현하는 경우, 프로퍼티와 콜백을 사용해 앱을 구동할 수 있습니다. 그러나, React Native와 네이티브 컴포넌트를 혼합하는 경우에는, 둘 사이에 정보를 전달할 수 있게 해주는 몇몇 특정한 교차 언어(cross-language) 메커니즘이 필요합니다. 

## 프로퍼티

프로퍼티는 컴포넌트 간 통신을 위한 가장 간단한 방법입니다. 따라서 우리는 네이티브에서 React Native로, 그리고 React Native에서 네이티브로 프로퍼티를 전달할 수 있는 방법이 필요합니다. 

### 네이티브에서 React Native로 프로퍼티 전달하기

네이티브 컴포넌트 안에 React Native 뷰를 포함시키려면, \`RCTRootView\` 를 사용해야 합니다. \`RCTRootView\` 는 React Native 앱을 탑재하고 있는 \`UIView\` 입니다. 또한 네이티브 측과 호스팅된 앱 사이의 인터페이스도 제공합니다. 

\`RCTRootView\`에는 임의의 프로퍼티를 React Native 앱으로 전달할 수 있는 이니셜라이저가 있습니다. \`initialProperties\` 파라미터는 \`NSDictionary\`의 인스턴스여야 합니다. 딕셔너리는 내부적으로 최상위 JS 컴포넌트가 참조할 수 있는 JSON 객체로 변환됩니다. 

\`\`\`objc
NSArray *imageList = @[@"http://foo.com/bar1.png",
                       @"http://foo.com/bar2.png"];

NSDictionary *props = @{@"images" : imageList};

RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                 moduleName:@"ImageBrowserApp"
                                          initialProperties:props];
\`\`\`

\`\`\`jsx
import React from 'react';
import { View, Image } from 'react-native';

export default class ImageBrowserApp extends React.Component {
  renderImage(imgURI) {
    return <Image source={{ uri: imgURI }} />;
  }
  render() {
    return <View>{this.props.images.map(this.renderImage)}</View>;
  }
}
\`\`\`

\`RCTRootView\` 는 읽기-쓰기 프로퍼티인 \`appProperties\` 도 제공합니다. \`appProperties\` 가 설정된 후에, React Native 앱은 새로운 프로퍼티로 다시 렌더링됩니다. 새로 업데이트된 프로퍼티가 이전 프로퍼티와 다를 때에만 업데이트가 수행됩니다. 

\`\`\`objc
NSArray *imageList = @[@"http://foo.com/bar3.png",
                       @"http://foo.com/bar4.png"];

rootView.appProperties = @{@"images" : imageList};
\`\`\`

언제든지 프로퍼티를 업데이트할 수 있습니다. 그러나, 업데이트는 메인 스레드에서 수행되어야 합니다. getter는 모든 스레드에서 사용할 수 있습니다. 

> ***참고:*** 현재, 브리지를 시작할 때 appProperties를 설정하면 변경 사항이 손실될 수 있는 문제가 있습니다. 자세한 정보는 https://github.com/facebook/react-native/issues/20115 를 참고하십시오. 

한 번에 몇 개의 프로퍼티만 업데이트할 수 있는 방법은 없습니다. 그 대신에 자신만의 래퍼(wrapper) 내부로 빌드하는 것을 권장합니다. 

> ***참고:*** 현재 싱위 RN 컴포넌트의 JS 함수 \`componentWillUpdateProps\`은 prop 업데이트 후에 호출되지 않습니다. 그러나 \`componentDidMount\` 함수를 통해 새로운 prop에 접근할 수 있습니다. 

### React Native에서 네이티브로 프로퍼티 전달하기

네이티브 컴포넌트의 프로퍼티를 노출하는 문제는 [이 문서]((https://reactnative.dev/docs/native-components-ios#properties))에서 자세히 다루고 있습니다. 요약하면, \`RCT_CUSTOM_VIEW_PROPERTY\` 매크로로 프로퍼티를 내보낸 다음, 해당 컴포넌트가 원래 React Native 컴포넌트였던 것처럼 이를 다루면 됩니다. 

### 프로퍼티의 한계

교차 언어 프로퍼티의 주요 단점은, 상향식 데이터 바인딩을 처리할 수 있도록 해주는 콜백을 지원하지 않는다는 것입니다. JS 동작의 결과로, 네이티브 부모 뷰로부터 작은 RN 뷰를 제거하려 한다고 가정해봅시다. 정보가 상위로 이동해야할 필요가 있기 때문에 prop으로는 이를 수행할 방법이 없습니다. 

물론 교차 언어 콜백([여기에 설명되어 있음](https://reactnative.dev/docs/native-modules-ios#callbacks))이 필요할 때가 있지만, 주된 문제는 그것들이 프로퍼티로 전달되도록 의도되지 않았다는 것입니다. 오히려, 이 메커니즘을 통해 JS에서 네이티브 동작을 유발시키고, JS에서 해당 동작의 결과를 처리할 수 있습니다. 

## 다른 방식의 언어 간 상호작용 (이벤트와 네이티브 모듈)

앞에서 설명한 것처럼, 프로퍼티를 사용하는 데에는 몇 가지 제한이 있습니다. 때때로 프로퍼티는 앱의 로직을 이끌기에 충분하지 않으며, 더 많은 유연성을 제공하는 솔루션이 필요합니다. 이 장에서는 React Native에서 사용할 수 있는 다른 통신 테크닉들을 다룹니다. 내부 통신 (JS와 RN에서의 네이티브 계층 간)은 물론 외부 통신 (RN과 앱의 '순수 네이티브' 부분 간)에서도 사용할 수 있습니다. 

React Native를 사용하면 언어 간 함수 호출을 수행할 수 있습니다. JS에서 사용자 정의 네이티브 코드를 실행할 수 있으며, 그 반대도 가능합니다. 그러나 우리가 어느 쪽에서 작업 중인지에 따라 동일한 목표를 다른 방식으로 달성하게 됩니다. 네이티브 측에서는 이벤트 메커니즘을 사용하여 JS에서 핸들러 함수의 실행을 스케쥴링하는 반면에, React Native 측에서는 네이티브 모듈이 내보내는 메서드를 직접 호출합니다. 

### 네이티브에서 React Native 함수 호출하기 (이벤트)

이벤트는 [이 문서](https://reactnative.dev/docs/native-components-ios#events)에 자세히 설명되어 있습니다. 이벤트를 사용하면, 이벤트가 별도의 스레드에서 처리되므로 실행 시점이 보장되지 않는다는 것에 주의하십시오. 

이벤트는 React Native 컴포넌트를 참조할 필요 없이 컴포넌트를 변경할 수 있기 때문에 강력합니다. 그러나, 사용 중에 빠질 수 있는 몇 가지 함정이 있습니다. 

- 어디에서든 이벤트를 전송할 수 있기 때문에, 프로젝트에 종속성을 스파게티처럼(복잡하게) 도입하게 될 수 있습니다. 
- 이벤트들은 네임스페이스를 공유하므로, 이름 충돌이 발생할 수 있습니다. 충돌은 정적으로 탐지되지 않으므로 디버깅이 어렵습니다. 
- 동일한 React Native 컴포넌트의 인스턴스를 여러 개 사용하고 이들을 이벤트 관점에서 식별하고 싶다면, 식별자를 도입하고 이벤트와 함께 전달해야할 가능성이 있습니다. (네이티브 뷰의 \`reactTag\`를 식별자로 사용할 수 있습니다). 

React Native에 네이티브를 포함시킬 때 사용하는 일반적인 패턴은 네이티브 컴포넌트의 RCTViewManager를 뷰의 대리자로 만들어, 브리지를 통해 JavaScript로 이벤트를 다시 전송하는 것입니다. 이렇게 하면 관련된 이벤트 호출들이 한 곳에 보관됩니다. 

### React Native에서 네이티브 함수 호출하기 (네이티브 모듈)

네이티브 모듈은 JS에서 사용할 수 있는 Objective-C 클래스입니다. 일반적으로 JS 브리지 당 각 모듈의 인스턴스가 하나씩 생성됩니다. 임의의 함수 또는 상수를 React Native로 내보낼 수 있습니다. [이 문서](https://reactnative.dev/docs/native-modules-ios#content)에서 자세히 다루고 있습니다. 

네이티브 모듈이 싱글톤이라는 사실은 임베딩 컨텍스트에서의 메커니즘을 제한합니다. 네이티브 뷰에 임베드된 React Native 컴포넌트가 있고, 네이티브 상위 뷰를 업데이트하려고 한다고 가정해봅시다. 네이티브 모듈 메커니즘을 사용해서 예상된 인자 뿐만 아니라 상위 네이티브 뷰의 식별자도 인자로 받는 함수를 내보냅니다. 식별자는 업데이트할 상위 뷰에 대한 참조를 검색하는 데 사용됩니다. 즉, 식별자에서 모듈의 네이티브 뷰로의 매핑을 유지해야 합니다. 

이 방법은 복잡하지만, 모든 React Native 뷰를 관리하는 React Native 내장 클래스인 \`RCTUIManager\`에 사용되는 방법입니다. 

네이티브 모듈은 기존의 네이티브 라이브러리를 JS에 노출시키는 데도 사용할 수 있습니다. [Geolocation Library](https://github.com/react-native-community/react-native-geolocation)가 그 예시입니다. 

> ***경고***: 모든 네이티브 모듈이 동일한 네임스페이스를 공유합니다. 새로운 모듈을 생성할 때는 이름 충돌에 주의하세요. 

## 레이아웃 연산 흐름

네이티브와 React Native를 통합할 때는, 두 개의 서로 다른 레이아웃 시스템을 통합할 방법도 필요합니다. 이 섹션에서는 일반적인 레이아웃 문제들을 다루고, 이를 해결하기 위한 메커니즘에 대한 간략한 설명을 제공합니다. 

### React Native에 임베드된 네이티브 컴포넌트의 레이아웃

이 케이스에 대해서는 [이 문서](https://reactnative.dev/docs/native-components-ios#style)에서 다루고 있습니다. 요약하자면, 모든 네이티브 리액트 뷰가 \`UIView\` 의 하위 클래스이기 때문에, 대부분의 스타일과 사이즈 속성은 즉시 사용할 수 있도록 작동합니다. 

### 네이티브에 임베드된 Reactg Native 컴포넌트의 레이아웃

#### React Native content with fixed size[#](https://reactnative.dev/docs/communication-ios#react-native-content-with-fixed-size)

일반적인 시나리오는 네이티브 측에 고정된 크기가 알려진 React Native앱을 가지고 있을 때입니다. 특히, 전체 화면 React Native 뷰가 이 경우에 해당합니다. 더 작은 최상위 뷰를 원하는 경우, 명시적으로 RCTRootView의 프레임을 설정할 수 있습니다. 

예를 들어, RN 앱을 200 픽셀 크게 만들고, 호스팅 뷰의 너비를 늘리려면 다음과 같이 할 수 있습니다. 

\`\`\`objc
// SomeViewController.m

- (void)viewDidLoad
{
  [...]
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:appName
                                            initialProperties:props];
  rootView.frame = CGRectMake(0, 0, self.view.width, 200);
  [self.view addSubview:rootView];
}
\`\`\`

최상위 뷰의 크기가 고정되어 있을 때는, JS 측에서 해당 뷰의 경계를 준수해야 합니다. 다시 말해, React Native 컨텐츠가 고정된 사이즈의 최상위 뷰 안에 포함될 수 있는지 확인해야 합니다. 이를 보장하는 가장 쉬운 방법은 Flexbox 레이아웃을 사용하는 것입니다. absolute 포지셔닝을 사용하는 경우, React 컴포넌트가 최상위 뷰의 경계 바깥에 표시되면, 네이티브 뷰와 겹쳐서 일부 기능이 예기치 못한 동작을 할 수 있습니다. 예를 들어 'TouchableHighlight'은 최상위 뷰 바깥의 터치에 대해서는 강조 표시를 하지 않을 것입니다. 

프레임 속성을 다시 설정하여 최상위 뷰의 크기를 동적으로 업데이트하는 것도 좋은 방법입니다. React Native가 컨텐츠의 레이아웃을 처리할 것입니다. 

#### 유동적인 크기의 React Native 컨텐츠

경우에 따라서는 처음에 크기를 알 수 없는 컨텐츠를 렌더링하려고 할 수도 있습니다. 크기가 JS에서 동적으로 정의된다고 가정해 보겠습니다. 이 문제에 대해 두 가지 해결책이 있습니다. 

1. React Native 뷰를 \`ScrollView\` 컴포넌트로 감쌀 수 있습니다. 이렇게 하면 컨텐츠가 항상 사용 가능하고, 네이티브 뷰와 겹치지 않도록 보장할 수 있습니다. 
2. React Native를 사용하면, JS에서 RN 앱의 크기를 결정하고 이를 \`RCTRootView\` 를 호스팅하는 소유자에게 제공할 수 있습니다. 그런 다음, 소유자에게는 하위 뷰를 다시 배치하고, UI를 일관성있게 유지할 책임이 있습니다. \`RCTRootView\` 의 flexibility 모드를 통해 이를 수행할 수 있습니다. 

\`RCTRootView\` 는 4가지 크기의 flexibility 모드를 지원합니다. 

\`\`\`objc
// RCTRootView.h

typedef NS_ENUM(NSInteger, RCTRootViewSizeFlexibility) {
  RCTRootViewSizeFlexibilityNone = 0,
  RCTRootViewSizeFlexibilityWidth,
  RCTRootViewSizeFlexibilityHeight,
  RCTRootViewSizeFlexibilityWidthAndHeight,
};
\`\`\`

\`RCTRootViewSizeFlexibilityNone\` 는 최상위 뷰의 크기를 고정하는 기본값이지만 \`setFrame:\` 으로 업데이트할 수 있습니다. 다른 세 가지 모드를 사용하면 React Native 컨텐츠 크기 업데이트를 추적할 수 있습니다. 예를 들어, 모드를 \`RCTRootViewSizeFlexibilityHeight\`로 설정하면, React Native가 컨텐츠의 높이를 측정한 정보를 \`RCTRootView\` 의 위임자에게 다시 전달하게 됩니다. 위임자 내에서, 컨텐츠에 맞춰 최상위 뷰의 프레임을 설정하는 것을 포함한 임의의 작업을 수행할 수 있습니다. 위임자는 컨텐츠의 크기가 변경된 경우에만 호출됩니다. 

> ***경고:*** JS와 네이티브 모두에서 크기를 동적으로 만들면 정의되지 않은 동작(undefined behavior)이 발생합니다. 예를 들어 \`RCTRootView\` 호스팅에서 \`RCTRootViewSizeFlexibilityWidth\` 를 사용하는 동안에 상위 React 컴포넌트의 너비를 동적으로 (\`flexbox\`로) 만들지 마십시오. 

다음 예제를 봅시다. 

\`\`\`objc
// FlexibleSizeExampleView.m

- (instancetype)initWithFrame:(CGRect)frame
{
  [...]

  _rootView = [[RCTRootView alloc] initWithBridge:bridge
  moduleName:@"FlexibilityExampleApp"
  initialProperties:@{}];

  _rootView.delegate = self;
  _rootView.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;
  _rootView.frame = CGRectMake(0, 0, self.frame.size.width, 0);
}

#pragma mark - RCTRootViewDelegate
- (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView
{
  CGRect newFrame = rootView.frame;
  newFrame.size = rootView.intrinsicContentSize;

  rootView.frame = newFrame;
}
\`\`\`

이 예제에는 루트 뷰를 포함하는 \`FlexibleSizeExampleView\` 뷰가 있습니다. 루트 뷰를 생성하고, 초기화하고, 위임자를 설정합니다. 위임자는 크기 업데이트를 처리합니다. 그런 다음, 루트 뷰의 크기 유연성을 \`RCTRootViewSizeFlexibilityHeight\`로 설정합니다. 그러면 React Native 컨텐츠의 높이가 변경될 때마다 \`rootViewDidChangeIntrinsicSize:\` 메서드가 호출됩니다. 높이도 함께 설정했지만, 높이가 RN에 의존하도록 만들었기 때문에 효과가 없습니다. 

예제의 전체 소스 코드는 [여기](https://github.com/facebook/react-native/blob/master/packages/rn-tester/RNTester/NativeExampleViews/FlexibleSizeExampleView.m)에서 확인할 수 있습니다. 

최상위 뷰의 크기를 동적으로 유연성 모드로 변경해도 좋습니다. 최상위 뷰의 유연성 모드를 변경하면 레이아웃 재연산 스케쥴이 지연되고, 컨텐츠 크기가 알려졌을 때 위임자 \`rootViewDidChangeIntrinsicSize:\` 메서드가 호출됩니다. 

> ***참고:*** 네이티브 UI 뷰 업데이트가 메인 스레드에서 수행되는 동안, React Native 레이아웃 연산은 별도의 스레드에서 수행됩니다. 이로 인해 네이티브와 React Native 간에 일시적인 UI 불일치가 발생할 수 있습니다. 이는 알려진 문제이며, RN 팀은 서로 다른 소스에서 오는 UI 업데이트를 동기화하는 작업을 진행 중입니다. 

> ***참고:*** React Native는 최상위 뷰가 다른 뷰의 하위 뷰가 될 때까지 어떠한 레이아웃 연산도 수행하지 않습니다. 크기가 알려질 때까지 React Native 뷰를 숨기려면, 최상위 뷰를 하위 뷰로 추가하여 초기에 숨겨지도록 합니다. (\`UIView\` 의 \`hidden\` 프로퍼티를 사용하십시오). 그런 다음 위임 메서드에서 visibility를 변경합니다. 
`

export const text4_1 = `
# 앱 확장 (App Extensions)

앱 확장을 통해 기본 앱 외의 사용자 정의 기능 및 컨텐츠를 제공할 수 있습니다. iOS에는 다양한 유형의 앱 확장이 있으며, [앱 확장 프로그래밍 가이드]((https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1))에서 전부 다루고 있습니다. 이 가이드에서는, iOS에서 앱 확장을 활용하는 방법에 대해 간단히 알아보겠습니다. 

## 확장에서의 메모리 사용

이러한 확장은 일반 앱 샌드박스 밖에서 로드되기 때문에, 여러 앱 확장들이 동시에 로드될 가능성이 높습니다. 예상했듯이, 이러한 확장은 작은 메모리 사용 제한을 가집니다. 앱 확장을 개발할 때는 이를 염두에 두십시오. 앱 확장을 개발할 때는 항상 실제 디바이스에서 애플리케이션을 테스트하는 것이 좋습니다. 개발자가 iOS 시뮬레이터에서 확장이 정상적으로 작동하는 것을 확인하고 나서, 확장이 실제 디바이스에서는 로드되지 않는다는 것을 사용자 보고를 통해서 알게 되는 경우가 너무 흔합니다. 

이 주제에 대해 더 자세히 알아보려면 [확장에서의 메모리 사용](https://www.youtube.com/watch?v=GqXMqn6MXrM)에서 Conrad Kramer의 강연을 시청하는 것을 권장합니다. 

### 투데이 위젯

투데이 위젯의 메모리 제한은 16 MB입니다. 실제로 React Native를 사용한 투데이 위젯 구현은  메모리 사용량이 너무 많은 경향이 있기 때문에 신뢰할 수 없게 작동할 수 있습니다. 투데이 위젯이 '로드할 수 없음' 메세지를 표시한다면, 위젯이 메모리 제한을 초과했다는 것을 알 수 있습니다. 

![img](https://reactnative.dev/assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg)

항상 실제 디바이스에서 앱 확장을 테스트하되, 그것만으로는 충분하지 않을 수 있다는 것을 명심하십시오. 특히 투데이 위젯의 경우 더욱 그러합니다. 디버그 구성 빌드는 메모리 제한을 초과할 가능성이 더 높은 반면, 릴리스 구성 빌드는 즉시 실패하지 않습니다. 릴리스 구성 빌드가 16 MB 제한에 매우 가까운 경우,  [Xcode's Instruments](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html)를 사용해 실제 메모리 사용량을 분석하는 것이 좋습니다. 이러한 상황에서는 API로부터 데이터를 가져오는 것과 같은 일반적인 작업을 수행하는 것만으로도 빠르게 16 MB 제한을 초과하게 될 수 있습니다. 

React Native 투데이 위젯 구현의 한계를 실험하려면, [react-native-today-widget](https://github.com/matejkriz/react-native-today-widget/)에서 예제 프로젝트를 확장해 보십시오. 

### 다른 앱 확장기능

다른 종류의 앱 확장은 투데이 위젯보다 더 많은 메모리를 사용할 수 있습니다. 예를 들어, 커스텀 키보드 확장은 48 MB, 공유 확장은 120 MB로 제한됩니다. React Native로는 이러한 앱 확장을 구현하는 것이 더 효과적입니다. 이를 증명하는 사례 중 하나로는 [https-ios-share-hotes](https://github.com/andrewsardone/react-native-ios-share-extension)가 있습니다. 
`

export const text5_1 = `
# Apple App Store에 게시하기

앱 게시 과정은 다른 네이티브 iOS 앱과 동일하며, 몇 가지 추가적으로 고려해야할 사항이 있습니다. 

> Expo를 사용하는 경우 [Building Standalone Apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)에 대한 Expo Guide를 읽어보십시오.

### 1. 앱 전송 보안 (ATS, App Transport Security) 활성화하기

앱 전송 보안(ATS)은 iOS 9에서 도입된 보안 기능으로, HTTS를 통해 전송되지 않은 모든 HTTP 요청을 거부합니다. 이로 인해 개발자 React Native 서버를 비롯해 HTTP 트래픽이 차단될 수 있습니다. 개발을 용이하게 하기 위해서, React Native 프로젝트에서 ATS는 \`localhost\`에 대해서는 기본적으로 비활성화되어 있습니다.  

프로덕션용으로 앱을 빌드하기 전에 \`NSExceptionDomains\` 딕셔너리에서 \`localhost\` 엔트리를 제거하고, \`ios/\` 폴더의 \`Info.plist\` 파일에서 \`NSAllowsArbitraryLoads\` 를 \`false\` 로 설정하여 ATS를 다시 활성화할 수 있습니다. Info 창에서 대상 프로퍼티를 열고 앱 전송 보안 설정 엔트리를 편집함으로써, Xcode 내부에서 ATS를 다시 활성화할 수도 있습니다. 

> 애플리케이션이 프로덕션에서 HTTP 리소스에 액세스해야 하는 경우, [이 게시물](http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/)을 참조하여 프로젝트에서 ATS를 구성하는 방법에 대해 알아보십시오.

### 2. 릴리스 방식 설정하기

App Store에서 배포용 앱을 빌드하려면 Xcode에서 \`Release\` 방식을 사용해야 합니다. 릴리스 용으로 빌드된 앱은 앱 내 개발자 메뉴를 자동으로 비활성화하여, 프로덕션 중에 사용자가 실수로 메뉴에 접근하는 것을 방지합니다. 또한 JavaScript를 로컬로 번들링하므로, 컴퓨터에 연결되어 있지 않은 상태에서 앱을 디바이스에 넣고 테스트할 수 있습니다. 

\`Release\` 설정을 사용해 앱을 빌드하려면, **제품 -> 스키마 -> 스키마 편집**으로 이동하십시오. 사이드 바에서 **Run** 탭을 선택한 다음, 빌드 구성 드롭다운을 \`Release\`로 설정합니다. 

![img](https://reactnative.dev/assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png)

#### 고급 팁

앱 번들의 크기가 커지면, 최상위 뷰의 스플래시 화면과 디스플레이 사이에 빈 화면이 깜빡이기 시작할 수 있습니다. 이 경우 \`AppDelegete.m\`에 다음 코드를 추가해 변환 중에 스플래시 화면에 계속. 표시되게 할 수 있습니다. 

\`\`\`objc
  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"
  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
  UIViewController *vc = [sb instantiateInitialViewController];
  rootView.loadingView = vc.view;
\`\`\`

디버그 중이더라도, 물리적 디바이스를 대상으로 지정할 때마다 정적 번들이 빌드됩니다. 시간을 절약하려면, Xcode 빌드 단계 \`Bundle React Native code and images\` 에 다음 쉘 스크립트를 추가해, 디버그 모드에서 번들 생성을 해제합니다. 

\`\`\`shell
 if [ "\${CONFIGURATION}" == "Debug" ]; then
  export SKIP_BUNDLING=true
 fi
\`\`\`

### 3. 릴리스용으로 앱 빌드하기

이제 \`⌘B\`를 누르거나 메뉴 바에서 프로덕트 -> 빌드를 선택해 앱을 릴리스용으로 빌드할 수 있습니다. 릴리스용으로 빌드가 완료되면, 베타 테스터에 앱을 배포하고 앱 스토어에 제출할 수 있습니다. 

>  \`React Native CLI\` 에서는 \`--configuration\` 옵션에 값으로 \`Release\`를 사용해 이 작업을 수행할 수 있습니다.  (예: \`npx react-native run-ios --configuration Release\`).


`