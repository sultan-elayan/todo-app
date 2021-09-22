import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();
// const API = 'https://cube-engineer.herokuapp.com';
const API = 'https://jam3ey.herokuapp.com';
export default function LoginProvider(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: '', capabilities: [] });
    const login = async (username, password) => {

        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`)
            validateMyToken(response.body.token);
        } catch (err) {

        }
    }


    useEffect(() => {
        const myTokenCookie = cookie.load('token');

        validateMyToken(myTokenCookie);
    }, []);

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
            user.capabilities = ['read', 'create', 'update', 'delete'];
            setLoginState(true, user);
            cookie.save('token', token);
        } else {
            setLoginState(false, {});
        }
    }

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    }

    const setLoginState = (isLoggedIn, user) => {
        setLoggedIn(isLoggedIn);
        setUser(user);
    }

    const logout = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const state = {
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        user: user,
        can: can
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}