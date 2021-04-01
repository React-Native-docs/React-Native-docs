import { Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #ffffff;
  margin-top: ${Platform.OS === 'ios' ? `66px` : `${StatusBar.currentHeight + 66}px`};
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
	color: #ffffff;
	line-height: 21px;
	margin-top: 15px;
  margin-bottom: 35px;
`;

export const MainButton = styled.View`
	flex-direction:row;
`;

export const LearnButton = styled.TouchableOpacity`

`;

LearnButton.Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #272C34;
  background-color: #50DEFF;
  padding: 10px;
  margin-right: 15px;
  border-radius: 10px;
`;

export const OriginalButton = styled.TouchableOpacity`
	padding: 10px;
`;

OriginalButton.Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #50DEFF;
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
	font-weight: bold;
	margin-bottom: 15px;
`;

GithubView.SubText = styled.Text`
	font-size: 14px;
  line-height: 21px;
	margin-bottom: 20px;
`;

export const GithubButton = styled.TouchableOpacity`
`;

GithubButton.Text = styled.Text`
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 60px;
`;

export const BlockView = styled.TouchableOpacity`
	width: 90%;
  flex-direction: row;
	justify-content: space-between;
	background-color: #F2F2F2;
	border-radius:10px;
	margin-bottom:20px;
  padding: 22px; 
`;

BlockView.Left = styled.View`
  width: 90%;
`;

BlockView.Right = styled.View`
  width: 10%;
  text-align: right;
  align-items: flex-end;
`;

BlockView.RightText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

BlockView.Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

BlockView.Text = styled.Text`
	font-size: 14px;
  line-height: 21px;
`;

export const LogoText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;
