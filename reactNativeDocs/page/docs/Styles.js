import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const P = (props) => {
  return (
    <Text style={Styles.p10}>{props.content}</Text>
  );
}

export const H1 = (props) => {
  return (
    <Text style={Styles.h1}>{props.content}</Text>
  );
}

export const H2 = (props) => {
  return (
    <Text style={Styles.h2}>{props.content}</Text>
  );
}

export const H3 = (props) => {
  return (
    <Text style={Styles.h3}>{props.content}</Text>
  );
}

export const H4 = (props) => {
  return (
    <Text style={Styles.h4}>{props.content}</Text>
  );
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  p10: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  h1: {
    fontSize: 30,
    padding: 10
  },
  h2: {
    fontSize: 25,
    padding: 10
  },
  h3: {
    fontSize: 20,
    padding: 10
  },
  h4: {
    fontSize: 15,
    padding: 10
  },
  white: {
    backgroundColor: 'white',
  }
})