import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
<Div1>
  <Title>dribble</Title>
  <Text1>
    Dribble is the world leading community
for creative to grow, share and get hired.
  </Text1>
  <Social></Social>
</Div1>
<Div2>
<Foot>For designers</Foot>
<Foot2>Go pro</Foot2>
<Foot2>Explore design work</Foot2>
<Foot2>Design blog</Foot2>
<Foot2>Overtime podcast</Foot2>
<Foot2>Playoffs</Foot2>
<Foot2>Coduct of conduct</Foot2>
</Div2>
<Div3>
<Foot>Hire designers</Foot>
<Foot2>Post a job opening</Foot2>
<Foot2>Post a freelance project</Foot2>
<Foot2>Search for designers</Foot2>
<Foot2>Brands</Foot2>
<Foot2>Advertise with us</Foot2>
</Div3>
<Div4>
<Foot>Company</Foot>
<Foot2>About</Foot2>
<Foot2>Career</Foot2>
<Foot2>Support</Foot2>
<Foot2>Media kits</Foot2>
<Foot2>Testimonals</Foot2>
<Foot2>API</Foot2>
<Foot2>Terms of service</Foot2>
<Foot2>Private policy</Foot2>
<Foot2>Cookies policy</Foot2>
</Div4>
<Div5>
<Foot>Directories</Foot>
<Foot2>About</Foot2>
<Foot2>Career</Foot2>
<Foot2>Support</Foot2>
<Foot2>Media kits</Foot2>
<Foot2>Testimonals</Foot2>
<Foot2>API</Foot2>
<Foot2>Terms of service</Foot2>
<Foot2>Private policy</Foot2>
<Foot2>Cookies policy</Foot2>
<Foot2>Cookies policy</Foot2>
</Div5>
<Div6>
<Foot>Design Resources</Foot>
<Foot2>About</Foot2>
<Foot2>Career</Foot2>
<Foot2>Support</Foot2>
<Foot2>Media kits</Foot2>
<Foot2>Testimonals</Foot2>
<Foot2>API</Foot2>
<Foot2>Terms of service</Foot2>
</Div6>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Footer

const Foot2 =styled.div`
font-size: 15px;
font-weight: 400;
cursor: pointer;
margin-bottom: 15px;
color: grey;
`

const Foot =styled.div`
font-size: 18px;
font-weight: 400;
margin-bottom: 20px;
`

const Social =styled.div``

const Text1 =styled.div`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
`

const Title =styled.div`
font-size: 20px;
font-weight: 500;
color: #EC54A7;
`

const Div6 = styled.div`
width: 200px;
height: 100%;
`

const Div5 = styled.div`
width: 200px;
height: 100%;
`

const Div4 = styled.div`
width: 200px;
height: 100%;
`

const Div3 = styled.div`
width: 200px;
height: 100%;
`

const Div2 = styled.div`
width: 200px;
height: 100%;
`

const Div1 = styled.div`
width: 300px;
height: 100%;
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0;
`