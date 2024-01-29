// 




// Book.jsx
// Book.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import BookingForm from './Bookingform';

const Book = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const fetchAvailableTimeSlots = async () => {
    try {
      setLoading(true);
      setError('');

      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!selectedDate || !dateRegex.test(selectedDate)) {
        return setError('Please select a valid date in YYYY-MM-DD format.');
      }

      setAvailableTimeSlots([]);

      const serverUrl = `http://localhost:3000/api/v1/clients/book/${selectedDate}`;
      const response = await axios.get(serverUrl);

      const { timeSlots } = response.data;

      if (timeSlots.length === 0) {
        alert('No available time slots for the selected date.');
      }

      setAvailableTimeSlots(timeSlots);
    } catch (error) {
      alert('Error fetching available time slots. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTimeSlotSelection = (selectedTime) => {
    setSelectedTimeSlot(selectedTime);
    setShowBookingForm(true);
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
                <Button
                  variant="secondary"
                  block
                  disabled={loading}
                  onClick={() => handleTimeSlotSelection(time)}
                >
                  {time}
                </Button>
              </Col>
            ))}
          </Row>
        </Form.Group>
      </Form>

      {/* Render the BookingForm component as a Modal */}
      <Modal show={showBookingForm} onHide={() => setShowBookingForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookingForm
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
            onClose={() => setShowBookingForm(false)}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Book;
