import style from '../styles/Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    key: number,
    duration: number,
    timeOver: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={style.timer} style={{ fontSize: '30px' }}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duration}
                onComplete={props.timeOver}
                colors={'#910e0eccc'}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer >
        </div>
    )
}