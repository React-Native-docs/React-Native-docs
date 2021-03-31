import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '~/navigations/DrawerNavigator';

const Navigator = () => {
  return <NavigationContainer><DrawerNavigator /></NavigationContainer>;
};

export default Navigator;
