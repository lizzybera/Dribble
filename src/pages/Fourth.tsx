import React from 'react'
import styled from 'styled-components'
import one from "../assets/blog-post-1.jpg"
import man from "../assets/blog-post-single-1.jpg"

const Fourth = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Main>
                <Text>
                     "Dribble is my goal to hiring designers.
                   It always provide a wealth of quality
                   candidates that instantly builds my pipelines. "</Text>
                <Divs>
                    <Img src={man}/>
                    <Name> Lee Munroe- <span>Head of Design. OneSignal</span></Name>
                </Divs>
            </Main>
            <Card>
              hello
            </Card>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Fourth

// const Right =styled.img`
// font-size: 10px;
// width: 130px;
// height: 130px;
// object-fit: cover;
// `

const Card =styled.div`
background-color: #9EAAE8;
width: 250px;
height: 300px;
margin-right: 10px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 50px;
font-size: 50px;
font-weight: 500;
color: rgba(5,5,5,0.3);
`

const Name =styled.div`
margin-left: 10px;
font-size: 20px;
font-weight: 400;

span{
  color: grey;
}
`

const Img =styled.img`
width: 60px;
height: 60px;
object-fit: cover;
border-radius: 50%;

`

const Text =styled.div`
font-size: 29px;
font-weight: 500;
margin-top: 30px;
`

const Divs =styled.div`
display: flex;
align-items: center;
margin-top: 30px;

`

const Main =styled.div`
width: 60%;
height: 280px;
display: flex;
flex-direction: column;
padding: 10px 20px;
border: 2px solid silver;
border-radius: 10px;
`

const Wrapper =styled.div`
width: 65%;
display: flex;
justify-content: space-between;
align-items: center;

`

const Container =styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`