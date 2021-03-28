import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MyButton = React.forwardRef((props, ref) => (
    <View {...props} ref={ref} style={{ marginTop: 50 }}>
        <Text>{props.label}</Text>
    </View>
));

export default App = () => (
    <TouchableOpacity>
        <MyButton label="Press me!" />
    </TouchableOpacity>
);