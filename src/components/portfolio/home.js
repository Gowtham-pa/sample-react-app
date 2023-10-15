import React from "react";
import './home.css'
import { useTypewriter } from 'react-simple-typewriter'
import {useNavigate} from "react-router-dom"
import { About } from "./About";
import { Contact } from "./contact";
export function Home() {
    const navigate =useNavigate()
    const [typwrt] = useTypewriter({
        words: ['Hi Iam Gowtham ', ' Welcome To My Page'],
        backSpeed: 50,
        loop: {},
    })
   
    return (
        <>
            <div id="HOMEPORt">
                <div className="container-fluid text-center pt-5 align-items-center" >
                    <div className="row mt-5 pt-5">
                        <h1 className="col-lg-12 pt-5  text-white">_{typwrt}_</h1>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
               

                    
                </div>
                <div className="text-white d-flex justify-content-center" >
                        <h3>I would like to welcome you, and please know how happy I am to be with you. Our hearts are filled with delight, for we finally have you with us! We are so glad to have you here with us today.</h3>
                      
                    </div>
                    <br/><br/>
                   <h1 className="text-bold"id="shadow" >THANK YOU</h1>
                   
            </div>
            <div >
                <About/>
               
            </div>
            <div>
            <Contact/>
            </div>

        </>
    );
}