exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 2486:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__HxzDS"
};


/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2486);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Button(props) {
    function renderButton() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
            onClick: props.onClick,
            children: props.text
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: props.href,
            children: renderButton()
        }) : renderButton()
    }));
};


/***/ })

};
;