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
React Native는 앱에서 사용할 수 있도록 다양한 기본 제공 [Core Components](/docs/intro-react-native) 구성 요소를 제공합니다. 왼쪽 사이드바(또는 좁은 화면에 있는 경우 위의 메뉴)에서 모두 찾을 수 있습니다. 어디서부터 시작해야 할지 잘 모르겠으면 다음 사항을 살펴보십시오.

카테고리:

*   [Basic Components](/docs/components-and-apis#basic-components)
*   [User Interface](/docs/components-and-apis#user-interface)
*   [List Views](/docs/components-and-apis#list-views)
*   [Android-specific](/docs/components-and-apis#android-components-and-apis)
*   [iOS-specific](/docs/components-and-apis#ios-components-and-apis)
*   [Others](/docs/components-and-apis#others)

사용자는 React Native와 함께 번들로 제공되는 구성 요소 및 API에만 국한되지 않습니다. 리액트 네이티브에는 수천 명의 개발자들이 모여 있습니다. 특정 작업을 수행하는 라이브러리를 찾는 경우 [라이브러리 찾기에 대한 이 안내서](/docs/libraries#finding-library)를 참조하십시오.

## Basic Components[#](#basic-components "Direct link to heading")

대부분의 앱은 이러한 기본 구성 요소 중 하나를 사용하게 됩니다.

### View

UI를 구축하는 가장 기본적인 구성 요소입니다.

### Text

텍스트를 표시하는 구성 요소입니다.

### Image

이미지를 표시하는 구성 요소입니다.

### TextInput

키보드를 통해 텍스트를 앱에 입력하기 위한 구성 요소입니다.

### ScrollView

여러 구성 요소 및 보기를 호스팅할 수 있는 스크롤 컨테이너를 제공합니다.

### StyleSheet

CSS 스타일시트와 유사한 추상화 계층을 제공합니다.

## User Interface[#](#user-interface "Direct link to heading")

이러한 공통 사용자 인터페이스 컨트롤은 모든 플랫폼에서 렌더링됩니다.

### Button

A basic button component for handling touches that should render nicely on any platform.

](/docs/button)</div>

<div class="component">[

### Switch

터치 처리를 위한 기본 버튼 구성 요소로, 어느 플랫폼에서나 잘 렌더링되어야 합니다.

## List Views[#](#list-views "Direct link to heading")

보다 일반적인 [ScrollView](/docs/scrollview)와는 달리 다음 목록 보기 구성 요소는 현재 화면에 표시되는 요소만 렌더링합니다. 이렇게 하면 긴 데이터 목록을 표시할 수 있는 성능을 선택할 수 있습니다.

### FlatList

성능 있는 스크롤 가능 목록을 렌더링하는 구성 요소입니다.

### SectionList

FlatList와 같지만 섹션이 나누어진 리스트입니다.

## Android Components and APIs[#](#android-components-and-apis "Direct link to heading")

다음 구성 요소 중 다수는 일반적으로 사용되는 Android 클래스를 위한 포장지를 제공합니다.

### BackHandler

뒤쪽 탐색을 위한 하드웨어 버튼 누름 감지

### DrawerLayoutAndroid

Android에서 서랍 레이아웃(DrawerLayout)을 렌더링합니다.

### PermissionsAndroid

Android Mobile에 도입된 권한에 대한 액세스를 제공합니다.

### ToastAndroid

Android Toast(잠깐 뜨는 화면 아래 반투명 회색) 경고창을 생성합니다.

## iOS Components and APIs[#](#ios-components-and-apis "Direct link to heading")

다음 구성 요소 중 다수는 일반적으로 사용되는 UIKit 클래스에 대한 래퍼를 제공합니다.

### ActionSheetIOS

iOS 작업 시트 또는 공유 시트를 표시하는 API입니다.

## Others[#](#others "Direct link to heading")

이러한 구성 요소는 특정 응용 프로그램에 유용할 수 있습니다. 구성 요소 및 API의 전체 목록을 보려면 왼쪽 사이드바(또는 좁은 화면에 있는 경우 위의 메뉴)를 확인하십시오.

### ActivityIndicator

원형 로딩 표시기를 표시합니다.

### Alert

지정된 제목과 메시지가 있는 경보 대화 상자를 시작합니다.

### Animated

제작 및 유지 관리가 용이한 유연하고 강력한 애니메이션을 만드는 라이브러리입니다.

### Dimensions

실제 장치의 크기를 가져오는 인터페이스를 제공합니다.

### KeyboardAvoidingView

입력 시 키보드의 방해가 되지 않도록 자동으로 이동하는 보기를 제공합니다.

### Linking

수신 및 송신 앱 링크와 상호 작용할 수 있는 일반 인터페이스를 제공합니다.

### Modal

내용을 둘러싸는 보기 위에 간단하게 표시할 수 있습니다.

### PixelRatio

장치 픽셀 밀도에 대한 액세스를 제공합니다.

### RefreshControl

이 구성 요소는 ScrollView 내에서 새로 고침 기능을 추가하는 데 사용됩니다.

### StatusBar

최상단의 앱 상태 표시줄을 제어하는 구성 요소입니다.(배터리, 와이파이 있는 부분)

`