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
export default PageTouchableHighlight = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# TouchableHighlight

	> If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](https://reactnative.dev/docs/pressable) API.

A wrapper for making views respond properly to touches.On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.

TouchableHighlight must have one child(not zero or more than one).If you wish to have several child components, wrap them in a View.

\`\`\`jsx
function MyComponent(props) {
  return (
    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>My Component</Text>
    </View>
  );
}

<TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => alert('Pressed!')}>
  <MyComponent />
</TouchableHighlight>;
\`\`\`

 
\`\`\`jsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {count ? count : null}
        </Text>
      </View>
    </View>
  );
}

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
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableHighlightExample;
\`\`\`

- # Reference[#](https://reactnative.dev/docs/touchablehighlight#reference)

  ## Props[#](https://reactnative.dev/docs/touchablehighlight#props)

  ### [TouchableWithoutFeedback Props](https://reactnative.dev/docs/touchablewithoutfeedback#props)[#](https://reactnative.dev/docs/touchablehighlight#touchablewithoutfeedback-props)

  Inherits [TouchableWithoutFeedback Props](https://reactnative.dev/docs/touchablewithoutfeedback#props).

  ------

  ###  activeOpacity [#](https://reactnative.dev/docs/touchablehighlight#activeopacity)

  Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires  underlayColor  to be set.

  | TYPE   | REQUIRED |
  | :----- | :------- |
  | number | No       |

  ------

  ###  onHideUnderlay [#](https://reactnative.dev/docs/touchablehighlight#onhideunderlay)

  Called immediately after the underlay is hidden.

  | TYPE     | REQUIRED |
  | :------- | :------- |
  | function | No       |

  ------

  ###  onShowUnderlay [#](https://reactnative.dev/docs/touchablehighlight#onshowunderlay)

  Called immediately after the underlay is shown.

  | TYPE     | REQUIRED |
  | :------- | :------- |
  | function | No       |

  ------

  ###  style [#](https://reactnative.dev/docs/touchablehighlight#style)

  | TYPE       | REQUIRED |
  | :--------- | :------- |
  | View.style | No       |

  ------

  ###  underlayColor [#](https://reactnative.dev/docs/touchablehighlight#underlaycolor)

  The color of the underlay that will show through when the touch is active.

  | TYPE                                         | REQUIRED |
  | :------------------------------------------- | :------- |
  | [color](https://reactnative.dev/docs/colors) | No       |

  ------

  ###  hasTVPreferredFocus [#](https://reactnative.dev/docs/touchablehighlight#hastvpreferredfocus)

  *(Apple TV only)* TV preferred focus (see documentation for the View component).

  | TYPE | REQUIRED | PLATFORM |
  | :--- | :------- | :------- |
  | bool | No       | iOS      |

  ------

  ###  nextFocusDown [#](https://reactnative.dev/docs/touchablehighlight#nextfocusdown)

  TV next focus down (see documentation for the View component).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusForward [#](https://reactnative.dev/docs/touchablehighlight#nextfocusforward)

  TV next focus forward (see documentation for the View component).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusLeft [#](https://reactnative.dev/docs/touchablehighlight#nextfocusleft)

  TV next focus left (see documentation for the View component).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusRight [#](https://reactnative.dev/docs/touchablehighlight#nextfocusright)

  TV next focus right (see documentation for the View component).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusUp [#](https://reactnative.dev/docs/touchablehighlight#nextfocusup)

  TV next focus up (see documentation for the View component).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  testOnly_pressed [#](https://reactnative.dev/docs/touchablehighlight#testonly_pressed)

  Handy for snapshot tests.

  | TYPE | REQUIRED |
  | :--- | :------- |
  | bool | No       |


`;