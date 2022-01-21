import AnswersModel from "../model/answers";
import style from '../styles/Answer.module.css';

// the letters properties available
const letters = [
    { value: 'A', bgColor: '#F2C866' },
    { value: 'B', bgColor: '#F266BA' },
    { value: 'C', bgColor: '#85D4F2' },
    { value: 'B', bgColor: '#BCE596' }
]

interface AnswerProps {
    value: AnswersModel,
    index: number,
    letter: string,
    colorBgLetter: string,
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value;
    const answerIndex = props.index;

    return (
        <div className={style.answer}>
            <div className={style.card} onClick={() => props.onResponse(answerIndex)}>
                {/* Case answer is reveal, show all back div, otherwise show front div */}
                {
                    answer.revealed ?
                        <div className={style.back}>
                            {
                                answer.correct ?
                                    <div className={style.correctAnswer}>
                                        A resposta certa é...
                                        <div className={style.value}>
                                            {answer.value}
                                        </div>
                                    </div>
                                    :
                                    <div className={style.wrongAnswer}>
                                        A resposta informada está errada...
                                        <div className={style.value}>
                                            {answer.value}
                                        </div>
                                    </div>
                            }
                        </div>
                        :
                        <div className={style.front}>
                            <div
                                className={style.letter}
                                style={{ backgroundColor: letters[answerIndex].bgColor }}
                            >
                                {letters[answerIndex].value}
                            </div>

                            <div className={style.value}>
                                {answer.value}
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}