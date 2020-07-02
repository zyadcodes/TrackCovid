// This screen will be the one that displays information about the currently selected location.
// It will use the StatsCard component to show different current statistics about the virus
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import StatsCard from '../../components/StatsCard/StatsCard';
import fontStyles from '../../config/fontStyles';
import StatsScreenStyle from './StatsScreenStyle';
import colors from '../../config/colors';
import LoadingSpinner from '../../components/LoadingSpinner';
import Country from '../../classes/Country';
import strings from '../../config/strings';
import World from '../../classes/World';
import { Icon } from 'react-native-elements';

// Creates the functional component
const StatsScreen = (props) => {
	// The state fields for this screen
	const [isLoading, setIsLoading] = useState(true);
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

			// Sets the last updated message
			const globalData = global.getBasicData();
			const updatedMessage = getUpdatedMessage(globalData.updated);
			setLastUpdated(updatedMessage);

			// Structures the data in an appropriate way to be read by the UI
			const constructedData = [
				{
					title: strings.ConfirmeCases,
					number: globalData.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TotalDeaths,
					number: globalData.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.ActiveCases,
					number: globalData.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TotalRecovered,
					number: globalData.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.MortalityRate,
					number: ((globalData.deaths / globalData.cases) * 100).toFixed(0) + '%',
					indicatorColor: colors.green,
				},
				{
					title: strings.TotalCritical,
					number: globalData.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TodaysCases,
					number: globalData.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TodaysDeaths,
					number: globalData.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.CasesPer1M,
					number: globalData.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.DeathsPer1M,
					number: globalData.deathsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TotalTested,
					number: globalData.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
				{
					title: strings.TestsPer1M,
					number: globalData.testsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
					indicatorColor: colors.green,
				},
			];

			setData(constructedData);
			setPageTitle(strings.Global);
			setIsLoading(false);
		}
	};

	// This function will take in a number in milliseconds and will return the message that will be rendered in the
	// last updated message
	const getUpdatedMessage = (dateNumber) => {
		const lastUpdatedDate = new Date(dateNumber);
		let lastUpdatedHours = lastUpdatedDate.getHours();
		let lastUpdatedMinutes = lastUpdatedDate.getMinutes();
		let AMPM = lastUpdatedHours < 12 ? 'AM' : 'PM';
		if (lastUpdatedHours > 12) {
			lastUpdatedHours -= 12;
		}
		if (lastUpdatedMinutes < 10) {
			lastUpdatedMinutes = '0' + lastUpdatedMinutes;
		}
		const date = lastUpdatedDate.getDate();
		const dateNumberOnesPlace = date.toString().charAt(date.toString().length - 1);
		const suffix =
			dateNumberOnesPlace === '1'
				? 'st'
				: dateNumberOnesPlace === '2'
				? 'nd'
				: dateNumberOnesPlace === '3'
				? 'rd'
				: 'th';
		const message =
			strings.LastUpdatedAt +
			lastUpdatedHours +
			':' +
			lastUpdatedMinutes +
			' ' +
			AMPM +
			' ' +
			strings.On +
			' ' +
			[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			][lastUpdatedDate.getMonth()] +
			' ' +
			date +
			suffix;
		return message;
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
				ListHeaderComponent={
					<View>
						<TouchableOpacity style={StatsScreenStyle.serachIcon}>
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
			/>
		</View>
	);
};

// Exports the component
export default StatsScreen;
