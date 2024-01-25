import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const UserBookingComponent = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/schedule');
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  const handleSlotClick = (timeSlot) => {
    if (!timeSlot.isBooked) {
      setSelectedSlot(timeSlot);
    }
  };

  const handleBookAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/bookAppointment', {
        date: selectedSlot.date,
        time: selectedSlot.time,
        patientName,
      });

      if (response.data.success) {
        alert(`Booking Confirmed!\nDate: ${selectedSlot.date}\nTime: ${selectedSlot.time}\nName: ${patientName}`);
        setSelectedSlot(null);
        setPatientName('');
      } else {
        alert('Booking failed. This time slot is already booked. Please choose another time.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred while booking the appointment. Please try again later.');
    }
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    const startTimeFirstShift = new Date();
    startTimeFirstShift.setHours(9, 0, 0, 0);

    const startTimeSecondShift = new Date();
    startTimeSecondShift.setHours(13, 0, 0, 0);

    for (let i = 0; i < 6; i++) {
      const timeFirstShift = new Date(startTimeFirstShift.getTime() + i * 20 * 60 * 1000);
      const formattedTimeFirstShift = timeFirstShift.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const timeSlotFirstShift = schedule.find((slot) => slot.time === formattedTimeFirstShift);

      const timeSecondShift = new Date(startTimeSecondShift.getTime() + i * 20 * 60 * 1000);
      const formattedTimeSecondShift = timeSecondShift.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const timeSlotSecondShift = schedule.find((slot) => slot.time === formattedTimeSecondShift);

      timeSlots.push(
        <React.Fragment key={formattedTimeFirstShift}>
          <Col>
            <Button
              onClick={() => handleSlotClick(timeSlotFirstShift)}
              variant={timeSlotFirstShift?.isBooked ? 'warning' : 'success'}
              className="mb-2"
            >
              {formattedTimeFirstShift}
            </Button>
          </Col>

          <Col>
            <Button
              onClick={() => handleSlotClick(timeSlotSecondShift)}
              variant={timeSlotSecondShift?.isBooked ? 'warning' : 'success'}
              className="mb-2"
            >
              {formattedTimeSecondShift}
            </Button>
          </Col>
        </React.Fragment>
      );
    }

    return timeSlots;
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Take appointment by selecting your preferable  time </h2>
      <Row className="mb-2">
        <Col>
          <p>Date: [Insert Date Here]</p>
        </Col>
        <Col>
          <p>Day: [Insert Day Here]</p>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <h4>First Shift (9 AM - 12 PM)</h4>
        </Col>
        <Col>
          <h4>Second Shift (1 PM - 2 PM)</h4>
        </Col>
      </Row>

      <Row>{renderTimeSlots()}</Row>

      {selectedSlot && (
        <Container className="booking-form mt-4">
          <h3>Selected Time Slot</h3>
          <p>{`${selectedSlot.date} ${selectedSlot.time}`}</p>
          <h3>Booking Form</h3>
          <Form>
            <Form.Group controlId="patientName">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleBookAppointment}>
              Book Appointment
            </Button>
          </Form>
        </Container>
      )}
    </Container>
  );
};

export default UserBookingComponent;
