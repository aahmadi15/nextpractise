"use client"

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


let oneDay = 60*60*24*1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

export default class BookForm extends Component{
    
    constructor (props){
        super(props);
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        this.state = {
            year,
            month,
            selectedDay: todayTimestamp,
            monthDetails: this.getMonthDetails(year, month),
            showDatePicker: false
        };
        this.containerRef = React.createRef();
    }

    getMonthDetails = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return {
            firstDayOfWeek: firstDay.getDay(),
            daysInMonth
        };
    };

    componentDidMount() {
        window.addEventListener('click', this.addBackDrop);
    }

    addBackDrop = e => {
        if (this.state.showDatePicker && this.containerRef.current && !this.containerRef.current.contains(e.target)){
            this.showDatePicker(false);
        }
    }

    showDatePicker = (showDatePicker = true)=> {
        this.setState({showDatePicker})
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.addBackDrop);
    }

        render() {
        return (
            <div className='MyDatePicker'>
                <div className='mdp-input' onClick={()=> this.showDatePicker(true)}>
                    <input type='date'/>
                </div>
                {this.state.showDatePicker ? (
                    <div className='mdp-container'> 
                    </div>
                ) : ""}
            </div>
        )
    }
    }
