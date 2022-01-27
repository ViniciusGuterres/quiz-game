"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 9482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ shuffle)
/* harmony export */ });
function shuffle(elements) {
    return elements.map((element)=>({
            value: element,
            randomPosition: Math.random()
        })
    ).sort((obj1, obj2)=>obj1.randomPosition - obj2.randomPosition
    ).map((element)=>element.value
    );
}


/***/ }),

/***/ 9194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ questionsBank)
});

;// CONCATENATED MODULE: ./model/answers.ts
class AnswersModel {
    #value;
    #correct;
    #revealed;
    constructor(value, correct, revealed = false){
        this.#value = value;
        this.#correct = correct;
        this.#revealed = revealed;
    }
    static correctAnswer(value) {
        return new AnswersModel(value, true);
    }
    static incorrectAnswer(value) {
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
    reveal() {
        return new AnswersModel(this.#value, this.#correct, true);
    }
    static fromObject(modelObj) {
        return new AnswersModel(modelObj.value, modelObj.correct, modelObj.revealed);
    }
    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        };
    }
}


// EXTERNAL MODULE: ./functions/arrays.ts
var arrays = __webpack_require__(9482);
;// CONCATENATED MODULE: ./model/question.ts


class QuestionModel {
    #id;
    #enunciation;
    #answers;
    #isCorrect;
    #answered;
    constructor(id, enunciation, answers, isCorrect = false){
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
        for (let answer of this.#answers){
            if (answer.revealed) return true;
        }
        return false;
    }
    shuffleAnswers() {
        const answersToShuffle = (0,arrays/* shuffle */.T)(this.#answers);
        return new QuestionModel(this.#id, this.#enunciation, answersToShuffle, this.#isCorrect);
    }
    answerWith(index) {
        var ref;
        const isCorrect = (ref = this.#answers[index]) === null || ref === void 0 ? void 0 : ref.correct;
        const answers = this.#answers.map((answer, i)=>{
            const answerSelected = index == i;
            const shouldReveal = answerSelected || answer.correct;
            return shouldReveal ? answer.reveal() : answer;
        });
        return new QuestionModel(this.#id, this.#enunciation, answers, isCorrect);
    }
    static fromObject(modelObj) {
        const answers = modelObj.answers.map((answer)=>AnswersModel.fromObject(answer)
        );
        return new QuestionModel(modelObj.id, modelObj.enunciation, answers, modelObj.isCorrect);
    }
    toObject() {
        return {
            id: this.#id,
            enunciation: this.#enunciation,
            answers: this.#answers.map((item)=>item.toObject()
            ),
            answered: this.answered,
            isCorrect: this.#isCorrect
        };
    }
}


;// CONCATENATED MODULE: ./pages/api/questionsBank.ts


const questions = [
    new QuestionModel(306, 'Qual bicho transmite a Doen\xe7a de Chagas?', [
        AnswersModel.incorrectAnswer('Abelha'),
        AnswersModel.incorrectAnswer('Barata'),
        AnswersModel.incorrectAnswer('Pulga'),
        AnswersModel.correctAnswer('Barbeiro'), 
    ]),
    new QuestionModel(202, 'Qual fruto \xe9 conhecido no Norte e Nordeste como "jerimum"?', [
        AnswersModel.incorrectAnswer('Caju'),
        AnswersModel.incorrectAnswer('C\xf4co'),
        AnswersModel.incorrectAnswer('Chuchu'),
        AnswersModel.correctAnswer('Ab\xf3bora'), 
    ]),
    new QuestionModel(203, 'Qual \xe9 o coletivo de c\xe3es?', [
        AnswersModel.incorrectAnswer('Manada'),
        AnswersModel.incorrectAnswer('Alcateia'),
        AnswersModel.incorrectAnswer('Rebanho'),
        AnswersModel.correctAnswer('Matilha'), 
    ]),
    new QuestionModel(204, 'Qual \xe9 o tri\xe2ngulo que tem todos os lados diferentes?', [
        AnswersModel.incorrectAnswer('Equil\xe1tero'),
        AnswersModel.incorrectAnswer('Is\xf3celes'),
        AnswersModel.incorrectAnswer('Trap\xe9zio'),
        AnswersModel.correctAnswer('Escaleno'), 
    ]), 
];
/* harmony default export */ const questionsBank = (questions);


/***/ })

};
;