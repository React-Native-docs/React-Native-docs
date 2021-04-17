import React from 'react';
import { ScrollView } from 'react-native';
import { OuterView } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown, ModalScreenMarkDown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./InteractonContent";
import ButtonBasics from "../../examples/ButtonBasics";
import Touchables from "../../examples/Touchables"
import AnimationExample from "../../examples/AnimationExample";
import Animated from "../../examples/Animated";
import Animated2 from "../../examples/Animated2";
import LayoutAnimations from "../../examples/LayoutAnimations";

export default Interacton = (props) => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={content.text1_1}/>
				<CodeMarkdown source={content.code1_1} exampleFile={<ButtonBasics/>}/>
				<TextMarkdown source={content.text1_2}/>
				<CodeMarkdown source={content.code1_2} exampleFile={<Touchables/>}/>
				<TextMarkdown source={content.text1_3}/>

				<TextMarkdown source={content.text2_1}/>

				<TextMarkdown source={content.text3_1}/>
				<CodeMarkdown source={content.code3_1} exampleFile={<AnimationExample/>}/>
				<TextMarkdown source={content.text3_2}/>
				<CodeMarkdown source={content.code3_2} exampleFile={<Animated/>}/>
				<TextMarkdown source={content.text3_3}/>
				<CodeMarkdown source={content.code3_3} exampleFile={<Animated/>}/>
				<TextMarkdown source={content.text3_4}/>
				<ModalScreenMarkDown navigation={props} source={content.code3_5} exampleFile={<Animated2/>}/>
				<TextMarkdown source={content.text3_6}/>
				<ModalScreenMarkDown navigation={props} source={content.code3_6} exampleFile={<Animated2/>}/>
				<TextMarkdown source={content.text3_7}/>
				<CodeMarkdown source={content.code3_7} exampleFile={<LayoutAnimations/>}/>
				<TextMarkdown source={content.text3_8}/>

				<TextMarkdown source={content.text4_1}/>
			</OuterView>
		</ScrollView>
	)
}