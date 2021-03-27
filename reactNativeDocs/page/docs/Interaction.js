import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "./Styles";
import CodeSection from "../../component/CodeSection"
import ImageSection from "../../component/ImageSection"
import BulletedList from "../../component/BulletedList"
export default Interaction = ({ navigation }) => {
  return (
    <ScrollView style={styles.white}>

      <H1 content="Interaction - 1. Handling Touches" />
      <H4 content="모바일 앱에서 유저와의 상호작용(Users interact)는 주로 **터치**로 이루어진다. 유저는 버튼을 누르거나 스크롤링을 하거나, 맵을 확대하는 것과 같은 제스쳐들의 조합을 사용할 수 있다. 리액트 네이티브는 모든 종류의 일반적인 제스쳐를 다루는 컴포넌트들을 제공하며, 고급 제스쳐를 인식할 수 있는 포괄적인 제스쳐 응답 시스템(gesture responder system)도 제공한다.
      그러나 가장 관심을 끌만한 컴포넌트는 바로 기본 Button 컴포넌트이다."/>
      <H2 content="Displaying a basic button" />
      <H4 content="Button 컴포넌트는 모든 플랫폼에서 사용할 수 있다. 가장 간단한 버튼 컴포넌트 예제는 다음과 같다. " />
      <CodeSection content={Code1}  navi={navigation} naviName={"Default"} />
      <H4 content='예제의 컴포넌트는 iOS와 안드로이드에서 각각 다음과 같이 렌더링된다. (왼쪽 - iOS, 오른쪽 - Android)
      버튼을 누르면 "onPress" 함수가 호출된다. 예제에서는 onPress 함수가 호출되면 alert 창이 뜬다.
      color prop을 수정해서 다음과 같이 버튼 컬러를 변경할 수도 있다. (파란색 - 기본 컬러, 보라색 - 변경된 컬러)'/>
      <ImageSection />
      <H4 content ='기본 Button 컴포넌트 대신 터치가 가능한(Touchable) 다른 리액트 네이티브 컴포넌트로 직접 커스텀 버튼을 만들 수도 있다. '/>
      <H4 content ='Touchable 컴포넌트는 누르는 제스쳐(tapping gestures)를 인식하는 기능을 제공하고, 해당 제스쳐가 인식되었을 때 피드백을 보여준다. 그러나 이러한 컴포넌트들은 (Button 컴포넌트와 달리) 기본적인 스타일링을 제공하지 않기 때문에 약간의 스타일링이 필요할 수 있다. '/>
      <H4 content ='원하는 피드백의 종류에 따라, 어떤 Touchable 컴포넌트를 사용할지 선택한다. '/>
      <CodeSection content={Code2}  navi={navigation} naviName={"ButtonBasics"} />
      <H2 content='Touchables'/>
      <BulletedList content='일반적으로 웹에서 버튼이나 링크를 사용하는 모든 곳에서 TouchableHighlight 컴포넌트를 사용할 수 있다. 유저가 버튼을 누르면 뷰의 배경이 어두워진다.'/>
      <BulletedList content='안드로이드에서 TouchableNativeFeedback 컴포넌트는 유저의 터치에 반응하는 ink surface reaction을 보여준다. '/>
      <BulletedList content='TouchableOpacity는 버튼의 불투명도를 줄인다=버튼을 투명하게 만든다. 사용자가 버튼을 누르고 있는 동안 배경을 볼 수 있다.'/>
      <BulletedList content='tab gesture를 핸들링하되 피드백이 나타나지 않게 하려면, TouchableWithoutFeedback 컴포넌트를 사용할 것'/>
      <H4 content='유저가 일정시간 동안 뷰를 누르고 있는 것(long press)을 인식하고 싶은 경우, Touchable 컴포넌트의 onLongPress props을 통해 처리할 수 있다. '/>
      <H2 content='Scrolling and swiping'/>
      <H4 content='추가로 터치 스크린이 있는 기기에서 자주 사용되는 제스쳐 중에는 swipe(오른쪽→왼쪽 드래그)와 pans(위→아래 드래그)이 있다.'/>
      <H4 content='이 제스쳐들을 통해 유저는 스크롤을 내리거나 페이지를 넘길 수 있다. → ScrollView 코어 컴포넌트 페이지 확인'/>

      <H1 content="Interaction - 2. Navigating Between Screens" />
      <H4 content='대부분의 모바일 앱은 여러 개의 화면으로 구성된다. 여러 개의 화면을 표시하는 것, 또는 화면을 전환하는 것은 일반적으로 Navigator에 의해 처리된다.'/>
      <H4 content='이 가이드는 리액트 네이티브에서 사용가능한 다양한 네비게이션 컴포넌트를 다룬다. React Navigation은 iOS, Android에서 common stack navigation과 tabbed navigation patterns을 보여주는 간단한 탐색 솔루션을 제공한다. '/>
      <H4 content='Android와 iOS에서 native 같은 모습과 사용감을 구현하고 싶거나, 이미 navigation을 네이티브로 관리하는 앱을 리액트 네이티브 앱과 통합하고 싶다면, Android, iOS에서 제공하는 react-native-navigation 라이브러리를 사용하면 된다.'/>
      <H2 content="React Navigation(리액트 네비게이션 라이브러리)" />
      <H4 content='React Navigation은 몇 줄의 코드로 앱 화면을 설정할 수 있는 독립형 라이브러리이다. '/>
      <H3 content="Installation and setup" />
      <H4 content="1) 프로젝트에 설치하기" />
      <CodeSection content="npm install @react-navigation/native @react-navigation/stack" />
      <H4 content="2) peer dependencies 설치하기 : " />
      <H4 content="Expo 프로젝트인 경우 - expo 를 사용해 설치" />
      <CodeSection content="expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @ react-native-community / masked-view" />
      <H4 content="bare React Native 프로젝트인 경우 - npm 을 사용해 설치 + Cocoapods 설치되어있는지 확인하기" />
      <CodeSection content="npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @ react-native-community / masked-view" />
      <H4 content="Cocoapods 설치" />
      <CodeSection content="cd ios\pod install\cd .." />
      <H4 content="*설치 후에 warning이 표시될 수 있음. 일부 패키지의 잘못된 버전 지정으로 발생하는 것으로, 앱 빌드에 성공한다면 대부분의 경고는 무시해도 된다." />
      <H4 content="3) 프로젝트 entry file(index.js, App.js 등)의 최상단에 import 'react-native-gesture-handler' 를 추가해 import한다. (반드시 파일의 최상단에 선언해야 함. )" />
      <H4 content="4) 앱 전체를 NavigationContainer 컴포넌트로 감싼다. (주로 entry 파일에 적용)" />
      <CodeSection content={Code3} navi={navigation} naviName={"Default"} />
      <H4 content="이제 device나 시뮬레이터에서 앱을 빌드하고 실행할 수 있다. " />
      <H3 content="Usage" />
      <H4 content="이제 홈 화면과 프로필 화면으로 이루어진 앱을 생성할 수 있다." />
      <CodeSection content={Code4} navi={navigation} naviName={"Default"} />
      <H4 content="이 예제에서는, Stack.Screen 컴포넌트를 사용해 정의된 두 개의 화면(Home, Profile)이 있다. 비슷한 방식으로 원하는 만큼 많은 화면을 정의할 수 있다. " />
      <H4 content="Stack.Screen 컴포넌트의 options prop으로 각 화면의 화면 타이틀과 같은 옵션을 설정할 수 있다. " />
      <H4 content="각각의 화면은 React 컴포넌트인 component prop을 받는다. 이 컴포넌트들은 다른 화면으로 연결하는 다양한 메소드들을 가진 navigation prop을 받는다. " />
      <H4 content="예를 들어, navigation.navigate 를 사용해 Profile 화면으로 이동할 수 있다. " />
      <CodeSection content={Code5} navi={navigation} naviName={"Default"} />
      <H4 content="스택 네비게이터의 뷰들은 네이티브 컴포넌트를 사용하고, Animated 라이브러리는 네이티브 스레드에서 실행되는 60fps 애니메이션을 제공한다. 애니메이션과 제스쳐를 커스텀할 수도 있다. " />
      <H4 content="React Navigation에는 tabs, drawer와 같은 다양한 종류의 네비게이터를 위한 패키지들도 있다. 이러한 패키지들을 사용해 앱에서 다양한 패턴을 구현할 수 있다. " />
      <H4 content=">React Navigation Getting Started Guide 에서 더 자세한 정보를 확인할 수 있다. " />

      <H1 content="Interaction - 3. Animations" />
      <H4 content="애니메이션은 훌륭한 사용자 경험(UX)을 만드는 데 매우 중요하다. 정지 상태의 물체는 움직이기 시작할 때 관성을 극복해야 한다. 움직이는 물체는 모멘텀(운동량)을 가지고, 즉시 멈추지 않는다. 애니메이션은 현실 세계의 물리적인 법칙에 어긋나지 않는 동작을 제공한다." />
      <H4 content="리액트 네이티브는 두 가지 보완적인 애니메이션 시스템을 제공한다. : " />
      <BulletedList content="구체적인 값에 대한 인터랙티브(역동적인)하고 세분화된 컨트롤을 제공하는 Animated API" />
      <BulletedList content="애니메이션 글로벌 레이아웃 트랜잭션을 제공하는 LayoutAnimation" />
      <H3 content="Animated API" />
      <H4 content="Animated API는 다양한 종류의 애니메이션과 상호작용(interaction) 패턴을 뛰어난 성능으로 표현할 수 있다. " />

      <H4 content="Animated는 입출력 사이에 변환이 가능한 입력-출력 사이의 관계 선언과, time-based 애니메이션을 컨트롤할 수 있는 start, stop 메소드에 초점이 맞춰져있다. " />
      <BulletedList content="Animated는 여섯 개의 animatable 컴포넌트 타입(View, Text, Image, ScrollView, FlatList, SectionList)을 export한다." />
      <H4 content="Animated.createAnimatedComponent() 메소드로 직접 커스텀 컴포넌트 타입을 생성할 수도 있다." />
      <H4 content="예를 들어, 마운트 될 때 fade in되는(서서히 밝아지는) 컨테이너 뷰는 다음과 같이 작성할 수 있다:" />
      <CodeSection content={Code6} navi={navigation} naviName={"AnimationExample"} />

      <H4 content="fadeAnim이라 불리는 새로운 Animated.Value, FadeInView 생성자는 state로 초기화된다. View의 opacity 속성은 이 animated 변수에 매핑된다. 내부적으로는, opacity를 설정하기 위해 숫자 값이 추출된다. " />
      <H4 content="컴포넌트를 마운트할 때, opacity는 0으로 설정된다. 그런 다음 fadeAnim 애니메이션 값에서 easing 애니메이션이 시작된다. 그러면 변수가 애니메이션화될 때, 각 프레임의 모든 종속된 매핑이 업데이트된다. 최종 값은 1이다. " />
      <H4 content="이것은 setState를 호출하고 리렌더링을 하는 것보다 더 빠른, 최적화된 방식이다. 전체 구성이 선언적이기 때문에, 구성을 직렬화하고 우선순위 스레드에서 애니메이션을 실행함으로써 추가로 최적화를 구현할 수 있다. " />
      <H2 content="Configuring animations(애니메이션 구성)" />
      <H4 content="애니메이션은 크게/무겁게? 구성할 수 있다. 커스텀된 또는 재정의된 easing functions, delays, durations, decay factors, spring constants(스프링 상수) 등은 애니메이션 타입에 따라 조정할 수 있다. " />
      <H4 content="*Easing function : 시간의 흐름에 따른 매개변수의 변화율을 지정하는 함수 (Easing functions specify the rate of change of a parameter over time)" />
      <BulletedList content="Animated 는 여러 애니메이션 타입을 제공한다. 가장 많이 사용되는 타입은 Animated.timing() 이다. " />
      <H4 content="Animated.timing() 은 다양한 재정의된 easing function, 또는 직접 작성한 함수를 이용해 시간의 흐름에 따라 변수를 애니메이팅(animating)하는 것을 지원한다. Easing function은 주로 애니메이션에서 객체의 점진적인 가속 또는 감속을 전달하는 데 사용된다. " />
      <H4 content="timing 의 default 값으로는 최대 속도까지의 점진적인 가속, 또는 정지할 때까지의 점진적인 감속을 전달하는 easeInOut 커브가 사용된다. easing 파라미터를 전달해 다른 easing function을 지정할 수도 있다. 커스텀 duration 또는 애니메이션 시작 전의 delay 애니메이션까지도 지원된다. " />
      <H4 content="최종 위치로 이동하기 전에 약간 뒤로 물러나는 2초 길이의 애니메이션을 만드는 예제이다. " />
      <CodeSection content={Code7} navi={navigation} naviName={"Default"} />
      <H4 content="내장 애니메이션에서 지원하는 config 파라미터에 대해 더 자세한 정보는 Animated API reference의 Configuring animation 섹션 확인." />
      <H2 content="Composing animations (애니메이션 딜레이)" />
      <H4 content="애니메이션은 순서대로 또는 병렬로 결합해 재생할 수 있다. 연속 애니메이션은 이전 애니메이션이 완료되자마자 즉시 실행되거나, 지정한 만큼의 딜레이 후에 실행시킬 수도 있다. " />
      <H4 content="Animated API는 sequence(), delay()와 같은 여러 메소드를 제공한다. 각 메소드는 실행할 애니메이션 배열을 받아서 필요에 따라 자동으로 start() / stop() 을 호출한다. " />
      <H4 content="다음 예제의 애니메이션은, 정지될 때까지 진행한 후에, 병렬로 회전하면서 뒤로 튀어 나온다. " />
      <CodeSection content={Code8} navi={navigation} naviName={"Default"} />

      <H4 content="하나의 애니메이션이 멈추거나 중단되면, 그룹 내의 모든 애니메이션들이 같이 멈춘다. (Animated.parallel의 stopTogether 옵션을 false로 설정해 비활성화할 수 있다. )" />

      <H2 content="Combining animated values (애니메이션 값 결합)" />
      <H4 content="두 개의 애니메이션 값을 더하거나, 곱하거나, 나누거나, 또는 나머지 연산을 해서 새로운 애니메이션 값을 생성할 수 있다. " />
      <H4 content="계산을 위해 애니메이션 값을 변환해야하는 경우가 있다. 다음은 scale을 변경하는 예제이다.  (2x → 0.5x)" />
      <CodeSection content={Code9} navi={navigation} naviName={"Default"} />

      <H2 content="Cocoapods Interpolation (보간)" />
      <H4 content="각 속성은 먼저 보간(interpolation)을 통해 실행될 수 있다. interpolation은 입력 범위를 출력 범위와 매핑한다.  (⇒ 사용자 정의 값 범위 작성) 매핑에는 주로 선형 interpolation을 사용하지만 easing function도 지원한다. " />
      <H4 content="0-1의 범위를 0-100으로 변환하는 기본 매핑 예제: " />
      <CodeSection content={Code10} navi={navigation} naviName={"Default"} />


      <H4 content="예를 들어, Animated.Value는 0~1로 이동하지만, 위치는 150px에서 0px로, opacity(투명도)는 0에서 1로 animate되게 할 수 있다. " />
      <CodeSection content={Code11} navi={navigation} naviName={"Default"} />

      <H4 content="interpolate() 메소드는 여러 범위의 세그먼트도 지원하므로, 데드 존 및 다른 유용한 트릭을 정의하는 데에 편리하게 사용할 수 있다. " />
      <H4 content="-300에서 -100, -100에서 0으로 이동한 다음, 0에서 1까지 다시 올라가고, 100에서 0으로 다시 내려간 다음, 0으로 유지되는 데드 존을 얻는 예제 :" />
      <CodeSection content={Code12} navi={navigation} naviName={"Default"} />
      <H4 content="다음과 같이 매핑됨: " />
      <CodeSection content={Code13} navi={navigation} naviName={"Default"} />
      <H4 content="interpolate() 메소드는 문자열로의 매핑도 지원하므로, 색상과 단위 값에도 애니메이션을 적용할 수 있다. " />
      <H4 content="회전 애니메이션 구현 예제 : " />
      <CodeSection content={Code14} navi={navigation} naviName={"Default"} />
      <H4 content="interpolate()는 임의의 easing function도 지원한다. 대부분은 Easing 모듈에 이미 구현되어 있다. " />
      <H4 content="interpolate()는 출력 범위(outputRange)를 추정하기 위한 configurable한 동작도 있다. extrapolate, extrapolateLeft, extrapolateRight 옵션을 통해 extrapolation을 설정할 수 있다. " />
      <H4 content="기본값은 확장이지만, output value가 출력 범위를 초과하지 않도록 clamp를 사용할 수도 있다. " />
      <H2 content="Tracking dynamic values" />
      <H4 content="애니메이션의 `toValue`를 일반 숫자 대신 다른 애니메이션 value로 설정해서, 다른 value들을 트래킹할 수 있다. 예를 들어, Android 메신저에서 사용되는 'Chat Heads' 애니메이션은 다른 애니메이션 값에 고정된 spring() 또는 timing()과 엄격한 트래킹을 위한 0 duration을 사용해 구현될 수 있다. " />
      <CodeSection content={Code15} navi={navigation} naviName={"Default"} />

      <H4 content="leader와 follower 애니메이션 값은 Animated.ValueXY()를 사용해 구현된다. ValueXY는 panning과 dragging 같은 2D 인터랙션을 처리하는 편리한 방식이다. 두 개의 Animated.Value 인스턴스와 이를 호출하는 몇몇 helper 함수를 포함하는 기본적인 wrapper로, 대부분은 Value에 대한 drop-in 대체값으로 ValueXY를 생성한다. " />
      <H4 content="ValueXY를 통해 위 예제에서는 x, y 값 모두를 추적할 수 있다. " />
      <H2 content="Tracking gestures" />
      <H4 content="panning 또는 scrolling과 같은 제스쳐 및 기타 이벤트는 Animated.event를 통해 애니메이션 값에 직접 매핑할 수 있다. 이는, 복잡한 이벤트 객체에서 값을 추출할 수 있도록, 구조화된 맵 신택스에서 이루어진다. " />
      <H4 content="첫 번째 레벨은 여러 개의 인수를 매핑할 수 있도록 하는 배열이고, 이 배열은 중첩된 객체를 담는다. " />
      <H4 content="예를 들어, 수평 스크롤 제스쳐로 작업할 때, event.nativeEvent.contentOffset.x 를 scrollX (Animated.value)와 매핑하기 위해 다음과 같이 할 수 있다. " />
      <CodeSection content={Code16} navi={navigation} naviName={"Default"} />

      <H4 content="다음 예제는 수평으로 스크롤을 넘기는 캐러셀(Carousel)을 구현하는 예제이다. scroll position indicater가 ScrollView에서 사용되는 Animated.event를 사용해 애니메이션으로 구현되었다. " />
      <CodeSection content={Code17} navi={navigation} naviName={"Default"} />
      <H4 content="PanResponder를 사용할 때는, gestureState.dx와 gestureState.dy로부터 x, y position을 추출하는 아래의 코드를 사용할 수 있다. PanResponder 핸들러에 전달되는 두번 째 인자(gestureState)에만 신경을 쓰면 되므로, 배열의 첫번째 인자에는 null값을 준다. " />
      <CodeSection content={Code18} navi={navigation} naviName={"Default"} />
      <CodeSection content={Code19} navi={navigation} naviName={"Default"} />
      
      <H2 content="Responding to the current animation value" />
      <H4 content="animating 중에 현재 애니메이션 값을 읽어오는 명확한 방법은 없다. 최적화 문제로 네이티브 런타임에서만 값을 알 수 있기 때문이다. 현재 애니메이션 값에 대한 응답으로 자바스크립트를 실행해야 하는 경우 두 가지 접근방식이 있다. :" />
      <BulletedList content="(spring.stopAnimation(callback) 은 애니메이션을 중단하고 최종 애니메이션 값으로 콜백을 호출한다. 제스쳐 트랜지션을 생성할 때 유용하다. )" />
      <BulletedList content="(spring.addListener(callback) 은 애니메이션이 실행되는 동안 비동기적으로 콜백을 호출하며, 최근 애니메이션 값을 제공한다. state 변화를 유발하는 데 유용하다. (예를 들어 유저가 가까이 드래그할 때 bobble을 새 옵션에 스냅핑하는 것) 큰 state 변화는, 60fps에서 실행되어야 하는 panning과 같은 연속 제스쳐에 비해서, 몇 개의 프레임이 지연되는 것에 대해 덜 민감하기 때문이다. " />

      <H4 content="Animated 는 애니메이션이 일반 자바스크립트 이벤트 루프와 관계없이 고성능 방식으로 실행될 수 있도록, 완전한 직렬화가 가능하게 설계되었다. " />
      <H4 content="이러한 방식은 완전 동기적 시스템에 비해 다루기가 까다로울 수 있지만, API에 확실히 영향을 미친다. " />
      <H4 content="이러한 한계점 중 일부를 해결하기 위해서는 Animated.Value.addListener 를 사용할 수 있는데, 이는 향후 성능에 영향을 미칠 수 있으므로 남용하지 않는 것이 좋다. " />
      <H2 content="Using the native driver" />
      <H4 content="Animated API는 직렬화가 가능하게 설계되었다. native driver를 사용해서, 애니메이션 실행 전에 애니메이션에 대한 모든 것을 네이티브로 전달할 수 있다. 이렇게 함으로써, 네이티브 코드가 UI 스레드에서 프레임마다 일일히 브릿지를 거쳐갈 필요 없이 애니메이션을 수행할 수 있게 한다." />
      <H4 content="일단 애니메이션이 시작되면, 애니메이션에 영향을 미치지 않고 JS 스레드를 차단할 수 있다.  " />
      <H4 content="일반적인 애니메이션을 위한 native driver 사용법은 간단하다. 애니메이션을 시작할 때, 애니메이션 설정에 useNativeDriver: true 를 추가하면 된다. " />
      <CodeSection content={Code20} navi={navigation} naviName={"Default"} />

      <H4 content="애니메이션 값은 오직 하나의 driver하고만 호환이 되기 때문에, 하나의 애니메이션 값에 대해 애니메이션을 시작할 때 네이티브 드라이버를 사용하는 경우, 해당 애니메이션 값에 대한 모든 애니메이션이 같은 드라이버를 사용하도록 해야한다.  " />
      <H4 content="네이티브 드라이버는 Animated.event와 같이 동작할 수도 있다. 네이티브 드라이버 없이 scroll 위치를 따라가는 애니메이션에 특히 유용하다. 이 애니메이션은 리액트 네이티브의 비동기 특성으로 인해 항상 제스쳐 뒤에서 프레임을 실행한다. " />
      <CodeSection content={Code21} navi={navigation} naviName={"Default"} />
      <H4 content="RN 테스터 앱을 실행한 다음 Native Animated Example을 로드하면 작동 중인 네이티브 드라이버를 확인할 수 있다. 이러한 예제가 어떻게 생성되었는지 알아보기 위해 소스코드를 살펴볼 수도 있다. " />

      <H2 content="Caveats (주의사항)" />
      <H4 content="Animated API로 할 수 있는 모든 것이 현재 네이티브 드라이버에서 지원되는 것은 아니다. non-layout 속성에만 애니메이션을 적용할 수 있다: transform, opacity 등에서는 작동하지만, Flexbox나 position 속성에서는 작동하지 않는다. " />
      <H4 content="Animated.event의 경우, 버블링 이벤트가 아닌 직접적인 이벤트에서만 작동한다. " />
      <H4 content="애니메이션이 실행 중일 때, VirtualizedList 컴포넌트가 더 많은 행을 렌더링하지 못하게 할 수 있다. 유저가 리스트를 스크롤링하는 동안 길거나 반복되는 애니메이션을 실행해야하는 경우, 애니메이션 config에서 isInteraction: false 를 사용해 이 이슈를 방지할 수 있다. " />
      <H2 content="Bear in mind" />
      <H4 content="rotateY, rotateX 등의 transform 스타일을 사용하는 동안 transform 스타일 perspective가 올바른 위치에 있는지 확인하기. perspective가 없으면 일부 애니메이션이 Android에서 렌더링되지 않을 수 있다. " />
      <CodeSection content={Code22} navi={navigation} naviName={"Default"} />

      <H4 content="LayoutAnimation API" />
      <H4 content="LayoutAnimation을 통해 글로벌에서  다음 렌더/레이아웃 사이클에서 모든 뷰에 사용될 애니메이션을 create / update하도록 설정할 수 있다. Flexbox 레이아웃에서 특정한 속성에 애니메이션을 바로 적용하기 위해서 계산이나 측정 과정 없이 레이아웃을 업데이트하는 데 유용하다. 특히 레이아웃이 부모 요소에 영향을 미치는 경우 (예: 부모 요소의 크기를 같이 증가시키고, 아래 쪽 행을 밀어내거나 컴포넌트 간의 명시적인 조정을 요구하는 'see more(더보기)' expansion 등)에 유용하다. " />
      <H4 content="LayoutAnimation은 매우 강력하고 유용한 API이지만, Animated나 다른 애니메이션 라이브러리보다 훨씬 더 적은 컨트롤을 제공하기 때문에, LayoutAnimation으로 원하는 것을 구현하지 못하는 경우 다른 접근법을 사용해야할 수도 있다. " />
      <CodeSection content={Code23} navi={navigation} naviName={"Default"} />

      <H2 content="Additional notes" />
      <H3 content="requestAnimationFrame" />
      <H4 content="requestAnimationFrame은 브라우저의 익숙한 pollyfill이다. 함수를 유일한 인자로 받아서, 다음 페인팅 전에 해당 함수를 호출한다. 이 API는 모든 자바스크립트 기반 애니메이션 API의 기초가 되는 필수적인 구성 요소이다. 일반적으로 직접 호출 할 필요 없이, 애니메이션 API들이 프레임 업데이트를 관리해준다. " />
      <H3 content="setNativeProps#" />
      <H4 content="Direct Manipulation 섹션에서 언급했듯이, setNativeProps는 네이티브 기반 컴포넌트(복합 컴포넌트와는 달리 네이티브 뷰를 기반으로 하는 컴포넌트)의 속성을 setState나 컴포넌트 계층 구조의 리렌더링 없이 직접 수정할 수 있게 해준다. " />
      <H4 content="scale을 업데이트하는 Rebound 예제에서 이것을 사용해볼 수 있다. 우리가 업데이트하는 컴포넌트가 깊게 중첩되어 있고, shouldComponentUpdate로 최적화된 적이 없는 경우 도움이 될 수 있다. " />
      <H4 content="프레임이 떨어지는 애니메이션(초당 60프레임 이하에서 수행)의 경우, NativeProp을 사용하거나 ComponentUpdate를 사용하여 최적화해야 한다. 또는 nativeDriver 옵션을 사용하여 JavaScript 스레드가 아닌 UI 스레드에서 애니메이션을 실행할 수 있다. " />
      <H4 content="또한 InteractionManager를 사용해 애니메이션이 완료될 때까지 계산 집약적인 작업을 연기할 수도 있다. In-App Developer Menud의 'FPS Moinitor' 툴을 이용해 프레임 속도를 모니터할 수 있다. " />

      <H1 content="Interaction - 4. Gesture Responder System" />
      <H4 content="제스쳐 응답 시스템은 앱의 제스쳐의 라이프싸이클을 관리한다. 하나의 터치는 앱이 사용자의 의도를 무엇으로 파악했는지에 따라 여러 단계를 거쳐갈 수 있다. 예를 들어 앱은 해당 터치가 스크롤링인지, 위젯을 슬라이딩시키는지, 또는 탭하는지를 확인할 필요가 있다. 터치하는 동안에 변경될 수도 있고, 동시에 여러 번 터치할 수도 있다. " />
      <H4 content="터치 응답 시스템은 컴포넌트가 이러한 터치 인터랙션을 부모 컴포넌트나 자식 컴포넌트에 대한 추가적인 정보 없이도 다룰 수 있게 한다. " />
      <H2 content="Best Practices" />
      <H4 content="앱의 사용감을 높이려면, 모든 동작은 다음 속성들을 따라야 한다. " />
      <BulletedList content="(피드백/하이라이팅 - 유저의 터치를 무엇으로 처리하고 있는지, 터치를 풀었을 때 무슨 일이 일어날지 보여주는 것)" />
      <BulletedList content="(취소 기능 - 동작을 할 때, 유저는 손가락을 멀리 드래깅함으로써 터치 중간에 동작을 취소시킬 수 있어야 한다. ) " />
      <H4 content="이러한 기능들은 유저가 앱을 더 편안하게 사용하게 만든다. 실수하는 것에 대한 두려움 없이 실험하고 상호작용할 수 있기 때문이다. " />
      <H2 content="TouchableHighlight and Touchable" />
      <H4 content="응답 시스템은 사용하기 복잡할 수 있다. 그래서 '누를 수 있는'(tappable) 요소에 대한 추상 Touchable 상속을 제공한다. 이것은 응답 시스템을 사용하며, 탭 인터랙션을 선언적으로 구성할 수 있게 해준다. " />
      <H4 content="버튼이나 링크를 사용하고 싶은 곳이라면 어디에서든지 TouchableHighlight을 사용할 수 있다. " />
      <H2 content="Responder Lifecycle" />
      <H4 content="Animat하나의 뷰는 정확한 negotiation 메소드를 상속함으로써 터치 응답자(responder)가 될 수 있다. ed" />
      <H4 content="뷰에게 응답자가 되고 싶은지 묻는 두 가지 메소드가 있다. " />
      <BulletedList content="(View.props.onStartShouldSetResponder: (evt) => true, - 해당 뷰가 터치의 시작점에서 응답자가 되고 싶어하는가?)" />
      <BulletedList content="(View.props.onMoveShouldSetResponder: (evt) => true, - 응답자가 아닐 때, 뷰 위의 모든 터치에서 호출됨 : 해당 뷰가 터치 응답성을 요구하는가?)" />
      <H4 content="만약 뷰가 true를 리턴하고 응답자가 되려고 시도한다면, 다음 중 하나가 발생한다. " />
      <BulletedList content="View.props.onResponderGrant: (evt) => {} - 이제 뷰가 터치 이벤트에 응답하고 있다. 유저에게 무엇이 발생하고 있는지 강조하고 보여줄 때이다. " />
      <BulletedList content="View.props.onResponderReject: (evt) => {} - 현재 다른 요소가 응답자이고, 해제되지 않을 것이다. " />
      <H4 content="뷰가 응답하는 경우, 다음 핸들러들이 호출될 수 있다" />
      <BulletedList content="View.props.onResponderMove: (evt) => {} - (유저가 손가락을 움직이고 있음)" />
      <BulletedList content="View.props.onResponderRelease: (evt) => {} -터치가 끝날 때 실행됨, 즉 touchUp" />
      <BulletedList content="View.props.onResponderTerminationRequest: (evt) => true - 다른 요소가 응답자가 되고 싶어 하는 경우. 이 뷰가 응답자를 해제해야하는지 → 해제를 허용하려면 true를 리턴한다." />
      <BulletedList content="View.props.onResponderTerminate: (evt) => {} - 뷰로부터 응답자를 가져왔다. onResponderTerminationRequest의 호출 후에 다른 뷰로 응답자가 넘어가거나, 물어보지 않고 OS로 넘어갈 수 있다. (iOS의 제어 센터 / 알림 센터에서 발생)" />
      <H3 content="evt 는 다음과 같은 형태의 synthetic 터치 이벤트이다. " />
      <H3 content="nativeEvent" />
      <BulletedList content="changedTouches - 마지막 이벤트 이후로 변화가 발생한 모든 터치 이벤트들의 배열" />
      <BulletedList content="identifier - The ID of the touch (터치 아이디)" />
      <BulletedList content="locationX - 터치의 X position, element기준 상대적 위치" />
      <BulletedList content="locationY - 터치의 Y position, element기준 상대적 위치" />
      <BulletedList content="pageX - 터치의 X position, 루트 엘리먼트 기준" />
      <BulletedList content="pageY - 터치의 Y position, 루트 엘리먼트 기준" />
      <BulletedList content="target - 터치 이벤트를 받는 엘리먼트의 node 아이디" />
      <BulletedList content="timestamp - 터치에 대한 time identifier, 속도 계산에 유용함" />
      <BulletedList content="touches - 현재 스크린 위의 모든 터치들의 배열)" />
      <H2 content="Capture ShouldSet Handlers" />
      <H4 content="onStartShouldSetResponder 와 onMoveShouldSetResponder 는 가장 안쪽의 노드가 먼저 호출된 위치에서 버블링 패턴으로 호출된다. 이것은 여러 개의 뷰가 ShouldSetResponder에 대해 true를 리턴하는 경우, 가장 안쪽의 컴포넌트가 응답자가 된다는 것을 의미한다. " />
      <H4 content="이러한 방식은 모든 컨트롤과 버튼을 사용할 수 있도록 하기 때문에, 대부분의 케이스에서는 바람직하게 동작한다. " />
      <H4 content="그러나, 간혹 부모를 응답자로 만들고 싶은 경우에는 capture phase를 사용해 처리할 수 있다. " />
      <H4 content="응답 시스템이 가장 안쪽 컴포넌트로부터 버블링되어 올라가기 전에, 먼저onShouldSetResponderCapture를 실행하면서 capture phase를 할 것이다. 그래서 만약 부모 뷰가  자식 뷰가 터치 스타트 지점에서 응답자가 되지 못하게 하고 싶다면, 부모 뷰는 true를 리턴하는 onStartShouldResponderCapture를 가지고 있어야 한다. " />
      <BulletedList content="View.props.onStartShouldSetResponderCapture: (evt) => true," />
      <BulletedList content="View.props.onMoveShouldSetResponderCapture: (evt) => true," />
      <H2 content="PanResponder" />
      <H4 content="더 높은 수준의 제스쳐 해석은 PanResponder 확인." />
    </ScrollView>
  );
}

