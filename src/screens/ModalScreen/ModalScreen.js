import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
// import { } from './ModalScreen.styles';

const ModalScreen = ({ navigation, route }) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.centeredView}>
        <View style={[styles.modalView, {width: windowWidth}]}>
            {route.params.exampleFile}
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  modalView: {
      backgroundColor: "white",
      flex: 1,

  },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
  },
  buttonOpen: {
      backgroundColor: "#F194FF",
  },
  buttonClose: {
      backgroundColor: "#2196F3",
  },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center"
  }
});
