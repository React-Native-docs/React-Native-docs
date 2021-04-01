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

import PageActivityIndicator from "~/docs/CoreComponents/ActivityIndicator";
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
        TheBasics: <TheBasics />,
        EnvironmentSetup: <EnvironmentSetup />,
        Workflow: <Workflow />,
        Design: <Design />,
        Interacton: <Interacton />,
        Inclustion: <Inclustion />,
        Performance: <Performance />,
        JavaScriptRuntime: <JavaScriptRuntime />,
        Connectivity: <Connectivity />,
        NativeModules: <NativeModules />,
        NativeComponents: <NativeComponents />,
        GuidesAndroid: <GuidesAndroid />,
        GuidesiOS: <GuidesiOS />,
    },
    COMPONENTS: {
        PageActivityIndicator: <PageActivityIndicator />,
        PageButton: <PageButton />,
        PageCoreComponentsAndAPIs: <PageCoreComponentsAndAPIs />,
        PageFlatList: <PageFlatList />,
        PageImage: <PageImage />,
        PageImageBackground: <PageImageBackground />,
        PageKeyboardAvoidingView: <PageKeyboardAvoidingView />,
        PageModal: <PageModal />,
        PagePressable: <PagePressable />,
        PageRefreshControl: <PageRefreshControl />,
        PageScrollView: <PageScrollView />,
        PageSectionList: <PageSectionList />,
        PageStatusBar: <PageStatusBar />,
        PageSwitch: <PageSwitch />,
        PageText: <PageText />,
        PageTextInput: <PageTextInput />,
        PageTouchableHighlight: <PageTouchableHighlight />,
        PageTouchableOpacity: <PageTouchableOpacity />,
        PageTouchableWithoutFeedback: <PageTouchableWithoutFeedback />,
        PageView: <PageView />,
        PageVirtualizedList: <PageVirtualizedList />,
    }
};

export default PAGE;
