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

/***/ "./src/data/context/DataBaseContext.tsx":
/*!**********************************************!*\
  !*** ./src/data/context/DataBaseContext.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataBaseProvider\": () => (/* binding */ DataBaseProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase/config */ \"./src/firebase/config.tsx\");\n\n\n\nconst DbContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst create = async (quiz)=>{\n    await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").add(quiz);\n};\nconst update = async (id)=>{};\nconst deleteQuiz = async (quiz)=>{\n    console.log(quiz);\n    await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").doc(quiz._id).delete();\n};\nconst list = async ()=>{\n    const snapshot = await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").get();\n    console.log(snapshot.docs);\n    const quiz = snapshot.docs.map((doc)=>({\n            _id: doc.id,\n            ...doc.data()\n        }));\n    return quiz;\n};\nconst getQuizById = async (id)=>{\n    const snapshot = await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").get();\n    console.log(snapshot.docs);\n    const quiz = snapshot.docs.map((doc)=>({\n            _id: doc.id,\n            ...doc.data()\n        }));\n    return quiz;\n};\nfunction DataBaseProvider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DbContext.Provider, {\n        value: {\n            create,\n            update,\n            list,\n            getQuizById,\n            deleteQuiz\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/src/data/context/DataBaseContext.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DbContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9jb250ZXh0L0RhdGFCYXNlQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDQztBQWF2QyxNQUFNRSwwQkFBWUYsb0RBQWFBLENBQWtCLENBQUM7QUFFbEQsTUFBTUcsU0FBUyxPQUFPQyxPQUFlO0lBQ25DLE1BQU1ILG1FQUFhLENBQUMsUUFBUUssR0FBRyxDQUFDRjtBQUNsQztBQUVBLE1BQU1HLFNBQVMsT0FBT0MsS0FBZSxDQUFDO0FBRXRDLE1BQU1DLGFBQWEsT0FBT0wsT0FBYztJQUN0Q00sUUFBUUMsR0FBRyxDQUFDUDtJQUNaLE1BQU1ILG1FQUFhLENBQUMsUUFBUVcsR0FBRyxDQUFDUixLQUFLUyxHQUFHLEVBQUVDLE1BQU07QUFDbEQ7QUFFQSxNQUFNQyxPQUFPLFVBQVk7SUFDdkIsTUFBTUMsV0FBVyxNQUFNZixtRUFBYSxDQUFDLFFBQVFnQixHQUFHO0lBQ2hEUCxRQUFRQyxHQUFHLENBQUNLLFNBQVNFLElBQUk7SUFDekIsTUFBTWQsT0FBT1ksU0FBU0UsSUFBSSxDQUFDQyxHQUFHLENBQUNQLENBQUFBLE1BQzdCO1lBQUNDLEtBQUtELElBQUlKLEVBQUU7WUFBRSxHQUFHSSxJQUFJUSxJQUFJLEVBQUU7UUFBQTtJQUU3QixPQUFPaEI7QUFDVDtBQUVBLE1BQU1pQixjQUFjLE9BQU9iLEtBQWU7SUFDeEMsTUFBTVEsV0FBVyxNQUFNZixtRUFBYSxDQUFDLFFBQVFnQixHQUFHO0lBQ2hEUCxRQUFRQyxHQUFHLENBQUNLLFNBQVNFLElBQUk7SUFDekIsTUFBTWQsT0FBT1ksU0FBU0UsSUFBSSxDQUFDQyxHQUFHLENBQUNQLENBQUFBLE1BQzdCO1lBQUNDLEtBQUtELElBQUlKLEVBQUU7WUFBRSxHQUFHSSxJQUFJUSxJQUFJLEVBQUU7UUFBQTtJQUU3QixPQUFPaEI7QUFDVDtBQUVPLFNBQVNrQixpQkFBaUJDLEtBQUssRUFBRTtJQUN0QyxxQkFDRSw4REFBQ3JCLFVBQVVzQixRQUFRO1FBQ2pCQyxPQUFPO1lBQ0x0QjtZQUNBSTtZQUNBUTtZQUNBTTtZQUNBWjtRQUNGO2tCQUVDYyxNQUFNRyxRQUFROzs7Ozs7QUFHckIsQ0FBQztBQUVELGlFQUFleEIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXotbmV4dGpzLy4vc3JjL2RhdGEvY29udGV4dC9EYXRhQmFzZUNvbnRleHQudHN4PzBlODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi9maXJlYmFzZS9jb25maWdcIjtcbmltcG9ydCBRdWVzdGFvTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL3F1ZXN0YW9cIjtcbmltcG9ydCB7IFF1aXogfSBmcm9tIFwiLi4vUXVpei5tb2RlbFwiO1xuXG5pbnRlcmZhY2UgSURiQ29udGV4dFByb3BzIHtcbiAgZGF0YT86IGFueTtcbiAgY3JlYXRlPzogKHF1aXo/OiBRdWl6KSA9PiBQcm9taXNlPHZvaWQ+O1xuICB1cGRhdGU/OiAoaWQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgbGlzdD86ICgpID0+IHZvaWQ7XG4gIGdldFF1aXpCeUlkPzogKGlkOiBudW1iZXIpID0+IHZvaWRcbiAgZGVsZXRlUXVpej86IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5jb25zdCBEYkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElEYkNvbnRleHRQcm9wcz4oe30pO1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAocXVpejogUXVpeikgPT4ge1xuICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicXVpelwiKS5hZGQocXVpeik7XG59O1xuXG5jb25zdCB1cGRhdGUgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge307XG5cbmNvbnN0IGRlbGV0ZVF1aXogPSBhc3luYyAocXVpejogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1aXopXG4gIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJxdWl6XCIpLmRvYyhxdWl6Ll9pZCkuZGVsZXRlKCk7XG59O1xuXG5jb25zdCBsaXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJxdWl6XCIpLmdldCgpO1xuICBjb25zb2xlLmxvZyhzbmFwc2hvdC5kb2NzKVxuICBjb25zdCBxdWl6ID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IChcbiAgICB7X2lkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCl9XG4gICAgKSk7XG4gIHJldHVybiBxdWl6O1xufTtcblxuY29uc3QgZ2V0UXVpekJ5SWQgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJxdWl6XCIpLmdldCgpO1xuICBjb25zb2xlLmxvZyhzbmFwc2hvdC5kb2NzKVxuICBjb25zdCBxdWl6ID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IChcbiAgICB7X2lkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCl9XG4gICAgKSk7XG4gIHJldHVybiBxdWl6O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0YUJhc2VQcm92aWRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxEYkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgdXBkYXRlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBnZXRRdWl6QnlJZCxcbiAgICAgICAgZGVsZXRlUXVpeixcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvRGJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsImRiIiwiRGJDb250ZXh0IiwiY3JlYXRlIiwicXVpeiIsImNvbGxlY3Rpb24iLCJhZGQiLCJ1cGRhdGUiLCJpZCIsImRlbGV0ZVF1aXoiLCJjb25zb2xlIiwibG9nIiwiZG9jIiwiX2lkIiwiZGVsZXRlIiwibGlzdCIsInNuYXBzaG90IiwiZ2V0IiwiZG9jcyIsIm1hcCIsImRhdGEiLCJnZXRRdWl6QnlJZCIsIkRhdGFCYXNlUHJvdmlkZXIiLCJwcm9wcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/context/DataBaseContext.tsx\n");

