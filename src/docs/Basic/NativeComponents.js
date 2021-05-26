import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./NativeComponentsContent";

import SetNativePropswithCompositeComponents from "../../examples/SetNativePropswithCompositeComponents";
import ForwardingsetNativeProps from "../../examples/ForwardingsetNativeProps";
import Cleartext from "../../examples/Cleartext";
import MeasureLayoutexample from "../../examples/MeasureLayoutexample";

export default NativeComponents = (props) => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<TextMarkdown source={content.text2_1}/>
				<TextMarkdown source={content.text3_1}/>
				<CodeMarkdown source={content.code3_1} exampleFile={<SetNativePropswithCompositeComponents/>}/>
				<TextMarkdown source={content.text3_2}/>
				<CodeMarkdown source={content.code3_2} exampleFile={<ForwardingsetNativeProps/>}/>
				<TextMarkdown source={content.text3_3}/>
				<CodeMarkdown source={content.code3_3} exampleFile={<Cleartext/>}/>
				<TextMarkdown source={content.text3_4}/>
				<CodeMarkdown source={content.code3_4} exampleFile={<MeasureLayoutexample/>}/>
				<TextMarkdown source={content.text3_5}/>

			</OuterView>
		</ScrollView>
	)
}