import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import { SvgUri, SvgCssUri, SvgXml, SvgCss } from "react-native-svg";
import { OuterView, SrcTouchable } from "~/styles/innerpageStyle";
import {
  TextMarkdown,
  CodeMarkdown,
} from "~/components/Markdown/MarkdownBlock";
import * as content from "./WorkflowContent";

export default Workflow = (props) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <OuterView>
        <TextMarkdown source={content.text1_1_1} />
        <TextMarkdown source={content.text1_1_2} />
        <TextMarkdown source={content.text1_1_3} />
        <TextMarkdown source={content.text1_2} />
        <TextMarkdown source={content.text2} />
        <TextMarkdown source={content.text3} />
        <TextMarkdown source={content.text4} />
        <TextMarkdown source={content.text5} />
        <TextMarkdown source={content.text6} />
        <TextMarkdown source={content.text7} />
        <TextMarkdown source={content.text8} />
      </OuterView>
    </ScrollView>
  );
};
