// This file is going to be the MainStackNavigator for the app, which will connect all the main screens
// together
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StatsScreen from './screens/StatsScreen/StatsScreen';
import SettingsMainScreen from './screens/SettingsScreens/SettingsMainScreen/SettingsMainScreen'
import {NavigationContainer} from '@react-navigation/native'

// Creates the stack navigator from react-navigation
const Stack = createStackNavigator();

// Creates the class containing the navigation (this is what is exported)
const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" initialRouteName={'StatsScreen'}>
				<Stack.Screen name='StatsScreen' component={StatsScreen} />
				<Stack.Screen name='SettingsScreen' component={SettingsMainScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// Exports the navigation
export default MainStackNavigator;
