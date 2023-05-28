import Expenses from './Expenses';
import NewExpense from './NewExpense';
import {  useEffect, useState } from 'react';
import axios from 'axios'
import Dashboard from './Dashboard';

function Home() {
  const [expense,setExpense] = useState([])
  const [username,setUserName] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/dashboard');
      setExpense(response.data.userData.data)
      setUserName(response.data.username)
    };
    fetchData();
  },[])
  const saveExpenseDataHandler = (enteredData)=>{
    setExpense(prevData =>{
       return [enteredData,...prevData];
    })
}

  return (
    <div>
      <Dashboard username={username}/>
      <NewExpense onSaveDataHandler={saveExpenseDataHandler}/>
      {expense.length!==0 && <Expenses items={expense}></Expenses>}
    </div>
  );
}

export default Home;
