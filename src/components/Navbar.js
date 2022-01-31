import './Navbar.css';
import React from "react"
// import svglogo from "./images/logo.svg";
import { ReactComponent as Logo } from '../images/logo.svg';
export default function Navbar() {


return (

<div className="navbar--body">
  {/* <img className="logo" src="images/logo.svg"></img> */}
  {/* <img className="logo" src={ require('./src/images/logo.svg') } /> */}
  {/* <img src={svglogo}></img> */}
  <Logo />
  <nav>
    <ul className="nav_links">
      <li><a href="#">Knowledge</a></li>
      <li><a href="#">Gold</a></li>
      <li><a href="#">Prestige</a></li>
    </ul>
  </nav>
  <a className="cta" href="#"><button>Contact</button></a>

</div>
)
}