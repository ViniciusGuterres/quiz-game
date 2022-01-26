import { useEffect, useRef, useState } from 'react';
import AnswersModel from '../model/answers';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';

import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [question, setQuestion] = useState<any>();
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [correctsAnswereds, setCorrectsAnswereds] = useState<number>(0)

  const questionRef = useRef<QuestionModel>();

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();

    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);

    if (resp.status !== 204) {
      const questionJson = await resp.json();

      setQuestion(QuestionModel.fromObject(questionJson))
    } else {
      setQuestion([]);
    }
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {

    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  function onResponse(index: number) {
    setQuestion(question.answerWith(index));
  }

  // Set answer to wrong index when timer duration is over
  function timeOver() {
    if (!questionRef.current.answered) {
      setQuestion(question.answerWith(-1));
    }
  }

  function questionAnswered(question: QuestionModel) {
    setQuestion(question);

    if (question.isCorrect) {
      setCorrectsAnswereds(correctsAnswereds + 1);
    }
  }

  function idNextQuestion() {
    if (question) {
      const nextId = questionsIds.indexOf(question.id) + 1;
      return questionsIds[nextId];
    }
  }

  function nextStep() {
    const nextQuestionId = idNextQuestion();

    if (nextQuestionId) {
      goNextQuestion(nextQuestionId);
    } else {
      endGame();
    }
  }

  function goNextQuestion(nextQuestionId: number) {
    loadQuestion(nextQuestionId);
  }

  function endGame() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        corrects: correctsAnswereds
      }
    });
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flexDirection: 'column'
    }}>
      {
        question ?
          <Quiz
            question={question}
            isLastQuestion={idNextQuestion() == undefined}
            questionAnswered={questionAnswered}
            nextStep={nextStep}
          />
          :
          null
      }
    </div>
  )
}