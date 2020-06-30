// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Country from './src/classes/Country';
import County from './src/classes/County';

// Creates the functional component
const App = (props) => {

  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchFunc();
	}, []);

	const fetchFunc = async () => {
    const kingCounty = new County('King', "Washington");
    await kingCounty.initializeBasicData();
    const history = await kingCounty.getHistoricalData(3);
    console.log(history)
    setIsLoading(false);
	};

  if (isLoading === true) {
    return <Text>Loading</Text>
  } else {
    return <Text>Done</Text>
  }
	// Renders the UI
	return <View />;
};

// Exports the module
export default App;
