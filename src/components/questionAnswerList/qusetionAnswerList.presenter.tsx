import * as S from './qusetionAnswerList.styles'

export default function QuestionAnswerUI(){

    return(
        <S.Wrapper>
            <S.Title>QnA</S.Title>
            <S.Container>
                <S.TableHead>
                    <S.Th>번호</S.Th>
                    <S.Th>문의유형</S.Th>
                    <S.Th>제목</S.Th>
                    <S.Th>작성자</S.Th>
                    <S.Th>작성일</S.Th>
                </S.TableHead>
                <S.TableHead>
                    <S.Td>1</S.Td>
                    <S.Td>서비스문의</S.Td>
                    <S.Td>서비스 문의 드립니다.</S.Td>
                    <S.Td>김철수</S.Td>
                    <S.Td>2022-05-22</S.Td>
                </S.TableHead>
                <S.TableHead>
                    <S.Td>sss</S.Td>
                    <S.Td>ss</S.Td>
                    <S.Td>fffffff</S.Td>
                    <S.Td>ss</S.Td>
                    <S.Td>ss</S.Td>
                </S.TableHead>

            </S.Container>
        </S.Wrapper>
    )
}