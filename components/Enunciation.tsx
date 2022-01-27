import style from '../styles/Enunciation.module.css';

interface EnunciationProps {
    text: string
}

export default function Enunciation(props: EnunciationProps) {

    return (
        <div className={style.enunciation}>
            <div className={style.text}>
                {props.text}
            </div>
        </div>
    )
}