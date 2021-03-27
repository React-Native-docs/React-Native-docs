import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import { Styles as styles, H1, H2, H3, H4 } from "./Styles";
import CodeSection from "../../component/CodeSection"
import ImageSection from "../../component/ImageSection"

export default Basic = ({ navigation }) => {
  return (
    <ScrollView style={styles.white}>

      <H1 content="The Basic ~ Design" />
      <H2 content="1. 기초 The Basic" />
      <H3 content="1.1 리액트네이티브 소개" />
      <H4 content="React Native로 작업하려면 JavaScript 기본 사항을 이해해야합니다. JavaScript를 처음 사용하거나 복습이 필요한 경우 Mozilla Developer Network에 들어가 거나 다듬을 수 있습니다 ." />
      <H4 content="Expo를 권장하고 Snack을 활용하여 미리보기 할 수 있습니다." />
      <H4 content="기본 시작 예제(Hello World)" />
      <CodeSection content={Code1} navi={navigation} naviName={"HelloWorld"}/>
      < H4 content="React를 사용하면 클래스 나 함수를 사용하여 구성 요소를 만들 수 있습니다." />
      <H3 content="1.2 핵심 구성요소 " />
      <H4 content="React Native는 React와 앱 플랫폼의 기본 기능을 사용하여 Android 및 iOS 애플리케이션을 빌드하기 위한 오픈 소스 프레임 워크입니다 ." />
      <H4 content="플랫폼의 API를 사용하여 ios android를 빌드합니다." />
      <H4 content="React를 활용하여 소스코드 재사용 및 중첩 가능한 코드 번들을 만듭니다." />
      <H3 content="1.2.1 보기 및 모바일 개발" />
      <ImageSection source={require("../../assets/BasicSampling.png")} type="full" />
      <H3 content="1.2.2 기본 구성요소" />
      <H4 content="Android 개발에서는 Kotlin 또는 Java로 뷰를 작성합니다. iOS 개발에서는 Swift 또는 Objective-C를 사용합니다. React Native를 사용하면 React 구성 요소를 사용하여 JavaScript로 이러한 뷰를 호출 할 수 있습니다. React Native는 해당 구성 요소에 대한 해당 Android 및 iOS 뷰를 생성합니다. 이러한 플랫폼 지원 구성 요소를 기본 구성 요소라고합니다." />
      <H4 content="React Native에는 오늘 앱 빌드를 시작하는 데 사용할 수있는 즉시 사용할 수있는 필수 기본 구성 요소 세트도 포함되어 있습니다. 이들은 React Native의 핵심 구성 요소 입니다." />
      <H3 content="핵심구성요소" />
      <H4 content="React 컴포넌트라고 모두 RN에 사용할 수 있는 것은 아닙니다." />
      <ImageSection source={require("../../assets/RNComponent.png")} type="h200" />
      <H3 content="1.3 React의 핵심 개념" />
      <H4 content="1. 단위: 컴포넌트 component" />
      <H4 content="2. 문법: JSX" />
      <H4 content="3. 매개변수: props" />
      <H4 content="4. 상태변수: state" />
      <H3 content="1.3.1 단위: 컴포넌트 component" />
      <H4 content="객체의 단위입니다. 버튼 1개, header 1개, 렌더링 되는 부분이 모두 컴포넌트이다. 만약 Header 안에 뒤로가기, 앞으로가기, 즐겨찾기, 좋아요 버튼이 있다면 Header 컴포넌트 안에는 4개의 컴포넌트가 있다고도 볼 수 있다. 아래에는 1개의 컴포넌트 Cat이 있습니다. 재사용하기 위해 컴포넌트를 분리합니다." />
      <CodeSection content={Code2} navi={navigation} naviName={"YourCat"} />
      <H3 content="1.3.2 문법: JSX " />
      <H4 content="아래처럼 선언하는 것은 JSX문법입니다. 아래 문법보다 훨씬 편해서 사용합니다." />
      <CodeSection content={Code3} navi={navigation} naviName={"Default"} />
      <H4 content="이를 리액트에서 다음과 같이 변환합니다. (디버깅할때는 JSON으로 보입니다.) " />
      <CodeSection content={Code4} navi={navigation} naviName={"Default"} />
      <H4 content="JSX 변수" />
      <CodeSection content={Code5} navi={navigation} naviName={"CurlyBraces"} />
      <H4 content="JSX 함수" />
      <CodeSection content={Code6} navi={navigation} naviName={"CurlyBraces2"} />
      <H4 content="Web을 사용할 경우 React와  React Native의 컴포넌트가 다르니때문에 문제가 생길 수 있습니다. 특히 RN에서 <View> <Text>컴포넌트는 각각 <div> <p>로  React(Web)에서 사용해야 합니다." />
      <H4 content="코드의 재사용" />
      <CodeSection content={Code7} navi={navigation} naviName={"MultipleComponents"} />
      <H3 content="1.3.3 매개변수: props" />
      <H4 content="함수의 매개변수입니다. JSX의 문법을 활용하여 매개 변수를 넘겨주는 예제입니다." />
      <CodeSection content={Code8} navi={navigation} naviName={"MultipleProps"} />
      <H3 content="1.3.3.1 이미지 활용" />
      <H4 content="image 컴포넌트는 2개의 props를 이미 내부적으로 사용합니다. soruce와 style." />
      <CodeSection content={Code9} navi={navigation} naviName={"PropsExam"}/>
      <H3 content="1.3.4 상태변수: state" />
      <H4 content="RN은 필요할 때만 부분적으로 리렌더링을 합니다. 버튼을 누른 상태에서 버튼 색상을 바꾸고 싶다면 다른 컴포넌트는 그대로 화면에 놔두고 버튼만 리렌더링하여 앱 속도를 향상시킵니다. = 상태를 사용하여 시간이 지남에 따라 변경 될 것으로 예상되는 구성 요소 데이터를 추적합니다." />
      <H4 content="다음 예제는 배고픈 고양이 두 마리가 먹이를 기다리고있는 고양이 카페에서 발생합니다. 우리가 시간이 지남에 따라 변할 것으로 예상되는 (이름과 달리) 그들의 굶주림은 상태로 저장됩니다. 고양이에게 먹이를 주려면 버튼을 누르면 상태가 업데이트됩니다." />
      <CodeSection content={Code10} navi={navigation} naviName={"StateExam"}/>
      <H3 content="1.4 텍스트 입력처리" />
      <H4 content="state와 props를 활용하여 아래처럼 처리할 수 있습니다." />
      <H4 content="TextInput사용자가 텍스트를 입력 할 수 있는 핵심 구성 요소 입니다. 그것은이 onChangeText텍스트를 변경할 때마다 호출 할 함수를 취 소품 및 onSubmitEditing텍스트가 제출 될 때 기능을한다 소품 호출 할 수 있습니다." />
      <H4 content="예를 들어 사용자가 입력 할 때 단어를 다른 언어로 번역한다고 가정 해 보겠습니다. 이 새로운 언어에서 모든 단어는 같은 방식으로 쓰여집니다 : pizza. 따라서 Hello there Bob이라는 문장은 pizza pizza pizza로 번역됩니다." />
      <CodeSection content={Code11} navi={navigation} naviName={"HandlingTextInput"}/>
      <H3 content="1.5 화면스크롤 ScrollView 처리" />
      <H4 content="horizontal속성 을 설정하여 세로 및 가로로 스크롤 할 수 있습니다 ." />
      <H4 content="내부에 텍스트/이미지/그 외에 다양한 컴포넌트를 넣고 화면을 상하로 스크롤하도록 만들 수 있습니다." />
      <H4 content="Enabled소품 을 사용하여 스와이프 제스처를 사용하여 뷰를 페이징하도록 구성 할 수 있습니다 ." />
      <H4 content="ScrollView는 제한된 크기의 적은 양을 표시하는 데 가장 적합합니다. 채팅처럼 많은 양의 항목을 처리할 때는 FlatList 컴포넌트를 활용하세요." />
      <CodeSection content={Code12} navi={navigation} naviName={"UsingScrollView"}/>
      <H3 content="1.6 화면스크롤 FlatList 처리" />
      <H4 content="ScrollView와 유사합니다. 하지만 FlatList는 한번에 모든 화면을 렌더링하지 않고 트위터나 페이스북처럼 사용자의 화면이 가장 아래로 내려가서 다음 화면일 필요할 때 렌더링합니다. 따라서 채팅이나 SNS에서 매우 긴 스크롤이 필요할 때 적합합니다." />
      <H4 content="외부의 데이터를 가져와서 표시하는 방법" />
      <CodeSection content={Code13} navi={navigation} naviName={"FlatListBasics"}/>
      <H3 content="1.7 플랫폼 별 코드" />
      <H4 content="ios와 android의 디자인을 서로 다르게 할 수 있습니다." />
      <H4 content='Platform.OS는 " ios" | "android" | "native" | "default" 네가지가 존재합니다.' />
      <CodeSection content={Code14} navi={navigation} naviName={"Default"} />
      <H3 content="1.7.1 ios 핸드폰 운영체제 시스템 버전 가져오기" />
      <CodeSection content={Code15} navi={navigation} naviName={"Default"} />
      <H2 content="2. 환경설정 / 설치법" />
      <H3 content="2.1 빠른 설치 (expo)" />
      <H4 content="RN은 expo를 활용하여 설치하기를 권장합니다." />
      <H4 content="expo는 다양한 API를 사용하여 빠른빌드와 편리한 관리를 제공하는 라이브러리입니다." />
      <CodeSection content={Code16} navi={navigation} naviName={"Default"} />
      <H3 content="2.2 기존 앱과 통합" />
      <H4 content="RN은 Android-JAVA, iOS-Objective-C, iOS-swift에 대한 통합을 제공합니다. 하지만 복잡합니다." />
      <H4 content="out-of-tree플랫폼: 그외에 tvOS전용, Windows전용, macOS, alita, Ubuntu전용 플랫폼을 연구중입니다." />
      <H2 content="3. 개인 기기에서 실행" />
      <H4 content="Expo 앱으로 QR 코드를 스캔하여 기기에서 앱을 미리 볼 수 있지만 기기에서 앱을 빌드하고 실행하려면 다음이 필요합니다.  그냥 Expo QR코드가 더 빠르고 편합니다. 괜히 로컬에서하지마여" />
      <H4 content="android studio / xcode (macOS)" />
      <CodeSection content={Code17} navi={navigation} naviName={"Default"} />
      <H2 content="4. 디자인" />
      <H3 content="4.1 style props" />
      <H4 content="props를 활용하여 디자인을 정할 수 있습니다." />
      <H4 content="style라는 props로 지정하고 이중 중괄호로 직접 입력합니다." />
      <H4 content="CSS의 background-color에서 backgroundColor로 바뀌었습니다. 하이픈(-)을 사용하지 않고 대문자로 단어를 구분하는 방법을 카멜 케이스라고 합니다. (Camel Case)" />
      <H4 content="이중 중괄호 대신에 StyleSheet.create를 활용하여 디자인은 따로 지정할 수 있습니다." />
      <H4 content="StyleSheet를 활용하여 2가지 디자인을 중첩시킬 수 있습니다. CSS1 + CSS2와 같습니다." />
      <CodeSection content={Code18} navi={navigation} naviName={"StyleExam"} />
      <H3 content="4.2 고정 치수(pixel, width/height props)" />
      <H4 content="아래 처럼 width와 height를 픽셀 값으로 직접 지정할 수 있습니다." />
      <CodeSection content={Code19} navi={navigation} naviName={"HeightandWidth"} />
      <H3 content="4.2.1 가변 치수 (flex props)" />
      <H4 content="flex는 비율로 측정합니다. 아래의 예제에서 각 컴포넌트는 세로를 기준으로 화면 전체에서 1:2:3로 나누어 높이를 할당받게 됩니다. 가령 화면 크기가 500이라면 500/6 : 500 * 2 / 6 : 500 * 3 / 6의 실제 픽셀 값을 가질 것입니다." />
      <CodeSection content={Code20} navi={navigation} naviName={"FlexDimensions"} />
      <ImageSection source={require("../../assets/flexExample.png")} type="h600" />
      <H4 content="이외에 flexDirection로 방향을 정할 수 있습니다. justifyContent, alignItems를 사용하여 각각 flexDrection 방향, flexDrection의 수직 방향의 정렬을 정할 수 있습니다." />
      <H4 content="Copy of Flex props" />
      <ImageSection source={require("../../assets/CopyOfFlexProps.png")} type="h200" />
      <ImageSection source={require("../../assets/flexDirectionExample.png")} type="h600" />
      <ImageSection source={require("../../assets/justifyContentExample.png")} type="h600" />

    </ScrollView>
  );
}

