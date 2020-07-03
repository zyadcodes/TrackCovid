// This is the stylesheet for the StatsScreen
import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../config/dimensions';
import colors from '../../config/colors';

// Exports the StyleSheet
export default StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.lightPurple,
	},
	screenBackground: {
		flex: 1,
		backgroundColor: colors.darkPurple,
	},
	iconContainer: {
		width: screenHeight * 0.07,
		height: screenHeight * 0.07,
		borderRadius: screenHeight * 0.035,
		backgroundColor: colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.25,
        shadowRadius: 2,
        alignSelf: 'flex-end',
        marginRight: screenWidth * 0.075
	},
	iconMarginTop: {
        marginTop: screenHeight * 0.065,
	},
	iconMarginBottom: {
		marginBottom: screenHeight * 0.025,
	},
    titleContainer: {
        marginTop: screenHeight * 0.0125,
        marginLeft: screenWidth * 0.05,
        height: screenHeight * 0.115,
        justifyContent: 'space-between'
	},
	statCardContainer: {
		marginLeft: screenWidth * (0.1 / 3),
		marginVertical: screenHeight * 0.025
	}
});
