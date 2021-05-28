export const text1_1 = `
# Introduction
> React Native 여정의 시작을 환영합니다! 환경 설정 가이드는 [자체 섹션](https://reactnative.dev/docs/environment-setup)으로 분리되었습니다. 문서, 네이티브 컴포넌트, React 등에 대한 소개를 계속 읽어보세요!

고급 iOS 개발자부터 React 초보자, 경력자부터 처음 프로그래밍을 시작하는 사람들까지, 다양한 사람들이 React Native를 사용합니다. 이 문서는 경험 수준이나 배경에 관계없이 모든 학습자를 위해 작성되었습니다. 

## How to use these docs
여기에서 시작해서 책처럼 순서대로 문서를 읽어나가거나, 아니면 필요한 섹션만 골라서 읽을 수도 있습니다. 이미 React에 익숙한가요? [이 섹션](https://reactnative.dev/docs/intro-react)을 건너뛰거나, 간단한 복습을 위해 읽고 넘어가도 좋습니다. 

## Prerequisites
React Native로 작업을 하려면 JavaScript에 대한 기본적인 이해가 필요합니다. JavaScript를 처음 사용하거나 복습이 필요한 경우, Mozilla Debeloper Network에서 [본격적으로 학습](https://developer.mozilla.org/en-US/docs/Web/JavaScript)하거나 [가볍게 복습](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)할 수 있습니다. 

> 이 문서는 React, Android, 또는 iOS 개발에 대한 사전지식이 없는 사람을 대상으로 작성되었지만, 열정적인 React Native 개발자에게 귀중한 학습 자료이기도 하므로, 필요한 경우 좀 더 깊이있는 자료나 글들을 링크로 올려두었습니다. 

## Interactive examples
Introduction에서는 다음과 같은 동적인 예제를 바로 실행해볼 수 있습니다. `

export const code1_1 = `
\`\`\`jsx
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

export default YourApp;
\`\`\`
`
export const text1_2 = `
위의 "Try editing me!" 텍스트를 "Hello, world!"로 변경해보세요. 

> 로컬 개발 환경 설정을 원하는 경우, [로컬 기기에서 개발 환경 설정하기](링크) 가이드를 따라 이 예제 코드를 \`App.js\` 파일에 복사하면 됩니다. (웹 개발자인 경우, 모바일 브라우저 테스트를 위한 로컬 환경이 이미 설정되어 있을 수 있습니다!)

## Function Components and Class Components (함수형 컴포넌트와 클래스형 컴포넌트)
React에서는 클래스 또는 함수를 사용해 컴포넌트를 만들 수 있습니다. 원래 클래스형 컴포넌트가 상태를 가질 수 있는 유일한 컴포넌트였지만, React의 Hooks API 도입 이후 함수형 컴포넌트에도 상태 등을 추가할 수 있게 되었습니다. 

[Hooks은 React Native 0.59에 도입](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059)되었으며, React 컴포넌트를 작성하는 미래 지향적인 방식이기 때문에, 함수형 컴포넌트 예제를 사용해 introduction을 작성했습니다.  
필요한 경우, 다음과 같은 토글에서 클래스형 컴포넌트 또한 다루고 있습니다. 

(toggle)
함수형 컴포넌트`

export const code1_2 = `
\`\`\`jsx
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default HelloWorldApp;
\`\`\`
`

export const text1_3 = `
클래스형 컴포넌트`

