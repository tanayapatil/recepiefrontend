import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { json } from 'react-router';

const Addrecepies = () => {
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [des, setDes] = useState('')
  const [file, setFile] = useState('')
  const [link, setLink] = useState('')

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  // form data ne add kartana file che jevha karto tevha form.append karto tevha  database aivaji name eg myImg
  const handleSubmit =  (e) => {
    e.preventDefault()
    const form = new FormData();
    form.append('name', name);
    
    form.append('catagory', cat);
    form.append('description', des);
    form.append('myImg', file);
    form.append('youTube', link);
   


    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   }
    // }

   

     axios.post('https://mernrecepiebackend.onrender.com/api/additem',form).then((responce)=>{console.log(responce.data)})

    
    setName('')
    setCat('')
    setDes('')
    setFile('')
    setLink('')





    






  }

  return (
    <>

      <Container className='mt-5'>
        <Row className='mt-5'></Row>
        <Row className='mt-5'>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h3>Add Recepie</h3>
            <Form className='mt-4' onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="add recepie name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Catagory
                </Form.Label>
                <Col sm="10">
                  <Form.Select aria-label="Default select example" value={cat} onChange={(e) => { setCat(e.target.value) }}>
                    <option>Open this select menu</option>
                    <option value="shravanrecepie">श्रावण रेसिपी</option>
                    <option value="ladoo">लाडू</option>
                    <option value="khir">खीर</option>
                    <option value="sweet">स्वीट्स</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" rows={3} value={des} onChange={(e) => { setDes(e.target.value) }} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Image
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="file" name='myImg' onChange={handleChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Add link
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="you tube link" value={link} onChange={(e) => { setLink(e.target.value) }} />
                </Col>
              </Form.Group>








              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">

                </Form.Label>
                <Col sm="10">
                  <Button variant="primary" type="submit" >
                    Submit
                  </Button>
                </Col>
              </Form.Group>

              {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
            </Form>

          </Col>
          <Col lg={3}></Col>
        </Row>


      </Container>
    </>
  )
}

export default Addrecepies
