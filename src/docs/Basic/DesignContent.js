export const text1_1 = `
# 스타일
React Native에서는, Javascript를 사용해 애플리케이션 스타일을 지정할 수 있습니다. 모든 코어 컴포넌트는 \`style\`이라는 이름의 prop을 받습니다. 스타일 이름과 값들은 대체로 웹에서의 CSS 방식과 일치하지만, 이름은 \`background-color\` 대신 \`backgroundColor\`와 같이 카멜 케이스(하이픈(-)을 사용하지 않고 대문자로 단어를 구분하는 방식)로 작성됩니다.

\`style\` prop은 객체 리터럴이나 new 연산자로 생성된 javascript 객체일 수도 있고, 스타일 배열(배열의 마지막 스타일이 우선권을 가지므로, 상속받은 스타일에 사용할 수 있음)을 전달할 수도 있습니다. 

컴포넌트의 복잡성이 증가함에 따라, 여러 스타일을 한 곳에서 정의할 수 있도록 \`StyleSheet.create\`를 사용하는 것이 더 깔끔한 경우가 많습니다. 다음은 예시입니다.  

**Style**
`

export const code1_1 = `

\`\`\`jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
\`\`\`

`

export const text1_2 = `
한 가지 일반적인 패턴은, 컴포넌트가 하위 컴포넌트에 스타일을 적용하는 데에 사용되는\`style\` prop을 인자로 받게 하는 것입니다. 이를 통해 CSS에서처럼 "cascade" 스타일을 만들 수 있습니다. 
* cascade : https://opentutorials.org/course/2418/13409  

텍스트 스타일을 커스타미이징하는 방법은 훨씬 더 많습니다. 전체 목록을 보려면 [Text 컴포넌트 레퍼런스](https://reactnative.dev/docs/text)를 참고하세요. 

이제 텍스트를 아름답게 만들 수 있습니다. 스타일 전문가가 되는 다음 단계는 [컴포넌트 사이즈를 조정하는 방법 배우기](https://reactnative.dev/docs/height-and-width)입니다. 

## 알려진 문제
- [react-native#29308](https://github.com/facebook/react-native/issues/29308#issuecomment-792864162): 경우에 따라 React Native는 CSS가 웹에서 작동하는 방식과 일치하지 않습니다. 예를 들어 터치 영역이 절대 부모 뷰 경계를 넘어 확장되지 않으며, Android에서 음수 마진은 지원되지 않습니다. 

`

export const text2_1 = `
# Height와 Width
컴포넌트의 height와 width는 화면에서의 컴포넌트 사이즈를 결정합니다. 

## 고정 사이즈
컴포넌트의 사이즈를 설정하는 일반적인 방식은 고정된 \`width\`와 \`height\` 값을 style에 추가하는 것입니다. React Native의 모든 사이즈는 단위가 없으며, 밀도에 독립적인 픽셀을 나타냅니다. 
\`\`\`jsx
<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
\`\`\`
**Height and Width**
`
export const code2_1 = `

\`\`\`jsx
import React from 'react';
import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{
        width: 50, height: 50, backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: 100, height: 100, backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: 150, height: 150, backgroundColor: 'steelblue'
      }} />
    </View>
  );
};

export default FixedDimensionsBasics;
\`\`\`

`

export const text2_2 = `
화면 사이즈에 따라 계산되지 않고, 크기가 포인트 값으로 고정된 컴포넌트에서 주로 이러한 방식으로 사이즈를 설정합니다.  
> 포인트와 물리적 측정 단위의 범용 매핑은 없습니다. 즉, 고정 사이즈를 가진 컴포넌트의 물리적 크기가 서로 다른 디바이스와 스크린 사이즈에서 전부 동일하지 않을 수도 있습니다. 그러나, 대부분의 사용 사례에서 이러한 차이는 눈에 띄지 않습니다. 

## Flex 사이즈
컴포넌트가 사용 가능한 공간에 따라 동적으로 확장 및 축소될 수 있도록, 컴포넌트 스타일에서 \`flex\`를 사용합니다. 일반적으로 한 컴포넌트가 사용 가능한 모든 공간을 채우게 하는 공간을 \`flex: 1\`을 사용하게 됩니다. 이 기능은 같은 부모를 가진 컴포넌트들 간에 공간을 균등하게 배분합니다. \`flex\` 속성에 주어진 값이 클수록, 해당 컴포넌트는 형제 컴포넌트들에 비해 더 큰 비율의 공간을 차지하게 됩니다. 

> 부모 컴포넌트가 0보다 큰 사이즈를 가지고 있는 경우에만, 컴포넌트를 확장해 사용 가능한 공간을 채울 수 있습니다. 부모 컴포넌트가 고정된 \`width\` 또는 \`height\`나 \`flex\` 속성을 가지고 있지 않은 경우, 부모 컴포넌트는 사이즈 0을 갖게 되고, \`flex\` 자식 컴포넌트들은 보이지 않게 됩니다. 

**Flex Dimensions**
`

export const code2_2 = `
\`\`\`jsx
import React from 'react';
import { View } from 'react-native';

const FlexDimensionsBasics = () => {
    return (
      // Try removing the \`flex: 1\` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add \`height: 300\` instead of \`flex: 1\`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
};

export default FlexDimensionsBasics;
\`\`\`
`

export const text2_3 = `
컴포넌트의 사이즈를 조정한 후, 그 다음 단계는 [화면에 컴포넌트를 배치하는 방법을 배우는 것](https://reactnative.dev/docs/flexbox)입니다. 

## 백분율 사이즈 (Percentage Dimensions)
flex 레이아웃을 사용하지 않고 화면의 특정 부분을 채우고 싶다면, 컴포넌트의 스타일에 백분율 값을 사용할 수 있습니다. flex 사이즈와 마찬가지로 백분율 사이즈도, 사이즈가 정의된 부모 컴포넌트가 필요합니다.  

**Percentage Dimensions**
`

export const code2_3 = `

\`\`\`jsx
import React from 'react';
import { View } from 'react-native';

const PercentageDimensionsBasics = () => {
  // Try removing the \`height: '100%'\` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <View style={{ height: '100%' }}>
      <View style={{
        height: '15%', backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: '66%', height: '35%', backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: '33%', height: '50%', backgroundColor: 'steelblue'
      }} />
    </View>
  );
};

export default PercentageDimensionsBasics;
\`\`\`

`

