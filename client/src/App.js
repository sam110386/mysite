import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './layouts/header';
import Page from './layouts/page';
import Footer from './layouts/footer';

class App extends Component {
 	state = {
		response: '',
		currentPage: 'home'
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};
	
	setStates = async (stateObj)=>{
		this.setState(stateObj)
	};

	render() {
		return (
			<div>
				<Header  currentPage={this.state.currentPage} setCurrentPage={this.setStates.bind(this)} />
				<Page page={this.state.currentPage} />
				<Footer />
			</div>
		);
	}
}

export default App;
