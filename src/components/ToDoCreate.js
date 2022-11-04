import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import {
  MdAdd,
  MdOutlinePlaylistAdd,
  MdClose
} from 'react-icons/md';

const slideDown = keyframes`
  from {
   opacity: 0;
   bottom: 110px
  }
  to {
    opacity: 1;
    bottom: 30px;
  }
 `;

const ToDoCreateDiv = styled.div`
  .input_form { 
    display: flex;
    position: absolute;
    bottom: 30px;
    padding: 0px 20px;
    animation: ${slideDown} 0.3s ease-out;
  }
  .input_box {
    width: 380px;
    height: 60px;
  }
  [type = "text"] {
    border: none;
    appearance: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background: #ffffff;
    text-indent: 30px;
    font-size: 16px;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  }
  .submit {
    margin-left: 5px;
    width: 80px;
    height: 60px;
    background: #99ccff;
    border: none;
    border-radius: 5px;
    line-height: 20px;
    font-size: 18px;
    color: #000000;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
    cursor: pointer;
  }
  .submit:hover {
    background: #abd5ff;
  }
  .submit svg {
    color: #ffffff;
    font-size: 30px;
    height: 52px;
  }
  .plus_btn {
    position: absolute;
    right: 30px;
    bottom: 100px;
    width: 75px;
    height: 75px;
    background: #99ccff;
    border: none;
    border-radius: 50%;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
  }
  .plus_btn:hover { transform: rotate(45deg);  transition: 0.25s all ease-in;}
  .plus_btn svg { height: 75px;}
  .close {background: #7cbeff;}
  .close svg {font-size: 40px;}
`;

export default function ToDoCreate ({todoList, setTodoList}) {
  const [text, setText] = useState('');
  const [onOpen, setOnOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(text !== ''){
    const addTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(addTodoList);

    setText('');
    }};

    const onClickHandler = () => {
      setOnOpen(!onOpen);
    }

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return(
    <ToDoCreateDiv>
      {onOpen ? <form className="input_form" onSubmit={onSubmitHandler}>
        <div className="input_box">
          <input
          type="text"
          name="item"
          placeholder="Add new todo"
          className="input_box"
          value={text}
          onChange={onChangeText}
          />
        </div>
        <button 
        type="submit" 
        className="submit"
        >
          <MdOutlinePlaylistAdd />    
        </button>
      </form> : ""}
      {!onOpen ? <button className="plus_btn" onClick={onClickHandler}><MdAdd /></button> : ""}
      {onOpen ? <button className="plus_btn close" onClick={onClickHandler}><MdClose /></button> : ""}
    </ToDoCreateDiv>
  )
}