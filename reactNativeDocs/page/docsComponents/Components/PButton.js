import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View,  ScrollView, Button } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "../../docs/Styles";
import CodeSection from "../../../component/CodeSection"
import ImageSection from "../../../component/ImageSection"
import BulletedList from "../../../component/BulletedList"

export default PButton = ({ navigation}) => {
	return (
		<ScrollView>
			<H1 content="Button" />
			<H4 content="기본 버튼 구성 요소입니다. 최소 수준의 사용자 지정을 지원합니다." />
			<H4 content="이 버튼이 앱에 적합하지 않은 경우 TouchableOpacity 또는 TouchableWithoutFeedback을 사용하여 자신 만의 버튼을 만들 수 있습니다 . 영감을 얻으려면 이 버튼 구성 요소 의 소스 코드를 참조하세요 . 또는 커뮤니티에서 구축 한 다양한 버튼 구성 요소를 살펴보십시오 " />
			<CodeSection content={Code1} navi={navigation} naviName={"Default"} />
			<H1 content="실행 결과물" />
			<View style={[local_styles.container, local_styles.horizontal]}>
			<Button
				onPress={()=>alert("Button Example")}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			<Button
				onPress={()=>alert("Button Example")}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
			<H1 content="Reference" />
			<H2 content="Props" />

			<H3 content="onPress" />
			<H4 content="사용자가 버튼을 탭할 때 호출되는 핸들러입니다. 첫 번째 함수 인수는 PressEvent 형식의 이벤트입니다 ." />
			<H3 content="title" />
			<H4 content="버튼 내부에 표시 할 텍스트입니다. Android에서는 주어진 제목이 대문자 형식으로 변환됩니다." />
			<H3 content="accessibilityLabel" />
			<H4 content="시각 장애인 접근성 기능에 대해 표시 할 텍스트입니다." />
			<H3 content="color" />
			<H4 content="텍스트 색상 #2196F3(연한 파랑, iOS) 또는 버튼의 배경색 #007AFF(파랑, Android)입니다." />
			<H3 content="disabled" />
			<H4 content="true경우이 구성 요소에 대한 모든 상호 작용을 비활성화합니다." />

		</ScrollView>
	);
}
const Code1 = '\\\
<Button\\\
	onPress = { onPressLearnMore }\\\
	title = "Learn More"\\\
	color = "#841584"\\\
	accessibilityLabel = "Learn more about this purple button"\\\
/>\\\
'
const local_styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		borderColor: "#999999",
		borderWidth: 1,
		margin: 10
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	}
})