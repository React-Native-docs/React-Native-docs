export const text1_1 = `
# 터치 다루기
모바일 앱에서 사용자와의 상호작용은 주로 **터치**로 이루어집니다. 사용자는 버튼을 누르거나 스크롤링을 하거나, 맵을 확대하는 것과 같은 제스쳐들의 조합을 사용할 수 있습니다. React Native는 모든 종류의 일반적인 제스쳐를 다루는 컴포넌트들을 제공하며, 고급 제스쳐를 인식할 수 있는 포괄적인 [제스쳐 응답 시스템](https://reactnative.dev/docs/gesture-responder-system)도 제공합니다. 그러나 가장 관심을 끌만한 컴포넌트는 바로 기본 Button 컴포넌트입니다. 

## Displaying a basic button[#](https://reactnative.dev/docs/getting-started#displaying-a-basic-button)
[Button](https://reactnative.dev/docs/button)은 모든 플랫폼에서 렌더링이 잘 되는 기본적인 버튼 컴포넌트를 제공합니다. 가장 간단한 버튼 컴포넌트 예제는 다음과 같습니다. 

\`\`\`jsx
<Button
onPress={() => {
    alert('You tapped the button!');
}}
title="Press Me"
    />
\`\`\`

이 컴포넌트는 iOS에서는 파란색 라벨, Android에서는 파란색 둥근 직사각형과 밝은 텍스트로 렌더링됩니다. 버튼을 누르면 "onPress" 함수가 호출되는데, 예제의 경우 alert 팝업이 뜹니다. 원한다면 "color" prop을 지정해 버튼의 색상을 변경할 수도 있습니다. 

![https://reactnative.dev/assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png](https://reactnative.dev/assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png)

아래 예제에서 \`Button\` 컴포넌트를 확인해보세요. 오른쪽 아래에 있는 토글을 클릭해 앱을 미리보기할 플랫폼을 선택한 다음 "Tab to Play"를 클릭해 앱을 미리보기할 수 있습니다. 
`

export const code1_1 = `
\`\`\`jsx
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
\`\`\`
`

export const text1_2 = `
expo
## Touchables[#](https://reactnative.dev/docs/getting-started#touchables)
기본 버튼 컴포넌트가 앱에 적합하지 않다면, React Native에서 제공하는 "Touchable" 컴포넌트를 사용해 자신만의 버튼을 빌드할 수 있습니다. "Touchable" 컴포넌트는 누르는 제스쳐를 인식하는 기능을 제공하고, 해당 제스쳐가 인식되었을 때 피드백을 보여줄 수 있습니다. 그러나 이러한 컴포넌트들은 기본적인 스타일링을 제공하지 않기 때문에, 앱에서 보기 좋게 만드려면 약간의 작업을 수행해야할 수 있습니다. 

원하는 피드백의 종류에 따라 어떤 "Touchable" 컴포넌트를 사용할지 선택합니다:

- 일반적으로 웹에서 버튼이나 링크를 사용하는 모든 곳에서 [**TouchableHighlight**](https://reactnative.dev/docs/touchablehighlight) 컴포넌트를 사용할 수 있습니다. 유저가 버튼을 누르면 뷰의 배경이 어두워집니다. 
- Android에서 **[TouchableNativeFeedback](https://reactnative.dev/docs/touchablenativefeedback)** 컴포넌트는 사용자의 터치에 반응하는 ink surface reaction을 보여줍니다. 
- [**TouchableOpacity**](https://reactnative.dev/docs/touchableopacity)는 버튼의 불투명도를 줄임으로써 사용자가 버튼을 누르는 동안 배경을 볼 수 있도록 해서, 피드백을 제공하는 데에 사용될 수 있습니다. 

- 탭 제스쳐를 처리하면서 아무런 피드백도 표시하지 않으려면, [**TouchableWithoutFeedback**](https://reactnative.dev/docs/touchablewithoutfeedback)을 사용하세요.

경우에 따라 사용자가 일정시간 동안 뷰를 누르고 있는 것(long press)을 인식하고 싶다면, 이러한 긴 누르기(long press)는 Touchable 컴포넌트의 \`onLongPress\` props에 함수를 전달함으로써 처리할 수 있습니다. 

이 모든 것이 실제로 작동하는지 살펴 보겠습니다.
**Touchables**
`

export const code1_2 = `
\`\`\`jsx
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    _onLongPressButton() {
        alert('You long-pressed the button!')
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
});
\`\`\`
`

export const text1_3 = `
## Scrolling and swiping[#](https://reactnative.dev/docs/getting-started#scrolling-and-swiping)
터치 스크린이 있는 기기에서 일반적으로 사용되는 제스쳐 중에는 스와이프(오른쪽→왼쪽 드래그)와 패닝(위→아래 드래그)이 포함됩니다. 이 제스쳐들을 통해 사용자가 아이템 리스트를 스크롤하거나 콘텐츠 페이지를 넘길 수 있습니다. 이에 대해서는 [ScrollView]() 코어 컴포넌트를 확인해보세요. 

## 알려진 문제
- react-native#29308: 터치 영역은 절대 부모 뷰 경계 너머로 확장되지 않으며, Android에서 음수 마진은 지원되지 않습니다. 
`

