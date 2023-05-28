import Card from './Card';
import './ExpenseItem.css';
import React  from 'react';
import Modal from './Modal';
import { useState } from 'react';
import UpdateForm from './UpdateForm';

function ExpenseItem(props){
    const [date,setDate] = useState(props.value.date);
    const [amount,setAmount] = useState(props.value.amount);
    const [title,setTitle] = useState(props.value.title);
    const [bool,setBool] = useState(false);
    const onUpdateFormHandler = ()=>{
        setBool(true);
    }
    const onupdateDataHandler = (expenseData)=>{
        setAmount(expenseData.amount);
        setDate(expenseData.date);
        setTitle(expenseData.title);
        setBool(false);
    }
    const cancelHandler = (val)=>{
        setBool(false);
    }
    return (
        <Card className='expense-item'>
            {bool && <Modal><UpdateForm onUpdateValue={onupdateDataHandler} onCancelHandler={cancelHandler} key={props.value._id} value={props.value._id}></UpdateForm></Modal>}
            <Card className='expense-date'>
                <div className='expense-date__month'>{new Date(date).toLocaleString('en-us',{month :'long'})}</div>
                <div className='.expense-date__day'>{new Date(date).getFullYear()}</div>
                <div className='expense-date__year'>{new Date(date).toLocaleString('en-us',{day :'2-digit'})}</div>
            </Card>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <button className='update-button' onClick={onUpdateFormHandler}>Update</button>
            </div>
        </Card>
    );
}
export default ExpenseItem;