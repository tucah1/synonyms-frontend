import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Alert extends PureComponent {
	static propTypes = {
		type: PropTypes.string,
		message: PropTypes.string,
	}

	handleChange = (event) => {
		this.props.inputChange(event)
	}

	render() {
		return (
			<div
				role='alert'
				className={`alert ${
					this.props.type === 'error'
						? 'alert-danger'
						: 'alert-primary'
				}`}
			>
				{this.props.message}
			</div>
		)
	}
}
