import { LOGO_URL } from "./utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
console.log("Header render");

useEffect(() => {
  console.log("useEffect called");
}, [btnNameReact]);       
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
