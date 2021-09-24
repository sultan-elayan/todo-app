import React from 'react'
import { FormGroup, Card, Elevation, Button } from "@blueprintjs/core";
import "../components/todo/todo.css";

function SettingForm() {
  const handleSubmit = e => {
    e.preventDefault();
    let display = e.target.disply.value
    let numberOfItem = e.target.numberOfItem.value

    let obj = {
      display: display,
      numberOfItem: numberOfItem
    }
    setItem(obj)
    e.target.reset()
    window.location.href = "/";
  }

  function setItem(obj) {
    localStorage.setItem('SettingForm', JSON.stringify(obj));
  }
  return (
    <div>
      <div className="toDo">
        <Card interactive={true} elevation={Elevation.TWO}>
          <form onSubmit={handleSubmit}>
            <h2>Setting</h2>
            <FormGroup label="Show completed tasks" labelFor="disply">
              <select name="disply" dir="auto" className="bp3-input .modifier">
                <option value={true}>true</option>
                <option value={false}>false</option>
              </select>

            </FormGroup>

            <FormGroup label="Number of task per page " labelFor="assignee">
              <input
                className="bp3-input .modifier"
                name="numberOfItem"
                type="text"
                placeholder="1-10"
                dir="auto"
              />
            </FormGroup>
            <br />
            <Button type="submit" >Save Changes</Button>

          </form>
        </Card>
      </div>
    </div>
  )
}

export default SettingForm
