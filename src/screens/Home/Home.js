import React from 'react';
import { Linking } from 'react-native';
import { QnAView, QnAText, QnASubText, GitText, QnABtn, ContentTitle, ContentSub, ContentContatiner, ScrollV, Content, LogoView, Row, Header, Title, SubTitle, ViewOriBtn, ViewOriText, LearnBtn, LearnText } from './Home.styles';
// import ReactNativeLogo from '~/assets/react-native-logo.svg';

const Home = () => {
	const ContentBlock = (props) => {
		return(
			<Content>
				<ContentTitle>{props.title}</ContentTitle>
				<ContentSub>
					{props.subtitle}
				</ContentSub>
			</Content>
		);
	};

	return (
		<ScrollV>
			{/* 헤더 */}
			<Header>
				<LogoView>
					{/* <ReactNativeLogo /> */}
				</LogoView>
				<Title>Hello React Native !</Title>
				<SubTitle>
					React Native 공식 문서를 한글 버전으로 번역했습니다.{'\n'}
					앱을 통해 한글 번역 내용과 예제를 직접 실행해보며 배울 수 있습니다. 즐코 !
				</SubTitle>
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
				<ContentBlock 
					title="React Native Docs"
					subtitle="이 문서에는 리액트 네이티브의 기본이 되는 내용을 다루고 있으며 props와 state에 대해 학습할 수 있습니다."
				/>
				<ContentBlock
					title="Components"
					subtitle="이 문서에는 리액트네이티브의 기본 단위인 ' 컴포넌트'에 대한 내용을 다루고 있으며 리액트의 장점인 '컴포넌트 재사용'에 대해 학습할 수 있습니다."
				/>
				<ContentBlock
					title="API"
					subtitle="이 문서에는 리액트네이티브를 활용하는 법에 대해 배웁니다."
				/>
				<ContentBlock
					title="Example"
					subtitle="이 문서에는 리액트네이티브의 예제를 보여줍니다. 핸드폰에서 바로 실행해 볼 수 있습니다."
				/>
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
	);
};

export default Home;
