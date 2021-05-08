`
# Text

A React component for displaying text.

 Text  supports nesting, styling, and touch handling.

In the following example, the nested title and body text will inherit the fontFamily  from styles.baseText , but the title provides its own additional styles.The title and body will stack on top of each other on account of the literal newlines:
 \`\`\`jsx
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = useState("This is not really a bird nest.");

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;
 \`\`\`
## Nested text[#](https://reactnative.dev/docs/text#nested-text)

Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text ( NSAttributedString  on iOS,  SpannableString  on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.
 \`\`\`jsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndBeautiful;
 \`\`\`

Behind the scenes, React Native converts this to a flat NSAttributedString or SpannableString that contains the following information:
 \`\`\`jsx
"I am bold and red"
0-9: bold
9-17: bold, red
 \`\`\`
## Containers[#](https://reactnative.dev/docs/text#containers)

The  <Text>  element is unique relative to layout: everything inside is no longer using the Flexbox layout but using text layout. This means that elements inside of a  <Text>  are no longer rectangles, but wrap when they see the end of the line.
 \`\`\`jsx
<Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>
// Text container: the text will be inline if the space allowed it
// |First part and second part|

// otherwise, the text will flow as if it was one
// |First part |
// |and second |
// |part       |

<View>
  <Text>First part and </Text>
  <Text>second part</Text>
</View>
// View container: each text is its own block
// |First part and|
// |second part   |

// otherwise, the text will flow in its own block
// |First part |
// |and        |
// |second part|
 \`\`\`
Limited Style Inheritance#
On the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:
 \`\`\`jsx
html {
  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
  font-size: 11px;
  color: #141823;
}
 \`\`\`
All elements in the document will inherit this font unless they or one of their parents specifies a new rule.

In React Native, we are more strict about it: **you must wrap all the text nodes inside of a  <Text>  component**. You cannot have a text node directly under a  <View> .
 \`\`\`jsx
// BAD: will raise exception, can't have a text node as child of a <View>
<View>
  Some text
</View>

// GOOD
<View>
  <Text>
    Some text
  </Text>
</View>
 \`\`\`
You also lose the ability to set up a default font for an entire subtree. Meanwhile,  fontFamily  only accepts a single font name, which is different from  font - family  in CSS. The recommended way to use consistent fonts and sizes across your application is to create a component  MyAppText  that includes them and use this component across your app. You can also use this component to make more specific components like  MyAppHeaderText  for other kinds of text.
 \`\`\`jsx
<View>
  <MyAppText>
    Text styled with the default font for the entire application
  </MyAppText>
  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
</View>
 \`\`\`
Assuming that MyAppText is a component that only renders out its children into a Text component with styling, then MyAppHeaderText can be defined as follows:
 \`\`\`jsx
class MyAppHeaderText extends Component {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>
          {this.props.children}
        </Text>
      </MyAppText>
    );
  }
}
 \`\`\`
Composing MyAppText in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.

React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.
 \`\`\`jsx
<Text style={{ fontWeight: 'bold' }}>
  I am bold
  <Text style={{ color: 'red' }}>and red</Text>
</Text>
 \`\`\`
We believe that this more constrained way to style text will yield better apps:

- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.
- (Implementor) The implementation of React Native is also simplified. We do not need to have a  fontFamily  field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.

------

# Reference[#](https://reactnative.dev/docs/text#reference)

## Props[#](https://reactnative.dev/docs/text#props)

###  accessibilityHint [#](https://reactnative.dev/docs/text#accessibilityhint)

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| TYPE   |
| :----- |
| string |

------

###  accessibilityLabel [#](https://reactnative.dev/docs/text#accessibilitylabel)

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the  Text  nodes separated by space.

| TYPE   |
| :----- |
| string |

------

###  accessibilityRole [#](https://reactnative.dev/docs/text#accessibilityrole)

Tells the screen reader to treat the currently focused on element as having a specific role.

On iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both 'image' and 'button'. See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilitytraits-ios) for more information.

On Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS

| TYPE                                                         |
| :----------------------------------------------------------- |
| [AccessibilityRole](https://reactnative.dev/docs/accessibility#accessibilityrole) |

------

###  accessibilityState [#](https://reactnative.dev/docs/text#accessibilitystate)

Tells the screen reader to treat the currently focused on element as being in a specific state.

You can provide one state, no state, or multiple states. The states must be passed in through an object. Ex:  { selected: true, disabled: true }  .

| TYPE                                                         |
| :----------------------------------------------------------- |
| [AccessibilityState](https://reactnative.dev/docs/accessibility#accessibilitystate) |

------

###  accessible [#](https://reactnative.dev/docs/text#accessible)

When set to  true , indicates that the view is an accessibility element.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessible-ios-android) for more information.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  true   |

------

###  adjustsFontSizeToFit [#](https://reactnative.dev/docs/text#adjustsfontsizetofit)

Specifies whether fonts should be scaled down automatically to fit given style constraints.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  false  |

------

###  allowFontScaling [#](https://reactnative.dev/docs/text#allowfontscaling)

Specifies whether fonts should scale to respect Text Size accessibility settings.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  true   |

------

###  android_hyphenationFrequency  Android[#](https://reactnative.dev/docs/text#android_hyphenationfrequency-android)

Sets the frequency of automatic hyphenation to use when determining word breaks on Android API Level 23+.

| TYPE                                             | DEFAULT  |
| :----------------------------------------------- | :------- |
| enum( 'none' ,  'full' ,  'balanced' ,  'high' ) |  'none'  |

------

###  dataDetectorType  Android[#](https://reactnative.dev/docs/text#datadetectortype-android)

Determines the types of data converted to clickable URLs in the text element. By default no data types are detected.

You can provide only one type.

| TYPE                                                         | DEFAULT  |
| :----------------------------------------------------------- | :------- |
| enum( 'phoneNumber' ,  'link' ,  'email' ,  'none' ,  'all' ) |  'none'  |

------

###  disabled  Android[#](https://reactnative.dev/docs/text#disabled-android)

Specifies the disabled state of the text view for testing purposes.

| TYPE | DEFAULT |
| :--- | :------ |
| bool |  false  |

------

###  ellipsizeMode [#](https://reactnative.dev/docs/text#ellipsizemode)

When  numberOfLines  is set, this prop defines how text will be truncated.  numberOfLines  must be set in conjunction with this prop.

This can be one of the following values:

-  head  - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
-  middle  - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
-  tail  - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
-  clip  - Lines are not drawn past the edge of the text container.

> On Android, when  numberOfLines  is set to value higher then  1 , only  tail  value will work correctly.

| TYPE                                           | DEFAULT |
| :--------------------------------------------- | :------ |
| enum( 'head' ,  'middle' ,  'tail' ,  'clip' ) |  tail   |

------

###  maxFontSizeMultiplier [#](https://reactnative.dev/docs/text#maxfontsizemultiplier)

Specifies largest possible scale a font can reach when  allowFontScaling  is enabled. Possible values:

-  null / undefined : inherit from the parent node or the global default (0)
-  0 : no max, ignore parent/global default
-  >= 1 : sets the  maxFontSizeMultiplier  of this node to this value

| TYPE   | DEFAULT     |
| :----- | :---------- |
| number |  undefined  |

------

###  minimumFontScale  iOS[#](https://reactnative.dev/docs/text#minimumfontscale-ios)

Specifies smallest possible scale a font can reach when  adjustsFontSizeToFit  is enabled. (values 0.01-1.0).

| TYPE   |
| :----- |
| number |

------

###  nativeID [#](https://reactnative.dev/docs/text#nativeid)

Used to locate this view from native code.

| TYPE   |
| :----- |
| string |

------

###  numberOfLines [#](https://reactnative.dev/docs/text#numberoflines)

Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number. Setting this property to  0  will result in unsetting this value, which means that no lines restriction will be applied.

This prop is commonly used with  ellipsizeMode .

| TYPE   | DEFAULT |
| :----- | :------ |
| number |  0      |

------

###  onLayout [#](https://reactnative.dev/docs/text#onlayout)

Invoked on mount and on layout changes.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([LayoutEvent](https://reactnative.dev/docs/layoutevent)) => void |

------

###  onLongPress [#](https://reactnative.dev/docs/text#onlongpress)

This function is called on long press.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onMoveShouldSetResponder [#](https://reactnative.dev/docs/text#onmoveshouldsetresponder)

Does this view want to "claim" touch responsiveness? This is called for every touch move on the  View  when it is not the responder.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => boolean |

------

###  onPress [#](https://reactnative.dev/docs/text#onpress)

This function is called on press.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onResponderGrant [#](https://reactnative.dev/docs/text#onrespondergrant)

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onResponderMove [#](https://reactnative.dev/docs/text#onrespondermove)

The user is moving their finger.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onResponderRelease [#](https://reactnative.dev/docs/text#onresponderrelease)

Fired at the end of the touch.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onResponderTerminate [#](https://reactnative.dev/docs/text#onresponderterminate)

The responder has been taken from the  View . Might be taken by other views after a call to  onResponderTerminationRequest , or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => void |

------

###  onResponderTerminationRequest [#](https://reactnative.dev/docs/text#onresponderterminationrequest)

Some other  View  wants to become responder and is asking this  View  to release its responder. Returning  true  allows its release.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => boolean |

------

###  onStartShouldSetResponderCapture [#](https://reactnative.dev/docs/text#onstartshouldsetrespondercapture)

If a parent  View  wants to prevent a child  View  from becoming responder on a touch start, it should have this handler which returns  true .

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([PressEvent](https://reactnative.dev/docs/pressevent)) => boolean |

------

###  onTextLayout [#](https://reactnative.dev/docs/text#ontextlayout)

Invoked on Text layout change.

| TYPE                                                         |
| :----------------------------------------------------------- |
| ([ TextLayoutEvent ](https://reactnative.dev/docs/text#textlayoutevent)) => mixed |

------

###  pressRetentionOffset [#](https://reactnative.dev/docs/text#pressretentionoffset)

When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.

| TYPE                                              |
| :------------------------------------------------ |
| [Rect](https://reactnative.dev/docs/rect), number |

------

###  selectable [#](https://reactnative.dev/docs/text#selectable)

Lets the user select text, to use the native copy and paste functionality.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  false  |

------

###  selectionColor  Android[#](https://reactnative.dev/docs/text#selectioncolor-android)

The highlight color of the text.

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

------

###  style [#](https://reactnative.dev/docs/text#style)

| TYPE                                                         |
| :----------------------------------------------------------- |
| [Text Style](https://reactnative.dev/docs/text-style-props), [View Style Props](https://reactnative.dev/docs/view-style-props) |

------

###  suppressHighlighting  iOS[#](https://reactnative.dev/docs/text#suppresshighlighting-ios)

When  true , no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  false  |

------

###  testID [#](https://reactnative.dev/docs/text#testid)

Used to locate this view in end-to-end tests.

| TYPE   |
| :----- |
| string |

------

###  textBreakStrategy  Android[#](https://reactnative.dev/docs/text#textbreakstrategy-android)

Set text break strategy on Android API Level 23+, possible values are  simple ,  highQuality ,  balanced .

| TYPE                                            | DEFAULT       |
| :---------------------------------------------- | :------------ |
| enum( 'simple' ,  'highQuality' ,  'balanced' ) |  highQuality  |

## Type Definitions[#](https://reactnative.dev/docs/text#type-definitions)

### TextLayout[#](https://reactnative.dev/docs/text#textlayout)

 TextLayout  object is a part of [ TextLayoutEvent ](https://reactnative.dev/docs/text#textlayoutevent) callback and contains the measurement data for  Text  line.

#### Example[#](https://reactnative.dev/docs/text#example)
 \`\`\`jsx
{
    capHeight: 10.496,
    ascender: 14.624,
    descender: 4,
    width: 28.224,
    height: 18.624,
    xHeight: 6.048,
    x: 0,
    y: 0
}

 \`\`\`
#### Properties[#](https://reactnative.dev/docs/text#properties)

| NAME      | TYPE   | OPTIONAL | DESCRIPTION                                                  |
| :-------- | :----- | :------- | :----------------------------------------------------------- |
| ascender  | number | No       | The line ascender height after the text layout changes.      |
| capHeight | number | No       | Height of capital letter above the baseline.                 |
| descender | number | No       | The line descender height after the text layout changes.     |
| height    | number | No       | Height of the line after the text layout changes.            |
| width     | number | No       | Width of the line after the text layout changes.             |
| x         | number | No       | Line X coordinate inside the Text component.                 |
| xHeight   | number | No       | Distance between the baseline and median of the line (corpus size). |
| y         | number | No       | Line Y coordinate inside the Text component.                 |

### TextLayoutEvent[#](https://reactnative.dev/docs/text#textlayoutevent)

 TextLayoutEvent  object is returned in the callback as a result of component layout change. It contains a key called  lines  with a value which is an array containing [ TextLayout ](https://reactnative.dev/docs/text#textlayout) object corresponeded to every rendered text line.

#### Example[#](https://reactnative.dev/docs/text#example-1)
 \`\`\`jsx
{
  lines: [
    TextLayout,
    TextLayout
    // ...
  ];
  target: 1127;
}
 \`\`\`
#### Properties[#](https://reactnative.dev/docs/text#properties-1)

| NAME   | TYPE                                                         | OPTIONAL | DESCRIPTION                                           |
| :----- | :----------------------------------------------------------- | :------- | :---------------------------------------------------- |
| lines  | array of [TextLayout](https://reactnative.dev/docs/text#textlayout)s | No       | Provides the TextLayout data for every rendered line. |
| target | number                                                       | No       | The node id of the element.                           |

## Known issues[#](https://reactnative.dev/docs/text#known-issues)

- [react-native#22811](https://github.com/facebook/react-native/issues/22811): Nested Text elements do not support  numberOfLines  attribute
`