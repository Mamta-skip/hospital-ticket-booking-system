import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Book = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAvailableTimeSlots = async () => {
    try {
      setLoading(true);
      setError('');
  
      // Additional input validation for the date
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!selectedDate || !dateRegex.test(selectedDate)) {
        return setError('Please select a valid date in YYYY-MM-DD format.');
      }
  
      // Clear previous data when a new date is selected
      setAvailableTimeSlots([]);
      
      const serverUrl = `http://localhost:3000/api/v1/clients/book/${selectedDate}`;
      const response = await axios.get(serverUrl);
  
      const { timeSlots } = response.data;
  
      // Show alert if there are no available time slots
      if (timeSlots.length === 0) {
        alert('No available time slots for the selected date.');
      }
  
      setAvailableTimeSlots(timeSlots);
    } catch (error) {
      alert('Error No available time slots for the selected date,Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimeSlots();
    }
  }, [selectedDate]);

  return (
    <Container>
      <h3 className="mt-4">Choose Appointment Time</h3>
      <Form>
        <Form.Group controlId="formDate" className="mb-3">
          <Form.Label>Select Date:</Form.Label>
          <Form.Control
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTimeSlots">
          <Form.Label>Available Time Slots:</Form.Label>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Row className="mb-3">
            {availableTimeSlots.map((time, index) => (
              <Col key={index} xs={3} className="mb-2">
                <Button variant="secondary" block disabled={loading}>
                  {time}
                </Button>
              </Col>
            ))}
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Book;
