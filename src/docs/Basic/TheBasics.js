import React, {Component} from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Linking,
	TouchableOpacity,
} from 'react-native';
import Markdown from 'react-native-markdown-package';
import markdownStyle from '~/styles/markdownStyle';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';

import HelloWorld from "../../examples/HelloWorld";
import HelloWorldFunctionComponent from "../../examples/HelloWorldFunctionComponent";
import HelloWorld2 from "../../examples/HelloWorld2";
import YourCat from "../../examples/YourCat";
import CurlyBraces from "../../examples/CurlyBraces";
import CurlyBraces2 from "../../examples/CurlyBraces2";
import MultipleComponents from "../../examples/MultipleComponents";
import MultipleProps from "../../examples/MultipleProps";
import Props from "../../examples/Props";
import CustomComponents from "../../examples/CustomComponents";
import State from "../../examples/State";
import HandlingTextInput from "../../examples/HandlingTextInput";
import UsingScrollView from "../../examples/UsingScrollView";
import FlatListBasics from "../../examples/FlatListBasics";
import SectionListBasics from "../../examples/SectionListBasics";

import * as content from './TheBasicsContent';


const TheBasics = () => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<CodeMarkdown source={content.code1_1} exampleFile={<HelloWorld/>}/>
				<TextMarkdown source={content.text1_2}/>
				<TextMarkdown source={content.text1_3}/>
				<CodeMarkdown source={content.code1_3} exampleFile={<HelloWorldFunctionComponent/>}/>
				<TextMarkdown source={content.text1_4}/>

				<TextMarkdown source={content.text2_1}/>
				<CodeMarkdown source={content.code2_1} exampleFile={<HelloWorld2/>}/>
				<TextMarkdown source={content.text2_2}/>

				<TextMarkdown source={content.text3_1} />
				<CodeMarkdown source={content.code3_1} exampleFile={<YourCat/>}/>
				<TextMarkdown source={content.text3_2}/>
				<CodeMarkdown source={content.code3_2} exampleFile={<YourCat/>}/>
				<TextMarkdown source={content.text3_3}/>
				<CodeMarkdown source={content.code3_3} exampleFile={<CurlyBraces/>}/>
				<TextMarkdown source={content.text3_4}/>
				<CodeMarkdown source={content.code3_4} exampleFile={<CurlyBraces2/>}/>
				<TextMarkdown source={content.text3_5}/>
				<CodeMarkdown source={content.code3_5} exampleFile={<CustomComponents/>}/>
				<TextMarkdown source={content.text3_6}/>
				<CodeMarkdown source={content.code3_6} exampleFile={<MultipleComponents/>}/>
				<TextMarkdown source={content.text3_7}/>
				<CodeMarkdown source={content.code3_7} exampleFile={<MultipleProps/>}/>
				<TextMarkdown source={content.text3_8}/>
				<CodeMarkdown source={content.code3_8} exampleFile={<Props/>}/>
				<TextMarkdown source={content.text3_9}/>
				<CodeMarkdown source={content.code3_9} exampleFile={<State/>}/>
				<TextMarkdown source={content.text3_10}/>

				<TextMarkdown source={content.text4_1}/>
				<CodeMarkdown source={content.code4_1} exampleFile={<HandlingTextInput/>}/>
				<TextMarkdown source={content.text4_2}/>

				<TextMarkdown source={content.text5_1}/>
				<CodeMarkdown source={content.code5_1} exampleFile={<UsingScrollView/>}/>
				<TextMarkdown source={content.text5_2}/>

				<TextMarkdown source={content.text6_1}/>
				<CodeMarkdown source={content.code6_1} exampleFile={<FlatListBasics/>}/>
				<TextMarkdown source={content.text6_2}/>
				<CodeMarkdown source={content.code6_2} exampleFile={<SectionListBasics/>}/>
				<TextMarkdown source={content.text6_3}/>

				<TextMarkdown source={content.text7_1}/>

				<TextMarkdown source={content.text8_1}/>

				<TextMarkdown source={content.text9_1}/>

			</OuterView>
		</ScrollView>
	)
}

export default TheBasics;
export const TheBasicsTextList = [content.text1_1, content.text1_2, content.text1_3, content.text1_4];