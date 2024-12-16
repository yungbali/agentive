/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/aws-config.ts":
/*!***************************!*\
  !*** ./src/aws-config.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ \"aws-amplify\");\n/* harmony import */ var _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../amplify_outputs.json */ \"./amplify_outputs.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([aws_amplify__WEBPACK_IMPORTED_MODULE_0__]);\naws_amplify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_0__.Amplify.configure({\n    Auth: {\n        Cognito: {\n            userPoolId: _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__.auth.user_pool_id,\n            userPoolClientId: _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__.auth.user_pool_client_id,\n            identityPoolId: _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__.auth.identity_pool_id,\n            signUpVerificationMethod: \"code\",\n            loginWith: {\n                email: true\n            }\n        }\n    },\n    Storage: {\n        S3: {\n            bucket: _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__.storage.bucket_name,\n            region: _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_1__.storage.aws_region\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aws_amplify__WEBPACK_IMPORTED_MODULE_0__.Amplify);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXdzLWNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDTztBQUU3Q0EsZ0RBQU9BLENBQUNFLFNBQVMsQ0FBQztJQUNoQkMsTUFBTTtRQUNKQyxTQUFTO1lBQ1BDLFlBQVlKLG9FQUF3QjtZQUNwQ08sa0JBQWtCUCwyRUFBK0I7WUFDakRTLGdCQUFnQlQsd0VBQTRCO1lBQzVDVywwQkFBMEI7WUFDMUJDLFdBQVc7Z0JBQ1RDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFDQUMsU0FBUztRQUNQQyxJQUFJO1lBQ0ZDLFFBQVFoQixzRUFBMEI7WUFDbENtQixRQUFRbkIscUVBQXlCO1FBQ25DO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlRCxnREFBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZW50aXZlLy4vc3JjL2F3cy1jb25maWcudHM/MmUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnYXdzLWFtcGxpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9hbXBsaWZ5X291dHB1dHMuanNvbic7XG5cbkFtcGxpZnkuY29uZmlndXJlKHtcbiAgQXV0aDoge1xuICAgIENvZ25pdG86IHtcbiAgICAgIHVzZXJQb29sSWQ6IGNvbmZpZy5hdXRoLnVzZXJfcG9vbF9pZCxcbiAgICAgIHVzZXJQb29sQ2xpZW50SWQ6IGNvbmZpZy5hdXRoLnVzZXJfcG9vbF9jbGllbnRfaWQsXG4gICAgICBpZGVudGl0eVBvb2xJZDogY29uZmlnLmF1dGguaWRlbnRpdHlfcG9vbF9pZCxcbiAgICAgIHNpZ25VcFZlcmlmaWNhdGlvbk1ldGhvZDogJ2NvZGUnLFxuICAgICAgbG9naW5XaXRoOiB7XG4gICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBTdG9yYWdlOiB7XG4gICAgUzM6IHtcbiAgICAgIGJ1Y2tldDogY29uZmlnLnN0b3JhZ2UuYnVja2V0X25hbWUsXG4gICAgICByZWdpb246IGNvbmZpZy5zdG9yYWdlLmF3c19yZWdpb25cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBbXBsaWZ5OyAiXSwibmFtZXMiOlsiQW1wbGlmeSIsImNvbmZpZyIsImNvbmZpZ3VyZSIsIkF1dGgiLCJDb2duaXRvIiwidXNlclBvb2xJZCIsImF1dGgiLCJ1c2VyX3Bvb2xfaWQiLCJ1c2VyUG9vbENsaWVudElkIiwidXNlcl9wb29sX2NsaWVudF9pZCIsImlkZW50aXR5UG9vbElkIiwiaWRlbnRpdHlfcG9vbF9pZCIsInNpZ25VcFZlcmlmaWNhdGlvbk1ldGhvZCIsImxvZ2luV2l0aCIsImVtYWlsIiwiU3RvcmFnZSIsIlMzIiwiYnVja2V0Iiwic3RvcmFnZSIsImJ1Y2tldF9uYW1lIiwicmVnaW9uIiwiYXdzX3JlZ2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aws-config.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"@aws-amplify/ui-react\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/ui-react/styles.css */ \"./node_modules/@aws-amplify/ui-react/dist/styles.css\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _aws_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aws-config */ \"./src/aws-config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_1__, _aws_config__WEBPACK_IMPORTED_MODULE_4__]);\n([_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_1__, _aws_config__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_1__.Authenticator, {\n        children: ({ signOut, user })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50\",\n                children: [\n                    user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 bg-white shadow-sm flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Welcome, \",\n                                    user.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: signOut,\n                                className: \"px-4 py-2 text-sm text-red-600 hover:text-red-700\",\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afromusedigital/agentive/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNzRDtBQUNaO0FBQ1g7QUFFUjtBQUV2QixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFLDhEQUFDSCxnRUFBYUE7a0JBQ1gsQ0FBQyxFQUFFSSxPQUFPLEVBQUVDLElBQUksRUFBRSxpQkFDakIsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFDWkYsc0JBQ0MsOERBQUNDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7O29DQUFLO29DQUFVSCxLQUFLSSxRQUFROzs7Ozs7OzBDQUM3Qiw4REFBQ0M7Z0NBQ0NDLFNBQVNQO2dDQUNURyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNMO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VudGl2ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFtcGxpZnkgfSBmcm9tICdhd3MtYW1wbGlmeSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L3VpLXJlYWN0JztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L3VpLXJlYWN0L3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAnLi4vYXdzLWNvbmZpZyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aGVudGljYXRvcj5cbiAgICAgIHsoeyBzaWduT3V0LCB1c2VyIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ibHVlLTUwIHRvLWluZGlnby01MFwiPlxuICAgICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHNoYWRvdy1zbSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+V2VsY29tZSwge3VzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gT3V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0F1dGhlbnRpY2F0b3I+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0b3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNpZ25PdXQiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInVzZXJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@aws-amplify/ui-react":
