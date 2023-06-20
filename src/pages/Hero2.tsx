import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    const myVideo =require("../assets/vid.mp4")

  return (

    <div>
      <Container>

        <Video src={myVideo} autoPlay={true} loop playsInline />
        <Card>
        <Div>
            <Links>Education </Links>
            <Links>Fine Arts </Links>
            <Links>History  </Links>
            <Links>Music  </Links>
            <Links> Philosophy  </Links>
            <Links>  Religion  </Links>
        </Div>

        <Title>Get Your New Book With Best Price Find Your Book Now</Title>

        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.</Text>
          <Box>
              <Input placeholder="Search"/>
          </Box>
          <Div2>
            <T1>Popular Searches :</T1>
            <Links2 to="">Education </Links2>
            <Links2 to="">Fine Arts </Links2>
            <Links2 to="">History  </Links2>
            <Links2 to="">Music  </Links2>
            <Links2 to=""> Philosophy  </Links2>
            <Links2 to="">  Religion  </Links2>
          </Div2>
        </Card>
      </Container>
    </div>
  )
}

export default Hero

const Links2 = styled(NavLink)`
margin-left: 15px ;
color: white;
width: 120px;
height: 30px;
border-radius: 50px;
justify-content: center;
align-items: center;
display: flex;
background-color: transparent;
border: 1px solid silver;
text-decoration: none;

:hover{
    cursor: pointer;
    background-color: white;
    color: black;
}
`
const T1 = styled.div` 
font-weight: 500;
`
const Div2 = styled.div`
display: flex;
color: white;
font-size: 17px; 
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const Links = styled.div`
margin-left: 15px ;
color: white;
width: 180px;
height: 60px;
border-radius: 50px;
justify-content: center;
align-items: center;
display: flex;
background-color: rgba(0,0,0, 0.2);
border: 1px solid silver;

:hover{
    cursor: pointer;
    background-color: white;
    color: black;
}
`

const Div = styled.div`
display: flex;
color: white;
font-size: 17px;
margin-top: 40px;
margin-bottom: 70px;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
overflow: hidden;
outline: none;
border: none;
margin-left: 10px ;
width: 90%;
height: 90%;
border-radius: 40px;

::placeholder{
  font-size: 15px;
  padding-left: 15px;
}
`
const Box = styled.div`
background-color: white;
border-radius: 5px;
width: 55%;
height: 75px;
display: flex;
align-items: center;
border-radius: 40px;
margin: 10px 0;
`
const Text = styled.div`
font-size: 20px;
color: #d7d6d6;
width: 52%;
text-align: center;
margin: 40px 0;
`
const Title = styled.div`
font-size: 45px;
width: 58%;
font-weight: 700;
color: white;
text-align: center;
`
const Card = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
width: 100%;
background-color: rgba(116, 218, 14, 0.2);
z-index: 10;
`
const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 700px;
  position: relative;
`