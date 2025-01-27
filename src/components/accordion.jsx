import { useState } from "react";
import data from "../constants/data.js";

//? Single Selection
//? Multiple Selection


export default function Accordion() {

    const [selection, setSelection] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelection(getCurrentId)
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {/*Checking if data is not empty and returns the right structure if not, otherwise returns div with error message*/}
                {/*Wrote a key generation for unique IDs for all elements and child elements to avoid the unique key error*/}
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className='item' key={`${dataItem.id}.0`}>
                        <div className="title" key={`${dataItem.id}.1`} onClick={() => handleSingleSelection(dataItem.id)}>
                            <h3 key={`${dataItem.id}.2`}>{dataItem.question}</h3>
                            <span key={`${dataItem.id}.3`}>+</span>
                            <div>
                                {
                                    selection === dataItem.id ?
                                    <div className="content">{dataItem.answer}</div>
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