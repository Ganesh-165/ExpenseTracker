import React from "react";
import './NewExpense.css';
import { useState } from "react";
import axios from "axios";

const AddExpense = (props)=>{

        const [enteredTitle,setEnteredTitle] = useState('');
        const [enteredAmount,setEnteredAmount] = useState('');
        const [enteredDate,setEnteredDate] = useState('');

        const titleHandler = (event) => {
            setEnteredTitle(event.target.value);
        }
        const amountHandler = (event) => {
            setEnteredAmount(event.target.value);
        }
        const dateHandler = (event) => {
            setEnteredDate(event.target.value);
        }
        const submitHandler = async(event) =>{
            event.preventDefault();
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
            props.onSaveDataHandler(expenseData);
            await axios.post('http://localhost:5000/dashboard',{title:enteredTitle,amount:enteredAmount,date:enteredDate});
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
        return (
            <div className="new-expense">
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type='text' value={enteredTitle}  onChange={titleHandler} required></input>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type='number' value={enteredAmount}  min='0' step='0' onChange={amountHandler} required></input>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type='date' value={enteredDate} min='2019-01-01' onChange={dateHandler} required></input>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expenses</button>
                        <button onClick={props.value}>Cancel</button>
                    </div>
                </form>
             </div>
        )
}
const SetAddExpense = (props)=>{
    return (
        <div className="new-expense">
            <button onClick={props.value}>Add NewExpense</button>
        </div>
    )
}

const NewExpense = (props)=>{
    const [bool,setBool] = useState(true);
    const handle = ()=>{
        setBool(!bool);
    }
    const saveExpenseDataHandler = (enteredData)=>{
        const expenseData={
          ...enteredData,
          id: Math.random().toString()
        };
        props.onSaveDataHandler(expenseData);
    }
     return (
        <div>
            { bool?<SetAddExpense value={handle}/>:<AddExpense value={handle} onSaveDataHandler={saveExpenseDataHandler}/>}
        </div>
    )
}
export default NewExpense;
