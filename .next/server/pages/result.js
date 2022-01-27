(() => {
var exports = {};
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 8534:
/***/ ((module) => {

// Exports
module.exports = {
	"result": "Result_result__fZleX",
	"title": "Result_title__B0QhW",
	"statics": "Result_statics__VkYpF"
};


/***/ }),

/***/ 1055:
/***/ ((module) => {

// Exports
module.exports = {
	"Statistics": "Statistics_Statistics__IIhbY",
	"value": "Statistics_value__eJF1L",
	"label": "Statistics_label__NCcso"
};


/***/ }),

/***/ 9809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Result)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
// EXTERNAL MODULE: ./styles/Statistics.module.css
var Statistics_module = __webpack_require__(1055);
var Statistics_module_default = /*#__PURE__*/__webpack_require__.n(Statistics_module);
;// CONCATENATED MODULE: ./components/Statistics.tsx


function Statistics(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Statistics_module_default()).statistics,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Statistics_module_default()).value,
                style: {
                    backgroundColor: props.colorBg ?? '#FDD607',
                    color: props.colorFont ?? '#333'
                },
                children: props.value
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Statistics_module_default()).label,
                children: props.text
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/Result.module.css
var Result_module = __webpack_require__(8534);
var Result_module_default = /*#__PURE__*/__webpack_require__.n(Result_module);
;// CONCATENATED MODULE: ./pages/result.tsx





function Result() {
    const router = (0,router_.useRouter)();
    const total = +router.query.total;
    const corrects = +router.query.corrects;
    const percents = Math.round(corrects / total * 100);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Result_module_default()).result,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Result_module_default()).title,
                children: "Resultado final"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Result_module_default()).statics,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Statistics, {
                        value: total,
                        text: "Perguntas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Statistics, {
                        value: corrects,
                        text: "Acertos",
                        colorBg: "#9CD2A4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Statistics, {
                        value: `${percents}%`,
                        text: "Percentual",
                        colorBg: "#DE6A33"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                href: "/",
                text: "Tentar novamente"
            })
        ]
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,570], () => (__webpack_exec__(9809)));
module.exports = __webpack_exports__;

})();