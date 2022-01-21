import Question from '../components/Question';
import AnswersModel from '../model/answers';
import QuestionModel from '../model/question';

export default function Home() {
  const value  = new QuestionModel(111, 'Qual é a melhor banda de rock do mundo ?', [
    AnswersModel.correctAnswer('Queen'),
    AnswersModel.incorrectAnswer('Beatles'),
    AnswersModel.incorrectAnswer('Rolling Stone'),
    AnswersModel.incorrectAnswer('Pink Floyd'),
  ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question
        value={value}
      />
    </div>
  )
}