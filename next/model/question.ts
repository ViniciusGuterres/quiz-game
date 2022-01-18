import answersModel from "./answers";

export default class QuestionModel {
    #id: number;
    #enunciation: string;
    #answers: answersModel[];
    #isCorrect: boolean;
    // #answered: boolean;

    constructor(id: number, enunciation: string, answers: answersModel[], isCorrect: boolean) {
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
}