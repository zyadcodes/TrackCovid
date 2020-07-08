// This is going to contain the StyleSheet for the SearchScreen
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { screenHeight, screenWidth } from '../../config/dimensions';
import fontStyles from '../../config/fontStyles';

export default StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: colors.darkPurple,
	},
	iphoneXTopView: {
		height: 30,
		backgroundColor: colors.gray,
	},
	searchInputStyle: {
		backgroundColor: colors.purple,
		height: screenHeight * 0.05,
		paddingLeft: 10,
		width: screenWidth * 0.95,
		borderRadius: 20,
		...fontStyles.lightPurple,
		...fontStyles.subTextStyle,
	},
	searchInputContainerStyle: {
		height: screenHeight * 0.075,
		backgroundColor: colors.gray,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 0,
	},
	rowSelectionStyle: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'flex-start',
		width: screenWidth * 0.95,
		height: screenHeight * 0.075,
		borderBottomColor: colors.lightPurple,
		borderBottomWidth: 1,
	},
});
