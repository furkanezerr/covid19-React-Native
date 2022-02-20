import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import StackNavigator from './src/navigation/StackNavigator'

import covidReducer from './store/reducers/covidStatistics';

const rootReducer = combineReducers({
  covidData: covidReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>

  );
}

export default App;