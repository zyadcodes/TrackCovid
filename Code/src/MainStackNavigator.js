// This file is going to be the MainStackNavigator for the app, which will connect all the main screens
// together
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StatsScreen from './screens/StatsScreen/StatsScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import ErrorScreen from './screens/ErrorScreen/ErrorScreen';
import PrivacyPolicyScreen from './screens/SettingsScreens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import TermsOfServiceScreen from './screens/SettingsScreens/TermsOfServiceScreen/TermsOfServiceScreen';
import SettingsMainScreen from './screens/SettingsScreens/SettingsMainScreen/SettingsMainScreen';
import AboutUsScreen from './screens/SettingsScreens/AboutUsScreen/AboutUsScreen';

// Creates the stack navigator from react-navigation
const Stack = createStackNavigator();

// Creates the class containing the navigation (this is what is exported)
const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none' initialRouteName={'StatsScreen'}>
				<Stack.Screen name='StatsScreen' component={StatsScreen} />
				<Stack.Screen name='SearchScreen' component={SearchScreen} />
				<Stack.Screen name='ErrorScreen' component={ErrorScreen} />
				<Stack.Screen name='SettingsScreen' component={SettingsMainScreen} />
				<Stack.Screen name='PrivacyPolicyScreen' component={PrivacyPolicyScreen} />
				<Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} />
				<Stack.Screen name='AboutUsScreen' component={AboutUsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// Exports the navigation
export default MainStackNavigator;
