import React from "react";
import {
	ScrollView,
} from "react-native";
import { OuterView } from "~/styles/innerpageStyle";
import {
	TextMarkdown,
	CodeMarkdown,
} from "~/components/Markdown/MarkdownBlock";
export default PageButton = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = 
	`
# Button

A basic button component that should render nicely on any platform.Supports a minimal level of customization.

If this button doesn't look right for your app, you can build your own button using [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) or [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback). For inspiration, look at the [source code for this button component](https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js). Or, take a look at the [wide variety of button components built by the community](https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button).

\`\`\`jsx
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
\`\`\`

## Example

\`\`\`jsx
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
\`\`\`

# 참조

## Props

###\`필수 **onPress**\`

Handler to be called when the user taps the button.

###\`필수 **title**\`

Text to display inside the button.On Android the given title will be converted to the uppercased form.

| TYPE   |
| ------ |
| String |

### \`accessibilityLabel\`[#](https://reactnative.dev/docs/button#accessibilitylabel)

Text to display for blindness accessibility features.

| TYPE   |
| ------ |
| String |

### \`color\`[#](https://reactnative.dev/docs/button#color)

Color of the text (iOS), or background color of the button (Android).

| TYPE  | DEFAULT                         |
| ----- | ------------------------------- |
| color | (파랑) '#2196F3' <Android 전용> |
|       | (진한 파랑)'#007AFF' <iOS 전용> |

### \`disabled\`[#](https://reactnative.dev/docs/button#disabled)

If \`true\`, disable all interactions for this component.

| TYPE | DEFAULT |
| ---- | ------- |
| Bool | False   |

### \`touchSoundDisabled\` **Android**[#](https://reactnative.dev/docs/button#touchsounddisabled-android)

If \`true\`, doesn't play system sound on touch.

| TYPE | DEFAULT |
| ---- | ------- |
| Bool | False   |
`
;