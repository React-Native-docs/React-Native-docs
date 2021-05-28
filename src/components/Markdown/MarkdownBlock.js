import React, { useState } from "react";
import { Linking, Modal } from "react-native";
import Markdown from 'react-native-markdown-package';
import {markdownStyle} from '~/styles/markdownStyle';
import { ModalContainer, ModalView, CloseButton } from './MarkdownBlock.styles';
import { SrcTouchable } from '~/styles/innerpageStyle';
import CloseIcon from '~/assets/icons/close-icon.svg';

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
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SrcTouchable onPress={()=>{setModalVisible(true)}}>
            <Markdown
                styles={markdownStyle.codeBlock}
            >
            {props.source}
            </Markdown>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalContainer>
                    <CloseButton onPress={() => setModalVisible(!modalVisible)}>
                        <CloseIcon />
                    </CloseButton>
                    <ModalView>
                        {props.exampleFile}
                    </ModalView>
                </ModalContainer>
            </Modal>
        </SrcTouchable>
    );
};

export const ModalScreenMarkDown = (props) => {
    return (
        <SrcTouchable onPress={() => props.navigation.navigate('ModalScreen', { exampleFile: props.exampleFile })}>
            <Markdown
                styles={markdownStyle.codeBlock}
            >
                {props.source}
            </Markdown>
        </SrcTouchable>
    )
};
