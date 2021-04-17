import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./JavaScriptRuntimeContent";

export default JavaScriptRuntime = (props) => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<TextMarkdown source={content.text2_1}/>
				<TextMarkdown source={content.text3_1}/>
			</OuterView>
		</ScrollView>
	)
}