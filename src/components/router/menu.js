import React from "react";  
import { Link } from "react-router-dom";
export function Menu(){
    return(
        <>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOURA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Login'><li>Login</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Card'><li>Card</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#"> < Link to='/Notification'><li>Notification</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Social'><li>Social</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Technology'><li>Technology</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Feedback'><li>Feedback</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Feedback1'><li>Feedback1</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Counter'><li>Counter</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Fruties'><li>Fruties</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Date'><li>Date</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Data'><li>Data</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Datacard'><li>Datacard</li></Link></a>
        <a class="nav-link active" aria-current="page" href="#">< Link to='/Portfolio'><li>Porfolio</li></Link></a>
        
      </div>
    </div>
  </div>
</nav>
        
        </>
    );
}