export const text2_1 = `

# 화면 간 탐색 (Navigation Between Screens)
대부분의 모바일 앱은 여러 개의 화면으로 구성됩니다. 여러 개의 화면을 표시하는 것, 또는 화면을 전환하는 것은 일반적으로 navigator라고 알려진 것에 의해 처리됩니다. 

이 가이드는 React Native에서 사용가능한 다양한 네비게이션 컴포넌트를 다룹니다. navigation이 처음이라면, [React Navigation](https://reactnative.dev/docs/navigation#react-navigation)을 참고하세요. React Navigation은 Android, iOS에서 공통 스택 탐색(common stack navigation)과 탭 네비게이션 패턴(tabbed navigation patterns)을 보여주는 간단한 탐색 솔루션을 제공합니다. 

## React Navigation
탐색에 관한 커뮤니티의 솔루션은, 개발자가 몇 줄의 코드만으로 앱의 화면을 설정할 수 있도록 해주는 독립형 라이브러리입니다. 

### 설치 및 설정
먼저, 다음을 프로젝트에 설치해야 합니다.  

\`\`\`
npm install @react-navigation/native @react-navigation/stack
\`\`\`

다음으로, 필요한 피어 종속성을 설치하세요. Expo에서 관리하는 프로젝트인지 또는 순수 React Native 프로젝트인지에 따라 다른 명령을 실행해야 합니다. 

- Expo에서 관리하는 프로젝트인 경우, \`expo\`로 의존성을 설치하세요. 
\t\`expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\`


- 순수 React Native 프로젝트인 경우, \`npm\`으로 의존성을 설치하세요.  
\t\`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\`  
\tiOS에서 순수 React Native 프로젝트는 [Cocoapods](https://cocoapods.org/)이 반드시 설치되어 있어야 합니다. 그리고 나서 설치를 완료하기 위해 pods를 설치하세요. 
\t\`\`\`
    cd ios
\tpod install
\tcd ..
    \`\`\`
    
> 메모: 설치 후 피어 종속성과 관련된 경고가 표시될 수 있습니다. 일반적으로 일부 패키지에 지정된 버전 범위가 잘못되어 발생합니다. 앱이 빌드되는 한 대부분의 경고는 무시해도 안전합니다.  

react-native-gesture-handler 설치를 완료하려면 \`index.js\` 또는 \`App.js\`와 같은 엔트리 파일의 최상단에 다음을 추가하세요. 

\`\`\`jsx
import 'react-native-gesture-handler' ; 
\`\`\`


이제 전체 앱을 \`NavigationContainer\`로 감싸야합니다. 일반적으로는 \`index.js\`나 \`App.js\`와 같은 엔트리 파일에서 이 작업을 수행합니다. 

\`\`\`jsx
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;
\`\`\`

이제 디바이스/시뮬레이터에서 앱을 빌드하고 실행할 준비가 되었습니다.  

### 사용법
이제 홈 화면과 프로필 화면이 있는 앱을 만들 수 있습니다.  

\`\`\`jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
\`\`\`

위 예제에는 \`Stack.Screen\` 컴포넌트를 사용해 정의된 두 개의 화면(\`Home\`과 \`Profile\`)이 있습니다. 이런 식으로 원하는 만큼의 화면을 정의할 수 있습니다. 

\`Stack.Screen\`의 \`options\` prop에서 각 화면의 타이틀과 같은 옵션을 설정할 수 있습니다.  

각 화면은 React 컴포넌트인 \`component\` prop을 받습니다. 이러한 컴포넌트들은 다른 화면으로 연결할 수 있는 다양한 메소드를 가진 \`navigation\`이라는 prop을 받습니다. 예를 들어, \`navigation.navigate\`를 사용해 \`Profile\` 화면으로 이동할 수 있습니다.  

\`\`\`jsx
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
\`\`\`

스택 탐색기의 뷰들은 네이티브 컴포넌트와 애니메이션 라이브러리를 사용해 네이티브 스레드에서 실행되는 60fps 애니메이션을 제공합니다. 또한 애니메이션과 제스쳐를 사용자가 정의할 수 있습니다. 

React Navigation에는 탭이나 drawer와 같은 다양한 종류의 네비게이터를 위한 패키지가 있습니다. 앱에서 다양한 패턴을 구현하기 위해 이러한 패키지들을 사용할 수 있습니다.  

React Navigation에 대한 전체 소개를 보려면 [React Navigation 시작 가이드](https://reactnavigation.org/docs/getting-started)를 따르세요. 

`

