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
export default PageImageBackground = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# ImageBackground

A common feature request from developers familiar with the web is\`background-image\`.To handle this use case, you can use the\`<ImageBackground>\` component, which has the same props as \`<Image>\`, and add whatever children to it you would like to layer on top of it.

You might not want to use\`<ImageBackground>\` in some cases, since the implementation is basic.Refer to\`<ImageBackground>\`'s [source code](https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js) for more insight, and create your own custom component when needed.

Note that you must specify some width and height style attributes.
\`\`\`jsx
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
	<View style={styles.container}>
		<ImageBackground source={image} style={styles.image}>
			<Text style={styles.text}>Inside</Text>
		</ImageBackground>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 42,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000a0"
	}
});

export default App;
\`\`\`

# Reference[#](https://reactnative.dev/docs/imagebackground#reference)

## Props[#](https://reactnative.dev/docs/imagebackground#props)

### [Image Props](https://reactnative.dev/docs/image#props)[#](https://reactnative.dev/docs/imagebackground#image-props)

Inherits [Image Props](https://reactnative.dev/docs/image#props).

------

### \`imageStyle\`[#](https://reactnative.dev/docs/imagebackground#imagestyle)

| TYPE                                                         |
| :----------------------------------------------------------- |
| [Image Style](https://reactnative.dev/docs/image-style-props) |

### \`imageRef\`[#](https://reactnative.dev/docs/imagebackground#imageref)

Allows to set a reference to the inner \`Image\` component

| TYPE                                                  |
| :---------------------------------------------------- |
| [Ref](https://reactjs.org/docs/refs-and-the-dom.html) |

### \`style\`[#](https://reactnative.dev/docs/imagebackground#style)

| TYPE          |
| :------------ |
| [View Style]( |
`;