export const code1_3 = `
\`\`\`jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default HelloWorldApp;
\`\`\`
`
export const text1_4 = `
[이 문서의 이전 버전](링크)에서 더 많은 클래스형 컴포넌트 예제를 찾을 수 있습니다.

## Developer Notes
다양한 개발 배경을 가진 사람들이 React Native를 배우고 있습니다. 당신은 웹에서 Android, iOS 등에 이르는 폭넓은 기술 경험을 가지고 있을 수도 있습니다. 우리는 모든 배경의 개발자들을 위한 문서를 작성하려고 노력했습니다. 때로는 다음과 같은 플랫폼별 설명이 제공됩니다.

(toggle)
Android : Android 개발자는 이 개념에 친숙할 수도 있습니다.
iOS : iOS 개발자는 이 개념에 친숙할 수도 있습니다.
Web : Web 개발자는 이 개념에 친숙할 수도 있습니다.

## Formatting
메뉴는 굵은 글씨로 작성되었으며 꺽쇠를 사용해 하위 메뉴를 탐색합니다. 예: **Android Studio > Preferences**

---
가이드가 어떻게 구성되었는지 알아봤으니, 이제 React Native: [네이티브 컴포넌트](https://reactnative.dev/docs/intro-react-native-components)의 기초에 대해 알아보겠습니다.
`
export const text2_1 = `
# Core Components and Native Components

React Native는 [React](https://reactjs.org/)와 앱 플랫폼의 네이티브 기능을 사용하여 Android 및 iOS 애플리케이션을 구축하기 위한 오픈 소스 프레임워크입니다. React Native에서는 JavaScript를 사용하여 플랫폼의 API에 접근하고, React 컴포넌트(재사용 및 중첩 가능한 코드 번들)를 사용하여 UI 레이아웃과 동작을 구현할 수 있습니다. 다음 섹션에서 React에 대해 자세하게 알아볼 수 있습니다. 하지만 먼저, React Native에서 컴포넌트가 작동하는 방식을 살펴 보겠습니다. 

## Views and mobile development
Android 및 iOS 개발에서, **view**는 UI의 기본 구성 요소이며, 텍스트, 이미지를 표시하거나 사용자 입력에 응답하는데 사용할 수 있는 화면 상의 작은 직사각형 요소입니다. 한 줄의 텍스트나 하나의 버튼과 같이 앱에서 가장 작은 시각적 요소 또한 view라고 볼 수 있습니다. 일부 view는 다른 view를 포함할 수 있습니다. 모든 것이 view로 이루어져있습니다!

![](https://user-images.githubusercontent.com/65345381/113455136-db211f00-9444-11eb-9075-92465433d3e0.png)

## Native Components
Android 개발에서는 Kotlin 또는 Java로 view를 작성하고, iOS 개발에서는 Swift 또는 Objective-C를 사용합니다. React Native에서는 React 컴포넌트를 사용하는 JavaScript로 view를 호출할 수 있습니다. 런타임에 React Native는 해당 컴포넌트에 상응하는 Android 및 iOS view를 생성합니다. React Native 컴포넌트는 Android 및 iOS 와 동일한 view로 지원되기 때문에, React Native 앱은 다른 모든 앱들처럼 보이고, 느껴지고, 성능을 발휘합니다. 이러한 플랫폼 지원 컴포넌트를 **네이티브 컴포넌트**라고 부릅니다. 

React Native는 지금 바로 앱을 빌드하는 데 사용할 수 있는 필수적인 네이티브 컴포넌트들과 함께 제공됩니다. 이러한 컴포넌트들이 React Native의 **코어 컴포넌트**입니다.  

React Native를 사용하면 앱의 고유한 요구에 맞게 [Android](https://reactnative.dev/docs/native-components-android) 및 [iOS](https://reactnative.dev/docs/native-components-ios)용 네이티브 컴포넌트를 직접 빌드할 수도 있습니다. 이러한 커뮤니티 기반 컴포넌트들의 생태계 또한 활성화 되어 있습니다. 커뮤니티에서 무엇이 만들어지고 있는지 알아보려면 [Native Directory](https://reactnative.directory/)를 확인해보세요. 

## Core Components
React Native에는 form 컨트롤에서부터 activity indicator까지 모든 것을 다루는, 많은 코어 컴포넌트가 있습니다. [API section](https://reactnative.dev/docs/components-and-apis)에 모두 문서화되어 있습니다. 주로 다음 코어 컴포넌트들로 작업합니다.

| RN컴포넌트                                                 | ANDROID        | IOS              | 웹                  |
| :----------------------------------------------------------- | :------------- | :--------------- | :------------------ |
| <View>                                                       | <ViewGroup>    | <UIView>         | <div>               |
| 레이아웃 (flexbox), 스타일, 일부 터치 처리 및 접근성 제어를 지원하는 컨테이너 |               |                  |                     |
| <Text>                                                       | <TextView>     | <UITextView>   | <p>                   |
| 디스플레이, 스타일, 텍스트의 문자열을 표시하고 터치 이벤트도 다룸            |                |                  |                     |
| <Image>                                                      | <ImageView>    | <UIImageView>  | <img>                 |
| 다양한 유형의 이미지를 표시함                                       |                |                  |                     |
| <ScrollView>                                                 | <ScrollView>   | <UIScrollView> | <div>                 |
| 여러 컴포넌트 및 뷰를 포함할 수 있는 일반 스크롤 컨테이너                 |                |                  |                     |
| <TextInput>                                                  | <EditText>     | <UITextField>    | <input type="text"> |
| 사용자가 텍스트를 입력할 수 있음                                     |                |                  |                     |





다음 섹션에서는 React의 작동 방식을 배우기 위해 이러한 코어 컴포넌트들을 조합하게 됩니다. 지금 아래에서 실행해보세요!

**examples**
`
export const code2_1=`

\`\`\`jsx
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;  
\`\`\`
`
export const text2_2 = `
React Native는 React 컴포넌트와 동일한 API 구조를 사용하기 때문에, React Native를 시작하려면 React component API를 이해해야 합니다. [다음 섹션](https://reactnative.dev/docs/intro-react)에서는 이 주제에 대해 간략하게 소개하거나 복습합니다. 하지만 이미 React에 대해 잘 알고 있다면 언제든지 [건너뛸 수 있습니다](https://reactnative.dev/docs/handling-text-input). 

![](https://user-images.githubusercontent.com/65345381/113455203-0146bf00-9445-11eb-95a2-d2d3d5e992ce.png)

`

export const text3_1 = `
# React Fundamentals

React Native는 JavaScript로 사용자 인터페이스를 구축하는 데 널리 사용되는 오픈 소스 라이브러리인 React에서 실행됩니다. React Native를 최대한 활용하기 위해서는, React 자체를 이해하는 것이 도움이 됩니다. 이 섹션에서 React를 처음 시작하거나, 복습해 볼 수 있습니다.  

React의 핵심 개념에 대해 알아보겠습니다.  
- 컴포넌트
- JSX
- props
- state

더 자세히 알아보고 싶다면 [React 공식문서](https://reactjs.org/docs/getting-started.html)를 확인해 보는 것이 좋습니다.   

## Your first component
이 React 소개 문서의 예제에는, 우리에게 친숙하고 가까운 동물인 고양이가 등장합니다. 
고양이에게는 이름과 머무를 카페가 필요합니다. 
다음은 당신의 첫 번째 Cat 컴포넌트입니다. 

(toggle1)
함수형 컴포넌트
`

export const code3_1 = `
\`\`\`jsx
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
\treturn (
    \t\t<Text>Hello, I am your cat!</Text>
   \t);
}

export default Cat;
\`\`\`
`