//#region CODE
const Code1 =
"<Button\\\
  onPress={() => {\\\
    alert('You tapped the button!');\\\
  }}\\\
  title=\"Press Me\"\\\
/>"
const Code2 =
"import React, { Component } from 'react';\\\
import { Button, StyleSheet, View } from 'react-native';\\\
  export default class ButtonBasics extends Component {\\\
  _onPressButton() {\\\
    alert('You tapped the button!')\\\
  }\\\
\\\
  render() {\\\
    return (\\\
      <View style={styles.container}>\\\
        <View style={styles.buttonContainer}>\\\
          <Button\\\
            onPress={this._onPressButton}\\\
            title=\"Press Me\"\\\
          />\\\
        </View>\\\
        <View style={styles.buttonContainer}>\\\
          <Button\\\
            onPress={this._onPressButton}\\\
            title=\"Press Me\"\\\
            color=\"#841584\"\\\
          />\\\
        </View>\\\
        <View style={styles.alternativeLayoutButtonContainer}>\\\
          <Button\\\
            onPress={this._onPressButton}\\\
            title=\"This looks great!\"\\\
          />\\\
          <Button\\\
            onPress={this._onPressButton}\\\
            title=\"OK!\"\\\
            color=\"#841584\"\\\
          />\\\
        </View>\\\
      </View>\\\
    );\\\
  }\\\
}\\\
\\\
const styles = StyleSheet.create({\\\
  container: {\\\
   flex: 1,\\\
   justifyContent: 'center',\\\
  },\\\
  buttonContainer: {\\\
    margin: 20\\\
  },\\\
  alternativeLayoutButtonContainer: {\\\
    margin: 20,\\\
    flexDirection: 'row',\\\
    justifyContent: 'space-between'\\\
  }\\\
});"

