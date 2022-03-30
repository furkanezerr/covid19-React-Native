import 'intl';
import 'intl/locale-data/jsonp/en';
import { useState, useEffect } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import StackNavigator from './src/navigation/StackNavigator'

import covidReducer from './store/reducers/covidStatistics';

const rootReducer = combineReducers({
  covidData: covidReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  const [fontloaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
      })

      setIsFontLoaded(true)
    }

    loadFonts()
  }, [])

  return (
    <>
      {
        fontloaded ? (
          <Provider store={store}>
            <StackNavigator />
          </Provider>
        ) : (
          <AppLoading
          />
        )
      }
    </>
  );
}

export default App;