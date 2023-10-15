import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer,MDBRow, MDBCard, MDBCardText,MDBCardBody,MDBCardImage,} from 'mdb-react-ui-kit';
import './About.css'
import Viewer from 'react-viewer';


export function About() {
  const [currentImage, setCurrentImage] =React. useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const images = [
    require('../../assets/resume.jpeg')
  ];
  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
     
    
    <section id="bgcolor">
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 bg-info">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={require('../../assets/1000055558-01.jpeg')}
                  alt="avatar "
                  className="rounded-circle" id="size" fluid />
               

              </MDBCardBody>
            </MDBCard>


          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 p-5 bg-info text-white">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">Gowtham N</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">pagowtamn@mail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <div style={{cursor:'pointer'}}>

      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
       <Viewer
       visible={isViewerOpen}
       onClose={() => { closeImageViewer() } }
       images={[{src:  require('../../assets/resume.jpeg'), alt: ''}]}
       />
    )
  }
  
  
  
  
  
 
 
  
  
  
  
      
    </div>
                
                 
              </MDBCardBody>
            </MDBCard>
            <h2 className='text-white'>FRONT-END DEVELOPER</h2>
            <p className='text-white'> I'm Gowtham, a passionate front-end developer with a love for turning ideas into engaging digital experiences. Armed with a toolkit that includes HTML, CSS, Bootstrap, JavaScript, and the ever-dynamic React, I thrive on bringing creativity to life in the online realm. Whether it's crafting clean and responsive layouts or diving into the intricacies of interactive user interfaces, I'm all about making the web a visually stunning and seamless space. Let's code the future together!"</p>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}