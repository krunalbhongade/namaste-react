import React from "react";

class Userclass extends React.Component{
   constructor (props){
    super(props);
    // console.log(props);


    
  this.state={
    count : 0,
    
  };
 
   }
 
    render(){
        const  {count  }=this.state;
        return(
            <div className="user-card">
            <h1>Count:{count}</h1>
            <button 
            onClick={() => {
                //NEVER UPDATE STATE VARIABLES DIRECTLY
                this.setState({
                 count:this.state.count + 1,
                });
            }}
            >
                Count Increase
            </button>
           
              <h2>Name:{this.props.name}</h2>
    <h3>Nagpur</h3>
    <h4>Manewada</h4>
     </div>
        )
    }
}

export default Userclass;