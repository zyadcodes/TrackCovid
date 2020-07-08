// This component will represent a basic back button to be used in the basic screens in AppInfoScreen
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './BackButtonStyle';
import { Icon } from 'react-native-elements';
import { fontScale } from '../../config/dimensions';
import colors from '../../config/colors';

const BackButton = (props) => {
	return (
		<TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack()}>
			<Icon type='font-awesome' name='arrow-left' size={fontScale * 28} color={colors.lightPurple} />
		</TouchableOpacity>
	);
};
export default BackButton;
