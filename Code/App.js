// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React from 'react';
import StatsScreen from './src/screens/StatsScreen/StatsScreen';

// Creates the functional component
const App = (props) => {
	// Renders the App
	return <StatsScreen />;
};

// Exports the module
export default App;
