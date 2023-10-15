import React from "react";
import './portfolio.css'
import { useTypewriter, cursor } from "react-simple-typewriter"
import { Link } from "react-router-dom";


export function Portfolio() {
    const [typwrt] = useTypewriter({
        words: ['Hi Iam Gowtham ', 'Welcome To My Page'],
        backSpeed: 50,
        loop: {},
    })
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" id="bgtext">
                
                    <a class="navbar-brand" href="#">GOW <span className="text-danger">THAM</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/Home" class="nav-link active" aria-current="page" href="#" id="textEDIT">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page" href="#" id="textEDIT">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Contact" class="nav-link active" aria-current="page" href="#" id="textEDIT">Contact</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Project" class="nav-link active" aria-current="page" href="#" id="textEDIT">Project</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
