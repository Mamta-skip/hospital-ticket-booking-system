import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const ClientBooking = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedSlotDetails, setSelectedSlotDetails] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch appointments from the backend
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/admins/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleBookSlot = (slotDetails) => {
    setSelectedSlotDetails(slotDetails);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSelectedSlotDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmitForm = async () => {
    try {
      await axios.post('http://localhost:3000/api/v1/tickets', {
        department: selectedSlotDetails.department,
        doctor: selectedSlotDetails.doctor,
        name: selectedSlotDetails.name,
        email: selectedSlotDetails.email,
        phone: selectedSlotDetails.phone,
        sex: selectedSlotDetails.sex,
        age: selectedSlotDetails.age,
        date: selectedSlotDetails.date,
        time: `${selectedSlotDetails.startTime} - ${selectedSlotDetails.endTime}`,
      });

      console.log('Booking submitted successfully');
    } catch (error) {
      console.error('Error submitting booking:', error);
    }

    setShowForm(false);
    setSelectedSlot('');
    setSelectedSlotDetails(null);
  };

  return (
    <Container className="mt-4">
      <h2>Book a Slot</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formSelectSlot">
            <Form.Label>Select a Time Slot</Form.Label>
            <Form.Control as="select" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
              <option value="" disabled>Select a slot...</option>
              {appointments.map((appointment) => (
                <option key={appointment._id} value={appointment._id} onClick={() => handleBookSlot(appointment)}>
                  {`${appointment.labelText} - ${appointment.selectedDate} - ${appointment.timeSlots.join(', ')}`}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={() => handleBookSlot(selectedSlotDetails)}>
            Book Slot
          </Button>
        </Col>
      </Row>

      {/* Form Modal */}
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => { e.preventDefault(); handleSubmitForm(); }}>
            {/* ... (unchanged form fields) */}
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ClientBooking;
