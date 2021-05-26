import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./DesignContent";
import StyleExam from "../../examples/StyleExam";
import HeightandWidth from "../../examples/HeightandWidth";
import FlexDimensions from "../../examples/FlexDimensions";
import PercentageDimensions from "../../examples/PercentageDimensions";
import FlexExample from "../../examples/FlexExample";
import FlexDirection from "../../examples/FlexDirection";
import FlexDirection2 from "../../examples/FlexDirection2";
import JustifyContent from "../../examples/JustifyContent";
import AlignItems from "../../examples/AlignItems";
import AlignSelf from "../../examples/AlignSelf";
import AlignContent from "../../examples/AlignContent";
import FlexWrap from "../../examples/FlexWrap";
import FlexBasisGrowandShrink from "../../examples/FlexBasisGrowandShrink";
import WidthandHeight from "../../examples/WidthandHeight";
import AbsoluteExam from "../../examples/AbsoluteExam";

export default Design = (props) => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<CodeMarkdown source={content.code1_1} exampleFile={<StyleExam/>}/>

				<TextMarkdown source={content.text2_1}/>
				<CodeMarkdown source={content.code2_1} exampleFile={<HeightandWidth/>}/>
				<TextMarkdown source={content.text2_2}/>
				<CodeMarkdown source={content.code2_2} exampleFile={<FlexDimensions/>}/>
				<TextMarkdown source={content.text2_3}/>
				<CodeMarkdown source={content.code2_3} exampleFile={<PercentageDimensions/>}/>

				<TextMarkdown source={content.text3_1}/>
				<CodeMarkdown source={content.code3_1} exampleFile={<FlexExample/>}/>
				<TextMarkdown source={content.text3_2}/>
				<CodeMarkdown source={content.code3_2} exampleFile={<FlexDirection/>}/>
				<TextMarkdown source={content.text3_3}/>
				<CodeMarkdown source={content.code3_3} exampleFile={<FlexDirection2/>}/>
				<TextMarkdown source={content.text3_4}/>
				<CodeMarkdown source={content.code3_4} exampleFile={<JustifyContent/>}/>
				<TextMarkdown source={content.text3_5}/>
				<CodeMarkdown source={content.code3_5} exampleFile={<AlignItems/>}/>
				<TextMarkdown source={content.text3_6}/>
				<CodeMarkdown source={content.code3_6} exampleFile={<AlignSelf/>}/>
				<TextMarkdown source={content.text3_7}/>
				<CodeMarkdown source={content.code3_7} exampleFile={<AlignContent/>}/>
				<TextMarkdown source={content.text3_8}/>
				<CodeMarkdown source={content.code3_8} exampleFile={<FlexWrap/>}/>
				<TextMarkdown source={content.text3_9}/>
				<CodeMarkdown source={content.code3_9} exampleFile={<FlexBasisGrowandShrink/>}/>
				<TextMarkdown source={content.text3_10}/>
				<CodeMarkdown source={content.code3_10} exampleFile={<WidthandHeight/>}/>
				<TextMarkdown source={content.text3_11}/>
				<CodeMarkdown source={content.code3_11} exampleFile={<AbsoluteExam/>}/>
				<TextMarkdown source={content.text3_12}/>

				<TextMarkdown source={content.text4_1}/>
				<TextMarkdown source={content.text5_1}/>
			</OuterView>
		</ScrollView>
	)
}