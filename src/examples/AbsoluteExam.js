import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

const PositionLayout = () => {
    const [position, setPosition] = useState("relative");

    return (
        <PreviewLayout
            label="position"
            selectedValue={position}
            values={["relative", "absolute"]}
            setSelectedValue={setPosition}
        >
            <View
                style={[
                    styles.box,
                    {
                        top: 25,
                        left: 25,
                        position,
                        backgroundColor: "powderblue",
                    },
                ]}
            />
            <View
                style={[
                    styles.box,
                    {
                        top: 50,
                        left: 50,
                        position,
                        backgroundColor: "skyblue",
                    },
                ]}
            />
            <View
                style={[
                    styles.box,
                    {
                        top: 75,
                        left: 75,
                        position,
                        backgroundColor: "steelblue",
                    },
                ]}
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
        <View style={styles.container}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
        minHeight: 200,
    },
    box: {
        width: 50,
        height: 50,
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
        alignSelf: "flex-start",
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

export default PositionLayout;