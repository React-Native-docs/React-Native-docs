import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import styled from 'styled-components';
import { ReactMiniLogo } from '../../component/svg/ReactMiniLogo'
export default Home = () => {
	return (
		<ScrollV>
			{/* 헤더 */}
			<Header>
				<LogoView>
					<ReactMiniLogo />
				</LogoView>
				<Title>Hello React Native !</Title>
				<SubTitle>{SubTitleText}</SubTitle>
				{/* 버튼 세로 정렬 */}
				<Row>
					<LearnBtn>
						<LearnText>Learn Basics {'>'}</LearnText>
					</LearnBtn>
					<ViewOriBtn>
						<ViewOriText>View Original {'>'}</ViewOriText>
					</ViewOriBtn>
				</Row>
			</Header>
			{/* 아래내용 */}
			<ContentContatiner>
				<ContentBlock title="React Native Docs" subtitle="이 문서에는 리액트 네이티브의 기본이 되는 내용을 다루고 있으며 props와 state에 대해 학습할 수 있습니다." />
				<ContentBlock title="Components" subtitle="이 문서에는 리액트네이티브의 기본 단위인 ' 컴포넌트'에 대한 내용을 다루고 있으며
리액트의 장점인 '컴포넌트 재사용'에 대해 학습할 수 있습니다."/>
				<ContentBlock title="API" subtitle="이 문서에는 리액트네이티브를 활용하는 법에 대해 배웁니다." />
				<ContentBlock title="Example" subtitle="이 문서에는 리액트네이티브의 예제를 보여줍니다. 핸드폰에서 바로 실행해 볼 수 있습니다." />
			</ContentContatiner>
			<QnAView>
				<QnAText>
					개선 사항이 있나요?
				</QnAText>
				<QnASubText>
					그렇다면 레포지토리에 이슈를 남겨주세요!
					의견을 빠르게 반영하도록 하겠습니다. 감사합니다. :)
				</QnASubText>
				<QnABtn onPress={() => Linking.openURL('https://github.com/React-Native-docs/React-Native-docs')}><GitText>Github {'>'}</GitText></QnABtn>
			</QnAView>
		</ScrollV>
	)
}
const QnAView = styled.View`
	margin: 40px 30px 0 30px;
`
const QnAText = styled.Text`
	font-size: 18px;
	font-weight:bold;
	margin-bottom:13px;
`
const QnASubText = styled.Text`
	font-size: 14px;
	margin-bottom:10px;
`
const GitText = styled.Text`
	font-size: 14px;
	font-weight:bold;
	margin-bottom:50px;
`
const QnABtn = styled.TouchableOpacity`
`
const ContentBlock = (props) =>
	<Content>
		<ContentTitle>{props.title}</ContentTitle>
		<ContentSub>
			{props.subtitle}
		</ContentSub>
	</Content>


const ContentTitle = styled.Text`
	font-weight:bold;
	margin:10px 20px 10px 20px;
`
const ContentSub = styled.Text`
	margin:0 20px 20px 20px;
	font-size: 14px
	`
const ContentContatiner = styled.View`
	margin-top:30px;
	align-items:center;
`
const ScrollV = styled.ScrollView`
flex: 1;
background-color: white;
`
const Content = styled.TouchableOpacity`
	width: 85 %;
	background-color: #F2F2F2;
	border-radius:10px;
	justify-content:center;
	margin-bottom:20px;
`
const LogoView = styled.View`
	position: absolute;
	top: 23px;
	right: 24px;
`
const Row = styled.View`
	flex-direction:row;
`
const Header = styled.View`
	height: 254px;
	background-color: #272C34;
	padding: 30px 30px 0 30px;
`
const Title = styled.Text`
	color:#50DEFF;
	font-weight:bold;
	font-size:20px;
`
const SubTitle = styled.Text`
	color:white;
	margin-top:15px;
	line-height: 21px;
`

const ViewOriBtn = styled.TouchableOpacity`
	padding:10px;
	margin:5px;
	margin-top:32px;   
`
const ViewOriText = styled.Text`
	color:#50DEFF;
`
const LearnBtn = styled.TouchableOpacity`
	
`
const LearnText = styled.Text`
	color:#272C34;
	background-color:#50DEFF;
	padding:10px;
	margin:5px;
	margin-top:32px;   
	border-radius:10px;
`
const SubTitleText =
	`React Native 공식 문서를 한글 버전으로 번역했습니다.
	앱을 통해 한글 번역 내용과 예제를 직접 실행해보며 배울 수 있습니다. 즐코 !`