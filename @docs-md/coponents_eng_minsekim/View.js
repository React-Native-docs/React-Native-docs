`
# View

The most fundamental component for building a UI,  View  is a container that supports layout with [flexbox](https://reactnative.dev/docs/flexbox), [style](https://reactnative.dev/docs/style), [some touch handling](https://reactnative.dev/docs/handling-touches), and [accessibility](https://reactnative.dev/docs/accessibility) controls.  View  maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a  UIView ,  <div> ,  android.view , etc.

	 View  is designed to be nested inside other views and can have 0 to many children of any type.

This example creates a View  that wraps two boxes with color and a text component in a row with padding.
\`\`\`jsx
import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;
\`\`\`
>  View s are designed to be used with [ StyleSheet ](https://reactnative.dev/docs/style) for clarity and performance, although inline styles are also supported.

### Synthetic Touch Events[#](https://reactnative.dev/docs/view#synthetic-touch-events)

For  View  responder props (e.g.,  onResponderMove ), the synthetic touch event passed to them are in form of [PressEvent](https://reactnative.dev/docs/pressevent).

------

# Reference[#](https://reactnative.dev/docs/view#reference)

## Props[#](https://reactnative.dev/docs/view#props)

###  onStartShouldSetResponder [#](https://reactnative.dev/docs/view#onstartshouldsetresponder)

Does this view want to become responder on the start of a touch?

 View.props.onStartShouldSetResponder: (event) => [true | false] , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  accessible [#](https://reactnative.dev/docs/view#accessible)

When  true , indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

| TYPE | REQUIRED |
| :--- | :------- |
| bool | No       |

------

###  accessibilityLabel [#](https://reactnative.dev/docs/view#accessibilitylabel)

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the  Text  nodes separated by space.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityHint [#](https://reactnative.dev/docs/view#accessibilityhint)

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityRole [#](https://reactnative.dev/docs/view#accessibilityrole)

 accessibilityRole  communicates the purpose of a component to the user of an assistive technology.

 accessibilityRole  can be one of the following:

-  'none'  - Used when the element has no role.
-  'button'  - Used when the element should be treated as a button.
-  'link'  - Used when the element should be treated as a link.
-  'search'  - Used when the text field element should also be treated as a search field.
-  'image'  - Used when the element should be treated as an image. Can be combined with button or link, for example.
-  'keyboardkey'  - Used when the element acts as a keyboard key.
-  'text'  - Used when the element should be treated as static text that cannot change.
-  'adjustable'  - Used when an element can be "adjusted" (e.g. a slider).
-  'imagebutton'  - Used when the element should be treated as a button and is also an image.
-  'header'  - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
-  'summary'  - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
-  'alert'  - Used when an element contains important text to be presented to the user.
-  'checkbox'  - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
-  'combobox'  - Used when an element represents a combo box, which allows the user to select among several choices.
-  'menu'  - Used when the component is a menu of choices.
-  'menubar'  - Used when a component is a container of multiple menus.
-  'menuitem'  - Used to represent an item within a menu.
-  'progressbar'  - Used to represent a component which indicates progress of a task.
-  'radio'  - Used to represent a radio button.
-  'radiogroup'  - Used to represent a group of radio buttons.
-  'scrollbar'  - Used to represent a scroll bar.
-  'spinbutton'  - Used to represent a button which opens a list of choices.
-  'switch'  - Used to represent a switch which can be turned on and off.
-  'tab'  - Used to represent a tab.
-  'tablist'  - Used to represent a list of tabs.
-  'timer'  - Used to represent a timer.
-  'toolbar'  - Used to represent a tool bar (a container of action buttons or components).

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  accessibilityState [#](https://reactnative.dev/docs/view#accessibilitystate)

Describes the current state of a component to the user of an assistive technology.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilitystate-ios-android) for more information.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool} | No       |

------

###  accessibilityValue [#](https://reactnative.dev/docs/view#accessibilityvalue)

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android) for more information.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| object: {min: number, max: number, now: number, text: string} | No       |

------

###  accessibilityActions [#](https://reactnative.dev/docs/view#accessibilityactions)

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The  accessibilityActions  property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibility-actions) for more information.

| TYPE  | REQUIRED |
| :---- | :------- |
| array | No       |

------

###  onAccessibilityAction [#](https://reactnative.dev/docs/view#onaccessibilityaction)

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibility-actions) for more information.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onAccessibilityTap [#](https://reactnative.dev/docs/view#onaccessibilitytap)

When  accessible  is true, the system will try to invoke this function when the user performs accessibility tap gesture.

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onMagicTap [#](https://reactnative.dev/docs/view#onmagictap)

When  accessible  is  true , the system will invoke this function when the user performs the magic tap gesture.

| TYPE     | REQUIRED | PLATFORM |
| :------- | :------- | :------- |
| function | No       | iOS      |

------

###  onAccessibilityEscape [#](https://reactnative.dev/docs/view#onaccessibilityescape)

When  accessible  is  true , the system will invoke this function when the user performs the escape gesture.

| TYPE     | REQUIRED | PLATFORM |
| :------- | :------- | :------- |
| function | No       | iOS      |

------

###  accessibilityViewIsModal [#](https://reactnative.dev/docs/view#accessibilityviewismodal)

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is  false .

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilityviewismodal-ios) for more information.

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  accessibilityElementsHidden [#](https://reactnative.dev/docs/view#accessibilityelementshidden)

A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is  false .

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilityelementshidden-ios) for more information.

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  accessibilityIgnoresInvertColors [#](https://reactnative.dev/docs/view#accessibilityignoresinvertcolors)

A value indicating this view should or should not be inverted when color inversion is turned on. A value of  true  will tell the view to not be inverted even if color inversion is turned on.

See the [Accessibility guide](https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolors) for more information.

| TYPE | REQUIRED | PLATFORM |
| :--- | :------- | :------- |
| bool | No       | iOS      |

------

###  accessibilityLiveRegion [#](https://reactnative.dev/docs/view#accessibilityliveregion)

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:

-  'none'  - Accessibility services should not announce changes to this view.
-  'polite' - Accessibility services should announce changes to this view.
-  'assertive'  - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.

See the [Android  View  docs](http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion) for reference.

| TYPE                                | REQUIRED | PLATFORM |
| :---------------------------------- | :------- | :------- |
| enum('none', 'polite', 'assertive') | No       | Android  |

------

###  importantForAccessibility [#](https://reactnative.dev/docs/view#importantforaccessibility)

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

Possible values:

-  'auto'  - The system determines whether the view is important for accessibility - default (recommended).
-  'yes'  - The view is important for accessibility.
-  'no'  - The view is not important for accessibility.
-  'no-hide-descendants'  - The view is not important for accessibility, nor are any of its descendant views.

See the [Android  importantForAccessibility  docs](http://developer.android.com/reference/android/R.attr.html#importantForAccessibility) for reference.

| TYPE                                             | REQUIRED | PLATFORM |
| :----------------------------------------------- | :------- | :------- |
| enum('auto', 'yes', 'no', 'no-hide-descendants') | No       | Android  |

------

###  hitSlop [#](https://reactnative.dev/docs/view#hitslop)

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with  hitSlop = {{ top: 10, bottom: 10, left: 0, right: 0 }} 

> The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| object: {top: number, left: number, bottom: number, right: number} | No       |

------

###  nativeID [#](https://reactnative.dev/docs/view#nativeid)

Used to locate this view from native classes.

> This disables the 'layout-only view removal' optimization for this view!

| TYPE   | REQUIRED |
| :----- | :------- |
| string | No       |

------

###  onLayout [#](https://reactnative.dev/docs/view#onlayout)

Invoked on mount and on layout changes.

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

| TYPE                                                         | REQUIRED |
| :----------------------------------------------------------- | :------- |
| ([LayoutEvent](https://reactnative.dev/docs/layoutevent)) => void | No       |

------

###  onMoveShouldSetResponder [#](https://reactnative.dev/docs/view#onmoveshouldsetresponder)

Does this view want to "claim" touch responsiveness? This is called for every touch move on the  View  when it is not the responder.

 View.props.onMoveShouldSetResponder: (event) => [true | false] , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onMoveShouldSetResponderCapture [#](https://reactnative.dev/docs/view#onmoveshouldsetrespondercapture)

If a parent  View  wants to prevent a child  View  from becoming responder on a move, it should have this handler which returns  true .

 View.props.onMoveShouldSetResponderCapture: (event) => [true | false] , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderGrant [#](https://reactnative.dev/docs/view#onrespondergrant)

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

 View.props.onResponderGrant: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderMove [#](https://reactnative.dev/docs/view#onrespondermove)

The user is moving their finger.

 View.props.onResponderMove: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderReject [#](https://reactnative.dev/docs/view#onresponderreject)

Another responder is already active and will not release it to that  View  asking to be the responder.

 View.props.onResponderReject: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderRelease [#](https://reactnative.dev/docs/view#onresponderrelease)

Fired at the end of the touch.

 View.props.onResponderRelease: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderTerminate [#](https://reactnative.dev/docs/view#onresponderterminate)

The responder has been taken from the  View . Might be taken by other views after a call to  onResponderTerminationRequest , or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

 View.props.onResponderTerminate: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onResponderTerminationRequest [#](https://reactnative.dev/docs/view#onresponderterminationrequest)

Some other  View  wants to become responder and is asking this  View  to release its responder. Returning  true  allows its release.

 View.props.onResponderTerminationRequest: (event) => { } , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  onStartShouldSetResponderCapture [#](https://reactnative.dev/docs/view#onstartshouldsetrespondercapture)

If a parent  View  wants to prevent a child  View  from becoming responder on a touch start, it should have this handler which returns  true .

 View.props.onStartShouldSetResponderCapture: (event) => [true | false] , where  event  is a [PressEvent](https://reactnative.dev/docs/pressevent).

| TYPE     | REQUIRED |
| :------- | :------- |
| function | No       |

------

###  pointerEvents [#](https://reactnative.dev/docs/view#pointerevents)

Controls whether the  View  can be the target of touch events.

-  'auto' : The View can be the target of touch events.
-  'none' : The View is never the target of touch events.
-  'box-none' : The View is never the target of touch events but its subviews can be. It behaves like if the view had the following classes in CSS:
\`\`\`jsx
.box-none {
     pointer-events: none;
}
.box-none * {
     pointer-events: auto;
}
\`\`\`
 'box-only' : The view can be the target of touch events but its subviews cannot be. It behaves like if the view had the following classes in CSS:
\`\`\`jsx
.box-only {
     pointer-events: auto;
}
.box-only * {
     pointer-events: none;
}
\`\`\`
- > Since  pointerEvents  does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include  pointerEvents  on  style . On some platforms, we would need to implement it as a  className  anyways. Using  style  or not is an implementation detail of the platform.

  | TYPE                                         | REQUIRED |
  | :------------------------------------------- | :------- |
  | enum('box-none', 'none', 'box-only', 'auto') | No       |

  ------

  ###  removeClippedSubviews [#](https://reactnative.dev/docs/view#removeclippedsubviews)

  This is a reserved performance property exposed by  RCTView  and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have  overflow: hidden , as should the containing view (or one of its superviews).

  | TYPE | REQUIRED |
  | :--- | :------- |
  | bool | No       |

  ------

  ###  style [#](https://reactnative.dev/docs/view#style)

  | TYPE                                                        | REQUIRED |
  | :---------------------------------------------------------- | :------- |
  | [View Style](https://reactnative.dev/docs/view-style-props) | No       |

  ------

  ###  testID [#](https://reactnative.dev/docs/view#testid)

  Used to locate this view in end-to-end tests.

  > This disables the 'layout-only view removal' optimization for this view!

  | TYPE   | REQUIRED |
  | :----- | :------- |
  | string | No       |

  ------

  ###  collapsable [#](https://reactnative.dev/docs/view#collapsable)

  Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to  false  to disable this optimization and ensure that this  View  exists in the native view hierarchy.

  | TYPE | REQUIRED | PLATFORM |
  | :--- | :------- | :------- |
  | bool | No       | Android  |

  ------

  ###  needsOffscreenAlphaCompositing [#](https://reactnative.dev/docs/view#needsoffscreenalphacompositing)

  Whether this  View  needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default ( false ) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the  View  you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping  View s, or text and a background).

  Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view **contents** are static (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

  | TYPE | REQUIRED |
  | :--- | :------- |
  | bool | No       |

  ------

  ###  renderToHardwareTextureAndroid [#](https://reactnative.dev/docs/view#rendertohardwaretextureandroid)

  Whether this  View  should render itself (and all of its children) into a single hardware texture on the GPU.

  On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

  | TYPE | REQUIRED | PLATFORM |
  | :--- | :------- | :------- |
  | bool | No       | Android  |

  ------

  ###  shouldRasterizeIOS [#](https://reactnative.dev/docs/view#shouldrasterizeios)

  Whether this  View  should be rendered as a bitmap before compositing.

  On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.

  Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.

  | TYPE | REQUIRED | PLATFORM |
  | :--- | :------- | :------- |
  | bool | No       | iOS      |

  ------

  ###  nextFocusDown [#](https://reactnative.dev/docs/view#nextfocusdown)

  Designates the next view to receive focus when the user navigates down. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusForward [#](https://reactnative.dev/docs/view#nextfocusforward)

  Designates the next view to receive focus when the user navigates forward. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusLeft [#](https://reactnative.dev/docs/view#nextfocusleft)

  Designates the next view to receive focus when the user navigates left. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusRight [#](https://reactnative.dev/docs/view#nextfocusright)

  Designates the next view to receive focus when the user navigates right. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  nextFocusUp [#](https://reactnative.dev/docs/view#nextfocusup)

  Designates the next view to receive focus when the user navigates up. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp).

  | TYPE   | REQUIRED | PLATFORM |
  | :----- | :------- | :------- |
  | number | No       | Android  |

  ------

  ###  focusable [#](https://reactnative.dev/docs/view#focusable)

  Whether this  View  should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

  | TYPE    | REQUIRED | PLATFORM |
  | :------ | :------- | :------- |
  | boolean | No       | Android  |


`