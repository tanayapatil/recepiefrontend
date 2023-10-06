import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

const Myadmin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{

        e.preventDefault()
        const result=await fetch('https://mernrecepiebackend.onrender.com/api/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email:email,password:password})

        })
       const  responce=await result.json()
        console.log(responce)
        localStorage.setItem('token',responce.token)

        // localStorage.setItem('err',responce.error)
      



        const token = localStorage.getItem('token')

        if( token!=='undefined'){
            navigate('/addrecepie')
        }
        else{
           
            alert(responce.error)
        }

        // const token=localStorage.getItem("token")
        // const err=localStorage.getItem('err')
        // if(token && (err!==undefined)){
        //     navigate('/addrecepie')
        // }
        // else{
        //     alert(err)
        // }

       
        

        

    }

    return (
        <>
            <Container className='mt-5'>
                <Row className='mt-5'></Row>
                <Row className='mt-5'>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h3>Login Here</h3>
                        <Form className='mt-4' onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">

                                </Form.Label>
                                <Col sm="10">
                                    <Button variant="primary" type="submit">
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

export default Myadmin
