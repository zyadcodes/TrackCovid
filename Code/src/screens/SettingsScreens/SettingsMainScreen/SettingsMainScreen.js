// This screen is going to show all of the different settings options associated with this app
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './SettingsMainScreenStyle';
import SettingsButton from '../../../components/SettingsButton/SettingsButton';
import BackButton from '../../../components/BackButton/BackButton';
import strings from '../../../config/strings';
import analytics from '@react-native-firebase/analytics';

// Declares the functional component
const SettingsMainScreen = ({ route, navigation }) => {
	// The state fields of this screen
	const [screens] = useState([
		{ title: strings.PrivacyPolicy, screen: 'PrivacyPolicyScreen' },
		{ title: strings.TermsOfService, screen: 'TermsOfServiceScreen' },
		{ title: strings.AboutUs, screen: 'AboutUsScreen' },
	]);

	// The useEffect method for this screen which is going to set the screen in Firebase Analytics
	useEffect(() => {
		analytics().setCurrentScreen('Settings Main Screen', 'SettingsMainScreen');
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{strings.Settings}</Text>
			<FlatList
				data={screens}
				keyExtractor={(item, index) => item.screen}
				renderItem={({ item, index }) => (
					<SettingsButton
						onPress={() => {
							navigation.navigate(item.screen);
						}}
						title={item.title}
					/>
				)}
			/>
			<BackButton navigation={navigation} />
		</View>
	);
};

// Exports the component
export default SettingsMainScreen;