export const text3_1 = `

# 애니메이션
애니메이션은 훌륭한 사용자 경험(UX)을 만드는 데 매우 중요합니다. 정지 상태의 물체는 움직이기 시작할 때 관성을 극복해야 합니다. 움직이는 물체는 모멘텀(운동량)을 가지고, 즉시 멈추지 않습니다. 애니메이션은 이러한 현실 세계의 물리적인 법칙에 어긋나지 않는 동작을 제공합니다. 

리액트 네이티브는 두 가지 보완적인 애니메이션 시스템을 제공합니다. 특정한 값에 대한 동적이고 세분화된 컨트롤을 제공하는 [Animated](https://reactnative.dev/docs/animations#animated-api)과 애니메이션 글로벌 레이아웃 트랜잭션을 제공하는 [LayoutAnimation](https://reactnative.dev/docs/animations#layoutanimation-api)입니다.

## \`Animated\` API[#](https://reactnative.dev/docs/animations#animated-api)
[Animated](https://reactnative.dev/docs/animated) API는 다양한 종류의 흥미로운 애니메이션과 상호작용 패턴을 뛰어난 성능으로 정확하게 표현하도록 설계되었습니다. \`Animated\`는 입출력 사이에 변환 설정이 가능한 입력-출력 사이의 선언전인 관계와, 시간을 기반으로 하는 애니메이션 실행을 제어하는\`start\`/\`stop\` 메소드에 초점을 맞추고 있습니다.  

Animated는 여섯 개의 애니메이션이 가능한 컴포넌트 타입(\`View\`, \`Text\`, \`Image\`, \`ScrollView\`, \`FlatList\`, \`SectionList\`)을 export하지만, \`Animated.createAnimatedComponent()\`를 사용해 직접 커스텀 컴포넌트를 생성할 수도 있습니다. 

예를 들어, 마운트 될 때 서서히 밝아지는 컨테이너 뷰는 다음과 같이 작성할 수 있습니다. 
`

