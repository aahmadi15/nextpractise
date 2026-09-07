"use client"

import React, {useState} from "react";
//import DatePicker from "react-datepicker";

//const AVAILABILITY_SLOTS = ["9:00AM", "10:30AM", "01:00PM", ];

export default function TimeSlotPicker (){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setName("");
        setDate("");
        setTime("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="header">
                <div className="text">
                    Name
                </div>
            </div>
            <div >
            <input type="text"
            placeholder="Name"
            id = "fname"
            value = {name}
            onChange={(e) => setName(e.target.value)} />
            
 <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Time
          </label>

            <input type = "time"
              id = "time"/>
           

            </div>

     
             
        </div>

        </form>
    )
}

