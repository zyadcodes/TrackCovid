// This is a component that will be used to render basic screens like Terms of Service, Privacy Policy, etc.
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import BackButton from '../BackButton/BackButton';
import styles from './AppInfoScreenStyle';

// Declares the component
const AppInfoScreen = (props) => {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.privacyPolicyText}>{props.information}</Text>
			</ScrollView>
			<BackButton navigation={props.navigation} />
		</View>
	);
};

// Exports the component
export default AppInfoScreen;
