`
# Switch

Renders a boolean input.

This is a controlled component that requires an onValueChange  callback that updates the value  prop in order for the component to reflect user actions.If the value  prop is not updated, the component will continue to render the supplied value  prop instead of the expected result of any user actions.

## Example[#](https://reactnative.dev/docs/switch#example)

 \`\`\`jsx
import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const App = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default App;
 \`\`\`
# Reference[#](https://reactnative.dev/docs/switch#reference)

## Props[#](https://reactnative.dev/docs/switch#props)

### [View Props](https://reactnative.dev/docs/view#props)[#](https://reactnative.dev/docs/switch#view-props)

Inherits [View Props](https://reactnative.dev/docs/view#props).

------

###  disabled [#](https://reactnative.dev/docs/switch#disabled)

If true the user won't be able to toggle the switch.

| TYPE | DEFAULT |
| :--- | :------ |
| bool |  false  |

------

###  ios_backgroundColor  iOS[#](https://reactnative.dev/docs/switch#ios_backgroundcolor-ios)

On iOS, custom color for the background. This background color can be seen either when the switch value is  false  or when the switch is disabled (and the switch is translucent).

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

------

###  onChange [#](https://reactnative.dev/docs/switch#onchange)

Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use  onValueChange  instead.

| TYPE     |
| :------- |
| function |

------

###  onValueChange [#](https://reactnative.dev/docs/switch#onvaluechange)

Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use  onChange .

| TYPE     |
| :------- |
| function |

------

###  thumbColor [#](https://reactnative.dev/docs/switch#thumbcolor)

Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

------

###  trackColor [#](https://reactnative.dev/docs/switch#trackcolor)

Custom colors for the switch track.

*iOS*: When the switch value is  false , the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use [ ios_backgroundColor ](https://reactnative.dev/docs/switch#ios_backgroundColor).

| TYPE                                                         |
| :----------------------------------------------------------- |
| object: { false: [color](https://reactnative.dev/docs/colors), true: [color](https://reactnative.dev/docs/colors) } |

------

###  value [#](https://reactnative.dev/docs/switch#value)

The value of the switch. If true the switch will be turned on. Default value is false.

| TYPE |
| :--- |
| bool |

## https://reactnative.dev/docs/switch#example)


`