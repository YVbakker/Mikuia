import classNames from 'classnames'
import React from 'react'
import $ from 'jquery'

import {Col, Grid, Nav, Navbar, NavItem, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import Header from '../components/community/Header'

var Community = React.createClass({
	render: function() {
		return (
			<div>
				<If condition={this.props.location.pathname == '/home'}>
					<div className="mikuia-navbar-background" style={{backgroundColor: '#111', height: '600px'}}>

					</div>
				</If>

				<Header pathName={this.props.location.pathname} />
				
				{React.cloneElement(this.props.children, {
					key: this.props.location.pathname
				})}
			</div>
		)
	}
})

export default Community