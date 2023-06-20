import React from 'react'
import styled from 'styled-components'

const Text = () => {
  return (
    <div>
        <Title>
             <Text2> Why brands choose Dribbble to hire design talent</Text2>
              </Title>
    </div>
  )
}

export default Text

const Text2 = styled.div`
width: 65%;
display: flex;
justify-content: center;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`