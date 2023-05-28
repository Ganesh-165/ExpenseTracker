import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './LoginAndRegister.css';
import axios from "axios";

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [message,setMessage] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const onLoginHandler = async (event) => {
        event.preventDefault();
        const response =  await axios.post("http://localhost:5000/",{email:email,password:password},{
          headers:{'Context-Type':"application/json"},
          withCredentials:true
        })

        if(response.data.success)navigate('/dashboard')
        else{
          setMessage(response.data.message);
          setTimeout(()=>{setMessage(null)},3000)
        }
      }
    return (
      <div className="form-container">
        <h3>Login</h3>
        <p>{message}</p>
        <form type="submit">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="PassWord"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button className="form-btn" onClick={onLoginHandler}>
          Login
        </button>
        <p><NavLink className="a" to="/register">
              Register Here!
        </NavLink></p>
      </form>
      </div>
    );
  }

export default Login;