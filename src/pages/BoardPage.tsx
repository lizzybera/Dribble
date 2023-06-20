import React from 'react'
import styled from 'styled-components'
import img from "../assets/slider5.jpg"

const BoardPage = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Join>Join Board</Join>
                    <Title>The #1 job board for top design talent</Title>
                    <Text>Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.</Text>
                    <Button> Visit the job Board </Button>
                </Left>
                <Right>
                    <Div src={img}></Div>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default BoardPage

const Div = styled.img`
border: 30px solid green;
border-radius: 20px;
width: 95%;
height: 80%;
`
const Right = styled.div`
width: 50%;
height: 100%;
`

const Button = styled.div`
width: 160px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
/* margin-left: 25px; */
color: white;
background-color: black;
font-size: 15px;
font-weight: 500;
border-radius: 5px;
`

const Text = styled.div`
font-size: 16px;
line-height: 1.5;
width: 500px;
margin-top: 25px;
font-weight: 500;
margin-bottom: 25px;
`

const Title = styled.div`
font-size: 45px;
font-weight: 500;
margin-top: 20px;
`

const Join = styled.div`
width: 100px;
height: 40px;
font-size: 15px;
font-weight: 500;
background-color: #d698a2;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
`
const Left = styled.div`
width: 50%;
height: 100%;
`

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 90%;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
    justify-content: center;
    padding: 60px 0;
`