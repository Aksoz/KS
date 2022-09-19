import React,{Component} from 'react';
import ContextConsumer from '../context';
import './kayit.css';

class Giris extends Component{

	state = {
		mail: "",
		password: "",
	}
	gir = (dispatch,e) => {
		e.preventDefault();
		const newUser = {
			mail:this.state.mail,
			password:this.state.password
		};
		console.log(newUser);
		dispatch({type: "giris_yap", info: newUser})
	}

	changeInput = (e) =>{
		this.setState({[e.target.name] : e.target.value});
	}
	
	render(){
		return(
			<ContextConsumer>
			{
				value => {
					const {isim,soyisim,mail,password} = this.state;
					const dispatch = value.dispatch;
					return(
						<div>
						<h3 className = "bilgi"> Lütfen Bilgilerinizi Girin </h3>
						 <form onSubmit = {this.gir.bind(this,dispatch)} className="kayitform">
						<div className ="formbox">
							<input type = "text"name = "mail" 
							className="inp" placeholder = "Mail Adresi" 
							value = {mail} onChange = {this.changeInput}/>
							<br/>
							<input type = "text" name = "password" 
							className="inp" placeholder = "Şifre" 
							value = {password} onChange = {this.changeInput}/>
						</div>
						<button type = "submit" className = "inp but">Giriş Yap</button>
						</form> 
						
						
						</div>
						) 
					}
			} 
			</ContextConsumer>
			)	
	}
}


export default Giris;