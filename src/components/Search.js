import React, { PureComponent } from 'react'
import api from '../util/api'
import SearchInput from './SearchInput'
import Synonyms from './Synonyms'

export default class Search extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			word: '',
			synonyms: [],
		}
	}

	handleSearchChange = async (event) => {
		try {
			const res = await api.get(`/synonyms?keyword=${event.target.value}`)
			this.setState({
				word: res.data.word,
				synonyms: res.data.synonyms,
			})
		} catch (error) {
			this.setState({
				word: '',
				synonyms: [],
			})
		}
	}

	render() {
		return (
			<div>
				<h2 className='h2'>Search Synonyms: </h2>
				<SearchInput inputChange={this.handleSearchChange} />
				<h4 className='h4'>Results: </h4>
				<Synonyms
					word={this.state.word}
					synonyms={this.state.synonyms}
				/>
			</div>
		)
	}
}
