"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_MusicLabelDashboard_tsx",{

/***/ "./src/components/StrategyDisplay.tsx":
/*!********************************************!*\
  !*** ./src/components/StrategyDisplay.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"__barrel_optimize__?names=Download!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst StrategyDisplay = (param)=>{\n    let { strategy, isStreaming } = param;\n    _s();\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"StrategyDisplay.useEffect\": ()=>{\n            if (contentRef.current && isStreaming) {\n                contentRef.current.scrollIntoView({\n                    behavior: 'smooth',\n                    block: 'end'\n                });\n            }\n        }\n    }[\"StrategyDisplay.useEffect\"], [\n        strategy,\n        isStreaming\n    ]);\n    const formatStrategy = (text)=>{\n        const lines = text.split('data: ');\n        const content = lines.map((line)=>{\n            try {\n                const parsed = JSON.parse(line);\n                return parsed.content;\n            } catch (e) {\n                return '';\n            }\n        }).join('');\n        return content;\n    };\n    const handleDownload = ()=>{\n        const formattedText = formatStrategy(strategy).replace(/#{1,6} /g, '').replace(/\\*\\*/g, '').replace(/- /g, '• ').split('\\n').map((line)=>line.trim()).filter(Boolean).join('\\n\\n');\n        const blob = new Blob([\n            formattedText\n        ], {\n            type: 'text/plain'\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement('a');\n        a.href = url;\n        a.download = 'distribution-strategy.txt';\n        document.body.appendChild(a);\n        a.click();\n        document.body.removeChild(a);\n        URL.revokeObjectURL(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"bg-white/80 backdrop-blur-sm shadow-xl rounded-[25px] p-8\",\n        initial: {\n            opacity: 0,\n            x: 20\n        },\n        animate: {\n            opacity: 1,\n            x: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold\",\n                        children: [\n                            \"Generated Strategy \",\n                            isStreaming && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-600 animate-pulse\",\n                                children: \"•\"\n                            }, void 0, false, {\n                                fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 46\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleDownload,\n                        className: \"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700\",\n                        disabled: isStreaming,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Download, {\n                                size: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            \"Download\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose prose-slate max-w-none\",\n                ref: contentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        remarkPlugins: [\n                            remark_gfm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        ],\n                        components: {\n                            h1: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold my-4 text-gray-900\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            h2: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold my-3 text-gray-800\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            h3: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium my-2 text-gray-800\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            p: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"my-2 text-gray-700 leading-relaxed\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 32\n                                }, void 0);\n                            },\n                            ul: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-disc ml-4 my-2 space-y-1\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            ol: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    className: \"list-decimal ml-4 my-2 space-y-1\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            li: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-1 text-gray-700\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, void 0);\n                            },\n                            strong: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"font-semibold text-gray-900\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 37\n                                }, void 0);\n                            },\n                            em: (param)=>{\n                                let { ...props } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                                    className: \"italic text-gray-800\",\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 33\n                                }, void 0);\n                            }\n                        },\n                        children: formatStrategy(strategy)\n                    }, void 0, false, {\n                        fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    isStreaming && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 w-2 bg-blue-600 animate-pulse rounded-full ml-1 inline-block\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/afromusedigital/agentive/src/components/StrategyDisplay.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StrategyDisplay, \"4DWJwh4NdgM1uDLuR5KKKiIo21Q=\");\n_c = StrategyDisplay;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrategyDisplay);\nvar _c;\n$RefreshReg$(_c, \"StrategyDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTBDLEdBQUdpQixLQUFLOzs7Ozs7OzRCQUNwRkUsR0FBRztvQ0FBQyxFQUFDLEdBQUdGLE9BQU07cURBQUssOERBQUNFO29DQUFFbkIsV0FBVTtvQ0FBc0MsR0FBR2lCLEtBQUs7Ozs7Ozs7NEJBQzlFRyxJQUFJO29DQUFDLEVBQUMsR0FBR0gsT0FBTTtxREFBSyw4REFBQ0c7b0NBQUdwQixXQUFVO29DQUFpQyxHQUFHaUIsS0FBSzs7Ozs7Ozs0QkFDM0VJLElBQUk7b0NBQUMsRUFBQyxHQUFHSixPQUFNO3FEQUFLLDhEQUFDSTtvQ0FBR3JCLFdBQVU7b0NBQW9DLEdBQUdpQixLQUFLOzs7Ozs7OzRCQUM5RUssSUFBSTtvQ0FBQyxFQUFDLEdBQUdMLE9BQU07cURBQUssOERBQUNLO29DQUFHdEIsV0FBVTtvQ0FBc0IsR0FBR2lCLEtBQUs7Ozs7Ozs7NEJBQ2hFTSxRQUFRO29DQUFDLEVBQUMsR0FBR04sT0FBTTtxREFBSyw4REFBQ007b0NBQU92QixXQUFVO29DQUErQixHQUFHaUIsS0FBSzs7Ozs7Ozs0QkFDakZPLElBQUk7b0NBQUMsRUFBQyxHQUFHUCxPQUFNO3FEQUFLLDhEQUFDTztvQ0FBR3hCLFdBQVU7b0NBQXdCLEdBQUdpQixLQUFLOzs7Ozs7O3dCQUNwRTtrQ0FFQ25ELGVBQWVQOzs7Ozs7b0JBRWpCQyw2QkFDQyw4REFBQ3VDO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0F6Rk0xQztLQUFBQTtBQTJGTixpRUFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fmcm9tdXNlZGlnaXRhbC9hZ2VudGl2ZS9zcmMvY29tcG9uZW50cy9TdHJhdGVneURpc3BsYXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgRG93bmxvYWQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJztcblxuaW50ZXJmYWNlIFN0cmF0ZWd5RGlzcGxheVByb3BzIHtcbiAgc3RyYXRlZ3k6IHN0cmluZztcbiAgaXNTdHJlYW1pbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0cmF0ZWd5RGlzcGxheTogUmVhY3QuRkM8U3RyYXRlZ3lEaXNwbGF5UHJvcHM+ID0gKHsgc3RyYXRlZ3ksIGlzU3RyZWFtaW5nIH0pID0+IHtcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudFJlZi5jdXJyZW50ICYmIGlzU3RyZWFtaW5nKSB7XG4gICAgICBjb250ZW50UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnZW5kJyB9KTtcbiAgICB9XG4gIH0sIFtzdHJhdGVneSwgaXNTdHJlYW1pbmddKTtcblxuICBjb25zdCBmb3JtYXRTdHJhdGVneSA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnZGF0YTogJyk7XG4gICAgY29uc3QgY29udGVudCA9IGxpbmVzXG4gICAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UobGluZSk7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlZC5jb250ZW50O1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWRUZXh0ID0gZm9ybWF0U3RyYXRlZ3koc3RyYXRlZ3kpXG4gICAgICAucmVwbGFjZSgvI3sxLDZ9IC9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC9cXCpcXCovZywgJycpXG4gICAgICAucmVwbGFjZSgvLSAvZywgJ+KAoiAnKVxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJ1xcblxcbicpO1xuXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtmb3JtYXR0ZWRUZXh0XSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLmRvd25sb2FkID0gJ2Rpc3RyaWJ1dGlvbi1zdHJhdGVneS50eHQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgYS5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlLzgwIGJhY2tkcm9wLWJsdXItc20gc2hhZG93LXhsIHJvdW5kZWQtWzI1cHhdIHAtOFwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDIwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIEdlbmVyYXRlZCBTdHJhdGVneSB7aXNTdHJlYW1pbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBhbmltYXRlLXB1bHNlXCI+4oCiPC9zcGFuPn1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS03MDBcIlxuICAgICAgICAgIGRpc2FibGVkPXtpc1N0cmVhbWluZ31cbiAgICAgICAgPlxuICAgICAgICAgIDxEb3dubG9hZCBzaXplPXsxNn0gLz5cbiAgICAgICAgICBEb3dubG9hZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBwcm9zZS1zbGF0ZSBtYXgtdy1ub25lXCIgcmVmPXtjb250ZW50UmVmfT5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gXG4gICAgICAgICAgcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgaDE6ICh7Li4ucHJvcHN9KSA9PiA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTQgdGV4dC1ncmF5LTkwMFwiIHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICBoMjogKHsuLi5wcm9wc30pID0+IDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXktMyB0ZXh0LWdyYXktODAwXCIgey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIGgzOiAoey4uLnByb3BzfSkgPT4gPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbXktMiB0ZXh0LWdyYXktODAwXCIgey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIHA6ICh7Li4ucHJvcHN9KSA9PiA8cCBjbGFzc05hbWU9XCJteS0yIHRleHQtZ3JheS03MDAgbGVhZGluZy1yZWxheGVkXCIgey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIHVsOiAoey4uLnByb3BzfSkgPT4gPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBtbC00IG15LTIgc3BhY2UteS0xXCIgey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIG9sOiAoey4uLnByb3BzfSkgPT4gPG9sIGNsYXNzTmFtZT1cImxpc3QtZGVjaW1hbCBtbC00IG15LTIgc3BhY2UteS0xXCIgey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIGxpOiAoey4uLnByb3BzfSkgPT4gPGxpIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTcwMFwiIHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICBzdHJvbmc6ICh7Li4ucHJvcHN9KSA9PiA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiIHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICBlbTogKHsuLi5wcm9wc30pID0+IDxlbSBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC1ncmF5LTgwMFwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2Zvcm1hdFN0cmF0ZWd5KHN0cmF0ZWd5KX1cbiAgICAgICAgPC9SZWFjdE1hcmtkb3duPlxuICAgICAgICB7aXNTdHJlYW1pbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IHctMiBiZy1ibHVlLTYwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtZnVsbCBtbC0xIGlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHJhdGVneURpc3BsYXk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJEb3dubG9hZCIsIlJlYWN0TWFya2Rvd24iLCJyZW1hcmtHZm0iLCJTdHJhdGVneURpc3BsYXkiLCJzdHJhdGVneSIsImlzU3RyZWFtaW5nIiwiY29udGVudFJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJmb3JtYXRTdHJhdGVneSIsInRleHQiLCJsaW5lcyIsInNwbGl0IiwiY29udGVudCIsIm1hcCIsImxpbmUiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJqb2luIiwiaGFuZGxlRG93bmxvYWQiLCJmb3JtYXR0ZWRUZXh0IiwicmVwbGFjZSIsInRyaW0iLCJmaWx0ZXIiLCJCb29sZWFuIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJyZXZva2VPYmplY3RVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaDIiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic2l6ZSIsInJlZiIsInJlbWFya1BsdWdpbnMiLCJjb21wb25lbnRzIiwiaDEiLCJwcm9wcyIsImgzIiwicCIsInVsIiwib2wiLCJsaSIsInN0cm9uZyIsImVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/StrategyDisplay.tsx\n"));

/***/ })

});