import React from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../context/Login';

import { Button, Form } from 'react-bootstrap';

export default class Login extends React.Component {

    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        // use login context to perform login operation
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <>
                <When condition={!this.context.loggedIn}>
                    <h2> Note : use the ( email: sultan@gmail.com ) ( password: 123 )  to login </h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control placeholder="username" type="text" name="username" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="password" type="password" name="password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </When>
                <When condition={this.context.loggedIn}>
                    <div>{this.context.user.email}</div>
                    <button onClick={this.context.logout}>Logout</button>
                </When>
            </>

        )
    }
}