export const text3_2 = `

\`Cat\` 컴포넌트를 정의하려면, 먼저 자바스크립트의 [\`import\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)를 사용해 React와 React Native의 Text 코어 컴포넌트를 import해야 합니다. 

\`\`\`jsx
import React from 'react';
import { Text } from 'react-native';
\`\`\`

컴포넌트는 함수로 시작합니다. 
\`\`\`jsx
const Cat = () => {};
\`\`\`

컴포넌트는 설계도나 청사진으로 생각할 수 있습니다. 함수형 컴포넌트가 반환하는 것은 **React 엘리먼트**로 렌더링됩니다. React 엘리먼트를 사용해 화면에서 보고 싶은 내용을 설명할 수 있습니다. 

여기에서 \`Cat\` 컴포넌트는 \`<Text>\` 요소를 렌더링합니다. 

\`\`\`jsx
const Cat = () => {
  return <Text>Hello, I am your cat!</Text>;
};
\`\`\`

다음과 같이 앱 전체에서 사용할 수 있도록, Javascript의 \`export default\` 로 함수형 컴포넌트를 내보낼 수 있습니다. 

\`\`\`jsx
const Cat = () => {
  return <Text>Hello, I am your cat!</Text>;
};

export default Cat;
\`\`\`

> 이것은 컴포넌트를 내보내는 여러 가지 방법 중 하나입니다. 이러한 종류의 내보내기는 Snack Player에서 잘 작동합니다. 그러나 앱의 파일 구조에 따라, 다른 컨벤션을 사용해야 할 수도 있습니다. [Javascript import 및 export에 관한 편리한 치트시트](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)가 도움이 될 수 있습니다. 

이제 \`return\` 문을 자세히 살펴봅시다. \`<Text>Hello, I am your cat!</Text>\` 는 엘리먼트 작성을 편리하게 해주는 자바스크립트 구문의 일종인 JSX를 사용하고 있습니다. 

---
(toggle2)
클래스형 컴포넌트
클래스형 컴포넌트는 함수형 컴포넌트보다 코드가 조금 더 장황합니다.
`

export const code3_2 = `
\`\`\`jsx
import React, { Component } from 'react';
import { Text } from 'react-native';

class Cat extends Component {
  render() {
    return (
      <Text>Hello, I am your cat!</Text>
    );
  }
}

export default Cat;
\`\`\`
`

export const text3_3 = `
React에서 \`Component\`를 추가로 import해야 합니다.  

\`\`\`jsx
import React, { Component } from 'react';
\`\`\`

컴포넌트는 함수로 시작하는 대신 \`Component\`를 확장한 클래스로 시작합니다. 

\`\`\`jsx
class Cat extends Component {}
\`\`\`

클래스형 컴포넌트는 \`render()\` 메소드를 가지고 있습니다. 이 메소드 안에서 반환되는 것은 React 엘리먼트로 렌더링됩니다. 

\`\`\`jsx
class Cat extends Component {
  render() {
    return <Text>Hello, I am your cat!</Text>;
  }
}
\`\`\`

그리고 함수형 컴포넌트와 마찬가지로, 클래스형 컴포넌트를 내보낼 수 있습니다. (export)

\`\`\`jsx
class Cat extends Component {
  render() {
    return <Text>Hello, I am your cat!</Text>;
  }
}

export default Cat;
\`\`\`

> 이것은 컴포넌트를 내보내는 여러 가지 방법 중 하나입니다. 이러한 종류의 내보내기는 Snack Player에서 잘 작동합니다. 그러나 앱의 파일 구조에 따라, 다른 컨벤션을 사용해야 할 수도 있습니다. [Javascript import 및 export에 관한 편리한 치트시트](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)가 도움이 될 수 있습니다. 

이제 \`return\` 문을 자세히 살펴봅시다. \`<Text>Hello, I am your cat!</Text>\` 는 엘리먼트 작성을 편리하게 해주는 자바스크립트 구문의 일종인 JSX를 사용하고 있습니다. 



## JSX
React와 React Native는 다음과 같이 Javascript 내부에서 엘리먼트를 작성할 수 있게 해주는 JSX 구문을 사용합니다: \`<Text>Hello, I am your cat!</Text>\`. React 문서에는 더 자세한 내용을 알아볼 수 있는 [JSX에 대한 포괄적인 가이드](https://reactjs.org/docs/jsx-in-depth.html)가 있습니다. JSX는 Javascript이기 때문에, 내부에서 변수를 사용할 수 있습니다. 여기에서 고양이 이름 \`name\`을 선언하고, \`<Text>\` 안에 중괄호로 삽입합니다. 

중괄호 예제  
`

export const code3_3 = `
\`\`\`jsx
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
  const name = "Maru";
  return (
    <Text>Hello, I am {name}!</Text>
  );
}

export default Cat;
\`\`\`
`

export const text3_4 = `
모든 Javascript 표현은 \`{getFullName("Rum", "Tum", "Tugger")}\` 와 같은 함수 호출을 포함하여 중괄호 사이에서 동작합니다.  

중괄호 예제
`

export const code3_4 = `
\`\`\`jsx
import React from 'react';
import { Text } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
  return (
    <Text>
      Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
    </Text>
  );
}

export default Cat;
\`\`\`
`

export const text3_5 = `
중괄호 \`{}\`를 JSX에서 JS 기능으로 이동하는 포탈을 만든다고 생각할 수도 있습니다!

> JSX는 React 라이브러리에 포함되어 있기 때문에,  파일의 최상단에 \`import React from 'react'\` 구문이 없으면 작동하지 않습니다. 

## Custom Components 사용자 정의 컴포넌트
React Native의 코어 컴포넌트를 이미 배웠습니다. React에서는 이러한 컴포넌트들을 서로 중첩시켜 새로운 컴포넌트를 만들 수 있습니다. 이러한 중첩가능한, 재사용가능한 컴포넌트는 React 패러다임의 핵심입니다.

예를 들어, Text와 TextInput을 아래의 View에서 중첩시키면, React Native가 한꺼번에 렌더링합니다. 

Custom Components
`

export const code3_5 = `
\`\`\`jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}
\`\`\`
`

