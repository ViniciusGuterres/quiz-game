import AnswersModel from "../model/answers";
import style from '../styles/Answer.module.css';

interface AnswerProps {
    value: AnswersModel,
    index: number,
    letter: string,
    colorBgLetter: string
}

export default function Answer(props: AnswerProps) {
    const answer = props.value;

    return (
        <div className={style.answer}>
            <div className={style.card}>
                <div className={style.front}>
                    <div
                        className={style.letter}
                        style={{ backgroundColor: props.colorBgLetter }}
                    >
                        {props.letter}
                    </div>

                    <div className={style.value}>
                        {answer.value}
                    </div>
                </div>

                <div className={style.back}>

                </div>
            </div>
        </div>
    )
}