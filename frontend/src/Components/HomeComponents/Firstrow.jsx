import React from 'react'
import {  Col, Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import row1image from '../images/row1.jpg';
import Image from 'react-bootstrap/Image';

function Firstrow() {
  return (
    <div>
      <Container className='mt-5'>
        <Row>
            <Col md={6} >
            <Card  border='light'>
                <Card.Body  className="d-flex flex-column align-items-center mt-4" >
        <Card.Title >Your Health is your priority.</Card.Title>
        <Card.Text >
          Some quick example text to build on the card title and make up the
          bulk of the card's content text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" >Book Ticket</Button>{' '}

      </Card.Body>

                </Card>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image src={row1image} alt="" rounded style={{ width: '500px', height: '300px', alignContent:'center' }} />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Firstrow
