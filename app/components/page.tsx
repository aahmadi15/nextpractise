'use client'

import Image from "next/image";
import Link from "next/link"
import {navLinks} from "../../../utils/types";
import {useEffect, useState } from "react";
import Navbar from './Navbar.jsx';
import BookForm from '../src/BookingCalendar.jsx'
import Slot from '../src/TimeSlotPicker.jsx'


export type navLinks = {
  href: string,
  label: string
}

export default function App() {
  const [content, setContent] = useState("");

  useEffect(()=>{
    setContent('');
    
  })

  return (
    <>
    <Navbar/>
    <Slot/>
   
  
  
  </>)

}