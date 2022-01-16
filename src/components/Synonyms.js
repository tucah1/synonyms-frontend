import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Synonyms extends PureComponent {
	static propTypes = {
		word: PropTypes.string,
		synonyms: PropTypes.array,
	}

	render() {
		return (
			<div>
				<div>
					{this.props.synonyms.map((syn, index) => (
						<div key={index} className='d-inline-flex'>
							<span className='alert alert-secondary'>{syn}</span>
						</div>
					))}
				</div>
			</div>
		)
	}
}
