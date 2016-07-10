import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, IndexRedirect, IndexRoute, Router, Route} from 'react-router'

import './styles/app.scss'

import CommunityLayout from './layouts/Community'

import HomePage from './pages/Home'
import StreamsPage from './pages/Streams'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={CommunityLayout}>
			<Route path="home" component={HomePage} />
			<Route path="streams" component={StreamsPage} />

			<IndexRedirect to="/home" />
		</Route>
	</Router>
, document.getElementById('app'))