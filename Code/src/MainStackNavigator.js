// This file is going to be the MainStackNavigator for the app, which will connect all the main screens
// together
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatsScreen from './screens/StatsScreen/StatsScreen';
import { NavigationContainer } from '@react-navigation/native';

// Creates the stack navigator from react-navigation
const Stack = createStackNavigator();

// Creates the class containing the navigation (this is what is exported)
const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'StatsScreen'} headerMode={'none'}>
				<Stack.Screen name='StatsScreen' component={StatsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// Exports the navigation
export default MainStackNavigator;
