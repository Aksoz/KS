import React,{Component} from 'react';
import ContextConsumer from "../context";
import './sozlesme.css';

class Sozlesme extends Component {
	state = {
		baslik: "",
		icerik: "",
		taraf1: "",
		taraf2: "",
		cayma: "",
		tarih: "",
	}
	render() {
		return(
			<ContextConsumer>
			{

				value => {
					this.state = value.currentSozlesme;
					return(
						<div className = "sozlesme"> 
							<h3 className = "sozbas eks"> {this.state.baslik} </h3>
							<p className ="sozic eks"> {this.state.icerik} </p>
							<div className = "detay">
							<h4 className = "eks sozbas"> Detaylar </h4>
							<hr className="eks ciz"/>
							<h5 className = "eks sozbas"> Taraflar: {this.state.taraf1} ve {this.state.taraf2}
								<br/> Cayma Bedeli: {this.state.cayma} $
								<br/> Geçerlilik Süresi: {this.state.tarih}
							</h5>
							</div>
						</div>


					)
				}
			}
			</ContextConsumer>)
	}

}

export default Sozlesme;