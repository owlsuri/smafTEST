// 글로벌 스테이트
import { atom } from 'recoil'

// 달력 날짜 값
export const dateValue = atom({
    key: "dateValue", 
    default:new Date(), 
})