// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React, { useEffect } from 'react';
import MainStackNavigator from './src/MainStackNavigator';

// Creates the functional component
const App = (props) => {

	// Renders the App
	return <MainStackNavigator />;
};

// Exports the module
export default App;
