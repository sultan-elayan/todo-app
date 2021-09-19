import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import '../../app.css';
import { Button } from "react-bootstrap"
export default function Settings(props) {

    return (
        <>
            {props.activeList.map((item) => (
                <div className='cardsContainer'>
                    <Card interactive={true} elevation={Elevation.TWO} key={item.id} className='card' style={{ width: '45rem' , height:'223px' }}  >
                        <small> {item.assignee}</small>
                        <p>
                            <hr />
                            <p>{item.text}</p>
                        </p>
                        <p>
                            <small>Difficulty: {item.difficulty}</small>
                        </p>
                        <Button variant={props.color} type='submit' onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()} </Button>
                    </Card>
                    <br />


                </div>
            ))}
        </>
    )
}