export const text3_6 = `
개발자 참고사항
> Android : Android에서는 view의 자식들이 화면에 어떻게 배치될지 정의하기 위해 보통 \`LinearLayout\`, \`FrameLayout\`, \`RelativeLayout\` 안에 view를 작성합니다. React Native에서 \`view\`는 자식 레이아웃에 Flexbox를 사용합니다. 자세한 내용은 [Flexbox를 사용한 레이아웃 가이드]()를 참고하세요.  
> Web : 웹 개발에 익숙하다면, \`<View>\`와 \`<Text>\`을 보고 HTML을 떠올렸을 수도 있습니다! \`<View>\`와 \`<Text>\`는 어플리케이션 개발에서의 \`<div>\`와 \`<p>\` 태그로 생각할 수 있습니다. 

\`<Cat>\` 을 사용해 코드를 반복하지 않고 이 컴포넌트를 여러 위치에서 여러 번 렌더링할 수 있습니다. 
`

export const code3_6 = `
\`\`\`jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
}

export default Cafe;
\`\`\`
`

export const text3_7 = `
다른 컴포넌트를 렌더링하는 모든 컴포넌트는 **부모 컴포넌트**입니다. 여기에서 \`Cafe\`는 \`Cat\`을 **자식 컴포넌트**로 가지는 부모 컴포넌트입니다. 

카페에 원하는 만큼 고양이를 넣을 수 있습니다. 각각의 \`<Cat>\`은 props으로 커스터마이징할 수 있는 고유한 엘리먼트를 렌더링합니다. 

## Props
**Props**은 "properties"의 줄임말입니다. Props는 React 컴포넌트를 커스터마이징할 수 있게 해줍니다. 예를 들어, 각각의 \`<Cat>\`에 렌더링할 \`Cat\`의\`name\`을 전달합니다. 

Mutiple props
`
export const code3_7 = `
\`\`\`jsx
import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

export default Cafe;
\`\`\`
`

export const text3_8 = `
대부분의 React Native 코어 컴포넌트 또한 props로 커스터마이징할 수 있습니다. 예를 들어, [\`Image\`](https://reactnative.dev/docs/image)를 사용할 때, 어떤 이미지를 보여줄지 정의하기 위해 [\`source\`](https://reactnative.dev/docs/image#source)라는 이름의 prop을 전달합니다. 

props
`

export const code3_8 = `
\`\`\`jsx
import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

export default CatApp;
\`\`\`
`

export const text3_9 = `
\`Images\`는 속성-값 쌍으로 이루어진 디자인과 레이아웃에 대한 JS 객체를 전달받는 \`style\` 을 포함해, 다양한 prop을 가지고 있습니다.  
> \`style\`의 width와 height를 감싸고 있는 이중 중괄호 \`{{ }}\` 를 보세요. JSX에서, Javascript 변수는 \`{}\`로 참조됩니다. 이것은 배열이나 숫자와 같이 문자열을 외의 것을 props로 전달할 때 편리합니다. 그러나, JS 객체 또한 \`{width: 200, height: 200}\` 로 나타냅니다. 따라서 JSX에 JS 객체를 넘겨줄 때는, 반드시 객체를 \`{{width: 200, height: 200}}\`와 같이 중괄호로 한 번 더 감싸야 합니다. 

props와 [\`Text\`](https://reactnative.dev/docs/text), [\`Image\`](https://reactnative.dev/docs/image), [\`View\`](https://reactnative.dev/docs/view) 코어 컴포넌트로 많은 것을 만들어낼 수 있습니다! 하지만 동적인 것을 만들기 위해서는 state가 필요합니다. 

## state
props가 컴포넌트가 어떻게 렌더링될지 설정하기 위해 사용하는 인수라면, state는 컴포넌트의 개인 데이터 저장소와 같습니다. State는 시간에 따라 변화하거나 사용자와의 상호작용에서 발생하는 데이터를 처리하는 데 유용합니다. State는 컴포넌트에 메모리를 제공합니다!

> 일반적으로, props는 컴포넌트를 렌더링할 때 설정하기 위해 사용합니다. state는 시간에 따라 변화하는 컴포넌트 데이터를 추적하는 데에 사용합니다.

다음 예시는 배고픈 고양이 두 마리가 먹이를 기다리고 있는 고양이 카페에서 일어납니다. (이름과 달리) 시간이 지남에 따라 변화할 고양이들의 배고픔은 state로 저장됩니다. 고양이들에게 먹이를 주려면, 고양이의 상태를 업데이트하는 버튼을 누르세요. 

함수형 컴포넌트 (toggle 1)
[React의 \`useState\` Hook](https://reactjs.org/docs/hooks-state.html)을 호출해 컴포넌트에 state를 추가할 수 있습니다. Hook은 리액트 기능을 "후크"할 수 있게 해주는 일종의 함수입니다. 예를 들어, \`useState\` 는 함수형 컴포넌트에 state를 추가할 수 있게 해주는 Hook입니다. React 문서에서 [다른 종류의 Hook](https://reactjs.org/docs/hooks-intro.html)에 대해 더 자세히 알아볼 수 있습니다. 

State
`

export const code3_9 = `
\`\`\`
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
}

export default Cafe;
\`\`\`
`

