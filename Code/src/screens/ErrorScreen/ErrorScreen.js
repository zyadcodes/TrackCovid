// This screen is going to appear when the app has encountered an error. Instead of crashing, it'll just navigate to this
// screen to let the user know that the developers are working on it
import React from 'react';
import { View, Text, Button } from 'react-native';
import ErrorScreenStyle from './ErrorScreenStyle';
import { Icon } from 'react-native-elements';
import strings from '../../config/strings';
import fontStyles from '../../config/fontStyles';

// Declares the functional component
const ErrorScreen = ({ routes, navigation }) => {
	// Returns the UI for the screen
	return (
		<View style={ErrorScreenStyle.screenBackground}>
			<Icon name='warning' type='font-awesome' color={colors.lightPurple} />
			<Text style={[fontStyles.mainTextStyle, fontStyles.lightPurple]}>{strings.ErrorMessage}</Text>
			<Button
                title={strings.TryAgain}
				onPress={() => {
					navigation.push('StatsScreen');
				}}
			/>
		</View>
	);
};

// Exports the component
export default ErrorScreen;
