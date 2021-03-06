import styled from "@emotion/styled";
import Calendar from 'react-calendar';

export const MiniCalendar = styled(Calendar)`
width: 100%;
border: none;
border-radius: 16px;

.react-calendar { 
 width: 310px;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 30px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #333333;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
 color: #333333;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
.react-calendar__month-view__days__day--weekend {
 color: #d10000;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #333333;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #333333;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #DBDBDB;
 border-radius: 6px;
 font-weight: bold;
 color: #333333;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #333333;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: purple;
 color: white;
}
.dotBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot {
  height: 6px;
  width: 6px;
  background-color: #FF8B8B;;
  border-radius: 50%;
  margin-top: 2px;
}
`
