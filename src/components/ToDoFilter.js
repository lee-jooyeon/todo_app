import React from "react"
import styled from 'styled-components';

const ToDoFilterDiv = styled.div`
  .focus { background:#99ccff; color: #ffffff;}
`;

export default function ToDoFilter({title, label, tabState, changeTab}){
  return(
    <ToDoFilterDiv>
      <div 
        className={label === tabState ? 'focus' : '#000000'}
        onClick = {() => {
          changeTab(label)
        }} 
      >
        {title}
      </div>
    </ToDoFilterDiv>
  )
}