import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Data() {
    const [data, setData] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/")
            .then(responsive => responsive.json())
            .then(viewdata => setData(viewdata))
    })
    return (
        <>
            <h1>View my data</h1>
            <div className="container-fluid row bg-warning">
                {
                    data.map((value, index) =>(
                    <>
                    <div class="card col-lg-4 bg-primary">
                        <img src={value.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{value.title}</h5>  
                            <p class="card-text">{value.description}</p>
                            <p class="card-text">{value.price}</p>
                            <StarRatings rating={value.rating.rate} starRatedColor="red"/>
                            <Link to={`/Datacard/${value.id}`}><a href="#" class="btn btn-danger">View</a></Link>
                          
                            
                        </div>
                    </div>
                </>
            ))
               
            }

        </div >
        </>
    );
}