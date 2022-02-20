import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import StackNavigator from './src/navigation/StackNavigator'

import covidReducer from './store/reducers/covidStatistics';

const rootReducer = combineReducers({
  covidData: covidReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!loaded) {
    <AppLoading
    />
  }

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>

  );
}

export default App;