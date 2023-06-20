import React from 'react'
import styled from 'styled-components'
import Button from '../../components/reUse2/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
    <Main>
    <Logo>Dribble</Logo>
          <Navs>
            <Nav to="/talents">Find talent</Nav>
            <Nav to="/">For beginner</Nav>
            <Nav to="/">Inspiration</Nav>
            <Nav to="/">Learn design</Nav>
            <Nav to="/"> <span>Go pro</span></Nav>
          </Navs>
    </Main>
         <Divs>
        <Log>Log in</Log>
        <Button title="Sign up" width="80px"/>
        </Divs>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper2>
          <Navs2>
            <Nav2>Post a job opening</Nav2>
            <Nav2>Post a freelance project</Nav2>
            <Nav2>Search for designers</Nav2>
          </Navs2>
        </Wrapper2>
      </Container2>
    </>
  )
}

export default Header

const Log =styled.div`
font-size: 15px;
cursor: pointer;
color: #0D0C22;
margin-right: 20px;
`

const Divs =styled.div` 
display: flex;
justify-content: center;
align-items: center;
`

const Nav2 =styled.div`
margin-right: 20px;

:hover{
  cursor: pointer;
}
`

const Navs2 =styled.div`
font-weight: 500;
font-size: 15px;
display: flex;
`

const Wrapper2 =styled.div`
width: 90%;
display: flex;
`

const Container2 =styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F6F4EE;
position: sticky;
top: 0px;
left: 0px;
z-index:2;


`

const Main =styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Nav= styled(NavLink)`
margin-right: 20px;
text-decoration: none;

:hover{
  cursor: pointer;
  color: grey;
}

span{
  color: #EC54A7;
}
`

const Navs= styled.div`
font-weight: 500;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 50px;
`

const Logo= styled.div`
font-weight: 700;
font-size: 30px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

const Wrapper= styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container= styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
`