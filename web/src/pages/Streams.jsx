import React from 'react'
import {Link} from 'react-router'
import {Button, Col, Grid, Media, Row} from 'react-bootstrap'

import StreamGrid from '../components/community/StreamGrid'

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<Grid>
					<Row>
						<StreamGrid source="/api/streams" />
					</Row>
				</Grid>
			</div>
		)
	}

})

export default Home