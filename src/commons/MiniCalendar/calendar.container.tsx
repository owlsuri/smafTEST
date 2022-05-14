import React, { useState } from 'react';
import * as S from './calendar.styles'
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import moment, { months } from 'moment';

export default function MiniCalendar(){

    const [value, onChange] = useState(new Date());
    
    return(
    <>
      <S.MiniCalendar  onChange={onChange} value={value} 
      formatDay ={(locale, date) => dayjs(date).format('DD')}
      />
    </>
    )
}