import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getWalletBalance, transfer } from '../api/blockchain';

export default class TransferPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receiver_address: '',
			transfer_amount: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/* 
		Part of React lifecycle 
		All the data that needs to be
		displayed upon loading should be call here
	*/
	componentDidMount() {
	}

	async _getWalletBalance(){
	}

	async handleSubmit(){
	}

	handleChange(e, key){
	}

	render() {

		return (
			<div>
				{/* not advisable to do this block of code*/}
				<ul>
				  <li><Link to="/">Wallet</Link></li>
				  <li><Link to="/bid">Bid</Link></li>
				  <li><Link to="/transfer">Transfer</Link></li>
				</ul>
				<div className="bid-container">
					<div>
						<p>Wallet Balance: {this.state.balance}</p>
					</div>
					<div>
						<p>
							Transfer To: 
							<input 
								type="text" 
							/>
						</p>
					</div>
					<div>
						<p>
							Transfer Amount: 
							<input
								type="text"
							/>
						</p>
					</div>
					<div>
						<button>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}