export const text3_1 = `
# Flexbox를 이용한 레이아웃

컴포넌트는 Flexbox 알고리즘을 사용해 자식의 레이아웃을 지정할 수 있습니다. Flexbox는 다양한 화면 크기에서 일관된 레이아웃을 제공하도록 설계되었습니다. 

일반적으로 \`flexDirection\`, \`alignItems\` 및 \`justifyContent\`의 조합을 사용해 맞는 레이아웃을 얻을 수 있습니다. 

> Flexbox는 웹에서의 CSS와 같은 방식으로 동작합니다. 기본 값은 다른데, \`flexDirection\`은 \`row\` 대신 \`column\`을 기본값으로 가지며, \`alignContent\`는 \`stretch\` 대신 \`flex-start\`를 기본값으로 합니다. \`flexShrink\`는 \`1\` 대신 \`0\`을 기본값으로 가지며, \`flex\` 매개변수는 단일 숫자만 지원합니다. 

## Flex

[\`flex\`](https://reactnative.dev/docs/layout-props#flex)이템들이 주축(main axis)을 따라 사용 가능한 공간을 어떻게 "채울지"를 정의합니다. 공간은 각 엘리먼트의 flex 속성에 따라 분배됩니다. I

다음 예제에서, 빨간색, 노란색, 초록색 뷰는 모두 \`flex: 1\`로 설정된 컨테이너 뷰의 자식 뷰입니다. 빨간색 뷰는 \`flex: 1\`을 사용하고, 노란색 뷰는 \`flex: 2\`, 초록색 뷰는 \`flex: 3\`을 사용합니다. **1+2+3 = 6**, 이는 빨간색 뷰가 공간의 6분의 1을 차지하고, 노란색 뷰가 6분의 2를, 초록색 뷰가 6분의 3을 차지한다는 것을 의미합니다.  

#### Flex 예제
`

export const code3_1 = `


\`\`\`jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting \`flexDirection\` to \`"row"\`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
\`\`\`

`

export const text3_2 =`

[\`flexDirection\`]은 노드의 자식들이 배치될 방향을 결정합니다. 이를 주축(main axis)이라고도 합니다. 교차 축(cross axis)은 주축에 수직인 축, 또는 줄 바꿈이 배치되는 축입니다. 

- \`column\` (**기본값**) 자식을 위에서 아래로 정렬합니다. 줄 바꿈이 활성화 된 경우, 다음 줄은 컨테이너 상단의 첫 번째 항목 오른쪽에서 시작됩니다. 

- \`row\` 자식을 왼쪽에서 오른쪽으로 정렬합니다. 줄 바꿈이 활성화 된 경우, 다음 줄은 컨테이너 왼쪽의 첫 번째 항목 아래에서 시작됩니다.  

- \`column-reverse\` 자식을 아래에서 위로 정렬합니다. 줄 바꿈이 활성화 된 경우, 다음 줄은 컨테이너 하단의 첫 번째 항목 오른쪽에서 시작됩니다.  

- \`row-reverse\` 자식을 오른쪽에서 왼쪽으로 정렬합니다. 줄 바꿈이 활성화 된 경우, 컨테이너 오른쪽의 첫 번째 항목 아래에서 다음 줄이 시작됩니다.  

[여기](https://yogalayout.com/docs/flex-direction)에서 자세히 알아볼 수 있습니다. 

#### Flex Direction

`

export const code3_2 = `


\`\`\`jsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;
\`\`\`


`

export const text3_3 = `

## Layout Direction

Layout direction은 계층 구조에서 자식과 텍스트가 배치되어야 하는 방향을 지정합니다. Layout direction은 \`start\`와 \`end\`가 어느 쪽을 나타내는지에 대해서도 영향을 줍니다. 기본적으로 React Native는 LTR(Left to Right, 왼쪽에서 오른쪽) 방향으로 배치됩니다. LTR 모드에서 \`start\`는 왼쪽을 의미하고 \`end\`는 오른쪽을 의미합니다.

- \`LTR\` (**기본값**) 텍스트와 자식이 왼쪽에서 오른쪽으로 배치됩니다. 엘리먼트의 시작 부분에 적용된 Margin과 padding은 오른쪽에 적용됩니다.
- \`RTL\` 텍스트와 자식이 오른쪽에서 왼쪽으로 배치됩니다. 엘리먼트의 시작 부분에 적용된 Margin과 padding은 오른쪽에 적용됩니다.

#### Flex Direction

`

export const code3_3 = `


\`\`\`jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DirectionLayout = () => {
  const [direction, setDirection] = useState("ltr");

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={["ltr", "rtl"]}
      setSelectedValue={setDirection}>
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;
\`\`\`


`

export const text3_4 = `

## Justify Content

[\`justifyContent\`](https://reactnative.dev/docs/layout-props#justifycontent)는 컨테이너의 주축 안에서 아이템들이 어떻게 정렬될지를 정의합니다. 예를 들어, \`flexDirection\`을 \`row\`로 설정한 상태에서 이 속성을 center로 설정해 컨테이너 안의 아이템을 수평으로 정렬할 수 있습니다. 또는 \`flexDirection\`을 \`column\`으로 설정해서 컨테이너 안의 아이템을 수직으로 정렬할 수도 있습니다.

- \`flex-start\` (**기본값**) 컨테이너의 아이템들을 컨테이너의 주축이 시작하는 지점으로 정렬합니다.
- \`flex-end\` 컨테이너의 아이템들을 컨테이너의 주축이 끝나는 지점으로 정렬합니다.
- \`center\` 컨테이너의 아이템들을 컨테이너 주축의 중앙으로 정렬합니다.
- \`space-between\` 컨테이너의 주축을 따라 아이템 간에 균등한 간격을 두고, 남은 공간들을 아이템 사이에 분배합니다.
- \`space-around\` 컨테이너의 주축을 따라 아이템 간에 균등한 간격을 두고, 남은 공간을 아이템 주위에 분배합니다. \`space-between\`과 비교했을 때, \`space-around\`를 사용하면 공간이 첫 번째 자식과 마지막 자식 사이에 분배됩니다.
- \`space-evenly\` 주축을 따라 정렬 컨테이너 내에서 아이템을 균등하게 배치합니다. 인접한 아이템 쌍 사이의 공간, 주축 끝과 첫 번째 아이템 사이의 공간, 그리고 주축 끝과 마지막 아이템 사이의 공간이 모두 정확히 같습니다.

[여기](https://yogalayout.com/docs/justify-content)에서 더 자세히 알아볼 수 있습니다.

#### Justify Content

`

