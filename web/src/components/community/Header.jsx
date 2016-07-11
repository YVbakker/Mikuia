import classNames from 'classnames'
import React from 'react'

import {Col, Grid, Nav, Navbar, NavItem, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

var Header = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar bsClass="mikuia" className={classNames({'mikuia-navbar': true, 'mikuia-navbar-extended': this.props.pathName == '/home'})}>
					<div className="mikuia-navbar-content">
						<LinkContainer to="/home">
							<div>
								<img src="/img/icon.png" width="50" height="50" />
							</div>
						</LinkContainer>

						<div className="mikuia-navbar-lines-left">
							<div className="mikuia-navbar-links">
								<LinkContainer to="/home">
									<a>Home</a>
								</LinkContainer>
								<LinkContainer to="/streams">
									<a>Streams</a>
								</LinkContainer>
								<LinkContainer to="/levels">
									<a>Levels</a>
								</LinkContainer>
								<LinkContainer to="#">
									<a>Guides</a>
								</LinkContainer>
								<LinkContainer to="/supporter">
									<a>Supporter</a>
								</LinkContainer>
								<LinkContainer to="/leagues">
									<a>Leagues</a>
								</LinkContainer>
								<a href="https://p.datadoghq.com/sb/AF-ona-ccd2288b29">Status</a>
							</div>

							<div className="mikuia-navbar-title">
								<span>
									<span>Mikuia.tv</span>
								</span>
							</div>
						</div>

						
					</div>
				</Navbar>
				<br />
			</div>
		)
	}
})

export default Header