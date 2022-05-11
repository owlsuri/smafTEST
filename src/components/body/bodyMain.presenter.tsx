import ProjectList from '../../commons/projectList/projectList.container'
import TeamList from '../../commons/teamList/teamList.container'
import * as S from './bodyMain.styles'
import MiniCalendar from '../../commons/MiniCalendar/calendar.container'
import Schedules from '../../commons/Schedules/schedules.container'

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
                    <TeamList />   
                </S.Info>
            </div>
            <S.Calender>
                <Schedules />
            </S.Calender>
        </S.Wrapper>
    )
}