// BookingForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingForm = ({ selectedDate, selectedTimeSlot, onClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    department: '',
    name: '',
    email: '',
    phone: '',
    sex: '',
    age: '',
    date: selectedDate,
    timeSlot: selectedTimeSlot,
    bloodgroup: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set form submission status to true

    try {
      console.log('Submitting form data:', formData);

      // Make a request to save the form data
      const response = await axios.post('http://localhost:3000/api/v1/tickets', formData);
      console.log('Booking successful:', response.data);

      // Additional logic if needed, such as showing a success message

      // Trigger the onFormSubmit callback with the form data
      onFormSubmit(formData);

      // Close the form
      onClose();
    } catch (error) {
      console.error('Error booking:', error.message);
      // Handle error, show an error message, etc.
    } finally {
      setIsSubmitting(false); // Set form submission status back to false
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <h3 className="mt-4">Booking Form</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Selected Date:</Form.Label>
            <Form.Control type="text" value={selectedDate} readOnly />
          </Col>
          <Col>
            <Form.Label>Selected Time Slot:</Form.Label>
            <Form.Control type="text" value={selectedTimeSlot} readOnly />
          </Col>
        </Row>

      
        <Form.Group controlId="formDepartment" className="mb-3">
          <Form.Label>Department:</Form.Label>
          <Form.Control type="text" name="department" value={formData.department} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formSex" className="mb-3">
          <Form.Label>Sex:</Form.Label>
          <Form.Control as="select" name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Age:</Form.Label>
          <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBloodGroup" className="mb-3">
          <Form.Label>Blood Group:</Form.Label>
          <Form.Control type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </Button>
        <Button variant="secondary" className="ms-2" onClick={onClose}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
