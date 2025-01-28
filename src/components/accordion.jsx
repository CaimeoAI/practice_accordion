import { useState } from "react";
import data from "../constants/data.js";
import "../css/accordion.css";

//? Single Selection
//? Multiple Selection


export default function Accordion() {

    const [selection, setSelection] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelection, setMultiSelection] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelection(getCurrentId === selection ? null : getCurrentId)
    }

    function handleMultiSelection() {
        setEnableMultiSelection(enableMultiSelection === false ? true : false)
    }

    return (
        <div className="wrapper">
            <button onClick={() => handleMultiSelection(!enableMultiSelection)} className={enableMultiSelection === true ? 'button-active' : 'button-inactive'}>Multi-Selection</button>
            <div className="accordion">
                {/*Checking if data is not empty and returns the right structure if not, otherwise returns div with error message*/}
                {/*Wrote a key generation for unique IDs for all elements and child elements to avoid the unique key error*/}
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className='item' key={`${dataItem.id}.0`}>
                        <div className="title" key={`${dataItem.id}.1`} onClick={() => handleSingleSelection(dataItem.id)}>
                            <h3 key={`${dataItem.id}.2`}>{dataItem.question} <span key={`${dataItem.id}.3`}>+</span></h3>
                            
                            <div key={`${dataItem.id}.4`}>
                                {
                                    selection === dataItem.id ?
                                    <div className="content" key={`${dataItem.id}.5`}>{dataItem.answer}</div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>)
                    : <div key={`${dataItem.id}.0`}>Error 404 No Data fund</div>
                }
            </div>
        </div>
    )
}