export const text1_1 = `
# 성능 개요
웹 뷰 기반의 툴 대신 React Native를 사용하는 이유는 초당 60 프레임을 달성하고 앱이 네이티브처럼 느껴지고 보여지게 만들기 위해서입니다. 가능하다면, React Native가 올바른 작업을 수행하여 성능 최적화 대신 앱에 집중할 수 있도록 돕고 싶지만, 아직 제대로 파악되지 않은 영역도 있고, React Native가 최적화를 위한 최선의 방법을 결정하지 못하는 영역도 있으므로 때로는 수동 개입이 필요합니다. React Native는 아주 매끄러운 UI 성능을 기본적으로 제공하기 위해 최선을 다하고 있지만, 그것이 불가능할 때도 있습니다. 

이 가이드는 [성능 문제를 해결](https://reactnative.dev/docs/profiling)하는 데 도움이 되는 몇 가지 기본 사항을 알려주고,  [문제의 일반적인 원인과 해결 방법](https://reactnative.dev/docs/performance#common-sources-of-performance-problems)에 대해 설명합니다.


## 프레임에 대해 알아야 할 사항
조부모 세대는 영화를 "[움직이는 그림](https://www.youtube.com/watch?v=F1i40rnpOsA)"이라고 불렀는데, 비디오에서의 실제 동작은 정적인 이미지를 일정한 속도로 빠르게 변화시킴으로써 만들어진 환상입니다. 우리는 이 각각의 이미지를 프레임이라고 부릅니다. 초당 표시되는 프레임 수는 비디오(또는 사용자 인터페이스)가 얼마나 매끄럽고 사실적인지에 직접적인 영향을 끼칩니다. iOS 장치는 초당 60 개의 프레임을 표시하며, 사용자와 UI 시스템이 화면에서 볼 수 있는 정적 이미지(프레임)을 생성하는 데 필요한 모든 작업은 16.67ms 동안 수행됩니다. 할당된 16.67ms 내에 프레임 생성에 필요한 작업을 수행할 수 없는 경우 "프레임 수를 떨어뜨리면" UI는 반응이 없는 것처럼 보일 것입니다. 

이 부분이 약간 혼동된다면 앱에서 개발자 메뉴를 열고 \`Show Perf Monitor\` 를 확인하면 됩니다. 이를 통해 두 가지 프레임 속도가 있다는 것을 알 수 있습니다. 

![](https://images.velog.io/images/leejiwonn/post/39bb959e-ddd2-4f7e-9926-86f55474950f/image.png)

### JS 프레임 속도 (JavaScript 스레드)
대부분의 React Native 애플리케이션의 경우, 비즈니스 로직은 Javascript 스레드에서 실행됩니다. Javascript 스레드에서 React 애플리케이션이 동작하고, API 호출이 만들어지고, 그리고 터치 이벤트가 처리됩니다. (모든 것이 잘 진행되는 경우) 네이티브 지원 뷰로의 업데이트는 일괄 처리되어 프레임 마감 전, 이벤트 루프의 각 반복이 끝날 때 네이티브 측으로 전송됩니다. Javascript 스레드가 프레임에 응답하지 않는 경우 삭제된 프레임으로 간주됩니다. 예를 들어, 복잡한 애플리케이션의 루트 컴포넌트에서 \`this.setState\` 를 호출하면 계산 비용이 큰 컴포넌트의 하위 트리를 다시 렌더링하는 데 200ms가 걸리고 12개의 프레임이 손실될 수 있습니다. Javascript에 의해 제어되는 모든 애니메이션은 그동안 정지한 것처럼 보일 것입니다. 100ms 이상 걸릴 경우 사용자가 이것을 느낄 수 있습니다. 

위와 같은 현상은 \`Navigator\` 전환 중에 자주 발생합니다. 새로운 경로를 보낼 때, Javascript 스레드는 적절한 명령을 네이티브 측에 전송하여 \`backing views\` 를 생성하기 위해 필요한 모든 컴포넌트를 렌더링해야 합니다. 여기서 수행하는 작업은 보통 몇 프레임에 걸쳐 나타나기 때문에 버벅거림을 일으킬 수 있습니다. 전환은 Javascript 스레드 에 의해 제어되기 때문입니다. 때로는 컴포넌트가 \`conponentDidMount\` 에 대해 추가 작업을 수행하는 경우도 있으며, 이로 인해 전환 과정에서 두 번째 버벅거림이 발생할 수 있습니다. 

또 다른 예는 터치(touch)에 응답하는\`TouchableOpacity\` 입니다. 예를 들어 Javascript 스레드에서 여러 프레임에 걸쳐 작업을 수행하는 경우 응답하는 데 지연이 발생할 수 있습니다. 이는 Javascript 스레드가 사용 중이라 메인 스레드에서 전송된 터치 이벤트를 처리할 수 없기 때문입니다. 따라서 \`TouchableOpacity\` 는 터치 이벤트에 반응할 수 없으며, 네이티브 뷰에 불투명도를 조정하도록 명령할 수 없습니다.

### UI 프레임 속도 (메인 스레드)
많은 사람들이 \`NavigatorIOS\`가 \`Navigator\`보다 성능이 더 뛰어나다고 합니다. 그 이유는 전환을 위한 애니메이션이 전적으로 메인 스레드에서 이루어지므로, Javascript 스레드의 프레임 드롭에 의해 중단되지 않기 때문입니다. 

마찬가지로, \`ScrollView\` 는 메인 스레드에 존재하므로 Javascript 스레드가 잠겨 있을 때도 \`ScrollView\` 를 통해 위아래로 즐겁게 스크롤할 수 있습니다. 스크롤 이벤트는 JS 스레드에 전달되지만, 스크롤이 발생하는 데 JS 스레드의 수신이 필요하지는 않습니다. 

## 성능 문제의 일반적인 원인

### 개발 모드에서 실행 (\`dev=true\`)
개발 모드에서 실행할 경우 Javascript 스레드의 성능이 크게 저하됩니다. 이는 피할 수 없는 일입니다. 좋은 경고 및 오류 메시지(propTypes 확인 및 기타 다양한 메시지)를 제공하려면, 런타임에서 훨씬 더 많은 작업을 수행해야 합니다. 항상 [\`release builds\`](https://reactnative.dev/docs/running-on-device#building-your-app-for-production)에서 성능을 테스트해야 합니다.

### \`console.log\`문 사용하기
번들 앱을 실행할 때, 이러한 명령문은 Javascript 스레드에 큰 병목 현상을 일으킬 수 있습니다. 여기에는 [\`redux-logger\`](https://github.com/LogRocket/redux-logger) 와 같은 디버깅 라이브러리의 호출이 포함되므로, 번들링하기 전에 \`console.*\` 호출을 제거해야 합니다. 모든 \`console.*\` 호출을 제거하는 [\`babel plugin\`](https://babeljs.io/docs/en/babel-plugin-transform-remove-console/)을 사용할 수도 있습니다. 먼저 \`npm i babel-plugin-transform-remove-console --save-dev\` 를 사용해 설치한 다음, 프로젝트 디렉토리에서 \`.babelrc\` 파일을 아래와 같이 편집해야 합니다. 

\`\`\`jsx
{
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
\`\`\`

그러면 프로젝트의 배포 버전에 있는 모든 \`console.*\` 호출이 자동으로 제거됩니다. 

### \`ListView\` 초기 렌더링 속도가 너무 느리거나 큰 리스트일 경우 스크롤 성능이 좋지 않음
[\`FlatList\`](https://reactnative.dev/docs/flatlist)또는 [\`SectionList\`](https://reactnative.dev/docs/sectionlist) 컴포넌트를 대신 사용하세요. API를 단순화하는 것 외에도, 새로운 리스트 컴포넌트는 성능이 대폭 향상되었으며, 주요 컴포넌트는 행 수에 관계없이 거의 일정한 메모리가 사용됩니다. 

[\`FlatList\`](https://reactnative.dev/docs/flatlist) 가 느리게 렌더링되는 경우, 렌더링된 항목의 측정을 건너뛰고 렌더링 속도를 최적화하도록 [\`getItemLayout\`](https://reactnative.dev/docs/flatlist#getitemlayout)을 구현했는지 확인해야 합니다. 

### 거의 변경되지 않는 뷰를 다시 렌더링 할 때 JS FPS가 급락함
\`ListView\` 를 사용하는 경우, 행을 다시 렌더링해야 하는지의 여부를 빠르게 결정하여 많은 작업을 줄일 수 있는 \`rowHasChanged\` 기능을 반드시 제공해야 합니다. 변경 불가능한 데이터 구조를 사용하는 경우 참조 동등성 검사만 있으면 됩니다. 

마찬가지로 \`shouldComponentUpdate\` 를 구현하고 컴포넌트를 다시 렌더링할 정확한 조건을 표시할 수 있습니다. 만약 렌더링 함수의 반환 값이 \`props\` 및 \`state\` 에 전적으로 의존하는 pure component를 사용하는 경우 \`PureComponent\` 를 활용하여 이 작업을 수행할 수 있습니다. 다시 한 번 말하지만, 불변의 데이터 구조는 이를 빠르게 저장하는 데 유용합니다. 많은 객체 목록의 깊은 비교를 수행해야 하는 경우, 전체 컴포넌트를 다시 렌더링하는 것이 더 빠를 수 있고, 확실히 더 적은 코드를 요구할 것입니다. 

### Javascript 스레드에서 많은 작업을 동시에 수행하기 때문에 JS 스레드 FPS가 떨어짐
"Slow Navigator transitions (느린 네비게이터 전환)"은 가장 일반적인 증상이지만, 이러한 현상은 다른 경우에도 발생할 수 있습니다.\`InteractionManager\` 를 사용하는 것이 좋은 방법일 수 있지만, 사용자 경험 비용이 너무 높아 애니메이션 도중 작업을 지연시킬 수 없는 경우라면 \`LayoutAnimation\` 을 고려해보는 것이 좋습니다. 

\`Animated API\` 는 현재 [\`useNativeDriver: true\`](https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated#how-do-i-use-this-in-my-app) 를 사용하도록 설정하지 않은 경우 JavaScript 스레드에서 필요에 따라 키 프레임을 계산합니다. 반면 \`LayoutAnimation\` 은 \`Core Amination\` 을 활용하고 JS 스레드와 메인 스레드 프레임 드롭의 영향을 받지 않습니다. 

이것을 사용한 한 가지 사례는 모달(위쪽에서 아래로 미끄러져 내려와 반투명 오버레이에서 페이딩)로 애니메이션을 하는 동시에 여러 네트워크 요청에 대한 응답을 받고, 모달의 내용을 렌더링하고, 모달이 열린 뷰를 업데이트하는 것입니다. \`LayoutAnimation\` 을 사용하는 방법에 대한 자세한 내용은 애니메이션 가이드를 참조하세요. 

주의사항: 
- \`LayoutAnimation\` 은 fire-and-forget 애니메이션 ("정적" 애니메이션) 에서만 작동합니다. 중단이 가능해야 하는 경우, \`Animated\`를 사용해야 할 것입니다. 

### 화면에서 뷰를 이동하면 (스크롤링, 변환, 회전) UI 스레드 FPS가 손실됨 

투명 배경이 있는 텍스트가 이미지 상단에 있거나, 각 프레임에서 뷰를 다시 그릴 때 알파 구성이 필요한 다른 상황이 발생할 경우에 특히 그렇습니다. \`shouldRasterizeIOS\` 또는 \`renderToHardwareTextAndroid\` 를 활성화하면 크게 도움이 됩니다. 

단, 남용하지 않도록 주의해야 합니다. 그렇지 않으면 메모리 사용량이 초과될 수 있습니다. 이러한 props 를 사용할 때는 성능과 메모리 사용량을 프로파일링해야 합니다. 뷰를 더 이상 이동하지 않는 경우에는 이 속성을 해제합니다. 

### 이미지의 크기를 애니메이션하면 UI 스레드 FPS 가 떨어짐

iOS에서는 이미지 컴포넌트의 너비 또는 높이를 조정할 때마다 기존 이미지에서 다시 잘라서 크기가 조정됩니다. 이것은 특히 큰 이미지의 경우, 매우 비용이 높을 수 있습니다. 그렇기 때문에 이 방법 대신 \`transform: [{scale}]\` 스타일 속성을 사용하여 크기를 애니메이션화하면 좋습니다. 이미지를 눌러 전체 화면으로 확대할 때가 이것을 사용할 수 있는 하나의 예가 되겠습니다. 

### TouchableX 뷰가 응답하지 않음

경우에 따라, 터치에 반응하는 컴포넌트의 불투명도 또는 하이라이트를 조정하는 동일한 프레임에서 동작을 수행하면, \`onPress\` 함수가 반환될 때까지 해당 효과가 나타나지 않을 수 있습니다. \`onPress\` 에서 \`setState\` 를 수행하여 많은 작업이 발생하면서 프레임이 몇 개 손실되는 경우 이러한 문제가 발생할 수 있습니다. 이에 대한 해결 방법은,\`requestAnimationFrame\` 에서 \`onPress\` 핸들러 안에 있는 모든 작업을 감싸는 것입니다. 

\`\`\`jsx
handleOnPress() {
  requestAnimationFrame(() => {
    this.doExpensiveAction();
  });
}
\`\`\`

### 느린 네비게이터 전환 (Slow navigator transitions)
위에서 언급한 대로 \`Navigator\` 애니메이션은 JavaScript 스레드에 의해 제어됩니다. "오른쪽에서 밀어넣는" 장면 전환을 상상해보세요. 각 프레임에서, 새로운 장면은 오른쪽에서 왼쪽으로 이동하며, 화면을 벗어나기 시작하고(x-offset이 320이라고 가정), 최종적으로 x-offset이 0인 상태로 새로운 장면이 정착합니다. 이 트랜지션 동안 각 프레임은 새로운 x-offset 을 메인 스레드로 보내야 합니다. JavaScript 스레드가 잠겨 있으면 이 작업을 수행할 수 없으므로, 해당 프레임에서 업데이트가 발생하지 않으며 애니메이션이 버벅거립니다. 

이에 대한 한 가지 해결책은 Javascript 기반 애니메이션을 메인 스레드로 오프로드 할 수 있게 하는 것입니다. 위와 동일한 작업을 이 접근 방식으로 수행한다면, 전환을 시작할 때 새로운 씬에 대한 모든 x-offset 리스트를 계산하여 이를 메인 스레드로 보내 최적화 된 방식으로 실행할 수 있습니다. 이제 JavaScript 스레드는 이러한 책임에서 벗어났기 때문에, 씬을 렌더링하는 동안 프레임을 몇 개 떨어뜨려도 큰 문제가 되지 않습니다. 예쁜 화면 전환에 정신이 팔려 아마 눈치채지도 못할 것입니다. 

이를 해결하는 것은 새로운 [React Navigation](https://reactnative.dev/docs/navigation) 라이브러리의 주요 목표 중 하나입니다. React Navigation의 뷰는 네이티브 컴포넌트와 [\`Animated\`](https://reactnative.dev/docs/animated) 라이브러리를 사용하여 메인 스레드에서 실행되는 60 FPS 애니메이션을 제공합니다. 
`;

