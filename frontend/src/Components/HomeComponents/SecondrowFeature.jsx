import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import image1 from '../images/image1.jpg'
function SecondrowFeature() {
  return (
    <div>
      <Container>
        <Row className='mt-4'>
            <Col md={4}>
            <Card  border="light">
                <Card.Body  className="d-flex flex-column align-items-center "  >
                <Card.Img  className='m-2'variant="top" src={image1} circle style={{ width: '20%', height: '20%' }} />
        <Card.Title className='m-2'>ADVANCE TECHNOLOGY</Card.Title>
        <Card.Text className='m-2' >
        Some quick example text to build on the card title and make up the
          bulk of the card's content
        </Card.Text>
        

      </Card.Body>

                </Card>
            </Col>
            <Col md={4}>
            <Card  border='light'  >
                <Card.Body  className="d-flex flex-column align-items-center "  >
                <Card.Img  className='m-2'variant="top" src={image1} circle style={{ width: '20%', height: '20%' }} />
        <Card.Title className='m-2'>HEALTHCARE SOLUTIONS</Card.Title>
        <Card.Text className='m-2' >
        Some quick example text to build on the card title and make up the
          bulk of the card's content
        </Card.Text>
        

      </Card.Body>

                </Card>
            </Col>
            <Col md={4}>
            <Card  border='light' >
                <Card.Body  className="d-flex flex-column align-items-center "  >
                <Card.Img  className='m-2'variant="top" src={image1} circle style={{ width: '20%', height: '20%' }} />
        <Card.Title className='m-2'>24/7 AVAILABILITY</Card.Title>
        <Card.Text className='m-2' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content
        </Card.Text>
        

      </Card.Body>

                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SecondrowFeature
