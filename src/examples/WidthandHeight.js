import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

const WidthHeightBasics = () => {
    const [widthType, setWidthType] = useState("auto");
    const [heightType, setHeightType] = useState("auto");

    return (
        <PreviewLayout
            widthType={widthType}
            heightType={heightType}
            widthValues={["auto", 300, "80%"]}
            heightValues={["auto", 200, "60%"]}
            setWidthType={setWidthType}
            setHeightType={setHeightType}
        >
            <View
                style={{
                    alignSelf: "flex-start",
                    backgroundColor: "aliceblue",
                    height: heightType,
                    width: widthType,
                    padding: 15,
                }}
            >
                <View
                    style={[
                        styles.box,
                        { backgroundColor: "powderblue" },
                    ]}
                />
                <View
                    style={[
                        styles.box,
                        { backgroundColor: "skyblue" },
                    ]}
                />
                <View
                    style={[
                        styles.box,
                        { backgroundColor: "steelblue" },
                    ]}
                />
            </View>
        </PreviewLayout>
    );
};

const PreviewLayout = ({
                           children,
                           widthType,
                           heightType,
                           widthValues,
                           heightValues,
                           setWidthType,
                           setHeightType,
                       }) => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.row}>
            <Text style={styles.label}>width </Text>
            {widthValues.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setWidthType(value)}
                    style={[
                        styles.button,
                        widthType === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            widthType === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>height </Text>
            {heightValues.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setHeightType(value)}
                    style={[
                        styles.button,
                        heightType === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            heightType === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        {children}
    </View>
);

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginRight: 10,
        marginBottom: 10,
    },
    selected: {
        backgroundColor: "coral",
        shadowOpacity: 0,
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

export default WidthHeightBasics;