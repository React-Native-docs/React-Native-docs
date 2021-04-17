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
        Interacton: props => <Interacton {...props} />,
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
        PageButton: props => <PageButton {...props} />,
        PageCoreComponentsAndAPIs: props => <PageCoreComponentsAndAPIs {...props} />,
        PageFlatList: props => <PageFlatList {...props} />,
        PageImage: props => <PageImage {...props} />,
        PageImageBackground: props => <PageImageBackground {...props} />,
        PageKeyboardAvoidingView: props => <PageKeyboardAvoidingView {...props} />,
        PageModal: props => <PageModal {...props} />,
        PagePressable: props => <PagePressable {...props} />,
        PageRefreshControl: props => <PageRefreshControl {...props} />,
        PageScrollView: props => <PageScrollView {...props} />,
        PageSectionList: props => <PageSectionList {...props} />,
        PageStatusBar: props => <PageStatusBar {...props} />,
        PageSwitch: props => <PageSwitch {...props} />,
        PageText: props => <PageText {...props} />,
        PageTextInput: props => <PageTextInput {...props} />,
        PageTouchableHighlight: props => <PageTouchableHighlight {...props} />,
        PageTouchableOpacity: props => <PageTouchableOpacity {...props} />,
        PageTouchableWithoutFeedback: props => <PageTouchableWithoutFeedback {...props} />,
        PageView: props => <PageView {...props} />,
        PageVirtualizedList: props => <PageVirtualizedList {...props} />,
    },
    APIS: {
        PageActivityIndicator: props => <PageActivityIndicator {...props} />,
        PageButton: props => <PageButton {...props} />,
    },
    EXAMPLES: {
        PageActivityIndicator: props => <PageActivityIndicator {...props} />,
        PageButton: props => <PageButton {...props} />,
    }
};

export default PAGE;