export const code3_4 = `

\`\`\`jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;
\`\`\`

`

export const text3_5 = `

## Align Items

\`alignItems\` 는 컨테이너의 교차 축을 따라 아이템들이 어떻게 정렬될지를 정의합니다. Align Items는 \`justifyContent\` 와 매우 비슷하지만, 주축 대신에 교차축에 적용됩니다.

- \`stretch\` (**기본값**) 컨테이너의 아이템들을 컨테이너 교차 축 높이에 맞춰 늘립니다.
- \`flex-start\` 컨테이너의 아이템들을 컨테이너 교차 축의 시작점에 정렬합니다.
- \`flex-end\` 컨테이너의 아이템들을 컨테이너 교차 축의 끝점에 정렬합니다.
- \`center\` 컨테이너의 아이템들을 컨테이너 교차 축의 중앙에 정렬합니다.
- \`baseline\` 컨테이너의 아이템들을 공통 기준선에 따라 정렬합니다. 개별 아이템을 컨테이너의 기준선으로 설정할 수 있습니다.

> \`stretch\`가 적용되려면 아이템들이 하위 축을 따라 고정된 사이즈를 갖지 않아야 합니다. 다음 예제에서, \`alignItems: stretch\` 설정은 자식의 \`width: 50\`이 제거될 때까지 아무 효력을 발휘하지 못합니다.

Align Items

`

export const code3_5 = `

\`\`\`jsx
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("stretch");

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={[
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
      ]}
      setSelectedValue={setAlignItems}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[
          styles.box,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;
\`\`\`

`

export const text3_6 = `

## Align Self

\`alignSelf\` 는 \`alignItems\` 와 같은 옵션과 효과를 가지고 있는데, 컨테이너 안의 아이템 대신에, 하나의 자식에 이 속성을 적용해 부모 안에서의 정렬을 변경할 수 있습니다. \`alignSelf\`는 부모에 설정된 모든 \`alginItems\` 옵션을 덮어씌웁니다.

#### Align Self

`

export const code3_6 = `

\`\`\`jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState("stretch");

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignSelf}>
        <View
          style={[styles.box, {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          }]}
        />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignSelfLayout;
\`\`\`

`

export const text3_7 = `

## Align Content

\`alignContent\`는 교차 축을 따라 라인을 어떻게 배치할지 정의합니다. 이 속성은 아이템들이 \`flexWrap\`을 사용해 여러 줄로 감싸져 있을 때만 적용됩니다.

- \`flex-start\` (**기본값**) 줄바꿈 된 라인을 컨테이너의 교차 축 시작 지점에 정렬합니다.
- \`flex-end\` 줄바꿈 된 라인을 컨테이너의 교차 축 끝 지점에 정렬합니다.
- \`stretch\` (웹에서 Yoga를 사용할 때의 기본값) 줄바꿈 된 라인을 컨테이너 교차 축의 높이에 맞게 늘립니다.
- \`center\` 줄바꿈 된 라인을 컨테이너 교차 축의 중앙에 정렬합니다.
- \`space-between\` 컨테이너의 교차 축을 가로질러 줄바꿈 된 라인의 간격을 균등하게 유지하고, 라인 사이에 나머지 공간을 분배합니다.
- \`space-around\` 컨테이너의 교차 축을 가로질러 줄바꿈 된 라인을 균등하게 배치하고, 라인 주위에 나머지 공간을 분배합니다. \`space-between\`과 비교했을 때, \`space-around\`를 사용하면 공간이 첫 번째 줄과 마지막 줄 사이에 분배됩니다.

[여기](https://yogalayout.com/docs/align-content)에서 자세히 알아볼 수 있습니다.

#### Align Content

`

export const code3_7 = `

\`\`\`jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="alignContent"
      selectedValue={alignContent}
      values={[
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
      ]}
      setSelectedValue={setAlignContent}>
      <View
        style={[styles.box, { backgroundColor: "orangered" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "orange" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "deepskyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumslateblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "purple" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignContentLayout;
\`\`\`

`

export const text3_8 = `

## Flex Wrap

\`flexWrap\` 속성은 컨테이너에 설정되며, 자식들이 주축을 따라 컨테이너의 크기를 초과할 때 발생하는 상황을 제어합니다. 기본값으로, 자식들은 한 줄로 강제됩니다 (엘리먼트가 축소될 수 있음). 줄 바꿈이 허용되는 경우, 아이템들은 필요한 경우 주축을 따라 여러 줄로 줄 바꿈됩니다.

줄 바꿈 시 \`alignContent\`는 컨테이너에서 줄이 배치되는 방법을 지정하는 데 사용할 수 있습니다. [여기](https://yogalayout.com/docs/flex-wrap)에서 자세히 알아보세요.

#### Flex Wrap

`

export const code3_8 = `

\`\`\`jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FlexWrapLayout = () => {
  const [flexWrap, setFlexWrap] = useState("wrap");

  return (
    <PreviewLayout
      label="flexWrap"
      selectedValue={flexWrap}
      values={["wrap", "nowrap"]}
      setSelectedValue={setFlexWrap}>
      <View
        style={[styles.box, { backgroundColor: "orangered" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "orange" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "deepskyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumslateblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "purple" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexWrapLayout;     
\`\`\`

`
export const text3_9 = `

## Flex Basis, Grow, Shrink

- \`FlexBasis\` 는 주축을 따라 아이템의 기본 사이즈를 제공하며, 축 독립적인 방식입니다. 자식의 \`flexBasis\` 를 설정하는 것은 부모가 \`flexDirection: row\` 일 때 해당 자식의 \`width\` 를 설정하는 것과 비슷하고, 부모가 \`flexDirection: column\` 일 때는 해당 자식의 \`height\` 를 설정하는 것과 비슷합니다. 아이템의 \`flexBasis\` 는 아이템에 \`flexGrow\` 와 \`flexShrink\` 연산이 수행되기 전의 기본 사이즈입니다. 

- \`flexGrow\` 는 주축을 따라 자식들 간에 컨테이너 내부의 공간을 어떻게 분배할지를 결정합니다. 컨테이너는 자식들을 배치한 후에 남은 공간을 자식들에게 지정된 flex grow 값에 따라 분배합니다. 

  \`flexGrow\` 는 0 이상의 모든 부동 소수점 값을 허용하며, 기본값은 0입니다. 컨테이너는 자식들의 \`flexGrow\` 값으로 가중치를 부여해 남은 공간을 분배합니다. 

- \`flexShrink\` 는 자식들의 총 크기가 주축 상에서 컨테이너의 크기를 초과하는 경우, 주축을 따라 자식들을 어떻게 축소할지를 설정합니다. \`flexShrink\` 는 \`flexGrow\` 와 매우 유사하며, \`flexGrow\` 에서의 남는 크기 = - (\`flexShrink\` 에서의 초과하는 크기) 라고 생각할 수 있습니다. 또한 이 두 가지 속성은 자식들이 필요에 따라 확장되거나 축소되도록 허용함으로써 같이 잘 작동될 수 있습니다. 

  \`flexShrink\` accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). A container will shrink its children weighted by the children’s \`flexShrink\` values.

  \`flexShrink\` 는 0 이상의 모든 부동 소수점 값을 허용하며, 기본값은 0입니다. (웹에서 기본값은 1). 컨테이너는 자식들의 \`flexShrink\` 값에 따라 가중치를 부여해 자식들을 축소시킵니다. 

[여기](https://yogalayout.com/docs/flex)에서 자세히 알아보세요. 

#### Flex Basis, Grow, and Shrink

`