const Code1 =
  'import React from \"react\";\\\
import { Text, View } from \"react-native\";\\\
\\\
const YourApp = () {\\\
  return (\\\
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\\\
      <Text>\\\
        Try editing me! 🎉\\\
      </Text>\\\
    </View>\\\
  );\\\
}\\\
\\\
export default YourApp; \\\
'

const Code2 = 'import React from "react";\\import { Text } from "react-native"; \\\\const Cat = () => { //js 함수 표현식 const 변수 = function(익명함수)\\  return ( //return 안의 내용을 렌더링 합니다.\\    <Text>Hello, I am your cat!</Text> //렌더링 돼는 부분은 텍스트 하나!\\  );\\}\\\\export default Cat;'

const Code3 = '<MyButton color="blue" shadowSize={2}>\\    Click Me\\</MyButton > '
const Code4 = 'react.createElement(\\    MyButton,\\      { color: "blue", shadowSize: 2 },\\      "Click Me"\\) '
const Code5 = 'import React from "react";\\import { Text } from "react-native";\\ const Cat = () => {\\      const name = "Maru"; \\//js에서는 const와 let var 자료형 3개를 주로 씁니다.\\      return (\\        <Text>Hello, I am {name}!</Text> \\//렌더링 return안에서 자료형을 넣을때 {}를 활용합니다.\\      );\\    }\\    export default Cat;    '

