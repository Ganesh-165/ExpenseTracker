import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import './LoginAndRegister.css';


function Register() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const onRegisterHandler =async (event) => {
      event.preventDefault();
      if(confPassword===password){
        const response =  await axios.post('http://localhost:5000/register', { username, password, email});
        try {
            if(response.data.success){
              navigate('/')
            }
            else{
              setMessage(response.data.message);
              setTimeout(()=>{setMessage(null)},3000)
            }
          }
          catch (error) {
          console.error(error);
        }
      }else{
        setMessage("Password and Conform password must be same");
        setTimeout(()=>{setMessage(null)},3000)
      }
    };
    return (
      <div className="form-container">
        <h3>Register</h3>
        <p>{message}</p>
        <form onSubmit={onRegisterHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setusername(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="ConformPassWord"
          onChange={(e) => setconfPassword(e.target.value)}
          required
        ></input>
        <button className="form-btn">Submit</button>
        <p><NavLink className="a" to="/">
              Login Here!
            </NavLink>
        </p>
        </form>
      </div>
    );
  }

  export default Register;