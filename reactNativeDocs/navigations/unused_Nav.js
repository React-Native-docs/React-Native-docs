import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Default from './docs/example/default';
import Basic from './docs/Basic';
import Interaction from './docs/Interaction';
import Inclusion from './docs/Inclusion';
import NativeModules from './docs/NativeModules';
import ReactHook from './docs/ReactHook';
import CoreComponents from './docs/CoreComponents';
import Props from './docs/Props';
import ObjectTypes from './docs/ObjectTypes';
import APIs from './docs/APIs';
import HelloWorld from './docs/example/HelloWorld';
import CurlyBraces from './docs/example/CurlyBraces';
import CurlyBraces2 from './docs/example/CurlyBraces2';
import MultipleComponents from './docs/example/MultipleComponents';
import MultipleProps from './docs/example/MultipleProps';
import PropsExam from './docs/example/Props';
import StateExam from './docs/example/State';
import YourCat from './docs/example/YourCat';
import HandlingTextInput from './docs/example/HandlingTextInput';
import UsingScrollView from './docs/example/UsingScrollView';
import FlatListBasics from './docs/example/FlatListBasics';
import StyleExam from './docs/example/StyleExam';
import HeightandWidth from './docs/example/HeightandWidth';
import FlexDimensions from './docs/example/FlexDimensions';
import ButtonBasics from './docs/example/ButtonBasics';
import AnimationExample from './docs/example/AnimationExample';
import FlatList1 from './docs/example/FlatList1';
import FlatList2 from './docs/example/FlatList2';


import PActivityIndicator from './docsComponents/Components/PActivityIndicator'
import PButton from './docsComponents/Components/PButton'
import PFlatList from './docsComponents/Components/PFlatList'
import PImage from './docsComponents/Components/PImage'
import PImageBackground from './docsComponents/Components/PImageBackground'
import PKeyboardAvoidingView from './docsComponents/Components/PKeyboardAvoidingView'
import PModal from './docsComponents/Components/PModal'
import PRefreshControl from './docsComponents/Components/PRefreshControl'
import PPressable from './docsComponents/Components/PPressable'
import PScrollView from './docsComponents/Components/PScrollView'
import PSectionList from './docsComponents/Components/PSectionList'
import PStatusBar from './docsComponents/Components/PStatusBar'
import PSwitch from './docsComponents/Components/PSwitch'
import PText from './docsComponents/Components/PText'
import PTextInput from './docsComponents/Components/PTextInput'
import PTouchableHighlight from './docsComponents/Components/PTouchableHighlight'
import PTouchableWithoutFeedback from './docsComponents/Components/PTouchableWithoutFeedback'
import PView from './docsComponents/Components/PView'
import PVirtualizedList from './docsComponents/Components/PVirtualizedList'

const s = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <s.Navigator>
        <s.Screen name="NavPage" component={NavPage} />
        <s.Screen name="Default" component={Default} />
        <s.Screen name="The Basics(기초) ~ Design(레이아웃 디자인)" component={Basic} />
        <s.Screen name="Interaction(애니메이션)" component={Interaction} />
        <s.Screen name="Inclusion ~ Connectivity" component={Inclusion} />
        <s.Screen name="Native Modules ~ Native Components" component={NativeModules} />
        <s.Screen name="React Hook API" component={ReactHook} />
        <s.Screen name="Core Components" component={CoreComponents} />
        <s.Screen name="Props" component={Props} />
        <s.Screen name="Object Types" component={ObjectTypes} />
        <s.Screen name="APIs" component={APIs} />
        <s.Screen name="Examples" component={APIs} />
        <s.Screen name="HelloWorld" component={HelloWorld} />
        <s.Screen name="CurlyBraces" component={CurlyBraces} />
        <s.Screen name="CurlyBraces2" component={CurlyBraces2} />
        <s.Screen name="MultipleComponents" component={MultipleComponents} />
        <s.Screen name="MultipleProps" component={MultipleProps} />
        <s.Screen name="PropsExam" component={PropsExam} />
        <s.Screen name="StateExam" component={StateExam} />
        <s.Screen name="YourCat" component={YourCat} />
        <s.Screen name="HandlingTextInput" component={HandlingTextInput} />
        <s.Screen name="UsingScrollView" component={UsingScrollView} />
        <s.Screen name="FlatListBasics" component={FlatListBasics} />
        <s.Screen name="StyleExam" component={StyleExam} />
        <s.Screen name="HeightandWidth" component={HeightandWidth} />
        <s.Screen name="FlexDimensions" component={FlexDimensions} />
        <s.Screen name="ButtonBasics" component={ButtonBasics} />
        <s.Screen name="AnimationExample" component={AnimationExample} />
        <s.Screen name="FlatList1" component={FlatList1} />
        <s.Screen name="FlatList2" component={FlatList2} />

        <s.Screen name="ActivityIndicator" component={PActivityIndicator} />
        <s.Screen name="Button" component={PButton} />
        <s.Screen name="FlatList" component={PFlatList} />
        <s.Screen name="Image" component={PImage} />
        <s.Screen name="ImageBackground" component={PImageBackground} />
        <s.Screen name="KeyboardAvoidingView" component={PKeyboardAvoidingView} />
        <s.Screen name="Modal" component={PModal} />
        <s.Screen name="RefreshControl" component={PRefreshControl} />
        <s.Screen name="Pressable" component={PPressable} />
        <s.Screen name="ScrollView" component={PScrollView} />
        <s.Screen name="SectionList" component={PSectionList} />
        <s.Screen name="StatusBar" component={PStatusBar} />
        <s.Screen name="Switch" component={PSwitch} />
        <s.Screen name="Text" component={PText} />
        <s.Screen name="TextInput" component={PTextInput} />
        <s.Screen name="TouchableHighlight" component={PTouchableHighlight} />
        <s.Screen name="TouchableWithoutFeedback" component={PTouchableWithoutFeedback} />
        <s.Screen name="View" component={PView} />
        <s.Screen name="VirtualizedList" component={PVirtualizedList} />
      </s.Navigator>
    </NavigationContainer>
  );
}



export const NavPage= ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={[
            {
              title: '# 공식 문서 (Docs)',
              data: ['The Basics(기초) ~ Design(레이아웃 디자인)', 'Interaction(애니메이션)', 'Inclusion ~ Connectivity', 'Native Modules ~ Native Components', 'React Hook API'],
            },
            {
              title: '# 기본 컴포넌트들 Components - Core Components',
              data: ['ActivityIndicator', 'Button', 'FlatList', 'Image'
                , 'ImageBackground'
                , 'KeyboardAvoidingView'
                , 'Modal'
                , 'Pressable'
                , 'RefreshControl'
                , 'ScrollView'
                , 'SectionList'
                , 'StatusBar'
                , 'Switch'
                , 'Text'
                , 'TextInput'
                , 'TouchableHighlight'
                , 'TouchableOpacity'
                , 'TouchableWithoutFeedback'
                , 'View'
                , 'VirtualizedList'],
            },
            {
              title: '# 기본 컴포넌트들 Components - Props / Object Types',
              data: ['Props', 'Object Types'],
            },
            { title: 'API', data: ['APIs']},
            { title: '예제 examples',data:['Examples']},
					]}
					renderItem={item =>
						<Button style={styles.item}
              onPress={() => navigation.navigate(item.section.data[item.index])}
              title={item.section.data[item.index]}></Button>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
