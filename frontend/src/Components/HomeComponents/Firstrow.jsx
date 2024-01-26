import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import row1image from '../images/row1.jpg';
import Image from 'react-bootstrap/Image';

function Firstrow() {
  return (
    <div>
      <Container className='mt-5 align-item-center justify-content-center' style={{ height: '400px' }}>
        <Row>
          <Col md={6}>
            <Card border='light' style={{ height: '100%' }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title style={{ fontSize: '1.9rem',textTransform:'uppercase', color:'#349122',fontWeight: 'bold', marginBottom: '1rem' }}>
                  Your Health is your priority
                </Card.Title>
                <Card.Text style={{ fontSize: '1.2rem', textAlign: 'center', lineHeight: '2rem', color: '#555' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button style={{ fontSize: '1.5rem',color:'#fff',background:'#349122', border:'none', padding: '12px 15px', marginTop: '1rem' }}>
                  Book Ticket
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image src={row1image} alt="" rounded style={{ width: '500px', height: '300px', alignContent: 'center' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Firstrow;
