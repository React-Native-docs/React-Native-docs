import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-package';
import markdownStyle from '~/styles/markdownStyle';
import { Linking, Modal } from "react-native";
export default PageModal = (props) => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<Markdown
				styles={markdownStyle.collectiveMd}
				onLink={(url) => Linking.openURL(url)}
			>
				{text1}
			</Markdown>
		</ScrollView>
	)
}

const text1 = `
	aaaaaaaa
`;