const Code6 = 'import React from "react"; \\import { Text } from "react-native"; \\   const getFullName = (firstName, secondName, thirdName) => {\\//익명함수입니다.\\     return firstName + " " + secondName + " " + thirdName; \\//매개변수는 3개이고\\     \\//return안의 값을 반환합니다.\\   }\\const Cat = () => {\\     return (\\       <Text>\\         Hello, I am {getFullName("Rum", "Tum", "Tugger")}!   \\//함수도 변수 호출법과 같습니다.\\       </Text>\\     );\\   }\\    export default Cat; '

const Code7 = 'import React from "react";\\import { Text, TextInput, View } from "react-native";\\const Cat = () => {\\     return (\\       <View>\\         <Text>I am also a cat!</Text>\\       </View>\\     );\\   }\\\  const Cafe = () => {\\\    return (\\\      <View>\\\        <Text>Welcome!</Text>\\\        <Cat /> \\//Cat컴포넌트를 만든뒤 그대로 사용할 수 있습니다.\\\        <Cat />\\\        <Cat />\\\      </View>\\\    );\\\  }\\\  export default Cafe; '

const Code8 = 'import React from "react";\\import { Text, View } from "react-native";\\\const Cat = (props) => {\\     return (\\       <View>\\         <Text>Hello, I am {props.name}!</Text> \\//props안에 name이 있습니다. JSON은 .으로 들어갑니다.\\       </View>\\     );\\   }\\\   const Cafe = () => {\\     return (\\       <View>\\         <Cat name="Maru" />                  \\// {props: {name:"Maru"}}\\         <Cat name="Jellylorum" />            \\// {props: {name:"Jellylorum"}}\\         <Cat name="Spot" />                  \\// {props: {name:"Spot"}}\\       </View>\\     );\\   }\\\   export default Cafe; '

