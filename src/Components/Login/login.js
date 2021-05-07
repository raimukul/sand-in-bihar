import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput,MDBIcon } from 'mdbreact';
import './login.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function login() {
    return (
        <div className='lbackground'>
            <Header />
           <MDBContainer className='mt-5'>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol md='5'>
          <MDBCard
            className='card-image loginbg'
            // style={{
            //   backgroundImage:
            //     'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)',
            //   width: '28rem'
            // }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <MDBRow className='d-flex align-items-center mb-2'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1 licon'
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <p className="font-small  text-right d-flex justify-content-center mb-3 pt-1">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  className="mr-md-3 z-depth-1a licon"
                >
                  <MDBIcon fab icon="facebook-f" className="black-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  className="mr-md-3 z-depth-1a licon"
                >
                  <MDBIcon fab icon="twitter" className="black-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  className="z-depth-1a licon"
                >
                  <MDBIcon fab icon="google-plus-g" className="black-text" />
                </MDBBtn>
              </div>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                Not a member?

                  <a href='/signup' className='green-text ml-1 font-weight-bold'>
                  Sign Up
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer> 
    <Footer />

        </div>
    )
}
