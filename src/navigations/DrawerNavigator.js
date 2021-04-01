import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '~/screens/Home/Home';
import Detail from '~/screens/Detail/Detail';
import DrawerMenu from '~/screens/DrawerMenu/DrawerMenu';
import { css } from '@emotion/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={DrawerMenu}
      drawerStyle={css`
        width: 80%;
      `}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Detail"
        component={Detail}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

