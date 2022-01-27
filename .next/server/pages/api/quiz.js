"use strict";
(() => {
var exports = {};
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 2553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuizApi)
/* harmony export */ });
/* harmony import */ var _questionsBank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9194);
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9482);


function QuizApi(req, res) {
    const questionsIds = _questionsBank__WEBPACK_IMPORTED_MODULE_0__["default"].map((question)=>question.id
    );
    res.status(200).json((0,_functions_arrays__WEBPACK_IMPORTED_MODULE_1__/* .shuffle */ .T)(questionsIds));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [194], () => (__webpack_exec__(2553)));
module.exports = __webpack_exports__;

})();