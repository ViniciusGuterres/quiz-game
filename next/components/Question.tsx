import QuestionModel from "../model/question";
import style from '../styles/Question.module.css';

import Enunciation from '../components/Enunciation';
import Answer from "./Answer";

interface QuestionProps {
    value: QuestionModel
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
                />
            )
        })
    }

    return (
        <div className={style.question}>
            <h1>Questão component</h1>
            <Enunciation
                text={'vini'}
            />

            {renderAnswers()}
        </div>
    )
}