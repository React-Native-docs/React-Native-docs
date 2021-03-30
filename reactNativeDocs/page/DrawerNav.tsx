import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Connectivity from "./docs/ReactNativeDocs/screen/Connectivity";
import Design from "./docs/ReactNativeDocs/screen/Design";
import GuidesAndroid from "./docs/ReactNativeDocs/screen/GuidesAndroid";
import GuidesiOS from "./docs/ReactNativeDocs/screen/GuidesiOS";
import Inclustion from "./docs/ReactNativeDocs/screen/Inclustion";
import Interacton from "./docs/ReactNativeDocs/screen/Interacton";
import JavaScriptRuntime from "./docs/ReactNativeDocs/screen/JavaScriptRuntime";
import NativeComponents from "./docs/ReactNativeDocs/screen/NativeComponents";
import NativeModules from "./docs/ReactNativeDocs/screen/NativeModules";
import Performance from "./docs/ReactNativeDocs/screen/Performance";
import Workflow from "./docs/ReactNativeDocs/screen/Workflow";
import TheBasics from "./docs/ReactNativeDocs/screen/TheBasics";
import EnvironmentSetup from "./docs/ReactNativeDocs/screen/EnvironmentSetup";
import Home from "./docs/Home";

import PageActivityIndicator from "./docs/Components/CoreComponents/ActivityIndicator";
import PageButton from "./docs/Components/CoreComponents/Button";
import PageCoreComponentsAndAPIs from "./docs/Components/CoreComponents/CoreComponentsAndAPIs";
import PageFlatList from "./docs/Components/CoreComponents/FlatList";
import PageImage from "./docs/Components/CoreComponents/Image";
import PageImageBackground from "./docs/Components/CoreComponents/ImageBackground";
import PageKeyboardAvoidingView from "./docs/Components/CoreComponents/KeyboardAvoidingView";
import PageModal from "./docs/Components/CoreComponents/Modal";
import PagePressable from "./docs/Components/CoreComponents/Pressable";
import PageRefreshControl from "./docs/Components/CoreComponents/RefreshControl";
import PageScrollView from "./docs/Components/CoreComponents/ScrollView";
import PageSectionList from "./docs/Components/CoreComponents/SectionList";
import PageStatusBar from "./docs/Components/CoreComponents/StatusBar";
import PageSwitch from "./docs/Components/CoreComponents/Switch";
import PageText from "./docs/Components/CoreComponents/Text";
import PageTextInput from "./docs/Components/CoreComponents/TextInput";
import PageTouchableHighlight from "./docs/Components/CoreComponents/TouchableHighlight";
import PageTouchableOpacity from "./docs/Components/CoreComponents/TouchableOpacity";
import PageTouchableWithoutFeedback from "./docs/Components/CoreComponents/TouchableWithoutFeedback";
import PageView from "./docs/Components/CoreComponents/View";
import PageVirtualizedList from "./docs/Components/CoreComponents/VirtualizedList";
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
  PageActivityIndicator,
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
export default function DrawerNav() {
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
const titleOnPress = () => alert("This is a search button!");
