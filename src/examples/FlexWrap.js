import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FlexWrapLayout = () => {
    const [flexWrap, setFlexWrap] = useState("wrap");

    return (
        <PreviewLayout
            label="flexWrap"
            selectedValue={flexWrap}
            values={["wrap", "nowrap"]}
            setSelectedValue={setFlexWrap}>
            <View
                style={[styles.box, { backgroundColor: "orangered" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "orange" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "mediumseagreen" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "deepskyblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "mediumturquoise" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "mediumslateblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "purple" }]}
            />
        </PreviewLayout>
    );
};

const PreviewLayout = ({
                           label,
                           children,
                           values,
                           selectedValue,
                           setSelectedValue,
                       }) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value &&
                            styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View
            style={[
                styles.container,
                { [label]: selectedValue },
            ]}
        >
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
        maxHeight: 400,
    },
    box: {
        width: 50,
        height: 80,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});

export default FlexWrapLayout;