export const code3_9 = `

\`\`\`jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

const App = () => {
  const [powderblue, setPowderblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  });
  const [skyblue, setSkyblue] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [steelblue, setSteelblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-between",
          },
        ]}
      >
        <BoxInfo
          color="powderblue"
          {...powderblue}
          setStyle={setPowderblue}
        />
        <BoxInfo
          color="skyblue"
          {...skyblue}
          setStyle={setSkyblue}
        />
        <BoxInfo
          color="steelblue"
          {...steelblue}
          setStyle={setSteelblue}
        />
      </View>
      <View style={styles.previewContainer}>
        <View
          style={[
            styles.box,
            {
              flexBasis: powderblue.flexBasis,
              flexGrow: powderblue.flexGrow,
              flexShrink: powderblue.flexShrink,
              backgroundColor: "powderblue",
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              flexBasis: skyblue.flexBasis,
              flexGrow: skyblue.flexGrow,
              flexShrink: skyblue.flexShrink,
              backgroundColor: "skyblue",
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              flexBasis: steelblue.flexBasis,
              flexGrow: steelblue.flexGrow,
              flexShrink: steelblue.flexShrink,
              backgroundColor: "steelblue",
            },
          ]}
        />
      </View>
    </View>
  );
};

const BoxInfo = ({
  color,
  flexBasis,
  flexShrink,
  setStyle,
  flexGrow,
}) => (
  <View style={[styles.row, { flexDirection: "column" }]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Box
      </Text>
    </View>
    <Text style={styles.label}>flexBasis</Text>
    <TextInput
      value={flexBasis}
      style={styles.input}
      onChangeText={(fB) =>
        setStyle((value) => ({
          ...value,
          flexBasis: isNaN(parseInt(fB))
            ? "auto"
            : parseInt(fB),
        }))
      }
    />
    <Text style={styles.label}>flexShrink</Text>
    <TextInput
      value={flexShrink}
      style={styles.input}
      onChangeText={(fS) =>
        setStyle((value) => ({
          ...value,
          flexShrink: isNaN(parseInt(fS))
            ? ""
            : parseInt(fS),
        }))
      }
    />
    <Text style={styles.label}>flexGrow</Text>
    <TextInput
      value={flexGrow}
      style={styles.input}
      onChangeText={(fG) =>
        setStyle((value) => ({
          ...value,
          flexGrow: isNaN(parseInt(fG))
            ? ""
            : parseInt(fG),
        }))
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "100",
  },
  previewContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "aliceblue",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: "center",
  },
});

export default App;
\`\`\`

`

export const text3_10 = `

## Width와 Height

\`width\` 속성은 엘리먼트 컨텐츠 영역의 너비를 지정합니다. 마찬가지로 \`height\` 속성은 엘리먼트 컨텐츠 영역의 높이를 지정합니다. 

Both \`width\` and \`height\` can take the following values:

\`widht\` 와 \`height\` 모두 다음의 값들을 가질 수 있습니다. 

- \`auto\` (**기본값**) React Native가 다른 자식들, 텍스트, 이미지 등 컨텐츠에 따라 엘리먼트의 너비/높이를 계산합니다.  
- \`pixels\` Defines the width/height in absolute pixels. Depending on other styles set on the component, this may or may not be the final dimension of the node.
- \`pixels\` 는 너비/높이를 고정 픽셀 단위로 정의합니다. 컴포넌트에 설정된 다른 스타일들에 따라 최종 치수가 될 수도 있고 아닐 수도 있습니다. 
- \`percentage\` 는 너비나 높이를 부모의 너비나 높이 각각에 대한 퍼센트로 정의합니다. 

#### Width and Height

`

export const code3_10 = `

\`\`\`jsx
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const WidthHeightBasics = () => {
  const [widthType, setWidthType] = useState("auto");
  const [heightType, setHeightType] = useState("auto");

  return (
    <PreviewLayout
      widthType={widthType}
      heightType={heightType}
      widthValues={["auto", 300, "80%"]}
      heightValues={["auto", 200, "60%"]}
      setWidthType={setWidthType}
      setHeightType={setHeightType}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "aliceblue",
          height: heightType,
          width: widthType,
          padding: 15,
        }}
      >
        <View
          style={[
            styles.box,
            { backgroundColor: "powderblue" },
          ]}
        />
        <View
          style={[
            styles.box,
            { backgroundColor: "skyblue" },
          ]}
        />
        <View
          style={[
            styles.box,
            { backgroundColor: "steelblue" },
          ]}
        />
      </View>
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={styles.row}>
      <Text style={styles.label}>width </Text>
      {widthValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[
            styles.button,
            widthType === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              widthType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>height </Text>
      {heightValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[
            styles.button,
            heightType === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              heightType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginRight: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: "coral",
    shadowOpacity: 0,
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default WidthHeightBasics;
\`\`\`
`