export const code3_1 = `

\`\`\`jsx
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style, //=> props로 받은 style 배열들로 바꿔줌(a=[2,3] => ...a == 2,3)
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your \`FadeInView\` in place of a \`View\` in your components:
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )
}
\`\`\`

`
export const text3_2 = `
여기서 일어나는 일을 자세히 설명해봅시다. \`FadeInView\` 생성자에서 \`fadeAnim\`이라 불리는 새로운 \`Animated.Value\`가 \`state\`의 일부로서 초기화됩니다. 뷰의 opacity 속성은 이 애니메이션 변수에 매핑됩니다. 내부적으로는, opacity를 설정하기 위해 숫자 값이 추출됩니다. 

컴포넌트를 마운트할 때, opacity는 0으로 설정됩니다. 그런 다음 \`fadeAnim\` 애니메이션 값에서 easing 애니메이션이 시작됩니다. 그러면 변수가 최종 값 1이 될 때까지 애니메이션화되는 동안, 각 프레임의 모든 종속 매핑이 업데이트됩니다. 

이것은 setState를 호출하고 리렌더링을 하는 것보다 더 빠른, 최적화된 방식으로 수행됩니다. 전체 구성이 선언적이기 때문에, 구성을 직렬화하고 우선순위 스레드에서 애니메이션을 실행함으로써 추가로 최적화를 구현할 수 있습니다. 

### 애니메이션 설정[#](https://reactnative.dev/docs/animations#configuring-animations)

애니메이션은 설정이 매우 용이합니다. 사용자 정의 및 재정의된 easing functions, delays, durations, decay factors, spring constants(스프링 상수) 등은 모두 애니메이션 유형에 따라 조정할 수 있습니다. 

\`Animated\` 는 여러 애니메이션 타입을 제공하며, 가장 많이 사용되는 타입은 [\`Animated.timing()\`](https://reactnative.dev/docs/animated#timing) 입니다. \`Animated.timing()\` 은 다양한 재정의된 easing function, 또는 직접 작성한 함수를 이용해 시간의 흐름에 따라 변수를 애니메이션화하는 것을 지원합니다. Easing function은 주로 애니메이션에서 객체의 점진적인 가속 또는 감속을 전달하는 데 사용됩니다. 

\`timing\`의 기본값으로는 최대 속도까지의 점진적인 가속, 또는 정지할 때까지의 점진적인 감속을 전달하는 easeInOut 곡선이 사용됩니다. \`easing\` 파라미터를 전달해 다른 easing function을 지정할 수도 있습니다. 사용자 정의 \`duration\` 또는 애니메이션 시작 전의 \`delay\` 애니메이션까지도 지원됩니다. 

다음은, 최종 위치로 이동하기 전에 약간 뒤로 물러나는 2초 길이의 객체 애니메이션을 만드는 예제입니다. 

\`\`\`jsx
Animated.timing(this.state.xPosition, {
  toValue: 100,
  easing: Easing.back(),
  duration: 2000
}).start();
\`\`\`


내장 애니메이션에 의해 지원되는 모든 설정 매개변수에 대해 더 자세히 알아보려면 Animated API 레퍼런스의 [Configuring animation](https://reactnative.dev/docs/animated#configuring-animations) 섹션을 살펴보세요. 

### Composing animations[#](https://reactnative.dev/docs/animations#composing-animations)
애니메이션은 순서대로 또는 병렬로 조합해 재생할 수 있습니다. 연속 애니메이션은 이전 애니메이션이 완료되자마자 즉시 실행되거나, 일정한 지연 후에 실행시킬 수도 있습니다. \`Animated\` API는 \`sequence()\`, \`delay()\`와 같은 여러 메소드를 제공합니다. 각 메소드는 실행할 애니메이션 배열을 받아서 필요에 따라 자동으로 \`start()\` / \`stop()\` 을 호출합니다.  

예를 들어, 다음 애니메이션은 정지될 때까지 진행한 후에, 병렬로 회전하면서 뒤로 튕겨 나옵니다. 

\`\`\`jsx
Animated.sequence([
  // decay, then spring to start and twirl
  Animated.decay(position, {
    // coast to a stop
    velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release
    deceleration: 0.997
  }),
  Animated.parallel([
    // after decay, in parallel:
    Animated.spring(position, {
      toValue: { x: 0, y: 0 } // return to start
    }),
    Animated.timing(twirl, {
      // and twirl
      toValue: 360
    })
  ])
]).start(); // start the sequence group
\`\`\`

하나의 애니메이션이 멈추거나 중단되면, 그룹 내의 모든 애니메이션들이 같이 멈춥니다. \`Animated.parallel\`의 \`stopTogether\` 옵션을 \`false\`로 설정해 이 기능을 비활성화할 수 있습니다. 

\`Animated\` API 레퍼런스의 [Composing animations](https://reactnative.dev/docs/animated#composing-animations) 섹션에서 설정 메소드의 전체 목록을 찾을 수 있습니다. 

### 애니메이션 변수 결합[#](https://reactnative.dev/docs/animations#combining-animated-values) 
두 개의 애니메이션 변수를 더하거나, 곱하거나, 나누거나, 또는 나머지 연산을 해서 새로운 애니메이션 변수를 생성할 수 있습니다. 

계산을 위해 애니메이션 값을 변환해야하는 경우가 있습니다. 다음은 scale을 변경하는 예제입니다.  (2x → 0.5x)

\`\`\`jsx
const a = new Animated.Value(1);
const b = Animated.divide(1, a);

Animated.spring(a, {
  toValue: 2
}).start();
\`\`\`

### Interpolation[#](https://reactnative.dev/docs/animations#interpolation)
먼저 보간(interpolation)을 통해 각 속성을 실행할 수 있습니다. 보간은 입력 범위를 출력 범위와 매핑하며, 주로 선형 보간을 사용하지만 easing function도 지원합니다. 기본적으로는 지정된 범위를 벗어난 곡선을 추정하지만, 출력 값을 클램프하도록 할 수도 있습니다. 

0-1의 범위를 0-100으로 변환하는 기본 매핑 예제입니다. 

\`\`\`jsx
value.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100]
});
\`\`\`

예를 들어, \`Animated.Value\`는 0에서 1로 이동하지만, 위치는 150px에서 0px로, opacity는 0에서 1로 애니메이션되게 할 수 있습니다. 그러려면 다음 예제에서와 같이 스타일을 수정하면 됩니다.  

\`\`\`jsx
style={{
    opacity: this.state.fadeAnim, // Binds directly
    transform: [{
      translateY: this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }}
\`\`\`


\`interpolate()\` 메소드는 여러 범위의 세그먼트도 지원하므로, 데드 존 및 다른 유용한 트릭을 정의하는 데에 편리하게 사용할 수 있습니다. 예를 들어, -300에서 -100, -100에서 0으로 이동한 다음, 0에서 1까지 다시 올라가고, 100에서 0으로 다시 내려간 다음, 0으로 유지되는 데드 존을 얻으려면 다음 작업을 수행합니다. 
\`\`\`jsx
value.interpolate({
  inputRange: [-300, -100, 0, 100, 101],
  outputRange: [300, 0, 1, 0, 0]
});
\`\`\`

다음과 같이 매핑됩니다. 

\`\`\`jsx
Input | Output
------|-------
  -400|    450
  -300|    300
  -200|    150
  -100|      0
   -50|    0.5
     0|      1
    50|    0.5
   100|      0
   101|      0
   200|      0
\`\`\`

interpolate() 메소드는 문자열로의 매핑도 지원하므로, 색상과 단위 값에도 애니메이션을 적용할 수 있습니다. 

다음은 회전 애니메이션 구현 예제입니다. 

\`\`\`jsx
value.interpolate({
  inputRange: [0, 360],
  outputRange: ['0deg', '360deg']
});
\`\`\`

\`interpolate()\`는 임의의 easing function도 지원합니다. 대부분은 Easing 모듈에 이미 구현되어 있습니다. \`interpolate()\`는 출력 범위를 추정하기 위해 설정 가능한 동작도 가지고 있습니다. \`extrapolate\`, \`extrapolateLeft\`, \`extrapolateRight\` 옵션을 통해 extrapolation을 설정할 수 있습니다. 기본값은 확장이지만, output value가 출력 범위를 초과하지 않도록 클램프를 사용할 수도 있습니다. 


### 동적 변수 추적[#](https://reactnative.dev/docs/animations#tracking-dynamic-values)
애니메이션 변수는, 애니메이션의 \`toValue\`를 일반 숫자 대신 다른 애니메이션 변수로 설정함으로써, 다른 애니메이션 변수를 추적할 수 있습니다. 예를 들어, Android 메신저에서 사용되는 "Chat Heads" 애니메이션은 다른 애니메이션 변수에 고정된 \`spring()\`과 함께, 또는 \`timing()\`이나 엄격한 추적을 위한 0 \`duration\`을 사용해 구현될 수 있습니다. 보간으로 구성될 수도 있습니다. 

\`\`\`jsx
Animated.spring(follower, { toValue: leader }).start();
Animated.timing(opacity, {
  toValue: pan.x.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0]
  })
}).start();
\`\`\`

\`leader\`와 \`follower\` 애니메이션 변수는  \`Animated.ValueXY()\`를 사용해 구현됩니다. \`ValueXY\`는 패닝과 드래그 같은 2D 상호작용을 처리하는 편리한 방식입니다. 이는 두 개의 \`Animated.Value\` 인스턴스와 이를 호출하는 몇몇 helper 함수를 포함하는 기본적인 wrapper입니다. 대부분은 \`Value\`에 대한 드롭 인 대체값으로 \`ValueXY\`를 생성합니다. 위 예제에서 \`ValueXY\`는 x, y 값 모두를 추적할 수 있습니다. 

### 제스쳐 추적[#](https://reactnative.dev/docs/animations#tracking-gestures)

패닝 또는 스크롤과 같은 제스쳐 및 기타 이벤트는 [\`Animated.event\`](https://reactnative.dev/docs/animated#event)를 통해 애니메이션 변수에 직접 매핑할 수 있습니다. 이는 복잡한 이벤트 객체에서 변수를 추출할 수 있도록, 구조화된 맵 신택스에서 수행됩니다. 첫 번째 계층은 여러 개의 인수를 매핑할 수 있도록 하는 배열이며, 이 배열은 중첩된 객체를 포함합니다. 

\`event.nativeEvent.contentOffset.x\` 를 \`scrollX\` (\`Animated.value\`)에 매핑하기 위해 다음과 같이 할 수 있다. 

\`\`\`jsx
onScroll={Animated.event(
   // scrollX = e.nativeEvent.contentOffset.x
   [{ nativeEvent: {
        contentOffset: {
          x: scrollX
        }
      }
    }]
 )}
\`\`\`

다음 예제는 수평으로 스크롤을 넘기는 캐러셀(Carousel)을 구현하는 예제입니다. 스크롤 위치 indicater가 ScrollView에서 사용되는 Animated.event를 사용해 애니메이션으로 구현되었습니다. 

**함수형 컴포넌트**
**Animated**
`

