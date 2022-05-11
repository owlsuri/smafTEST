import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function MiniCalendar(){

    const [value, onChange] = useState(new Date());
    
    
    return(
    <div style={{width:"310px", height:"306px", borderRadius:"16px"}}>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    )
}