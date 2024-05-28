// SignupPage.js
import axios from "axios";
import React, { useState } from "react";

const SignupPage = ( ) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value 
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyapi.io/data/v1/user/create', data, {
        headers: {
          'Content-Type': 'application/json',
          'app-id': '6655a8bf465ece34634c8bf7'
        }
      });
      console.log(response);
      setResponse('User created successfully')
    } catch (error) {
      console.error('Error:', error);
      setResponse(error?.response?.data?.error)
    }
  }

  console.log(data,'data====>>>')
  console.log(response,'respose')
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <form
        action=""
        style={{ width: "400px" }}
        className="text-center"
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            className="form-control"
            id="floatingFirstName"
            placeholder="John"
          />
          <label htmlFor="floatingFirstName">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            className="form-control"
            id="floatingLastName"
            placeholder="Doe"
          />
          <label htmlFor="floatingLastName">Last Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="form-control"
            id="floatingEmail"
            placeholder="johndoe@gmail.com"
          />
          <label htmlFor="floatingEmail">Email Address</label>
        </div>
        <button
          type="submit"
          className="btn btn-success mt-3 w-100"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default SignupPage;