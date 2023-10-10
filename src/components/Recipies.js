import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LatestRecepie.css'
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';

const Recipies = () => {
    const [items, setItems] = useState('')
    const getAllRecepies = async () => {
        const result = await fetch('https://mernrecepiebackend.onrender.com/api/allItem')
        const responce = await result.json()
        console.log(responce)
        setItems(responce)
    }
    useEffect(() => {
        getAllRecepies()
    }, [])




    return (
        <>
            <Container fluid className='bgColour mt-3'>

                <Row >
                    <Col lg={2}></Col>
                    <Col lg={6}>
                        <h4 className='HeadingColour mt-4'>THE LATEST & GREATEST</h4>
                        {items && items.allItems.map((value, index) => {
                            return (
                                <>
                                    <Row key={value._id}>
                                        <Col lg={4}  >  <img src={`https://mernrecepiebackend.onrender.com/${value.image}`} style={{ height: '200px', width: '200px' }} /></Col>
                                        <Col lg={1}></Col>
                                        <Col lg={7} className='ml-5 '>
                                            <div className='latestRecepieName'> {value.name}</div>
                                            <div className='latestRecepieDes mt-1'>{value.description.substring(0, 250)}</div>
                                            <Link to={`/SingleRecepie/${value._id}`} > <Button variant="outline-danger">Load More ....</Button></Link>
                                        </Col>


                                    </Row>
                                    <hr className='hLine' />
                                </>


                            )

                        })}



                    </Col>
                    <Col lg={4}></Col>


                </Row>
            </Container>
            {/* <Link to='/SingleRecepie/tanaya/22'>click here</Link> */}


        </>
    )
}

export default Recipies
