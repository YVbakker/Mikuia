import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, IndexRedirect, IndexRoute, Router, Route} from 'react-router'

import './styles/app.scss'

import CommunityLayout from './layouts/Community'

import HomePage from './pages/Home'
import StreamsPage from './pages/Streams'
import LevelsPage from './pages/Levels'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={CommunityLayout}>
			<Route path="home" component={HomePage} />
			<Route path="streams" component={StreamsPage} />
			<Route path="levels" component={LevelsPage} />

			<IndexRedirect to="/home" />
		</Route>
	</Router>
, document.getElementById('app'))