export const code3_2 = `

\`\`\`jsx
import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {"Image - " + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
\`\`\`
`
export const text3_3 = `
**클래스형 컴포넌트**
**Animated**
`

export const code3_3 = `
\`\`\`jsx
import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions
} from "react-native";

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

const window = Dimensions.get("window");

export default class App extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window
    }
  };

  onDimensionsChange = ({ window }) => {
    this.setState({ dimensions: { window } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionsChange);
  }

  render() {
    const windowWidth = this.state.dimensions.window.width;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX
                  }
                }
              }
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{
                    width: windowWidth,
                    height: 250
                  }}
                  key={imageIndex}
                >
                  <ImageBackground source={{ uri: image }} style={styles.card}>
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>
                        {"Image - " + imageIndex}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
\`\`\`
`
export const text3_4 = `

\`PanResponder\`를 사용할 때는, \`gestureState.dx\`와 \`gestureState.dy로\`부터 x, y 위치를 추출하는 아래의 코드를 사용할 수 있습니다. \`PanResponder\` 핸들러에 전달되는 두 번째 인자 \`gestureState\` 에만 신경을 쓰면 되므로, 배열의 첫번째 인자로는 \`null\`값을 줍니다. 

\`\`\`jsx
onPanResponderMove={Animated.event(
  [null, // 네이티브 이벤트 무시
  // gestureState에서 dx와 dy 추출
  // 'pan.x = gestureState.dx, pan.y = gestureState.dy' 처럼
  {dx: pan.x, dy: pan.y}
])}
\`\`\`

**애니메이션 이벤트가 있는 PanResponder 예제**
**함수형 컴포넌트**
Animated
`

export const code3_5 = `
\`\`\`jsx
import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;
\`\`\`
`

export const text3_6 = `
**클래스형 컴포넌트**
Animated
`

export const code3_6 = `

\`\`\`jsx
import React, { Component } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

export default class App extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(this.pan, { toValue: { x: 0, y: 0 } }).start();
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag & Release this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
          }}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});
\`\`\`
`