export const text2_1 = `
# Flatlist 최적화 설정

## 용어

- **VirtualizedList** : \`FlatList\` 뒤에 있는 컴포넌트 (Reactive Native가 구현한 [가상 리스트](https://bvaughn.github.io/react-virtualized/#/components/List))
- **메모리 소모 (Memory consumption)** : 리스트가 메모리를 얼마나 차지하고 있는지에 대한 정보. 많이 소모하면 앱크래시가 일어날 수 있음.
- **응답성 (Responsiveness)** : 애플리케이션에 사용자 인터랙션에 응답하는 정도. 예를들어 낮은 응답성은 컴포넌트를 터치하고 응답하는데 기다림이 필요함. 응답성이 높다면 기대하는대로 즉시 반응할 것임.
- **빈 영역 (Blank areas)** : \`VirtualizedList\`가 아이템들을 빠르게 렌더하지 못한다면, 리스트에 컴포넌트가 그려지지 않아 빈 영역으로 보이는 곳이 생길 것임.
- **뷰포트 (Viewport)** : 콘텐츠가 보이는 공간으로 px 단위로 렌더됨.
- **윈도우 (Window)** : 아이템들이 마운트되어야 하는 공간으로 대체로 뷰포트보다 클 것임. 


## Props
\`FlatList\` 의 성능을 향상시키는 데 도움이 되는 Props 목록을 소개합니다. 

### removeClippedSubviews

| TYPE | DEFAULT |
|---|---|
| Booolean | False |

값이 \`true\`라면, 뷰 포트 밖에 있는 뷰는 네이티브 뷰 계층에서 분리됩니다. 

**장점**: 뷰포트 외부의 뷰들을 네이티브 렌더링 및 그리기 탐색에서 제외함으로써 메인 스레드에서의 시간 소모를 줄이고, 그에 따라 프레임 드롭 리스크를 줄입니다. 

**단점**: 이러한 구현에는 콘텐츠가 사라지는 것(iOS에서 주로 나타남)과 같은 버그가 있을 수 있음에 유의해야 합니다. 특히 transform이나 absolute position으로 복잡한 작업을 하는 경우 버그가 발생할 수 있습니다. 또한 이 옵션이 메모리를 크게 절약하지 않는다는 점을 유의해야 합니다. 뷰가 메모리에서 해제되는 것이 아니라 단지 분리되는 것이기 때문입니다. 

### maxToRenderPerBatch

| TYPE | DEFAULT |
|---|---|
| Number | 10 |

\`FlatList\` 컴포넌트로 전달될 수 있는\`VirtualizedList\` 의 prop입니다. 이 옵션은 배치 당 몇개의 아이템을 렌더링할지(매 스크롤마다 렌더링될 다음 아이템 묶음) 조절합니다. 

**장점**: 값을 크게 설정할수록 스크롤할때 시각적으로 빈 영역을 줄입니다. (화면이 채워져 있는 빈도를 높입니다. )

**단점**: 배치 당 아이템 수가 늘어나면, 더 길어진 Javascript 실행시간이 잠재적으로 press와 같은 다른 이벤트 처리를 차단하여 응답성을 떨어뜨립니다. 

### updateCellsBatchingPeriod

| TYPE | DEFAULT |
|---|---|
| Number | 50 |

\`maxToRenderPerBatch\` 옵션이 배치 당 렌더링해야할 아이템 수를 지정한다면, \`updateCellsBatchingPeriod\`은 \`VirtualizedList\` 배치 당 지연시킬 시간(컴포넌트가 창 항목을 렌더링하는 빈도)을 ms 단위로 지정합니다. 

**장점**: \`maxToRenderPerBatch\` 옵션과 조합해서 덜 빈번한 배치에서 더 많은 아이템을 렌더링하거나 더 빈번한 배치에서 더 적은 아이템을 렌더링 할 수 있습니다. 

**단점**: 배치 빈도가 낮으면 빈 영역이 발생할 수 있고, 배치 빈도가 높으면 응답성 문제가 발생할 수 있습니다.

### initialNumToRender

| TYPE | DEFAULT |
|---|---|
| Number | 10 |

초기에 렌더링 할 아이템의 개수.

**장점**: 모든 디바이스에 대해 화면을 덮을 아이템의 정확한 수를 정의합니다. 이것은 초기 렌더링의 성능을 크게 향상시킬 수 있습니다. 

**단점**: \`initialNumToRender\` 값을 낮게 설정한 경우, 특히 초기 렌더링에서 뷰포트를 덮기에 너무 작은 경우 빈 영역이 발생할 수 있습니다. 

### windowSize

| TYPE | DEFAULT |
|---|---|
| Number | 21 |

여기서 전달된 숫자는 1이 뷰포트 높이와 동일한 측정 단위입니다. 기본값은 21 (뷰포트 위에 10개, 아래에 10개, 그 사이에 1개)입니다. 

**장점**: \`windowSize\`가 클수록 스크롤하는 동안 빈 영역이 표시 될 가능성이 줄어 듭니다. 반면에 \`windowSize\`가 작을수록 동시에 마운트되는 아이템 수가 줄어들어 메모리가 절약됩니다.

**단점**: \`windowSize\`가 큰 경우 더 많은 메모리 소비가 발생합니다. \`windowSize\`가 낮으면 빈 영역이 보일 가능성이 더 커집니다. 


## List items
아래는 리스트 아이템 컴포넌트에 관한 몇 가지 팁입니다. 리스트 아이템은 리스트의 핵심이므로, 성능이 좋아야 합니다. 

### 기본적인 컴포넌트를 사용 (Use basic components)
컴포넌트가 복잡할수록 렌더링 속도가 느려집니다. 리스트 아이템에서는 많은 로직과 중첩을 피해야 합니다. 앱에서 리스트 아이템 컴포넌트를 여러 번 재사용해야하는 경우, 큰 리스트에 대해서만 컴포넌트를 만들고 가능한 한 적은 로직과 중첩으로 구성하는 것이 좋습니다. 

### 가벼운 컴포넌트를 사용 (Use light components)
컴포넌트가 무거울수록 렌더링 속도가 느려집니다. 용량이 큰 이미지를 피해야 합니다. (이미지를 자르거나 썸네일으로 가능한 작게 만들어 리스트 아이템으로 사용하세요). 디자인 팀과 대화해 리스트에서 가능한 한 적은 효과와 상호 작용 및 정보를 사용합니다. 이러한 것들은 아이템의 세부 사항에 표시합니다. 

### shouldComponentUpdate 사용
컴포넌트에 대한 업데이트 검증을 구현합니다. React의 \`PureComponent\` 는 [\`shouldComponentUpdate\`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) 을 얉은 비교(shallow comparison)로 구현합니다.  여기에서는 모든 Props를 확인해야하므로 비용이 큽니다. 약간의 성능 향상을 원한다면, 리스트 컴포넌트를 만들 때 변경될 가능성이 있는 Props만 확인하는 엄격한 규칙을 정해야 합니다. 만약 리스트의 아이템들이 충분히 기본적이라면 다음과 같이 할 수도 있습니다. 

\`\`\`jsx
shouldComponentUpdate() {
    return false
}
\`\`\`

### 캐시된 최적화 이미지 사용 (Use cached optimized images)

더 성능이 좋은 이미지를 사용하고 싶다면 커뮤니티 패키지(예: [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) from [@DylanVann](https://github.com/DylanVann) )를 이용할 수 있습니다. 리스트에 있는 모든 이미지는 \`new Image()\` 인스턴스입니다. \`loaded\` Hook에 더 빨리 도달할수록 JavaScript 스레드는 더 빨리 다시 해제됩니다. 

### getItemLayout 사용

만약 리스트 아이템들의 높이가 모두 동일하다면 (혹은 가로 리스트인 경우 너비가 모두 같다면) [getItemLayout](https://reactnative.dev/docs/flatlist#getitemlayout) Props 를 주어 \`FlatList\`가 비동기로 레이아웃을 계산할 필요가 없게 만들 수 있습니다. 이는 매우 바람직한 최적화 기술입니다. 

만약 컴포넌트가 동적인 크기를 갖지만 정말로 성능이 필요하다면, 디자인팀에 요청해서 새롭게 디자인 하는 것을 고려해보는 것이 좋습니다. 

### keyExtractor 혹은 key 사용
\`FlatList\` 컴포넌트에 [\`keyExtractor\`](https://reactnative.dev/docs/flatlist#keyextractor) 를 설정할 수 있습니다. 이 Props는 캐싱에 사용되며 아이템 재정렬을 추적하기 위한 React \`key\`로 사용됩니다. 

\`key\` Props를 아이템 컴포넌트에 설정할 수도 있습니다.


### renderItem에 익명함수를 사용을 피해야 함
\`renderItem\` 함수를 render 함수 밖으로 빼내서 매 렌더마다 함수를 다시 생성하는 것을 피해야 합니다. 

\`\`\`jsx
renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);

render(){
    // ...

    <FlatList
        data={items}
        renderItem={renderItem}
    />

    // ...
}
\`\`\`
`;

