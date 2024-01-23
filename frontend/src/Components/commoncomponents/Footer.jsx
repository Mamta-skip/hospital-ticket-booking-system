import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
      <Row>
        <Col md={2} className='p-10px'>
          <h3>ABC HOSPITAL</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adip
            isicin Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </Col>
        <Col md={3}>
          <ol>
            <h3>Support</h3>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ol>
        </Col>
        <Col>
          <h3>Location Maps</h3>
        </Col>
        <Col>
          <h3>Contact Info</h3>
          <div className="contactinfo">
            <div className='contactinfoitem'>
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#4bd624" }} />
              <p>Pokhara, Nepal</p>
            </div>
           
            <div className='contactinfoitem'>
              <FontAwesomeIcon icon={faPhone} />
              <p>987654321</p>
            </div>
            <div className='contactinfoitem'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>abchospital@gmail.com</p>
            </div>
            {/* <div className='contactinfoitem'>
              <FontAwesomeIcon icon={faWebflow} />
              <p>abchospital.com</p>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
