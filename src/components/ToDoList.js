import ToDoItem from "./ToDoItem";
import styled from 'styled-components';

const ToDoListDiv = styled.div`
  overflow: hidden;
  max-height: 320px;
`;

export default function ToDoList({ tabState,  todoList, setTodoList}){
  const checked = todoList.filter((item) => item.checked === true); // 완료된 리스트만
  const unchecked = todoList.filter((item) => item.checked === false); // 진행중인 리스트만
  return(
    <ToDoListDiv>
        {tabState === 'All' ? (
          <ul>
          {todoList && todoList.map((item) => {
            if(!item.checked){
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
        </ul>) : null }
        {tabState === 'Complete' ? (      
          <ul>
          {todoList && checked.map((item) => {
            if(!item.checked){
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
        </ul>) : null}
        {tabState === 'Active' ? (      
          <ul>
          {todoList && unchecked.map((item) => {
            if(!item.checked){
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
        </ul>) : null}
    </ToDoListDiv>
    )
  }
