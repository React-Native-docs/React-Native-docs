import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
    const textContainerRef = useRef(null);
    const textRef = useRef(null);
    const [measure, setMeasure] = useState(null);

    useEffect(() => {
        if (textRef.current && textContainerRef.current) {
            textRef.current.measureLayout(
                textContainerRef.current,
                (left, top, width, height) => {
                    setMeasure({ left, top, width, height });
                }
            );
        }
    }, [measure]);

    return (
        <View style={styles.container}>
            <View
                ref={textContainerRef}
                style={styles.textContainer}
            >
                <Text ref={textRef}>
                    Where am I? (relative to the text container)
                </Text>
            </View>
            <Text style={styles.measure}>
                {JSON.stringify(measure)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    textContainer: {
        backgroundColor: "#61dafb",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
    },
    measure: {
        textAlign: "center",
        padding: 12,
    },
});

export default App;