// import img from '/todo_app/assets/img/whale.png;'
import LinearProgress from "@mui/material/LinearProgress";
import styled from 'styled-components';

const ToDoProgressDiv = styled.div`
  padding: 20px 30px;
    .progress_bar {position: relative;}
    .count {
      margin-top: 20px;
      font-size: 16px;
      text-align: right;
      font-weight: 600;
    }
    .text{
      padding: 0px 3px;
    }
    .img_box {
      position: absolute;
      top: -22px;
      right: 0px;
      z-index: 1;
    }
    .whale {
      width: 40px;
      height: 40px;
    }
    .css-eglki6-MuiLinearProgress-root{
      margin-right: 24px;
      height: 5px; 
      background: #e9ecef;
      border-radius: 30px;
    }
    .css-5xe99f-MuiLinearProgress-bar1{
      background:#99ccff;
      border-radius: 30px;
    }
`;


export default function ToDoProgress({item, todoList, setTodoList}){
  const length = todoList.length // todo-list의 전체 길이
  const Completed = todoList.filter((item) => item.checked === true).length; // 완료된 todo-list 출력

  return(
    <ToDoProgressDiv>
      <div className='progress_bar'>
        <div className='img_box'>
          <img className="whale" src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/spouting-whale_1f433.png" width="60" height="60" />
        </div>
        <LinearProgress
          className="progress"
          variant="determinate"
          value={Completed / length * 100}
          ></LinearProgress>
      </div>
      <div className='count'>
        {length} <span className="text">out of</span> {Completed} <span className="text">completed</span>
      </div>
  </ToDoProgressDiv>
  )
}