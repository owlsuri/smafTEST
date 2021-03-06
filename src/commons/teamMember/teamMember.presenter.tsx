import Dropdown01 from '../dropdown/01/dropdown01'
import * as S from './teamMember.styles'

export default function TeamListUI(){

    return(
        <S.Wrapper>
            <S.TitleBox>
                <S.Title>Team</S.Title>
                <Dropdown01 />
            </S.TitleBox>
            <S.TeamPeople>
                <S.Team>
                    <S.TeamPerson src="/images/dog1.jpg" />
                    <S.Name>범수</S.Name>
                </S.Team>
                <S.Team>
                    <S.TeamPerson src="/images/dog2.jpg" />
                    <S.Name>서현</S.Name>
                </S.Team>
                                <S.Team>
                    <S.TeamPerson src="/images/dog3.jpg" />
                    <S.Name>윤정</S.Name>
                </S.Team>

                <S.TeamPersonAdd>+</S.TeamPersonAdd>
            </S.TeamPeople>
        </S.Wrapper>
    )
}