export const text3_7 = `
### 현재 애니메이션 변수에 응답하기[#](https://reactnative.dev/docs/animations#responding-to-the-current-animation-value)
애니메이션 중에 현재 애니메이션 값을 읽어오는 명확한 방법은 없습니다. 최적화로 인해 네이티브 런타임에서만 값을 알 수 있기 때문입니다. 현재 애니메이션 값에 대한 응답으로 Javascript를 실행해야 하는 경우 두 가지 접근방식이 있습니다. 

- \`spring.stopAnimation(callback)\` 은 애니메이션을 중단하고 최종 애니메이션 값으로 콜백을 호출합니다. 제스쳐 트랜지션을 생성할 때 유용합니다. 
- \`spring.addListener(callback)\` 은 애니메이션이 실행되는 동안 비동기적으로 콜백을 호출하며, 최근 애니메이션 값을 제공합니다. state 변화를 유발하는 데 유용합니다. (예를 들어 유저가 가까이 드래그할 때 bobble을 새 옵션에 스냅핑하는 것). 큰 state 변화는, 60fps에서 실행되어야 하는 패닝과 같은 연속 제스쳐에 비해서, 몇 개의 프레임이 지연되는 것에 대해 덜 민감하기 때문입니다. 

\`Animated\` 는 애니메이션이 일반 Javascript 이벤트 루프와 관계없이 고성능 방식으로 실행될 수 있도록, 완전한 직렬화가 가능하게 설계되었습니다.  이러한 방식은 완전 동기적 시스템에 비해 다루기가 까다로울 수 있지만, API에 확실히 영향을 미칩니다. 이러한 한계점 중 일부를 해결하기 위해서\`Animated.Value.addListener\` 를 사용할 수 있는데, 이는 향후 성능에 영향을 미칠 수 있으므로 남용하지 않는 것이 좋습니다. 

### Using the native driver[#](https://reactnative.dev/docs/animations#using-the-native-driver)
Animated API는 직렬화가 가능하게 설계되었습니다. [네이티브 드라이버](https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated)를 사용해서, 애니메이션 실행 전에 애니메이션에 대한 모든 것을 네이티브로 전달할 수 있습니다. 이렇게 함으로써, 네이티브 코드가 UI 스레드에서 프레임마다 일일히 브릿지를 거쳐갈 필요 없이 애니메이션을 수행할 수 있게 합니다. 애니메이션이 시작되면 애니메이션에 영향을 미치지 않고 JS 스레드를 차단할 수 있습니다. 

일반 애니메이션에 네이티브 드라이버를 사용하는 것은 간단합니다. 애니메이션을 시작할 때 애니메이션 설정에 \`useNativeDriver: true\` 를 추가하면 됩니다.  

\`\`\`jsx
Animated.timing(this.state.animatedValue, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true // <-- 추가
}).start();
\`\`\`

애니메이션 변수는 오직 하나의 드라이버와만 호환이 되기 때문에, 애니메이션 변수에 대해 애니메이션을 시작할 때 네이티브 드라이버를 사용하는 경우 해당 애니메이션 변수 상의 모든 애니메이션이 같은 드라이버를 사용하는지 확인해야 합니다. 

네이티브 드라이버는 \`Animated.event\`와 함께 작동할 수도 있습니다. 이는 네이티브 드라이버 없이 스크롤 위치를 따라가는 애니메이션에 특히 유용합니다. 이 애니메이션은 리액트 네이티브의 비동기 특성으로 인해 항상 제스쳐 뒤에서 프레임을 실행합니다. 

\`\`\`jsx
<Animated.ScrollView // <-- 애니메이션된 ScrollView wrapper 사용
  scrollEventThrottle={1} // <-- 1을 사용해 누락된 이벤트가 없는지 확인하기
  onScroll={Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: this.state.animatedValue }
        }
      }
    ],
    { useNativeDriver: true } // <-- 추가
  )}>
  {content}
</Animated.ScrollView>
\`\`\`

[RN 테스터 앱](https://github.com/facebook/react-native/blob/master/packages/rn-tester/)을 실행한 다음 네이티브 애니메이션 예제를 로드하면 작동 중인 네이티브 드라이버를 확인할 수 있습니다. 이러한 예제가 어떻게 생성되었는지 알아보기 위해 [소스 코드](https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js)를 살펴볼 수도 있습니다. 

### 주의사항[#](https://reactnative.dev/docs/animations#caveats)
Animated API로 할 수 있는 모든 것이 현재 네이티브 드라이버에서 지원되는 것은 아닙니다. non-layout 속성에만 애니메이션을 적용할 수 있습니다. 애니메이션은 transform, opacity 등에서는 작동하지만, Flexbox나 position 속성에서는 작동하지 않습니다. Animated.event의 경우, 버블링 이벤트가 아닌 직접적인 이벤트에서만 작동합니다. 이는 \`PanResponder\`에서는 작동하지 않지만\`ScrollView#onScroll\`와 같은 것에서는 작동한다는 것을 뜻합니다. 

애니메이션이 실행 중일 때, \`VirtualizedList\` 컴포넌트가 더 많은 행을 렌더링하지 못하게 할 수 있습니다. 사용자가 리스트를 스크롤하는 동안 길거나 반복되는 애니메이션을 실행해야하는 경우, 애니메이션 설정에서 \`isInteraction: false\` 를 사용해 이 이슈를 방지할 수 있습니다. 

### 명심하십시오[#](https://reactnative.dev/docs/animations#bear-in-mind)
\`rotateY\`, \`rotateX\` 등의 transform 스타일을 사용하는 동안, transform 스타일 \`perspective\`가 올바른 위치에 있는지 확인하세요. \`perspective\`가 없으면 일부 애니메이션이 Android에서 렌더링되지 않을 수 있습니다. 아래는 예시입니다. 

\`\`\`jsx
<Animated.View
  style={{
    transform: [
      { scale: this.state.scale },
      { rotateY: this.state.rotateY },
      { perspective: 1000 } // 이 라인이 없으면 애니메이션은 iOS에서는 잘 작동하지만 Android에서는 렌더링되지 않습니다
    ]
  }}
/>
\`\`\`

### 추가 예시[#](https://reactnative.dev/docs/animations#additional-examples)

RNTester 앱에는\`Animated\`의 다양한 사용 예시가 있습니다.

- [AnimatedGratuitousApp](https://github.com/facebook/react-native/tree/master/packages/rn-tester/js/examples/Animated/AnimatedGratuitousApp)
- [NativeAnimationsExample](https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js)

## \`LayoutAnimation\` API[#](https://reactnative.dev/docs/animations#layoutanimation-api)
\`LayoutAnimation\`을 통해 전역에서 다음 렌더/레이아웃 주기에 모든 뷰에 사용될 애니메이션을 \`create\`하거나 \`update\`하도록 설정할 수 있습니다. Flexbox 레이아웃에서 특정한 속성에 애니메이션을 바로 적용하기 위해서 계산이나 측정 과정 없이 레이아웃을 업데이트하는 데 유용합니다. 특히 레이아웃 변화가 부모 요소의 크기에 영향을 미치는 경우 (예: 부모 요소의 크기를 같이 증가시키고, 아래 쪽 행을 밀어내거나 컴포넌트 간의 명시적인 조정을 요구하는 "더보기" 확장)에 유용합니다.  

\`LayoutAnimation\`은 매우 강력하고 유용한 API이지만, \`Animated\`나 다른 애니메이션 라이브러리보다 훨씬 더 적은 컨트롤을 제공합니다. 따라서\`LayoutAnimation\`으로 원하는 것을 구현하지 못하는 경우, 다른 접근법을 사용해야할 수도 있습니다. 

**Android**에서 작동하게 하려면 \`UIManager\`를 통해 다음과 같이 플래그를 지정해야합니다. 

\`\`\`jsx
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
\`\`\`

**LayoutAnimations**
`

