import React, { useState } from "react";

export function Date() {
    const[College,SetCollege]=useState('')
    function DATECollege(){
            let a=document.getElementById("DATE").value;
            var todaydate= new Date(a)
            todaydate.setDate(todaydate.getDate()+90)
            var output=`${todaydate.getDate()}-${todaydate.getMonth()+1}-${todaydate.getFullYear()}`
            SetCollege(output)
    }
    return (
        <>
            <div className="col-6 text-center mt-3">
                <input type="Date" id="DATE" placeholder="ENTRY A COLLEGE DATE"/>
                <div onClick={DATECollege} className="btn btn-primary">entry</div>
                <h1>{College}</h1>
            </div>
        
            </>
            );
}