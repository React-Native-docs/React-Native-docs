import React from 'react';
import Header from '~/components/Header/Header';
import PAGE from '~/constants/page';
import { Container, LogoText } from './Detail.styles';
import MenuIcon from '~/assets/icons/menu-icon.svg';
import SearchIcon from '~/assets/icons/search-icon.svg';
import SearchInput from '../../components/Header/SearchInput';
import SearchArea from '../../components/Header/SearchArea';
import CancelIcon from '~/assets/icons/cancel-icon.svg';

const Detail = ({ navigation, route }, i) => {
  const [pageTitle, setPageTitle] = React.useState(route.params.pageTitle);
  const [pageName, setPageName] = React.useState(route.params.pageName);
  const [search, setSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  // minsekim
  // useEffect 없이 기본적으로 작동은하나, 검색 결과에서 이동할때는 필요함(detail에서 detail로 넘어가기때문.)
  React.useEffect(() => {
    setPageTitle(route.params.pageTitle)
    setPageName(route.params.pageName)
    setSearch(false)
    setSearchValue('');
    setSearchResult([]);
  }, [route.params.pageTitle, route.params.pageName]);

  const aRef = React.useRef();
	React.useEffect(() => { 
		aRef.current.scrollTo({ x: 0, y: 0, animated: true })
  }, [route.params.pageTitle, route.params.pageName]);

	return (
		<>
      <Header
        left={
          <Header.Button onPress={navigation.openDrawer}>
            <MenuIcon />
          </Header.Button>
        }
        center={
          search ?
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSearchResult={setSearchResult}
            /> : <Header.Button onPress={() => navigation.navigate('Home')}>
              <LogoText>RNDOC</LogoText>
            </Header.Button>
        }
        right={
          search
            ?
            <Header.Button onPress={() => setSearch(false)}>
              <CancelIcon width={20} height={20} />
            </Header.Button>
            :
            <Header.Button onPress={() => setSearch(true)}>
              <SearchIcon />
            </Header.Button>
        }
      />
      <Container ref={aRef}>
        {
          search ? 
            <SearchArea navigation={navigation} searchResult={searchResult} />
            :
            (!!pageTitle && !!pageName ) ? PAGE[pageTitle][pageName] : <></> //문서 Scroll View 영역
        }

      </Container>
    </>
	);
};

export default Detail;
