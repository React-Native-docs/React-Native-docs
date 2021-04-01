import React from 'react';
import { Text } from 'react-native';
import { Container, MenuView } from './DrawerMenu.styles';
import Header from '~/components/Header/Header';
import PAGE from '~/constants/page';
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
        {Object.keys(PAGE).map((name) => (
          <Text key={name}>{name}</Text>
        ))}
      </Container>
    </>
  );
};

export default DrawerMenu;
