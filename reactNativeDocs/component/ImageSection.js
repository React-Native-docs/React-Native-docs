import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

{/*
  <ImageSection type="full"/>
위 또는 아래로 사용하면 될듯.
  <ImageSection style={styles.asdasd}/>
*/}

export default ImageSection = (props) => {
  let ImageStyle = null;
  if (props.style)
    ImageStyle = props.style;
  else if (props.type == "full")
    ImageStyle = styles.imagefull;
  else if (props.type == "h100")
    ImageStyle = styles.h100;
  else if (props.type == "h200")
    ImageStyle = styles.h200;
  else if (props.type == "h600")
    ImageStyle = styles.h600;
  return (
    <View>
      <Image source={props.source} style={ImageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagefull: {
    width: windowWidth,
    height: windowHeight / 3,
    resizeMode: "cover"
  },
  h100: {
    width: windowWidth,
    height: 100,
    resizeMode: "cover"
  },
  h200: {
    width: windowWidth,
    height: 200,
    resizeMode: "cover"
  },
  h600: {
    width: windowWidth,
    height: 600,
    resizeMode: "cover"
  },
});


