import ToDoItem from "./ToDoItem";
import styled from 'styled-components';

const ToDoListDiv = styled.div`
  overflow: hidden;
  max-height: 320px;
`;

export default function ToDoList({ tabState,  todoList, setTodoList}){
  const checked = todoList.filter((item) => item.checked === true); // 완료된 리스트만
  const unchecked = todoList.filter((item) => item.checked === false); // 진행중인 리스트만
  if(tabState === 'All') {
    return(
      <ToDoListDiv> 
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
        </ul>
      </ToDoListDiv>
      )
  } else if(tabState === 'Complete'){
    return(
      <ToDoListDiv> 
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
        </ul>
    </ToDoListDiv>
      )
  } else {
    return(
      <ToDoListDiv> 
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
        </ul>
    </ToDoListDiv>
      )
  }
  }
