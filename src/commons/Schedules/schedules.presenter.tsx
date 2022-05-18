import moment from 'moment'
import * as S from './schedules.styles'

export default function SchedulesUI(props){
console.log(props.value)
    return(
        <S.Container>
            <S.DateBox>
                <S.DateInfo>
                    <S.Date>{moment(props.value).format("YYYY년 MM월 DD일")}</S.Date>
                    <S.DirectionBox>
                        <S.LDirection onClick={props.onClickBefore}>◀</S.LDirection>
                        <S.RDirection onClick={props.onClickAfter}>▶</S.RDirection>
                    </S.DirectionBox>
                </S.DateInfo>
                <S.AddBtn>+ 일정추가하기</S.AddBtn>
            </S.DateBox>
            <S.Wrapper>
            
            </S.Wrapper>
        </S.Container>
    )
}