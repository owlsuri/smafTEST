import ProjectList from '../../commons/projectList/projectList.container'
import TeamList from '../../commons/teamMember/teamMember.container'
import * as S from './bodyMain.styles'
import MiniCalendar from '../../commons/MiniCalendar/calendar.container'
import Schedules from '../../commons/Schedules/schedules.container'
import Members from '../../commons/members/members.container'

export default function MainBodyUI(){

    return(
        <S.Wrapper>
            <div>
                <S.Info>
                    <MiniCalendar />    
                </S.Info>
                <S.Info>
                    <ProjectList />    
                </S.Info>
                <S.Info>
                    <Members />   
                </S.Info>
            </div>
            <S.Calender>
                <Schedules />
            </S.Calender>
        </S.Wrapper>
    )
}