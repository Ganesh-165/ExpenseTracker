import Card from "./Card.js";
import ExpenseItem from "./ExpenseItem.js";
import FilteredItem from "./FilteredItem.js";
import './Expenses.css';
import { useState } from "react";


function Expenses(props){
    const [filter,setFilter]= useState('all');
    const filterExpenses = props.items.filter(filteritem => {
        return new Date(filteritem.date).getFullYear().toString() === filter ;
    })
    const onChangeFilter = (year)=> {
        setFilter(year);
    }
    return(
            <Card className="expenses">
                <FilteredItem selected={filter} onChangeFilter={onChangeFilter}/>
                {(filter === 'all')?props.items.map(expense =>(<ExpenseItem key={expense._id} value={expense}/>)):filterExpenses.map(expense => (<ExpenseItem key={expense.id} value={expense}/>))}
            </Card>
    )
}
export default Expenses;