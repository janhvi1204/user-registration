// phone.js
import React, { useState } from "react";
import {Modal} from 'react-responsive-modal' 

const PhonePage = ({ handlePhone }) => {
  // const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    //if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handlePhone(phone);
    setIsModalOpen(true);
    //};
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center">Login with Phone</h3>
        <form action="" style={{ width: "400px" }} className="text-center">
          <div className="form-floating mb-3">
            <input
              type="phone"
              className="form-control"
              id="floatingInput"
              placeholder="9999999999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter your phone number</label>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-success mt-2 w-100"
          >
            Send OTP
          </button>
        </form>
      </div>
      <Modal open={isModalOpen} onClose={closeModal} center>
       <>
       <h4>Enter OTP</h4>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          // value={inputValue}
          // onChange={handleInputChange}
          placeholder="9999"
        />
        <div className="modal-buttons">
          <button onClick={closeModal} type= "button" className="btn btn-outline-secondary mt-3 w=10"> 
          Resend OTP</button>
          <button  type="submit" className="btn btn-success mt-3 mx-2 w=10">
            Submit</button>
        </div>
       </>
      </Modal> 
    </>
  );
};

export default PhonePage;
