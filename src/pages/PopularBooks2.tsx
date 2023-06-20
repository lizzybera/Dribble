import React from 'react'
import styled from 'styled-components'

const PopularBooks2 = () => {
  return (
    <div>
        <Container>
            <Main>  
                <Top>
                    <Button>Popular</Button>
                    <Button>Filter</Button>
                </Top>
                <Images>
                    <Card>
                        <Holder>
                        <Img />
                        <Hover>
                            <NameHold>
                                <Name>NJlord</Name>
                                <Icons></Icons>
                            </NameHold>
                        </Hover>
                        </Holder>
                    </Card>
                </Images>
            </Main>
        </Container>
    </div>
  )
}

export default PopularBooks2

const Icons = styled.div`
display: flex;
`
const Name = styled.div`
color: white;
font-size: 20px;
font-weight: 600;
`

const NameHold = styled.div`
width: 95%;
display: flex;
justify-content: center;
`
const Hover = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(
    0deg,
);
`

const Img = styled.img`
background-color: red;
`
const Holder = styled.div`

`

const Card = styled.div`
width: 30%;
display: flex;
flex-direction: column;
overflow: hidden;
`
const Images = styled.div`
display: flex;
flex-wrap: wrap;
`
const Button = styled.div`
width: 100px;
`

const Top = styled.div`
display: flex;
justify-content: space-between;
`
const Main = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;


    
    display: flex;
    justify-content: center;
`