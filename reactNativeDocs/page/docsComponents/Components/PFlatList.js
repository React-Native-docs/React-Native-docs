import React from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Styles as styles, H1, H2, H3, H4, P } from "../../docs/Styles";
import CodeSection from "../../../component/CodeSection"
import ImageSection from "../../../component/ImageSection"
import BulletedList from "../../../component/BulletedList"

export default PFlatList = ({ navigation }) => {
	return (
		<ScrollView>
			<H1 content="FlatList" />
			<H4 content="가장 편리한 기능을 지원하는 기본 플랫 목록을 렌더링하기위한 고성능 인터페이스" />
			<H4 content="당겨서 새로 고침하거나 스크롤 로딩, 헤더와 바닥글, 특정 위치로 스크롤이동을 지원합니다." />
			<H4 content="섹션 지원이 필요한 경우 <SectionList>" />

			<H1 content="실행 결과물"/>
			<CodeSection content={Code1} navi={navigation} naviName={"FlatList1"} />
			<H4 content="여러 열을 렌더링하려면 numColumnsprop을 사용하십시오 . flexWrap레이아웃 대신이 방법을 사용 하면 항목 높이 논리와의 충돌을 방지 할 수 있습니다." />
			<H4 content="By passing extraData={selected} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes." />
			<H4 content="keyExtractor tells the list to use the ids for the react keys instead of the default key property." />
			<CodeSection content={Code2} navi={navigation} naviName={"FlatList2"} />
			<H4 content="메모리를 제한하고 부드러운 스크롤을 가능하게하기 위해 콘텐츠가 화면에서 비동기 적으로 렌더링됩니다. 즉, 유효 노출 률보다 빠르게 스크롤하고 일시적으로 빈 콘텐츠를 볼 수 있습니다. 이는 각 응용 프로그램의 요구 사항에 맞게 조정할 수있는 절충안이며, 우리는이를 개선하기 위해 노력하고 있습니다." />
			<H4 content="이것은 얕은 동일하게 유지 PureComponent되면 다시 렌더링되지 않음을 의미합니다 props. renderItem함수가 의존 하는 모든 것이 업데이트 이후 extraData가 아닌 소품 (예 :)으로 전달 되는지 확인하십시오" />
			
			<H1 content="Reference" />
			<H2 content="Props" />
			<H4 content=" ScrollView Props를 상속 합니다." />
			<H3 content="renderItem" />
			<CodeSection content={Code3} navi={navigation} naviName={"defalut"} />
			<H4 content="항목을 가져 data와서 목록에 렌더링합니다." />
			<H3 content="data" />
			<H4 content="단순성을 위해 데이터는 일반 배열입니다. 불변 목록과 같은 다른 것을 사용하려면 기본을 VirtualizedList직접 사용하십시오 ." />
			<H3 content="ListEmptyComponent" />
			<H4 content="목록이 비어있을 때 렌더링됩니다. React 컴포넌트" />
			<H3 content="extraData" />
			<H4 content="목록을 다시 렌더링하도록 지시하는 마커 속성입니다. PureComponent" />
			<H3 content="getItemLayout" />
			<H4 content="(data, index) => {length: number, offset: number, index: number}" />
			<H4 content="getItemLayout항목의 크기 (높이 또는 너비)를 미리 알고있는 경우 동적 콘텐츠 측정을 건너 뛸 수있는 선택적 최적화입니다. getItemLayout고정 된 크기의 항목이있는 경우 효율적입니다. " />
			<H3 content="horizontal" />
			<H4 content="true 인 경우 항목을 세로로 쌓는 대신 가로로 나란히 렌더링합니다." />
			<H3 content="initialNumToRender" />
			<H4 content="초기 배치에서 렌더링 할 항목 수입니다. 이 정도면 화면을 채울 수 있지만 그 이상은되지 않을 것입니다. " />
			<H4 content="첫 번째 항목으로 맨 위에서 시작하는 대신에서 시작하십시오"/>
			<H3 content="initialScrollIndex" />
			<H4 content="이렇게하면 첫 번째 initialNumToRender항목을 항상 렌더링하고이 초기 인덱스에서 시작하는 항목을 즉시 렌더링하는 위로 스크롤 최적화가 비활성화 됩니다. " />
			<H3 content="inverted" />
			<H4 content="스크롤 방향을 반대로합니다" />
			<H3 content="keyExtractor" />
			<H4 content="지정된 인덱스에서 지정된 항목에 대한 고유 키를 추출하는 데 사용됩니다. 키는 캐싱에 사용되며 항목 재정렬을 추적하기위한 반응 키로 사용됩니다." />
			<H1 content="scrollToIndex()" />
			<H1 content="scrollToEnd()" />

		</ScrollView>
	);
}
const Code1 = '\\\
import React from "react";\\\
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";\\\
\\\
const DATA = [\\\
	{\\\
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",\\\
		title: "First Item",\\\
	},\\\
	{\\\
		id: "3ac68afc - c605 - 48d3 - a4f8 - fbd91aa97f63",\\\
		title: "Second Item",\\\
	},\\\
	{\\\
		id: "58694a0f - 3da1 - 471f - bd96 - 145571e29d72",\\\
		title: "Third Item",\\\
	},\\\
];\\\
\\\
const Item = ({ title }) => (\\\
	<View style={styles.item}>\\\
		<Text style={styles.title}>{title}</Text>\\\
	</View>\\\
);\\\
\\\
const App = () => {\\\
	const renderItem = ({ item }) => (\\\
		<Item title={item.title} />\\\
	);\\\
\\\
	return (\\\
		<SafeAreaView style={styles.container}>\\\
			<FlatList\\\
				data={DATA}\\\
				renderItem={renderItem}\\\
				keyExtractor={item => item.id}\\\
			/>\\\
		</SafeAreaView>\\\
	);\\\
}\\\
\\\
const styles = StyleSheet.create({\\\
	container: {\\\
		flex: 1,\\\
		marginTop: StatusBar.currentHeight || 0,\\\
	},\\\
	item: {\\\
		backgroundColor: "#f9c2ff",\\\
		padding: 20,\\\
		marginVertical: 8,\\\
		marginHorizontal: 16,\\\
	},\\\
	title: {\\\
		fontSize: 32,\\\
	},\\\
});\\\
\\\
export default App;\\\
'

