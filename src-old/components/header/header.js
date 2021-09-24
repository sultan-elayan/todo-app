import React from 'react';
import { Navbar, Alignment,Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import '../../app.css';

export default function Header() {

    return (
      <>
      <Navbar className='Navbar'>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To Do</Navbar.Heading>
          <Navbar.Divider />
          <Link to='/'>
            <Button className='bp3-minimal' icon='home' text='Home' />
          </Link>
          <Link to='/settings'>
            <Button className='bp3-minimal' icon='settings' text='Settings' />
          </Link>
        </Navbar.Group>
      </Navbar>
    </>
    )
}