import React,{Component}  from 'react'
export default class Getderive extends Component{
    state={
        favcolorstate:"Red"
    }
    static getDerivedStateFromProps(props,state){
    if(state.favcolorstate !== props.favcolorprops){
        console.log("props value:",props);
        console.log("state value:",state);
        return{favcolorstate:props.favcolorprops};
    }
}
 render (){
     return(
         <div>
             <h2>MY fav color is {this.state.favcolorstate}</h2>
         </div>
     )
 }
}