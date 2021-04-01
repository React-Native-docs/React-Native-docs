import React from 'react';
import { Linking } from 'react-native';
import Header from '~/components/Header/Header';
import { Container, MainButton, LearnButton, OriginalButton, MainBanner, ContentView, GithubView, GithubButton, BlockView, LogoText } from './Home.styles';
import ReactMiniLogoIcon from '~/assets/icons/react-mini-logo.svg';
import MenuIcon from '~/assets/icons/menu-icon.svg';
import SearchIcon from '~/assets/icons/search-icon.svg';

const Home = ({ navigation }) => {
	const ContentBlock = (props) => {
		return(
			<BlockView onPress={() => navigation.navigate('Detail', { page: props.pageName })}>
        <BlockView.Left>
          <BlockView.Title>{props.title}</BlockView.Title>
          <BlockView.Text>
            {props.subtitle}
          </BlockView.Text>
        </BlockView.Left>
        <BlockView.Right>
          <BlockView.RightText>
            {'>'}
          </BlockView.RightText>
        </BlockView.Right>
			</BlockView>
		);
	};

	return (
		<>
      <Header
        left={
          <Header.Button onPress={navigation.openDrawer}>
            <MenuIcon />
          </Header.Button>
        }
        center={
          <Header.Button onPress={() => navigation.navigate('Home')}>
            <LogoText>RNDOC</LogoText>
          </Header.Button>
        }
        right={
          <Header.Button onPress={() => alert('This is a search button!')}>
            <SearchIcon />
          </Header.Button>
        }
      />
      <Container>
        {/* 헤더 */}
        <MainBanner>
          <MainBanner.Logo>
            <ReactMiniLogoIcon />
          </MainBanner.Logo>
          <MainBanner.Title>Hello React Native !</MainBanner.Title>
          <MainBanner.SubTitle>
            React Native 공식 문서를 한글 버전으로 번역했습니다.{'\n'}
            앱을 통해 한글 번역 내용과 예제를 직접 실행해보며{'\n'}
            배울 수 있습니다. 즐코 !
          </MainBanner.SubTitle>
          {/* 버튼 세로 정렬 */}
          <MainButton>
            <LearnButton onPress={() => navigation.navigate('Detail', { page: "TheBasics" })}>
              <LearnButton.Text>Learn Basics {'>'}</LearnButton.Text>
            </LearnButton>
            <OriginalButton onPress={() => Linking.openURL('https://reactnative.dev/docs/getting-started')}>
              <OriginalButton.Text>View Original {'>'}</OriginalButton.Text>
            </OriginalButton>
          </MainButton>
        </MainBanner>
        {/* 아래내용 */}
        <ContentView>
          <ContentBlock 
            title="React Native Docs"
            subtitle="이 문서에는 리액트 네이티브의 기본이 되는 내용을 다루고 있으며 props와 state에 대해 학습할 수 있습니다."
            pageName="TheBasics"
          />
          <ContentBlock
            title="Components"
            subtitle="이 문서에는 리액트네이티브의 기본 단위인 ' 컴포넌트'에 대한 내용을 다루고 있으며 리액트의 장점인 '컴포넌트 재사용'에 대해 학습할 수 있습니다."
            pageName="PageActivityIndicator"
          />
          <ContentBlock
            title="API"
            subtitle="이 문서에는 리액트네이티브를 활용하는 법에 대해 배웁니다."
            pageName="TheBasics"
          />
          <ContentBlock
            title="Example"
            subtitle="이 문서에는 리액트네이티브의 예제를 보여줍니다. 핸드폰에서 바로 실행해 볼 수 있습니다."
            pageName="TheBasics"
          />
        </ContentView>
        <GithubView>
          <GithubView.Text>
            개선 사항이 있나요?
          </GithubView.Text>
          <GithubView.SubText>
            그렇다면 레포지토리에 이슈를 남겨주세요!
            의견을 빠르게 반영하도록 하겠습니다. 감사합니다. :)
          </GithubView.SubText>
          <GithubButton onPress={() => Linking.openURL('https://github.com/React-Native-docs/React-Native-docs')}><GithubButton.Text>Github {'>'}</GithubButton.Text></GithubButton>
        </GithubView>
      </Container>
    </>
	);
};

export default Home;
