export const text1_1 = `
# JavaScript 환경
## JavaScript 런타임
React Native를 사용하면 두 가지 환경에서 Javascript 코드를 실행하게 됩니다. 

- 대부분의 경우, React Native는 Safari를 지원하는 JavaScript 엔진인 [JavaScriptCore](http://trac.webkit.org/wiki/JavaScriptCore)를 사용합니다. iOS 에서 JavaScriptCore 는 쓰기 가능 / 실행 가능 메모리가 없기 때문에 JIT 를 사용하지 않습니다. 
- 크롬 디버깅을 사용할 때, 모든 JavaScript 코드는 크롬 자체에서 실행되며, 웹소켓을 통해 네이티브 코드와 통신합니다. 크롬은 [V8](https://v8.dev/) 을 JavaScript 엔진으로 사용합니다. 

두 환경은 매우 유사하지만, 일부 불일치가 발생할 수 있습니다. 향후 다른 JavaScript 엔진으로 실험을 진행할 예정이므로, 특정 런타임에 의존하지 않는 것이 좋습니다. 

### JavaScript Syntax Transformers
Syntax transformers 를 사용하면 모든 인터프리터의 지원을 기다릴 필요 없이 새 JavaScript 구문을 사용할 수 있어 코드를 보다 즐겁게 작성할 수 있습니다. 

React Native는 [Babel JavaScript compiler](https://babeljs.io/) 와 함께 제공됩니다. 자세한 내용은 지원되는 변환에 대한 [Babel documentation](https://babeljs.io/docs/en/plugins/#transform-plugins)을 참조하세요. 

React Native의 활성화된 변환에 대한 전체 리스트는 [metro-react-native-babel-preset](https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset) 에서 찾아볼 수 있습니다.

ES5

- 예약된 단어 : \`promise.catch(function() { });\`

ES6

- [Arrow functions](https://babeljs.io/docs/en/learn#arrows): \`<C onPress={() => this.setState({pressed: true})} />\`
- [Block scoping](https://babeljs.io/docs/en/learn#let-const): \`let greeting = 'hi';\`
- [Call spread](https://babeljs.io/docs/en/learn#default-rest-spread):\`Math.max(...array);\`
- [Classes](https://babeljs.io/docs/en/learn#classes): \`class C extends React.Component { render() { return <View />; } }\`
- [Constants](https://babeljs.io/docs/en/learn#let-const): \`const answer = 42;\`
- [Destructuring](https://babeljs.io/docs/en/learn#destructuring): \`var {isActive, style} = this.props;\`
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of): \`for (var num of [1, 2, 3]) {};\`
- [Modules](https://babeljs.io/docs/en/learn#modules): \`import React, { Component } from 'react';\`
- [Computed Properties](https://babeljs.io/docs/en/learn#enhanced-object-literals): \`var key = 'abc'; var obj = {[key]: 10};\`
- [Object Concise Method](https://babeljs.io/docs/en/learn#enhanced-object-literals): \`var obj = { method() { return 10; } };\`
- [Object Short Notation](https://babeljs.io/docs/en/learn#enhanced-object-literals): \`var name = 'vjeux'; var obj = { name };\`
- [Rest Params](https://github.com/tc39/proposal-object-rest-spread): \`function(type, **...args**) {};\`
- [Template Literals](https://babeljs.io/docs/en/learn#template-strings): \`\`\`var who = 'world'; var str =\`Hello \${who}\`;\`\`\`

ES8

- [Function Trailing Comma](https://github.com/tc39/proposal-trailing-function-commas): \`function f(a, b, c,) {};\`
- [Async Functions](https://github.com/tc39/proposal-async-await): \`async function doStuffAsync() { const foo = await doOtherStuffAsync(); };\`

Stage 3

- [Object Spread](https://github.com/tc39/proposal-object-rest-spread): \`var extended = { ...obj, a: 10 };\`
- [Static class fields](https://github.com/tc39/proposal-static-class-features): \`class CustomDate { static epoch = new CustomDate(0); }\`
- [Optional Chaining](https://github.com/tc39/proposal-optional-chaining): \`var name = obj.user?.name;\`

Specific

- [JSX](https://reactjs.org/docs/jsx-in-depth.html): \`<View style={{color: 'red'}} />\`
- [Flow](https://flow.org/): \`function foo(x: ?number): string {};\`
- [TypeScript](https://www.typescriptlang.org/): \`function foo(x: number | undefined): string {};\`
- [Babel Template](https://babeljs.io/docs/en/babel-template): \`allows AST templating\`

### Polyfills
JavaScript 런타임을 지원하는 모든 곳에서 많은 표준 함수가 사용 가능합니다. 

Browser

- [console.{log, warn, error, info, trace, table, group, groupEnd}](https://developers.google.com/web/tools/chrome-devtools/console/api)
- [CommonJS require](https://nodejs.org/docs/latest/api/modules.html)
- [XMLHttpRequest, fetch](https://reactnative.dev/docs/network#content)
- [{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame](https://reactnative.dev/docs/timers#content)

ES6

- [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- String.prototype.{[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)}
- [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- Array.prototype.{[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)}

ES7

- Array.prototype.{[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)}

ES8

- Object.{[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)}

Specific

- \`__DEV__\`
`;

