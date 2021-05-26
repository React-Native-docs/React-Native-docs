import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 2, backgroundColor: "darkorange" }} />
            <View style={{ flex: 3, backgroundColor: "green" }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Flex;