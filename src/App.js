import './App.scss';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleButton1Text, setTime, startTimer, pauseTimer, resetTimer } from "./redux"

function App() {
  const [timeStamp, setTimestamp] = useState(0);
  const { hours, minutes, seconds } = useSelector(state => state.time);
  const { isStarted, button1Text } = useSelector(state => state);
  const dispatch = useDispatch();
  let timeout;

  useEffect(() => {
    if (isStarted) {
      timeout = setTimeout(() => {
        if (seconds == 59 && minutes == 59)
          dispatch(setTime(hours + 1, 0, 0));
        else if (seconds == 59)
          dispatch(setTime(hours, minutes + 1, 0));
        else
          dispatch(setTime(hours, minutes, seconds + 1));
      }, 1000)
    }
  }, [isStarted, seconds])

  function startStopClicked() {
    clearTimeout(timeout);
    if (!isStarted)
      dispatch(startTimer());
    else
      dispatch(pauseTimer());
    dispatch(toggleButton1Text());
  }

  function waitClicked(event) {
    if (event.timeStamp - timeStamp < 300 && timeStamp !== 0) {
      clearTimeout(timeout);
      dispatch(pauseTimer());
    }
    else if (timeStamp === 0) {
      setTimestamp(event.timeStamp);
    }
    else {
      setTimestamp(event.timeStamp);
    }
  }

  function resetClicked() {
    dispatch(resetTimer());
    clearTimeout(timeout);
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="timer">
        {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div className="actions">
        <button onClick={startStopClicked}>{button1Text}</button>
        <button onClick={waitClicked}>Wait</button>
        <button onClick={resetClicked}>Reset</button>
      </div>
    </div>
  );
}

export default App;
