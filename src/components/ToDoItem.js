import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MdDone,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';

const ToDoItemDiv = styled.div`
  display:flex;
  margin-bottom: 15px;
    label{
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
`;

export default function ToDoItem({item, todoList, setTodoList}){
  const [checked, setChecked] = useState(false);
  // const [label, setLabel] = useState('Done');

  const onChangeCheck = () => {
    const addTodoList = todoList.map((list) => ({
      ...list,
      checked: list.id === item.id ? !list.checked: list.checked,
    }));
    setTodoList(addTodoList); 
  }

    return(
      <ToDoItemDiv>
        {/* 체크박스 */}
        <label>
          <input
          type="checkbox"
          className="checkbox"
          onChange = {() => {
            onChangeCheck();
            setChecked(!checked);
            // setLabel('Undone');
          }}
          checked={item.checked}
          />
          {item.checked && <MdDone className="checked_icon" /> }
          {/* 아이템내용 */}
          <div className={`text ${item.checked ? 'text-checked' : ''}`}>{item.text}</div>
        </label>
        {/* 수정버튼 */}
        <button type="button" className="edit"><MdModeEdit /></button>
        <button type="button" className="remove"><MdDelete/></button>
      </ToDoItemDiv>
    )
}
