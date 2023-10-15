import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody,} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import './contact.css'

export function Contact(){
   
    return(
      <div className='backimg'>
        <section className='size'>
        <MDBContainer className="py-5" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100%'}}>
         
  
          <MDBRow  className='size'style={{width:'100%',paddingLeft:'200px'}}>
          
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText><FontAwesomeIcon icon={faEnvelope} size="2xl" /></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-muted">pagowthamn@gmail.com</MDBCardText>
                    </MDBCol>
                    
                  </MDBRow>  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText><FontAwesomeIcon icon={faLocationDot} size="2xl" /></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-muted">Coimbatore, Saravanampatti</MDBCardText>
                    </MDBCol>
                    
                  </MDBRow>  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText><FontAwesomeIcon icon={faPhone} size="2xl"/></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted">6369921585</MDBCardText>
                    </MDBCol>
                    
                  </MDBRow>  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText><FontAwesomeIcon icon={faLinkedin} size="2xl" /></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted">Gowtham N</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <a href='https://www.linkedin.com/in/gowtham-n-2b9974235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>click here</a>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText><FontAwesomeIcon icon={faGithub} size="2xl" /></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted">Gowtham-pa</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <a href=''>click here</a>
                    </MDBCol>
                  </MDBRow>
                 
                 
                </MDBCardBody>
              </MDBCard>
  
           
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </section>
      </div>
    )
}