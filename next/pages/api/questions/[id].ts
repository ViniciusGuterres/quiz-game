import questions from "../questionsBank";

export default function QuestionsbyId(req, res) {
    const selectedId = +req.query.id;

    // get the question filtered by param
    const filteredQuestions = questions.filter(question => question.id === selectedId);
    
    if (filteredQuestions.length === 1) {
        const oneQuestionFiltered = filteredQuestions[0].shuffleAnswers();
        // const test = oneQuestionFiltered.answerWith(1).toObject();

        res.status(200).json(oneQuestionFiltered.toObject());
    } else {
        res.status(204).send();
    }
}