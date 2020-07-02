// This component will be the one that displays a specific statistic. An example would be to show that the total
// confirmed cases are 1,000,000
import React from 'react';
import StatsCardStyle from './StatsCardStyle';
import { View, Text } from 'react-native';
import fontStyles from '../../config/fontStyles';
import colors from '../../config/colors';
import PropTypes from 'prop-types';

// Creates the functional component
const StatsCard = (props) => {
	// Declares the Props for this component. It will take in a title for the stat, a number for the stat,
	// and a color for the top right indicator
	StatsCard.propTypes = {
		statTitle: PropTypes.string.isRequired,
		statNumber: PropTypes.string.isRequired,
		indicatorColor: PropTypes.string.isRequired,
	};

	// Fetches the passed in props
	const { statTitle, statNumber, indicatorColor } = props;

	// Returns the UI for the card
	return (
		<View style={StatsCardStyle.cardContainer}>
			<View style={StatsCardStyle.titleAndIndicatorContainer}>
				<Text style={[fontStyles.bold, fontStyles.subTextStyle, fontStyles.lightPurple]}>
					{statTitle}
				</Text>
				<View style={[StatsCardStyle.indicatorCircle, { backgroundColor: indicatorColor }]} />
			</View>
			<View style={StatsCardStyle.leftMarginStatCard}>
				<Text style={[fontStyles.bold, fontStyles.bigTextStyle, fontStyles.lightPurple]}>
					{statNumber}
				</Text>
			</View>
		</View>
	);
};

// Exports the component
export default StatsCard;
