import * as React from 'react';
import { CommonActions, DrawerActions, useLinkBuilder } from '@react-navigation/native';
import DrawerItem from './DrawerItem';

/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList({
  state,
  navigation,
  descriptors,
  activeTintColor,
  inactiveTintColor,
  activeBackgroundColor,
  inactiveBackgroundColor,
  itemStyle,
  labelStyle
}) {
  const buildLink = useLinkBuilder();
  return state.routes.map((route, i) => {
    const focused = i === state.index;
    const {
      title,
      drawerLabel,
      drawerIcon
    } = descriptors[route.key].options;
    return /*#__PURE__*/React.createElement(DrawerItem, {
      key: route.key,
      label: drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name,
      icon: drawerIcon,
      focused: focused,
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor,
      activeBackgroundColor: activeBackgroundColor,
      inactiveBackgroundColor: inactiveBackgroundColor,
      labelStyle: labelStyle,
      style: itemStyle,
      to: buildLink(route.name, route.params),
      onPress: () => {
        navigation.dispatch({ ...(focused ? DrawerActions.closeDrawer() : CommonActions.navigate(route.name)),
          target: state.key
        });
      }
    });
  });
}
//# sourceMappingURL=DrawerItemList.js.map