import React from 'react'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Col, Grid, Media, Row} from 'react-bootstrap'

var Home = React.createClass({

	render: function() {
		return (
			<div className="container text-white">
				<div className="mikuia-index">
					<Row>
						<Col md={5} className="align-center mikuia-index-screenshot" />
						<Col md={5} mdOffset={1}>
							<h1>Mikuia <small>is a Twitch bot.</small></h1>
							<p className="text-muted">
								Mikuia helps your viewers interact with games you're playing.
								<br />
								Looking up stats, sharing accomplishments and useful information, providing level and coin systems!
							</p>
							<br />
							<LinkContainer to="/guides/quickstart">
								<Button bsStyle="default">Quick Start Guide</Button>
							</LinkContainer>

						</Col>
					</Row>
				</div>
			</div>
		)
	},

})

export default Home