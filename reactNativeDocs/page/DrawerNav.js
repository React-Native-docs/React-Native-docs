import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Connectivity from './docs/ReactNativeDocs/screen/Connectivity'
import Design from './docs/ReactNativeDocs/screen/Design'
import GuidesAndroid from './docs/ReactNativeDocs/screen/GuidesAndroid'
import GuidesiOS from './docs/ReactNativeDocs/screen/GuidesiOS'
import Inclustion from './docs/ReactNativeDocs/screen/Inclustion'
import Interacton from './docs/ReactNativeDocs/screen/Interacton'
import JavaScriptRuntime from './docs/ReactNativeDocs/screen/JavaScriptRuntime'
import NativeComponents from './docs/ReactNativeDocs/screen/NativeComponents'
import NativeModules from './docs/ReactNativeDocs/screen/NativeModules'
import Performance from './docs/ReactNativeDocs/screen/Performance'
import Workflow from './docs/ReactNativeDocs/screen/Workflow'
import TheBasics from './docs/ReactNativeDocs/screen/TheBasics'
import EnvironmentSetup from './docs/ReactNativeDocs/screen/EnvironmentSetup'
import Home from './docs/Home'
	
// import Icon from 'react-native-vector-icons/dist/Feather';
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
const ReactNativeDocsList = [
	TheBasics,
	EnvironmentSetup,
	Workflow,
	Design,
	Interacton,
	Inclustion,
	Performance,
	JavaScriptRuntime,
	Connectivity,
	NativeModules,
	NativeComponents,
	GuidesAndroid,
	GuidesiOS,
]
export default function DrawerNav() {
	return (
		<NavigationContainer>
				<Drawer.Navigator
				initialRouteName="Home" 
				screenOptions={DrawerscreenOptions}
				drawerContentOptions={drawerContentOptions}>
					<Drawer.Screen
					name={'Home'}
					component={Home}
						options={{
							headerRight: () => (
								<TouchableOpacity onPress={titleOnPress}>
									<Ionicons name="md-search" size={32} color="white" style={IconStyle} />
								</TouchableOpacity>),
							drawerLabel: 'getting-started',
						}}
				/>
				{/* ReactNativeDocs */}
				{ReactNativeDocsList.map((data) =>
					<Drawer.Screen
						key={data.name}
						name={data.name}
						component={data}
						options={{drawerLabel: data.name}}
					/>
				)}
				</Drawer.Navigator>
			
		</NavigationContainer>
	);
}

const DrawerscreenOptions = {
	headerShown: true,
	headerTintColor: 'white',
	headerStyle: { backgroundColor: '#20232B' },
	headerTitleAlign: 'center'
}
const drawerContentOptions = {
	activeTintColor: '#4DD6F6',
	activeBackgroundColor: 'white',
	itemStyle: { marginVertical: 0 },
}

const IconStyle = { marginRight: 25 }
const titleOnPress = () => alert('This is a search button!')