export const text3_1 = `
# RAM Bundles and Inline Requires
규모가 큰 앱의 경우 RAM(Random Access Module) 번들 형식을 고려할 수 있으며, 인라인 사용이 요구됩니다. 이 기능은 앱의 일반적인 사용 중에는 열리지 않을 화면 수가 많은 앱에 유용합니다. 일반적으로 시작 후 한동안 필요하지 않은 많은 양의 코드가 있는 앱에 유용하다고 볼 수 있습니다. 예를 들어, 앱에 복잡한 프로필 화면이나 덜 사용되는 기능이 포함되어 있지만 대부분의 세션에는 업데이트를 위해 앱의 메인 화면을 방문하는 것만 포함되는 경우, RAM 형식을 사용하고 (실제로 사용될 때) 이러한 기능과 화면을 인라인으로 요구함으로써 번들 로딩을 최적화 할 수 있습니다. 

## Loading JavaScript
\`react-native\` 가 JS 코드를 실행하기 전에, 해당 코드를 메모리에 로드하고 파싱해야 합니다. 표준 번들을 사용하여 50mb 번들을 로드하는 경우, 50mb를 모두 로드하고 파싱해야 실행이 됩니다. RAM 번들의 최적화는 50mb 중 시작할 때 필요한 일부만 로드할 수 있고, 필요한 섹션이 있을 때마다 점진적으로 더 많은 번들을 로드해나가는 것을 의미합니다. 

## Inline Requires
인라인에서는 해당 파일이 실제로 필요할 때까지 모듈이나 파일의 요구 사항을 지연시켜야 합니다. 기본적인 예시는 다음과 같습니다. 

### VeryExpensive.js
\`\`\`jsx
import React, { Component } from 'react';
import { Text } from 'react-native';
// ... 비용이 높은 몇몇 모듈 import

// 이 명령이 언제 실행되는지 확인하기 위해 파일 단위의 로그가 필요할 때
console.log('VeryExpensive component loaded');

export default class VeryExpensive extends Component {
  // 아주 많은 코드
  render() {
    return <Text>Very Expensive Component</Text>;
  }
}
\`\`\`

### Optimized.js

\`\`\`jsx
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

let VeryExpensive = null;

export default class Optimized extends Component {
  state = { needsExpensive: false };

  didPress = () => {
    if (VeryExpensive == null) {
      VeryExpensive = require('./VeryExpensive').default;
    }

    this.setState(() => ({
      needsExpensive: true
    }));
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={this.didPress}>
          <Text>Load</Text>
        </TouchableOpacity>
        {this.state.needsExpensive ? <VeryExpensive /> : null}
      </View>
    );
  }
}
\`\`\`

RAM 형식이 없더라도 인라인 요구는 시작 시간 향상으로 이어질 수 있습니다. \`VeryExpensive.js\` 안의 코드가 처음으로 요청을 할 때만 실행되기 때문입니다. 

## RAM 형식 활성화
RAM 형식을 사용하는 iOS에서는 하나의 인덱스 파일이 생성되어 한 번에 하나의 모듈을 로드합니다. Android에서는 기본적으로 각 모듈에 대한 파일 세트를 만듭니다. iOS와 같이 Android에서도 단일 파일을 생성하도록 강제할 수 있지만, 여러 파일을 사용하면 성능이 더 향상되고 메모리를 덜 필요로 합니다. 

빌드 단계의 "Bundle React Native code and images"를 편집하여 Xcode에서 RAM 형식을 활성화 하면 됩니다. \`../node_modules/react-native/scripts/react-native-xcode.sh\` 를 실행하기 전에 \`export BUNDLE_COMMAND="ram-bundle"\` 를 추가해야 합니다. 

\`\`\`jsx
export BUNDLE_COMMAND="ram-bundle"
export NODE_BINARY=node
../node_modules/react-native/scripts/react-native-xcode.sh
\`\`\`

Android에서는 \`android/app/build.gradle file\` 을 편집하여 RAM 형식을 활성화 해야 합니다. 아래와 같이 \`../../node_modules/react-native/react.gradle\` 행을 적용하기 전에 \`project.ext.react\` 블록을 추가하거나 수정해야 합니다. 

\`\`\`jsx
project.ext.react = [
  bundleCommand: "ram-bundle",
]
\`\`\`

단일 인덱스 파일을 사용하려면 Android에서 아래와 같이 적용해야 합니다. 

\`\`\`jsx
project.ext.react = [
  bundleCommand: "ram-bundle",
  extraPackagerArgs: ["--indexed-ram-bundle"]
]
\`\`\`

> 참고 : [\`Hermes JS Engine\`](https://github.com/facebook/hermes) 을 사용하는 경우 RAM 번들을 사용하면 안 됩니다. Hermes에서 bytecode를 로드할 때 \`mmap\` 을 사용하면 전체 파일이 로드되지 않습니다. Hermes를 RAM 번들과 함께 사용하는 것은 문제를 될 수 있습니다. 이 메커니즘들은 서로 호환되지 않기 때문입니다. 

## 사전 로드 및 인라인 구성이 필요함
RAM 번들이 있으므로, \`require\` 를 호출하는 데 오버헤드가 발생합니다.\`require\`가 아직 로드되지 않은 모듈을 발견했을 때 브릿지를 통해 메시지를 보내야 하기 때문입니다. 이는 앱이 초기 모듈을 로드하는 동안 가장 많은 수의 \`require\` 호출이 발생하기 때문에 시작하는 데 가장 큰 영향을 미칩니다. 다행히도 모듈의 일부를 미리 로드하도록 구성할 수 있습니다. 이렇게 하려면 몇 가지 형태의 인라인 요구 사항을 구현해야 합니다. 

## 로드된 모듈 조사

루트 파일 (index.(ios|android).js) 에서 initial imports 후 아래와 같이 추가할 수 있습니다.

\`\`\`jsx
const modules = require.getModules();
const moduleIds = Object.keys(modules);
const loadedModuleNames = moduleIds
  .filter((moduleId) => modules[moduleId].isInitialized)
  .map((moduleId) => modules[moduleId].verboseName);
const waitingModuleNames = moduleIds
  .filter((moduleId) => !modules[moduleId].isInitialized)
  .map((moduleId) => modules[moduleId].verboseName);

// make sure that the modules you expect to be waiting are actually waiting
console.log(
  'loaded:',
  loadedModuleNames.length,
  'waiting:',
  waitingModuleNames.length
);

// grab this text blob, and put it in a file named packager/modulePaths.js
console.log(
  module.exports = \${JSON.stringify(
    loadedModuleNames.sort(),
    null,
    2
)};
);
\`\`\`

앱을 실행하면, 콘솔에서 로드된 모듈의 수와 대기 중인 모듈의 수를 확인할 수 있습니다. \`moduleNames\` 를 읽어보고 특별한 사항이 있는지 확인해볼 수도 있습니다. 인라인 요구 사항은 import가 최초로 참조될 때 호출됩니다. 시작 시 원하는 모듈만 로드되도록 조사하고 리팩토링해야 할 수 있습니다. 필요에 따라 시 \`Systrace object\` 를 변경하여 문제가 있는 요구 사항을 디버깅할 수 있습니다. 

\`\`\`jsx
require.Systrace.beginEvent = (message) => {
  if (message.includes(problematicModule)) {
    throw new Error();
  }
};
\`\`\`

앱에 따라 다르지만, 대부분의 앱에서는 첫 화면에 필요한 모듈만 로드하는 것이 합리적일 수 있습니다. 이러한 방식을 원하는 경우 loadedModuleNames의 출력을 \`packager/modulePaths.js\` 라는 파일에 넣으면 됩니다. 

## metro.config.js 업데이트
새로 생성된 \`metro.config.js\` 파일을 사용하려면, 프로젝트의 루트에서 \`metro.config.js\` 를 업데이트해야 합니다. 

\`\`\`jsx
const modulePaths = require('./packager/modulePaths');
const resolve = require('path').resolve;
const fs = require('fs');

// Update the following line if the root folder of your app is somewhere else.
const ROOT_FOLDER = resolve(__dirname, '..');

const config = {
  transformer: {
    getTransformOptions: () => {
      const moduleMap = {};
      modulePaths.forEach((path) => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });
      return {
        preloadedModules: moduleMap,
        transform: { inlineRequires: { blacklist: moduleMap } }
      };
    }
  },
  projectRoot: ROOT_FOLDER
};

module.exports = config;
\`\`\`

구성(config)의 \`preloadedModules\` 항목은 RAM 번들을 빌드할 때 미리 로드된 것으로 표시되어야 하는 모듈을 나타냅니다. 번들이 로드되면, 이러한 모듈은 요구 사항이 실행되기도 전에 즉시 로드됩니다. \`blacklist\` 항목은 해당 모듈이 인라인으로 요구되지 않아야 함을 나타냅니다. 미리 로드되어 있기 때문에 인라인 요구 사항을 사용해도 성능상의 이점은 없습니다. 실제로 Javascript는 import 가 참조될 때마다 인라인 요구 사항을 해결하는 데 추가 시간을 소비합니다. 

## 개선 사항 테스트 및 측정 (Test and Measure Improvements)
이제 RAM 형식과 인라인 요구 사항을 사용하여 앱을 빌드할 준비가 되었습니다. 시작 전과 후의 시간을 측정해봅시다. 

`;

