import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = 
    {
      // count: 0,
      userInfo :{
        name:"Dummy",
        location: "default",

      },
    };
    // console.log(this.props.name + "Child Constructor");
  }



  async componentDidMount() {
    // console.log(this.props.name + "Child component Did Mount");
    //Api calls this method

    const data = await fetch ("https://api.github.com/users/krunalbhongade");
    const json = await data.json();

    this.setState({
      userInfo:json,
    })
    console.log(json);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  render() {
    // const { count } = this.state;
    const{ name, location, avatar_url} =this.state.userInfo;

    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1> */}
        {/* <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}

        {/* <h2>Name:{this.props.name}</h2> */}
        
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <img src={avatar_url} />
        <h4>Manewada</h4>
      </div>
    );
  }
}

export default Userclass;
