import React, {Component} from 'react';
import ContextConsumer from '../context';
import './kayit.css';

class Kayit extends Component{

	state = {
		isim: "",
		soyisim: "",
		mail: "",
		password: "",
		vkn: "",
		warning: "Lütfen Bilgilerinizi Girin."
	}
	ekle = (dispatch,e) => {
		e.preventDefault();
		const newUser = {
			isim: this.state.isim,
			soyisim:this.state.soyisim,
			mail:this.state.mail,
			password:this.state.password,
			vkn: this.state.vkn
		};
		console.log(newUser);
		dispatch({type: "kullanici_ekle", info: newUser})
	}

	changeInput = (e) =>{
		this.setState({[e.target.name] : e.target.value});
	}
	
	render(){
		return(
			<ContextConsumer>
			{
				value => {
					const {isim,soyisim,mail,password,vkn} = this.state;
					const dispatch = value.dispatch;
					return(
						<div>
						<h3 classame = "bilgi"> Lütfen Bilgilerinizi Girin </h3>
						 <form onSubmit = {this.ekle.bind(this,dispatch)} className="kayitform">
						<div className ="formbox">
							<input type = "text" name = "isim" 
							className="inp" placeholder = "İsim" 
							value = {isim} onChange = {this.changeInput}/>
							<br/>
							<input type = "text"name = "soyisim" 
							className="inp" placeholder = "Soyisim" 
							value = {soyisim} onChange = {this.changeInput}/>
							<br/>
							<input type = "text"name = "mail" 
							className="inp" placeholder = "Mail Adresi" 
							value = {mail} onChange = {this.changeInput}/>
							<br/>
							<input type = "text" name = "password" 
							className="inp" placeholder = "Şifre" 
							value = {password} onChange = {this.changeInput}/>
							<br/>
							<input type = "text" name = "vkn" 
							className="inp" placeholder = "Vkn" 
							value = {vkn} onChange = {this.changeInput}/>
						</div>
						<button type = "submit" className = "inp but">Kayıt Ol</button>
						</form> 
						
						</div>
						) 
					}
			} 
			</ContextConsumer>
			)	
	}
}

export default Kayit;