export const text4_1 = `
# 프로파일링
내장된 프로파일러를 사용해 Javascript 스레드와 메인 스레드에서 나란히 수행된 작업에 대한 자세한 정보를 얻을 수 있습니다. 디버그 메뉴에서 성능 모니터를 선택해 프로파일러에 액세스할 수 있습니다. 

iOS의 경우 Instruments는 중요한 도구이며, Android의 경우 [\`systrace\`](https://reactnative.dev/docs/profiling#profiling-android-ui-performance-with-systrace) 를 사용하는 방법을 배워야 합니다.

그 전에 먼저, [개발 모드가 꺼져 있는지](https://reactnative.dev/docs/performance#running-in-development-mode-devtrue) 확인하세요! 애플리케이션 로그에서 \`__DEV__ === false, development-level warning are OFF, performance optimizations are ON\` 으로 되어 있는지 확인해야합니다. 

Javascript를 프로파일링하는 또 다른 방법은 디버깅하는 동안 크롬 프로파일러를 사용하는 것입니다. 이 방법은 크롬에서 코드가 동작하는 것만큼 정확한 결과를 주진 않지만, 문제가 생기는 곳을 대략적으로 알 수 있습니다. 크롬 성능 탭에서 프로파일러를 실행하면, \`User Timing\` 아래 flame graph가 표시됩니다. 자세한 내용을 표 형식으로 보려면, 아래의 \`Bottom Up\` 탭을 클릭 한 다음 왼쪽 상단 메뉴에서 \`DedicatedWorker Thread\` 를 선택해야 합니다.

## \`systrace\`로 Android UI 성능 프로파일링하기
Android는 10,000개 이상의 다양한 휴대 전화를 지원하며 소프트웨어 렌더링을 지원하도록 일반화되어 있습니다. 프레임워크 아키텍처와 수많은 하드웨어를 타겟으로 일반화할 필요가 있다는 것은, 안타깝게도 iOS에 비해 많은 공수가 듬을 의미합니다. 그럼에도 종종 개선해야할 부분이 있고, 대부분의 경우 이는 네이티브 코드의 문제가 아닙니다!

이 버벅거림(jank)을 디버깅하기 위한 첫 번째 단계는 각 16ms 프레임 동안 어디에서 시간을 소요하고 있는지에 대해 기초적인 부분을 알아가는 것임. 그러기 위해 우리는 안드로이드의 표준 프로파일링 툴인 \`systrace\`를 사용할 것임.

이 버벅거림(jank)를 디버깅하기 위한 첫 번째 단계는, 각각의 16ms 프레임 동안 시간이 어디에 소모되고 있는지에 대한 근본적인 질문에 대답하는 것입니다. 그러기 위해 안드로이드 표준 프로파일링 툴인 \`systrace\`를 사용할 것입니다.

\`systrace\`는 안드로이드의 표준 marker-based 프로파일링 툴이며, Android platform-tools 패키지를 설치할 때 같이 설치됩니다. 프로파일링 된 코드 블록은 시작/종료 마커에 둘러싸여 다채로운 차트 형식으로 시각화됩니다. Android SDK 및 React Native 프레임워크 모두 시각화할 수 있는 표준 마커를 제공합니다. 

### 1. 추적 수집 (Collecting a trace)
먼저 USB를 통해 프로파일링할 장치를 컴퓨터에 연결하고, 프로파일링할 탐색/애니메이션 바로 앞 지점으로 이동해야 합니다. 그런 다음 아래와 같이 \`systrace\`를 실행합니다. 
\`\`\`
$ <path_to_android_sdk>/platform-tools/systrace/systrace.py --time=10 -o trace.html sched gfx view -a <your_package_name>
\`\`\`

명령어에 대한 간단한 설명 :
\t- \`time\` 은 추적이 초 단위로 수집되는 시간을 뜻합니다. 
\t- \`sched\`, \`gfx\` 그리고 \`view\` 는 Android SDK 태그(마커 모음)입니다. \`sched\` 는 휴대폰의 각 코어에서 무엇이 실행중인지에 대한 정보를 제공하고, \`gfx\` 는 프레임 경계와 같은 그래픽 정보를 제공하며, \`view\` 는 측정, 레이아웃 및 draw passes 에 대한 정보를 제공합니다. 
    - \`-a <your_package_name>\` 을 사용하면 앱별 마커, 특히 React Native 프레임워크에 내장된 마커를 활성화 합니다. \`your_package_name\` 은 앱의 \`AndroidManifest.xml\` 에서 찾을 수 있으며 \`com.exe.app\` 과 같습니다. 

추적 수집이 시작되면, 관련된 애니메이션 또는 인터랙션을 수행합니다. 추적이 끝나면 \`systrace\` 는 브라우저에서 열 수 있는 추적에 대한 링크를 제공합니다. 

### 2. 추적 읽기 (Reading the trace)
브라우저에서 추적을 열고 (기본적으로 크롬 사용), 다음과 같은 내용을 볼 수 있습니다. 
![](https://images.velog.io/images/leejiwonn/post/4c5b474c-3eb7-4f6f-8ff5-6e6f0e703d12/image.png)

> 힌트 : WASD 키를 사용하여 스트라이핑 및 확대/축소

trace.html 파일이 올바르게 열리지 않으면 브라우저 콘솔에서 다음을 확인해야 합니다. 
![](https://images.velog.io/images/leejiwonn/post/162ac4ea-d0f8-4bce-bda1-ba2a23e91acb/image.png)

\`Object.observe\` 는 최근 브라우저에서 사용되지 않으므로, Google Chrome 추적 도구에서 파일을 열어야 할 수 있습니다. 이는 아래와 같은 방법으로 수행할 수 있습니다.
\t- 크롬 탭에서 "chrome://tracing" 열기
    - 부하 선택 (Selecting load)
    - 이전 명령에서 생성된 html 파일 선택

> VSync 강조 표시 사용하기
> 
> 16ms 프레임 경계를 강조 표시하려면 화면 오른쪽 상단에 있는 이 확인란을 선택해야 합니다.
> ![](data:image/png;base64,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)
>
> 위의 스크린샷과 같이 얼룩말 줄무늬를 볼 수 있습니다. 그렇지 않은 경우 다른 장치에서 프로파일링을 시도해보세요. 삼성은 vsyn를 표시하는 데 문제가 있는 것으로 알려져 있지만, Nexus 시리즈는 대체로 신뢰성이 높습니다. 

### 3. 프로세스 찾기 (Find your process)
일부 패키지는 이름이 표시될 때까지 스크롤 해야 합니다. 이 경우, 커널의 어리석은 스레드 이름 제한 때문에 \`book.adsmanager\` 로 표시되는 \`com.facebook.adsmanager\`를 프로파일링했습니다. 

왼쪽에는, 우측 타임라인 행에 해당하는 스레드 집합이 표시됩니다. 이 용도로 사용되는 몇 가지 스레드가 있습니다. UI 스레드(패키지 이름 또는 이름 UI 스레드), \`mqt_js\`, \`mqt_native_modules\`입니다. Android 5+에서 실행 중인 경우 \`Render Thread\` 도 중요합니다. 

- **UI 스레드** : 표준 안드로이드 측정/레이아웃/그림이 발하는 곳입니다. 오른쪽의 스레드 이름은 패키지 이름 (예: book.adsmanager) 또는 UI 스레드입니다. 이 스레드에서 볼 수 있는 이벤트는 아래와 같이 보여야 하며, \`Choreographer\`, \`traversals\`, \`DispatchUI\`와 관련이 있습니다. 
![](https://images.velog.io/images/leejiwonn/post/53dda83a-1c33-4767-83e5-0cad50363afd/image.png)

- **JS 스레드** : 여기에서 자바스크립드가 실행됩니다. 스레드 이름은 \`mqt_js\` 또는 \`<...>\` 장치의 커널이 얼마나 협조적인지에 따라 달라집니다. 이름이 없는 경우 식별하려면 \`JSCall\`, \`Bridge.executeJSCall\` 등의 항목을 찾아보아야 합니다.
![](https://images.velog.io/images/leejiwonn/post/421d003a-9414-403e-8b67-a1235b63e7cc/image.png)

- **네이티브 모듈 스레드** : 여기에서 기본 모듈 호출(예: UIManager)이 실행됩니다. 스레드 이름은 \`mqt_native_modules\` 또는 \`<...>\` 입니다. 후자의 경우 이를 식별하기 위해 \`Native Call\`, \`callJavaModuleMethod\`, \`onBatchCompelete\` 와 같은 항목을 찾아보아야 합니다. 
![](https://images.velog.io/images/leejiwonn/post/94fd92ef-71f4-4c17-b133-0a42d1300da1/image.png)

- **보너스: 렌더 스레드** : Android L(5.0) 이상의 버전을 사용하는 경우 애플리케이션에도 렌더 스레드가 존재합니다. 이 스레드는 UI를 그리는 데 사용되는 실제 OpenGL 명령을 생성합니다. 스레드 이름은 \`RenderThread\` 또는 \`<...>\` 임. 후자의 경우 \`DrawFrame\`, \`queueBuffer\` 같은 항목을 찾아보아야 함.
![](https://images.velog.io/images/leejiwonn/post/578e9ba7-5798-4908-a227-15645254df98/image.png)
    
## 문제를 일으키는 요소 확인하기 (Identifying a culprit)

애니메이션이 매끄럽게 동작하려면, 다음과 같아야 합니다. 
![](https://images.velog.io/images/leejiwonn/post/c500230f-5cb0-4c30-bd43-ccb02c792920/image.png)

각 색상의 변화는 하나의 프레임입니다. 프레임을 표시하려면, 16ms 안에 모든 UI 작업이 완료되어야 합니다. 프레임 경계 가까이에서는 어떠한 스레드도 작동하지 않습니다. 이와 같은 애플리케이션 렌더링은 60FPS로 진행됩니다. 

그러나 잘린 부분(chop)을 발견하면, 다음과 같은 것을 볼 수 있습니다.
![](https://images.velog.io/images/leejiwonn/post/2bb845e9-2142-499a-92ab-3ff0708ef068/image.png)

JS 스레드는 거의 항상 프레임 경계를 넘어 실행되고 있음을 알 수 있습니다! 이 앱은 60FPS로 렌더링 되지 않습니다. 이 경우 문제는 JS에 있습니다.

다음과 같은 내용을 볼 수도 있습니다. 
![](https://images.velog.io/images/leejiwonn/post/dca7c445-dfcc-4361-8a22-26e9de202ee3/image.png)

이 경우 UI 및 렌더 스레드는 프레임 경계를 교차하는 작업을 가지는 스레드입니다. 각 프레임에 렌더링하려는 UI는 너무 많은 작업을 수행해야 합니다. 이 경우 문제는 렌더링되는 네이티브 뷰에 있습니다. 

이 시점에서, 다음 단계에 대한 유용한 정보를 얻을 수 있습니다. 

## JavaScript 문제 해결 
JS 문제를 발견했다면, 실행 중인 특정 JS에서 단서를 찾아야 합니다. 위 시나리오에서는 \`RCTEventEmitter\` 가 프레임 당 여러 번 호출되는 것을 볼 수 있습니다. 다음은 위의 추적에서 JS 스레드를 확대한 것입니다. 
![](https://images.velog.io/images/leejiwonn/post/787e7f6f-35b9-4591-8021-a4eba0769e4b/image.png)

뭔가 잘못된 것처럼 보입니다. 왜 이렇게 자주 호출되는 것일까요? 이들은 실제로 다른 이벤트인가요? 이러한 질문에 대한 답변은 제품 코드에 따라 다를 수 있습니다. 또한 \`shouldComponentUpdate\` 를 여러 차례 살펴봐야 하는 경우도 많습니다. 

## 네이티브 UI 문제 해결

네이티브 UI 문제를 확인한 경우 일반적으로 두 가지 시나리오가 있습니다.
\t1. 각 프레임을 그리려는 UI가 GPU에 너무 많은 작업을 수반합니다. 
    2. 애니메이션/상호 작용 중에 새 UI를 구성하고 있습니다. (예: 스크롤 중에 새로운 콘텐츠 로드)
    
### GPU 작업이 너무 많음
첫 번째 시나리오에서는 다음과 같은 UI 스레드 그리고/또는 렌더 스레드가 있는 추적이 표시됩니다. 

![](https://images.velog.io/images/leejiwonn/post/df035869-9ad1-4a75-854a-72f0d4841468/image.png)

\`DrawFrame\`이 프레임 경계를 넘어가는 데에는 많은 시간이 소요됩니다.  이 시간은 GPU가 이전 프레임에서 명령 버퍼를 비울 때까지 대기하는 시간입니다. 

이를 완화하려면 다음을 수행해야 합니다. 
\t- \`renderToHardwareTextureAndroid\` 를 사용하여 애니메이션 중인 / 변환 중인 복잡한 정적 콘텐츠에 대해 조사해야 합니다. (예: \`Navigator\` 슬라이드 / 알파 애니메이션)
    - 대부분의 경우 GPU에서 프레임 별 로드가 크게 증가하기 때문에, 기본적으로 비활성화 되어있는 \`needsOffscreenAlphaCompositing\` 을 사용하지 않아야 합니다. 
    
이러한 조치가 도움이 되지 않고, GPU가 실제로 수행하는 작업에 대해 더 자세히 알아보고 싶다면 [Tracer for OpenGL ES](http://www.androiddocs.com/tools/help/gltracer.html) 를 확인하세요. 

### UI 스레드에서 새로운 뷰 만들기
두 번째 시나리오에서는 다음과 좀 더 유사한 내용을 볼 수 있습니다. 

![](https://images.velog.io/images/leejiwonn/post/880586d9-00f0-49a7-8561-99d02e0e364e/image.png)

JS 스레드에 잠시 머무른 다음, 네이티브 모듈 스레드에서 일부 작업이 수행됩니다. 그리고 나서 UI 스레드에서 비용이 많이 드는 순회 작업이 수행됩니다. 

상호 작용이 끝날 때까지 새로운 UI 생성을 지연시키거나, 생성 중인 UI를 단순화할 수 있는 것이 아니라면, 이러한 문제를 완화할 수 있는 빠른 해결책은 없습니다. React Native 팀은 이를 위해 새로운 UI를 생성하고 메인 스레드에서 벗어나 구성함으로써 상호 작용이 원활하게 진행될 수 있도록 하는 인프라 수준의 솔루션을 개발하고 있습니다. 

`;

