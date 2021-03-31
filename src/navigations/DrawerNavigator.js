import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '~/screens/Home/Home';
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
// import Icon from 'react-native-vector-icons/dist/Feather';
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
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
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={DrawerscreenOptions}
        drawerContentOptions={drawerContentOptions}
      >
        <Drawer.Screen
          name={"Home"}
          component={Home}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={titleOnPress}>
                <Ionicons
                  name="md-search"
                  size={32}
                  color="white"
                  style={IconStyle}
                />
              </TouchableOpacity>
            ),
            drawerLabel: "getting-started",
          }}
        />
        {/* ReactNativeDocs */}
        {ReactNativeDocsList.map((data) => (
          <Drawer.Screen
            key={data.name}
            name={data.name}
            component={data}
            options={{ drawerLabel: data.name }}
          />
        ))}
        {/* Components */}
        {ComponentsList.map((data) => (
          <Drawer.Screen
            key={data.name}
            name={data.name}
            component={data}
            options={{
              drawerLabel: data.name.slice(4, data.name.length),
              headerTitle: data.name.slice(4, data.name.length),
            }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const DrawerscreenOptions = {
  headerShown: true,
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#20232B" },
  headerTitleAlign: "center",
};
const drawerContentOptions = {
  activeTintColor: "#4DD6F6",
  activeBackgroundColor: "white",
  itemStyle: { marginVertical: 0 },
};

const IconStyle = { marginRight: 25 };
const titleOnPress = () => alert('This is a search button!');
