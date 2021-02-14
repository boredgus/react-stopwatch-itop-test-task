import './style/index.scss';
import React, { useState, useLayoutEffect } from "react";
import stopwatchStore from "./rxjs/stopwatch";

function App1() {
    const [state, setStopwatchState] = useState(stopwatchStore.initialState);

    useLayoutEffect(() => {
        stopwatchStore.subscribe(setStopwatchState);
        stopwatchStore.init();
    }, []);

    function startStopClicked() {
        if (!state.isStarted)
            stopwatchStore.start();
        else
            stopwatchStore.stop();
    }

    function waitClicked(event) {
        if (event.timeStamp - state.timeStamp < 300 && state.timeStamp !== 0) 
            stopwatchStore.pause();
            // console.log("pause");
        else if (state.timeStamp === 0) 
            setStopwatchState(prevState => ({
                ...(prevState),
                timeStamp: event.timeStamp
            }))
        else 
        setStopwatchState(prevState => ({
            ...(prevState),
            timeStamp: event.timeStamp
        }))
    }

    function resetClicked() {
        stopwatchStore.reset();
        stopwatchStore.start();
    }

    return (
        <div className="App">
            <h1>Stopwatch</h1>
            <div className="timer">
                {state.time.hours < 10 ? "0" + state.time.hours : state.time.hours}:{state.time.minutes < 10 ? "0" + state.time.minutes : state.time.minutes}:{state.time.seconds < 10 ? "0" + state.time.seconds : state.time.seconds}
            </div>
            <div className="actions">
                <button onClick={startStopClicked}>{state.button1Text}</button>
                <button onClick={waitClicked}>Wait</button>
                <button onClick={resetClicked}>Reset</button>
            </div>
        </div>
    );
}

export default App1;