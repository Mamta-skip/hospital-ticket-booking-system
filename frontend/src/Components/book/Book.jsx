// // 




// // Book.jsx
// // Book.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
// import BookingForm from './Bookingform';

// const Book = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const fetchAvailableTimeSlots = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//       if (!selectedDate || !dateRegex.test(selectedDate)) {
//         return setError('Please select a valid date in YYYY-MM-DD format.');
//       }

//       setAvailableTimeSlots([]);

//       const serverUrl = `http://localhost:3000/api/v1/clients/book/${selectedDate}`;
//       const response = await axios.get(serverUrl);

//       const { timeSlots } = response.data;

//       if (timeSlots.length === 0) {
//         alert('No available time slots for the selected date.');
//       }

//       setAvailableTimeSlots(timeSlots);
//     } catch (error) {
//       alert('Error fetching available time slots. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTimeSlotSelection = (selectedTime) => {
//     setSelectedTimeSlot(selectedTime);
//     setShowBookingForm(true);
//   };

//   useEffect(() => {
//     if (selectedDate) {
//       fetchAvailableTimeSlots();
//     }
//   }, [selectedDate]);

//   return (
//     <Container>
//       <h3 className="mt-4">Choose Appointment Time</h3>
//       <Form>
//         <Form.Group controlId="formDate" className="mb-3">
//           <Form.Label>Select Date:</Form.Label>
//           <Form.Control
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formTimeSlots">
//           <Form.Label>Available Time Slots:</Form.Label>
//           {loading && <p>Loading...</p>}
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <Row className="mb-3">
//             {availableTimeSlots.map((time, index) => (
//               <Col key={index} xs={3} className="mb-2">
//                 <Button
//                   variant="secondary"
//                   block
//                   disabled={loading}
//                   onClick={() => handleTimeSlotSelection(time)}
//                 >
//                   {time}
//                 </Button>
//               </Col>
//             ))}
//           </Row>
//         </Form.Group>
//       </Form>

//       {/* Render the BookingForm component as a Modal */}
//       <Modal show={showBookingForm} onHide={() => setShowBookingForm(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Booking Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <BookingForm
//             selectedDate={selectedDate}
//             selectedTimeSlot={selectedTimeSlot}
//             onClose={() => setShowBookingForm(false)}
//           />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default Book;





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
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const fetchBookedTimeSlots = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/clients/booked/${selectedDate}`);
      console.log(response.data);  // Log the response data
      const { bookedSlots } = response.data;
  
      setBookedTimeSlots(bookedSlots.map(ticket => ticket.timeSlot));
    } catch (error) {
      console.error('Error fetching booked time slots:', error);
      setError('Error fetching booked time slots. Please try again.');
    }
  };
  
  

  // const handleTimeSlotSelection = (selectedTime) => {
  //   if (bookedTimeSlots.includes(selectedTime) || formSubmitted) {
  //     alert('This time slot is already booked. Please choose another.');
  //   } else {
  //     setSelectedTimeSlot(selectedTime);
  //     setShowBookingForm(true);
  //   }
  // };
  const handleTimeSlotSelection = (selectedTime) => {
    if (!availableTimeSlots.includes(selectedTime)) {
      alert('This time slot is not available. Please choose another.');
    } else if (bookedTimeSlots.includes(selectedTime) && !formSubmitted) {
      alert('This time slot is already booked. Please choose another.');
    } else {
      setSelectedTimeSlot(selectedTime);
      setShowBookingForm(true);
    }
  };
  
  
  const handleFormSubmit = async (formData) => {
    try {
      // Make your API call to submit the form data
      // Example: await axios.post('/api/submit-form', formData);

      // Update the booked time slots only if the form is successfully submitted
      setBookedTimeSlots([...bookedTimeSlots, selectedTimeSlot]);

      // Set the formSubmitted state to true
      setFormSubmitted(true);

      // Close the booking form modal
      setShowBookingForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimeSlots();
      fetchBookedTimeSlots();
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
                  disabled={bookedTimeSlots.includes(time)}
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
            onFormSubmit={handleFormSubmit}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Book;


