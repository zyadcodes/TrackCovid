// This file is going to be the MainStackNavigator for the app, which will connect all the main screens
// together
import { createStackNavigator } from '@react-navigation/stack';
import StatsScreen from './screens/StatsScreen/StatsScreen';

// Creates the stack navigator from react-navigation
const Stack = createStackNavigator();

// Creates the class containing the navigation (this is what is exported)
const MainStackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName={'StatsScreen'}>
			<Stack.Screen name='StatsScreen' component={StatsScreen} />
		</Stack.Navigator>
	);
};

// Exports the navigation
export default MainStackNavigator;
