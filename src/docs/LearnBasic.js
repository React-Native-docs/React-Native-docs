import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';
import { TextMarkdown, CodeMarkdown } from '~/components/Markdown/MarkdownBlock';
import * as content from "./LearnBasicContent";
import LearnBasicHelloWorld from "../examples/LearnBasicHelloWorld";
import LearnBasicHelloProps from "../examples/LearnBasicHelloProps";
import LearnBasicHelloClasses from "../examples/LearnBasicHelloClasses";


export default LearnBasic = (props) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <OuterView>
                <TextMarkdown source={content.text1_1}/>
                <CodeMarkdown source={content.code1_1} exampleFile={<LearnBasicHelloWorld/>}/>
                <TextMarkdown source={content.text1_2}/>
                <CodeMarkdown source={content.code1_2} exampleFile={<LearnBasicHelloProps/>}/>
                <TextMarkdown source={content.text1_3}/>
                <CodeMarkdown source={content.code1_3} exampleFile={<LearnBasicHelloClasses/>}/>
            </OuterView>
        </ScrollView>
    )
}