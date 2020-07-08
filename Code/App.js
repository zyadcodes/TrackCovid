// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React, { useEffect } from 'react';
import MainStackNavigator from './src/MainStackNavigator';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen'


// Creates the functional component
let App = (props) => {

	// Hides the SplashScreen
	useEffect(() => {
		SplashScreen.hide();
	}, [])

	// Renders the App
	return <MainStackNavigator />;
};

// Exports the module wrapped with CodePush
App = codePush(App);
export default App;
