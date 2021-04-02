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

import * as content from './TheBasicsContent';
import * as abc from './PerformanceContent';


const TheBasics = () => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<CodeMarkdown source={content.code1_1}/>
				<TextMarkdown source={content.text1_2}/>
				<CodeMarkdown source={content.code1_2}/>
				<TextMarkdown source={content.text1_3}/>
				<CodeMarkdown source={content.code1_3}/>
				<TextMarkdown source={content.text1_4}/>

				<TextMarkdown source={content.text2_1}/>
				<CodeMarkdown source={content.code2_1}/>
				<TextMarkdown source={content.text2_2}/>

				<TextMarkdown source={content.text3_1}/>
				<CodeMarkdown source={content.code3_1}/>
				<TextMarkdown source={content.text3_2}/>
				<CodeMarkdown source={content.code3_2}/>
				<TextMarkdown source={content.text3_3}/>
				<CodeMarkdown source={content.code3_3}/>
				<TextMarkdown source={content.text3_4}/>
				<CodeMarkdown source={content.code3_4}/>
				<TextMarkdown source={content.text3_5}/>
				<CodeMarkdown source={content.code3_5}/>
				<TextMarkdown source={content.text3_6}/>
				<CodeMarkdown source={content.code3_6}/>
				<TextMarkdown source={content.text3_7}/>
				<CodeMarkdown source={content.code3_7}/>
				<TextMarkdown source={content.text3_8}/>
				<CodeMarkdown source={content.code3_8}/>
				<TextMarkdown source={content.text3_9}/>
				<CodeMarkdown source={content.code3_9}/>
				<TextMarkdown source={content.text3_10}/>

				<TextMarkdown source={content.text4_1}/>
				<CodeMarkdown source={content.code4_1}/>
				<TextMarkdown source={content.text4_2}/>

				<TextMarkdown source={content.text5_1}/>
				<CodeMarkdown source={content.code5_1}/>
				<TextMarkdown source={content.text5_2}/>

				<TextMarkdown source={content.text6_1}/>
				<CodeMarkdown source={content.code6_1}/>
				<TextMarkdown source={content.text6_2}/>
				<CodeMarkdown source={content.code6_2}/>
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