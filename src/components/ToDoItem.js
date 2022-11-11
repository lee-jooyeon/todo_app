import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  MdDone,
  MdOutlineCheck,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';

const ToDoItemDiv = styled.div`
  display:flex;
  margin-bottom: 15px;
    .item_wrap{
      position: relative;
      display: flex;
    }
    [type = "checkbox"] {
      width: 25px;
      height: 25px;
      border-radius:50%;
      border: 2px solid #ddecef;
      appearance: none;
      outline: none;
      cursor: pointer;
    }
    [type = "checkbox"]:checked {
      background: #99ccff;
      border: none;
    }
    .checked_icon {
      position: absolute;
      top:50%;
      left:16px;
      transform:translate(-50%, -50%);
      color: #ffffff;
      font-size: 20px;
      cursor: pointer;
    }
    .text {
      margin-left: 15px;
      font-weight: 500;
      line-height: 25px;
      width: 300px;
      overflow: hidden;
      cursor: pointer;
    }
    .text-checked {
      font-style: italic;
      font-weigh: 400; 
      text-decoration: line-through;
      color: #868e96;
    }
    button {
      margin-right: 5px;
      width: 40px;
      background: none;
      border: none;
      line-height: 20px;
      font-size: 20px;
      color: #bbbbbb;
      cursor: pointer;
    }
    button:hover {
      // background: #d0ebff;
      font-weight: 500;
      color: #000000;
    }
    .edit_input {
      width: 300px;
      margin-left: 15px;
      border: none;
      border-bottom: 2px solid #f1f3f5;
      padding: 5px;
      font-size: 1em;
      box-sizing: border-box;
    }
    .edit_input:focus {
      outline: none;
    }
`;

export default function ToDoItem({item, todoList, setTodoList}){
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(item.text);
  const editInputRef = useRef(null);

  const onChangeCheck = () => {
    const addTodoList = todoList.map((list) => ({
      ...list,
      checked: list.id === item.id ? !list.checked: list.checked,
    }));
    setTodoList(addTodoList); 
  }

  const onClickEditHandler = () => {
    setEdit(true);
  };

  // 새 text를 넣을 input
  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  // edit event
  const onClickSubmitHandler = () => {
    const addTodoList = todoList.map((list) => ({
      ...list,
      text: list.id === item.id ? newText : list.text // 새로운 아이템 내용을 넣어줌
    }));
    setTodoList(addTodoList);
    setEdit(false);
  };  

  // delete event
  const onClickDelete = () => {
    if(window.confirm('Are you sure you want to delete?')){
      const addTodoList = todoList.filter((list) => list.id !== item.id);
      setTodoList(addTodoList);
    }    
  }

    // input focusing
    useEffect(() => {
      if(edit){
        editInputRef.current.focus();
      }
    }, [edit]);

  return(
    <ToDoItemDiv>
        {/* 체크박스 */}
        <label className='item_wrap'>
          <input
            type="checkbox"
            className="checkbox"
            checked={item.checked}
            onChange = {onChangeCheck}
          />
          {item.checked && <MdDone className="checked_icon" /> }
          {/* 아이템내용 */}
          {/* <div className={`text ${item.checked ? 'text-checked' : ''}`}>{item.text}</div> */}
          {edit ? ( 
            <input 
              className='edit_input'
              type="text"
              value={newText}
              ref={editInputRef}
              onChange={onChangeEditInput}
              // onKeyPress={onClickSubmitHandler}
              /> 
              ) : (
                <div className={`text ${item.checked ? 'text-checked' : ''}`}>
                  {item.text}
                </div>
              )
            }
        </label>
        {/* 수정버튼 */}
        {edit ? (
              <button 
              type="button" 
              className="edit"
              onClick={onClickSubmitHandler}
              >
              <MdOutlineCheck />
            </button>
            ) : 
            (
              <button 
              type="button" 
              className="edit" 
              onClick={onClickEditHandler}
              >
              <MdModeEdit />
              </button>
            )}
            {/* 삭제버튼 */}
            <button 
              type="button" 
              className="remove"
              onClick={onClickDelete}
              ><MdDelete/>
            </button>
      </ToDoItemDiv>
  )
}
