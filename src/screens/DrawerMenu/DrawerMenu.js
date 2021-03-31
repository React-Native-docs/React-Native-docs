import React from 'react';
import { Text } from 'react-native';
import { Container, MenuView } from './DrawerMenu.styles';
import Header from '~/components/Header/Header';
import ReactLogo from '~/assets/icons/react-logo.svg';

import Connectivity from '~/docs/Basic/Connectivity';
import Design from '~/docs/Basic/Design';
import GuidesAndroid from '~/docs/Basic/GuidesAndroid';
import GuidesiOS from '~/docs/Basic/GuidesiOS';
import Inclustion from '~/docs/Basic/Inclustion';
import Interacton from '~/docs/Basic/Interacton';
import JavaScriptRuntime from '~/docs/Basic/JavaScriptRuntime';
import NativeComponents from '~/docs/Basic/NativeComponents';
import NativeModules from '~/docs/Basic/NativeModules';
import Performance from '~/docs/Basic/Performance';
import Workflow from '~/docs/Basic/Workflow';
import TheBasics from '~/docs/Basic/TheBasics';
import EnvironmentSetup from '~/docs/Basic/EnvironmentSetup';

// import PageActivityIndicator from "~/docs/CoreComponents/ActivityIndicator";
import PageButton from "~/docs/CoreComponents/Button";
import PageCoreComponentsAndAPIs from "~/docs/CoreComponents/CoreComponentsAndAPIs";
import PageFlatList from "~/docs/CoreComponents/FlatList";
import PageImage from "~/docs/CoreComponents/Image";
import PageImageBackground from "~/docs/CoreComponents/ImageBackground";
import PageKeyboardAvoidingView from "~/docs/CoreComponents/KeyboardAvoidingView";
import PageModal from "~/docs/CoreComponents/Modal";
import PagePressable from "~/docs/CoreComponents/Pressable";
import PageRefreshControl from "~/docs/CoreComponents/RefreshControl";
import PageScrollView from "~/docs/CoreComponents/ScrollView";
import PageSectionList from "~/docs/CoreComponents/SectionList";
import PageStatusBar from "~/docs/CoreComponents/StatusBar";
import PageSwitch from "~/docs/CoreComponents/Switch";
import PageText from "~/docs/CoreComponents/Text";
import PageTextInput from "~/docs/CoreComponents/TextInput";
import PageTouchableHighlight from "~/docs/CoreComponents/TouchableHighlight";
import PageTouchableOpacity from "~/docs/CoreComponents/TouchableOpacity";
import PageTouchableWithoutFeedback from "~/docs/CoreComponents/TouchableWithoutFeedback";
import PageView from "~/docs/CoreComponents/View";
import PageVirtualizedList from "~/docs/CoreComponents/VirtualizedList";

const DrawerMenu = ({ navigation }) => {
  const ReactNativeDocsList = [
    TheBasics,
    EnvironmentSetup,
    Workflow,
    Design,
    Interacton,
    Inclustion,
    Performance,
    JavaScriptRuntime,
    Connectivity,
    NativeModules,
    NativeComponents,
    GuidesAndroid,
    GuidesiOS,
  ];
  const ComponentsList = [
    // PageActivityIndicator,
    PageButton,
    PageCoreComponentsAndAPIs,
    PageFlatList,
    PageImage,
    PageImageBackground,
    PageKeyboardAvoidingView,
    PageModal,
    PagePressable,
    PageRefreshControl,
    PageScrollView,
    PageSectionList,
    PageStatusBar,
    PageSwitch,
    PageText,
    PageTextInput,
    PageTouchableHighlight,
    PageTouchableOpacity,
    PageTouchableWithoutFeedback,
    PageView,
    PageVirtualizedList,
  ];

  return (
    <>
      <Header
        left={
          <MenuView>
            <ReactLogo />
            <MenuView.Text>React Native</MenuView.Text>
          </MenuView>
        }
      />
      <Container>
        {ReactNativeDocsList.map((data) => (
          <Text>{data.name}</Text>
        ))}
        {ComponentsList.map((data) => (
          <Text>{data.name}</Text>
        ))}
      </Container>
    </>
  );
};

export default DrawerMenu;