export const code3_7 = `

\`\`\`jsx
import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
\`\`\`
`

export const text3_8 = `
위 예제는 미리 설정된 변수를 사용하며, 애니메이션을 원하는 대로 커스터마이징할 수 있습니다. 자세한 정보는 [\`LayoutAnimation.js\`](https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js)를 참고하세요. 

## 추가 참고 사항[#](https://reactnative.dev/docs/animations#additional-notes)

### \`requestAnimationFrame\`[#](https://reactnative.dev/docs/animations#requestanimationframe)
\`requestAnimationFrame\`은 브라우저의 익숙한 pollyfill입니다. 함수를 유일한 매개변수로 받아서, 다음 페인팅 전에 해당 함수를 호출합니다. 이 API는 모든 Javscript 기반 애니메이션 API의 기초가 되는 필수적인 구성 요소입니다. 일반적으로 직접 호출할 필요 없이, 애니메이션 API들이 프레임 업데이트를 관리해줍니다. 

### \`setNativeProps\`[#](https://reactnative.dev/docs/animations#setnativeprops)
[Direct Manipulation 섹션](https://reactnative.dev/docs/direct-manipulation)에서 언급했듯이, \`setNativeProps\`는 네이티브 지원 컴포넌트(복합 컴포넌트와는 달리, 네이티브 뷰에 의해 실제로 지원되는 컴포넌트)의 속성을 \`setState\`나 컴포넌트 계층 구조의 리렌더링 없이 직접 수정할 수 있게 해줍니다.

scale을 업데이트하는 Rebound 예제에서 이것을 사용해볼 수 있습니다. 우리가 업데이트하는 컴포넌트가 깊게 중첩되어 있고, \`shouldComponentUpdate\`로 최적화되지 않은 경우 유용할 수 있습니다. 

애니메이션의 프레임 수가 60fps 이하로 떨어지는 경우, \`setNativeProp을\` 또는 \t\`shouldComponentUpdate\`를 사용해 최적화할 수 있습니다. 또는 [\`useNativeDriver\` 옵션](https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated)을 사용하여 JavaScript 스레드가 아닌 UI 스레드에서 애니메이션을 실행할 수 있다. 

또한 InteractionManager를 사용해 애니메이션이 완료될 때까지 계산 집약적인 작업을 연기할 수도 있습니다. 인앱 개발자 메뉴의 "FPS Moinitor" 툴을 사용해 프레임 속도를 모니터링할 수 있습니다. 

`

