import React, { useState } from 'react';
import * as S from './calendar.styles'
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Schedules from '../Schedules/schedules.container';
import { useRecoilState } from 'recoil';
import { dateValue } from '../store';



export default function MiniCalendar(){

    const [value, onChange] = useRecoilState(dateValue)
    const [mark, setMark] = useState(["2022-05-25", "2022-05-28"]);

    return(
    <>
      <S.MiniCalendar  
      onChange={onChange} 
      value={value} 
      formatDay={(locale, date) => moment(date).format("DD")}
      tileContent={({ date, view }) => {
        if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          return (
            <div className="dotBox">
              <div className="dot"></div>
            </div>
        );
        }
      }}
      />
    </>
    )
}