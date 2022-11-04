import React from "react";
import {useState} from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoCreate from "./ToDoCreate";
import styled from 'styled-components';

const ToDoCotainerDiv = styled.div`
  width: 512px;
  max-height: 900px;
  min-height: 800px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  background:#fff;
`;


export default function ToDoCotainer(){
  // 입력창에 담을 state
  const [todoList, setTodoList] = useState([]);
  // check 여부를 확인할 리스트 state
  const [check, setCheck] = useState(false);
  // 헤더
  const tabList = [
    {title: 'All 📑📌', label: 'All', id: 1, checked: null},
    {title: 'Done 🙆‍♀️', label: 'Done', id: 2, checked: true},
    {title: 'Undone 🙅‍♀️', label: 'Undone', id: 3, checked: false}
  ];
  const [tabState, setTabState] = useState('All');
  const changeTab = (tabState) => {
    setTabState(tabState);
  }

  return(
    <ToDoCotainerDiv>
        <ToDoHeader tabList={tabList} tabState={tabState} changeTab={changeTab} />
        <ToDoList  
         tabList={tabList} 
         tabState={tabState}
        todoList={todoList}
        setTodoList={setTodoList}
        check={check}
        />
        <ToDoCreate  todoList={todoList} setTodoList={setTodoList} />
    </ToDoCotainerDiv>
  )
}