import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function Datacard() {
    const [card, setCard] = useState([])
    var { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+ id)
            .then(product => product.json())
            .then(Dataq => setCard(Dataq))

        })
    return (
        <>
        <div>{card.title}</div>
        <div><img src={card.image} /></div>   
            <div>{card.description}</div>
            <div>{card.price}</div>
           
            
        </>
    );

}



