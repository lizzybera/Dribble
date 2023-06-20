import React from 'react'
import styled from 'styled-components'

const LogoPage = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>We’ve helped some of the world’s best design-forward companies hire expert creatives</Text>
                <LogoHolder>
                    <Logo>Adobe </Logo>
                    <Logo> amazon</Logo>
                    <Logo>Google</Logo>
                    <Logo>Walmart</Logo>
                    <Logo>Expensify</Logo>
                    <Logo>facebook</Logo>
                    <Logo>Shopify</Logo>
                    <Logo>asana</Logo>
                    <Logo>mallChimp</Logo>
                    <Logo>coinbase</Logo>
                    <Logo>lyft</Logo>
                    <Logo>Disney</Logo>
                    <Logo>Microsoft</Logo>
                    <Logo>Fantasy</Logo>
                    <Logo>TeamFlow</Logo>
                </LogoHolder>
            </Main>
        </Container>
    </div>
  )
}

export default LogoPage

const Logo = styled.i`
width: 200px;
height: 50px;
/* background-color: yellow; */
margin-bottom: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
font-weight: 500;
`
const LogoHolder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 40px 0;
`
const Text = styled.div`
font-size: 18px;
font-weight: 500;
display: flex;
justify-content: center;
width: 100%;
margin-bottom: 50px;
`
const Main = styled.div`
display: flex;
flex-direction: column;
width: 90%;
`
const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 400px;
`