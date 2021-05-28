import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	Dimensions,
	View,
	ScrollView,
} from "react-native";
import { OuterView, SrcTouchable } from "~/styles/innerpageStyle";
import {
	TextMarkdown,
	CodeMarkdown,
} from "~/components/Markdown/MarkdownBlock";
export default PageTouchableOpacity = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# TouchableOpacity

	> If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](https://reactnative.dev/docs/pressable) API.

A wrapper for making views respond properly to touches.On press down, the opacity of the wrapped view is decreased, dimming it.

Opacity is controlled by wrapping the children in an Animated.View , which is added to the view hierarchy.Be aware that this can affect layout.


\`\`\`jsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
\`\`\`

# Reference[#](https://reactnative.dev/docs/touchableopacity#reference)

## Props[#](https://reactnative.dev/docs/touchableopacity#props)

### [TouchableWithoutFeedback Props](https://reactnative.dev/docs/touchablewithoutfeedback#props)[#](https://reactnative.dev/docs/touchableopacity#touchablewithoutfeedback-props)

Inherits [TouchableWithoutFeedback Props](https://reactnative.dev/docs/touchablewithoutfeedback#props).

------

###  style [#](https://reactnative.dev/docs/touchableopacity#style)

| TYPE       | REQUIRED |
| :--------- | :------- |
| View.style | No       |

------

###  activeOpacity [#](https://reactnative.dev/docs/touchableopacity#activeopacity)

Determines what the opacity of the wrapped view should be when touch is active. Defaults to  0.2 .

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  tvParallaxProperties [#](https://reactnative.dev/docs/touchableopacity#tvparallaxproperties)

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

-  enabled : If  true , parallax effects are enabled. Defaults to  true .
-  shiftDistanceX : Defaults to  2.0 .
-  shiftDistanceY : Defaults to  2.0 .
-  tiltAngle : Defaults to  0.05 .
-  magnification : Defaults to  1.0 .
-  pressMagnification : Defaults to  1.0 .
-  pressDuration : Defaults to  0.3 .
-  pressDelay : Defaults to  0.0 .

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| object | No       | iOS      |

------

###  hasTVPreferredFocus [#](https://reactnative.dev/docs/touchableopacity#hastvpreferredfocus)

*(Apple TV only)* TV preferred focus (see documentation for the View component).

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  nextFocusDown [#](https://reactnative.dev/docs/touchableopacity#nextfocusdown)

TV next focus down (see documentation for the View component).

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  nextFocusForward [#](https://reactnative.dev/docs/touchableopacity#nextfocusforward)

TV next focus forward (see documentation for the View component).

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  nextFocusLeft [#](https://reactnative.dev/docs/touchableopacity#nextfocusleft)

TV next focus left (see documentation for the View component).

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  nextFocusRight [#](https://reactnative.dev/docs/touchableopacity#nextfocusright)

TV next focus right (see documentation for the View component).

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  nextFocusUp [#](https://reactnative.dev/docs/touchableopacity#nextfocusup)

TV next focus up (see documentation for the View component).

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |


`;