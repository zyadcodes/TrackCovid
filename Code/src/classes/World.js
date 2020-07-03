// This class is going to represent the entire world and will allow the client to fetch data about the world
import fetch from 'node-fetch';

// Declares and exports the class
export default class World {
	// The fields associated with this class
	basicData = '';

	// This function is going to initialize the object with basic data by fetching the information from the API's
	// and setting it to the basic data field mentioned about
	initializeBasicData = async () => {
		const url = 'https://corona.lmao.ninja/v2/all?yesterday';

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		this.basicData = json;
		return 0;
	};

	// Method retrieves the basic data for the world
	getBasicData = () => {
		if (this.basicData === '') {
			return 'DATA_NOT_INITIALIZED';
		} else {
			return this.basicData;
			// This is an exmaple of the basic data
			// {
			//   "updated": 1587140275989,
			//   "cases": 2181308,
			//   "todayCases": 95022,
			//   "deaths": 145471,
			//   "todayDeaths": 6996,
			//   "recovered": 547069,
			//   "active": 1488768,
			//   "critical": 56602,
			//   "casesPerOneMillion": 280,
			//   "deathsPerOneMillion": 18,
			//   "tests": 18215929,
			//   "testsPerOneMillion": 2338.3,
			//   "affectedCountries": 212
			// }
		}
	};
}
