import { createStore } from "redux";

export function setTime(hours, minutes, seconds) {
    return {
        type: "SET_TIME",
        hours,
        minutes,
        seconds
    }
}
export function startTimer() {
    return {
        type: "START_TIMER"
    }
}
export function pauseTimer() {
    return {
        type: "PAUSE_TIMER"
    }
}
export function stopTimer() {
    return {
        type: "STOP_TIMER"
    }
}
export function resetTimer() {
    return {
        type: "RESET_TIMER"
    }
}
const initialTimer = {
    isStarted: false,
    button1Text: "Start",
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
}
export function timerReducer(timer = initialTimer, action) {
    switch (action.type) {
        case "SET_TIME":
            return {
                ...timer,
                time: {
                    hours: action.hours,
                    minutes: action.minutes,
                    seconds: action.seconds
                }
            }
        case "START_TIMER":
            return {
                ...timer,
                isStarted: true,
                button1Text: "Stop"
            }
        case "PAUSE_TIMER":
            return {
                ...timer,
                isStarted: false,
                button1Text: "Start"
            }
        case "STOP_TIMER":
            return {
                ...timer,
                isStarted: false,
                button1Text: "Start",
                time: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
            }
        case "RESET_TIMER":
            return {
                ...timer,
                button1Text: "Start",
                time: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
            }
        default:
            return timer;
    }
}
const store = createStore(timerReducer);
store.subscribe(() => {

})
export default store;