import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdAdd, MdOutlinePlaylistAdd, MdClose } from 'react-icons/md';

const slideDown = keyframes`
  from {
   opacity: 0;
   bottom: 120px
  }
  to {
    opacity: 1;
    bottom: 50px;
  }
 `;

const ToDoCreateDiv = styled.div`
  .input_form { 
    display: flex;
    position: absolute;
    bottom: 50px;
    padding: 0px 20px 0px 25px;
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
    height: 60px;
    padding-left: 5px;
  }
  }
  .plus_btn {
    position: absolute;
    right: 25px;
    bottom: 120px;
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

export default function ToDoCreate({ todoList, setTodoList }) {
  const [text, setText] = useState('');
  const [id, setId] = useState(0);
  const [onOpen, setOnOpen] = useState(false);

  const onChangeText = e => {
    setText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (text !== '' && todoList.length < 7) {
      const addTodoList = todoList.concat({
        id: id,
        text,
        checked: false,
      });
      // todo list 정보, id 저장하기
      localStorage.setItem('todolists', JSON.stringify(addTodoList));
      localStorage.setItem('id', id);

      setTodoList(addTodoList);
      setId(id => id + 1);
      setText('');
      console.log(addTodoList.slice(0, 5));
    } else {
      alert('You can only add 7 to-do lists!');
    }
  };

  // 마운트되었을 때 localStorage 데이터 불러오기
  useEffect(() => {
    const localItems = localStorage.getItem('todolists');
    if (localItems) {
      setTodoList(JSON.parse(localItems));
    }
    const localId = localStorage.getItem('id');
    if (localId) {
      setId(parseInt(localId) + 1);
    }
  }, []);

  const onClickHandler = () => {
    setOnOpen(!onOpen);
  };

  return (
    <ToDoCreateDiv>
      {onOpen ? (
        <form className='input_form' onSubmit={onSubmitHandler}>
          <div className='input_box'>
            <input
              type='text'
              name='item'
              placeholder='Add new todo'
              className='input_box'
              value={text}
              onChange={onChangeText}
            />
          </div>
          <button type='submit' className='submit'>
            <MdOutlinePlaylistAdd />
          </button>
        </form>
      ) : (
        ''
      )}
      {!onOpen ? (
        <button className='plus_btn' onClick={onClickHandler}>
          <MdAdd />
        </button>
      ) : (
        ''
      )}
      {onOpen ? (
        <button className='plus_btn close' onClick={onClickHandler}>
          <MdClose />
        </button>
      ) : (
        ''
      )}
    </ToDoCreateDiv>
  );
}
