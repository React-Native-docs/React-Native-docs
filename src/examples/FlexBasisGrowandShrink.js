import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";

const App = () => {
    const [powderblue, setPowderblue] = useState({
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
    });
    const [skyblue, setSkyblue] = useState({
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
    });
    const [steelblue, setSteelblue] = useState({
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 200,
    });
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.container,
                    {
                        flexDirection: "row",
                        alignContent: "space-between",
                    },
                ]}
            >
                <BoxInfo
                    color="powderblue"
                    {...powderblue}
                    setStyle={setPowderblue}
                />
                <BoxInfo
                    color="skyblue"
                    {...skyblue}
                    setStyle={setSkyblue}
                />
                <BoxInfo
                    color="steelblue"
                    {...steelblue}
                    setStyle={setSteelblue}
                />
            </View>
            <View style={styles.previewContainer}>
                <View
                    style={[
                        styles.box,
                        {
                            flexBasis: powderblue.flexBasis,
                            flexGrow: powderblue.flexGrow,
                            flexShrink: powderblue.flexShrink,
                            backgroundColor: "powderblue",
                        },
                    ]}
                />
                <View
                    style={[
                        styles.box,
                        {
                            flexBasis: skyblue.flexBasis,
                            flexGrow: skyblue.flexGrow,
                            flexShrink: skyblue.flexShrink,
                            backgroundColor: "skyblue",
                        },
                    ]}
                />
                <View
                    style={[
                        styles.box,
                        {
                            flexBasis: steelblue.flexBasis,
                            flexGrow: steelblue.flexGrow,
                            flexShrink: steelblue.flexShrink,
                            backgroundColor: "steelblue",
                        },
                    ]}
                />
            </View>
        </View>
    );
};

const BoxInfo = ({
                     color,
                     flexBasis,
                     flexShrink,
                     setStyle,
                     flexGrow,
                 }) => (
    <View style={[styles.row, { flexDirection: "column" }]}>
        <View
            style={[
                styles.boxLabel,
                {
                    backgroundColor: color,
                },
            ]}
        >
            <Text
                style={{
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                Box
            </Text>
        </View>
        <Text style={styles.label}>flexBasis</Text>
        <TextInput
            value={flexBasis}
            style={styles.input}
            onChangeText={(fB) =>
                setStyle((value) => ({
                    ...value,
                    flexBasis: isNaN(parseInt(fB))
                        ? "auto"
                        : parseInt(fB),
                }))
            }
        />
        <Text style={styles.label}>flexShrink</Text>
        <TextInput
            value={flexShrink}
            style={styles.input}
            onChangeText={(fS) =>
                setStyle((value) => ({
                    ...value,
                    flexShrink: isNaN(parseInt(fS))
                        ? ""
                        : parseInt(fS),
                }))
            }
        />
        <Text style={styles.label}>flexGrow</Text>
        <TextInput
            value={flexGrow}
            style={styles.input}
            onChangeText={(fG) =>
                setStyle((value) => ({
                    ...value,
                    flexGrow: isNaN(parseInt(fG))
                        ? ""
                        : parseInt(fG),
                }))
            }
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    box: {
        flex: 1,
        height: 50,
        width: 50,
    },
    boxLabel: {
        minWidth: 80,
        padding: 8,
        borderRadius: 4,
        marginTop: 8,
    },
    label: {
        marginTop: 6,
        fontSize: 16,
    },
    previewContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "aliceblue",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        paddingVertical: 3,
        width: 50,
        textAlign: "center",
    },
});

export default App;