export const text3_11 = `

## Absolute & Relative Layout

엘리먼트의 \`position\` 타입은 부모 내부에서 해당 엘리먼트가 어떻게 위치해야할지를 정의합니다. 

- \`relative\` (**기본값**) 엘리먼트는 기본적으로 상대적으로 배치됩니다. 이는 엘리먼트가 레이아웃의 정상적인 흐름에 따라 배치되었다가, \`top\`, \`right\`, \`bottom\`, \`left\` 값에 따라 해당 위치를 벗어나게 되는 것을 의미합니다. 이러한 위치 변화(offset)는 형제 또는 부모 요소에 영향을 미치지 않습니다. 
- \`absolute\` 절대적인 위치로 배치되었을 때, 엘리먼트는 일반적인 레이아웃 흐름에 관여하지 않고 형제 요소들과 독립적으로 배치되며, \`top\`, \`right\`, \`bottom\`, \`left\` 값에 따라 위치가 결정됩니다. 

#### Absolute

`

export const code3_11 = `

\`\`\`jsx
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const PositionLayout = () => {
  const [position, setPosition] = useState("relative");

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={["relative", "absolute"]}
      setSelectedValue={setPosition}
    >
      <View
        style={[
          styles.box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: "skyblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: "steelblue",
          },
        ]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default PositionLayout;
\`\`\`

`


export const text3_12 = `

## 더 알아보기

flexbox에 대해 더 알아보려면, 반응형 [yoga playground](https://yogalayout.com/playground) 를 확인해보세요. 

여기에서는 기초만 다뤘지만, 레이아웃에 필요할 수도 있는 다른 많은 스타일들이 존재합니다. 레이아웃을 제어하는 props의 전체 리스트는 [여기](https://reactnative.dev/docs/layout-props) 에 문서화되어 있습니다. 

또한 [Wix Engineers](https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c) 에서 몇 가지 예제들을 볼 수 있습니다. 
`

