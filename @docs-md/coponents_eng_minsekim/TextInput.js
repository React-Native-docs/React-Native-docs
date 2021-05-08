`
# TextInput

A foundational component for inputting text into the app via a keyboard.Props provide configurability for several features, such as auto - correction, auto - capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

The most basic use case is to plop down a TextInput  and subscribe to the onChangeText  events to read the user input.There are also other events, such as  onSubmitEditing  and onFocus  that can be subscribed to.A minimal example:

 \`\`\`jsx
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UselessTextInput;
 \`\`\`
Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.

Note that some props are only available with multiline={true/false}. Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=true. To achieve the same effect, you can wrap your TextInput in a View:
 \`\`\`jsx
import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

export default UselessTextInputMultiline;
 \`\`\`
 TextInput  has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting  underlineColorAndroid  to transparent.

Note that on Android performing text selection in an input can change the app's activity  windowSoftInputMode  param to  adjustResize . This may cause issues with components that have position: 'absolute' while the keyboard is active. To avoid this behavior either specify  windowSoftInputMode  in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html ) or control this param programmatically with native code.

# Reference[#](https://reactnative.dev/docs/textinput#reference)

## Props[#](https://reactnative.dev/docs/textinput#props)

### [View Props](https://reactnative.dev/docs/view#props)[#](https://reactnative.dev/docs/textinput#view-props)

Inherits [View Props](https://reactnative.dev/docs/view#props).

------

###  allowFontScaling [#](https://reactnative.dev/docs/textinput#allowfontscaling)

Specifies whether fonts should scale to respect Text Size accessibility settings. The default is  true .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  autoCapitalize [#](https://reactnative.dev/docs/textinput#autocapitalize)

Tells  TextInput  to automatically capitalize certain characters. This property is not supported by some keyboard types such as  name - phone - pad .

-  characters : all characters.
-  words : first letter of each word.
-  sentences : first letter of each sentence (*default*).
-  none : don't auto capitalize anything.

| TYPE                                             | REQUIRED |
| :----------------------------------------------- | :------- |
| enum('none', 'sentences', 'words', 'characters') | No       |

------

###  autoCompleteType [#](https://reactnative.dev/docs/textinput#autocompletetype)

Specifies autocomplete hints for the system, so it can provide autofill. On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content. To disable autocomplete, set  autoCompleteType  to  off .

Possible values for  autoCompleteType  are:

-  off 
-  username 
-  password 
-  email 
-  name 
-  tel 
-  street - address 
-  postal - code 
-  cc - number 
-  cc - csc 
-  cc - exp 
-  cc - exp - month 
-  cc - exp - year 

| TYPE                                                         | REQUIRED | PLATFORM |
| :----------------------------------------------------------- | :------- | :------- |
| enum('off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year') | No       | Android  |

------

###  autoCorrect [#](https://reactnative.dev/docs/textinput#autocorrect)

If  false , disables auto-correct. The default value is  true .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  autoFocus [#](https://reactnative.dev/docs/textinput#autofocus)

If  true , focuses the input on  componentDidMount . The default value is  false .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  blurOnSubmit [#](https://reactnative.dev/docs/textinput#bluronsubmit)

If  true , the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting  blurOnSubmit  to  true  means that pressing return will blur the field and trigger the  onSubmitEditing  event instead of inserting a newline into the field.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  caretHidden [#](https://reactnative.dev/docs/textinput#carethidden)

If  true , caret is hidden. The default value is  false .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  clearButtonMode [#](https://reactnative.dev/docs/textinput#clearbuttonmode)

When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component. The default value is  never .

| TYPE                                                       | REQUIRED | PLATFORM |
| :--------------------------------------------------------- | :------- | :------- |
| enum('never', 'while-editing', 'unless-editing', 'always') | No       | iOS      |

------

###  clearTextOnFocus [#](https://reactnative.dev/docs/textinput#cleartextonfocus)

If  true , clears the text field automatically when editing begins.

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  contextMenuHidden [#](https://reactnative.dev/docs/textinput#contextmenuhidden)

If  true , context menu is hidden. The default value is  false .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  dataDetectorTypes [#](https://reactnative.dev/docs/textinput#datadetectortypes)

Determines the types of data converted to clickable URLs in the text input. Only valid if  multiline = { true}  and  editable = { false} . By default no data types are detected.

You can provide one type or an array of many types.

Possible values for  dataDetectorTypes  are:

-  'phoneNumber' 
-  'link' 
-  'address' 
-  'calendarEvent' 
-  'none' 
-  'all' 

| TYPE                                                         | REQUIRED | PLATFORM |
| :----------------------------------------------------------- | :------- | :------- |
| enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), ,array of enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all') | No       | iOS      |

------

###  defaultValue [#](https://reactnative.dev/docs/textinput#defaultvalue)

Provides an initial value that will change when the user starts typing. Useful for use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  disableFullscreenUI [#](https://reactnative.dev/docs/textinput#disablefullscreenui)

When  false , if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When  true , this feature is disabled and users will always edit the text directly inside of the text input. Defaults to  false .

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | Android  |

------

###  editable [#](https://reactnative.dev/docs/textinput#editable)

If  false , text is not editable. The default value is  true .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  enablesReturnKeyAutomatically [#](https://reactnative.dev/docs/textinput#enablesreturnkeyautomatically)

If  true , the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is  false .

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  importantForAutofill [#](https://reactnative.dev/docs/textinput#importantforautofill)

Tells the operating system whether the individual fields in your app should be included in a view structure for autofill purposes on Android API Level 26+. Possible values are  auto ,  no ,  noExcludeDescendants ,  yes , and  yesExcludeDescendants . The default value is  auto .

-  auto : Let the Android System use its heuristics to determine if the view is important for autofill.
-  no : This view isn't important for autofill.
-  noExcludeDescendants : This view and its children aren't important for autofill.
-  yes : This view is important for autofill.
-  yesExcludeDescendants : This view is important for autofill, but its children aren't important for autofill.

| TYPE                                                         | REQUIRED | PLATFORM |
| :----------------------------------------------------------- | :------- | :------- |
| enum('auto', 'no', 'noExcludeDescendants', 'yes', 'yesExcludeDescendants') | No       | Android  |

------

###  inlineImageLeft [#](https://reactnative.dev/docs/textinput#inlineimageleft)

If defined, the provided image resource will be rendered on the left. The image resource must be inside  / android / app / src / main / res / drawable  and referenced like
 \`\`\`jsx
<TextInput
 inlineImageLeft='search_icon'
/>
 \`\`\`
| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| string | No       | Android  |

------

###  inlineImagePadding [#](https://reactnative.dev/docs/textinput#inlineimagepadding)

Padding between the inline image, if any, and the text input itself.

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  inputAccessoryViewID [#](https://reactnative.dev/docs/textinput#inputaccessoryviewid)

An optional identifier which links a custom [InputAccessoryView](https://reactnative.dev/docs/inputaccessoryview) to this text input. The InputAccessoryView is rendered above the keyboard when this text input is focused.

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| string | No       | iOS      |

------

###  keyboardAppearance [#](https://reactnative.dev/docs/textinput#keyboardappearance)

Determines the color of the keyboard.

| TYPE                             | REQUIRED | PLATFORM |
| :------------------------------- | :------- | :------- |
| enum('default', 'light', 'dark') | No       | iOS      |

------

###  keyboardType [#](https://reactnative.dev/docs/textinput#keyboardtype)

Determines which keyboard to open, e.g. numeric .

See screenshots of all the types [here](http://lefkowitz.me/2018/04/30/visual-guide-to-react-native-textinput-keyboardtype-options/).

The following values work across platforms:

-  default  
-  number - pad 
-  decimal - pad 
-  numeric 
-  email - address 
-  phone - pad 

*iOS Only*

The following values work on iOS only:

-  ascii - capable 
-  numbers - and - punctuation 
-  url 
-  name - phone - pad 
-  twitter 
-  web - search 

*Android Only*

The following values work on Android only:

-  visible - password 

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password') | No       |

------

###  maxFontSizeMultiplier [#](https://reactnative.dev/docs/textinput#maxfontsizemultiplier)

Specifies largest possible scale a font can reach when  allowFontScaling  is enabled. Possible values:

-  null / undefined  (default): inherit from the parent node or the global default (0)
-  0 : no max, ignore parent/global default
-  >= 1 : sets the  maxFontSizeMultiplier  of this node to this value

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  maxLength [#](https://reactnative.dev/docs/textinput#maxlength)

Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

------

###  multiline [#](https://reactnative.dev/docs/textinput#multiline)

If  true , the text input can be multiple lines. The default value is  false . It is important to note that this aligns the text to the top on iOS, and centers it on Android. Use with  textAlignVertical  set to  top  for the same behavior in both platforms.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  numberOfLines [#](https://reactnative.dev/docs/textinput#numberoflines)

Sets the number of lines for a  TextInput . Use it with multiline set to  true  to be able to fill the lines.

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| number | No       | Android  |

------

###  onBlur [#](https://reactnative.dev/docs/textinput#onblur)

Callback that is called when the text input is blurred.

> Note: If you are attempting to access the  text  value from  nativeEvent  keep in mind that the resulting value you get can be  undefined  which can cause unintended errors. If you are trying to find the last value of TextInput, you can use the [ onEndEditing ](https://reactnative.dev/docs/textinput#onEndEditing) event, which is fired upon completion of editing.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onChange [#](https://reactnative.dev/docs/textinput#onchange)

Callback that is called when the text input's text changes. This will be called with  { nativeEvent: { eventCount, target, text } }  

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onChangeText [#](https://reactnative.dev/docs/textinput#onchangetext)

Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onContentSizeChange [#](https://reactnative.dev/docs/textinput#oncontentsizechange)

Callback that is called when the text input's content size changes. This will be called with  { nativeEvent: { contentSize: { width, height } } }  .

Only called for multiline text inputs.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onEndEditing [#](https://reactnative.dev/docs/textinput#onendediting)

Callback that is called when text input ends.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onPressIn [#](https://reactnative.dev/docs/textinput#onpressin)

Callback that is called when a touch is engaged.

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

------

###  onPressOut [#](https://reactnative.dev/docs/textinput#onpressout)

Callback that is called when a touch is released.

| TYPE                                                  | REQUIRED |
| :---------------------------------------------------- | :------- |
| [PressEvent](https://reactnative.dev/docs/pressevent) | No       |

------

###  onFocus [#](https://reactnative.dev/docs/textinput#onfocus)

Callback that is called when the text input is focused. This is called with  { nativeEvent: { target } }  .

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| ([LayoutEvent](https://reactnative.dev/docs/layoutevent)) => void | No       |

------

###  onKeyPress [#](https://reactnative.dev/docs/textinput#onkeypress)

Callback that is called when a key is pressed. This will be called with  { nativeEvent: { key: keyValue } }   where  keyValue  is  'Enter'  or  'Backspace'  for respective keys and the typed-in character otherwise including  ' '  for space. Fires before  onChange  callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onLayout [#](https://reactnative.dev/docs/textinput#onlayout)

Invoked on mount and on layout changes.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onScroll [#](https://reactnative.dev/docs/textinput#onscroll)

Invoked on content scroll with  { nativeEvent: { contentOffset: { x, y } } }  . May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onSelectionChange [#](https://reactnative.dev/docs/textinput#onselectionchange)

Callback that is called when the text input selection is changed. This will be called with  { nativeEvent: { selection: { start, end } } }  . This prop requires  multiline = { true}  to be set.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onSubmitEditing [#](https://reactnative.dev/docs/textinput#onsubmitediting)

Callback that is called when the text input's submit button is pressed with the argument  { nativeEvent: { text, eventCount, target } }  .

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

Note that on iOS this method isn't called when using  keyboardType = "phone-pad" .

------

###  placeholder [#](https://reactnative.dev/docs/textinput#placeholder)

The string that will be rendered before text input has been entered.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  placeholderTextColor [#](https://reactnative.dev/docs/textinput#placeholdertextcolor)

The text color of the placeholder string.

| TYPE                                         | REQUIRED |
| :------------------------------------------- | :------- |
| [color](https://reactnative.dev/docs/colors) | No       |

------

###  returnKeyLabel [#](https://reactnative.dev/docs/textinput#returnkeylabel)

Sets the return key to the label. Use it instead of  returnKeyType .

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| string | No       | Android  |

------

###  returnKeyType [#](https://reactnative.dev/docs/textinput#returnkeytype)

Determines how the return key should look. On Android you can also use  returnKeyLabel .

*Cross platform*

The following values work across platforms:

-  done 
-  go 
-  next 
-  search 
-  send 

*Android Only*

The following values work on Android only:

-  none 
-  previous 

*iOS Only*

The following values work on iOS only:

-  default  
-  emergency - call 
-  google 
-  join 
-  route 
-  yahoo 

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo') | No       |

###  rejectResponderTermination [#](https://reactnative.dev/docs/textinput#rejectrespondertermination)

*iOS Only*

If  true , allows TextInput to pass touch events to the parent component. This allows components such as SwipeableListView to be swipeable from the TextInput on iOS, as is the case on Android by default. If  false , TextInput always asks to handle the input (except when disabled). The default value is  true .

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  scrollEnabled [#](https://reactnative.dev/docs/textinput#scrollenabled)

If  false , scrolling of the text view will be disabled. The default value is  true . Only works with  multiline = { true} .

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  secureTextEntry [#](https://reactnative.dev/docs/textinput#securetextentry)

If  true , the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is  false . Does not work with  multiline = { true} .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  selection [#](https://reactnative.dev/docs/textinput#selection)

The start and end of the text input's selection. Set start and end to the same value to position the cursor.

| TYPE                                | REQUIRED |
| :---------------------------------- | :------- |
| object: {start: number,end: number} | No       |

------

###  selectionColor [#](https://reactnative.dev/docs/textinput#selectioncolor)

The highlight and cursor color of the text input.

| TYPE                                         | REQUIRED |
| :------------------------------------------- | :------- |
| [color](https://reactnative.dev/docs/colors) | No       |

------

###  selectTextOnFocus [#](https://reactnative.dev/docs/textinput#selecttextonfocus)

If  true , all text will automatically be selected on focus.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  showSoftInputOnFocus [#](https://reactnative.dev/docs/textinput#showsoftinputonfocus)

When  false , it will prevent the soft keyboard from showing when the field is focused. The default value is  true .

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  spellCheck [#](https://reactnative.dev/docs/textinput#spellcheck)

If  false , disables spell-check style (i.e. red underlines). The default value is inherited from  autoCorrect .

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  textAlign [#](https://reactnative.dev/docs/textinput#textalign)

Align the input text to the left, center, or right sides of the input field.

Possible values for  textAlign  are:

-  left 
-  center 
-  right 

| TYPE                            | REQUIRED |
| :------------------------------ | :------- |
| enum('left', 'center', 'right') | No       |

------

###  textContentType [#](https://reactnative.dev/docs/textinput#textcontenttype)

Give the keyboard and the system information about the expected semantic meaning for the content that users enter.

For iOS 11+ you can set  textContentType  to  username  or  password  to enable autofill of login details from the device keychain.

For iOS 12+  newPassword  can be used to indicate a new password input the user may want to save in the keychain, and  oneTimeCode  can be used to indicate that a field can be autofilled by a code arriving in an SMS.

To disable autofill, set  textContentType  to  none .

Possible values for  textContentType  are:

-  none 
-  URL 
-  addressCity 
-  addressCityAndState 
-  addressState 
-  countryName 
-  creditCardNumber 
-  emailAddress 
-  familyName 
-  fullStreetAddress 
-  givenName 
-  jobTitle 
-  location 
-  middleName 
-  name 
-  namePrefix 
-  nameSuffix 
-  nickname 
-  organizationName 
-  postalCode 
-  streetAddressLine1 
-  streetAddressLine2 
-  sublocality 
-  telephoneNumber 
-  username 
-  password 
-  newPassword 
-  oneTimeCode 

| TYPE                                                         | REQUIRED | PLATFORM |
| :----------------------------------------------------------- | :------- | :------- |
| enum('none', 'URL', 'addressCity', 'addressCityAndState', 'addressState', 'countryName', 'creditCardNumber', 'emailAddress', 'familyName', 'fullStreetAddress', 'givenName', 'jobTitle', 'location', 'middleName', 'name', 'namePrefix', 'nameSuffix', 'nickname', 'organizationName', 'postalCode', 'streetAddressLine1', 'streetAddressLine2', 'sublocality', 'telephoneNumber', 'username', 'password') | No       | iOS      |

------

###  passwordRules [#](https://reactnative.dev/docs/textinput#passwordrules)

When using  textContentType  as  newPassword  on iOS we can let the OS know the minimum requirements of the password so that it can generate one that will satisfy them. In order to create a valid string for  PasswordRules  take a look to the [Apple Docs](https://developer.apple.com/password-rules/).

> If passwords generation dialog doesn't appear please make sure that:
>
> - AutoFill is enabled: **Settings** → **Passwords & Accounts** → toggle "On" the **AutoFill Passwords**,
> - iCloud Keychain is used: **Settings** → **Apple ID** → **iCloud** → **Keychain** → toggle "On" the **iCloud Keychain**.

| TYPE   | REQUIRED | PLATFORM |
| :----- | :------- | :------- |
| string | No       | iOS      |

------

###  style [#](https://reactnative.dev/docs/textinput#style)

Note that not all Text styles are supported, an incomplete list of what is not supported includes:

-  borderLeftWidth 
-  borderTopWidth 
-  borderRightWidth 
-  borderBottomWidth 
-  borderTopLeftRadius 
-  borderTopRightRadius 
-  borderBottomRightRadius 
-  borderBottomLeftRadius 

see [Issue#7070](https://github.com/facebook/react-native/issues/7070) for more detail.

[Styles](https://reactnative.dev/docs/style)

| TYPE                                            | REQUIRED |
| :---------------------------------------------- | :------- |
| [Text](https://reactnative.dev/docs/text#style) | No       |

------

###  textBreakStrategy [#](https://reactnative.dev/docs/textinput#textbreakstrategy)

Set text break strategy on Android API Level 23+, possible values are  simple ,  highQuality ,  balanced  The default value is  simple .

| TYPE                                      | REQUIRED | PLATFORM |
| :---------------------------------------- | :------- | :------- |
| enum('simple', 'highQuality', 'balanced') | No       | Android  |

------

###  underlineColorAndroid [#](https://reactnative.dev/docs/textinput#underlinecolorandroid)

The color of the  TextInput  underline.

| TYPE                                         | REQUIRED | PLATFORM |
| :------------------------------------------- | :------- | :------- |
| [color](https://reactnative.dev/docs/colors) | No       | Android  |

------

###  value [#](https://reactnative.dev/docs/textinput#value)

The value to show for the text input.  TextInput  is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to setting the same value, either set  editable = { false} , or set/update  maxLength  to prevent unwanted edits without flicker.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

## Methods[#](https://reactnative.dev/docs/textinput#methods)

###  .focus() [#](https://reactnative.dev/docs/textinput#focus)
focus();

Copy

Makes the native input request focus.

###  .blur() [#](https://reactnative.dev/docs/textinput#blur)

blur();

Makes the native input lose focus.

###  clear() [#](https://reactnative.dev/docs/textinput#clear)

clear();

Removes all text from the  TextInput .

------

###  isFocused() [#](https://reactnative.dev/docs/textinput#isfocused)

isFocused();
Returns  true  if the input is currently focused;  false  otherwise.

# Known issues[#](https://reactnative.dev/docs/textinput#known-issues)

- [react-native#19096](https://github.com/facebook/react-native/issues/19096): Doesn't support Android's  onKeyPreIme .
- [react-native#19366](https://github.com/facebook/react-native/issues/19366): Calling .focus() after closing Android's keyboard via back button doesn't bring keyboard up again.
- [react-native#26799](https://github.com/facebook/react-native/issues/26799): Doesn't support Android's  secureTextEntry  when  keyboardType = "email-address"  or  keyboardType = "phone-pad" .
`