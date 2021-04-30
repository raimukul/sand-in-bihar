import { MDBContainer, MDBJumbotron } from 'mdbreact'
import React from 'react'
import './vision.css'

export default function vision() {
    return (
        <div>
            <MDBJumbotron className='visionb'>
                <MDBContainer><div className='text-center h3 text-white'>Vision</div>
             <hr className='text-center bg-secondary'></hr> 
             <div className='text-center text-white'> A vision statement is a document that states the current and future objectives of an organization. The vision statement is intended as a guide to help the organization make decisions that align with its philosophy and declared set of goals.</div>   
           </MDBContainer>
              </MDBJumbotron>  
        </div>
    )
}