export const text3_10 = `
먼저, 다음과 같이 React에서 \`useState\`를 import 합니다. 

\`\`\`jsx
import React, { useState } from 'react';
\`\`\`

그리고 나서 함수 안에서 \`useState\` 를 호출해 컴포넌트의 state를 정의합니다. 이 예시에서 \`useState\` 는 \`isHungry\` state 변수를 생성합니다. 

\`\`\`jsx
const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  // ...
};
\`\`\`

> \`useState\`는 문자열, 숫자, Boolean, 배열, 객체 등 모든 종류의 데이터를 저장하는 데 사용할 수 있습니다. 예를 들어 \`const [timesPetted, setTimesPetted] = useState(0)\`로 고양이를 쓰다듬은 횟수를 저장할 수 있습니다. 

\`useState\`를 호출하면 다음 두 가지 작업을 수행합니다. 
- 초기값을 이용해 "state 변수"를 생성합니다. 위 예시의 경우, state 변수는 \`isHungry\`이고 초기값은 \`true\` 입니다. 
- state 변수의 값을 설정하는 함수 \`setIsHungry\`를 생성합니다.

어떤 이름을 사용하는지는 중요하지 않습니다. 하지만 패턴을 \`[<getter>, <setter>] = useState(<initialValue>)\`로 생각하면 편리할 수 있습니다. 

다음으로, \`Button\` 코어 컴포넌트를 추가하고 \`onPress\` props을 전달합니다. 

\`\`\`jsx
<Button
  onPress={() => {
    setIsHungry(false);
  }}
  //..
/>
\`\`\`

이제 누군가 버튼을 누르면, \`onPress\`가 발생되며\`setIsHungry(false)\`가 호출됩니다. \`setIsHungry(false)\`는 state 변수 \`isHungry\`를 \`false\`로 설정합니다. \`isHungry\`가 false이면, \`Button\`의 \`disabled\` prop이 \`true\`로 설정되며 \`title\` prop 또한 변경됩니다. 
> \`isHungry\`는 const임에도 재할당할 수 있는 것처럼 보입니다. \`setIsHungry\`와 같은 state 설정 함수가 호출되면, 컴포넌트가 리렌더링됩니다. 이 경우 \`Cat\` 함수가 다시 실행되며 \`useState\`가 \`isHungry\`의 다음 변수를 제공합니다. 

마지막으로, 고양이들을 \`Cafe\` 컴포넌트 안에 넣으세요. 

\`\`\`jsx
const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};
\`\`\`

> 위의 \`<>\`와 \`</>\`가 보이시나요? 이것은 JSX [fragments](fragments)의 일부입니다. 인접한 JSX 엘리먼트들은 하나의 닫는 태그로 감싸져야합니다. Fragment를 사용하면 \`View\`와 같은 불필요한 엘리먼트를 추가로 중첩시켜 감싸지 않아도 됩니다. 

---
이제 React 및 React Natived의 코어 컴포넌트를 모두 살펴봤습니다. [\`<TextInput>\` 다루기](https://reactnative.dev/docs/handling-text-input)를 통해 이러한 컴포넌트들에 대해 더 자세히 알아보세요. 
`

export const text4_1 = `
# Handling Text Input

[\`TextInput\`](https://reactnative.dev/docs/textinput#content) 은 사용자가 텍스트를 입력할 수 있는 [코어 컴포넌트](https://reactnative.dev/docs/intro-react-native-components)입니다. 텍스트가 변경될 때마다 호출되는 함수를 인자로 받는\`onChangeText\` prop, 텍스트가 제출될 때마다 호출되는 함수를 인자로 받는 \`onSubmitEditing\` prop을 가지고 있습니다.  

예를 들어, 사용자가 입력하는 단어들을 다른 언어로 번역한다고 해봅시다. 이 새로운 언어에서는 모든 단어가 🍕로 쓰여집니다. 따라서 "Hello there Bob"라는 문장은 "🍕🍕🍕"로 번역됩니다. 

**examples**
Handling Text Input 텍스트 입력 처리하기
`


export const code4_1 = `
\`\`\`
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

export default PizzaTranslator;
\`\`\`
`

export const text4_2 = `
위 예제에서 \`text\`는 시간에 따라 변화하므로 state에 저장합니다. 

텍스트 입력을 통해 할 수 있는 것들은 훨씬 더 많습니다. 예를 들어, 사용자가 텍스트를 입력하는 동안 내부 텍스트의 유효성을 검사할 수 있습니다. 더 자세한 예시를 보려면, [controlled 컴포넌트에 관한 리액트 문서](https://reactjs.org/docs/forms.html#controlled-components) 또는 [TextInput에 관한 참조 문서](https://reactnative.dev/docs/textinput)를 확인하세요. 

텍스트 입력은 사용자가 앱과 상호작용하는 방식 중 하나입니다. 다음으로, 다른 종류의 입력을 살펴보고 [터치를 어떻게 처리할지](https://reactnative.dev/docs/handling-touches) 알아봅니다. 
`

export const text5_1 = `
# Using a ScrollView
[ScrollView]는 여러 컴포넌트 및 뷰를 포함할 수 있는 일반적인 스크롤 컨테이너입니다. 스크롤 가능한 항목은 여러 종류가 있으며, 수직으로 또는 수평으로 (\`horizontal\` 속성을 설정함으로써) 스크롤할 수 있습니다. 

아래 예제에서는 이미지와 텍스트가 함께 혼합된 수직 \`ScrollView\`를 생성합니다. 
**examples**
Using ScrollView
`

export const code5_1 = `
\`\`\`jsx
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </ScrollView>
);

export default App;
\`\`\`
`

export const text5_2 = `
\`Scrollview\` 는 \`pagingEnabled\` props을 사용해 스와이프 제스처로 뷰를 페이징하도록 구성할 수 있습니다. [ViewPager](https://github.com/callstack/react-native-viewpager) 를 사용해 Android에서 뷰 사이를 가로로 스와이프 할 수도 있습니다. 

iOS 에서는 하나의 item으로 이루어진 \`ScrollView\` 를 사용해 사용자가 콘텐츠를 확대/축소하도록 할 수 있습니다. 또한 \`maximumZoomScale\` 및 \`minimumZoomScale\` props을 설정하면 사용자는 핀치 및 확장 제스처를 사용하여 확대/축소를 할 수 있습니다. 

ScrollView는 제한된 크기의 적은 양을 표시하는 데에 가장 적합합니다. \`ScrollView\`의 모든 엘리먼트와 뷰는 현재 화면에 보이지 않더라도 전부 렌더링됩니다. 만약 화면에 표시할 수 있는 것보다 많은 item을 가진 긴 리스트를 가지고 있다면, \`ScrollView\` 대신 \`Flatlist\`를 사용해야 합니다. 이제 [리스트 뷰](https://reactnative.dev/docs/using-a-listview)에 대해 알아봅시다. 
`

