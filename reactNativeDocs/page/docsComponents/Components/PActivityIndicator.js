import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "../../docs/Styles";
import CodeSection from "../../../component/CodeSection"
import ImageSection from "../../../component/ImageSection"
import BulletedList from "../../../component/BulletedList"

export default PActivityIndicator = ({ navigation }) => {
	return (
		<ScrollView>
			<H1 content="ActivityIndicator" />
			<H4 content="Displays a circular loading indicator." />
			<CodeSection content={Code1} navi={navigation} naviName={"Default"}/>
			<H1 content="실행 결과물"/>
			<View style={[local_styles.container, local_styles.horizontal]}>
				<ActivityIndicator />
				<ActivityIndicator size="large" />
				<ActivityIndicator size="small" color="#0000ff" />
				<ActivityIndicator size="large" color="#00ff00" />
			</View>
			
			<H1 content="Reference" />
			<H2 content="Props" />
			<H4 content="View Props를 상속받습니다." />

			<H3 content="animating" />
			<H4 content="기본값 true / 숨기려면 false" />
			<H3 content="color" />
			<H4 content="회전색상. 기본값 null(Android) / gray(#999999 ios)" />
			<H3 content="hidesWhenStopped(ios)" />
			<H4 content="Whether the indicator should hide when not animating." />
			<H3 content="size" />
			<H4 content="크기. 기본값: small / 크게하려면 'large'" />

		</ScrollView>
	);
}
const Code1 = ' \
import React from "react"; \\\
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"; \\\
\\\
const App = () => (\\\
<View style={[styles.container, styles.horizontal]}>\\\
		<ActivityIndicator />\\\
		<ActivityIndicator size="large" />\\\
		<ActivityIndicator size="small" color="#0000ff" />\\\
		<ActivityIndicator size="large" color="#00ff00" />\\\
	</View>\\\
); \\\
\\\
const styles = StyleSheet.create({\\\
	container: {\\\
		flex: 1, \\\
		justifyContent: "center"\\\
	}, \\\
	horizontal: {\\\
	\\\
flexDirection: "row", \\\
justifyContent: "space-around", \\\
padding: 10\\\
	}\\\
}); \\\
export default App; \\\
';

const local_styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		borderColor: "#999999",
		borderWidth: 1,
		margin:10
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	}
});