const Code9 = 'import React from "react";\\import { Text, View, Image } from "react-native";\\\const CatApp = () => {\\     return (\\       <View>\\         <Image\\           source={{ uri: "https:\\//reactnative.dev/docs/assets/p_cat1.png" }}\\           style={{ width: 200, height: 200 }} \\//직접 입력시에는 이중중괄호를 사용합니다.{{}}\\         />\\         <Text>Hello, I am your cat!</Text>\\       </View>\\     );\\   }\\\   export default CatApp; '

const Code10 = 'import React, { useState } from "react"; \\//useState를 라이브러리에서 가져옵니다.\\import { Button, Text, View } from "react-native";\\\const Cat = (props) => {\\     const [isHungry, setIsHungry] = useState(true); \\//추적할 변수를 선언합니다.\\     \\//2개의 변수가 선언된 이유는 isHungry는 변수이고, setIsHungry는 변수를 바꿀 전용함수입니다.\\     \\//true는 초기값입니다.\\     return (\\       <View>\\         <Text>\\           I am {props.name}, and I am {isHungry ? "hungry" : "full"}!\\     </Text>\\         <Button\\           onPress={() => {\\             setIsHungry(false);\\           }}\\           disabled={!isHungry}\\           title={isHungry ? "Pour me some milk, please!" : "Thank you!"}\\         />\\       </View>\\     );\\   }\\\   const Cafe = () => {\\     return (\\       <>\\         <Cat name="Munkustrap" />\\         <Cat name="Spot" />\\       </>\\     );\\   }\\\   export default Cafe; '

