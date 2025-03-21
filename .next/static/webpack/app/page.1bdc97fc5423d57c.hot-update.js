"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/contact.tsx":
/*!********************************!*\
  !*** ./components/contact.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-heading */ \"(app-client)/./components/section-heading.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/hooks */ \"(app-client)/./lib/hooks.ts\");\n/* harmony import */ var _actions_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/sendEmail */ \"(app-client)/./actions/sendEmail.ts\");\n/* harmony import */ var _submit_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit-btn */ \"(app-client)/./components/submit-btn.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Contact() {\n    _s();\n    const { ref } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView)(\"Contact\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.section, {\n        id: \"contact\",\n        ref: ref,\n        className: \"mb-20 sm:mb-28 w-[min(100%,38rem)] text-center\",\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Contact me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 -mt-6 dark:text-white/80\",\n                children: [\n                    \"Please contact me directly at\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"underline\",\n                        href: \"mailto:example@gmail.com\",\n                        children: \"info@gmail.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"or through this form.\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mt-10 flex flex-col dark:text-black\",\n                action: async (formData)=>{\n                    const { data, error } = await (0,_actions_sendEmail__WEBPACK_IMPORTED_MODULE_4__.sendEmail)(formData);\n                    if (error) {\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(error);\n                        return;\n                    }\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Email sent successfully!\");\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none\",\n                        name: \"senderEmail\",\n                        type: \"email\",\n                        required: true,\n                        maxLength: 500,\n                        placeholder: \"Your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none\",\n                        name: \"message\",\n                        placeholder: \"Your message\",\n                        required: true,\n                        maxLength: 5000\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_submit_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drobert\\\\App Development\\\\portfolio-website\\\\components\\\\contact.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9jb250YWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDcUI7QUFDUjtBQUNRO0FBQ0M7QUFDWDtBQUNEO0FBRXJCLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHTCw0REFBZ0JBLENBQUM7SUFFakMscUJBQ0UsOERBQUNELGlEQUFNQSxDQUFDTyxPQUFPO1FBQ2JDLElBQUc7UUFDSEYsS0FBS0E7UUFDTEcsV0FBVTtRQUNWQyxTQUFTO1lBQ1BDLFNBQVM7UUFDWDtRQUNBQyxhQUFhO1lBQ1hELFNBQVM7UUFDWDtRQUNBRSxZQUFZO1lBQ1ZDLFVBQVU7UUFDWjtRQUNBQyxVQUFVO1lBQ1JDLE1BQU07UUFDUjs7MEJBRUEsOERBQUNqQix3REFBY0E7MEJBQUM7Ozs7OzswQkFFaEIsOERBQUNrQjtnQkFBRVIsV0FBVTs7b0JBQXlDO29CQUN0QjtrQ0FDOUIsOERBQUNTO3dCQUFFVCxXQUFVO3dCQUFZVSxNQUFLO2tDQUEyQjs7Ozs7O29CQUVwRDtvQkFBSTs7Ozs7OzswQkFJWCw4REFBQ0M7Z0JBQ0NYLFdBQVU7Z0JBQ1ZZLFFBQVEsT0FBT0M7b0JBQ2IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU10Qiw2REFBU0EsQ0FBQ29CO29CQUV4QyxJQUFJRSxPQUFPO3dCQUNUcEIsdURBQUtBLENBQUNvQixLQUFLLENBQUNBO3dCQUNaO29CQUNGO29CQUVBcEIsdURBQUtBLENBQUNxQixPQUFPLENBQUM7Z0JBQ2hCOztrQ0FFQSw4REFBQ0M7d0JBQ0NqQixXQUFVO3dCQUNWa0IsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsUUFBUTt3QkFDUkMsV0FBVzt3QkFDWEMsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDQ3ZCLFdBQVU7d0JBQ1ZrQixNQUFLO3dCQUNMSSxhQUFZO3dCQUNaRixRQUFRO3dCQUNSQyxXQUFXOzs7Ozs7a0NBRWIsOERBQUMzQixtREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCO0dBL0R3QkU7O1FBQ05KLHdEQUFnQkE7OztLQURWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhY3QudHN4P2FlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tIFwiLi9zZWN0aW9uLWhlYWRpbmdcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VjdGlvbkluVmlldyB9IGZyb20gXCJAL2xpYi9ob29rc1wiO1xyXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tIFwiQC9hY3Rpb25zL3NlbmRFbWFpbFwiO1xyXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gXCIuL3N1Ym1pdC1idG5cIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgY29uc3QgeyByZWYgfSA9IHVzZVNlY3Rpb25JblZpZXcoXCJDb250YWN0XCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5zZWN0aW9uXHJcbiAgICAgIGlkPVwiY29udGFjdFwiXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9XCJtYi0yMCBzbTptYi0yOCB3LVttaW4oMTAwJSwzOHJlbSldIHRleHQtY2VudGVyXCJcclxuICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICB9fVxyXG4gICAgICB2aWV3cG9ydD17e1xyXG4gICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGluZz5Db250YWN0IG1lPC9TZWN0aW9uSGVhZGluZz5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgLW10LTYgZGFyazp0ZXh0LXdoaXRlLzgwXCI+XHJcbiAgICAgICAgUGxlYXNlIGNvbnRhY3QgbWUgZGlyZWN0bHkgYXR7XCIgXCJ9XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCIgaHJlZj1cIm1haWx0bzpleGFtcGxlQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgaW5mb0BnbWFpbC5jb21cclxuICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgIG9yIHRocm91Z2ggdGhpcyBmb3JtLlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZmxleC1jb2wgZGFyazp0ZXh0LWJsYWNrXCJcclxuICAgICAgICBhY3Rpb249e2FzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc2VuZEVtYWlsKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTE0IHB4LTQgcm91bmRlZC1sZyBib3JkZXJCbGFjayBkYXJrOmJnLXdoaXRlIGRhcms6Ymctb3BhY2l0eS04MCBkYXJrOmZvY3VzOmJnLW9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGRhcms6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIG5hbWU9XCJzZW5kZXJFbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG1heExlbmd0aD17NTAwfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC01MiBteS0zIHJvdW5kZWQtbGcgYm9yZGVyQmxhY2sgcC00IGRhcms6Ymctd2hpdGUgZGFyazpiZy1vcGFjaXR5LTgwIGRhcms6Zm9jdXM6Ymctb3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1hbGwgZGFyazpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG1heExlbmd0aD17NTAwMH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTdWJtaXRCdG4gLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlY3Rpb25IZWFkaW5nIiwibW90aW9uIiwidXNlU2VjdGlvbkluVmlldyIsInNlbmRFbWFpbCIsIlN1Ym1pdEJ0biIsInRvYXN0IiwiQ29udGFjdCIsInJlZiIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJwIiwiYSIsImhyZWYiLCJmb3JtIiwiYWN0aW9uIiwiZm9ybURhdGEiLCJkYXRhIiwiZXJyb3IiLCJzdWNjZXNzIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/contact.tsx\n"));

/***/ })

});