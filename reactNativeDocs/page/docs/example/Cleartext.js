import React from "react";
import { useCallback, useRef } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const inputRef = useRef();
    const clearText = useCallback(() => {
        inputRef.current.setNativeProps({ text: "" });
    }, []);

    return (
        <View style={styles.container}>
            <TextInput ref={inputRef} style={styles.input} />
            <TouchableOpacity onPress={clearText}>
                <Text>Clear text</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 50,
        width: 200,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: "#ccc",
    },
});

export default App;