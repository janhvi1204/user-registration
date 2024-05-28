// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/Login";
import SignupPage from "./components/SignUp";
import PhonePage from "./components/Phone";
import Modal from "./components/ModalPhone";
import 'react-responsive-modal/styles.css';
import './assets/css/modal.css'
import Users from "./pages/Users";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    alert(`Data submitted! \nemail: ${email}, password: ${password}`)
    // setIsLoggedIn(true);
  };

  const handleSignup = (email, password, name) => {
    alert(`Data submitted! \nname: ${name}, email: ${email}, password: ${password}`)
    console.log("SignUp", email, password, name);
  };
  const handlePhone = (phone) => {
    // alert(`Data submitted! \nphone: ${phone}`)
    console.log("Phone", phone);
  };

  return (
    <Routes>
       <Route path="/" element={<Users handleLogin={handleLogin} />} />
      {/* <Route path="/" element={<LoginPage handleLogin={handleLogin} />} /> */}
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignup={handleSignup} />} />
      <Route path="/phone" element={<PhonePage handlePhone={handlePhone} />} />
      <Route path="/modal" element={<PhonePage handlePhone={handlePhone} />} />
    </Routes>
  );
};

export default App;
