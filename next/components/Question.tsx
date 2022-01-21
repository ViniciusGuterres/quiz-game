import QuestionModel from "../model/question";
import style from '../styles/Question.module.css';

import Enunciation from '../components/Enunciation';
import Answer from "./Answer";
import Timer from "./Timer";

interface QuestionProps {
    value: QuestionModel,
    onResponse: (index: number) => void,
    timeOver: () => void,
    durationToAnswer: number
}

export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={i}
                    value={answer}
                    index={i}
                    letter='A'
                    colorBgLetter='tomato'
                    onResponse={props.onResponse}
                />
            )
        })
    }

    return (
        <div className={style.question}>
            <Timer
                duration={props.durationToAnswer ?? 10}
                timeOver={props.timeOver}
            />
            <h1>Questão component</h1>
            <Enunciation
                text={'vini'}
            />

            {renderAnswers()}
        </div>
    )
}