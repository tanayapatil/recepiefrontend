

import React,{useContext, useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import dataContext from './Context/DataContext';
import { Link } from 'react-router-dom';

const Footer = () => {

  const context = useContext(dataContext)
  const { items, getAllRecepies} = context
  // const[data,setData]=useState('')

  // const handleClick=(myId)=>{

  //   setData(myId)

  // }

  useEffect(()=>{
    getAllRecepies()
  })



  return (
    <div className='footerbg'>
    <Container >
        <Row >
          {/* <Col lg={1}></Col> */}
            <Col lg={3} >
              <h6 className='mt-3 text-center '>पॉप्युलर रेसिपी </h6>
              <hr/>
              {
                 items.slice(0, 5).map((value,index)=>{
                  return(
                    <ul >
                      <Link className='linkStyle' to={`/SingleRecepie/${value.name}/${value._id}`} ><li  >{value.name}</li></Link>
                    </ul>
                  )
                 })
              }
              </Col>
              <Col lg={1}></Col>
            <Col lg={3}> पॉप्युलर कॅटॅगरी</Col>
            <Col lg={4}>सोसिअल मीडिया </Col>
                
           
        </Row>
        <Row className='mt-5'></Row>
       
    </Container>
     
    </div>
  )
}

export default Footer
