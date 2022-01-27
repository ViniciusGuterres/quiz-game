(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9181:
/***/ ((module) => {

// Exports
module.exports = {
	"answer": "Answer_answer__PrVft",
	"card": "Answer_card__uz2F8",
	"front": "Answer_front__67Ryx",
	"back": "Answer_back__RiPf5",
	"correctAnswer": "Answer_correctAnswer__q9Gev",
	"wrongAnswer": "Answer_wrongAnswer__fUwnU",
	"letter": "Answer_letter__GMV10",
	"value": "Answer_value__OfIWw",
	"answerRevealed": "Answer_answerRevealed__wkhk_"
};


/***/ }),

/***/ 9282:
/***/ ((module) => {

// Exports
module.exports = {
	"enunciation": "Enunciation_enunciation___ZcJH",
	"text": "Enunciation_text__VOzd8"
};


/***/ }),

/***/ 9269:
/***/ ((module) => {

// Exports
module.exports = {
	"question": "Question_question__Q_qj_",
	"header": "Question_header__Rgiq9"
};


/***/ }),

/***/ 4475:
/***/ ((module) => {

// Exports
module.exports = {
	"quiz": "Quiz_quiz__qJh9R"
};


/***/ }),

/***/ 9228:
/***/ ((module) => {

// Exports
module.exports = {
	"timer": "Timer_timer__viBwW"
};


/***/ }),

/***/ 2153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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


;// CONCATENATED MODULE: ./functions/arrays.ts
function shuffle(elements) {
    return elements.map((element)=>({
            value: element,
            randomPosition: Math.random()
        })
    ).sort((obj1, obj2)=>obj1.randomPosition - obj2.randomPosition
    ).map((element)=>element.value
    );
}

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
        const answersToShuffle = shuffle(this.#answers);
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


// EXTERNAL MODULE: ./styles/Quiz.module.css
var Quiz_module = __webpack_require__(4475);
var Quiz_module_default = /*#__PURE__*/__webpack_require__.n(Quiz_module);
// EXTERNAL MODULE: ./styles/Question.module.css
var Question_module = __webpack_require__(9269);
var Question_module_default = /*#__PURE__*/__webpack_require__.n(Question_module);
// EXTERNAL MODULE: ./styles/Enunciation.module.css
var Enunciation_module = __webpack_require__(9282);
var Enunciation_module_default = /*#__PURE__*/__webpack_require__.n(Enunciation_module);
;// CONCATENATED MODULE: ./components/Enunciation.tsx


function Enunciation(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Enunciation_module_default()).enunciation,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Enunciation_module_default()).text,
            children: props.text
        })
    }));
};

// EXTERNAL MODULE: ./styles/Answer.module.css
var Answer_module = __webpack_require__(9181);
var Answer_module_default = /*#__PURE__*/__webpack_require__.n(Answer_module);
;// CONCATENATED MODULE: ./components/Answer.tsx


// the letters properties available
const letters = [
    {
        value: 'A',
        bgColor: '#F2C866'
    },
    {
        value: 'B',
        bgColor: '#F266BA'
    },
    {
        value: 'C',
        bgColor: '#85D4F2'
    },
    {
        value: 'B',
        bgColor: '#BCE596'
    }
];
function Answer(props) {
    const answer = props.value;
    const answerIndex = props.index;
    const answerRevealed = answer.revealed ? (Answer_module_default()).answerRevealed : '';
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Answer_module_default()).answer,
        onClick: ()=>props.onResponse(answerIndex)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Answer_module_default()).card} ${answerRevealed}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Answer_module_default()).front,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Answer_module_default()).letter,
                            style: {
                                backgroundColor: letters[answerIndex].bgColor
                            },
                            children: letters[answerIndex].value
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Answer_module_default()).value,
                            children: answer.value
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Answer_module_default()).back,
                    children: answer.correct ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Answer_module_default()).correctAnswer,
                        children: [
                            "A resposta certa \xe9...",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Answer_module_default()).value,
                                children: answer.value
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Answer_module_default()).wrongAnswer,
                        children: [
                            "A resposta informada est\xe1 errada...",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Answer_module_default()).value,
                                children: answer.value
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./styles/Timer.module.css
var Timer_module = __webpack_require__(9228);
var Timer_module_default = /*#__PURE__*/__webpack_require__.n(Timer_module);
;// CONCATENATED MODULE: external "react-countdown-circle-timer"
const external_react_countdown_circle_timer_namespaceObject = require("react-countdown-circle-timer");
;// CONCATENATED MODULE: ./components/Timer.tsx