/***/ }),

/***/ "./src/data/context/DataTransferContext.tsx":
/*!**************************************************!*\
  !*** ./src/data/context/DataTransferContext.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataTransferProvider\": () => (/* binding */ DataTransferProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransferContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction DataTransferProvider(props) {\n    const [questoes, setQuestoes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function sendData(questao) {\n        setQuestoes([\n            ...questoes,\n            questao\n        ]);\n    }\n    function clearList() {\n        setQuestoes([]);\n    }\n    function deleteItem(id) {\n        let newQuestions = questoes.filter((questao)=>questao.id !== id);\n        setQuestoes(newQuestions);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransferContext.Provider, {\n        value: {\n            questoes,\n            sendData,\n            clearList,\n            deleteItem\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/src/data/context/DataTransferContext.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9jb250ZXh0L0RhdGFUcmFuc2ZlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFTaEQsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBaUIsQ0FBQztBQUVoRCxTQUFTRyxxQkFBcUJDLEtBQUssRUFBRTtJQUMxQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVEsRUFBRTtJQUVsRCxTQUFTTSxTQUFVQyxPQUFZLEVBQUM7UUFDOUJGLFlBQVk7ZUFBSUQ7WUFBVUc7U0FBUTtJQUNwQztJQUVBLFNBQVNDLFlBQVk7UUFDakJILFlBQVksRUFBRTtJQUNsQjtJQUVBLFNBQVNJLFdBQVdDLEVBQVUsRUFBRTtRQUM5QixJQUFJQyxlQUFlUCxTQUFTUSxNQUFNLENBQUNMLENBQUFBLFVBQVdBLFFBQVFHLEVBQUUsS0FBS0E7UUFDN0RMLFlBQVlNO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1YsZ0JBQWdCWSxRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0xWO1lBQ0FFO1lBQ0FFO1lBQ0FDO1FBQ0Y7a0JBRUNOLE1BQU1ZLFFBQVE7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVkLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6LW5leHRqcy8uL3NyYy9kYXRhL2NvbnRleHQvRGF0YVRyYW5zZmVyQ29udGV4dC50c3g/MTRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0YW9Nb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWwvcXVlc3Rhb1wiO1xuXG5pbnRlcmZhY2UgSVRyYW5zZmVyUHJvcHMge1xuICBxdWVzdG9lcz86IGFueTtcbiAgc2VuZERhdGE/OiAoZGF0YTogYW55KSA9PiB2b2lkO1xuICBjbGVhckxpc3Q/OiAoKSA9PiB2b2lkO1xuICBkZWxldGVJdGVtPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5jb25zdCBUcmFuc2ZlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElUcmFuc2ZlclByb3BzPih7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRhVHJhbnNmZXJQcm92aWRlcihwcm9wcykge1xuICBjb25zdCBbcXVlc3RvZXMsIHNldFF1ZXN0b2VzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG5cbiAgZnVuY3Rpb24gc2VuZERhdGEgKHF1ZXN0YW86IGFueSl7ICAgIFxuICAgIHNldFF1ZXN0b2VzKFsuLi5xdWVzdG9lcywgcXVlc3Rhb10pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNsZWFyTGlzdCgpIHtcbiAgICAgIHNldFF1ZXN0b2VzKFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQ6IG51bWJlcikge1xuICAgIGxldCBuZXdRdWVzdGlvbnMgPSBxdWVzdG9lcy5maWx0ZXIocXVlc3RhbyA9PiBxdWVzdGFvLmlkICE9PSBpZCk7XG4gICAgc2V0UXVlc3RvZXMobmV3UXVlc3Rpb25zKTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNmZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBxdWVzdG9lcyxcbiAgICAgICAgc2VuZERhdGEsXG4gICAgICAgIGNsZWFyTGlzdCxcbiAgICAgICAgZGVsZXRlSXRlbVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9UcmFuc2ZlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJUcmFuc2ZlckNvbnRleHQiLCJEYXRhVHJhbnNmZXJQcm92aWRlciIsInByb3BzIiwicXVlc3RvZXMiLCJzZXRRdWVzdG9lcyIsInNlbmREYXRhIiwicXVlc3RhbyIsImNsZWFyTGlzdCIsImRlbGV0ZUl0ZW0iLCJpZCIsIm5ld1F1ZXN0aW9ucyIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/context/DataTransferContext.tsx\n");

/***/ }),

/***/ "./src/firebase/config.tsx":
/*!*********************************!*\
  !*** ./src/firebase/config.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDveNTG0q79fMK76n_uIx-e8s0AWwgsdRo\",\n    authDomain: \"quiz-wtech.firebaseapp.com\",\n    projectId: \"quiz-wtech\",\n    storageBucket: \"quiz-wtech.appspot.com\",\n    messagingSenderId: \"816204686855\",\n    appId: \"1:816204686855:web:09d836d8210ea00a66eca2\"\n};\n// Initialize Firebase\nfunction iniciaFirebase() {\n    if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n        return firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n    }\n}\nconst db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore(iniciaFirebase());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvY29uZmlnLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFHL0IsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsTUFBTUMsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsc0JBQXNCO0FBRXRCLFNBQVNDLGlCQUFpQjtJQUN4QixJQUFJLENBQUNSLDZEQUFvQixFQUFFO1FBQ3pCLE9BQU9BLDZEQUFzQixDQUFDQztJQUNoQyxDQUFDO0FBQ0g7QUFDQSxNQUFNVyxLQUFLWix5REFBa0IsQ0FBQ1E7QUFFOUIsaUVBQWVJLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6LW5leHRqcy8uL3NyYy9maXJlYmFzZS9jb25maWcudHN4P2FhOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiXG5cblxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUR2ZU5URzBxNzlmTUs3Nm5fdUl4LWU4czBBV3dnc2RSb1wiLFxuICBhdXRoRG9tYWluOiBcInF1aXotd3RlY2guZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJxdWl6LXd0ZWNoXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicXVpei13dGVjaC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MTYyMDQ2ODY4NTVcIixcbiAgYXBwSWQ6IFwiMTo4MTYyMDQ2ODY4NTU6d2ViOjA5ZDgzNmQ4MjEwZWEwMGE2NmVjYTJcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuXG5mdW5jdGlvbiBpbmljaWFGaXJlYmFzZSgpIHtcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIHJldHVybiBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgfVxufVxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoaW5pY2lhRmlyZWJhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZGI7Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJpbmljaWFGaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/config.tsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_context_DataTransferContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/context/DataTransferContext */ \"./src/data/context/DataTransferContext.tsx\");\n/* harmony import */ var _data_context_DataBaseContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/context/DataBaseContext */ \"./src/data/context/DataBaseContext.tsx\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_DataBaseContext__WEBPACK_IMPORTED_MODULE_4__.DataBaseProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_DataTransferContext__WEBPACK_IMPORTED_MODULE_3__.DataTransferProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/src/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/src/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/src/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0c7QUFDeUM7QUFDUjtBQUVuRSxTQUFTRSxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNILDJFQUFnQkE7a0JBQ2YsNEVBQUNELG1GQUFvQkE7c0JBQ25CLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6LW5leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IERhdGFUcmFuc2ZlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2RhdGEvY29udGV4dC9EYXRhVHJhbnNmZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBEYXRhQmFzZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2RhdGEvY29udGV4dC9EYXRhQmFzZUNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPERhdGFCYXNlUHJvdmlkZXI+XG4gICAgICA8RGF0YVRyYW5zZmVyUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvRGF0YVRyYW5zZmVyUHJvdmlkZXI+XG4gICAgPC9EYXRhQmFzZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJEYXRhVHJhbnNmZXJQcm92aWRlciIsIkRhdGFCYXNlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();