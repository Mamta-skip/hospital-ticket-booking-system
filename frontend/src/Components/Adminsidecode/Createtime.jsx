import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AdminAppointmentForm = () => {
  const [labelText, setLabelText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const generateTimeSlots = () => {
    const timeSlots = [];
    const interval = 20; // Interval in minutes
    const startTime = new Date(`2000-01-01 09:00`);
    const endTime = new Date(`2000-01-01 16:00`);

    let current = startTime;

    while (current <= endTime) {
      const formattedTime = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeSlots.push(formattedTime);
      current = new Date(current.getTime() + interval * 60000);
    }

    return timeSlots;
  };

  const handleButtonClick = (time) => {
    // Add or remove time slot based on user interaction
    setSelectedTimeSlots((prevTimeSlots) =>
      prevTimeSlots.includes(time)
        ? prevTimeSlots.filter((slot) => slot !== time)
        : [...prevTimeSlots, time]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serverUrl = 'http://localhost:3000/api/v1/admins/appointments';
      await axios.post(serverUrl, {
        labelText,
        selectedDate,
        selectedTimeSlots,
      });

      console.log('Data sent successfully');

      setLabelText('');
      setSelectedDate('');
      setSelectedTimeSlots([]);
    } catch (error) {
      console.error('Error sending data:', error.message);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="p-4 border rounded">
        <h3>Add Appointment</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Enter label text"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            className="mb-3"
          />

          <Form.Group controlId="formDateAndTime" className="mb-3">
            <Form.Label>Select Date:</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTimeSlots">
            <Form.Label>Select Time Slots:</Form.Label>
            <Row className="mb-3">
              {generateTimeSlots().map((time, index) => (
                <Col key={index} xs={3} className="mb-2">
                  <Button
                    variant={selectedTimeSlots.includes(time) ? 'primary' : 'secondary'}
                    onClick={() => handleButtonClick(time)}
                    block
                  >
                    {time}
                  </Button>
                </Col>
              ))}
            </Row>
          </Form.Group>

          <div className='d-flex align-items-center justify-content-center'>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AdminAppointmentForm;
