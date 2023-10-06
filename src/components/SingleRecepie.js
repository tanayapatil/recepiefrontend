import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SingleRecepie.css'
import dataContext from './Context/DataContext';



const SingleRecepie = () => {
  const [item, setItem] = useState('')
  const { name, id } = useParams()

 

  const getSingleProduct = async () => {
    const result = await fetch(`https://mernrecepiebackend.onrender.com/api/singleItem/${id}`)
    const responce = await result.json()
    console.log(responce)
    setItem(responce)
  }


  //jevha item change hoel tevha single product call karne
  useEffect(() => {
    getSingleProduct()
  }, [item])

  // useEffect(()=>{
  //   getAllRecepies()
  // })
  return (
    <>


      <Container>
        <Row>
          <Col lg={8}>

            {item && item.singleRecepie.map((value, index) => {
              return (<div key={value._id}> 
                <Row>

                  <Col lg={3}></Col>
                  <Col lg={6} className='heading mt-2'>{value.name}</Col>
                </Row>
                <Row>
                  <Col lg={3}></Col>
                  <Col lg={6} className='mt-3'><img src={`https://mernrecepiebackend.onrender.com/${value.image}`} /></Col>
                </Row>
                <Row >
                  <Col lg={3}></Col>
                  <Col lg={6} className='mt-3'>{value.description}</Col>
                </Row>
                <Row>
                  <Col lg={3}></Col>
                  <Col lg={6} className='mt-3'>
                    
                      <div className='mt-3 linkStyle'>रेसिपी चा संपूर्ण व्हिडीओ पाहण्यासाठी या लिंक वर क्लिक करा:</div>
                      <a href={value.youTube} target='_blank'>{value.youTube} </a>
                    
                  </Col>
                </Row>



              </div>)
            })}

          </Col>
          <Col lg={4}>Right Sidebar</Col>
        </Row>

        <Row className='mt-5'></Row>

      </Container>


    </>
  )
}

export default SingleRecepie
