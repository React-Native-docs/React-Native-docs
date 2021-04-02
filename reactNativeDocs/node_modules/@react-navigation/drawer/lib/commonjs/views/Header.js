"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderSegment;
exports.getDefaultHeaderHeight = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _native = require("@react-navigation/native");

var _TouchableItem = _interopRequireDefault(require("./TouchableItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getDefaultHeaderHeight = (layout, statusBarHeight) => {
  const isLandscape = layout.width > layout.height;
  let headerHeight;

  if (_reactNative.Platform.OS === 'ios') {
    if (isLandscape && !_reactNative.Platform.isPad) {
      headerHeight = 32;
    } else {
      headerHeight = 44;
    }
  } else if (_reactNative.Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }

  return headerHeight + statusBarHeight;
};

exports.getDefaultHeaderHeight = getDefaultHeaderHeight;

function HeaderSegment({
  scene,
  layout
}) {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    colors
  } = (0, _native.useTheme)();
  const {
    title,
    headerTitle,
    headerTitleAlign = _reactNative.Platform.select({
      ios: 'center',
      default: 'left'
    }),
    headerLeft,
    headerLeftAccessibilityLabel,
    headerRight,
    headerTitleAllowFontScaling,
    headerTitleStyle,
    headerTintColor,
    headerPressColorAndroid,
    headerStyle,
    headerStatusBarHeight = insets.top
  } = scene.descriptor.options;
  const currentTitle = typeof headerTitle !== 'function' && headerTitle !== undefined ? headerTitle : title !== undefined ? title : scene.route.name;
  const defaultHeight = getDefaultHeaderHeight(layout, headerStatusBarHeight);
  const leftButton = headerLeft ? headerLeft({
    tintColor: headerTintColor
  }) : /*#__PURE__*/React.createElement(_TouchableItem.default, {
    accessible: true,
    accessibilityRole: "button",
    accessibilityComponentType: "button",
    accessibilityLabel: headerLeftAccessibilityLabel,
    accessibilityTraits: "button",
    delayPressIn: 0,
    onPress: () => scene.descriptor.navigation.dispatch(_native.DrawerActions.toggleDrawer()),
    style: styles.touchable,
    pressColor: headerPressColorAndroid,
    hitSlop: _reactNative.Platform.select({
      ios: undefined,
      default: {
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
      }
    }),
    borderless: true
  }, /*#__PURE__*/React.createElement(_reactNative.Image, {
    style: [styles.icon, headerTintColor ? {
      tintColor: headerTintColor
    } : null],
    source: require('./assets/toggle-drawer-icon.png'),
    fadeDuration: 0
  }));
  const rightButton = headerRight ? headerRight({
    tintColor: headerTintColor
  }) : null;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: [{
      height: defaultHeight,
      backgroundColor: colors.card,
      borderBottomColor: colors.border,
      shadowColor: colors.border
    }, styles.container, headerStyle]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "none",
    style: {
      height: headerStatusBarHeight
    }
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: styles.content
  }, leftButton ? /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: [styles.left, {
      left: insets.left
    }]
  }, leftButton) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: [headerTitleAlign === 'left' ? {
      position: 'absolute',
      left: (leftButton ? 72 : 16) + insets.left,
      right: (rightButton ? 72 : 16) + insets.right
    } : {
      marginHorizontal: (leftButton ? 32 : 16) + Math.max(insets.left, insets.right)
    }]
  }, typeof headerTitle === 'function' ? headerTitle({
    children: currentTitle,
    allowFontScaling: headerTitleAllowFontScaling,
    tintColor: headerTintColor,
    style: headerTitleStyle
  }) : /*#__PURE__*/React.createElement(_reactNative.Text, {
    accessibilityRole: "header",
    "aria-level": "1",
    numberOfLines: 1,
    allowFontScaling: headerTitleAllowFontScaling,
    style: [styles.title, {
      color: headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.text
    }, styles.title, headerTitleStyle]
  }, currentTitle)), rightButton ? /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: [styles.right, {
      right: insets.right
    }]
  }, rightButton) : null));
}

const styles = _reactNative.StyleSheet.create({
  container: { ..._reactNative.Platform.select({
      android: {
        elevation: 4
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: _reactNative.StyleSheet.hairlineWidth
        }
      },
      default: {
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
      }
    }),
    zIndex: 1
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: _reactNative.Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600'
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal'
    },
    default: {
      fontSize: 18,
      fontWeight: '500'
    }
  }),
  icon: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain'
  },
  touchable: {
    marginHorizontal: 11
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
//# sourceMappingURL=Header.js.map