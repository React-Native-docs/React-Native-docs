import React, { useState } from "react";
import { Linking, Modal, View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import Markdown from 'react-native-markdown-package';
import markdownStyle from '~/styles/markdownStyle';
import { SrcTouchable } from '~/styles/innerpageStyle';

const windowWidth = Dimensions.get('window').width;

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
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {width: windowWidth}]}>
                        {props.exampleFile}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SrcTouchable>
    );
};

export const ModalScreenMarkDown = (props) => {
    return (
        <SrcTouchable onPress={() => props.navigation.navigate('ModalScreen', { exampleFile: props.exampleFile})}>
            <Markdown
                styles={markdownStyle.codeBlock}
            >
                {props.source}
            </Markdown>
        </SrcTouchable>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        flex: 1,

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
