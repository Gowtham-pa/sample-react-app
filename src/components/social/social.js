import React from "react";
import './social.css'
export function Social(){
    return(
        <>
        <div class="social">
            <h1 className="text-center m-5 p-5 fs-1 text-white">Social Buttons</h1>
            <div className="d-flex justify-content-center p-5">
                <button type="button" className="btn btn-warning ms-3">like</button>
                <button type="button" className="btn btn-light ms-2">comment</button>
                <button type="button" className="btn btn-primary ms-2">share</button>
            </div>
        </div>
        </>
    );
}