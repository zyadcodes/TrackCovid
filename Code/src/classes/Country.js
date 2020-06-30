// This class is going to represent a specific country and will allow the client to get specific statistics and
// information about the country
import fetch from 'node-fetch';

// Declares and exports the class
export default class Country {
	// The fields associated with this class
	countryString = '';
	countryISOCode = '';
	countryBasicData = '';

	// Constructor initialzes the information about this country
	constructor(countryString, countryISOCode) {
		this.countryString = countryString.toLowerCase();
		this.countryISOCode = countryISOCode.toUpperCase();
	}

	// This function is going to fetch the basic data about the country and set it as a field within this object
	// so no double fetching is required
	initializeBasicData = async () => {
		const url =
			'https://corona.lmao.ninja/v2/countries/' +
			this.countryISOCode +
			'?yesterday=true&strict=true&query%20';
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		this.countryBasicData = json;
		return 0;
	};

	// Returns the country's string representation. e.g. United States
	getCountryString = () => {
		return this.countryString;
	};

	// Returns the country's ISO code. e.g. USA.
	getCountryISOCode = () => {
		return this.countryISOCode;
	};

	// Method retrieves the basic data for this country
	getBasicData = () => {
		if (this.countryBasicData === '') {
			return 'DATA_NOT_INITIALIZED';
		} else {
			return this.countryBasicData;
			// This is an exmaple of the basic data
			// {
			//     "updated": 1587140875474,
			//     "country": "Italy",
			//     "countryInfo": {
			//       "_id": 380,
			//       "iso2": "IT",
			//       "iso3": "ITA",
			//       "lat": 42.8333,
			//       "long": 12.8333,
			//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/it.png"
			//     },
			//     "cases": 168941,
			//     "todayCases": 3786,
			//     "deaths": 22170,
			//     "todayDeaths": 525,
			//     "recovered": 40164,
			//     "active": 106607,
			//     "critical": 2936,
			//     "casesPerOneMillion": 2794,
			//     "deathsPerOneMillion": 367,
			//     "tests": 1178403,
			//     "testsPerOneMillion": 19490
			//   }
		}
	};

	// An asynchronous function that gets daily historical data going back a set amount of days, which will be
	// passed in as a parameter
	getHistoricalData = async (numDays) => {
		const url =
			'https://corona.lmao.ninja/v2/historical/' + this.countryISOCode + '?lastdays=' + numDays;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		return json;

		// This is an example of this function's return
		// {
		//     "country": "Spain",
		//     "provinces": [
		//       "mainland"
		//     ],
		//     "timeline": {
		//       "cases": {
		//         "3/21/20": 25374,
		//         "3/22/20": 28768,
		//         "3/23/20": 35136,
		//         "3/24/20": 39885,
		//       },
		//       "deaths": {
		//         "3/21/20": 1375,
		//         "3/22/20": 1772,
		//         "3/23/20": 2311,
		//         "3/24/20": 2808,
		//       },
		//       "recovered": {
		//         "3/21/20": 2125,
		//         "3/22/20": 2575,
		//         "3/23/20": 2575,
		//         "3/24/20": 3794,
		//       }
		//     }
		//   }
	};
}
