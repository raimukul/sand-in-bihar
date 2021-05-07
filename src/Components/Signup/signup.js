import React from 'react'
import './signup.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default function signup() {
    return (
        <div className='sbackground'>
             <Header />
             <MDBContainer className='mt-5'>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol md="5">
          <MDBCard   className='card-image signupbg'>
          <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
            <MDBCardBody>
              <form>
                <div className="text-white">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
             <Footer />
        </div>
    )
}