export const text6_1 = `
# Using List Views
React Native는 데이터 리스트를 표시하기 위한 컴포넌트 모음을 제공합니다. 일반적으로 [\`FlatList\` ](https://reactnative.dev/docs/flatlist) 또는 [\`SectionList\`](https://reactnative.dev/docs/sectionlist) 를 사용하게 됩니다. 

\`FlatList\` 는 비슷한 구조에서 변경되는 데이터의 스크롤 리스트를 표시합니다. \`FlatList\` 는 항목의 수가 시간에 따라 변경될 수 있는 긴 데이터 리스트에 적합합니다. 보다 일반적인 [\`ScrollView\`](https://reactnative.dev/docs/using-a-scrollview)와 달리, \`FlatList\`는 모든 엘리먼트를 한 번에 렌더링하지 않고, 현재 화면에 보여지는 부분만 렌더링하기 때문입니다. 

\`FlatList\` 컴포넌트에는 \`data\`와 \`renderItem\`, 두 개의 props가 필요합니다. \`data\`는 데이터 리스트의 정보 소스입니다. \`renderItem\`은 데이터 소스에서 하나의 항목을 가져와 렌더링할 컴포넌트를 포맷에 맞게 반환합니다. 

이 예제는 하드코딩된 데이터로 이루어진 기본적인 \`FlatList\`를 생성합니다. \`data\` props의 각 항목은 \`Text\` 컴포넌트로 렌더링됩니다. 그리고 나서 \`FlatListBasics\` 컴포넌트가 \`FlatList\`와 모든 \`Text\` 컴포넌트를 렌더링합니다. 

**examples**
FlatList Basics
`

export const code6_1 = `
\`\`\`jsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
\`\`\`
`


export const text6_2 = `
만약 데이터를 섹션 헤더와 함께 논리적인 단위로 구분해서 렌더링하고 싶다면 (iOS의 \`UITableView\`과 유사하게), [SectionList](https://reactnative.dev/docs/sectionlist)가 적합합니다. 


SectionList Basics
`

export const code6_2 = `
\`\`\`jsx
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

export default SectionListBasics;
\`\`\`
`

export const text6_3 = `
리스트 뷰의 가장 일반적인 사용은 서버로부터 받아온 데이터를 보여주는 것입니다. 그렇게 하려면 [React Native에서의 네트워킹](https://reactnative.dev/docs/network)에 대해 알아야 합니다. 
`

