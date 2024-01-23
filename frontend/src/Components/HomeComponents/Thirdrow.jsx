import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import processimage from "../images/process.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faTruckMedical, faFileMedical } from '@fortawesome/free-solid-svg-icons';  // Import the specific icons

import "./Home.css";

function Thirdrow() {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="whyussection">
            <h2 className='text-center mb-4'>Why Us?</h2>
            <div className="cards mb-4">
              <Row>
                <Col md={3} className="icon-col">
                  <FontAwesomeIcon icon={faHospital} style={{ color: "#349122", width: "100%", height: "100px" }} className='icondesign' />
                </Col>
                <Col md={9} className="text-col">
                  <div className="textsection">
                    <h4>Great infrastructure</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate dignissimos vero fugiat eos odio tempore perferendis cupiditate natus optio.</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="cards mb-4">
              <Row>
                <Col md={3} className="icon-col ">
                  <FontAwesomeIcon icon={faTruckMedical} style={{ color: "#349122", width: "100%", height: "100px" }} className='icondesign' />
                </Col>
                <Col md={9} className="text-col">
                  <div className="textsection">
                    <h4>Medical transportation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur temporibus illum atque.</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="cards mb-4">
              <Row>
                <Col md={3} className="icon-col">
                  <FontAwesomeIcon icon={faFileMedical} style={{ color: "#349122", width: "100%", height: "100px" }} className='icondesign' />
                </Col>
                <Col md={9} className="text-col">
                  <div className="textsection">
                    <h4>Cutting Edge Technology</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis doloribus.</p>
                  </div>
                </Col>
              </Row>
            </div>
            {/* Repeat the above structure for other cards */}
          </div>
        </Col>
        <Col md={6} >
          <div className="processimage ">
            <Image src={processimage} alt="Process" style={{width:"100%",height:"100%"}} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Thirdrow;