export const text4_1 = `
# 이미지

## 정적 이미지 리소스

React Native는 Android 및 iOS 앱에서 이미지와 다른 미디어 리소스들을 관리하는 통합된 방법을 제공합니다. 앱에 정적 이미지를 추가하려면, 이미지를 소스 코드 트리 어딘가에 배치하고 다음과 같이 참조하면 됩니다. 

\`\`\`jsx
<Image source={require('./my-icon.png')} />
\`\`\`

이미지 이름은 JS 모듈을 확인하는 방식과 동일한 방식으로 확인됩니다. 위 예시에서 번들러는 \`my-icon.png\` 를 참조하는 컴포넌트와 같은 폴더에서 해당 이미지를 찾습니다. \`my-icon.ios.png\` 와 \`my-icon.android.png\` 가 있다면, 번들러는 플랫폼에 따라 맞는 파일을 선택합니다. 

\`@2x\` 와 \`@3x\` 접미사를 사용해 다양한 화면 밀도의 이미지를 제공할 수도 있습니다. 

파일 구조가 다음과 같고, 

\`\`\`shell
.
├── button.js
└── img
    ├── check.png
    ├── check@2x.png
    └── check@3x.png
\`\`\`

\`button.js\` 코드가 다음 코드를 포함하고 있다면, 

\`\`\`jsx
<Image source={require('./img/check.png')} />
\`\`\`

번들러는 디바이스의 화면 밀도에 해당하는 이미지를 번들링해 제공합니다. 예를 들어 \`check@2x.png\` 는 아이폰 7에, \`check@3x.png\` 는 아이폰 7 또는 넥서스 5에 각각 사용됩니다. 화면 밀도에 맞는 이미지가 없는 경우, 가장 비슷한 이미지가 선택됩니다. 

Windows에서는 프로젝트에 새로운 이미지를 추가하려면 번들러를 재시작해야할 수도 있습니다. 

정적 이미지 리소스를 사용하면 다음과 같은 이점들을 누릴 수 있습니다. 

1. Android와 iOS에서 동일한 시스템. 
2. 이미지는 JavaScript 코드와 동일한 폴더에 존재합니다. 컴포넌트는 자체적으로 포함되어 있습니다. 
3. 전역 네임스페이스가 없습니다. 즉, 이름 충돌에 대해 걱정할 필요가 없습니다. 
4. 실제로 사용되는 이미지들만 앱에 패키징됩니다. 
5. 이미지를 추가 및 변경할 때 앱을 다시 컴파일할 필요가 없으므로, 평소와 같이 시뮬레이터를 새로고침할 수 있습니다. 
6. 번들러가 이미지의 치수를 알고 있기 때문에 코드에서 중복으로 치수를 정의할 필요가 없습니다. 
7. [npm](https://www.npmjs.com/) 패키지를 통해 이미지를 배포할 수 있습니다. 

정적 이미지 리소스가 작동하려면, \`require\` 문에서 이미지의 이름이 정적으로 선언되어야 합니다. 

\`\`\`jsx
// GOOD
<Image source={require('./my-icon.png')} />;

// BAD
var icon = this.props.active
  ? 'my-icon-active'
  : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />;

// GOOD
var icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
\`\`\`

이러한 방식으로 require 되는 이미지 소스에는 이미지의 크기 정보(너비, 높이)가 포함됩니다. 이미지의 크기를 동적으로 조정해야 하는 경우 (즉, flex를 통해), 스타일 속성에 \`{ width: undefined, height: undefined }\` 를 수동으로 설정해야할 수도 있습니다. 

## 정적 비이미지(Non-Image) 리소스

위에서 설명한 \`require\` 구문을 사용해 프로젝트에 오디오, 비디오, 또는 문서 파일들을 포함시킬 수도 있습니다. \`.mp3\`, \`.wav\`, \`.mp4\`, \`.mov\`, \`.html\`, \`.pdf\` 등 대부분의 파일 형식이 지원됩니다. 지원되는 파일 형식의 전체 목록을 보려면 [bundler defaults](https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js#L14-L44) 를 확인하세요. 

[Metro configuration]() 에 [\`assetExts\` resolver option]()을 추가해 다른 타입들을 추가적으로 지원할 수 있습니다. 

주의할 점은 현재 이미지 외의 리소스에 대한 크기 정보가 전달되지 않기 때문에, \`flexGrow\` 대신 absolute position을 사용해야한다는 것입니다. 이러한 제한은 XCode 또는 Android용 Assets 폴더에 직접적으로 연결된 비디오에서는 발생하지 않습니다. 

## 하이브리드 앱의 리소스 이미ㅈ

하이브리드 앱(일부 UI는 React Native에서, 일부 UI는 플랫폼 코드에서 구현된 앱)을 구축하는 경우에도, 이미 앱에 번들로 제공된 이미지들을 사용할 수 있습니다. 

XCode의 자산(asset) 카탈로그 또는 Android의 drawable 폴더를 통해 포함된 이미지의 경우, 확장자 없이 이미지 이름만 사용합니다. 

\`\`\`jsx
<Image
  source={{ uri: 'app_icon' }}
  style={{ width: 40, height: 40 }}
/>
\`\`\`

Android 자산(asset) 폴더에 있는 이미지의 경우,  \`asset:/\` 스키마를 사용합니다.

\`\`\`jsx
<Image
  source={{ uri: 'asset:/app_icon.png' }}
  style={{ width: 40, height: 40 }}
/>
\`\`\`

이러한 접근 방식은 보안 검사(safety check)를 제공하지 않습니다. 애플리케이션에서 이러한 이미지들을 사용할 수 있도록 보장하는 것은 사용자의 책임입니다. 또한 이미지 크기를 수동으로 지정해야 합니다. 

## 네트워크 이미지

앱에 표시할 대부분의 이미지들을 컴파일 중에 사용할 수 없어서, 또는 이진 파일 크기를 줄이기 위해서 몇몇 이미지를 동적으로 불러오고 싶을 수도 있습니다. 정적 리소스와는 달리 이미지의 크기를 수동으로 지정해야 합니다. iOS에서 [App Transport Security](https://reactnative.dev/docs/running-on-device#app-transport-security) (앱 전송 보안) 요건을 충족하기 위해서는, https도 같이 사용할 것을 강력하게 권장합니다. 

\`\`\`jsx
// GOOD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />
\`\`\`

### 이미지에 대한 네트워크 요청

이미지 요청과 함께 HTTP-Verb, 헤더 또는 본문과 같은 속성을 설정하려면, source 객체에 다음과 같은 속성들을 정의하여 설정할 수 있습니다. 

\`\`\`jsx
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }}
  style={{ width: 400, height: 400 }}
/>
\`\`\`

## Uri 데이터 이미지

REST API 호출에서 인코딩된 이미지를 가져오는 경우가 있습니다. \`data: \` uri 스키마를 사용해 이러한 이미지를 사용할 수 있습니다. 네트워크 리소스와 마찬가지로, 이미지의 크기를 수동으로 지정해야 합니다. 

> Uri 데이터 이미지는 DB의 리스트 안의 아이콘들과 같이 매우 작고 동적인 이미지에만 권장됩니다. 

\`\`\`jsx
// include at least width and height!
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain'
  }}
  source={{
    uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
  }}
/>
\`\`\`

### 캐시 제어 (iOS 전용)

경우에 따라 이미 로컬 캐시에 있는 이미지(고해상도 이미지를 사용할 수 있을 때까지 저해상도로 위치만 잡아두는 placeholder용 이미지)만 보여줄 수 있습니다. 대역폭을 절약하기 위해 기한이 지난 이미지를 보여줄지 여부에 대해서는 신경쓰지 않습니다. \`cache\` 소스 속성은 네트워크 계층이 캐시와 상호작용하는 방식에 대한 제어를 제공합니다. 

- \`default\`: 네이티브 플랫폼 기본 전략을 사용합니다. 
- \`reload\`: URL에 대한 데이터가 원래 소스에서 로드됩니다. URL 로드 요청을 충족시키는 데에 기존 캐시 데이터를 사용할 수 없습니다. 
- \`force-cache\`:  캐시된 기존 데이터는 기간 또는 만료일에 관계없이 요청을 충족하는 데 사용됩니다. 요청에 해당하는 캐시에 기존 데이터가 없으면 원본 소스에서 데이터가 로드됩니다. 
- \`only-if-cached\`: 기존 캐시 데이터가 기간 또는 만료일에 관계없이 요청을 충족하는 데 사용됩니다. 캐시에 URL 로드 요청에 해당하는 기존 데이터가 없으면, 원본 소스에서 데이터를 가져오려는 시도 없이, 요청에 실패한 것으로 간주합니다. 

\`\`\`jsx
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    cache: 'only-if-cached'
  }}
  style={{ width: 400, height: 400 }}
/>
\`\`\`

## 로컬 파일시스템 이미지

\`Images.xcassets\` 외의 로컬 리소스를 사용하는 예제를 [CameraRoll](https://github.com/react-native-community/react-native-cameraroll) 에서 확인하세요. 

### 최고의 카메라 롤 이미지

iOS는 카메라 롤에 동일한 이미지의 여러 크기를 저장합니다. 성능 상의 이유로 최대한 비슷한 크기의 이미지를 선택하는 것이 매우 중요합니다. 200x200 크기의 썸네일을 보여주는 데 3264x2448 크기의 전체 화질 이미지 소스를 사용하지 않는 것이 좋습니다. 이미지 크기가 정확히 일치하는 경우 React Native는 그것을 선택하지만, 그렇지 않은 경우,  크기를 조정할 때 흐릿해지지 않도록 최소 50%이상 큰 첫 번째 것을 사용하게 됩니다. 이 모든 작업은 기본적으로 수행되므로, 사용자가 이를 직접 수행하기 위해 피곤한 (그리고 오류가 발생하기 쉬운) 코드를 작성할 필요가 없습니다. 

## 크기를 모두 자동으로 설정하지 않는 이유

이미지 크기를 지정하지 않으면, *브라우저*는 0x0 엘리먼트를 렌더링하고, 이미지를 다운로드한 다음, 정확한 크기의 이미지를 렌더링합니다. 이 동작의 큰 문제점은, UI가 이미지를 로드할 때 이리저리 이동한다 것입니다. 이는 매우 나쁜 사용자 경험을 만듭니다. 

*In React Native* this behavior is intentionally not implemented. It is more work for the developer to know the dimensions (or aspect ratio) of the remote image in advance, but we believe that it leads to a better user experience. Static images loaded from the app bundle via the \`require('./my-icon.png')\` syntax *can be automatically sized* because their dimensions are available immediately at the time of mounting.

React Native에서 이 동작이 의도적으로 구현된 것은 아닙니다. 원격 이미지의 사이즈를 미리 알고 있으려면, 개발자가 할 일이 더 많아지지만, 우리는 그렇게 하는 것이 더 나은 사용자 경험으로 이어진다고 생각합니다. \`require('./my-icon.png')\` 구문을 통해 앱 번들에서 로드된 정적 이미지는 마운트 중에 바로 사이즈를 사용 가능하므로 자동으로 크기를 지정할 수 있습니다. 

예를 들어,  \`require('./my-icon.png')\` 의 결과는 다음과 같습니다. 

\`\`\`json
{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}
\`\`\`

## 객체로서의 소스

React Native에서, 한 가지 흥미로운 점은 \`src\` 속성이 \`source\` 로 명명되었다는 것과, 문자열 대신 uri 속성을 가진 객체를 받는다는 것입니다. 

\`\`\`jsx
<Image source={{ uri: 'something.jpg' }} />
\`\`\`

인프라 측면에서 보면 해당 객체에 메타데이터를 연결할 수 있도록 해주기 때문입니다. 예를 들어 \`require('./my-icon.png')\` 를 사용하면, 실제 위치와 크기에 대한 정보를 추가합니다. (이는 나중에 변경될 수 있으니 주의하십시오). 이는 또한 미래 증명이기도 합니다. 예를 들어 어느 시점에 스프라이트를 지원하려면, \`{uri: ...}\` 를 출력하는 대신에 \`{uri: ..., crop: {left: 10, top: 50, width: 20, height: 40}}\` 를 출력해 모든 기존 호출 장소에서 스프라이트를 명료하게 지원할 수 있습니다. 

사용자 측에서는, 객체 안에 표시할 사이즈를 계산하기 위해서, 이미지의 사이즈와 같은 유용한 속성들을 객체에 주석으로 달 수 있습니다. 이미지에 대한 정보를 더 많이 저장할 수 있도록 데이터 구조를 자유롭게 사용해보세요. 

## 중첩을 통한 배경 이미지

웹에 능숙한 개발자들이 공통적으로 요청하는 기능은 바로 \`background-image\` 입니다. 이를 위해 \`<Image>\` 와 같은 props를 가진  \`<ImageBackground>\` 컴포넌트를 사용하고, 그 위에 원하는 자식 요소를 추가할 수 있습니다. 

구현이 기본적이기 때문에 \`<ImageBackground>\` 를 사용하고 싶지 않은 경우, 자세한 내용은 \`<ImageBackground>\`의 [문서](https://reactnative.dev/docs/imagebackground) 를 참고하고, 필요한 경우 사용자 정의 컴포넌트를 생성하세요. 

\`\`\`jsx
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);
\`\`\`

일부 width와 height 스타일 속성은 반드시 지정해야 합니다. 

## iOS Border Radius 스타일

Please note that the following corner specific, border radius style properties are currently ignored by iOS's image component:

현재 iOS의 이미지 컴포넌트에서는 다음과 같은 코너별 border radius 스타일 속성이 무시됩니다. 

- \`borderTopLeftRadius\`
- \`borderTopRightRadius\`
- \`borderBottomLeftRadius\`
- \`borderBottomRightRadius\`

## 오프스레드(Off-thread) 디코딩

이미지 디코딩에는 프레임 이상의 시간이 걸릴 수 있습니다. 디코딩은 메인 스레드에서 수행되므로, 이는 웹에서 프레임 수가 떨어지는 것의 주요 원인 중 하나입니다. React Native의 이미지 디코딩은 다른 스레드에서 수행됩니다. 실제로 이미지가 아직 다운로드되지 않은 경우를 처리할 필요가 있기 때문에, 디코딩 중에 추가로 몇 프레임 동안 placeholder를 보여주기 위해서 코드를 수정할 필요가 없습니다. 


`

