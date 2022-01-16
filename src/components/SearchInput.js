import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends PureComponent {
	static propTypes = {
		inputChange: PropTypes.func,
	}

	handleChange = (event) => {
		this.props.inputChange(event)
	}

	render() {
		return (
			<div>
				<div>
					<input
						onChange={this.handleChange}
						className='form-control'
						placeholder='Search for synonyms of a word'
					/>
				</div>
			</div>
		)
	}
}