const Code3=
"import 'react-native-gesture-handler';\\\
import * as React from 'react';\\\
import { NavigationContainer } from '@react-navigation/native';\\\
\\\
const App = () => {\\\
  return (\\\
    <NavigationContainer>\\\
      {/* Rest of your app code */}\\\
    </NavigationContainer>\\\
  );\\\
};\\\
\\\
export default App;"

const Code4=
"import * as React from 'react';\\\
import { NavigationContainer } from '@react-navigation/native';\\\
import { createStackNavigator } from '@react-navigation/stack';\\\
\\\
const Stack = createStackNavigator();\\\
\\\
const MyStack = () => {\\\
  return (\\\
    <NavigationContainer>\\\
      <Stack.Navigator>\\\
        <Stack.Screen\\\
          name=\"Home\"\\\
          component={HomeScreen}\\\
          options={{ title: 'Welcome' }}\\\
        />\\\
        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\\\
      </Stack.Navigator>\\\
    </NavigationContainer>\\\
  );\\\
};"

const Code5=
"const HomeScreen = ({ navigation }) => {\\\
  return (\\\
    <Button\\\
      title=\"Go to Jane's profile\"\\\
      onPress={() =>\\\
        navigation.navigate('Profile', { name: 'Jane' })\\\
      }\\\
    />\\\
  );\\\
};\\\
const ProfileScreen = ({ navigation, route }) => {\\\
  return <Text>This is {route.params.name}'s profile</Text>;\\\
};"

