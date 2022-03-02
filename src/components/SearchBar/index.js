import React, { Component } from 'react'
import './searchBar.css'
export default class SearchBar extends Component {
	render() {
		return (
			<div className="input-group bottom-pad">
				<input
					type="search"
					className="form-control rounded"
					placeholder="Search for a item"
					aria-label="Search"
					aria-describedby="search-addon"
				/>
				<button type="button" className="btn btn-outline-primary">
					Search
				</button>
			</div>
		)
	}
}
