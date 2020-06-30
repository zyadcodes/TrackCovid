// This class is going to represent a specific county (for now, within the United States), and will allow the client
// to fetch some basic information and data about the county's COVID-19 numbers.
import fetch from 'node-fetch';

// Declares and exports the class
export default class Country {
	// The fields associated with this class
    countyString = '';
    countyState = ''
	countyBasicData = '';

	// Constructor initialzes the information about this country
	constructor(countyString, countyState) {
        this.countyState = countyState.toLowerCase();
		this.countyString = countyString.toLowerCase();
	}

	// This function is going to fetch the basic data about the county and set it as a field within this object
	// so no double fetching is required
	initializeBasicData = async () => {
		const url = 'https://corona.lmao.ninja/v2/jhucsse/counties/' + this.countyString;

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		this.countyBasicData = json;
		return 0;
	};

	// Returns the county's string representation. e.g. King
	getCountyString = () => {
		return this.countyString;
	};

    // Returns the county's state as a string representation, e.g. California
    getCountyStateString = () => {
        return this.countyState;
    }

	// Method retrieves the basic data for this county
	getBasicData = () => {
		if (this.countyBasicData === '') {
			return 'DATA_NOT_INITIALIZED';
		} else {
			return this.countyBasicData;
			// This is an exmaple of the basic data
			// [
			//     {
			//       "country": "US",
			//       "province": "South Carolina",
			//       "county": "Abbeville",
			//       "updatedAt": "2020-04-16 23:30:51",
			//       "stats": {
			//         "confirmed": 10,
			//         "deaths": 0,
			//         "recovered": 0
			//       },
			//       "coordinates": {
			//         "latitude": "34.22333378",
			//         "longitude": "-82.46170658"
			//       }
			//     }
			//   ]
		}
	};

	// An asynchronous function that gets daily historical data going back a set amount of days, which will be
    // passed in as a parameter. This actually gets the entire state's information by county, so it filters
    // to the exact county specified
	getHistoricalData = async (numDays) => {
		const url = 'https://corona.lmao.ninja/v2/historical/usacounties/' + this.countyState + '?lastdays=' + numDays;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
        const json = await response.json();
        const specificCounty = json.find((element) => element.county === this.countyString);
		return specificCounty;

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
