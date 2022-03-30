import { SEARCH, SET_ALL_DATA, SET_CONTINENT_DATA } from "../actions/covidStatistics"
import Country from '../../src/models/Country'

const initialState = {
    allData: [],
    filteredByContinent: [],
    filteredBySearch: [],
}

const numberFormat = new Intl.NumberFormat();

const covidReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DATA:
            const resData = action.payload

            const covidDatas = []

            for (const key in resData) {
                covidDatas.push(
                    new Country(
                        key,
                        resData[key].country,
                        resData[key].continent,
                        numberFormat.format(resData[key].population),
                        resData[key].day,
                        numberFormat.format(resData[key].cases?.active),
                        numberFormat.format(resData[key].cases?.critical),
                        numberFormat.format(resData[key].cases?.new),
                        numberFormat.format(resData[key].cases?.recovered),
                        numberFormat.format(resData[key].cases?.total),
                        numberFormat.format(resData[key].deaths?.new),
                        numberFormat.format(resData[key].deaths?.total),
                    )
                )
            }

            covidDatas.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            return {
                ...state,
                allData: covidDatas
            }
        case SET_CONTINENT_DATA:
            const continent = action.payload

            return {
                ...state,
                filteredByContinent: state.allData.filter(country => country.continent === continent),
                filteredBySearch: state.allData.filter(country => country.continent === continent),
            }
        case SEARCH:
            const searchText = action.payload;

            const filteredData = state.filteredByContinent.filter(item => {
                const lowerCaseItem = item.name.toLowerCase()
                return lowerCaseItem.indexOf(searchText.toLowerCase()) > -1
            })

            return {
                ...state,
                filteredBySearch: filteredData
            }
        default: {
            return state;
        }
    }
}

export default covidReducer;