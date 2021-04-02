import React from 'react';
import { Container, MenuView } from './DrawerMenu.styles';
import Header from '~/components/Header/Header';
import Dropdown from '~/components/Dropdown/Dropdown';
import ReactLogo from '~/assets/icons/react-logo.svg';
import { Button } from 'react-native';
const DrawerMenu = ({ navigation }) => {
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
      {/* <Button title="WWW" onPress={
        () => navigation.navigate("Detail", { pageTitle: "RNDOCS", pageName: "TheBasics" })}></Button> */}
      <Container>
        <Dropdown title="React Native Docs" pageTitle="RNDOCS" navigation={navigation}/>
        <Dropdown title="Components" pageTitle="COMPONENTS" navigation={navigation} />
        <Dropdown title="API" pageTitle="RNDOCS" navigation={navigation} />
        <Dropdown title="Example" pageTitle="RNDOCS" navigation={navigation}/>
      </Container>
    </>
  );
};

export default DrawerMenu;
