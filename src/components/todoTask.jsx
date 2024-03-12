import React, { useState } from "react";
// import './App.css';
import "../App.css";
import ReactDOM from 'react-dom';
import editPng from "./Edit.png"

function Modal({ onClose,closeTheModalWithYes }) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <h2>Delete This Task?</h2>
          <div className="modal-buttons">
            <button className="button-yes-no" onClick={() => closeTheModalWithYes(true)}>Yes</button>
            <button className="button-yes-no"  onClick={() => onClose(false)}>No</button>
          </div>
        </div>
      </div>
    );
  }
 
function TodoTask({ todo,setEditOn,setTitle,setInputValue,setEditTodoId,deleteTodo }) {
  const [showDeleteEdit, setShowDeleteEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = (result) => {
    setShowModal(false);
    // Handle result here, true for Yes and false for No
    console.log('User clicked:', result ? 'Yes' : 'No');
  };

  const closeTheModalWithYes = (result) =>{
    deleteTodo(todo.id);
    setShowModal(false);
  }
  
  return (
    <div className="todo-div">
      <div>
        <p className="tod-p-tag">{todo.title}</p>
        <p className="tod-p-tag">{todo.value}</p>
      </div>
      <div>
        {showDeleteEdit ? (
          <div className="">
            <button className="edit-todo" onClick={()=>{
                setTitle(todo.title);
                setInputValue(todo.value);
                setEditTodoId(todo.id);
                setEditOn(true);
            }}>Edit</button>
            <button className="remove-todo" onClick={handleButtonClick}>X</button>
            {showModal && <Modal onClose={handleCloseModal} closeTheModalWithYes={closeTheModalWithYes} />}
          </div>
        ) : (
          <button className="editIconToOpen" onClick={()=>{
            setShowDeleteEdit(true);
          }}>!</button>
        )}
      </div>
    </div>
  );
}

export default TodoTask;
