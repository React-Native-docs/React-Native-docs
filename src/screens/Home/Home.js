import React from "react";
import { Alert, Linking } from "react-native";
import Header from "~/components/Header/Header";
import {
  Container,
  MainButton,
  LearnButton,
  OriginalButton,
  MainBanner,
  ContentView,
  GithubView,
  GithubButton,
  BlockView,
  LogoText,
} from "./Home.styles";
import ReactMiniLogoIcon from "~/assets/icons/react-mini-logo.svg";
import MenuIcon from "~/assets/icons/menu-icon.svg";
import SearchIcon from "~/assets/icons/search-icon.svg";
import SearchInput from "../../components/Header/SearchInput";
import SearchArea from "../../components/Header/SearchArea";
import CancelIcon from "~/assets/icons/cancel-icon.svg";

const Home = ({ navigation, route }) => {
  const [search, setSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  const ContentBlock = (props) => {
    return (
      <BlockView
        onPress={() => {
          if (props.isUnprepared) {
            Alert.alert("준비중입니다!");
          } else {
            navigation.navigate("Detail", {
              pageTitle: props.pageTitle,
              pageName: props.pageName,
            });
          }
        }}
      >
        <BlockView.Left>
          <BlockView.Title>{props.title}</BlockView.Title>
          <BlockView.Text>{props.subtitle}</BlockView.Text>
        </BlockView.Left>
        <BlockView.Right>
          <BlockView.RightText>{">"}</BlockView.RightText>
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
          search ? (
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSearchResult={setSearchResult}
            />
          ) : (
            <Header.Button
              onPress={() =>
                navigation.navigate("Home", {
                  params: {
                    pageTitle: null,
                    pageName: null,
                  },
                })
              }
            >
              <LogoText>RNDOC</LogoText>
            </Header.Button>
          )
        }
        right={
          search ? (
            <Header.Button onPress={() => setSearch(false)}>
              <CancelIcon width={20} height={20} />
            </Header.Button>
          ) : (
            <Header.Button onPress={() => setSearch(true)}>
              <SearchIcon />
            </Header.Button>
          )
        }
      />
      <Container>
        {search ? (
          <SearchArea navigation={navigation} searchResult={searchResult} />
        ) : (
          <>
            <MainBanner>
              <MainBanner.Logo>
                <ReactMiniLogoIcon />
              </MainBanner.Logo>
              <MainBanner.Title>Hello React Native !</MainBanner.Title>
              <MainBanner.SubTitle>
                React Native 공식 문서를 한글 버전으로 번역했습니다.{"\n"}
                앱을 통해 한글 번역 내용과 예제를 직접 실행해보며{"\n"}
                배울 수 있습니다. 즐코 !
              </MainBanner.SubTitle>
              {/* 버튼 세로 정렬 */}
              <MainButton>
                <LearnButton
                  onPress={() =>
                    navigation.navigate("Detail", {
                      pageTitle: "LEARNBASIC",
                      pageName: "LearnBasic",
                    })
                  }
                >
                  <LearnButton.Text>Learn Basics {">"}</LearnButton.Text>
                </LearnButton>
                <OriginalButton
                  onPress={() =>
                    Linking.openURL(
                      "https://reactnative.dev/docs/getting-started"
                    )
                  }
                >
                  <OriginalButton.Text>View Original {">"}</OriginalButton.Text>
                </OriginalButton>
              </MainButton>
            </MainBanner>
            {/* 아래내용 */}
            <ContentView>
              <ContentBlock
                title="React Native Docs"
                subtitle="이 문서에는 리액트 네이티브의 기본이 되는 내용을 다루고 있으며 props와 state에 대해 학습할 수 있습니다."
                pageTitle="RNDOCS"
                pageName="TheBasics"
                isUnprepared={false}
              />
              <ContentBlock
                title="Components"
                subtitle="이 문서에는 리액트네이티브의 기본 단위인 ' 컴포넌트'에 대한 내용을 다루고 있으며 리액트의 장점인 '컴포넌트 재사용'에 대해 학습할 수 있습니다."
                pageTitle="COMPONENTS"
                pageName="PageActivityIndicator"
                isUnprepared={true}
              />
              <ContentBlock
                title="API"
                subtitle="이 문서에는 리액트네이티브를 활용하는 법에 대해 배웁니다."
                pageTitle="RNDOCS"
                pageName="TheBasics"
                isUnprepared={true}
              />
            </ContentView>
            <GithubView>
              <GithubView.Text>개선 사항이 있나요?</GithubView.Text>
              <GithubView.SubText>
                그렇다면 레포지토리에 이슈를 남겨주세요! 의견을 빠르게
                반영하도록 하겠습니다. 감사합니다. :)
              </GithubView.SubText>
              <GithubButton
                onPress={() =>
                  Linking.openURL(
                    "https://github.com/React-Native-docs/React-Native-docs"
                  )
                }
              >
                <GithubButton.Text>Github {">"}</GithubButton.Text>
              </GithubButton>
            </GithubView>
          </>
        )}
        {/* 헤더 */}
      </Container>
    </>
  );
};

export default Home;
