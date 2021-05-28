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
export default PageImage = (props) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<OuterView>
				<TextMarkdown source={text1} />
			</OuterView>
		</ScrollView>
	)
}

const text1 = `
# Image

A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the\`'data:'\` uri scheme.

> Note that for network and data images, you will need to manually specify the dimensions of your image!

Example Function Component Example

\`\`\`jsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
});

const DisplayAnImage = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.tinyLogo}
				source={require('@expo/snack-static/react-native-logo.png')}
			/>
			<Image
				style={styles.tinyLogo}
				source={{
					uri: 'https://reactnative.dev/img/tiny_logo.png',
				}}
			/>
			<Image
				style={styles.logo}
				source={{
					uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
				}}
			/>
		</View>
	);
}

export default DisplayAnImage;
\`\`\`

You can also add style to an image:

Example Function Component Example styled

\`\`\`jsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	stretch: {
		width: 50,
		height: 200,
		resizeMode: 'stretch',
	},
});

const DisplayAnImageWithStyle = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.stretch}
				source={require('@expo/snack-static/react-native-logo.png')}
			/>
		</View>
	);
}

export default DisplayAnImageWithStyle;
\`\`\`

## GIF and WebP support on Android[#](https://reactnative.dev/docs/image#gif-and-webp-support-on-android)

When building your own native code, GIF and WebP are not supported by default on Android.

You will need to add some optional modules in \`android / app / build.gradle\`, depending on the needs of your app.

\`\`\`jsx
dependencies {
	// If your app supports Android versions before Ice Cream Sandwich (API level 14)
	implementation 'com.facebook.fresco:animated-base-support:1.3.0'

	// For animated GIF support
	implementation 'com.facebook.fresco:animated-gif:2.0.0'

	// For WebP support, including animated WebP
	implementation 'com.facebook.fresco:animated-webp:2.1.0'
	implementation 'com.facebook.fresco:webpsupport:2.0.0'

	// For WebP support, without animations
	implementation 'com.facebook.fresco:webpsupport:2.0.0'
}
\`\`\`

# Reference[#](https://reactnative.dev/docs/image#reference)

## Props[#](https://reactnative.dev/docs/image#props)

### [View Props](https://reactnative.dev/docs/view#props)[#](https://reactnative.dev/docs/image#view-props)

Inherits [View Props](https://reactnative.dev/docs/view#props).

---

### \`accessible\`[#](https://reactnative.dev/docs/image#accessible)

When true, indicates the image is an accessibility element.

| TYPE | **DEFAULT** |
| ---- | ----------- |
| bool | false       |

### \`accessibilityLabel\`[#](https://reactnative.dev/docs/image#accessibilitylabel)

The text that's read by the screen reader when the user interacts with the image.

| TYPE   |
| ------ |
| String |

### \`blurRadius\`[#](https://reactnative.dev/docs/image#blurradius)

blurRadius: the blur radius of the blur filter added to the image.

| TYPE   |
| ------ |
| number |

> Tip : IOS you will need to increase blurRadius more than 5

### \`capInsets\` **iOS**[#](https://reactnative.dev/docs/image#capinsets-ios)

When the image is resized, the corners of the size specified by \`capInsets\` will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets. More info in the [official Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets).

### \`defaultSource\`[#](https://reactnative.dev/docs/image#defaultsource)

A static image to display while loading the image source.
> Note: On Android, the default source prop is ignored on debug builds.

### \`fadeDuration\` **Android**[#](https://reactnative.dev/docs/image#fadeduration-android)

Fade animation duration in miliseconds.

### \`loadingIndicatorSource\`[#](https://reactnative.dev/docs/image#loadingindicatorsource)

Similarly to \`source\`, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network.

### \`onError\`[#](https://reactnative.dev/docs/image#onerror)

Invoked on load error.

### \`onLayout\`[#](https://reactnative.dev/docs/image#onlayout)

Invoked on mount and on layout changes.

### \`onLoad\`[#](https://reactnative.dev/docs/image#onload)

Invoked when load completes successfully.

### \`onLoadEnd\`[#](https://reactnative.dev/docs/image#onloadend)

Invoked when load either succeeds or fails.

### \`onLoadStart\`[#](https://reactnative.dev/docs/image#onloadstart)

Invoked on load start.

**Example:** \`onLoadStart = {() => this.setState({ loading: true })}\`

### \`onPartialLoad\` **iOS**[#](https://reactnative.dev/docs/image#onpartialload-ios)

Invoked when a partial load of the image is complete. The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.

### \`onProgress\`[#](https://reactnative.dev/docs/image#onprogress)

Invoked on download progress.
\`function({ nativeEvent: { loaded, total } }) => void\`

### \`progressiveRenderingEnabled\` **Android**[#](https://reactnative.dev/docs/image#progressiverenderingenabled-android)

When \`true\`, enables progressive jpeg streaming - [https://frescolib.org/docs/progressive-jpegs](https://frescolib.org/docs/progressive-jpegs).

### \`resizeMethod\` **Android**[#](https://reactnative.dev/docs/image#resizemethod-android)

The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. Defaults to \`auto\`.

- \`auto\`: Use heuristics to pick between \`resize\` and \`scale\`.
- \`resize\`: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of \`scale\` when the image is much larger than the view.
- \`scale\`: The image gets drawn downscaled or upscaled. Compared to \`resize\`, \`scale\` is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.

More details about \`resize\` and \`scale\` can be found at [http://frescolib.org/docs/resizing](http://frescolib.org/docs/resizing).

| TYPE                                  | **DEFAULT** |
| ------------------------------------- | ----------- |
| enum(\`'auto'\`, \`'resize'\`, \`'scale'\`) | 'auto'      |

### \`resizeMode\`[#](https://reactnative.dev/docs/image#resizemode)

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to \`cover\`.

- \`cover\`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
- \`contain\`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
- \`stretch\`: Scale width and height independently, This may change the aspect ratio of the src.
- \`repeat\`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.
- \`center\`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

| TYPE                                                         | **DEFAULT** |
| ------------------------------------------------------------ | ----------- |
| enum(\`'cover'\`, \`'contain'\`, \`'stretch'\`, \`'repeat'\`, \`'center'\`) | 'cover'     |

### \`source\`[#](https://reactnative.dev/docs/image#source)

The image source (either a remote URL or a local file resource).

This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best \`uri\` to display based on the measured size of the image container. A \`cache\` property can be added to control how networked request interacts with the local cache. (For more information see [Cache Control for Images](https://reactnative.dev/docs/images#cache-control-ios-only)).

The currently supported formats are \`png\`, \`jpg\`, \`jpeg\`, \`bmp\`, \`gif\`, \`webp\`, \`psd\` (iOS only). In addition, iOS supports several RAW image formats. Refer to Apple's documentation for the current list of supported camera models (for iOS 12, see [https://support.apple.com/en-ca/HT208967](https://support.apple.com/en-ca/HT208967)).

### \`style\`[#](https://reactnative.dev/docs/image#style)

### \`testID\`[#](https://reactnative.dev/docs/image#testid)

A unique identifier for this element to be used in UI Automation testing scripts.

## Methods[#](https://reactnative.dev/docs/image#methods)

### \`abortPrefetch()\` **Android**
\`Image.abortPrefetch(requestId);\`
Abort prefetch request.
Parameters:

| **NAME**             | **TYPE** | **DESCRIPTION**                         |
| -------------------- | -------- | --------------------------------------- |
| requestId (Required) | number   | Request id as returned by \`prefetch()\`. |

### \`getSize()\`
\`Image.getSize(uri, success, [failure]);\`

Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

| NAME                                                         | TYPE     |
| ------------------------------------------------------------ | -------- |
| uri (Required)                                               | string   |
| The location of the image.                                   |          |
| success (Required)                                           | function |
| The function that will be called if the  image was successfully found and width and height retrieved. |          |
| failure                                                      | function |
|                                                              |          |



### \`getSizeWithHeaders()\`
\`Image.getSizeWithHeaders(uri, headers, success, [failure]);\`
Retrieve the width and height (in pixels) of an image prior to displaying it with the ability to provide the headers for the request. This method can fail if the image cannot be found, or fails to download. It also does not work for static image resources.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

Parameters:

| NAME                                                         | TYPE     |
| ------------------------------------------------------------ | -------- |
| uri (Required)                                               | string   |
| The location of the image.                                   |          |
| headers (Required)                                           | object   |
| The headers for the request.                                 |          |
| success (Required)                                           | function |
| The function that will be called if the  image was successfully found and width and height retrieved. |          |
| failure                                                      | function |
| The function that will be called if there  was an error, such as failing to retrieve the image. |          |
|                                                              |          |

### \`prefetch()\`
\`await Image.prefetch(url);\`
Prefetches a remote image for later use by downloading it to the disk cache. Returns a promise which resolves to a boolean.

Parameters:

| NAME                                                  | TYPE     |
| ----------------------------------------------------- | -------- |
| url (Required)                                        | string   |
| The remote location of the image.                     |          |
| callback                                              | function |
| The function that will be called with  the requestId. | Android  |
||

### \`queryCache()\`[#](https://reactnative.dev/docs/image#querycache)
\`await Image.queryCache(urls);\`
Perform cache interrogation. Returns a promise which resolves to a mapping from URL to cache status, such as "disk", "memory" or "disk/memory". If a requested URL is not in the mapping, it means it's not in the cache.
Parameters:

| NAME          | TYPE  | DESCRIPTION                                |
| :------------ | :---- | :----------------------------------------- |
| urls Required | array | List of image URLs to check the cache for. |

### \`resolveAssetSource()\`[#](https://reactnative.dev/docs/image#resolveassetsource)
\`Image.resolveAssetSource(source);\`

Resolves an asset reference into an object which has the properties uri, width, and height.

Parameters:

| NAME            | TYPE                                                         | DESCRIPTION                                                  |
| :-------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| source Required | [ImageSource](https://reactnative.dev/docs/image#imagesource), number | A number (opaque type returned by \`require('./foo.png')\`) or an ImageSource. |

## Type Definitions[#](https://reactnative.dev/docs/image#type-definitions)

### ImageCacheEnum **iOS**[#](https://reactnative.dev/docs/image#imagecacheenum-ios)

Enum which can be used to set the cache handling or stategy for the potentially cached responses.

| TYPE                                                         | DEFAULT     |
| :----------------------------------------------------------- | :---------- |
| enum(\`default,\` \`reload,\` \`force-cache,\` \`only-if-cached\`) | \`'default'\` |

- \`default \`: Use the native platforms default strategy.
- \`reload\`: The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request.
- \`force - cache\`: The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source.
- \`only -if-cached\`: The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.

### ImageLoadEvent[#](https://reactnative.dev/docs/image#imageloadevent)

Object returned in the \`onLoad\` callback.

| TYPE   |
| :----- |
| object |

Properties:

| NAME                                                         | TYPE   |
| ------------------------------------------------------------ | ------ |
| width                                                        | number |
| The width of loaded image.                                   |        |
| height                                                       | number |
| The height of loaded image.                                  |        |
| uri                                                          | string |
| A string representing the resource  identifier for the image. |        |



### ImageSource[#](https://reactnative.dev/docs/image#imagesource)

| TYPE                             |
| :------------------------------- |
| object, array of objects, number |

**Properties (if passing as object or array of objects):**

| NAME                                                         | TYPE                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| uri                                                          | string                                                       |
| A string representing the resource  identifier for the image, which could be an http address, a local file path,  or the name of a static image resource. |                                                              |
| width                                                        | number                                                       |
| Can be specified if known at build time,  in which case the value will be used to set the default <Image/> component  dimension. |                                                              |
| height                                                       | number                                                       |
| Can be specified if known at build time,  in which case the value will be used to set the default <Image/> component  dimension. |                                                              |
| scale                                                        | number                                                       |
| Used to indicate the scale factor of the  image. Defaults to 1.0 if  unspecified, meaning that one image pixel equates to one display point / DIP. |                                                              |
| bundle                                                       | string                                                       |
| The iOS asset bundle which the image is  included in. This will default to [NSBundle  mainBundle] if not set. |                                                              |
| method                                                       | string                                                       |
| The HTTP Method to use. Defaults to 'GET' if not specified.  |                                                              |
| headers                                                      | object                                                       |
| An object representing the HTTP headers to  send along with the request for a remote image. |                                                              |
| body                                                         | string                                                       |
| The HTTP body to send with the request.  This must be a valid UTF-8 string, and will be sent exactly as specified,  with no additional encoding (e.g. URL-escaping or base64) applied. |                                                              |
| cache                                                        | [ImageCacheEnum](https://reactnative.dev/docs/image#imagecacheenum-ios) |
| Determines how the requests handles  potentially cached responses. |                                                              |


`;