export const text2_1 = `
# 타이머
타이머는 애플리케이션의 중요한 부분이며, React Native 는 브라우저 타이머를 구현합니다. 

## 타이머

- setTimeout, clearTimeout
- setInterval, clearInterval
- setImmediate, clearImmediate
- requestAnimationFrame, cancelAnimationFrame

\`requestAnimationFrame(fn)\` 은 \`setTimeout(fn, 0)\` 과 동일하지 않습니다. 전자는 프레임이 모두 플러시된 후에 발생하지만, 후자는 가능한 한 빨리 발생합니다. (iPhone 5S 에서는 초당 1000x 이상)

\`setImmediate\` 는 일괄 처리된 응답을 네이티브로 다시 보내기 직전, 현재 JavaScript 실행 블록의 끝에서 코드를 실행합니다. \`setImmediate\` 콜백 내에서 \`setImmediate\` 를 호출하면 즉시 실행되며, 그 사이 네이티브로 다시 전송되지 않습니다. 

\`Promise\` 구현은 비동기 구현으로, \`setImmediate\` 를 사용합니다. 

> 참고: Android에서 디버깅할 때, 디버거와 디바이스 사이의 시간이 경과한 경우, 애니메이션, 이벤트 동작 등의 작업이 제대로 작동하지 않거나 결과가 정확하지 않을 수 있습니다. 디버거에서 adb shell "date \`date +%m%d%H%M%Y.%S%3N\`"를 실행해 이 문제를 해결하세요. 실제 디바이스에 접근하려면 루트 권한이 필요합니다. 

## InteractionManager
잘 구축된 네이티브 앱이 매끄럽게 느껴지는 한 가지 이유는, 상호작용 및 애니메이션 중에 값비싼 작업을 피할 수 있기 때문입니다. React Native에서는 현재 JS 실행 스레드가 싱글 스레드라는 제한이 있지만, \`Interaction Manager\` 를 사용하여 상호작용/애니메이션이 완료된 후 장시간 실행되는 작업이 시작되도록 예약할 수 있습니다. 

애플리케이션은 아래와 같이 상호 작용 후 작업을 스케쥴링할 수 있습니다. 

\`\`\`jsx
InteractionManager.runAfterInteractions(() => {
    // ...long-running synchronous task...
});
\`\`\`

이 방법을 다른 스케쥴링 방법과 비교해보세요.  

- requestAnimationFrame(): 시간 경과에 따라 뷰를 애니메이션화하는 코드에 사용됩니다.  
- setImmediate/setTimeout/setInterval(): 코드를 나중에 실행하면, 애니메이션이 지연될 수 있습니다. 
- runAfterInteractions(): 활성화 된 애니메이션을 지연시키지 않고 나중에 코드를 실행합니다. 

터치 핸들링 시스템은 하나 이상의 활성 터치를 '상호작용'으로 간주하고 모든 터치가 종료되거나 취소될 때까지 \`runAfterInteractions()\` 콜백을 지연시킵니다.  

또한 InteractionManager는 애니메이션 시작 시 인터랙션 'handle' 을 생성하고, 완료 시 삭제함으로써 애플리케이션이 애니메이션을 등록할 수 있도록 합니다. 

\`\`\`jsx
var handle = InteractionManager.createInteractionHandle();
// run animation... (\`runAfterInteractions\` tasks are queued)
// later, on animation completion:
InteractionManager.clearInteractionHandle(handle);
// queued tasks run if all handles were cleared
\`\`\`

`;

