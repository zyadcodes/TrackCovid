// This file is going to contain some functions that will aid the StatsScreen in some basic logic.
// This file is mainly used for clean code so not all the code is in one file. All the functions are
// named exports
import strings from '../../config/strings';
import colors from '../../config/colors';

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

// This method will take in a data object and will construct the data in an appropriate way to be
// read by the UI
const getConstructedData = (data) => {
	// Structures the data in an appropriate way to be read by the UI
	const constructedData = [
		{
			title: strings.ConfirmeCases,
			number: data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TotalDeaths,
			number: data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.ActiveCases,
			number: data.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TotalRecovered,
			number: data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.MortalityRate,
			number: ((data.deaths / data.cases) * 100).toFixed(0) + '%',
			indicatorColor: colors.green,
		},
		{
			title: strings.TotalCritical,
			number: data.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TodaysCases,
			number: data.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TodaysDeaths,
			number: data.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.CasesPer1M,
			number: data.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.DeathsPer1M,
			number: data.deathsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TotalTested,
			number: data.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
		{
			title: strings.TestsPer1M,
			number: data.testsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			indicatorColor: colors.green,
		},
    ];
    
    return constructedData;
};

export { getUpdatedMessage, getConstructedData };