function Timer(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Timer_module_default()).timer,
        style: {
            fontSize: '30px'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_countdown_circle_timer_namespaceObject.CountdownCircleTimer, {
            size: 120,
            isPlaying: true,
            duration: props.duration,
            onComplete: props.timeOver,
            colors: '#910e0eccc',
            children: ({ remainingTime  })=>remainingTime
        })
    }));
};

;// CONCATENATED MODULE: ./components/Question.tsx





function Question(props) {
    const question = props.value;
    function renderAnswers() {
        if (question.answers && question.answers.length) {
            return question.answers.map((answer, i)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(Answer, {
                    value: answer,
                    index: i,
                    letter: "A",
                    colorBgLetter: "tomato",
                    onResponse: props.onResponse
                }, `${question.id} - ${i}`));
            });
        } else {
            return null;
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Question_module_default()).question,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Question_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Timer, {
                        duration: props.durationToAnswer ?? 10,
                        timeOver: props.timeOver
                    }, question.id),
                    /*#__PURE__*/ jsx_runtime_.jsx(Enunciation, {
                        text: props.value.enunciation
                    })
                ]
            }),
            renderAnswers()
        ]
    }));
};

// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
;// CONCATENATED MODULE: ./components/Quiz.tsx




function Quiz(props) {
    function onResponse(index) {
        if (!props.question.answered) {
            props.questionAnswered(props.question.answerWith(index));
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Quiz_module_default()).quiz,
        children: [
            props.question ? /*#__PURE__*/ jsx_runtime_.jsx(Question, {
                value: props.question,
                durationToAnswer: 10,
                onResponse: onResponse,
                timeOver: props.nextStep
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                onClick: props.nextStep,
                text: props.isLastQuestion ? 'Finalizar' : 'Pr\xf3xima'
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/index.tsx





// const BASE_URL = 'https://quiz-game-rho.vercel.app/api';
const BASE_URL = 'http://localhost:3000/api';
function Home() {
    const router = (0,router_.useRouter)();
    const { 0: question1 , 1: setQuestion  } = (0,external_react_.useState)();
    const { 0: questionsIds1 , 1: setQuestionsIds  } = (0,external_react_.useState)([]);
    const { 0: correctsAnswereds , 1: setCorrectsAnswereds  } = (0,external_react_.useState)(0);
    const questionRef = (0,external_react_.useRef)();
    async function loadQuestionsIds() {
        const resp = await fetch(`${BASE_URL}/quiz`);
        const questionsIds = await resp.json();
        setQuestionsIds(questionsIds);
    }
    async function loadQuestion(idQuestion) {
        const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
        if (resp.status !== 204) {
            const questionJson = await resp.json();
            setQuestion(QuestionModel.fromObject(questionJson));
        } else {
            setQuestion([]);
        }
    }
    (0,external_react_.useEffect)(()=>{
        loadQuestionsIds();
    }, []);
    (0,external_react_.useEffect)(()=>{
        questionsIds1.length > 0 && loadQuestion(questionsIds1[0]);
    }, [
        questionsIds1
    ]);
    function onResponse(index) {
        setQuestion(question1.answerWith(index));
    }
    // Set answer to wrong index when timer duration is over
    function timeOver() {
        if (!questionRef.current.answered) {
            setQuestion(question1.answerWith(-1));
        }
    }
    function questionAnswered(question) {
        setQuestion(question);
        if (question.isCorrect) {
            setCorrectsAnswereds(correctsAnswereds + 1);
        }
    }
    function idNextQuestion() {
        if (question1) {
            const nextId = questionsIds1.indexOf(question1.id) + 1;
            return questionsIds1[nextId];
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
    function goNextQuestion(nextQuestionId) {
        loadQuestion(nextQuestionId);
    }
    function endGame() {
        router.push({
            pathname: '/result',
            query: {
                total: questionsIds1.length,
                corrects: correctsAnswereds
            }
        });
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flexDirection: 'column'
        },
        children: question1 ? /*#__PURE__*/ jsx_runtime_.jsx(Quiz, {
            question: question1,
            isLastQuestion: idNextQuestion() == undefined,
            questionAnswered: questionAnswered,
            nextStep: nextStep
        }) : null
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,570], () => (__webpack_exec__(2153)));
module.exports = __webpack_exports__;

})();