export const text5_1 = `
# 색상 레퍼런스

React Native의 컴포넌트는 JavaScript를 사용해 스타일링됩니다. 색상 속성은 주로 [CSS가 웹에서 작동하는 방식](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)과 일치합니다. 각 플랫폼의 색상 사용에 대한 가이드는 다음을 확인하세요: 

- [Android](https://material.io/design/color/color-usage.html)
- [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/)

## 색상 API

React Native에는 플랫폼의 디자인 및 사용자 기본 설정을 최대한 활용할 수 있도록 설계된 여러 색상 API가 있습니다. 

- [PlatformColor](https://reactnative.dev/docs/platformcolor) 를 사용하면 플랫폼의 색상 체계를 참조할 수 있습니다. 
- [DynamicColorIOS](https://reactnative.dev/docs/dynamiccolorios) 는 iOS 전용이며, 라이트 모드 또는 다크 모드에서 어떤 색상들을 사용할지 지정할 수 있습니다. 

## 색상 표현

### Red Green Blue (RGB)

React Native는  \`rgb()\` 와 \`rgba()\` 의 16진수 표기법과 함수형 표기법을 지원합니다. 

- \`'#f0f'\` (#rgb)
- \`'#ff00ff'\` (#rrggbb)
- \`'#f0ff'\` (#rgba)
- \`'#ff00ff00'\` (#rrggbbaa)
- \`'rgb(255, 0, 255)'\`
- \`'rgba(255, 0, 255, 1.0)'\`

### Hue Saturation Lightness (HSL)

React Native는 \`hsl()\` 과 \`hsla()\` 를 함수형 표기법으로 지원합니다. 

- \`'hsl(360, 100%, 100%)'\`
- \`'hsla(360, 100%, 100%, 1.0)'\`

### Color ints

React Native는 색상을 \`int\` 값으로도 표기할 수 있도록 지원합니다. (RGB 색상 모드에서)

- \`0xff00ff00\` (0xrrggbbaa)

> ***참고:\\*** 이는 Android의 Color ints와 비슷해보일 수 있지만, Android에서 값은 SRGB 색상 모드로 저장됩니다. (0xaarrggbb).

### 이름이 지어진 색상들 (Named colors)

In React Native you can also use color name strings as values.

React Native에서는 값으로 색상 이름 문자열을 사용할 수도 있습니다. 

> ***참고:\\*** React Native는 색상 이름으로 소문자만 지원합니다. 대문자 색상 이름은 지원되지 않습니다. 

#### \`transparent\`

\`transparent\` 는 [CSS3](https://www.w3.org/TR/css-color-3/#transparent) 에서와 동일하게,  \` rgba(0,0,0,0\` 의 단축 표기법입니다. 

#### 색상 키워드

명명된 색상의 구현은 [CSS3/SVG specification](https://www.w3.org/TR/css-color-3/#svg-color) 를 따릅니다. 

- aliceblue (\`#f0f8ff\`)
- antiquewhite (\`#faebd7\`)
- aqua (\`#00ffff\`)
- aquamarine (\`#7fffd4\`)
- azure (\`#f0ffff\`)
- beige (\`#f5f5dc\`)
- bisque (\`#ffe4c4\`)
- black (\`#000000\`)
- blanchedalmond (\`#ffebcd\`)
- blue (\`#0000ff\`)
- blueviolet (\`#8a2be2\`)
- brown (\`#a52a2a\`)
- burlywood (\`#deb887\`)
- cadetblue (\`#5f9ea0\`)
- chartreuse (\`#7fff00\`)
- chocolate (\`#d2691e\`)
- coral (\`#ff7f50\`)
- cornflowerblue (\`#6495ed\`)
- cornsilk (\`#fff8dc\`)
- crimson (\`#dc143c\`)
- cyan (\`#00ffff\`)
- darkblue (\`#00008b\`)
- darkcyan (\`#008b8b\`)
- darkgoldenrod (\`#b8860b\`)
- darkgray (\`#a9a9a9\`)
- darkgreen (\`#006400\`)
- darkgrey (\`#a9a9a9\`)
- darkkhaki (\`#bdb76b\`)
- darkmagenta (\`#8b008b\`)
- darkolivegreen (\`#556b2f\`)
- darkorange (\`#ff8c00\`)
- darkorchid (\`#9932cc\`)
- darkred (\`#8b0000\`)
- darksalmon (\`#e9967a\`)
- darkseagreen (\`#8fbc8f\`)
- darkslateblue (\`#483d8b\`)
- darkslategrey (\`#2f4f4f\`)
- darkturquoise (\`#00ced1\`)
- darkviolet (\`#9400d3\`)
- deeppink (\`#ff1493\`)
- deepskyblue (\`#00bfff\`)
- dimgray (\`#696969\`)
- dimgrey (\`#696969\`)
- dodgerblue (\`#1e90ff\`)
- firebrick (\`#b22222\`)
- floralwhite (\`#fffaf0\`)
- forestgreen (\`#228b22\`)
- fuchsia (\`#ff00ff\`)
- gainsboro (\`#dcdcdc\`)
- ghostwhite (\`#f8f8ff\`)
- gold (\`#ffd700\`)
- goldenrod (\`#daa520\`)
- gray (\`#808080\`)
- green (\`#008000\`)
- greenyellow (\`#adff2f\`)
- grey (\`#808080\`)
- honeydew (\`#f0fff0\`)
- hotpink (\`#ff69b4\`)
- indianred (\`#cd5c5c\`)
- indigo (\`#4b0082\`)
- ivory (\`#fffff0\`)
- khaki (\`#f0e68c\`)
- lavender (\`#e6e6fa\`)
- lavenderblush (\`#fff0f5\`)
- lawngreen (\`#7cfc00\`)
- lemonchiffon (\`#fffacd\`)
- lightblue (\`#add8e6\`)
- lightcoral (\`#f08080\`)
- lightcyan (\`#e0ffff\`)
- lightgoldenrodyellow (\`#fafad2\`)
- lightgray (\`#d3d3d3\`)
- lightgreen (\`#90ee90\`)
- lightgrey (\`#d3d3d3\`)
- lightpink (\`#ffb6c1\`)
- lightsalmon (\`#ffa07a\`)
- lightseagreen (\`#20b2aa\`)
- lightskyblue (\`#87cefa\`)
- lightslategrey (\`#778899\`)
- lightsteelblue (\`#b0c4de\`)
- lightyellow (\`#ffffe0\`)
- lime (\`#00ff00\`)
- limegreen (\`#32cd32\`)
- linen (\`#faf0e6\`)
- magenta (\`#ff00ff\`)
- maroon (\`#800000\`)
- mediumaquamarine (\`#66cdaa\`)
- mediumblue (\`#0000cd\`)
- mediumorchid (\`#ba55d3\`)
- mediumpurple (\`#9370db\`)
- mediumseagreen (\`#3cb371\`)
- mediumslateblue (\`#7b68ee\`)
- mediumspringgreen (\`#00fa9a\`)
- mediumturquoise (\`#48d1cc\`)
- mediumvioletred (\`#c71585\`)
- midnightblue (\`#191970\`)
- mintcream (\`#f5fffa\`)
- mistyrose (\`#ffe4e1\`)
- moccasin (\`#ffe4b5\`)
- navajowhite (\`#ffdead\`)
- navy (\`#000080\`)
- oldlace (\`#fdf5e6\`)
- olive (\`#808000\`)
- olivedrab (\`#6b8e23\`)
- orange (\`#ffa500\`)
- orangered (\`#ff4500\`)
- orchid (\`#da70d6\`)
- palegoldenrod (\`#eee8aa\`)
- palegreen (\`#98fb98\`)
- paleturquoise (\`#afeeee\`)
- palevioletred (\`#db7093\`)
- papayawhip (\`#ffefd5\`)
- peachpuff (\`#ffdab9\`)
- peru (\`#cd853f\`)
- pink (\`#ffc0cb\`)
- plum (\`#dda0dd\`)
- powderblue (\`#b0e0e6\`)
- purple (\`#800080\`)
- rebeccapurple (\`#663399\`)
- red (\`#ff0000\`)
- rosybrown (\`#bc8f8f\`)
- royalblue (\`#4169e1\`)
- saddlebrown (\`#8b4513\`)
- salmon (\`#fa8072\`)
- sandybrown (\`#f4a460\`)
- seagreen (\`#2e8b57\`)
- seashell (\`#fff5ee\`)
- sienna (\`#a0522d\`)
- silver (\`#c0c0c0\`)
- skyblue (\`#87ceeb\`)
- slateblue (\`#6a5acd\`)
- slategray (\`#708090\`)
- snow (\`#fffafa\`)
- springgreen (\`#00ff7f\`)
- steelblue (\`#4682b4\`)
- tan (\`#d2b48c\`)
- teal (\`#008080\`)
- thistle (\`#d8bfd8\`)
- tomato (\`#ff6347\`)
- turquoise (\`#40e0d0\`)
- violet (\`#ee82ee\`)
- wheat (\`#f5deb3\`)
- white (\`#ffffff\`)
- whitesmoke (\`#f5f5f5\`)
- yellow (\`#ffff00\`)
- yellowgreen (\`#9acd32\`)
`