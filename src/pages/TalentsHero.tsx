import React from 'react'
import styled from 'styled-components'

const TalentsHero = () => {
  return (
    <div>
        <Container>
            <Main>
                <LittleTitle>DRIBBBLE HIRING</LittleTitle>
                <MainTitle> Hire the world’s top designers</MainTitle>
                <Text>Whether you prefer to actively seek out candidates using Designer Search or let designers come to you through our Job Board, Dribbble Hiring makes it easier than ever to source top-notch design talent.</Text>
                <Button> Try fro free </Button>
                <Text2>No risk. Cancel anytime.</Text2>
            </Main>
        </Container>
    </div>
  )
}

export default TalentsHero

const Text2 = styled.div`
font-size: 15px;
color: #aaa8a8;
margin-top: 10px;
`

const Button = styled.div`
width: 120px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 25px;
color: white;
background-color: black;
font-size: 15px;
font-weight: 500;
border-radius: 5px;
`

const Text = styled.div`
font-size: 20px;
width: 1000px;
text-align:center ;
line-height: 1.5;
margin-bottom: 15px;
`
const MainTitle = styled.div`
font-size: 65px;
font-weight: 700;
margin-bottom: 15px;
`
const LittleTitle = styled.div`
font-size: 15px;
color: #f19ba9;
margin-bottom: 12px;
font-weight: 700;
`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 90%;
height: 100%;
/* background-color: yellow; */
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
`