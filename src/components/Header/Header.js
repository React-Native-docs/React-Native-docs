import React from 'react';
import { View, Text } from 'react-native';
import { Container, IconButton, LogoText } from './Header.styles';

const HeaderButton = (props) => <IconButton {...props}>{props.children}</IconButton>;

const Header = (props) => {
  const { left, right } = props;

  return (
    <Container>
      <Container.Box>
        <View>{left}</View>
        <View><LogoText>RNDOC</LogoText></View>
        <View>{right}</View>
      </Container.Box>
    </Container>
  );
};

Header.Button = HeaderButton;

export default Header;
