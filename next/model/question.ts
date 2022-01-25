import AnswersModel from './answers';
import { shuffle } from '../functions/arrays';

export default class QuestionModel {
    #id: number;
    #enunciation: string;
    #answers: AnswersModel[];
    #isCorrect: boolean;
    #answered: boolean;

    constructor(id: number, enunciation: string, answers: AnswersModel[], isCorrect = false) {
        this.#id = id;
        this.#enunciation = enunciation;
        this.#answers = answers;
        this.#isCorrect = isCorrect;
    }

    get id() {
        return this.#id;
    }

    get enunciation() {
        return this.#enunciation;
    }

    get answers() {
        return this.#answers;
    }

    get isCorrect() {
        return this.#isCorrect;
    }

    get answered() {
        for(let answer of this.#answers) {
            if (answer.revealed) return true;
        }
        return false;
    }

    shuffleAnswers(): QuestionModel {
        const answersToShuffle = shuffle(this.#answers);

        return new QuestionModel(this.#id, this.#enunciation, answersToShuffle, this.#isCorrect);
    }

    answerWith(index: number): QuestionModel {
        const isCorrect = this.#answers[index]?.correct;
        const answers = this.#answers.map((answer, i) => {
            const answerSelected = index == i;
            const shouldReveal = answerSelected || answer.correct;

            return shouldReveal ? answer.reveal() : answer;
        })

        return new QuestionModel(this.#id, this.#enunciation, answers, isCorrect);
    }

    static fromObject(modelObj: QuestionModel): QuestionModel {
        const answers = modelObj.answers.map(answer => AnswersModel.fromObject(answer));

        return new QuestionModel(modelObj.id, modelObj.enunciation, answers, modelObj.isCorrect);
    }

    toObject(): object {
        return {
            id: this.#id,
            enunciation: this.#enunciation,
            answers: this.#answers.map(item => item.toObject()),
            answered: this.answered,
            isCorrect: this.#isCorrect
        }
    }
}