const Code6=
"import React, { useRef, useEffect } from 'react';\\\
import { Animated, Text, View } from 'react-native';\\\
\\\
const FadeInView = (props) => {\\\
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0\\\
\\\
  useEffect(() => {\\\
    Animated.timing(\\\
      fadeAnim,\\\
      {\\\
        toValue: 1,\\\
        duration: 10000,\\\
      }\\\
    ).start();\\\
  }, [fadeAnim])\\\
\\\
  return (\\\
    <Animated.View                 // Special animatable View\\\
      style={{\\\
        ...props.style, //=> props로 받은 style 배열들로 바꿔줌(a=[2,3] => ...a == 2,3)\\\
        opacity: fadeAnim,         // Bind opacity to animated value\\\
      }}\\\
    >\\\
      {props.children}\\\
    </Animated.View>\\\
  );\\\
}\\\
\\\
// You can then use your `FadeInView` in place of a `View` in your components:\\\
export default () => {\\\
  return (\\\
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>\\\
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>\\\
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>\\\
      </FadeInView>\\\
    </View>\\\
  )\\\
}"

const Code7=
"Animated.timing(this.state.xPosition, {\\\
    toValue: 100,\\\
    easing: Easing.back(),\\\
    duration: 2000\\\
  }).start();"

const Code8=
"  Animated.sequence([\\\
  // decay, then spring to start and twirl\\\
  Animated.decay(position, {\\\
    // coast to a stop\\\
    velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release\\\
    deceleration: 0.997\\\
  }),\\\
  Animated.parallel([\\\
    // after decay, in parallel:\\\
    Animated.spring(position, {\\\
      toValue: { x: 0, y: 0 } // return to start\\\
    }),\\\
    Animated.timing(twirl, {\\\
      // and twirl\\\
      toValue: 360\\\
    })\\\
  ])\\\
]).start(); // start the sequence group"

