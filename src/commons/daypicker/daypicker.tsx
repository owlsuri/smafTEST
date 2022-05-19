import React, { ChangeEventHandler, useState } from 'react';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import { ReactDayPick } from './daypicker.styles';

export default function DayPick(){

 const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpen = () => {
    setIsOpen(true)
  }

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (range: DateRange | undefined) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };

  const footer = (
        <form className="ma2">
          <span onClick={onClickOpen}>
            <input
              size={14}
              placeholder="시작일"
              value={fromValue}
              onChange={handleFromChange}
              className="input-reset pa2 ma bg-white black ba"
            />
          </span>
          {'  –  '}
          <input
            size={14}
            placeholder="마감일"
            value={toValue}
            onChange={handleToChange}
            className="input-reset pa2 bg-white black ba"
          />
        </form>
  )
  
console.log(isOpen)
  return (
    <div>
<div >

      <ReactDayPick
        mode="range"
        selected={selectedRange}
        onSelect={handleRangeSelect}
        
        
      />
</div>
      <div onClick={onClickOpen} >
{footer}
      </div>
    </div>
  );
}