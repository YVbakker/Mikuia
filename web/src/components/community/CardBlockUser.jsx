import classNames from 'classnames'
import React from 'react'
import $ from 'jquery'

import {Link} from 'react-router'
import {Button, Col, Grid, Media, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

var CardBlockUser = React.createClass({

	componentDidMount: function() {
		this.poll()
	},

	getInitialState: function() {
		return {
			error: false,
			user: {
				displayName: this.props.username,
				logo: ''
			}
		}
	},

	poll: function() {
		var self = this
		$.get('/api/user/' + this.props.username).success(function(data) {
			self.setState({
				user: data.user
			})
		}).fail(function() {
			self.setState({
				error: true,
				user: {}
			})
		})
	},

	render: function() {
		return (
			<div className="mikuia-card-user">
				<div className="mikuia-card-user-avatar">
					<LinkContainer to={"/levels/" + this.props.username}>
						<img src={this.state.user.logo} width="32" height="32" />
					</LinkContainer> 
				</div>
				<div className="mikuia-card-user-name">
					<LinkContainer to={"/levels/" + this.props.username}>
						<h4><a>{this.state.user.displayName} Level</a></h4>
					</LinkContainer>
				</div>
			</div>
		)
	}

})

export default CardBlockUser