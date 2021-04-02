import {Linking} from "react-native";
import React from "react";
import Markdown from 'react-native-markdown-package';
import markdownStyle from '~/styles/markdownStyle';
import { OuterView, SrcTouchable } from '~/styles/innerpageStyle';

export const TextMarkdown = (props) => {
    return (
        <Markdown
            styles={markdownStyle.collectiveMd}
            onLink={(url) => Linking.openURL(url)}
        >
            {props.source}
        </Markdown>
    );
};


export const CodeMarkdown = (props) => {
    return (
        <SrcTouchable onPress={()=>{alert("pressed")}}>
            <Markdown
                styles={markdownStyle.codeBlock}
            >
            {props.source}
            </Markdown>
        </SrcTouchable>
    );
};