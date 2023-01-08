import React from 'react';
import styles from './Form.styles.module.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile
}

from 'mdb-react-ui-kit';



function Form() {
  return (
    <div className={styles.addMeme}>
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='4' className='my-5'>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Meme title</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Add meme title' size='lg' id='form1' type='text'/>
                </MDBCol>

              </MDBRow>


              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload file</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' />
                  <div className="small text-muted mt-2">Upload your meme. Max file size 2 MB</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn color='dark' className='my-7' size='lg'>ADD MEME!</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>

  );
}

export default Form;