// import LinearProgress from "@mui/material/LinearProgress";
import styled from 'styled-components';

const ToDoProgressDiv = styled.div`
  padding: 20px 30px;
  .progress_bar {
    position: relative;
  }
  .count {
    margin-top: 20px;
    font-size: 16px;
    text-align: right;
    font-weight: 600;
  }
  .text {
    padding: 0px 3px;
  }
  .img_box {
    position: absolute;
    top: -22px;
    right: -8px;
    z-index: 1;
  }
  .whale {
    width: 40px;
    height: 40px;
  }
  .progress {
    position: relative;
    height: 5px;
    border-radius: 25px;
    background: #dddddd;
  }
  .percent {
    position: absolute;
    bottom: 28px;
    right: -10px;
    width: 60px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 25px;
    background: #99ccff;
    color: #ffffff;
    font-weight: 600;
  }
`;

export default function ToDoProgress({ todoList }) {
  const length = todoList.length; // todo-list의 전체 길이
  const completed = todoList.filter(item => item.checked === true).length; // 완료된 todo-list 출력
  const percentage = Math.ceil((completed / length) * 100);

  return (
    <ToDoProgressDiv>
      <div className='progress_bar'>
        <div className='img_box'>
          <img
            className='whale'
            src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/spouting-whale_1f433.png'
            alt='icon'
            width='60'
            height='60'
          />
        </div>
        <div className='progress'>
          {isNaN(percentage) ? (
            <span className='percent'> 0% </span>
          ) : (
            <div
              className='progress-filled'
              style={{
                height: '100%',
                width: `${percentage && percentage ? percentage : 0}%`,
                background: '#99ccff',
                transition: 'width 0.5s',
                borderRadius: '25px',
              }}
            >
              <span className='percent'>{percentage}%</span>
            </div>
          )}
        </div>
        {/* mui로 이용한 progress bar */}
        {/* <LinearProgress
          className="progress"
          variant="determinate"
          value={completed / length * 100}
          /> */}
      </div>
      <div className='count'>
        {length}
        <span className='text'>out of</span> {completed}{' '}
        <span className='text'>completed</span>
      </div>
    </ToDoProgressDiv>
  );
}
