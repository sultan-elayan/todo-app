import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';
import '../../app.css';

export default function Settings() {

    return (
        <>
        <Navbar className='Navbar'>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>HOME</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
      </>
    )
}