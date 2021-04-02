"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerItemList;

var React = _interopRequireWildcard(require("react"));

var _native = require("@react-navigation/native");

var _DrawerItem = _interopRequireDefault(require("./DrawerItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component that renders the navigation list in the drawer.
 */
function DrawerItemList({
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
  const buildLink = (0, _native.useLinkBuilder)();
  return state.routes.map((route, i) => {
    const focused = i === state.index;
    const {
      title,
      drawerLabel,
      drawerIcon
    } = descriptors[route.key].options;
    return /*#__PURE__*/React.createElement(_DrawerItem.default, {
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
        navigation.dispatch({ ...(focused ? _native.DrawerActions.closeDrawer() : _native.CommonActions.navigate(route.name)),
          target: state.key
        });
      }
    });
  });
}
//# sourceMappingURL=DrawerItemList.js.map