const Code11 = 'import React, { useState } from "react";\\import { Text, View } from "react-native";\\import { TextInput } from "react-native-ele~";\\\   const PizzaTranslator = () => {\\     const [text, setText] = useState("");\\     return (\\       <View style={{ padding: 10 }}>\\         <TextInput\\           style={{ height: 40 }}\\           title=""\\           placeholder="Type here to translate!"\\           onChangeText={text => setText(text)}\\           defaultValue={text}\\         />\\         <Text style={{ padding: 10, fontSize: 42 }}>\\           {text.split(" ").map((word) => word && "🍕").join(" ")}\\         </Text>\\       </View>\\     );\\   }\\\   export default PizzaTranslator; '

const Code12 = 'import React from "react";\\import { Image, ScrollView, Text } from "react-native";\\\   const logo = {\\     uri: "https:\\//reactnative.dev/img/tiny_logo.png",\\     width: 64,\\     height: 64\\   };\\\   const App = () => (\\     <ScrollView>\\       <Text style={{ fontSize: 96 }}>Scroll me plz</Text>\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Text style={{ fontSize: 96 }}>If you like</Text>\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Text style={{ fontSize: 96 }}>Scrolling down</Text>\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Text style={{ fontSize: 96 }}>What"s the best</Text>\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Text style={{ fontSize: 96 }}>Framework around?</Text>\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Image source={logo} />\\       <Text style={{ fontSize: 80 }}>React Native</Text>\\     </ScrollView>\\   );\\\   export default App; '

const Code13 = 'import React from "react";\\import { FlatList, StyleSheet, Text, View } from "react-native";\\\   const styles = StyleSheet.create({\\     container: {\\       flex: 1,\\       paddingTop: 22\\     },\\     item: ,\\   });\\\   const FlatListBasics = () => {\\     return (\\       <View style={styles.container}>\\         <FlatList\\           data={[\\             { key: "Devin" },\\             { key: "Dan" },\\             { key: "Dominic" },\\             { key: "Jackson" },\\             { key: "James" },\\             { key: "Joel" },\\             { key: "John" },\\             { key: "Jillian" },\\             { key: "Jimmy" },\\             { key: "Julie" },\\           ]}\\           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}\\         />\\       </View>\\     );\\   }\\\   export default FlatListBasics; ";'

const Code14 = 'import { Platform, StyleSheet } from "react-native";\\\   const styles = StyleSheet.create({\\     height: Platform.OS === "ios" ? 200 : 100\\   }); "; '

const Code15 = 'import { Platform } from "react-native";\\\   const majorVersionIOS = parseInt(Platform.Version, 10);\\   if (majorVersionIOS <= 9) {\\     console.log("Work around a change in behavior");\\   } "; '

const Code16 = 'npm install -g expo-cli\\   expo init AwesomeProject \\//새 프로젝트 만들기 이름: AwesomeProject\\   cd AwesomeProject\\   npm start"; '

const Code17 = 'USB를 핸드폰에 연결하고 terminal에서 다음 명령어를 입력합니다.\\   $ adb devices\\   List of devices attached\\   emulator - 5554 offline   # Google emulator\\   14ed2fcc device         # Physical device\\\   $ npx react - native run - android \\//이를 활용해서 빌드합니다."; '

const Code18 = 'import React from "react";\\import { StyleSheet, Text, View } from "react - native";\\\   const LotsOfStyles = () => {\\     return (\\       <View style={styles.container}>\\         <Text style={styles.red}>just red</Text>\\         <Text style={{ fontSize: 30 }}>just bigBlue</Text>\\         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>\\         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>\\       </View>\\     );\\   };\\\   const styles = StyleSheet.create({\\     container: {\\       marginTop: 50,\\     },\\     bigBlue: {\\       color: "blue",\\       fontWeight: "bold",\\       fontSize: 30,\\     },\\     red: {\\       color: "red",\\     },\\   });\\\   export default LotsOfStyles; '

const Code19 = '<View style={{width: 50, height: 50, backgroundColor: "powderblue"}} />'

const Code20 = 'import React from "react";\\import { View } from "react - native";\\\   const FlexDimensionsBasics = () => {\\     return (\\       \\// Try removing the `flex: 1` on the parent View.\\       \\// The parent will not have dimensions, so the children can"t expand.\\       \\// What if you add `height: 300` instead of `flex: 1`?\\       <View style={{ flex: 1 }}>\\         <View style={{ flex: 1, backgroundColor: "powderblue" }} />\\         <View style={{ flex: 2, backgroundColor: "skyblue" }} />\\         <View style={{ flex: 3, backgroundColor: "steelblue" }} />\\       </View>\\     );\\   };\\    export default FlexDimensionsBasics; '


