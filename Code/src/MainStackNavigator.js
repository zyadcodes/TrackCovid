// This file is going to be the MainStackNavigator for the app, which will connect all the main screens
// together
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StatsScreen from './screens/StatsScreen/StatsScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';

// Creates the stack navigator from react-navigation
const Stack = createStackNavigator();

// Creates the class containing the navigation (this is what is exported)
const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'StatsScreen'} headerMode={'none'}>
				<Stack.Screen name='StatsScreen' component={StatsScreen} />
				<Stack.Screen name='SearchScreen' component={SearchScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// Exports the navigation
export default MainStackNavigator;
