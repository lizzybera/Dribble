import React from 'react'
import styled from 'styled-components'

interface iButton{
  width?:string,
  title?:string
}

const Button:React.FC<iButton> = ({title, width}) => {
  return (
    <div>
    <Container width ={`${width}`}>
      {title}
    </Container>
    </div>
  )
}

export default Button

const Container = styled.div<{width:string}>`
width: ${({width})=>width};
height: 50px;
background-color: #0D0C22;
cursor: pointer;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 15px;

:hover{
  background-color: #1c1b38;
}
`