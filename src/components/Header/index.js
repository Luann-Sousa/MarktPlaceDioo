import React from 'react';
import logo from '../../assets/logo.png'

import {Container, Image, Text} from './styles';
export default function Header() {
  return (
    <Container>
      <Image source={logo}/>
    </Container>
  )
}

