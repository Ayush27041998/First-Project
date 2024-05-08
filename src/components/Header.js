import { LOGO_URL } from "./utilis/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnState,SetbtnState] = useState('LogIn')
    return (
      <>

        <div className="header">
          <div className="logoContainer">
            <img src={LOGO_URL} width="200px" />
          </div>
          <div className="nav">
            <ul>
            <Link to ="/"> <li>Home</li></Link> 
              <Link to ="/about"><li>About Us</li></Link>
              <Link to ="/contactus"><li>Contact</li></Link>
              <li>Cart</li>
              <button onClick={()=>{
                btnState === "Login"?SetbtnState("Logout"):SetbtnState("Login")
              }}>{btnState}</button>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;