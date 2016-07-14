import classNames from 'classnames'
import React from 'react'
import $ from 'jquery'

import {Link} from 'react-router'
import {Button, Col, Grid, Media, Row} from 'react-bootstrap'

var Card = React.createClass({

	render: function() {
		return (
			<div className="mikuia-card">
				{this.props.children}
			</div>
		)
	}

})

export default Card