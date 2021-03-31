import { Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #ffffff;
  margin-top: ${Platform.OS === 'ios' ? `53px` : `${StatusBar.currentHeight + 53}px`};
  z-index: 1;
`;

export const MainBanner = styled.View`
	width: 100%;
	height: 254px;
	background-color: #272C34;
	padding: 30px 30px 0 30px;
`;

MainBanner.Logo = styled.View`
	position: absolute;
	top: 23px;
	right: 24px;
`;

MainBanner.Title = styled.Text`
	color:#50DEFF;
	font-weight:bold;
	font-size:20px;
`;

MainBanner.SubTitle = styled.Text`
	color:white;
	margin-top:15px;
	line-height: 21px;
`;

export const MainButton = styled.View`
	flex-direction:row;
`;

export const LearnButton = styled.TouchableOpacity`

`;

LearnButton.Text = styled.Text`
color:#272C34;
background-color:#50DEFF;
padding:10px;
margin:5px;
margin-top:32px;   
border-radius:10px;
`;

export const OriginalButton = styled.TouchableOpacity`
	padding:10px;
	margin:5px;
	margin-top:32px;   
`;

OriginalButton.Text = styled.Text`
color:#50DEFF;
`;

export const ContentView = styled.View`
	margin-top:30px;
	align-items:center;
`;

export const GithubView = styled.View`
	margin: 40px 30px 0 30px;
`;

GithubView.Text = styled.Text`
	font-size: 18px;
	font-weight:bold;
	margin-bottom:13px;
`;

GithubView.SubText = styled.Text`
	font-size: 14px;
	margin-bottom:10px;
`;

export const GithubButton = styled.TouchableOpacity`
`;

GithubButton.Text = styled.Text`
	font-size: 14px;
	font-weight:bold;
	margin-bottom:50px;
`;

export const BlockView = styled.TouchableOpacity`
	width: 85%;
	background-color: #F2F2F2;
	border-radius:10px;
	justify-content:center;
	margin-bottom:20px;
`;

BlockView.Title = styled.Text`
	font-weight:bold;
	margin:10px 20px 10px 20px;
`;

BlockView.Text = styled.Text`
	margin:0 20px 20px 20px;
	font-size: 14px;
`;
