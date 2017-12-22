import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import registerServiceWorker from './registerServiceWorker';

import {
	Provider
} from "react-redux";

import configureStore from './services';

/*
	The store is initialize during the reconnect workflow
	You can find this workflow insde the workflow folder/login
	Called on each route to check user context
*/
const store = configureStore({});

/*
	First thing first
	npm install --save redux react-redux
*/

const Application = (props) => (
	<MuiThemeProvider>
		<Provider store={store}>
			<App/>
		</Provider>
	</MuiThemeProvider>
)


ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();