import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./EnvironmentSetupContent";

export default EnvironmentSetup = (props) => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<TextMarkdown source={content.text1_2_1}/>
				<TextMarkdown source={content.text1_2_2}/>
				<TextMarkdown source={content.text1_2_3}/>
				<TextMarkdown source={content.text1_2_4}/>
				<TextMarkdown source={content.text2_1}/>
				<TextMarkdown source={content.text2_2}/>
				<TextMarkdown source={content.text3}/>
				<TextMarkdown source={content.text4_1}/>
				<TextMarkdown source={content.text4_2}/>
				<TextMarkdown source={content.text5}/>
			</OuterView>
		</ScrollView>
	)
}