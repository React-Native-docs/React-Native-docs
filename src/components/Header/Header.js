import React from 'react';
import { View } from 'react-native';
import { Container, IconButton } from './Header.styles';

const HeaderButton = (props) => <IconButton {...props}>{props.children}</IconButton>;

const Header = (props) => {
  const { left, right, center } = props;

  return (
    <Container>
      <Container.Box>
        <View>{left}</View>
        <View>{center}</View>
        <View>{right}</View>
      </Container.Box>
    </Container>
  );
};

Header.Button = HeaderButton;

export default Header;
