import style from '../styles/Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    key: number,
    duration: number,
    timeOver: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={style.timer}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={1000}
                onComplete={props.timeOver}
                // colors={['#BCE596', '#F7B801', '#ED827A']}
                // colorsTime={[7, 5, 2, 0]}
                colors={[
                    ["#004777", 0.33],
                    ["#F7B801", 0.33],
                    ["#A30000", 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer >
        </div>
    )
}