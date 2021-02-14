import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
    isStarted: false,
    button1Text: "Start",
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0
    },
    timeStamp: 0,
    interval: null
}

let state = initialState;

const stopwatchStore = {
    initialState,
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    start: () => {
        state = {
            ...state,
            isStarted: true,
            button1Text: "Stop",
            interval: setInterval(() => {
                if (state.time.seconds == 59 && state.time.minutes == 59)
                    state = {
                        ...state,
                        time: {
                            hours: state.time.hours + 1,
                            minutes: 0,
                            seconds: 0
                        }
                    }
                else if (state.time.seconds == 59)
                    state = {
                        ...state,
                        time: {
                            ...state.time,
                            minutes: state.time.minutes + 1,
                            seconds: 0
                        }
                    }
                else
                    state = {
                        ...state,
                        time: {
                            ...state.time,
                            seconds: state.time.seconds + 1
                        }
                    }
                subject.next(state);
            }, 1000)
        }
        subject.next(state);
    },
    stop: () => {
        clearInterval(state.interval);
        state = initialState;
        subject.next(state);
    },
    pause: () => {
        clearInterval(state.interval);
        state = {
            ...state,
            isStarted: false,
            button1Text: "Start"
        }
        subject.next(state);
    },
    reset: () => {
        clearInterval(state.interval);
        state = {
            ...state,
            time: initialState.time,
            button1Text: "Stop"
        }
        subject.next(state);
    }
}
export default stopwatchStore;