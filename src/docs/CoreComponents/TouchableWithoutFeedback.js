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
export default PageTouchableWithoutFeedback = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# TouchableWithoutFeedback

	> If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](https://reactnative.dev/docs/pressable) API.

Do not use unless you have a very good reason.All elements that respond to press should have a visual feedback when touched.

 TouchableWithoutFeedback  supports only one child.If you wish to have several child components, wrap them in a View.Importantly,  TouchableWithoutFeedback  works by cloning its child and applying responder props to it.It is therefore required that any intermediary components pass through those props to the underlying React Native component.

## Usage Pattern[#](https://reactnative.dev/docs/touchablewithoutfeedback#usage-pattern)
\'\'\'jsx
function MyComponent(props) {
  return (
    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>My Component</Text>
    </View>
  );
}

<TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
  <MyComponent />
</TouchableWithoutFeedback>;
\'\'\'
Example[#](https://reactnative.dev/docs/touchablewithoutfeedback#example)
\'\'\'jsx
import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
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

export default TouchableWithoutFeedbackExample;
\'\'\'
# Reference[#](https://reactnative.dev/docs/touchablewithoutfeedback#reference)

## Props[#](https://reactnative.dev/docs/touchablewithoutfeedback#props)

###  accessibilityIgnoresInvertColors [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilityignoresinvertcolors)

| TYPE    | REQUIRED |
| :------ | :------- |
| Boolean | No       |

------

###  accessible [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessible)

When  true , indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  accessibilityLabel [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilitylabel)

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the  Text  nodes separated by space.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityHint [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilityhint)

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityRole [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilityrole)

 accessibilityRole  communicates the purpose of a component to the user of an assistive technology.

 accessibilityRole  can be one of the following:

-  'none'  - Used when the element has no role.
-  'button'  - Used when the element should be treated as a button.
-  'link'  - Used when the element should be treated as a link.
-  'search'  - Used when the text field element should also be treated as a search field.
-  'image'  - Used when the element should be treated as an image. Can be combined with button or link, for example.
-  'keyboardkey'  - Used when the element acts as a keyboard key.
-  'text'  - Used when the element should be treated as static text that cannot change.
-  'adjustable'  - Used when an element can be "adjusted" (e.g. a slider).
-  'imagebutton'  - Used when the element should be treated as a button and is also an image.
-  'header'  - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
-  'summary'  - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
-  'alert'  - Used when an element contains important text to be presented to the user.
-  'checkbox'  - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
-  'combobox'  - Used when an element represents a combo box, which allows the user to select among several choices.
-  'menu'  - Used when the component is a menu of choices.
-  'menubar'  - Used when a component is a container of multiple menus.
-  'menuitem'  - Used to represent an item within a menu.
-  'progressbar'  - Used to represent a component which indicates progress of a task.
-  'radio'  - Used to represent a radio button.
-  'radiogroup'  - Used to represent a group of radio buttons.
-  'scrollbar'  - Used to represent a scroll bar.
-  'spinbutton'  - Used to represent a button which opens a list of choices.
-  'switch'  - Used to represent a switch which can be turned on and off.
-  'tab'  - Used to represent a tab.
-  'tablist'  - Used to represent a list of tabs.
-  'timer'  - Used to represent a timer.
-  'toolbar'  - Used to represent a tool bar (a container of action buttons or components).

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityState [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilitystate)

Describes the current state of a component to the user of an assistive technology.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilitystate-ios-android) for more information.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool} | No       |

------

###  accessibilityActions [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilityactions)

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The  accessibilityActions  property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibility-actions) for more information.

| TYPE  | REQUIRED |
| :---- | :------- |
| array | No       |

------

###  onAccessibilityAction [#](https://reactnative.dev/docs/touchablewithoutfeedback#onaccessibilityaction)

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibility-actions) for more information.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  accessibilityValue [#](https://reactnative.dev/docs/touchablewithoutfeedback#accessibilityvalue)

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android) for more information.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| object: {min: number, max: number, now: number, text: string} | No       |

------

###  delayLongPress [#](https://reactnative.dev/docs/touchablewithoutfeedback#delaylongpress)

Duration (in milliseconds) from  onPressIn  before  onLongPress  is called.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  delayPressIn [#](https://reactnative.dev/docs/touchablewithoutfeedback#delaypressin)

Duration (in milliseconds), from the start of the touch, before  onPressIn  is called.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  delayPressOut [#](https://reactnative.dev/docs/touchablewithoutfeedback#delaypressout)

Duration (in milliseconds), from the release of the touch, before  onPressOut  is called.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  disabled [#](https://reactnative.dev/docs/touchablewithoutfeedback#disabled)

If true, disable all interactions for this component.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  hitSlop [#](https://reactnative.dev/docs/touchablewithoutfeedback#hitslop)

This defines how far your touch can start away from the button. This is added to  pressRetentionOffset  when moving off of the button.

> The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

| TYPE                                                | REQUIRED |
| :-------------------------------------------------- | :------- |
| [Rect](https://reactnative.dev/docs/rect) or number | No       |

###  onBlur [#](https://reactnative.dev/docs/touchablewithoutfeedback#onblur)

Invoked when the item loses focus.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onFocus [#](https://reactnative.dev/docs/touchablewithoutfeedback#onfocus)

Invoked when the item receives focus.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onLayout [#](https://reactnative.dev/docs/touchablewithoutfeedback#onlayout)

Invoked on mount and on layout changes.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| ([LayoutEvent](https://reactnative.dev/docs/layoutevent)) => void | No       |

------

###  onLongPress [#](https://reactnative.dev/docs/touchablewithoutfeedback#onlongpress)

Called if the time after  onPressIn  lasts longer than 370 milliseconds. This time period can be customized with [ delayLongPress ](https://reactnative.dev/docs/touchablewithoutfeedback#delaylongpress).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onPress [#](https://reactnative.dev/docs/touchablewithoutfeedback#onpress)

Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock). The first function argument is an event in form of [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onPressIn [#](https://reactnative.dev/docs/touchablewithoutfeedback#onpressin)

Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests. The first function argument is an event in form of [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onPressOut [#](https://reactnative.dev/docs/touchablewithoutfeedback#onpressout)

Called as soon as the touch is released even before onPress. The first function argument is an event in form of [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  pressRetentionOffset [#](https://reactnative.dev/docs/touchablewithoutfeedback#pressretentionoffset)

When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.

| TYPE                                                | REQUIRED |
| :-------------------------------------------------- | :------- |
| [Rect](https://reactnative.dev/docs/rect) or number | No       |

------

###  nativeID [#](https://reactnative.dev/docs/touchablewithoutfeedback#nativeid)

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  testID [#](https://reactnative.dev/docs/touchablewithoutfeedback#testid)

Used to locate this view in end-to-end tests.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  touchSoundDisabled [#](https://reactnative.dev/docs/touchablewithoutfeedback#touchsounddisabled)

If true, doesn't play a system sound on touch.

| TYPE    | REQUIRED | PLATFORM |
| :------ | :------- | :------- |
| Boolean | No       | Android  |


`;