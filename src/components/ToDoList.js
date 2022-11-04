import ToDoItem from "./ToDoItem";
import styled from 'styled-components';
import { useState } from "react";

const ToDoListDiv = styled.div`
  overflow: hidden;
  max-height: 320px;
`;

export default function ToDoList({ tabList, tabState, check, todoList, setTodoList}){
  const checkState = tabState;
  // const checked = todoList.filter((item) => check === item.checked);
  // console.log(checked);
  // console.log(checkState);
  return(
    <ToDoListDiv>
      <ul>
        {todoList && todoList.map((item) => {
          if(check !== item.checked){
            return(
              <ToDoItem
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            )
          } else {
            return(
              <ToDoItem
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            )
          }
        })}
      </ul>
  </ToDoListDiv>
    )
  }
