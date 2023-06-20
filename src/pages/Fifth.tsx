import React from 'react'
import styled from 'styled-components'
import img from "../assets/blog-post6-1.jpg"

const Fifth = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Left>
            <Divs>
            <Icon></Icon>
             <Title1>World class talent</Title1>
             <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 veritatis repellat blanditiis est  molestiae!</Text>
            </Divs>
            <Divs>
            <Icon></Icon>
             <Title2>$0 placement fees</Title2>
             <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 veritatis repellat blanditiis est  molestiae!</Text>
            </Divs>
            <Divs>
            <Icon></Icon>
             <Title3>Global reach</Title3>
             <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 veritatis repellat blanditiis est  molestiae!</Text>
            </Divs>
            </Left>
                <Right src={img}/>

        </Wrapper>
      </Container>
    </div>
  )
}

export default Fifth

const Divs= styled.div`
height: 100%;
`

const Right= styled.img`
width: 50%;
border-radius: 30px;
`

const Title3= styled.div`
margin-top: 20px;
height: 30px;
width: 120px;
font-size: 20px;
font-weight: 400;
background-color: #E6FBFE;
`
const Title2= styled.div`
margin-top: 20px;
height: 30px;
width: 170px;
font-size: 20px;
font-weight: 400;
background-color: #E6FBFE;
`
const Title1= styled.div`
margin-top: 20px;
height: 30px;
width: 170px;
font-size: 20px;
font-weight: 400;
background-color: #E6FBFE;
`

const Text = styled.div`
margin-top:20px;
font-size: 20px;
font-weight: 400;
color: grey;
`

const Icon = styled.div``

const Left = styled.div`
width: 50%;
height: 80%;
display: flex;
flex-direction: column;
`

const Wrapper = styled.div`
width: 90%;
height: 600px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
`

const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
margin-top: -30px;
`