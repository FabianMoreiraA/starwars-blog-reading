const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Starwars
			swapiList: [],
			cardDetailCharacter: [],
			planetList: [],
			planetDetail: [],
			favorites: [],

			// Starwars End

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Starwars
			// Fetch list of cards character
			fetchSwapies: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch("https://swapi.dev/api/people/", config);
				const json = await response.json();
				console.log("--json--", json);
				setStore({ swapiList: json.results });
			},
			// Fetch Card Detail character
			fetchCardDetail: async id => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(`https://swapi.dev/api/people/${id}/`, config);
				const json = await response.json();
				console.log("--json--", json);
				setStore({ cardDetailCharacter: json });
			},

			// Fetch planet list
			fetchPlanetList: async () => {
				const config = {
					method: "Get",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch("https://swapi.dev/api/planets/", config);
				const json = await response.json();
				setStore({ planetList: json.results });
			},

			// Fetch PLANET Detail character
			fetchPlanetDetail: async id => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(`https://swapi.dev/api/planets/${id}/`, config);
				const json = await response.json();
				setStore({ planetDetail: json });
			},

			//Function to assign favorites
			setFavorites: (arr = []) => {
				setStore({
					favorites: arr
				});
			}
		},

		// Starwars end

		// Use getActions to call a function within a fuction
		exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	};
};

export default getState;
