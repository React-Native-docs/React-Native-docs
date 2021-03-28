import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MyButton = (props) => (
    <View style={{ marginTop: 50 }}>
        <Text>{props.label}</Text>
    </View>
);

export default App = () => (
    <TouchableOpacity>
        <MyButton label="Press me!" />
    </TouchableOpacity>
);