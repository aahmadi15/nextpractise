"use client"

import React, {useEffect, useState} from "react";
//import DatePicker from "react-datepicker";
import {useRouter} from "next/navigation"

//const AVAILABILITY_SLOTS = ["9:00AM", "10:30AM", "01:00PM", ];

export default function Submitted (){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [confirmed, setConfirmed] = useState("");

    const router = useRouter;

    const handleSubmit = (e) => {
        e.preventDefault();
      
        
      setConfirmed({name, date, time});

                  
    }
    return (
<form onSubmit={handleSubmit}>
        <div className="container">
            
            
            <div >
            <input type="text"
            placeholder="Name"
            id = "fname"
            value = {name}
            onChange={(e) => setName(e.target.value)} />
            
            <label htmlFor="time">
            Time
          </label>

            <input type = "time"
              id = "time"/>
           

            </div>

     
          <input className = "dateVal"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            label = "Date"
          />
             
        </div>

        </form>
    )
}
