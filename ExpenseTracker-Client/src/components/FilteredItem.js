import React from "react";
import './FilteredItem.css';


function FilteredItem(props){
    const dropdownHandler = (event)=>{
        props.onChangeFilter(event.target.value);
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtered By Year</label>
                <select value={props.selected} onChange={dropdownHandler}>
                    <option value='all'>All</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    )
}
export default FilteredItem;