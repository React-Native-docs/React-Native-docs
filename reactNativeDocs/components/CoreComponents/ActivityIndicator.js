import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-package';
import markdownStyle from '../../../../style/markdownStyle'

export default PageActivityIndicator = () => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<Markdown
				styles={markdownStyle.collectiveMd}
				onLink={(url) => Linking.openURL(url)}
			>
				{text1}
			</Markdown>
		</ScrollView>
	)
}

const text1 = `
원형 로딩 표시기를 표시합니다.

## Example[#](#example "Direct link to heading")

*   Function Component
*   Class Component


<div class="snack-player" data-snack-name="ActivityIndicator Function Component Example" data-snack-description="Example usage" data-snack-code="import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B" data-snack-dependencies="" data-snack-platform="web" data-snack-supported-platforms="ios,android,web" data-snack-theme="light" data-snack-preview="true" data-snack-loading="lazy"><iframe loading="lazy" src="https://snack.expo.io/embedded?iframeId=3uwx1lwx7v&amp;preview=true&amp;platform=web&amp;supportedPlatforms=ios,android,web&amp;name=ActivityIndicator Function Component Example&amp;description=Example usage&amp;theme=light&amp;waitForData=true" height="100%" width="100%" frameborder="0" data-snack-iframe="true" style="display: block;"></iframe></div>

<div class="snack-player" data-snack-name="ActivityIndicator Class Component Example" data-snack-description="Example usage" data-snack-code="import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B" data-snack-dependencies="" data-snack-platform="web" data-snack-supported-platforms="ios,android,web" data-snack-theme="light" data-snack-preview="true" data-snack-loading="lazy"><iframe loading="lazy" src="https://snack.expo.io/embedded?iframeId=vqx4ffgkko&amp;preview=true&amp;platform=web&amp;supportedPlatforms=ios,android,web&amp;name=ActivityIndicator Class Component Example&amp;description=Example usage&amp;theme=light&amp;waitForData=true" height="100%" width="100%" frameborder="0" data-snack-iframe="true" style="display: block;"></iframe></div>

# Reference[#](#reference "Direct link to heading")

## Props[#](#props "Direct link to heading")

### [View Props](/docs/view#props)[#](#view-props "Direct link to heading")

상속 받는 컴포넌트: [View Props](/docs/view#props).

* * *

### animating[#](#animating "Direct link to heading")

표시기를 표시할 것인지('true') 숨길 것인지('false')입니다.

<table>

<thead>

<tr>

<th>Type</th>

<th>Default</th>

</tr>

</thead>

<tbody>

<tr>

<td>bool</td>

<td>true</td>

</tr>

</tbody>

</table>

* * *

### color[#](#color "Direct link to heading")

회전하는 원의 색입니다.

<table>

<thead>

<tr>

<th>Type</th>

<th>Default</th>

</tr>

</thead>

<tbody>

<tr>

<td>[color](/docs/colors)</td>

<td>null (system accent default color)

Android

* * *

#999999

iOS

</td>

</tr>

</tbody>

</table>

* * *

### hidesWhenStopped

iOS

[#](#hideswhenstopped-ios "Direct link to heading")

애니메이션을 만들지 않을 때 표시기를 숨길지 여부를 나타냅니다.

<table>

<thead>

<tr>

<th>Type</th>

<th>Default</th>

</tr>

</thead>

<tbody>

<tr>

<td>bool</td>

<td>true</td>

</tr>

</tbody>

</table>

* * *

### size[#](#size "Direct link to heading")

표시기의 크기입니다.

<table>

<thead>

<tr>

<th>Type</th>

<th>Default</th>

</tr>

</thead>

<tbody>

<tr>

<td>enum('small', 'large')

* * *

number

Android

</td>

<td>small</td>

</tr>

</tbody>

</table>

</div>
`;