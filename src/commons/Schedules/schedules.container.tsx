import { useRecoilState } from 'recoil'
import { dateValue } from '../store'
import SchedulesUI from './schedules.presenter'

export default function Schedules(){

    const [value, onChange] = useRecoilState(dateValue)

    
    
    const onClickBefore = () => {
        onChange(new Date(value.setDate(value.getDate() - 1)))
    }

    const onClickAfter = () => {
        onChange(new Date(value.setDate(value.getDate() + 1)))
    }


    return(
        <SchedulesUI 
        value={value}
        onClickBefore={onClickBefore}
        onClickAfter={onClickAfter}
        />
    )
}