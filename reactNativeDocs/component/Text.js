import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default FtText = () => {
	return (
		<View style={styles.hyunaContainer}>
			<Text style={{color: 'white', fontSize: 50}}>this is text.js</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	hyunaContainer: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
