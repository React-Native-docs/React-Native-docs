import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

{/*
	ㅇ content
  <BulletedList content="asd"/>
*/}

export default BulletedList = (props) => {
  return (
			<Text style={styles.text}>  ●  {props.content}</Text>
  );
}

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		padding: 10
  },
});


