// This is the component of the button in the SettingsMainScreen that will navigate to specific screens
// like the Prviacy Policy
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './SettingsButtonStyle';
import { Icon } from 'react-native-elements';
import { fontScale } from '../../config/dimensions';
import fontStyles from '../../config/fontStyles'
import colors from '../../config/colors';

// Declares the functional component
const SettingsButton = (props) => {
	return (
		<TouchableOpacity style={styles.touchable} onPress={() => props.onPress()}>
			<Text style={styles.titleText}>{props.title}</Text>
			<Icon
				type='ionicon'
				style={styles.iconStyle}
				name='ios-arrow-forward'
				size={fontScale * 24}
				color={colors.lightPurple}
			/>
		</TouchableOpacity>
	);
};

// Exports the component
export default SettingsButton;
