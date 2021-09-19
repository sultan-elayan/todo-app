import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import '../../app.css';
import { Button } from "react-bootstrap"
export default function Settings(props) {

const colorState =(color)=>{
    
    return  color ?'success':'danger';
    
}
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
                        <Button variant={colorState(item.complete)} type='submit' onClick={() => props.toggleComplete(item.id)}>{item.complete? "completed " : "pending"} </Button>
                    </Card>
                    <br />


                </div>
            ))}
        </>
    )
}