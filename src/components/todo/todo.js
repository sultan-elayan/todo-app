import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Pagination from '../pagination/pagination';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap"
import { v4 as uuid } from 'uuid';
import '../../app.css';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  
  const [ color, setColor ] = useState("danger");
  
  function addItem(item) {

    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
        setColor(color == "danger" ? "success": "danger")
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list]);

  return (
    <>

      <div className='form-container'>
        <header className="header">
          <h1>To Do List Manager {incomplete.length}</h1>
        </header>

        <h3>Add To Do Item</h3>
        <form onSubmit={handleSubmit} className='toDoForm'>
          <FormGroup helperText='' label='To Do Item' labelFor='text-input' labelInfo=''>
            <InputGroup id='text-input' placeholder='Item Details' onChange={handleChange} name='text' required/>
          </FormGroup>
          <FormGroup helperText='' label='Assigned To' labelFor='text-input' labelInfo=''>
            <InputGroup id='text-input' placeholder='Assignee Name' onChange={handleChange} name='assignee' required />
          </FormGroup>
          <FormGroup helperText='' label='Difficulty' labelFor='text-input' labelInfo='' >
            <input onChange={handleChange} defaultValue={3} type='range' min={1} max={5} name='difficulty' />
          </FormGroup>
          <label>
            <Button variant="primary" type='submit'>Add Item</Button>




          </label>
        </form>
      </div >



      <Pagination className='pagList-container' list={list} incomplete={incomplete} color={color} toggleComplete={toggleComplete}></Pagination>
    </>
  );
};

export default ToDo;