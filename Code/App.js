// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React from 'react';
import MainStackNavigator from './src/MainStackNavigator';
import codePush from 'react-native-code-push';

// Creates the functional component
let App = (props) => {

	// Renders the App
	return <MainStackNavigator />;
};

// Exports the module wrapped with CodePush
App = codePush(App);
export default App;
