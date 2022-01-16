import React, { PureComponent } from 'react'

import './App.css'
import Alert from './components/Alert'
import Search from './components/Search'
import AddSynonyms from './components/AddSynonyms'

export default class App extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			alert: null,
		}

		this.setAlert = this.setAlert.bind(this)
	}

	async setAlert(type, message) {
		this.setState({
			alert: {
				type,
				message,
			},
		})
		await setTimeout(() => {
			this.setState({
				alert: null,
			})
		}, 3000)
	}

	render() {
		return (
			<div className='container'>
				{this.state.alert && (
					<div className='row m-4'>
						<Alert
							type={this.state.alert.type}
							message={this.state.alert.message}
						/>
					</div>
				)}
				<div className='row-modified'>
					<h1 className='h1'>Reeinvent Synonyms Task</h1>
				</div>
				<div className='row'>
					<div className='col-7'>
						<Search />
					</div>
					<div className='col-1' />
					<div className='col-4'>
						<AddSynonyms setAlert={this.setAlert} />
					</div>
				</div>
			</div>
		)
	}
}
