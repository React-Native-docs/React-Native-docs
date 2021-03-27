import React from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "../../docs/Styles";
import CodeSection from "../../../component/CodeSection"
import ImageSection from "../../../component/ImageSection"
import BulletedList from "../../../component/BulletedList"

export default PImageBackground = ({ navigation }) => {
	return (
		<ScrollView>
			<H1 content="FlatList" />
			<H4 content="{}" />


			<CodeSection content={Code1} navi={navigation} naviName={"Default"} />

			<H1 content="실행 결과물" />
			<View style={[local_styles.container, local_styles.horizontal]}>
				<Button
					onPress={() => alert("Button Example")}
					title="Learn More"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			<Button
				onPress={() => alert("Button Example")}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>

			<H1 content="Reference" />
			<H2 content="Props" />

			<H3 content="onPress" />
			<H4 content="사용자가 버튼을 탭할 때 호출되는 핸들러입니다. 첫 번째 함수 인수는 PressEvent 형식의 이벤트입니다 ." />

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