import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question';
import AnswersModel from '../model/answers';
import QuestionModel from '../model/question';

const questionMock = new QuestionModel(111, 'Qual é a melhor banda de rock do mundo ?', [
  AnswersModel.correctAnswer('Queen'),
  AnswersModel.incorrectAnswer('Beatles'),
  AnswersModel.incorrectAnswer('Rolling Stone'),
  AnswersModel.incorrectAnswer('Pink Floyd'),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);
  const questionRef = useRef<QuestionModel>();

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  function onResponse(index: number) {
    console.log(index);
    setQuestion(question.answerWith(index));
  }

  // Set answer to wrong index when timer duration is over
  function timeOver() {
    if (!questionRef.current.answered) {
      setQuestion(question.answerWith(-1));
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <Question
        value={question}
        onResponse={onResponse}
        timeOver={timeOver}
        durationToAnswer={5}
      />

      <Button 
        text='NEXT'
      />
    </div>
  )
}