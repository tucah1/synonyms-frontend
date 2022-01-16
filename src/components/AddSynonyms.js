import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import api from '../util/api'

export default class AddSynonyms extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			word: '',
			synonyms: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	static propTypes = {
		setAlert: PropTypes.func,
	}

	handleChange(e) {
		const val = e.target.value
		this.setState({
			[e.target.name]: val,
		})
	}

	async handleSubmit(e) {
		e.preventDefault()
		let synonymsList = []
		if (this.state.synonyms) {
			this.state.synonyms.split(',').forEach((syn) => {
				synonymsList.push(syn.trim())
			})
		}
		const data = {
			word: this.state.word,
			synonyms: synonymsList,
		}

		this.setState({
			word: '',
			synonyms: '',
		})

		try {
			let res = await api.post('/synonyms', data)
			this.props.setAlert('success', res.data.message)
		} catch (error) {
			this.props.setAlert('error', 'Synonyms could not be added!')
		}
	}

	render() {
		return (
			<div>
				<h2 className='h2'>Add Synonyms</h2>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input
						type='text'
						className='form-control'
						name='word'
						placeholder='Word'
						required
						onChange={this.handleChange}
						value={this.state.word}
					/>
					<br />
					<input
						type='text'
						className='form-control'
						name='synonyms'
						placeholder='List of synonyms'
						required
						onChange={this.handleChange}
						value={this.state.synonyms}
					/>
					<br />
					<div className='d-grid'>
						<button className='btn btn-outline-primary'>
							Add Synonyms
						</button>
					</div>
				</form>
			</div>
		)
	}
}
