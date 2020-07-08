// This screen is going to contain information about the application and its development
import React, { useEffect } from 'react';
import AppInfoScreen from '../../../components/AppInfoScreen/AppInfoScreen';
import strings from '../../../config/strings';
import analytics from '@react-native-firebase/analytics';

// Declares the functional component
const AboutUsScreen = ({ route, navigation }) => {
	// The useEffect method sets the screen in Firebase Analytics
	useEffect(() => {
		analytics().setCurrentScreen('About Us Screen', 'AboutUsScreen');
	}, []);

	// Returns the UI
	return (
		<AppInfoScreen
			navigation={navigation}
			title={strings.AboutUs}
			information={strings.AboutUsInformation}
		/>
	);
};

// Exports the component
export default AboutUsScreen;
