`
# Modal

The Modal component is a basic way to present content above an enclosing view.

## Example[#]

\`\`\`jsx
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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

export default App;
\`\`\`

# Reference[#](https://reactnative.dev/docs/modal#reference)

## Props[#](https://reactnative.dev/docs/modal#props)

###  animated [#](https://reactnative.dev/docs/modal#animated)

> **Deprecated.** Use the [ animationType ](https://reactnative.dev/docs/modal#animationtype) prop instead.

------

###  animationType [#](https://reactnative.dev/docs/modal#animationtype)

The  animationType  prop controls how the modal animates.

Possible values:

-  slide  slides in from the bottom,
-  fade  fades into view,
-  none  appears without an animation.

| TYPE                                | DEFAULT |
| :---------------------------------- | :------ |
| enum( 'none' ,  'slide' ,  'fade' ) |  none   |

------

###  hardwareAccelerated  Android[#](https://reactnative.dev/docs/modal#hardwareaccelerated-android)

The  hardwareAccelerated  prop controls whether to force hardware acceleration for the underlying window.

| TYPE | DEFAULT |
| :--- | :------ |
| bool |  false  |

------

###  onDismiss  iOS[#](https://reactnative.dev/docs/modal#ondismiss-ios)

The  onDismiss  prop allows passing a function that will be called once the modal has been dismissed.

| TYPE     |
| :------- |
| function |

------

###  onOrientationChange  iOS[#](https://reactnative.dev/docs/modal#onorientationchange-ios)

The  onOrientationChange  callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.

| TYPE     |
| :------- |
| function |

------

###  onRequestClose [#](https://reactnative.dev/docs/modal#onrequestclose)

The  onRequestClose  callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that  BackHandler  events will not be emitted as long as the modal is open.

| TYPE                                   |
| :------------------------------------- |
| function RequiredAndroidTVfunction iOS |

------

###  onShow [#](https://reactnative.dev/docs/modal#onshow)

The  onShow  prop allows passing a function that will be called once the modal has been shown.

| TYPE     |
| :------- |
| function |

------

###  presentationStyle  iOS[#](https://reactnative.dev/docs/modal#presentationstyle-ios)

The  presentationStyle  prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.

Possible values:

-  fullScreen  covers the screen completely
-  pageSheet  covers portrait-width view centered (only on larger devices)
-  formSheet  covers narrow-width view centered (only on larger devices)
-  overFullScreen  covers the screen completely, but allows transparency

| TYPE                                                         | DEFAULT                                                      |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| enum( 'fullScreen' ,  'pageSheet' ,  'formSheet' ,  'overFullScreen' ) |  fullScreen  if  transparent = { false}  overFullScreen  if  transparent = { true}  |

------

###  statusBarTranslucent  Android[#](https://reactnative.dev/docs/modal#statusbartranslucent-android)

The  statusBarTranslucent  prop determines whether your modal should go under the system statusbar.

| TYPE | DEFAULT |
| :--- | :------ |
| bool | 'false' |

------

###  supportedOrientations  iOS[#](https://reactnative.dev/docs/modal#supportedorientations-ios)

The  supportedOrientations  prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.

> When using  presentationStyle  of  pageSheet  or  formSheet , this property will be ignored by iOS.

| TYPE                                                         | DEFAULT        |
| :----------------------------------------------------------- | :------------- |
| array of enums( 'portrait' ,  'portrait-upside-down' ,  'landscape' ,  'landscape-left' ,  'landscape-right' ) |  ['portrait']  |

------

###  transparent [#](https://reactnative.dev/docs/modal#transparent)

The  transparent  prop determines whether your modal will fill the entire view. Setting this to  true  will render the modal over a transparent background.

| TYPE | DEFAULT |
| :--- | :------ |
| bool | 'false' |

------

###  visible [#](https://reactnative.dev/docs/modal#visible)

The  visible  prop determines whether your modal is visible.

| TYPE | DEFAULT |
| :--- | :------ |
| bool | 'true'  |

`