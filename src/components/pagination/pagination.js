import { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../../context/settings';
import List from '../list/list';
import { Button } from '@blueprintjs/core';

export default function Pagination(props) {
  let btnArr = [];
  const settings = useContext(SettingsContext);
  const [chosenList, setChosenList] = useState(settings.showCompleted ? props.list : props.incomplete);
  const [activeList, setActiveList] = useState(chosenList.slice(0, settings.itemsPerPage));
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(chosenList.length / settings.itemsPerPage));
  const [activePage, setActivePage] = useState(1);
  const [buttonsArray, setButtonsArray] = useState(btnArr);


  const [color, setColor] = useState(settings.color == 'danger' ? 'success' : 'danger');
  const [toDoStatus, setToDoStatus] = useState(settings.toDoStatus == 'pending' ? 'completed' : 'pending');

  useEffect(() => {
    setChosenList(settings.showCompleted ? props.list : props.incomplete);
    setActiveList(chosenList);
    setNumberOfPages(Math.ceil(chosenList.length / settings.itemsPerPage));
  }, [props.list, props.incomplete, chosenList, settings.itemsPerPage]);

  useEffect(() => {
    if (numberOfPages) {

      btnArr.push('Prev');

      for (let i = 1; i <= numberOfPages; i++) {
        btnArr.push(i);
      }

      btnArr.push('Next');

      setButtonsArray(btnArr);
    }
  }, [numberOfPages]);

  useEffect(() => {
    let start = (activePage - 1) * settings.itemsPerPage;
    let end = start + settings.itemsPerPage;

    setActiveList(chosenList.slice(start, end));
  }, [activePage, settings.itemsPerPage, chosenList]);

  useEffect(() => {
    if (activeList.length == 0 && chosenList.length != 0) {
      setActivePage(activePage - 1);
    }
  }, [activeList]);


  function handlePages(pageNumber) {

    if (pageNumber == 'Prev' && buttonsArray.includes(activePage - 1)) {
      setActivePage(activePage - 1);
    } else if (pageNumber == 'Next' && buttonsArray.includes(activePage + 1)) {
      setActivePage(activePage + 1);
    } else if (typeof pageNumber == 'number') {
      setActivePage(pageNumber);
    }
  }
  console.log("color---233333333333333333333333333322-------",props.color)
  return (
    <>
      <br />
      <List activeList={activeList}  color={props.color} toDoStatus={props.toDoStatus} toggleComplete={props.toggleComplete} />

      <br />

      {buttonsArray &&
        buttonsArray.map((item) => (
          <>
            <Button onClick={() => handlePages(item)} className='pagination-buttons'>
              {item}
            </Button>
          </>
        ))}
    </>
  );
}