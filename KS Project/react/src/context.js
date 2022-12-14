import React,{Component} from 'react';

const myContext = React.createContext();

function reducer(state, action){
	switch(action.type){
		case "sozlesme_ekle":return state;

		break;
		case "sozlesme_cikar":return state;

		break;
		case "kullanici_ekle":return {
			...state,
			users : state.users.concat([action.info])
		};break;
		case "giris_yap":return {
			...state,
			currentUser : action.info
		};break;
		case "kullanici_cikar":return {
			...state,
			currentUser : undefined
		};break;
		default:return state;break;
	}	
}

export class ContextProvider extends Component{
	state = {
		demo: "hey!",
		currentUser: undefined,
		currentSozlesme: {baslik: "Sözleşme Başlığı",
		icerik: "tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam",
		taraf1: "Kolaysoft",
		taraf2: "Zorsoft",
		cayma: "5000",
		sure: "6 ay",},
		sozlesmeler: [],
		dispatch : action => {
			this.setState(reducer(this.state,action));
			console.log("Current User:");
			console.log(this.state.currentUser);
			console.log("All Users");
			console.log(this.state.users);
		},
	}
	render() {
		return (
			<myContext.Provider value = {this.state}> 
			{this.props.children}
			</myContext.Provider>
		)
	}

}

const ContextConsumer = myContext.Consumer;
export default ContextConsumer;