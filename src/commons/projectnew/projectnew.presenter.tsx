import * as S from './projectnew.styles'

export default function ProjectNewUI(){

    return(
        <S.Wrapper>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>프로젝트명</S.Label><S.Must>*</S.Must>
                 </S.LabelBox>
                 <S.Input type="text" placeholder="제목을 입력해주세요." />
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>어떤 프로젝트를 진행하시나요?</S.Label>
                 </S.LabelBox>
                 <S.Input type="text" placeholder="간단한 설명을 입력해주세요." />
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>팀 혹은 프로젝트를 대표할 사진이 있나요?</S.Label>
                 </S.LabelBox>
                 <S.ImgBox><S.Plus>+</S.Plus></S.ImgBox>
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>프로젝트 시작일과 마감일을 언제인가요?</S.Label>
                 </S.LabelBox>
                 <S.Input type="text" placeholder="YYYY-MM-DD 여긴라이브러리" />
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>프로젝트 장소는 어디인가요?</S.Label>
                 </S.LabelBox>
                 <S.Input type="text" placeholder="도로명주소를 검색해주세요." />
                 <S.Map></S.Map>
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
        </S.Wrapper>
    )
}