import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

{/*
  <CodeSection
  title={"첫줄 Code Examples 왼쪽 내용"}
  content={"asdasd\\asdasd\\asd"}/>
  
cotnet에서 \\="\" 기준으로 split */ }

export default CodeSection = (props) => {
  const str = String(props.content).split("\\");
  return (
    <View style={styles.cover}>
      <TouchableOpacity
        onPress={() => {
              props.navi.navigate(props.naviName);
          }}>
        <Text style={styles.title}>{props.title} Code Examples</Text>
        {str.map((content, key) => <Text key={key} style={styles.codesection}>{content}</Text>)}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  codesection: {
    fontSize: 13, //가로화면일 경우 폰트 키워주면 좋을듯
  },
  cover: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F7F6F3'
  },
  title: {
    fontSize: 12,
    paddingBottom: 10
  }
});
