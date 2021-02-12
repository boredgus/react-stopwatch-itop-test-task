import { createStore } from "redux";

export function setTime(hours, minutes, seconds) {
    return {
        type: "SET_TIME",
        hours,
        minutes,
        seconds
    }
}
export function toggleButton1Text() {
    return {
        type: "TOGGLE_BUTTON1_TEXT"
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
    },
    timeStamp: {
        first: 0,
        second: 0
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
        case "TOGGLE_BUTTON1_TEXT":
            return {
                ...timer,
                button1Text: timer.button1Text === "Start" ? "Stop" : "Start"
            }
        case "START_TIMER":
            return {
                ...timer,
                isStarted: true
            }
        case "PAUSE_TIMER":
            return {
                ...timer,
                isStarted: false,
                button1Text: "Start"
            }
        case "RESET_TIMER":
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
        default:
            return timer;
    }
}
const store = createStore(timerReducer);
store.subscribe(() => {

})
export default store;