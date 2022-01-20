import QuestionModel from "../model/question";
import style from '../styles/Question.module.css';

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value;

    return (
        <div className={style.question}>
            <h1>Questão component</h1>
        </div>
    )
}