export const text4_1 = `
# 제스쳐 응답 시스템
제스쳐 응답 시스템은 앱에서 제스쳐의 생명주기를 관리합니다. 터치는 앱이 사용자의 의도를 무엇으로 파악했는지에 따라 여러 단계를 거칠 수 있습니다. 예를 들어, 앱은 해당 터치가 스크롤되는지, 위젯에서 슬라이딩되는지, 혹은 탭하는지를 확인할 필요가 있습니다. 이는 터치하는 동안에 변경될 수도 있고, 동시에 발생하는 여러 번의 터치가 될 수도 있습니다. 

터치 응답 시스템은 컴포넌트가 이러한 터치 상호작용을 부모 컴포넌트 또는 자식 컴포넌트에 대한 추가적인 정보 없이도 다룰 수 있도록 하는 데 필요합니다. 

### 모범 사례[#](https://reactnative.dev/docs/gesture-responder-system#best-practices)
앱의 사용감을 높이려면, 모든 동작은 다음 속성들을 따라야 합니다. 

- 피드백/강조 표시 - 유저의 터치를 무엇으로 처리하고 있는지, 터치를 해제했을 때 무슨 일이 일어날지 보여줍니다. 
- 취소 기능 - 동작을 할 때, 유저는 손가락을 멀리 드래그하여 터치 중간에 동작을 취소시킬 수 있어야 합니다.

이러한 기능들은 사용자가 실수에 대한 두려움 없이 시도하고 상호작용할 수 있게 해주기 때문에, 앱을 사용하는 동안 사용자를 더 편안하게 만듭니다. 

### TouchableHighlight 및 Touchable*[#](https://reactnative.dev/docs/gesture-responder-system#touchablehighlight-and-touchable)
응답 시스템은 사용하기 복잡할 수 있습니다. 그래서 "탭할 수 있는" 것들에 대한 추상\`Touchable\` 구현을 제공합니다. 이것은 응답 시스템을 사용하며, 탭 상호작용을 선언적으로 구성할 수 있게 해줍니다. 웹에서 버튼이나 링크를 사용하는 곳이면 어디에서든 \`TouchableHighlight\`을 사용하세요. 

## 응답자 생명주기[#](https://reactnative.dev/docs/gesture-responder-system#responder-lifecycle
뷰는 정확한 negotiation 메소드를 상속함으로써 터치 응답자(responder)가 될 수 있습니다. 뷰에게 응답자가 되고 싶은지 묻는 두 가지 메소드가 있습니다. 

- \`View.props.onStartShouldSetResponder: (evt) => true,\` - 해당 뷰가 터치의 시작점에서 응답자가 되고 싶어하는가?
- \`View.props.onMoveShouldSetResponder: (evt) => true,\` - 응답자가 아닐 때, 뷰 위의 모든 터치에서 호출됨 : 해당 뷰가 터치 응답성을 요구하는가?

만약 뷰가 true를 리턴하고 응답자가 되려고 시도한다면, 다음 중 한 가지가 발생합니다. 

- \`View.props.onResponderGrant: (evt) => {}\` - 이제 뷰가 터치 이벤트에 응답합니다. 사용자에게 무엇이 발생하고 있는지 강조하고 보여줄 때입니다. 

- \`View.props.onResponderReject: (evt) => {}\` - 현재 다른 요소가 응답자이고, 해제되지 않을 것입니다. 

뷰가 응답하는 경우, 다음 핸들러들이 호출될 수 있습니다. 

- \`View.props.onResponderMove: (evt) => {}\` - 사용자가 손가락을 움직이고 있습니다. 
- \`View.props.onResponderRelease: (evt) => {}\` - 터치가 끝날 때 발생됩니다. 즉, "touchUp"에 발생됩니다. 
- \`View.props.onResponderTerminationRequest: (evt) => true\` - 다른 요소가 응답자가 되고 싶어합니다. 현재 뷰의 응답자 해제를 허용하려면 true를 리턴합니다. 
- \`View.props.onResponderTerminate: (evt) => {}\` - 뷰의 응답자가 해제되었습니다. \`onResponderTerminationRequest\`의 호출 후에 다른 뷰로 응답자가 넘어가거나, 물어보지 않고 OS로 넘어갈 수 있습니다. (iOS의 제어 센터 / 알림 센터에서 발생)

\`evt\` 는 다음과 같은 형태의 합성 터치 이벤트입니다. 

- \`nativeEvent\`
    - \`changedTouches\` - 마지막 이벤트 이후로 변화가 발생한 모든 터치 이벤트들의 배열
    - \`identifier\` - 터치의 ID
    - \`locationX\` - 엘리먼트를 기준으로 한 터치의 X 위치
    - \`locationY\` - 엘리먼트를 기준으로 한 터치의 Y 위치
    - \`pageX\` - 루트 엘리먼트를 기준으로 한 터치의 X 위치
    - \`pageY\` - 루트 엘리먼트를 기준으로 한 터치의 Y 위치
    - \`target\` - 터치 이벤트를 수신하는 엘리먼트의 노드 ID
    - \`timestamp\` - 터치에 대한 시간 식별자, 속도 계산에 유용함
    - \`touches\` - 화면 위의 모든 현재 터치들의 배열

### ShouldSet 핸들러 캡처[#](https://reactnative.dev/docs/gesture-responder-system#capture-shouldset-handlers)
\`onStartShouldSetResponder\` 와 \`onMoveShouldSetResponder\` 는 가장 안쪽의 노드가 먼저 호출된 위치에서 버블링 패턴으로 호출됩니다. 이것은 여러 개의 뷰가 \`ShouldSetResponder\`에 대해 \`true\`를 리턴하는 경우, 가장 안쪽의 컴포넌트가 응답자가 된다는 것을 의미합니다. 이러한 방식은 모든 컨트롤과 버튼을 사용할 수 있도록 하기 때문에, 대부분의 경우 바람직하게 동작합니다. 

그러나, 간혹 부모를 응답자로 만들고 싶은 경우에는 캡처 단계를 사용해 처리할 수 있습니다. 응답 시스템이 가장 안쪽 컴포넌트로부터 버블링되어 올라가기 전에, 먼저\`onShouldSetResponderCapture\`를 발생시키면서 캡처 단계를 수행할 것입니다. 따라서 부모 뷰가 자식 뷰가 터치 시작 지점에서 응답자가 되지 못하게 하고 싶다면, 부모 뷰는 \`true\`를 리턴하는 \`onStartShouldResponderCapture\`를 가지고 있어야 합니다. 

- \`View.props.onStartShouldSetResponderCapture: (evt) => true,\`
- \`View.props.onMoveShouldSetResponderCapture: (evt) => true,\`

### PanResponder[#](https://reactnative.dev/docs/gesture-responder-system#panresponder)

더 높은 수준의 제스쳐 해석은 [PanResponder](https://reactnative.dev/docs/panresponder)를 확인하세요. 

`