import styled from "@emotion/styled";

export const Wrapper=styled.div`
width: 33rem;
background-color: white;
border-radius: 1.6rem;
padding: 2rem;
`
export const TitleBox=styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 2rem;
`
export const Title=styled.div`
font-size: 2.4rem;
font-weight: 500;
`
export const Add=styled.div`
font-size: 2.4rem;
font-weight: 500;
`
export const ListBox=styled.div`
padding-bottom: 3rem;
`
export const Check1=styled.div`
width: 2.4rem;
height: 2.4rem;
background-color: #FF8B8B;
border-radius: 0.4rem;
`
export const Check2=styled.div`
width: 2.4rem;
height: 2.4rem;
background-color: #7CD2E5;
border-radius: 0.4rem;
`
export const Check3=styled.div`
width: 2.4rem;
height: 2.4rem;
background-color: #FFD954;
border-radius: 0.4rem;
`
export const ProjectBox=styled.div`
display: flex;
`
export const ProjectName=styled.div`
padding-left: 0.5rem;
font-size: 1.6rem;
`
export const RateBox = styled.div`

`
export const Rate = styled.div`
text-align: end;
padding-bottom: 0.5rem;
color: #767676;
font-size: 1.2rem;
`
export const RateBackground = styled.div`
position: absolute;
width: 29rem;
height: 1.2rem;
background-color: #EDEDED;
border-radius: 0.6rem;
`
export const RateBar = styled.div`
position: relative;
height: 1.2rem;
width: ${(props) => (props.rate)}%;
background-color: #FF8B8B;
border-radius: 0.6rem;
`