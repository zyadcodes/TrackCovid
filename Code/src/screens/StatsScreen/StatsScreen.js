// This screen will be the one that displays information about the currently selected location.
// It will use the StatsCard component to show different current statistics about the virus
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import StatsCard from '../../components/StatsCard/StatsCard';
import fontStyles from '../../config/fontStyles';
import StatsScreenStyle from './StatsScreenStyle';
import colors from '../../config/colors';
import LoadingSpinner from '../../components/LoadingSpinner';
import strings from '../../config/strings';
import World from '../../classes/World';
import { Icon } from 'react-native-elements';
import { getUpdatedMessage, getConstructedData } from './FunctionHelpers';

// Creates the functional component
const StatsScreen = (props) => {
	// The state fields for this screen
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [data, setData] = useState({});
	const [pageTitle, setPageTitle] = useState('');
	const [lastUpdated, setLastUpdated] = useState('');

	// The props that would be passed into the screen to determine which location to show data for
	const { location } = props;

	// The useEffect method. This will check which data to fetch. It will fetch global data as a default unless
	// a specific location is selected
	useEffect(() => {
		fetchFunc();
	}, []);

	// This is a helper function for useEffect because useEffect cannot be asyncrhronous
	const fetchFunc = async () => {
		// If a location is set, shows data for it. If none is set, shows global data
		if (location) {
		} else {
			const global = new World();
			await global.initializeBasicData();

			// Fetches all the fields it needs to
			const globalData = global.getBasicData();
			const updatedMessage = getUpdatedMessage(globalData.updated);
			const constructedData = getConstructedData(globalData);

			setLastUpdated(updatedMessage);
			setData(constructedData);
			setPageTitle(strings.Global);
			setIsLoading(false);
			setIsRefreshing(false);
		}
	};

	// Renders the loading state for this screen
	if (isLoading === true) {
		return (
			<View style={StatsScreenStyle.loadingContainer}>
				<LoadingSpinner isVisible={true} />
			</View>
		);
	}

	// Returns the UI of the screen
	return (
		<View style={StatsScreenStyle.screenBackground}>
			<FlatList
				data={data}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => fetchFunc()} />}
				ListHeaderComponent={
					<View>
						<TouchableOpacity
							style={[StatsScreenStyle.iconContainer, StatsScreenStyle.iconMarginTop]}>
							<Icon name='search' type='font-awesome' color={colors.lightPurple} />
						</TouchableOpacity>
						<View style={StatsScreenStyle.titleContainer}>
							<Text style={[fontStyles.bigTitleTextStyle, fontStyles.lightPurple, fontStyles.bold]}>
								{pageTitle}
							</Text>
							<Text style={[fontStyles.subTextStyle, fontStyles.lightPurple]}>{lastUpdated}</Text>
						</View>
					</View>
				}
				keyExtractor={(item, index) => index}
				numColumns={2}
				renderItem={({ item, index }) => (
					<View style={StatsScreenStyle.statCardContainer}>
						<StatsCard
							statTitle={item.title}
							statNumber={item.number}
							indicatorColor={item.indicatorColor}
						/>
					</View>
				)}
				ListFooterComponent={
					<View>
						<TouchableOpacity
							onPress={() => props.navigation.navigate('SettingsScreen')}
							style={[StatsScreenStyle.iconContainer, StatsScreenStyle.iconMarginBottom]}>
							<Icon name='gears' type='font-awesome' color={colors.lightPurple} />
						</TouchableOpacity>
					</View>
				}
			/>
		</View>
	);
};

// Exports the component
export default StatsScreen;
