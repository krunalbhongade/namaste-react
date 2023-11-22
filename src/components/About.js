// import User from "./User";
import Userclass from "./UserClass";
import { Component } from "react";

// const About = () => {
class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About </h1>
        <h2>This is Namaste React</h2>
        {/* <User name={"krunal"}/> */}

        <Userclass name={"first"} />
        {/* <Userclass name={"second"} /> */}
      </div>
    );
  }
}

export default About;
