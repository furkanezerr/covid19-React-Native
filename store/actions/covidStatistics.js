import env from "../../env"

export const SET_ALL_DATA = "SET_ALL_DATA"
export const SET_CONTINENT_DATA = "SET_CONTINENT_DATA"
export const SEARCH = "SEARCH"

export const getCountriesStatistics = async () => {
    const response = await fetch(env.xrapidURL, {
        method: "GET",
        headers: {
            "x-rapidapi-host": env.xrapidHost,
            "x-rapidapi-key": env.xrapidKey
        }
    })

    const resData = await response.json()

    return resData;
}

export const fetchAllData = () => {
    return async dispatch => {
        const get = await getCountriesStatistics();
        const getStat = await get.response

        dispatch({ type: SET_ALL_DATA, payload: getStat })
    }
}

export const setContinentData = (continent) => {
    return async dispatch => {
        dispatch({ type: SET_CONTINENT_DATA, payload: continent })
    }
}

export const searchHandler = (text) => {
    return async dispatch => {
        dispatch({ type: SEARCH, payload: text })
    }
}