import React from "react";
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
import axios from "axios";

const  Dashboard = (props)=>{
    const navigate = useNavigate();
    const logoutHandler = async()=>{
        try {
          const response = await axios.post('http://localhost:5000/logout', null);
          console.log(response.data.message);
          navigate('/')
        } catch (error) {
          console.error(error);
        }
      }
    return(
        <div className="header">
            <h3>Welcome {props.username}</h3>
            <button className='form-button' onClick={logoutHandler}>Logout</button>
        </div>
    )
}
export default Dashboard;