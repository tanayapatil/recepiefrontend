import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col, { useCol } from 'react-bootstrap/Col';
import dataContext from './Context/DataContext';
import Button from 'react-bootstrap/Button';
import './Catagorywise.css'
import { Link } from 'react-router-dom';

const Catagorywise = () => {
    const context = useContext(dataContext)
    const { items, getAllRecepies, setItems } = context

    const filteredItem = (value) => {
        

        const myvalue =items.filter((ele, index) => {
            return ele.catagory === value
        })

        setItems(myvalue)
        


    }

   

    useEffect(()=>{
        getAllRecepies()
    },[])
    return (
        <>

            <Container className='mt-5'>
                <Row className='mt-4'>
                    <Col lg={1}></Col>
                    <Col lg={10} >
                        <div className='d-flex justify-content-evenly'>

                            <Button variant="outline-danger" onClick={() => { filteredItem('sweet') }}>श्रावण रेसिपी</Button>
                            <Button variant="outline-danger">लाडू</Button>
                            <Button variant="outline-danger">खीर</Button>
                            <Button onClick={getAllRecepies} variant="outline-danger" >सर्व रेसिपी</Button>

                        </div>

                    </Col>
                </Row>

                <Row className='mt-4'>
                    {items && items.map((value, index) => {
                        return (
                            <>
                             
                                <Col lg={3} md={4} sm={6} xs={12}>

                                    {/* <div className='mt-5'><img src={`http://localhost:2000/${value.image}` }  style={{ height: '150px', width: '150px' }} /></div>
                                    <div className='imgHeading'>{value.name}</div> */}
                                    <Row>
                                    <Link to={`/SingleRecepie/${value.name}/${value._id}`} > <Col className='mt-5 imgtransform' lg={12}><img src={`https://mernrecepiebackend.onrender.com/${value.image}`} style={{ height: '150px', width: '150px' }} /></Col></Link>
                                    </Row>
                                    <Row>
                                        <Col className='imgHeading' lg={12} >{value.name}</Col>
                                    </Row>
                                </Col>
                               

                            </>
                        )
                    })}

                </Row>
            </Container>



            <Row className='mt-5'></Row>


        </>
    )
}

export default Catagorywise
