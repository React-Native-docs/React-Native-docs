import React from 'react';
import { Text } from 'react-native';
import { Container, MenuView } from './DrawerMenu.styles';
import Header from '~/components/Header/Header';
import Dropdown from '~/components/Dropdown/Dropdown';
import ReactLogo from '~/assets/icons/react-logo.svg';

const DrawerMenu = () => {
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
        <Dropdown title="React Native Docs" pageTitle="RNDOCS" />
        <Dropdown title="Components" pageTitle="COMPONENTS" />
        <Dropdown title="API" pageTitle="RNDOCS" />
        <Dropdown title="Example" pageTitle="RNDOCS" />
      </Container>
    </>
  );
};

export default DrawerMenu;
