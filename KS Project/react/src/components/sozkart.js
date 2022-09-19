import React, {Component} from 'react';
import ContextConsumer from "../context";
import './sozkart.css';

function sozlesmeAc(name)
{
	return 0; //sözleşme componentini gösteren 
			 //sayfaya gitme özelliğini kullan.
}

function SozKart(props) {
	return(
		<div className = "kart">
		<button className ="kartbut" onclick = {sozlesmeAc(props.name)}> {props.name} </button>
		</div>
	)
}



export default SozKart;