const Code9=
"const a = new Animated.Value(1);\\\
const b = Animated.divide(1, a);\\\
\\\
Animated.spring(a, {\\\
  toValue: 2\\\
}).start();"

const Code10=
"value.interpolate({\\\
  inputRange: [0, 1],\\\
  outputRange: [0, 100]\\\
});"
const Code11=
"style={{\\\
    opacity: this.state.fadeAnim, // Binds directly\\\
    transform: [{\\\
      translateY: this.state.fadeAnim.interpolate({\\\
        inputRange: [0, 1],\\\
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0\\\
      }),\\\
    }],\\\
  }}"
const Code12=
"value.interpolate({\\\
  inputRange: [-300, -100, 0, 100, 101],\\\
  outputRange: [300, 0, 1, 0, 0]\\\
});"
const Code13=
"Input | Output\\\
------|-------\\\
  -400|    450\\\
  -300|    300\\\
  -200|    150\\\
  -100|      0\\\
   -50|    0.5\\\
     0|      1\\\
    50|    0.5\\\
   100|      0\\\
   101|      0\\\
   200|      0"
const Code14=
"value.interpolate({\\\
  inputRange: [0, 360],\\\
  outputRange: ['0deg', '360deg']\\\
});"
//#endregion CODE
const Code15 = '';
// Animated.spring(follower, { toValue: leader }).start();
// Animated.timing(opacity, {
//   toValue: pan.x.interpolate({
//     inputRange: [0, 300],
//     outputRange: [1, 0]
//   })
// }).start();
const Code16 = '';
// onScroll = {
//   Animated.event(
//     // scrollX = e.nativeEvent.contentOffset.x
//     [{
//       nativeEvent: {
//         contentOffset: {
//           x: scrollX
//         }
//       }
//     }]
//   )
// }
const Code17 = '';
// import React, { useRef } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   Text,
//   StyleSheet,
//   View,
//   ImageBackground,
//   Animated,
//   useWindowDimensions
// } from "react-native";