export const text3_1 = `
# Hermes 사용하기

[Hermes](https://hermesengine.dev/) 는 안드로이드에서 리액트 네이티브 앱을 실행하는 데 최적화된 오픈 소스 자바스크립트 엔진입니다. 많은 앱에서 Hermes를 활성화하면 시작 시간이 단축되고 메모리 사용량이 감소하며 앱 크기가 작아집니다. 현재 Hermes는 React Native의 옵션 기능으로, 이 가이드에서는 이를 활성화하는 방법을 설명합니다. 

먼저, React Native 버전 0.60.4 이상을 사용하고 있는지 확인해야 합니다. 

React Native의 이전 버전을 기반으로 하는 기존 앱이 있는 경우 먼저 업그레이드를 해야 합니다. 자세한 내용은 [Upgrading to new React Native Versions](https://reactnative.dev/docs/upgrading)를 참조하세요. 특히 [React Native upgrade helper](https://react-native-community.github.io/upgrade-helper/?from=0.59.0)에서 안내하는 대로 \`android/app/build.gradle\`에 대한 모든 변경 사항이 적용되었는지 확인해야 합니다. 앱을 업그레이드한 후에는, Hermes로 전환하기 전에 모든 것이 잘 작동하는지 확인해보세요.

## RN 호환성에 대한 참고 사항

> 각 Hermes 릴리즈는 특정 RN 버전을 목표로 합니다. 원칙은 항상 [Hermes의 배포](https://github.com/facebook/hermes/releases)를 엄격하게 따르는 것입니다. 버전이 일치하지 않으면 최악의 경우 앱이 즉시 충돌할 수 있습니다.

## Windows 사용자를 위한 참고 사항
 
> Hermes는 [Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=48145)를 필요로 합니다. 

\`android/app/build.gradle\` 파일을 편집해 아래와 같이 변경하세요. 

\`\`\`jsx
  project.ext.react = [
      entryFile: "index.js",
-     enableHermes: false  // clean and rebuild if changing
+     enableHermes: true  // clean and rebuild if changing
  ]
\`\`\`

또한 ProGuard를 사용하는 경우, \`proguard-rules.pro\` 에서 다음 규칙을 추가해야 합니다. 

\`\`\`
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }
\`\`\`

다음으로, 앱이 한 번 이상 빌드된 경우 빌드를 정리해야 합니다. 

\`\`\`
$ cd android && ./gradlew clean
\`\`\`

끝입니다! 이제 정상적으로 앱을 개발하고 배포할 수 있습니다.

\`\`\`
$ npx react-native run-android
\`\`\`

> ## Android 앱 번들에 대한 참고 사항
>
> Android 앱 번들은 react-native 0.62.0 이상에서 지원됩니다. 

### Hermes가 사용되고 있는지 확인하기
최근에 scratch(예: react-create-app)로 새 앱을 만든 경우, 웰컴 뷰에서 Hermes가 활성화되었는지 확인해야 합니다. 

![https://media.vlpt.us/images/leejiwonn/post/b5296f55-9da6-4f67-af63-11d47d9b6dfb/image.png](https://media.vlpt.us/images/leejiwonn/post/b5296f55-9da6-4f67-af63-11d47d9b6dfb/image.png)

JavaScript 에서 Hermes가 사용되고 있는지 확인하기 위해 전역 변수 \`HermesInternal\` 를 사용할 수 있습니다. 

\`\`\`
const isHermes = () => !!global.HermesInternal;
\`\`\`

Hermes 의 장점을 확인하려면, 다음과 같이 앱의 배포 빌드와 디플로이먼트를 만들어 비교해보면 됩니다. 

\`\`\`
$ npx react-native run-android --variant release
\`\`\`

이는 빌드 중에 JavaScript를 bytecode로 컴파일하여, 디바이스에서 앱의 시작 속도를 향상시킵니다. 

## 구글 크롬 개발자 도구를 사용하여 Hermes에서 JS 디버깅하기

Hermes는 크롬 인스펙터 프로토콜을 구현함으로써 크롬 디버거를 지원합니다. 이는 크롬 도구가 Hermes, 에뮬레이터 또는 실제 물리적 디바이스에서 실행되는 JavaScript를 직접 디버그하는 데 사용될 수 있다는 것을 의미합니다. 

> 이는 인앱 개발자 메뉴의 디버깅 섹션에 나와있는 "원격 JS 디버깅"과는 매우 다릅니다. "원격 JS 디버깅"메뉴는, 실제 개발 기기(노트북 또는 데스크탑)의 크롬 V8에서 JS 코드를 실행합니다. 

크롬은 Metro를 통해 디바이스에서 실행 중인 Hermes에 연결하므로, Metro가 요청을 수신하는 곳이 어디인지 알아야 합니다. 
일반적으로 \`localhost:8081\`에서 수신하지만, 이는 [변경 가능](https://facebook.github.io/metro/docs/configuration/)합니다. \`yarn start\` 를 실행하면 시작할 때 주소가 표준 출력에 기록됩니다. 

Metro 서버의 수신 위치를 알았다면, 다음 단계에 따라 크롬과 연결할 수 있습니다. 

1) 크롬 브라우저 인스턴스의 \`chrome://inspect\` 로 이동합니다. 
2) \`Configure...\` 버튼을 사용해 Metro 서버 주소 (일반적으로 위에서 설명한 대로 \`localhost:8081\`) 를 추가합니다. 

![https://media.vlpt.us/images/leejiwonn/post/cd9e0cf3-1c88-49e0-8fee-67613a660243/image.png](https://media.vlpt.us/images/leejiwonn/post/cd9e0cf3-1c88-49e0-8fee-67613a660243/image.png)

3) 이제 디버거를 불러오는 데 사용할 수 있는 "검사(inspect)" 링크가 있는 "Hermes React Native" 타겟이 표시됩니다. "검사(inspect)" 링크가 표시되지 않으면 Metro 서버가 실행 중인지 확인하세요. 

![https://media.vlpt.us/images/leejiwonn/post/6393618b-aba6-4998-b514-eabe22c9c278/image.png](https://media.vlpt.us/images/leejiwonn/post/6393618b-aba6-4998-b514-eabe22c9c278/image.png)

4) 이제 크롬 디버깅 도구를 사용할 수 있습니다. 예를 들어, 다음에 JavaScript를 실행할 때 중단점(breakpoint)을 설정하려면, 일시 중지 버튼을 클릭하고 JavaScript를 실행시킬 앱의 작업을 발생시키면 됩니다. 

![https://media.vlpt.us/images/leejiwonn/post/26b7b6db-949f-4a3d-b767-b2e38dec1546/image.png](https://media.vlpt.us/images/leejiwonn/post/26b7b6db-949f-4a3d-b767-b2e38dec1546/image.png)

`;
