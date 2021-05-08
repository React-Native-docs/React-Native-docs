`
# StatusBar

Component to control the app status bar.

### Usage with Navigator[#](https://reactnative.dev/docs/statusbar#usage-with-navigator)

	It is possible to have multiple StatusBar  components mounted at the same time.The props will be merged in the order the StatusBar  components were mounted.

 \`\`\`jsx
import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
      <Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <Button
          title="Toggle StatusBar"
          onPress={changeStatusBarVisibility} />
        <Button
          title="Change StatusBar Style"
          onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

export default App;
 \`\`\`
### Imperative API[#](https://reactnative.dev/docs/statusbar#imperative-api)

For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render.

------

# Reference[#](https://reactnative.dev/docs/statusbar#reference)

## Constants[#](https://reactnative.dev/docs/statusbar#constants)

###  currentHeight  Android[#](https://reactnative.dev/docs/statusbar#currentheight-android)

The height of the status bar, which includes the notch height, if present.

------

## Props[#](https://reactnative.dev/docs/statusbar#props)

###  animated [#](https://reactnative.dev/docs/statusbar#animated)

If the transition between status bar property changes should be animated. Supported for  backgroundColor ,  barStyle  and  hidden  properties.

| TYPE    | REQUIRED | DEFAULT |
| :------ | :------- | :------ |
| boolean | No       |  false  |

------

###  backgroundColor  Android[#](https://reactnative.dev/docs/statusbar#backgroundcolor-android)

The background color of the status bar.

| TYPE                                         | REQUIRED | DEFAULT                                                      |
| :------------------------------------------- | :------- | :----------------------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) | No       | default system StatusBar background color, or  'black'  if not defined |

------

###  barStyle [#](https://reactnative.dev/docs/statusbar#barstyle)

Sets the color of the status bar text.

On Android, this will only have an impact on API versions 23 and above.

| TYPE                                                         | REQUIRED | DEFAULT     |
| :----------------------------------------------------------- | :------- | :---------- |
| [StatusBarStyle](https://reactnative.dev/docs/statusbar#statusbarstyle) | No       |  'default'  |

------

###  hidden [#](https://reactnative.dev/docs/statusbar#hidden)

If the status bar is hidden.

| TYPE    | REQUIRED | DEFAULT |
| :------ | :------- | :------ |
| boolean | No       |  false  |

------

###  networkActivityIndicatorVisible  iOS[#](https://reactnative.dev/docs/statusbar#networkactivityindicatorvisible-ios)

If the network activity indicator should be visible.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  false  |

------

###  showHideTransition  iOS[#](https://reactnative.dev/docs/statusbar#showhidetransition-ios)

The transition effect when showing and hiding the status bar using the  hidden  prop.

| TYPE                                                         | DEFAULT  |
| :----------------------------------------------------------- | :------- |
| [StatusBarAnimation](https://reactnative.dev/docs/statusbar#statusbaranimation) |  'fade'  |

------

###  translucent  Android[#](https://reactnative.dev/docs/statusbar#translucent-android)

If the status bar is translucent. When translucent is set to  true , the app will draw under the status bar. This is useful when using a semi transparent status bar color.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |  false  |

## Methods[#](https://reactnative.dev/docs/statusbar#methods)

###  popStackEntry() 
Get and remove the last StatusBar entry from the stack.

**Parameters:**

| NAME           | TYPE | DESCRIPTION                           |
| :------------- | :--- | :------------------------------------ |
| entry Required | any  | Entry returned from  pushStackEntry . |

------

###  pushStackEntry() [#](https://reactnative.dev/docs/statusbar#pushstackentry)
static pushStackEntry(props: any)
Push a StatusBar entry onto the stack. The return value should be passed to  popStackEntry  when complete.

**Parameters:**

| NAME           | TYPE | DESCRIPTION                                                  |
| :------------- | :--- | :----------------------------------------------------------- |
| props Required | any  | Object containing the StatusBar props to use in the stack entry. |

------

###  replaceStackEntry() [#](https://reactnative.dev/docs/statusbar#replacestackentry)

static replaceStackEntry(entry: any, props: any)

Replace an existing StatusBar stack entry with new props.

**Parameters:**

| NAME           | TYPE | DESCRIPTION                                                  |
| :------------- | :--- | :----------------------------------------------------------- |
| entry Required | any  | Entry returned from  pushStackEntry  to replace.             |
| props Required | any  | Object containing the StatusBar props to use in the replacement stack entry. |

------

###  setBackgroundColor()  Android[#](https://reactnative.dev/docs/statusbar#setbackgroundcolor-android)

static setBackgroundColor(color: string, [animated]: boolean)

Set the background color for the status bar.

**Parameters:**

| NAME           | TYPE    | DESCRIPTION               |
| :------------- | :------ | :------------------------ |
| color Required | string  | Background color.         |
| animated       | boolean | Animate the style change. |

------

###  setBarStyle() [#](https://reactnative.dev/docs/statusbar#setbarstyle)

static setBarStyle(style: StatusBarStyle, [animated]: boolean)

Set the status bar style.

**Parameters:**

| NAME           | TYPE                                                         | DESCRIPTION               |
| :------------- | :----------------------------------------------------------- | :------------------------ |
| style Required | [StatusBarStyle](https://reactnative.dev/docs/statusbar#statusbarstyle) | Status bar style to set.  |
| animated       | boolean                                                      | Animate the style change. |

------

###  setHidden() [#](https://reactnative.dev/docs/statusbar#sethidden)

static setHidden(hidden: boolean, [animation]: StatusBarAnimation)

Show or hide the status bar.

**Parameters:**

| NAME            | TYPE                                                         | DESCRIPTION                                             |
| :-------------- | :----------------------------------------------------------- | :------------------------------------------------------ |
| hidden Required | boolean                                                      | Hide the status bar.                                    |
| animation iOS   | [StatusBarAnimation](https://reactnative.dev/docs/statusbar#statusbaranimation) | Animation when changing the status bar hidden property. |

------

###  setNetworkActivityIndicatorVisible()  iOS[#](https://reactnative.dev/docs/statusbar#setnetworkactivityindicatorvisible-ios)

static setNetworkActivityIndicatorVisible(visible: boolean)

Control the visibility of the network activity indicator.

**Parameters:**

| NAME             | TYPE    | DESCRIPTION         |
| :--------------- | :------ | :------------------ |
| visible Required | boolean | Show the indicator. |

------

###  setTranslucent()  Android[#](https://reactnative.dev/docs/statusbar#settranslucent-android)

static setTranslucent(translucent: boolean)

Control the translucency of the status bar.

**Parameters:**

| NAME                 | TYPE    | DESCRIPTION         |
| :------------------- | :------ | :------------------ |
| translucent Required | boolean | Set as translucent. |

## Type Definitions[#](https://reactnative.dev/docs/statusbar#type-definitions)

### StatusBarAnimation[#](https://reactnative.dev/docs/statusbar#statusbaranimation)

Status bar animation type for transitions on the iOS.

| TYPE |
| :--- |
| enum |

**Constants:**

| VALUE     | TYPE   | DESCRIPTION     |
| :-------- | :----- | :-------------- |
|  'fade'   | string | Fade animation  |
|  'slide'  | string | Slide animation |
|  'none'   | string | No animation    |

------

### StatusBarStyle[#](https://reactnative.dev/docs/statusbar#statusbarstyle)

Status bar style type.

| TYPE |
| :--- |
| enum |

**Constants:**

| VALUE             | TYPE   | DESCRIPTION                                                  |
| :---------------- | :----- | :----------------------------------------------------------- |
|  'default'        | string | Default status bar style (dark for iOS, light for Android)   |
|  'light-content'  | string | Dark background, white texts and icons                       |
|  'dark-content'   | string | Light background, dark texts and icons (requires API>=23 on Android) |


`