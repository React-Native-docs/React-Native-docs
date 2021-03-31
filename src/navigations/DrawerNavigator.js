import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Connectivity from '~/docs/Connectivity';
import Design from '~/docs/Design';
import GuidesAndroid from '~/docs/GuidesAndroid';
import GuidesiOS from '~/docs/GuidesiOS';
import Inclustion from '~/docs/Inclustion';
import Interacton from '~/docs/Interacton';
import JavaScriptRuntime from '~/docs/JavaScriptRuntime';
import NativeComponents from '~/docs/NativeComponents';
import NativeModules from '~/docs/NativeModules';
import Performance from '~/docs/Performance';
import Workflow from '~/docs/Workflow';
import TheBasics from '~/docs/TheBasics';
import EnvironmentSetup from '~/docs/EnvironmentSetup';
import Home from '~/screens/Home/Home';

// import PageActivityIndicator from "~/components/CoreComponents/ActivityIndicator";
import PageButton from "~/components/CoreComponents/Button";
import PageCoreComponentsAndAPIs from "~/components/CoreComponents/CoreComponentsAndAPIs";
import PageFlatList from "~/components/CoreComponents/FlatList";
import PageImage from "~/components/CoreComponents/Image";
import PageImageBackground from "~/components/CoreComponents/ImageBackground";
import PageKeyboardAvoidingView from "~/components/CoreComponents/KeyboardAvoidingView";
import PageModal from "~/components/CoreComponents/Modal";
import PagePressable from "~/components/CoreComponents/Pressable";
import PageRefreshControl from "~/components/CoreComponents/RefreshControl";
import PageScrollView from "~/components/CoreComponents/ScrollView";
import PageSectionList from "~/components/CoreComponents/SectionList";
import PageStatusBar from "~/components/CoreComponents/StatusBar";
import PageSwitch from "~/components/CoreComponents/Switch";
import PageText from "~/components/CoreComponents/Text";
import PageTextInput from "~/components/CoreComponents/TextInput";
import PageTouchableHighlight from "~/components/CoreComponents/TouchableHighlight";
import PageTouchableOpacity from "~/components/CoreComponents/TouchableOpacity";
import PageTouchableWithoutFeedback from "~/components/CoreComponents/TouchableWithoutFeedback";
import PageView from "~/components/CoreComponents/View";
import PageVirtualizedList from "~/components/CoreComponents/VirtualizedList";
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
