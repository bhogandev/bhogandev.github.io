import React from 'react'
import {Container} from 'react-bootstrap'
import '../dist/css/main.css'

export default function Wrapper(props) {
  return (
    <Container className='app-wrapper' fluid>
        {props.children}
    </Container>
  )
}
