"use strict";
(() => {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionsbyId)
/* harmony export */ });
/* harmony import */ var _questionsBank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9194);

function QuestionsbyId(req, res) {
    const selectedId = +req.query.id;
    // get the question filtered by param
    const filteredQuestions = _questionsBank__WEBPACK_IMPORTED_MODULE_0__["default"].filter((question)=>question.id === selectedId
    );
    if (filteredQuestions.length && filteredQuestions.length === 1) {
        const oneQuestionFiltered = filteredQuestions[0].shuffleAnswers();
        res.status(200).json(oneQuestionFiltered.toObject());
    } else {
        res.status(204).send();
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [194], () => (__webpack_exec__(3166)));
module.exports = __webpack_exports__;

})();