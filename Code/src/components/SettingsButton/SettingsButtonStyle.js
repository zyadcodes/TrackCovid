import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { fontScale, screenHeight, screenWidth } from '../../config/dimensions';
import fontStyles from '../../config/fontStyles';

export default styles = StyleSheet.create({
	touchable: {
		marginBottom: screenHeight * 0.03,
		height: screenHeight * 0.05,
		width: screenWidth * 0.95,
		borderRadius: 15,
		alignSelf: 'center',
		backgroundColor: colors.purple,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
	},
	titleText: {
		...fontStyles.mainTextStyle,
		...fontStyles.lightPurple,
		marginLeft: screenWidth * 0.05,
	},
	iconStyle: {
		marginRight: screenWidth * 0.05,
	},
});
