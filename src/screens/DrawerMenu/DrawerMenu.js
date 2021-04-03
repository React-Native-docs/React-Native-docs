import React, { useState, useCallback } from 'react';
import { Container, MenuView } from './DrawerMenu.styles';
import Header from '~/components/Header/Header';
import Dropdown from '~/components/Dropdown/Dropdown';
import ReactLogo from '~/assets/icons/react-logo.svg';

const DrawerMenu = ({ navigation }) => {
  const [visibleBox, setVisibleBox] = useState(null);
  const [textFocus, setTextFocus] = useState(null);
  
  const handleToggleShow = useCallback((page) => {
    setVisibleBox(visibleBox === page? null : page);
  }, [visibleBox]);

  const handlePageButtonClick = useCallback((name) => {
    setTextFocus(name);
  }, [textFocus]);

  return (
    <>
      <Header
        left={
          <MenuView>
            <ReactLogo />
            <MenuView.Text>React Native</MenuView.Text>
          </MenuView>
        }
      />
      <Container>
        <Dropdown
          title="React Native Docs"
          pageTitle="RNDOCS"
          show={visibleBox}
          textFocus={textFocus}
          onToggleShow={handleToggleShow}
          onPageButtonClick={handlePageButtonClick}
          navigation={navigation}
        />
        <Dropdown
          title="Components"
          pageTitle="COMPONENTS"
          show={visibleBox}
          textFocus={textFocus}
          onToggleShow={handleToggleShow}
          onPageButtonClick={handlePageButtonClick}
          navigation={navigation}
        />
        <Dropdown
          title="API"
          pageTitle="APIS"
          show={visibleBox}
          textFocus={textFocus}
          onToggleShow={handleToggleShow}
          onPageButtonClick={handlePageButtonClick}
          navigation={navigation}
        />
        <Dropdown
          title="Example"
          pageTitle="EXAMPLES"
          show={visibleBox}
          textFocus={textFocus}
          onToggleShow={handleToggleShow}
          onPageButtonClick={handlePageButtonClick}
          navigation={navigation}
        />
      </Container>
    </>
  );
};

export default DrawerMenu;
