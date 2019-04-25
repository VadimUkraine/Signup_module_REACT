import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css'; 
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import stateFormReducer from './store/reducer/stateReducer';

const rootReducer = combineReducers({
	initState: stateFormReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(	 
	<Provider store={store}>
	   <App />
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();