// const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

// const App = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const { width: windowWidth } = useWindowDimensions();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollContainer}>
//         <ScrollView
//           horizontal={true}
//           style={styles.scrollViewStyle}
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={Animated.event([
//             {
//               nativeEvent: {
//                 contentOffset: {
//                   x: scrollX
//                 }
//               }
//             }
//           ])}
//           scrollEventThrottle={1}
//         >
//           {images.map((image, imageIndex) => {
//             return (
//               <View
//                 style={{ width: windowWidth, height: 250 }}
//                 key={imageIndex}
//               >
//                 <ImageBackground source={{ uri: image }} style={styles.card}>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.infoText}>
//                       {"Image - " + imageIndex}
//                     </Text>
//                   </View>
//                 </ImageBackground>
//               </View>
//             );
//           })}
//         </ScrollView>
//         <View style={styles.indicatorContainer}>
//           {images.map((image, imageIndex) => {
//             const width = scrollX.interpolate({
//               inputRange: [
//                 windowWidth * (imageIndex - 1),
//                 windowWidth * imageIndex,
//                 windowWidth * (imageIndex + 1)
//               ],
//               outputRange: [8, 16, 8],
//               extrapolate: "clamp"
//             });
//             return (
//               <Animated.View
//                 key={imageIndex}
//                 style={[styles.normalDot, { width }]}
//               />
//             );
//           })}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   scrollContainer: {
//     height: 300,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   card: {
//     flex: 1,
//     marginVertical: 4,
//     marginHorizontal: 16,
//     borderRadius: 5,
//     overflow: "hidden",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   textContainer: {
//     backgroundColor: "rgba(0,0,0, 0.7)",
//     paddingHorizontal: 24,
//     paddingVertical: 8,
//     borderRadius: 5
//   },
//   infoText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   normalDot: {
//     height: 8,
//     width: 8,
//     borderRadius: 4,
//     backgroundColor: "silver",
//     marginHorizontal: 4
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;
const Code18 = '';
// onPanResponderMove = {
//   Animated.event(
//     [null, // ignore the native event
//       // extract dx and dy from gestureState
//       // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'
//       { dx: pan.x, dy: pan.y }
//     ])
// }
const Code19 = '';
// import React, { useRef } from "react";
// import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// const App = () => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event([
//         null,
//         { dx: pan.x, dy: pan.y }
//       ]),
//       onPanResponderRelease: () => {
//         Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
//       }
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag & Release this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }]
//         }}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: "bold"
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: "blue",
//     borderRadius: 5
//   }
// });

// export default App;

const Code20 = '';
// Animated.timing(this.state.animatedValue, {
//   toValue: 1,
//   duration: 500,
//   useNativeDriver: true // <-- Add this
// }).start();

const Code21 = '';
{/* <Animated.ScrollView // <-- Use the Animated ScrollView wrapper
  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
  onScroll={Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: this.state.animatedValue }
        }
      }
    ],
    { useNativeDriver: true } // <-- Add this
  )}>
  {content}
</Animated.ScrollView> */}

const Code22 = '';
{/* <Animated.View
  style={{
    transform: [
      { scale: this.state.scale },
      { rotateY: this.state.rotateY },
      { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS
    ]
  }}
/> */}
const Code23 = '';
// import React from 'react';
// import {
//   NativeModules,
//   LayoutAnimation,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
// } from 'react-native';

// const { UIManager } = NativeModules;

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     this.setState({ w: this.state.w + 15, h: this.state.h + 15 })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
//         <TouchableOpacity onPress={this._onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