export const text7_1 = `
# 문제 해결

다음은 React Native를 설정하는 동안 발생할 수 있는 몇 가지 일반적인 문제들입니다. 만약 여기에 없는 문제가 발생한다면, [Github에서 issue를 검색](https://github.com/facebook/react-native/issues/)해보세요. 

### 이미 사용중인 포트
Metro bundler는 8180 포트에서 실행됩니다. 다른 프로세스가 이미 해당 포트를 사용 중인 경우, 해당 프로세스를 종료하거나 포트를 변경할 수 있습니다. 

#### 포트 8081 프로세스 종료하기
다음 명령을 실행하여 포트 8081에서 수신 중인 프로세스의 ID를 찾습니다. 
\`$ sudo lsof -i :8081\`  

그리고 다음 명령을 실행해 프로세스를 종료합니다. 
\`$ kill -9 <PID>\` 
    
Windows에서는 [리소스 모니터](https://stackoverflow.com/questions/48198/how-can-you-find-out-which-process-is-listening-on-a-port-on-windows)를 사용하여 포트 8081을 사용하는 프로세스를 찾고, 작업관리자를 통해 중단할 수 있습니다. 
 
#### 8081 이외의 포트 사용하기
\`port\` 파라미터를 사용해 번들러가 8081 이외의 포트를 사용하도록 설정할 수 있습니다.  
\`$ npx react-native start --port=8088\` 

또한 새로운 포트에서 JavaScript 번들을 로드하려면 애플리케이션을 업데이트 해야합니다. Xcode에서 실행되는 경우 \`node_modules/react-native/React/Ract/xcodeproj/project.pbxproj\` 파일에서 선택한 포트로의 8081 발생횟수를 업데이트해 이를 수행할 수 있습니다. 

#### NPM 잠금 오류
React Native CLI를 사용하는 동안 \`npm WARN locking Error: EACCES\`와 같은 오류가 발생하면 다음 명령어를 실행해보세요.  
\`\`\`jsx
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
\`\`\`

#### 누락된 라이브러리 (for React)
프로젝트에 React Native를 수동으로 추가한 경우, \`RCTText.xcodeproj\`, \`RCTImage.xcodeproj\` 와 같이 사용 중인 모든 관련 종속성을 include했는지 확인해야 합니다. 다음으로 이러한 종속성에 의해 빌드된 이진 파일들이 앱 바이너리에 연결되어 있어야 합니다. 
Xcode 프로젝트 설정에서는 \`Linked Frameworks and Binarie\` 섹션을 사용합니다. 자세한 내용은 [Linking Libraries](https://reactnative.dev/docs/linking-libraries-ios#content)를 참고하세요. 

CocoaPods를 사용하는 경우, React를 하위 스펙과 함께 \`Podfile\` 에 추가했는지 확인하세요. 예를 들어, \`<Text/>\`, \`<Image/>\`, \`fetch()\` API를 사용하는 경우, \`Podfile\` 에 다음 코드를 추가해야 합니다.  

\`\`\`jsx
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'RCTText',
  'RCTImage',
  'RCTNetwork',
  'RCTWebSocket',
]
\`\`\`


그런 다음 \`pod install\` 을 실행했는지 확인하고, React가 설치된 프로젝트에 \`Pod/\` 디렉토리가 생성되어 있는지 확인해야합니다. CocoPods는 \`.xcworkspace\` 파일을 사용하여 이러한 설치된 종속성을 사용할 수 있도록 지시합니다. 

##### React Native는 CocoaPod 으로 사용될 때 컴파일되지 않음
[cocoapods-fix-react-native](https://github.com/orta/cocoapods-fix-react-native)라는 CocoaPods 플러그인이 있는데, 이 플러그인은 종속성 관리자를 사용할 때의 차이로 인한 모든 잠재적인 소스 코드의 사후 수정을 처리합니다. 
    
##### 인수 목록이 너무 김 : 재귀 헤더 확장 실패
프로젝트 빌드 설정에서, \`User Search Header Paths\` 와 \`Header Search Paths\` 는 Xcode가 코드에 지정된 \`#import\` 헤더 파일을 찾을 위치를 지정하는 두 가지 설정입니다. Pods 의 경우, CocoaPods는 기본 배열의 특정 폴더를 사용해 찾습니다. 특정 설정이 덮어씌워지지 않았는지, 설정된 폴더 중 너무 큰 폴더가 없는지 확인합니다. 폴더 중 하나가 큰 폴더인 경우, Xcode는 전체 디렉토리를 재귀적으로 탐색하여 어느 시점에서 위의 오류를 발생시킵니다. 

\`User Search Header Paths\` 및 \`Header Search Paths\`를 CocoaPods에서 설정한 기본 값으로 되돌리려면, 빌드 설정 패널에서 항목을 선택하고 삭제를 누르면 됩니다. 그러면 사용자 정의 오버라이드가 제거되고 CocoaPod 기본 값으로 돌아갑니다. 
    
#### 사용 가능한 transports가 없음
React Native는 웹 소켓에 대한 polyfill을 구현합니다. 이러한 [polyfill](https://github.com/facebook/react-native/blob/master/Libraries/Core/InitializeCore.js)은 \`import React from 'react'\`에 포함된 react-native 모듈의 일부로 초기화됩니다. [Firebase](https://github.com/facebook/react-native/issues/3645)와 같이 웹 소켓이 필요한 다른 모듈을 로드하는 경우, 반드시 \`react-native\`를 호출한 후 로드해야합니다. 
\`\`\`
import React from 'react';
import Firebase from 'firebase';
\`\`\`

#### 쉘 명령 응답없음 예외
다음과 같이 ShellCommandUnresponsiveException 에러가 발생한 경우, 

 
\`\`\`jsx
Execution failed for task ':app:installDebug'.
  com.android.builder.testing.api.DeviceException: com.android.ddmlib.ShellCommandUnresponsiveException
\`\`\`


\`android/build.gradle\` 에서 [Gradle 버전을 1.2.3 으로 다운그레이드](https://github.com/facebook/react-native/issues/2720) 하세요. 

#### react-native init 중단
시스템에서 \`npx react-native init\` 를 실행하는 것이 중단되는 문제가 발생하면, 세부 모드에서 다시 실행하고 [#2797](https://github.com/facebook/react-native/issues/2797)를 참조해 일반적인 원인을 확인하세요. 
\`\`\`
npx react-native init --verbose
\`\`\`

## react-native package manager 를 시작할 수 없음 (on Linux)

### Case 1: Error "code":"ENOSPC","errno":"ENOSPC"
[inotify](https://github.com/guard/listen/wiki) (used by watchman on Linux)에서 모니터링할 수 있는 디렉토리 수로 인해 발생한 문제입니다. 이 문제를 해결하려면, 터미널 창에서 다음 명령을 실행하세요.  
\`\`\`
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
\`\`\`
`

