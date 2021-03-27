import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import {Styles as styles} from './Styles';

export default APIs = () => {
    return (
      <SafeAreaView>
        <Text>{Code1}</Text>
      </SafeAreaView>
    );
}



const Code1 = ' \
import React from "react"; \\\
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"; \\\
\\\
const App = () => (\\\
<View style={[styles.container, styles.horizontal]}>\\\
		<ActivityIndicator />\\\
		<ActivityIndicator size="large" />\\\
		<ActivityIndicator size="small" color="#0000ff" />\\\
		<ActivityIndicator size="large" color="#00ff00" />\\\
	</View>\\\
); \\\
\\\
const styles = StyleSheet.create({\\\
	container: {\\\
		flex: 1, \\\
		justifyContent: "center"\\\
	}, \\\
	horizontal: {\\\
	\\\
flexDirection: "row", \\\
justifyContent: "space-around", \\\
padding: 10\\\
	}\\\
}); \\\
export default App; \\\
';