import React from "react";

class Userclass extends React.Component{
   constructor (props){
    super(props);
    // console.log(props);


    
  this.state={
    count : 0,
    count2 : 2,
  };
 
   }
 
    render(){
        const  {count,count2}=this.state;
        return(
            <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
              <h2>Name:{this.props.name}</h2>
    <h3>Nagpur</h3>
    <h4>Manewada</h4>
     </div>
        )
    }
}

export default Userclass;