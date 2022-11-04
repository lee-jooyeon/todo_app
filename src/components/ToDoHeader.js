import React from "react"
import ToDoFilter from "./ToDoFilter";
import styled from 'styled-components';

const ToDoHeaderDiv = styled.div`
  padding: 50px 30px 15px;
  h2{margin-bottom: 50px};
  .tabmenu{ display: flex; cursor:pointer};
  .tabmenu div {
    flex: 0 0 120px;
    padding: 6px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    border-radius: 8px;
  }
`;

export default function ToDoHeader({tabList, tabState, changeTab}){
  const date = new Date();
  const dateIs = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const day = date.toLocaleDateString('en-US', {weekday: 'long'});
  return(
    <ToDoHeaderDiv>
      <h1 className="date">{dateIs}</h1>
      <h2 className="day">{day}</h2>
      <div className="tabmenu">{tabList.map(({title, label, id, checked}) => (
      <ToDoFilter 
        key={id} 
        title={title} 
        label={label}
        checked={checked}
        tabState={tabState}
        changeTab={changeTab} 
        />
      ))}
      </div>
    </ToDoHeaderDiv>
  )
}