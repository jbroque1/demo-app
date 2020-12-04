import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class WalletPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: 0,
			wallet_address: ''
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
	}

	async handleSubmit(){
	}

	render() {
		return (
			<div>
				{/* not advisable to do this block of code */}
				<ul>
				  <li><Link to="/">Wallet</Link></li>
				  <li><Link to="/bid">Bid</Link></li>
				  <li><Link to="/transfer">Transfer</Link></li>
				</ul>
				{/* not advisable to do this block of code ends here*/}
				<div className="wallet-container">
					<div>
						<p>
							Wallet Address: 
							<input 
								type="text"
							/>
						</p>
					</div>
					<div>
						<button>Submit</button>
					</div>
					<div>
						<p>Wallet Balance: {this.state.balance}</p>
					</div>
				</div>
			</div>
		);
	}
}