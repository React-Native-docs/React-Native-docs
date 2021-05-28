import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	Dimensions,
	View,
	ScrollView,
} from "react-native";
import { OuterView, SrcTouchable } from "~/styles/innerpageStyle";
import {
	TextMarkdown,
	CodeMarkdown,
} from "~/components/Markdown/MarkdownBlock";
export default PageRefreshControl = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# RefreshControl

This component is used inside a ScrollView or ListView to add pull to refresh functionality.When the ScrollView is at  scrollY: 0  , swiping down triggers an  onRefresh   event.

\`\`\`jsx
import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
\`\`\`

> Note:   refreshing   is a controlled prop, this is why it needs to be set to   true   in the   onRefresh   function otherwise the refresh indicator will stop immediately.

------

# Reference[#](https://reactnative.dev/docs/refreshcontrol#reference)

## Props[#](https://reactnative.dev/docs/refreshcontrol#props)

### [View Props](https://reactnative.dev/docs/view#props)[#](https://reactnative.dev/docs/refreshcontrol#view-props)

Inherits [View Props](https://reactnative.dev/docs/view#props).

------

### Required**  refreshing  **[#](https://reactnative.dev/docs/refreshcontrol#requiredrefreshing)

Whether the view should be indicating an active refresh.

| TYPE    |
| :------ |
| boolean |

------

###   colors   Android[#](https://reactnative.dev/docs/refreshcontrol#colors-android)

The colors (at least one) that will be used to draw the refresh indicator.

| TYPE                                                   |
| :----------------------------------------------------- |
| array of [colors](https://reactnative.dev/docs/colors) |

------

###   enabled   Android[#](https://reactnative.dev/docs/refreshcontrol#enabled-android)

Whether the pull to refresh functionality is enabled.

| TYPE    | DEFAULT |
| :------ | :------ |
| boolean |   true    |

------

###   onRefresh  [#](https://reactnative.dev/docs/refreshcontrol#onrefresh)

Called when the view starts refreshing.

| TYPE     |
| :------- |
| function |

------

###   progressBackgroundColor   Android[#](https://reactnative.dev/docs/refreshcontrol#progressbackgroundcolor-android)

The background color of the refresh indicator.

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

------

###   progressViewOffset   Android[#](https://reactnative.dev/docs/refreshcontrol#progressviewoffset-android)

Progress view top offset.

| TYPE   | DEFAULT |
| :----- | :------ |
| number |   0       |

------

###   size   Android[#](https://reactnative.dev/docs/refreshcontrol#size-android)

Size of the refresh indicator.

| TYPE                                                         | DEFAULT                          |
| :----------------------------------------------------------- | :------------------------------- |
| [RefreshControl.SIZE](https://reactnative.dev/docs/refreshcontrol#refreshlayoutconstssize) | RefreshLayoutConsts.SIZE.DEFAULT |

------

###   tintColor   iOS[#](https://reactnative.dev/docs/refreshcontrol#tintcolor-ios)

The color of the refresh indicator.

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

------

###   title   iOS[#](https://reactnative.dev/docs/refreshcontrol#title-ios)

The title displayed under the refresh indicator.

| TYPE   |
| :----- |
| string |

------

###   titleColor   iOS[#](https://reactnative.dev/docs/refreshcontrol#titlecolor-ios)

The color of the refresh indicator title.

| TYPE                                         |
| :------------------------------------------- |
| [color](https://reactnative.dev/docs/colors) |

## Type Definitions[#](https://reactnative.dev/docs/refreshcontrol#type-definitions)

### RefreshLayoutConsts.SIZE[#](https://reactnative.dev/docs/refreshcontrol#refreshlayoutconstssize)

The SwipeRefreshLayout Android component constants. The actual component size may vary between devices. You can read more about the native component in the [Android documentation](https://developer.android.com/reference/androidx/swiperefreshlayout/widget/SwipeRefreshLayout).

| TYPE |
| :--- |
| enum |

**Constants:**

| NAME    | TYPE | VALUE | DESCRIPTION                 |
| :------ | :--- | :---- | :-------------------------- |
| DEFAULT | int  |   1     | Default *RefreshControl size* |
| LARGE   | int  |   0     | Large *RefreshControl size*   |


`;