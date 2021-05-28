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
export default PagePressable = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# Pressable

Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

\`\`\`jsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
\`\`\`

## How it works[#](https://reactnative.dev/docs/pressable#how-it-works)

On an element wrapped by   Pressable  :

- [  onPressIn  ](https://reactnative.dev/docs/pressable#onpressin) is called when a press is activated.
- [  onPressOut  ](https://reactnative.dev/docs/pressable#onpressout) is called when the press gesture is deactivated.

After pressing [  onPressIn  ](https://reactnative.dev/docs/pressable#onpressin), one of two things will happen:

1. The person will remove their finger, triggering [  onPressOut  ](https://reactnative.dev/docs/pressable#onpressout) followed by [  onPress  ](https://reactnative.dev/docs/pressable#onpress).
	2. If the person leaves their finger longer than 500 milliseconds before removing it, [  onLongPress  ](https://reactnative.dev/docs/pressable#onlongpress) is triggered. ([  onPressOut  ](https://reactnative.dev/docs/pressable#onpressout) will still fire when they remove their finger.)

		Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area.To help,   Pressable   has an optional  HitRect   you can use to define how far a touch can register away from the wrapped element.Presses can start anywhere within a  HitRect  .

  PressRect   allows presses to move beyond the element and its  HitRect   while maintaining activation and being eligible for a "press"—think of sliding your finger slowly away from a button you're pressing down on.

> The touch area never extends past the parent view bounds and the Z 
- index of sibling views always takes precedence if a touch hits two overlapping views.

![Diagram of HitRect and PressRect and how they work.](https://reactnative.dev/docs/assets/d_pressable_anatomy.svg)You can set   HitRect   with   hitSlop   and set   PressRect   with   pressRetentionOffset  .

>   Pressable   uses React Native's   Pressability   API. For more information around the state machine flow of Pressability and how it works, check out the implementation for [Pressability](https://github.com/facebook/react-native/blob/16ea9ba8133a5340ed6751ec7d49bf03a0d4c5ea/Libraries/Pressability/Pressability.js#L347).

> ## Example[#](https://reactnative.dev/docs/pressable#example)

\`\`\`jsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;
\`\`\`

## Props[#](https://reactnative.dev/docs/pressable#props)

###   android_disableSound   Android[#](https://reactnative.dev/docs/pressable#android_disablesound-android)

If true, doesn't play Android system sound on press.

| TYPE    | REQUIRED | DEFAULT |
| :------ | :------- | :------ |
| boolean | No       |   false   |

###   android_ripple   Android[#](https://reactnative.dev/docs/pressable#android_ripple-android)

Enables the Android ripple effect and configures its properties.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| [RippleConfig](https://reactnative.dev/docs/pressable#rippleconfig) | No       |

###   children  [#](https://reactnative.dev/docs/pressable#children)

Either children or a function that receives a boolean reflecting whether the component is currently pressed.

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [React Node](https://reactnative.dev/docs/react-node) | No       |

###   unstable_pressDelay  [#](https://reactnative.dev/docs/pressable#unstable_pressdelay)

Duration (in milliseconds) to wait after press down before calling   onPressIn  .

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

###   delayLongPress  [#](https://reactnative.dev/docs/pressable#delaylongpress)

Duration (in milliseconds) from   onPressIn   before   onLongPress   is called.

| TYPE   | REQUIRED | DEFAULT |
| :----- | :------- | :------ |
| number | No       |   500     |

###   disabled  [#](https://reactnative.dev/docs/pressable#disabled)

Whether the press behavior is disabled.

| TYPE    | REQUIRED | DEFAULT |
| :------ | :------- | :------ |
| boolean | No       |   false   |

###   hitSlop  [#](https://reactnative.dev/docs/pressable#hitslop)

Sets additional distance outside of element in which a press can be detected.

| TYPE                                                | REQUIRED |
| :-------------------------------------------------- | :------- |
| [Rect](https://reactnative.dev/docs/rect) or number | No       |

###   onLongPress  [#](https://reactnative.dev/docs/pressable#onlongpress)

Called if the time after   onPressIn   lasts longer than 500 milliseconds. This time period can be customized with [  delayLongPress  ](https://reactnative.dev/docs/pressable#delaylongpress).

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

###   onPress  [#](https://reactnative.dev/docs/pressable#onpress)

Called after   onPressOut  .

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

###   onPressIn  [#](https://reactnative.dev/docs/pressable#onpressin)

Called immediately when a touch is engaged, before   onPressOut   and   onPress  .

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

###   onPressOut  [#](https://reactnative.dev/docs/pressable#onpressout)

Called when a touch is released.

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

###   pressRetentionOffset  [#](https://reactnative.dev/docs/pressable#pressretentionoffset)

Additional distance outside of this view in which a touch is considered a press before   onPressOut   is triggered.

| TYPE                                                | REQUIRED | DEFAULT                                        |
| :-------------------------------------------------- | :------- | :--------------------------------------------- |
| [Rect](https://reactnative.dev/docs/rect) or number | No       |   { bottom: 30, *left: 20,* right: 20, *top: 20 }*   |

###   style  [#](https://reactnative.dev/docs/pressable#style)

Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles.

| TYPE                                                        | REQUIRED |
| :---------------------------------------------------------- | :------- |
| [View Style](https://reactnative.dev/docs/view-style-props) | No       |

###   testOnly_pressed  [#](https://reactnative.dev/docs/pressable#testonly_pressed)

Used only for documentation or testing (e.g. snapshot testing).

| TYPE    | REQUIRED | DEFAULT |
| :------ | :------- | :------ |
| boolean | No       |   false   |

## Type Definitions[#](https://reactnative.dev/docs/pressable#type-definitions)

### RippleConfig[#](https://reactnative.dev/docs/pressable#rippleconfig)

Ripple effect configuration for the   android_ripple   property.

| TYPE   |
| :----- |
| object |

**Properties:**

| NAME       | TYPE                                         | REQUIRED | DESCRIPTION                                         |
| :--------- | :------------------------------------------- | :------- | :-------------------------------------------------- |
| color      | [color](https://reactnative.dev/docs/colors) | No       | *Defines the* color of *the ripple*effect.             |
| borderless | boolean                                      | No       | Defines if *ripple effect* should not *include border.* |
| radius     | number                                       | No       | *Defines the* radius of the *ripple effect.*           |
`;