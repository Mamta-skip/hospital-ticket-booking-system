// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Row, Col } from 'react-bootstrap';

// const AdminBookingForm = () => {
//   const [formData, setFormData] = useState({
//     date: '',
//     timeSlots: [],
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddTimeSlot = () => {
//     setFormData({
//       ...formData,
//       timeSlots: [...formData.timeSlots, { startTime: '', endTime: '', availableSlots: 0 }],
//     });
//   };

//   const handleTimeSlotChange = (index, key, value) => {
//     const updatedTimeSlots = [...formData.timeSlots];
//     updatedTimeSlots[index][key] = value;
//     setFormData({
//       ...formData,
//       timeSlots: updatedTimeSlots,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const dataToSend = {
//       date: formData.date,
//       timeSlots: formData.timeSlots,
//     };

//     try {
//       await axios.post('http://localhost:3000/api/bookings/create', dataToSend);

//       // Handle success, e.g., show a success message
//       console.log('Booking schedule submitted successfully');
//     } catch (error) {
//       // Handle error, e.g., show an error message
//       console.error('Error submitting booking schedule:', error);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <h2>Create Booking Schedule</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formDate">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group controlId="formTimeSlots">
//           <Form.Label>Time Slots</Form.Label>
//           {formData.timeSlots.map((timeSlot, index) => (
//             <Row key={index} className="mb-2">
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Start Time"
//                   value={timeSlot.startTime}
//                   onChange={(e) => handleTimeSlotChange(index, 'startTime', e.target.value)}
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="End Time"
//                   value={timeSlot.endTime}
//                   onChange={(e) => handleTimeSlotChange(index, 'endTime', e.target.value)}
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   placeholder="Available Slots"
//                   value={timeSlot.availableSlots}
//                   onChange={(e) => handleTimeSlotChange(index, 'availableSlots', e.target.value)}
//                 />
//               </Col>
//             </Row>
//           ))}
//           <Button variant="outline-primary" onClick={handleAddTimeSlot}>
//             Add Time Slot
//           </Button>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Booking Schedule
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AdminBookingForm;
