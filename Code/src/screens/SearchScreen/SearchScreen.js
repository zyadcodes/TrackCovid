// This is going to be the screen where users will be able to search through a selection of cities, counties, or countries
// and will be able to select one of them
import React, { useState } from 'react';
import {
	View,
	Keyboard,
	TouchableWithoutFeedback,
	TextInput,
	FlatList,
	Text,
	TouchableOpacity,
} from 'react-native';
import SearchScreenStyle from './SearchScreenStyle';
import stringSimilarity from 'string-similarity';
import { isIphoneX } from 'react-native-iphone-x-helper';
import colors from '../../config/colors';
import fontStyles from '../../config/fontStyles';
import strings from '../../config/strings';
import CountryList from './CountryList';
import analytics from '@react-native-firebase/analytics';
import BackButton from '../../components/BackButton/BackButton';

// Creates the functional component
const SearchScreen = ({ route, navigation }) => {
	// Global fields used in this screen
	const countries = CountryList;

	// The state fields for this screen
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);

	// This method will handle the actual searching of the screen based on the text inputs that are entered
	const search = (input) => {
		// Fetches only the country names to search through
		const countryNames = countries.map((country) => country.name);

		// Uses Dice's Coefficient algorithm to search through for best matches
		const findMatch = stringSimilarity.findBestMatch(input, countryNames);

		// Returns the top 5 best matches and sets them as the results
		const ratings = findMatch.ratings;
		ratings.sort((a, b) => b.rating - a.rating);
		let finalArray = ratings.slice(0, 5);
		finalArray = finalArray.map((result) =>
			countries.find((value) => result.target === value.name)
		);
		setResults(finalArray);
	};

	// Returns the UI of the screen
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={SearchScreenStyle.screenContainer}>
				<View style={SearchScreenStyle.iphoneXTopView} />
				<View style={SearchScreenStyle.searchInputContainerStyle}>
					<TextInput
						value={input}
						placeholder={strings.SearchForACountry}
						placeholderTextColor={colors.lightPurple}
						onChangeText={(newText) => {
							setInput(newText);
							// Only searches after two characters have been typed
							if (newText.length > 1) {
								search(newText);
							}
						}}
						style={SearchScreenStyle.searchInputStyle}
					/>
				</View>
				<FlatList
					data={results}
					extraData={results}
					keyExtractor={(item, index) => item.code}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							style={SearchScreenStyle.rowSelectionStyle}
							onPress={() => {
								// Logs to Firebase Analytics and then navigates to the correct screen
								analytics().logEvent('search', {
									searchedItem: item.name,
								});
								navigation.push('StatsScreen', { country: item });
							}}>
							<Text style={[fontStyles.bigTextStyle, fontStyles.lightPurple]}>{item.name}</Text>
						</TouchableOpacity>
					)}
				/>
				<BackButton navigation={navigation} />
			</View>
		</TouchableWithoutFeedback>
	);
};

// Exports the component
export default SearchScreen;
