function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { createNavigatorFactory, useNavigationBuilder, DrawerRouter } from '@react-navigation/native';
import DrawerView from '../views/DrawerView';

function DrawerNavigator({
  initialRouteName,
  openByDefault,
  backBehavior,
  children,
  screenOptions,
  ...rest
}) {
  const {
    state,
    descriptors,
    navigation
  } = useNavigationBuilder(DrawerRouter, {
    initialRouteName,
    openByDefault,
    backBehavior,
    children,
    screenOptions
  });
  return /*#__PURE__*/React.createElement(DrawerView, _extends({}, rest, {
    state: state,
    descriptors: descriptors,
    navigation: navigation
  }));
}

export default createNavigatorFactory(DrawerNavigator);
//# sourceMappingURL=createDrawerNavigator.js.map