const Code2 = '\\\
import React, { useState } from "react";\\\
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from \\\"react-native";\\\
\\\
const DATA = [\\\
	{\\\
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",\\\
		title: "First Item",\\\
	},\\\
	{\\\
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",\\\
		title: "Second Item",\\\
	},\\\
	{\\\
		id: "58694a0f-3da1-471f-bd96-145571e29d72",\\\
		title: "Third Item",\\\
	},\\\
];\\\
\\\
const Item = ({ item, onPress, style }) => (\\\
	<TouchableOpacity onPress={onPress} style={[styles.item, style]}>\\\
		<Text style={styles.title}>{item.title}</Text>\\\
	</TouchableOpacity>\\\
);\\\
\\\
const App = () => {\\\
	const [selectedId, setSelectedId] = useState(null);\\\
\\\
	const renderItem = ({ item }) => {\\\
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";\\\
\\\
		return (\\\
			<Item\\\
				item={item}\\\
				onPress={() => setSelectedId(item.id)}\\\
				style={{ backgroundColor }}\\\
			/>\\\
		);\\\
	};\\\
\\\
	return (\\\
		<SafeAreaView style={styles.container}>\\\
			<FlatList\\\
				data={DATA}\\\
				renderItem={renderItem}\\\
				keyExtractor={(item) => item.id}\\\
				extraData={selectedId}\\\
			/>\\\
		</SafeAreaView>\\\
	);\\\
};\\\
\\\
const styles = StyleSheet.create({\\\
	container: {\\\
		flex: 1,\\\
		marginTop: StatusBar.currentHeight || 0,\\\
	},\\\
	item: {\\\
		padding: 20,\\\
		marginVertical: 8,\\\
		marginHorizontal: 16,\\\
	},\\\
	title: {\\\
		fontSize: 32,\\\
	},\\\
});\\\
\\\
export default App;\\\
'
const Code3 = 'renderItem({ item, index, separators });';
const local_styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		borderColor: "#999999",
		borderWidth: 1,
		margin: 10
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	}
})