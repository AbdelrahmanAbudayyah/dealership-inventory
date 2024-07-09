import React from "react";
import dodge from "../images/421_dodge.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./title.css";


const Title = ()=> {
  return (
    <>
    <nav className="navbar navbar-dark bg-black">
  <div className="container-fluid d-flex ">
    <a className="navbar-brand" href="#">
      <img src={dodge} alt="Logo" width="80" height="60" id="a1"    />
    </a>
  </div>
</nav>
<nav id="header_div2">
                    <ul>
                        <li><a href="../">Home</a></li>
                    </ul>
                </nav>
</>

  );
  
}

export default Title;
