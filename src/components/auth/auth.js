import React,{useContext} from 'react';
import {When} from 'react-if';
import { LoginContext } from '../../context/Login';


export default function Auth(props) {
    const context = useContext(LoginContext);
    const isLoggedIn = context.loggedIn;
    const canDo = context.can(props.capability);
    return (
        <When condition={isLoggedIn && canDo}>
        {props.children}
    </When>
    )
}