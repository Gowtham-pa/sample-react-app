import React from "react";
import './technology.css'
export function Technology() {
    return (
        <>

            <div className="whole container-fluid  ">

                <div className="text-center pt-5">
                    <h1>Learn 4.0 Technologies</h1>
                    <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript 
                    library for building user interfaces based on components. </p>
                </div>
                <div className="d-flex m-5 justify-content-center row" >
                    <div className="bord m-4 bg-white p-3 rounded col-lg-5">
                        <h1>Data scientist</h1>
                        <p>A data scientist uses data to understand and explain the phenomena around them,
                        and help organizations make better decisions.</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KdOf_ahOui2bhlbteWue0301Q5Tuxe7dRQ&usqp=CAU" className="m-5" />
                    </div>

                    <div className="bord1 m-4 bg-white p-3 rounded col-lg-5">
                        <h1>IOT Developer</h1>
                        <p>professionals who can develop, manage, and monitor IoT devices and 
                        systems by combining three core components – data, technology, and research.</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d7SHgd-R23qgVlD63C87LPjhGDnhK25vgw&usqp=CAU" className="m-5" />
                    </div>
                </div>
                <div className="d-flex m-5 justify-content-center pb-5 row">
                    <div className="bord2 m-4 bg-white p-3 rounded col-lg-5">
                        <h1>VR Developer</h1>
                        <p>the creative minds behind extended reality programs.
                            digital environments that people can see.</p>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-a61f9c53120a67362bb493e56dbad5b4" className="m-5" />
                    </div>
                    <div className="bord3 m-4 bg-white p-3 rounded col-lg-5">
                        <h1>ML Engineer</h1>
                        <p><br />
                        An ML Engineer builds artificial intelligence (AI) systems that leverage huge data sets to generate and develop algorithms capable of learning and eventually making predictions.</p>
                        <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/machine-learning-engineer-1.jpg" className="m-5" />
                    </div>
                </div>
            </div>

        </>
    )
}
