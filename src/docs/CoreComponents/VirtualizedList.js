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
export default PageVirtualizedList = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# VirtualizedList

Base implementation for the more convenient[  ](https://reactnative.dev/docs/flatlist) and [  ](https://reactnative.dev/docs/sectionlist) components, which are also better documented. In general, this should only really be used if you need more flexibility than [ FlatList ](https://reactnative.dev/docs/flatlist) provides, e.g. for use with immutable data instead of plain arrays.

	Virtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space.The window adapts to scrolling behavior, and items are rendered incrementally with low - pri(after any running interactions) if they are far from the visible area, or with hi - pri otherwise to minimize the potential of seeing blank space.

## Example

\`\`\`jsx
import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title:  Item \${index + 1} 
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
\`\`\`

Some caveats:

- Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
- This is a  PureComponent  which means that it will not re-render if  props  are shallow-equal. Make sure that everything your  renderItem  function depends on is passed as a prop (e.g.  extraData ) that is not   ===   after updates, otherwise your UI may not update on changes. This includes the  data  prop and parent component state.
- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
- By default, the list looks for a  key  prop on each item and uses that for the React key. Alternatively, you can provide a custom  keyExtractor  prop.

------

# Reference[#](https://reactnative.dev/docs/virtualizedlist#reference)

## Props[#](https://reactnative.dev/docs/virtualizedlist#props)

### [ScrollView Props](https://reactnative.dev/docs/scrollview#props)[#](https://reactnative.dev/docs/virtualizedlist#scrollview-props)

Inherits [ScrollView Props](https://reactnative.dev/docs/scrollview#props).

------

### Required ** data **[#](https://reactnative.dev/docs/virtualizedlist#required-data)

The default accessor functions assume this is an array of objects with shape  { key: string }   but you can override  getItem ,  getItemCount , and  keyExtractor  to handle any type of index-based data.

| TYPE |
| :--- |
| any  |

------

### Required ** getItem **[#](https://reactnative.dev/docs/virtualizedlist#required-getitem)

(data: any, index: number) => object;

A generic accessor for extracting an item from any sort of data blob.

| TYPE     |
| :------- |
| function |

------

### Required ** getItemCount **[#](https://reactnative.dev/docs/virtualizedlist#required-getitemcount)

(data: any) => number;

Determines how many items are in the data blob.

| TYPE     |
| :------- |
| function |

------

### Required ** renderItem **[#](https://reactnative.dev/docs/virtualizedlist#required-renderitem)

(info: any) => ?React.Element<any>

Takes an item from  data  and renders it into the list

| TYPE     |
| :------- |
| function |

------

###  CellRendererComponent [#](https://reactnative.dev/docs/virtualizedlist#cellrenderercomponent)

Each cell is rendered using this element. Can be a React Component Class, or a render function. Defaults to using [ View ](https://reactnative.dev/docs/view).

| TYPE                |
| :------------------ |
| component, function |

------

###  ItemSeparatorComponent [#](https://reactnative.dev/docs/virtualizedlist#itemseparatorcomponent)

Rendered in between each item, but not at the top or bottom. By default,  highlighted  and  leadingItem  props are provided.  renderItem  provides  separators.highlight / unhighlight  which will update the  highlighted  prop, but you can also add custom props with  separators.updateProps .

| TYPE                |
| :------------------ |
| component, function |

------

###  ListEmptyComponent [#](https://reactnative.dev/docs/virtualizedlist#listemptycomponent)

Rendered when the list is empty. Can be a React Component (e.g.  SomeComponent ), or a React element (e.g.   < SomeComponent />  ).

| TYPE               |
| :----------------- |
| component, element |

------

###  ListItemComponent [#](https://reactnative.dev/docs/virtualizedlist#listitemcomponent)

Each data item is rendered using this element. Can be a React Component Class, or a render function.

| TYPE                |
| :------------------ |
| component, function |

------

###  ListFooterComponent [#](https://reactnative.dev/docs/virtualizedlist#listfootercomponent)

Rendered at the bottom of all the items. Can be a React Component (e.g.  SomeComponent ), or a React element (e.g.   < SomeComponent />  ).

| TYPE               |
| :----------------- |
| component, element |

------

###  ListFooterComponentStyle [#](https://reactnative.dev/docs/virtualizedlist#listfootercomponentstyle)

Styling for internal View for  ListFooterComponent .

| TYPE          | REQUIRED |
| :------------ | :------- |
| ViewStyleProp | No       |

------

###  ListHeaderComponent [#](https://reactnative.dev/docs/virtualizedlist#listheadercomponent)

Rendered at the top of all the items. Can be a React Component (e.g.  SomeComponent ), or a React element (e.g.   < SomeComponent />  ).

| TYPE               |
| :----------------- |
| component, element |

------

###  ListHeaderComponentStyle [#](https://reactnative.dev/docs/virtualizedlist#listheadercomponentstyle)

Styling for internal View for  ListHeaderComponent .

| TYPE                                                        |
| :---------------------------------------------------------- |
| [View Style](https://reactnative.dev/docs/view-style-props) |

------

###  debug [#](https://reactnative.dev/docs/virtualizedlist#debug)

 debug  will turn on extra logging and visual overlays to aid with debugging both usage and implementation, but with a significant perf hit.

| TYPE    |
| :------ |
| boolean |

------

###  disableVirtualization [#](https://reactnative.dev/docs/virtualizedlist#disablevirtualization)

> **Deprecated.** Virtualization provides significant performance and memory optimizations, but fully unmounts react instances that are outside of the render window. You should only need to disable this for debugging purposes.

| TYPE    |
| :------ |
| boolean |

------

###  extraData [#](https://reactnative.dev/docs/virtualizedlist#extradata)

A marker property for telling the list to re-render (since it implements  PureComponent ). If any of your  renderItem , Header, Footer, etc. functions depend on anything outside of the  data  prop, stick it here and treat it immutably.

| TYPE |
| :--- |
| any  |

------

###  getItemLayout [#](https://reactnative.dev/docs/virtualizedlist#getitemlayout)


\`\`\`jsx
(
​    data: any,
​    index: number,
  ) => {length: number, offset: number, index: number}
\`\`\`

| TYPE     |
| :------- |
| function |

------

###  horizontal [#](https://reactnative.dev/docs/virtualizedlist#horizontal)

If  true , renders items next to each other horizontally instead of stacked vertically.

| TYPE    |
| :------ |
| boolean |

------

###  initialNumToRender [#](https://reactnative.dev/docs/virtualizedlist#initialnumtorender)

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| TYPE   | DEFAULT |
| :----- | :------ |
| number |  10     |

------

###  initialScrollIndex [#](https://reactnative.dev/docs/virtualizedlist#initialscrollindex)

Instead of starting at the top with the first item, start at  initialScrollIndex . This disables the "scroll to top" optimization that keeps the first  initialNumToRender  items always rendered and immediately renders the items starting at this initial index. Requires  getItemLayout  to be implemented.

| TYPE   |
| :----- |
| number |

------

###  inverted [#](https://reactnative.dev/docs/virtualizedlist#inverted)

Reverses the direction of scroll. Uses scale transforms of  - 1 .

| TYPE    |
| :------ |
| boolean |

------

###  listKey [#](https://reactnative.dev/docs/virtualizedlist#listkey)

A unique identifier for this list. If there are multiple VirtualizedLists at the same level of nesting within another VirtualizedList, this key is necessary for virtualization to work properly.

| TYPE   | REQUIRED |
| :----- | :------- |
| string | True     |

------

###  keyExtractor 
 (item: object, index: number) => string; 
Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks  item.key , then  item.id , and then falls back to using the index, like React does.

| TYPE     |
| :------- |
| function |

------

###  maxToRenderPerBatch [#](https://reactnative.dev/docs/virtualizedlist#maxtorenderperbatch)

The maximum number of items to render in each incremental render batch. The more rendered at once, the better the fill rate, but responsiveness may suffer because rendering content may interfere with responding to button taps or other interactions.

| TYPE   |
| :----- |
| number |

------

###  onEndReached [#](https://reactnative.dev/docs/virtualizedlist#onendreached)
(info: {distanceFromEnd: number}) => void

Called once when the scroll position gets within  onEndReachedThreshold  of the rendered content.

| TYPE     |
| :------- |
| function |

------

###  onEndReachedThreshold [#](https://reactnative.dev/docs/virtualizedlist#onendreachedthreshold)

How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the  onEndReached  callback. Thus a value of 0.5 will trigger  onEndReached  when the end of the content is within half the visible length of the list.

| TYPE   |
| :----- |
| number |

------

###  onRefresh [#](https://reactnative.dev/docs/virtualizedlist#onrefresh)

() => void

If provided, a standard  RefreshControl  will be added for "Pull to Refresh" functionality. Make sure to also set the  refreshing  prop correctly.

| TYPE     |
| :------- |
| function |

------

###  onScrollToIndexFailed [#](https://reactnative.dev/docs/virtualizedlist#onscrolltoindexfailed)

\`\`\`jsx
(info: {
​    index: number,
​    highestMeasuredFrameIndex: number,
​    averageItemLength: number,
  }) => void
\`\`\`

Used to handle failures when scrolling to an index that has not been measured yet. Recommended action is to either compute your own offset and  scrollTo  it, or scroll as far as possible and then try again after more items have been rendered.

| TYPE     |
| :------- |
| function |

------

###  onViewableItemsChanged [#](https://reactnative.dev/docs/virtualizedlist#onviewableitemschanged)

Called when the viewability of rows changes, as defined by the  viewabilityConfig  prop.

| TYPE                                                         |
| :----------------------------------------------------------- |
| (callback: { changed: array of [ViewToken](https://reactnative.dev/docs/viewtoken)s, viewableItems: array of [ViewToken](https://reactnative.dev/docs/viewtoken)s }) => void |

------

###  persistentScrollbar [#](https://reactnative.dev/docs/virtualizedlist#persistentscrollbar)

| TYPE |
| :--- |
| bool |

------

###  progressViewOffset  Android[#](https://reactnative.dev/docs/virtualizedlist#progressviewoffset-android)

Set this when offset is needed for the loading indicator to show correctly.

| TYPE   |
| :----- |
| number |

------

###  refreshControl [#](https://reactnative.dev/docs/virtualizedlist#refreshcontrol)

A custom refresh control element. When set, it overrides the default  <RefreshControl>  component built internally. The onRefresh and refreshing props are also ignored. Only works for vertical VirtualizedList.

| TYPE    |
| :------ |
| element |

------

###  refreshing [#](https://reactnative.dev/docs/virtualizedlist#refreshing)

Set this true while waiting for new data from a refresh.

| TYPE    |
| :------ |
| boolean |

------

###  removeClippedSubviews [#](https://reactnative.dev/docs/virtualizedlist#removeclippedsubviews)

This may improve scroll performance for large lists.

> Note: May have bugs (missing content) in some circumstances - use at your own risk.

| TYPE    |
| :------ |
| boolean |

------

###  renderScrollComponent [#](https://reactnative.dev/docs/virtualizedlist#renderscrollcomponent)

(props: object) => element;

Render a custom scroll component, e.g. with a differently styled  RefreshControl .

| TYPE     |
| :------- |
| function |

------

###  viewabilityConfig [#](https://reactnative.dev/docs/virtualizedlist#viewabilityconfig)

See  ViewabilityHelper.js  for flow type and further documentation.

| TYPE              |
| :---------------- |
| ViewabilityConfig |

------

###  viewabilityConfigCallbackPairs [#](https://reactnative.dev/docs/virtualizedlist#viewabilityconfigcallbackpairs)

List of  ViewabilityConfig / onViewableItemsChanged  pairs. A specific  onViewableItemsChanged  will be called when its corresponding  ViewabilityConfig 's conditions are met. See  ViewabilityHelper.js  for flow type and further documentation.

| TYPE                                   |
| :------------------------------------- |
| array of ViewabilityConfigCallbackPair |

------

###  updateCellsBatchingPeriod [#](https://reactnative.dev/docs/virtualizedlist#updatecellsbatchingperiod)

Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off screen. Similar fill rate/responsiveness tradeoff as  maxToRenderPerBatch .

| TYPE   |
| :----- |
| number |

------

###  windowSize [#](https://reactnative.dev/docs/virtualizedlist#windowsize)

Determines the maximum number of items rendered outside of the visible area, in units of visible lengths. So if your list fills the screen, then  windowSize = { 21}  (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.

| TYPE   |
| :----- |
| number |

## Methods[#](https://reactnative.dev/docs/virtualizedlist#methods)

###  flashScrollIndicators() [#](https://reactnative.dev/docs/virtualizedlist#flashscrollindicators)

flashScrollIndicators();

------

###  getChildContext() [#](https://reactnative.dev/docs/virtualizedlist#getchildcontext)

getChildContext () => Object;

The  Object  returned consist of:

- 'virtualizedList' (Object). This object consist of the following
  1). getScrollMetrics' (Function). Returns an object with following properties:  { contentLength: number, dOffset: number, dt: number, offset: number, timestamp: number, velocity: number, visibleLength: number }  .
  2) 'horizontal' (boolean) - Optional.
  3) 'getOutermostParentListRef' (Function).
  4) 'getNestedChildState' (Function) - Returns ChildListState .
  5) 'registerAsNestedChild' (Function). This accept an object with following properties  { cellKey: string, key: string, ref: VirtualizedList, parentDebugInfo: ListDebugInfo }  . It returns a ChildListState
  6) 'unregisterAsNestedChild' (Function). This takes an object with following properties,  { key: string, state: ChildListState }  
  7) 'debugInfo' (ListDebugInfo).

------

###  getScrollableNode() [#](https://reactnative.dev/docs/virtualizedlist#getscrollablenode)

getScrollableNode () => ?number;

------

###  getScrollRef() [#](https://reactnative.dev/docs/virtualizedlist#getscrollref)

getScrollRef () => | ?React.ElementRef<typeof ScrollView>

​    | ?React.ElementRef<typeof View>;

------

###  getScrollResponder() [#](https://reactnative.dev/docs/virtualizedlist#getscrollresponder)

getScrollResponder () => ?ScrollResponderType;

Provides a handle to the underlying scroll responder. Note that  this._scrollRef  might not be a  ScrollView , so we need to check that it responds to  getScrollResponder  before calling it.

------

###  hasMore() [#](https://reactnative.dev/docs/virtualizedlist#hasmore)

hasMore () => boolean;

------

###  scrollToEnd() [#](https://reactnative.dev/docs/virtualizedlist#scrolltoend)

scrollToEnd((params: object));



Valid  params  consist of:



\- 'animated' (boolean). Optional default is true.

------

###  scrollToIndex() [#](https://reactnative.dev/docs/virtualizedlist#scrolltoindex)

scrollToIndex((params: object));

Valid  params  consist of:

- 'animated' (boolean). Optional.
- 'index' (number). Required.
- 'viewOffset' (number). Optional.
- 'viewPosition' (number). Optional.

------

###  scrollToItem() [#](https://reactnative.dev/docs/virtualizedlist#scrolltoitem)

scrollToItem((params: object));

Valid  params  consist of:

- 'animated' (boolean). Optional.
- 'item' (Item). Required.
- 'viewPosition' (number). Optional.

------

###  scrollToOffset() [#](https://reactnative.dev/docs/virtualizedlist#scrolltooffset)

scrollToOffset((params: object));

Scroll to a specific content pixel offset in the list.

Param  offset  expects the offset to scroll to. In case of  horizontal  is true, the offset is the x-value, in any other case the offset is the y-value.

Param  animated  ( true  by default) defines whether the list should do an animation while scrolling.

------

###  recordInteraction() [#](https://reactnative.dev/docs/virtualizedlist#recordinteraction)

recordInteraction();

------

###  setNativeProps() [#](https://reactnative.dev/docs/virtualizedlist#setnativeprops)

setNativeProps((props: Object));
`;