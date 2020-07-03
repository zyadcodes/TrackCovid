// This is going to be the screen that is automatically navigated to by React Native. It will navigate to the rest
// of the screens
import React from 'react';
import MainStackNavigator from './src/MainStackNavigator';

// Creates the functional component
const App = (props) => {
	// Renders the App
	return <MainStackNavigator />;

	// return (
	// 	<View style={{ flex: 1, marginTop: 50 }}>
	// 		<GooglePlacesAutocomplete
	// 			placeholder='Search'
	// 			onPress={(data, details = null) => {
	// 				// 'details' is provided when fetchDetails = true
	// 				console.log(data, details);
	// 			}}
	// 			query={{
	// 				key: 'AIzaSyB6QLexwxb3J1yuAq7m6CK80ZKYiZq42iY',
	// 				language: 'en',
	// 				types: '(regions)'
	// 			}}
	// 			fetchDetails={true}
	// 			filterReverseGeocodingByTypes={['country']}
	// 		/>
	// 	</View>
	// );
};

// Exports the module
export default App;
