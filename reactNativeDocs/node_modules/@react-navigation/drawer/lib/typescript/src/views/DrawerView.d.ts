/// <reference types="react" />
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import type { DrawerDescriptorMap, DrawerNavigationConfig, DrawerNavigationHelpers } from '../types';
declare type Props = DrawerNavigationConfig & {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
};
/**
 * Component that renders the drawer.
 */
export default function DrawerView({ state, navigation, descriptors, lazy, drawerContent, drawerPosition, keyboardDismissMode, overlayColor, drawerType, hideStatusBar, statusBarAnimation, drawerContentOptions, drawerStyle, edgeWidth, gestureHandlerProps, minSwipeDistance, sceneContainerStyle, detachInactiveScreens, }: Props): JSX.Element;
export {};
