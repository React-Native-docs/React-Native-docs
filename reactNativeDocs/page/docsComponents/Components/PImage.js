import React from 'react';
import { FlatList, SectionList, StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "../../docs/Styles";
import CodeSection from "../../../component/CodeSection"
import ImageSection from "../../../component/ImageSection"
import BulletedList from "../../../component/BulletedList"

export default PImage = ({ navigation }) => {
	return (
		<ScrollView>
			<H1 content="Image" />
			<H4 content="네트워크 이미지, 정적 리소스, 임시 로컬 이미지 및 카메라 롤과 같은 로컬 디스크의 이미지를 포함하여 다양한 유형의 이미지를 표시하기위한 React 구성 요소입니다." />
			<H4 content="네트워크 및 데이터 이미지의 경우 이미지의 크기를 수동으로 지정해야합니다!" />


			<CodeSection content={Code1} navi={navigation} naviName={"Default"} />

			<H1 content="실행 결과물" />
			<View style={[local_styles.container, local_styles.horizontal]}>
				<Image
					style={{
						width: 50,
						height: 50,
					}}
					source={{
						uri: 'https://reactnative.dev/img/tiny_logo.png',
					}}
				/>
			</View>
			<H1 content="Reference" />
			<H2 content="Props" />

			<H3 content="style" />
			<H3 content="이미지 스타일 props" />
			<H4 content="borderTopRightRadius / backfaceVisibility / borderBottomLeftRadius / borderBottomRightRadius / borderColor / borderRadius / borderTopLeftRadius / backgroundColor / borderWidth / opacity / overflow / resizeMode / tintColor / overlayColor" />
			<H3 content="이미지 레이아웃 props" />
			<H4 content="alignContent / alignItems / alignSelf / aspectRatio / borderBottomWidth / borderEndWidth / borderLeftWidth / borderRightWidth / borderStartWidth / borderTopWidth / borderWidth / bottom / direction / display / end / flex / flexBasis / flexDirection / flexGrow / flexShrink / flexWrap / height / justifyContent / left / margin / marginBottom / ..." />
			<H3 content="이미지 그림자 props" />
			<H4 content="shadowColor / shadowOffset / shadowOpacity / shadowRadius"/>
			<H3 content="이미지 변형(transform) props" />
			<H4 content="decomposedMatrix, rotation, scaleX, scaleY, transformMatrix, translateX, translateY"/>
			<H4 content="사용 예: transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]);"/>
			<H3 content="accessible" />
			<H4 content="true이면 이미지가 접근성 요소임을 나타냅니다."/>
			<H3 content="accessibilityLabel" />
			<H4 content="사용자가 이미지와 상호 작용할 때 화면 판독기가 읽는 텍스트입니다."/>
			<H3 content="blurRadius" />
			<H4 content="이미지에 추가 된 흐림 필터의 흐림 반경" />
			<H3 content="onLoadStart / onLoadEnd / onLoad / onLayout / onError" />
			<H4 content="onLoadStart={(e) => this.setState({loading: true})}"/>

			<H2 content="Method" />
			<H3 content="getSize()"/>
			<H4 content="Image.getSize(uri, success, [failure]);"/>
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