// This is going to be the file that contains the StyleSheet for the StatsCard component
import { StyleSheet } from 'react-native';
import { screenHeight, screenWidth } from '../../config/dimensions';
import colors from '../../config/colors';

// Exports the styles
export default StyleSheet.create({
	cardContainer: {
		height: screenHeight * 0.1,
		width: screenWidth * 0.45,
		borderRadius: 20,
		backgroundColor: colors.purple,
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
	},
	titleAndIndicatorContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: screenWidth * 0.02,
		alignItems: 'center'
	},
	indicatorCircle: {
		height: screenHeight * 0.02,
		width: screenHeight * 0.02,
		borderRadius: screenHeight * 0.01,
	},
	leftMarginStatCard: {
		paddingLeft: screenWidth * 0.02
	},
});
