import { useState } from "react";
import data from "../constants/data.js";
import "../css/accordion.css";

export default function Accordion() {

    const [selection, setSelection] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelection, setMultiSelection] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelection(getCurrentId === selection ? null : getCurrentId)
    }

    function handleEnableMultiSelection() {
        setEnableMultiSelection(enableMultiSelection === false ? true : false)
    }

    function handleMultiSelection(getCurrentId) {

        if (enableMultiSelection === true) {
            let array = [...multiSelection]
            const findIndexId = array.indexOf(getCurrentId)

            if (findIndexId === -1) array.push(getCurrentId)
                else array.splice(findIndexId, 1)

            setMultiSelection(array)   
        } else {
            setMultiSelection([])
        }
        
    }

    console.log(multiSelection)

    return (
        <div className="wrapper">
            <button onClick={() => handleEnableMultiSelection(!enableMultiSelection)} className={enableMultiSelection === true ? 'button-active' : 'button-inactive'}>Multi-Selection</button>
            <div className="accordion">
                {/*Checking if data is not empty and returns the right structure if not, otherwise returns div with error message*/}
                {/*Wrote a key generation for unique IDs for all elements and child elements to avoid the unique key error*/}
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className='item' key={`${dataItem.id}.0`} onClick={() => handleMultiSelection(dataItem.id)}>
                        <div className="title" key={`${dataItem.id}.1`} onClick={() => handleSingleSelection(dataItem.id)}>
                            <h3 key={`${dataItem.id}.2`}>{dataItem.question} <span key={`${dataItem.id}.3`}>+</span></h3>
                            
                            <div key={`${dataItem.id}.4`}>
                                {
                                    enableMultiSelection ?
                                    multiSelection.indexOf(dataItem.id) !== -1 && (<div className="content" key={`${dataItem.id}.5`}>{dataItem.answer}</div>)
                                    :
                                    selection === dataItem.id && (<div className="content" key={`${dataItem.id}.5`}>{dataItem.answer}</div>)                                    
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