export const text8_1 = `
# Platform Specific Code 플랫폼 별 코드
크로스 플랫폼 앱을 만들 때, 가능한 많은 코드를 재사용하려고 하고자 할 것입니다. 예를 들어 Android 와 iOS 에서 별도의 시각적 컴포넌트를 구현하고자 하는 경우와 같이, 코드가 달라야 하는 상황이 발생할 수 있습니다. 

React Native는 코드를 구성하고 플랫폼 별로 구분하는 두 가지 방법을 제공합니다.  
- [Platform module](https://reactnative.dev/docs/platform-specific-code#platform-module) 을 사용하는 것.  
- [platform-specific file extensions](https://reactnative.dev/docs/platform-specific-code#platform-specific-extensions) 를 사용하는 것.  

특정 컴포넌트는 하나의 플랫폼에서만 동작하는 속성을 가질 수 있습니다. 이러한 모든 props에는 \`@platform\` 주석이 달려 있으며, 웹 사이트에서는 옆에 작은 뱃지가 붙어있습니다. 

## Platform module

React Native는 앱을 실행하고 있는 플랫폼을 감지하는 모듈을 제공합니다. 탐지 로직을 사용하여 플랫폼별 코드를 구현할 수 있습니다. 컴포넌트의 작은 요소가 플랫폼에 따라 달라지는 경우 다음 옵션을 적용합니다. 


\`\`\`jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
\`\`\`

\`Platform.OS\` 가 iOS에서 실행되는 경우 \`ios\`, Android에서 실행되는 경우 \`android\`가 됩니다. 

키가 \`'ios' | 'android' | 'native' | 'default'\` 중 하나일 경우 현재 실행 중인 플랫폼에 가장 적합한 값을 반환하는 \`Platform.select\` 메소드도 사용 가능합니다. 즉, 모바일에서 실행하는 경우 \`ios\` 또는 \`android\` 키가 우선 적용됩니다. 만약 키가 지정되어있지 않다면 \`native\` 키가 사용된 다음 \`default\` 키가 적용됩니다. 


\`\`\`jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});

\`\`\`

따라서 컨테이너는 모든 플랫폼에서 \`flex: 1\` 속성을 가지고 있는 것처럼 동작하고, \`iOS\` 에서는 빨간 배경색이, \`Android\` 에서는 녹색 배경색이, 그 외 다른 플랫폼에서는 파란 배경색이 적용됩니다. 

\`any\` 값도 허용되므로, 다음와 같은 플랫폼별 컴포넌트를 반환할 때도 사용할 수 있습니다. 


\`\`\`jsx
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();

<Component />;
\`\`\`


\`\`\`jsx
const Component = Platform.select({
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb')
})();

<Component />;
\`\`\`


### Android 버전 인식
Android에서 \`Platform\` 모듈은 앱이 실행 중인 Android 플랫폼의 버전을 감지할 때도 사용할 수 있습니다. 


\`\`\`jsx
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
\`\`\`


### iOS 버전 인식
iOS에서, \`version\`은 \`-[UIDevice systemVersion]\` 의 결과로, 운영 체제의 현재 버전을 나타내는 문자열을 뜻합니다. 시스템 버전의 예로는 "10.3"이 있습니다. 예를 들어, iOS에서 주 버전 숫자를 감지하려면 다음과 같이 작성하면 됩니다. 


\`\`\`jsx
import { Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
\`\`\`


## Platform-specific extensions
플랫폼별 코드가 더 복잡한 경우, 코드를 별도의 파일로 분리하는 것을 고려해야 합니다. React Native는 파일이 \`.ios.\` 또는 \`.android.\` 확장자를 가지고 있을 때 인식하고 다른 컴포넌트에서 필요로 할 때 관련된 플랫폼 파일을 로드할 수 있습니다. 

예를 들어, 프로젝트에 다음 파일들을 가지고 있다고 해봅시다.  
\`\`\`
BigButton.ios.js
BigButton.android.js
\`\`\`

컴포넌트를 다음과 같이 import 할 수 있습니다. 

\`\`\`
import Big
\`\`\`
`

export const text9_1 = `
# More Resources
개발자 워크플로우, 앱 스토어로의 배포, 국제화, 보안 등 더 많은 것을 배울 수 있습니다. 

## Where to go from here (다음으로 살펴볼 것)
- [환경 설정하기](https://reactnative.dev/docs/environment-setup)
- [개발 워크플로우 설정하기](https://reactnative.dev/docs/running-on-device)
- [앱 디자인과 레이아웃](https://reactnative.dev/docs/flexbox)
- [앱 디버그하기](https://reactnative.dev/docs/debugging)
- [앱을 크로스 플랫폼으로 만들기](https://reactnative.dev/docs/platform-specific-code)
- [React Native 커뮤니티에 기여하기](https://reactnative.dev/help)

## Dive deep (더 알아보기)
- [React 문서](https://reactjs.org/docs/hello-world.html) 
- [MDN의 JavaScript 튜토리얼, 레퍼런스, 가이드](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
- [Android](https://developer.android.com/docs)와 [iOS](https://developer.apple.com/documentation/uikit) 플랫폼 문서

## IDEs
[VS Code](https://code.visualstudio.com/) 코드 에디터와 VS Code의 편리한 [React Native tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) 사용을 권장합니다. 

## Platforms to try (시도해 볼만한 플랫폼)
[Expo](https://docs.expo.io/)는 React Native를 위한 툴 및 서비스 프레임워크로, Xcode 또는 Android Studio를 사용하지 않고 React Native 앱을 구축할 수 있게 합니다. 웹 개발 경험이 있는 경우 이 점이 매력적일 수 있습니다.  

[Ignite](https://github.com/infinitered/ignite)는 여러 개의 React Native 보일러 플레이트가 있는 스타터 키트 CLI입니다. 최신 [Ignite Bowser](https://github.com/infinitered/ignite-bowser)는 state 관리에 MobX-State-Tree를 사용하고, React Navigation 및 주요 라이브러리들을 사용합니다. 컴포넌트, 모델 등의 생성자를 가지고 있으며 Expo를 즉시 지원합니다. 

## Example Apps (예제 앱)
[Showcase](https://reactnative.dev/showcase)에서 앱들을 실행해보고 React Native가 무엇을 할 수 있는지 알아보세요! 더 많은 것을 찾고 계신가요? [Github에서 예제 앱들](https://github.com/ReactNativeNews/React-Native-Apps)을 확인하세요. 소스 코드를 볼 수 있으며 시뮬레이터나 디바이스에스에서 실행해볼 수 있습니다. 

## 자신만의 네이티브 컴포넌트와 모듈을 찾고, 만들고, 공유하세요 
React Native는 컨텐츠, 툴, 튜토리얼, 그리고 네이티브 컴포넌트들을 만드는 수천 명의 개발자 커뮤니티를 가지고 있습니다. 

코어 컴포넌트 중에서 원하는 것을 찾기 어렵나요? [React Native Directory](https://reactnative.directory/)를 방문해 커뮤니티가 무엇을 만들고 있는지 확인해보세요. 

자신만의 네이티브 컴포넌트나 모듈을 만드는 것에 관심이 있나요? 직접 모듈을 만들고 NPM 및 Github에서 다른 사람들과 공유하면 React Native 생태계와 커뮤니티를 성장시키는 데 도움이 됩니다! 자신만의 네이티브 모듈 ([Android](https://reactnative.dev/docs/native-modules-android), [iOS](https://reactnative.dev/docs/native-modules-ios))과 네이티브 컴포넌트([Android](https://reactnative.dev/docs/native-components-android), [iOS](https://reactnative.dev/docs/native-components-ios))를 만드는 것에 대한 가이드를 읽어보세요. 
`