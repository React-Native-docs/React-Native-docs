import React from 'react';
import Header from '~/components/Header/Header';
import PAGE from '~/constants/page';
import { Container, LogoText } from './Detail.styles';
import MenuIcon from '~/assets/icons/menu-icon.svg';
import SearchIcon from '~/assets/icons/search-icon.svg';

const Detail = ({ navigation, route }) => {
  const { pageTitle, pageName } = route.params;

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
          {/* 문서 Scroll View 영역 */}
          {PAGE[pageTitle][pageName]}
      </Container>
    </>
	);
};

export default Detail;
