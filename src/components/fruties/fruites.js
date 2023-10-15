import React, { useState } from "react";
export function Fruties() {
    const[Loura,SetLoura]=useState(3)
    function add(){
      SetLoura(Loura+1)
    }
    const[Gow,SetGow]=useState(4)
    function add1(){
      SetGow(Gow+1)
    }
    return (
        <>
           <div className="container-fluid p-5  bg-warning"id="newimg">
            <div className="container bg-light p-5">
            <h1 className="fw-3 text-center text-uppercase">bob ate {Loura} mangoes {Gow} banana</h1> 
           <div className="row">
            <div className="col-lg-6">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqz6ZXSKRO03xz3CJmqunCs2exD54hsk7Mg&usqp=CAU" className="w-100 mt-2"/>
             <div className="row">
                <div className="col-lg-5">&nbsp;</div>
                <div className="col-lg-3">
                    <button onClick={add}className="btn btn-primary">Eat Mango</button>
                </div>
                <div className="col-lg-4">&nbsp;</div>
             </div>
            </div>
            <div className="col-lg-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9P8HU0PHKXe4bOqmX0tI8n8h1hYliEI4bQ&usqp=CAU" className="w-100 mt-4"/>
                <div className="row mt-4">
                    <div className="col-lg-5">&nbsp;</div>
                    <div className="col-lg-3">
                        <button onClick={add1}className="btn btn-primary">Eat Banana</button>
                    </div>
                </div>
            </div>
           </div>
            </div>
           </div>  
        </>
    )
}



   