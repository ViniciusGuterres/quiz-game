export default class AnswersModel {
    #value: string;
    #correct: boolean;
    #revealed: boolean;

    constructor(value: string, correct: boolean, revealed = false) {
        this.#value = value;
        this.#correct = correct;
        this.#revealed = revealed;
    }

    static correctAnswer(value: string) {
        return new AnswersModel(value, true);
    }

    static incorrectAnswer(value: string) {
        return new AnswersModel(value, false);
    }

    get value() {
        return this.#value;
    }

    get correct() {
        return this.#correct;
    }

    get revealed() {
        return this.#revealed;
    }

    reveal(): AnswersModel {
        return new AnswersModel(this.#value, this.#correct, true);
    }

    static fromObject(modelObj: AnswersModel): AnswersModel {
        return new AnswersModel(modelObj.value, modelObj.correct, modelObj.revealed);
    }

    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }
}