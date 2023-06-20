import React from 'react'
import styled from 'styled-components'
import Button from '../components/reUse2/Button'

const Sixth = () => {
  return (
    <div>
         <Container>
        <Wrapper>
          
          <Big>Find your next creative <br /> professional today</Big>
     <Emm>
     <Small>
          Tap into our ready to hire community of 
          1 million top designers of the worldwide
          with our seamless solution.
          
          </Small>
     </Emm>
     <Button title="Try for free" width="100px"/>
          <View>No risk. Cancel anytime</View>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Sixth


const Emm =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73%;
`

const View =styled.div`
font-size: 15px;
color: grey;
margin-top: 30px;
`

const Small =styled.div`
text-align: center;
font-size: 20px;
font-weight: 400;
margin-top: 30px;
margin-bottom: 30px;
`
const Big =styled.div`
font-size: 60px;
font-weight: 800;
margin-top: 10px;
text-align: center;
`



const Wrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container =styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F6CBEA;
`