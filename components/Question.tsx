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

        if (question.answers && question.answers.length) {
            return question.answers.map((answer, i) => {
                return (
                    <Answer
                        key={`${question.id} - ${i}`}
                        value={answer}
                        index={i}
                        letter='A'
                        colorBgLetter='tomato'
                        onResponse={props.onResponse}
                    />
                )
            })
        } else {
            return null;
        }
    }

    return (
        <div className={style.question}>
            <div className={style.header}>
                <Timer
                    key={question.id}
                    duration={props.durationToAnswer ?? 10}
                    timeOver={props.timeOver}
                />
                <Enunciation
                    text={props.value.enunciation}
                />
            </div>

            {renderAnswers()}
        </div>
    )
}