"use client"

import React, {useState} from "react";
//import DatePicker from "react-datepicker";

//const AVAILABILITY_SLOTS = ["9:00AM", "10:30AM", "01:00PM", ];

export default function TimeSlotPicker (){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [confirmed, setConfirmed] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
      setDate("");
      setTime("");
      setName("");

      setConfirmed({name, date, time});
        console.log(date);
                console.log(name);

                        console.log(time);
    }

    return (
<form onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-5"
    >
      <h1 className="text-xl font-semibold text-gray-900">Book an appointment</h1>
 
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>
 
      <div className="flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
 
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>
 
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg py-2 transition-colors"
      >
        Book appointment
      </button>
      {confirmed && <div style = {{color: "green"}}>{confirmed.date}{" "}
        {confirmed.name} {" "} {confirmed.time}
      </div>
}
    </form>

        /*<form onSubmit={handleSubmit}>
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

        </form>*/
    )
}

