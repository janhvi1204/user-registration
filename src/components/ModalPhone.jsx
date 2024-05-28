// import React, { useState } from 'react';
// import '../assets/css/modal.css'

// const Modal = ({ isOpen, onClose }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = () => {
//     console.log('Submitted:', inputValue);
//     onClose();
//   };

//   if (!isOpen) {
//     return null; // Render nothing if modal is not open
//   }

//   return (
//       <div className="modal">
//         <h4>Enter OTP</h4>
//         <input
//           type="text"
//         //   className="form-control mx"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="9999"
//         />
//         <div className="modal-buttons">
//           <button onClick={handleSubmit} type="submit" className="btn btn-success mt-3">
//             Submit</button>
//           <button onClick={onClose} type= "button" className="btn btn-outline-secondary"> 
//           Resend OTP</button>
//         </div>
//       </div>
//   );
// };

// export default Modal;
