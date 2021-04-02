function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import DrawerPositionContext from '../utils/DrawerPositionContext';
export default function DrawerContentScrollView({
  contentContainerStyle,
  style,
  children,
  ...rest
}) {
  const drawerPosition = React.useContext(DrawerPositionContext);
  const insets = useSafeArea();
  return /*#__PURE__*/React.createElement(ScrollView, _extends({}, rest, {
    contentContainerStyle: [{
      paddingTop: insets.top + 4,
      paddingLeft: drawerPosition === 'left' ? insets.left : 0,
      paddingRight: drawerPosition === 'right' ? insets.right : 0
    }, contentContainerStyle],
    style: [styles.container, style]
  }), children);
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerContentScrollView.js.map