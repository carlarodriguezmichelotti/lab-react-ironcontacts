import React, { Component } from 'react'
import contacts from '../contacts.json'
import '../Table.css'
import Card from './Card'
import { throws } from 'assert'

class Table extends Component {
	constructor() {
		super()
		this.state = {
			copiedcontacts: contacts.splice(0, 5)
		}
	}

	randomContact = () => {
		const newContact = contacts[Math.floor(Math.random() * (contacts.length - 1))]
		const modifiedContacts = [...this.state.copiedcontacts]
		modifiedContacts.push(newContact)
		this.setState({ copiedcontacts: modifiedContacts })
	}

	sortByName = () => {
		const modifiedContacts = [...this.state.copiedcontacts]
		modifiedContacts.sort((a, b) => (a.name > b.name ? 1 : -1))
		this.setState({ copiedcontacts: modifiedContacts })
	}

	sortByPopularity = () => {
		const modifiedContacts = [...this.state.copiedcontacts]
		modifiedContacts.sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
		this.setState({ copiedcontacts: modifiedContacts })
	}

	deleteContact = idx => {
		const modifiedContacts = [...this.state.copiedcontacts]
		modifiedContacts.splice(idx, 1)
		this.setState({ copiedcontacts: modifiedContacts })
	}

	render() {
		return (
			<div>
				<h2>Iron Contacts</h2>
				<button onClick={this.randomContact}>Add random contact</button>
				<button onClick={this.sortByName}>Sort by name</button>
				<button onClick={this.sortByPopularity}>Sort by popularity</button>
				<table>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
					</tr>
					<tr>
						{this.state.copiedcontacts.map((elm, idx) => {
							return (
								<Card
									key={idx}
									name={elm.name}
									popularity={elm.popularity}
									pictureUrl={elm.pictureUrl}
									deleteContact={() => this.deleteContact(idx)}
								/>
							)
						})}
					</tr>
				</table>
			</div>
		)
	}
}
export default Table