export const text5_1 = `
# Hermes로 프로파일링하기
React Native 앱에서 [Hermes](https://github.com/facebook/hermes)를 사용해 JavaScript의 성능을 시각화할 수 있습니다. Hermes는 Android에서 React Native를 실행하는 데에 최적화된 작고 가벼운 JavaScript 엔진입니다. ([React Native와 함께 사용하는 방법에 대한 자세한 내용](https://reactnative.dev/docs/hermes)은 여기에서 확인할 수 있습니다). Hermes는 앱의 성능을 개선하는 데 도움이 되며, 실행 중인 JavaScript의 성능을 분석하는 방법도 제공합니다. 

이 섹션에서는 Hermes에서 실행 중인 React Native 앱을 프로파일링하는 방법과, [크롬 개발자 도구의 성능 탭](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)을 사용해 프로파일을 시각화하는 방법에 대해 알아보게 될 것입니다. 

> 시작하기 전에, 앱에서 hermes를 활성화하는 것을 잊지 마세요!

다음 지침에 따라 프로파일링을 시작하세요.  

1. [Hermes 샘플링 프로파일 기록하기](https://reactnative.dev/docs/profile-hermes#record-a-hermes-sampling-profile)
2. [CLI에서 명령 실행하기](https://reactnative.dev/docs/profile-hermes#execute-command-from-cli)
3. [크롬 개발자도구에서 다운로드받은 프로파일 열기](https://reactnative.dev/docs/profile-hermes#open-the-downloaded-profile-on-chrome-devtools)

## Hermes 샘플링 프로파일 기록하기
개발자 메뉴에서 샘플링 프로파일러를 기록하려면 다음과 같이 하세요. 

1. 실행 중인 Metro 서버 터미널로 이동합니다. 
2. \`d\`를 눌러 개발자 메뉴를 엽니다. 
3. **샘플링 프로파일러 활성화**를 선택합니다. 
4. 앱에서 자바스크립트를 실행합니다. (버튼 누르기 등)
5. \`d\`를 다시 눌러 개발자 메뉴를 엽니다. 
6. **샘플링 프로파일러 비활성화**를 선택해 기록을 중단하고 샘플링 프로파일러를 저장합니다. 

알림창(토스트 팝업)으로 샘플링 프로파일러가 저장된 위치를 알려줍니다. 보통 \`/data/user/0/com.appName/cache/*.cpuprofile\`에 저장됩니다.  

![](https://reactnative.dev/docs/assets/HermesProfileSaved.png)

## CLI에서 명령 실행하기
[React Native CLI]()를 사용해 Hermes 추적 프로파일을 크롬 추적 프로파일로 변환한 다음, 로컬으로 가져올 수 있습니다.  
\`\`\`
npx react-native profile-hermes [destinationDir]
\`\`\`

### 소스 맵 활성화하기
소스 맵은 프로파일을 강화하고 추적 이벤트를 응용 프로그램 코드와 연결하는 데 사용됩니다. 앱이 개발 모드에서 실행 중인 경우 \`bundleInDebug\`를 활성화하여 헤르메스 추적 프로파일을 크롬 추적 프로파일로 변환할 때, 소스 맵을 자동으로 생성할 수 있습니다. 이렇게 하면 React Native가 프로세스 실행 중에 번들을 빌드할 수 있습니다. 방법은 다음과 같습니다.

1. 앱의 \`android/app/build.gradle\` 파일에 다음을 추가합니다.  
  \`\`\`
  project.ext.react = [
    bundleInDebug: true,
  ]
  \`\`\`
> \`build.gradle\`을 변경할 때마다 빌드를 정리해야 합니다. 

2. 다음을 실행해 빌드를 정리합니다.  
\`\`\`
cd android && ./gradlew clean

\`\`\`

3. 앱을 실행합니다.  
\`\`\`
npx react-native run-android
\`\`\`

### 일반적인 오류
\`adb: no devices/emulators found\` or \`adb: device offline\` [#](https://reactnative.dev/docs/profile-hermes#adb-no-devicesemulators-found-or-adb-device-offline)


- **발생 원인** 앱 실행에 사용하는 CLI가 디바이스나 에뮬레이터에 (adb를 통해) 접근할 수 없습니다. 
- **해결 방법** Android 디바이스나 에뮬레이터가 연결되어 있고 실행 중인지 확인합니다. adb에 접근할 수 있을 때에만 명령이 실행됩니다. 

\`There is no file in the cache/ directory\` [#](https://reactnative.dev/docs/profile-hermes#there-is-no-file-in-the-cache-directory)

- **발생 원인** CLI가 앱의 **캐시** / 디렉토리의 파일에서 **.cpuprofile**을 찾을 수 없습니다. 디바이스로부터 프로파일을 기록하는 것을 잊었을 수 있습니다. 
- **해결 방법** 디바이스의 프로파일러를 활성화/비활성화하기 위해 다음 [지침](https://reactnative.dev/docs/profile-hermes#record-a-hermes-sampling-profile)을 따르세요.

\`Error: your_profile_name.cpuprofile is an empty file\` [#](https://reactnative.dev/docs/profile-hermes#error-your_profile_namecpuprofile-is-an-empty-file)

- **발생 원인** 프로파일이 비어 있습니다. Hermes가 제대로 실행되고 있지 않기 때문일 수 있습니다. 
- **How to fix** 앱이 Hermes의 최신 버전에서 실행되고 있는지 확인하세요. 

## 크롬 개발자 도구에서 다운로드받은 프로파일 열기[#](https://reactnative.dev/docs/profile-hermes#open-the-downloaded-profile-in-chrome-devtools)

크롬 개발자 도구에서 프로파일을 열려면 다음과 같이 하세요. 

1. 크롬 개발자 도구를 실행하세요. 
2. **성능** 탭을 선택하세요. 
3. 마우스 오른쪽 클릭 후 **프로파일 로드하기...**를 선택하세요.
![https://reactnative.dev/docs/assets/openChromeProfile.png](https://reactnative.dev/docs/assets/openChromeProfile.png)

## Hermes 프로파일 변환기의 작동 방식[#](https://reactnative.dev/docs/profile-hermes#how-does-the-hermes-profile-transformer-work)
Hermes 샘플 프로파일은 \`JSON 객체 형식\`인 반면, 구글의 개발자 도구가 지원하는 형식은 \`JSON 배열 형식\`입니다. 
([추적 이벤트 형식 문서](https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview)에서 형식에 대한 자세한 정보를 확인할 수 있습니다. )

\`\`\`jsx
export interface HermesCPUProfile {
\ttraceEvents: SharedEventProperties[];
\tsamples: HermesSample[];
\tstackFrames: { [key in string]: HermesStackFrame };
}
\`\`\`

Hermes 프로파일에는 대부분의 정보가 \`samples\` 및 \`stackFrames\` 속성으로 인코딩되어 있습니다. 각 샘플은 함수 호출에 해당하는 \`sf\` 속성을 가지므로, 특정 타임스탬프에서 함수 호출 스택의 스냅샷입니다. 

\`\`\`jsx
export interface HermesSample {
  cpu: string;
  name: string;
  ts: string;
  pid: number;
  tid: string;
  weight: string;
  /**
   * Will refer to an element in the stackFrames object of the Hermes Profile
   */
  sf: number;
  stackFrameData?: HermesStackFrame;
}
\`\`\`

함수 호출에 대한 정보는 key-object 쌍을 포함하는 \`stackFrames\`에서 찾을 수 있습니다. 여기서 key는 \`sf\` 번호이고, object는 부모 함수의 \`sf\` 번호를 포함하는 함수에 관련된 모든 정보를 제공합니다. 
이 부모-자식 관계를 위쪽으로 추적하여, 특정한 타임스탬프에 실행 중인 모든 함수에 대한 정보를 찾을 수 있습니다.

\`\`\`jsx
export interface HermesStackFrame {
  line: string;
  column: string;
  funcLine: string;
  funcColumn: string;
  name: string;
  category: string;
  /**
   * A parent function may or may not exist
   */
  parent?: number;
}
\`\`\`

이 시점에서, 몇 가지 용어를 더 정의해야합니다. 즉, 

1. 노드:\`stackFrames\`의 \`sf\`번호에 해당하는 객체입니다. 
2. 활성 노드: 현재 특정 타임스탬프에서 실행 중인 노드입니다. \`sf\` 번호가 함수 호출 스택 안에 있으면 노드가 실행 중인것으로 분류됩니다. 이 호출 스택은 샘플의 \`sf\` 번호에서 얻을 수 있으며, 부모의 \`sf\`를 사용할 수 있을 때까지 위쪽으로 추적해나갈 수 있습니다. 

그런 다음 \`samples\`과 \`stackFrames\`를 함께 사용해 해당하는 타임스탬프에서 모든 시작 및 종료 이벤트를 생성할 수 있습니다. 여기에서 시작 노드/이벤트, 종료 노드/이벤트는 다음을 의미합니다. 

1. 시작 노드/이벤트: 이전 샘플의 함수 호출 스택에는 노드가 없지만, 현재 샘플의 함수 호출 스택에는 노드가 있습니다. 
2. 종료 노드/이벤트: 이전 샘플의 함수 호출 스택에는 노드가 있지만, 현재 샘플의 함수 호출 스택에는 노드가 없습니다. 

![https://reactnative.dev/docs/assets/CallStackDemo.jpg](https://reactnative.dev/docs/assets/CallStackDemo.jpg)

이제 시작 및 종료 타임스탬프를 포함한 모든 기능에 대한 정보를 가지고 있으므로, 함수 호출의 \`flamechart\`를 구성할 수 있습니다.  

\`hermes-profile-transformer\`는 Hermes를 사용해 생성된 모든 프로파일을 크롬 개발자 도구에 직접 표시할 수 있는 형식으로 변환할 수 있습니다. 이에 대한 자세한 내용은  [\`@react-native-community/hermes-profile-transformer\`](https://github.com/react-native-community/hermes-profile-transformer)에서 확인할 수 있습니다. 

`;
