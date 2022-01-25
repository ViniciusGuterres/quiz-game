import style from '../styles/Quiz.module.css';

import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface QuizProps {
    question: QuestionModel,
    isLastQuestion: boolean,
    questionAnswered: (question: QuestionModel) => void,
    nextStep: () => void
}

export default function Quiz(props: QuizProps) {
    function onResponse(index: number) {
        if (!props.question.answered) {
            props.questionAnswered(props.question.answerWith(index));
        }
    }

    return (
        <div className={style.quiz}>
            {
                props.question ?
                    <Question
                        value={props.question}
                        durationToAnswer={6}
                        onResponse={onResponse}
                        timeOver={props.nextStep}
                    />
                    :
                    null
            }
            <Button
                onClick={props.nextStep}
                text={props.isLastQuestion ? 'Finalizar' : 'Próxima'}
            />
        </div>
    )
}