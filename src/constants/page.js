import React from 'react';

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

const PAGE = {
    RNDOCS: {
        TheBasics: props => <TheBasics {...props} />,
        EnvironmentSetup: props => <EnvironmentSetup {...props} />,
        Workflow: props => <Workflow {...props} />,
        Design: props => <Design {...props} />,
        Interaction: props => <Interacton {...props} />,
        Inclustion: props => <Inclustion {...props} />,
        Performance: props => <Performance {...props} />,
        JavaScriptRuntime: props => <JavaScriptRuntime {...props} />,
        Connectivity: props => <Connectivity {...props} />,
        NativeModules: props => <NativeModules {...props} />,
        NativeComponents: props => <NativeComponents {...props} />,
        GuidesAndroid: props => <GuidesAndroid {...props} />,
        GuidesiOS: props => <GuidesiOS {...props} />,
    },
    COMPONENTS: {
        CoreComponentsAndAPIs: props => <PageCoreComponentsAndAPIs {...props} />,
        ActivityIndicator: props => <PageCoreComponentsAndAPIs {...props} />,
        Button: props => <PageButton {...props} />,
        FlatList: props => <PageFlatList {...props} />,
        Image: props => <PageImage {...props} />,
        ImageBackground: props => <PageImageBackground {...props} />,
        KeyboardAvoidingView: props => <PageKeyboardAvoidingView {...props} />,
        Modal: props => <PageModal {...props} />,
        Pressable: props => <PagePressable {...props} />,
        RefreshControl: props => <PageRefreshControl {...props} />,
        ScrollView: props => <PageScrollView {...props} />,
        SectionList: props => <PageSectionList {...props} />,
        StatusBar: props => <PageStatusBar {...props} />,
        Switch: props => <PageSwitch {...props} />,
        Text: props => <PageText {...props} />,
        TextInput: props => <PageTextInput {...props} />,
        TouchableHighlight: props => <PageTouchableHighlight {...props} />,
        TouchableOpacity: props => <PageTouchableOpacity {...props} />,
        TouchableWithoutFeedback: props => <PageTouchableWithoutFeedback {...props} />,
        View: props => <PageView {...props} />,
        VirtualizedList: props => <PageVirtualizedList {...props} />,
    },
    APIS: {
        AccessibilityInfo: props => <PageButton {...props} />,
        Alert: props => <PageButton {...props} />,
        Animated: props => <PageButton {...props} />,
        AnimatedValue: props => <PageButton {...props} />,
        AnimatedValueXY: props => <PageButton {...props} />,
        Appearance: props => <PageButton {...props} />,
        AppRegistry: props => <PageButton {...props} />,
        AppState: props => <PageButton {...props} />,
        DevSettings: props => <PageButton {...props} />,
        Dimensions: props => <PageButton {...props} />,
        Easing: props => <PageButton {...props} />,
        InteractionManager: props => <PageButton {...props} />,
        Keyboard: props => <PageButton {...props} />,
        LayoutAnimation: props => <PageButton {...props} />,
        Linking: props => <PageButton {...props} />,
        PanResponder: props => <PageButton {...props} />,
        PixelRatio: props => <PageButton {...props} />,
        Platform: props => <PageButton {...props} />,
        PlatformColor: props => <PageButton {...props} />,
        Share: props => <PageButton {...props} />,
        StyleSheet: props => <PageButton {...props} />,
        Systrace: props => <PageButton {...props} />,
        Transforms: props => <PageButton {...props} />,
        Vibration: props => <PageButton {...props} />,
    },
};

export default PAGE;