/*!****************************************!*\
  !*** external "@aws-amplify/ui-react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@aws-amplify/ui-react");;

/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("aws-amplify");;

/***/ }),

/***/ "./amplify_outputs.json":
/*!******************************!*\
  !*** ./amplify_outputs.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"auth":{"user_pool_id":"us-east-1_oT2mcw6f6","aws_region":"us-east-1","user_pool_client_id":"633s8tto00ek9f400adraku0mu","identity_pool_id":"us-east-1:e295b221-3d50-4d19-8827-023ecf3c713a","mfa_methods":[],"standard_required_attributes":["email"],"username_attributes":["email"],"user_verification_types":["email"],"groups":[],"mfa_configuration":"NONE","password_policy":{"min_length":8,"require_lowercase":true,"require_numbers":true,"require_symbols":true,"require_uppercase":true},"unauthenticated_identities_enabled":true},"data":{"url":"https://oox737x2czh47dqcwc6rr4a7vi.appsync-api.us-east-1.amazonaws.com/graphql","aws_region":"us-east-1","api_key":"da2-wurc6kwxrrf6hitipmlcyrrape","default_authorization_type":"AMAZON_COGNITO_USER_POOLS","authorization_types":["API_KEY","AWS_IAM"],"model_introspection":{"version":1,"models":{"MusicProject":{"name":"MusicProject","fields":{"id":{"name":"id","isArray":false,"type":"ID","isRequired":true,"attributes":[]},"artistName":{"name":"artistName","isArray":false,"type":"String","isRequired":false,"attributes":[]},"trackTitle":{"name":"trackTitle","isArray":false,"type":"String","isRequired":false,"attributes":[]},"genre":{"name":"genre","isArray":false,"type":"String","isRequired":false,"attributes":[]},"releaseDate":{"name":"releaseDate","isArray":false,"type":"String","isRequired":false,"attributes":[]},"marketingBudget":{"name":"marketingBudget","isArray":false,"type":"Float","isRequired":false,"attributes":[]},"distributionPlatforms":{"name":"distributionPlatforms","isArray":true,"type":"String","isRequired":false,"attributes":[],"isArrayNullable":true},"strategy":{"name":"strategy","isArray":false,"type":"String","isRequired":false,"attributes":[]},"userId":{"name":"userId","isArray":false,"type":"String","isRequired":false,"attributes":[]},"status":{"name":"status","isArray":false,"type":{"enum":"MusicProjectStatus"},"isRequired":false,"attributes":[]},"createdAt":{"name":"createdAt","isArray":false,"type":"AWSDateTime","isRequired":false,"attributes":[]},"updatedAt":{"name":"updatedAt","isArray":false,"type":"AWSDateTime","isRequired":false,"attributes":[]}},"syncable":true,"pluralName":"MusicProjects","attributes":[{"type":"model","properties":{}},{"type":"auth","properties":{"rules":[{"provider":"userPools","ownerField":"owner","allow":"owner","operations":["create","update","delete","read"],"identityClaim":"cognito:username"},{"allow":"public","provider":"apiKey","operations":["read"]}]}}],"primaryKeyInfo":{"isCustomPrimaryKey":false,"primaryKeyFieldName":"id","sortKeyFieldNames":[]}}},"enums":{"MusicProjectStatus":{"name":"MusicProjectStatus","values":["draft","active","completed"]}},"nonModels":{}}},"storage":{"aws_region":"us-east-1","bucket_name":"amplify-agentive-afromuse-musicfilesbucket31701bbf-fukssutkix5z","buckets":[{"name":"musicfiles","bucket_name":"amplify-agentive-afromuse-musicfilesbucket31701bbf-fukssutkix5z","aws_region":"us-east-1","paths":{"private/${cognito-identity.amazonaws.com:sub}/*":{"authenticated":["get","list","write","delete"]},"protected/*":{"authenticated":["get","list","write","delete"],"guest":["get","list"]},"public/*":{"guest":["get","list"],"authenticated":["get","list","write","delete"]}}}]},"version":"1.3"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@aws-amplify"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();