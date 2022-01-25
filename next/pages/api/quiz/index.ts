import questions from "../questionsBank";
import { shuffle } from "../../../functions/arrays";

export default function QuizApi(req, res) {
    const questionsIds = questions.map(question => question.id);

    res.status(200).json(shuffle(questionsIds));
}