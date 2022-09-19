import React, {Component} from 'react';
import ContextConsumer from '../context';
import './navbar.css';

class Navbar extends Component {
	state ={
		currentUser: undefined,
	}
	render(){
		return(
			<ContextConsumer>
			{
				value => {
					this.currentUser = value.currentUser;
					return(
						<div className = "navbar">
						<ul className = "list">
							<li className = "el"> 
								<button className ="navbut"> Ana Sayfa </button>
							</li>
							<li className = "el"> 
								<button className ="navbut"> Sözleşmeler </button>
							</li>
							<li className = "el">
								<button className= "navbut"> {this.state.currentUser !== undefined ? "Çıkış Yap" : "Giriş Yap"} </button>
							</li>
							<li className = "el"> 
								<button className ="navbut"> Ana Sayfa </button>
							</li>

						</ul>
						</div>

					)
				}
			}
			</ContextConsumer>
		)
	}
}

export default Navbar;