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

/***/ "./data/context/DataBaseContext.tsx":
/*!******************************************!*\
  !*** ./data/context/DataBaseContext.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataBaseProvider\": () => (/* binding */ DataBaseProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase/config */ \"./firebase/config.tsx\");\n\n\n\nconst DbContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst create = async (quiz)=>{\n    await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").add(quiz);\n};\nconst update = async (id)=>{};\nconst deleteQuiz = async (quiz)=>{\n    console.log(quiz);\n    await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").doc(quiz._id).delete();\n};\nconst list = async ()=>{\n    const snapshot = await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").get();\n    console.log(snapshot.docs);\n    const quiz = snapshot.docs.map((doc)=>({\n            _id: doc.id,\n            ...doc.data()\n        }));\n    return quiz;\n};\nconst getQuizById = async (id)=>{\n    const snapshot = await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"quiz\").get();\n    console.log(snapshot.docs);\n    const quiz = snapshot.docs.map((doc)=>({\n            _id: doc.id,\n            ...doc.data()\n        }));\n    return quiz;\n};\nfunction DataBaseProvider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DbContext.Provider, {\n        value: {\n            create,\n            update,\n            list,\n            getQuizById,\n            deleteQuiz\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/data/context/DataBaseContext.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DbContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRleHQvRGF0YUJhc2VDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNDO0FBYXZDLE1BQU1FLDBCQUFZRixvREFBYUEsQ0FBa0IsQ0FBQztBQUVsRCxNQUFNRyxTQUFTLE9BQU9DLE9BQWU7SUFDbkMsTUFBTUgsbUVBQWEsQ0FBQyxRQUFRSyxHQUFHLENBQUNGO0FBQ2xDO0FBRUEsTUFBTUcsU0FBUyxPQUFPQyxLQUFlLENBQUM7QUFFdEMsTUFBTUMsYUFBYSxPQUFPTCxPQUFjO0lBQ3RDTSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osTUFBTUgsbUVBQWEsQ0FBQyxRQUFRVyxHQUFHLENBQUNSLEtBQUtTLEdBQUcsRUFBRUMsTUFBTTtBQUNsRDtBQUVBLE1BQU1DLE9BQU8sVUFBWTtJQUN2QixNQUFNQyxXQUFXLE1BQU1mLG1FQUFhLENBQUMsUUFBUWdCLEdBQUc7SUFDaERQLFFBQVFDLEdBQUcsQ0FBQ0ssU0FBU0UsSUFBSTtJQUN6QixNQUFNZCxPQUFPWSxTQUFTRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1AsQ0FBQUEsTUFDN0I7WUFBQ0MsS0FBS0QsSUFBSUosRUFBRTtZQUFFLEdBQUdJLElBQUlRLElBQUksRUFBRTtRQUFBO0lBRTdCLE9BQU9oQjtBQUNUO0FBRUEsTUFBTWlCLGNBQWMsT0FBT2IsS0FBZTtJQUN4QyxNQUFNUSxXQUFXLE1BQU1mLG1FQUFhLENBQUMsUUFBUWdCLEdBQUc7SUFDaERQLFFBQVFDLEdBQUcsQ0FBQ0ssU0FBU0UsSUFBSTtJQUN6QixNQUFNZCxPQUFPWSxTQUFTRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1AsQ0FBQUEsTUFDN0I7WUFBQ0MsS0FBS0QsSUFBSUosRUFBRTtZQUFFLEdBQUdJLElBQUlRLElBQUksRUFBRTtRQUFBO0lBRTdCLE9BQU9oQjtBQUNUO0FBRU8sU0FBU2tCLGlCQUFpQkMsS0FBSyxFQUFFO0lBQ3RDLHFCQUNFLDhEQUFDckIsVUFBVXNCLFFBQVE7UUFDakJDLE9BQU87WUFDTHRCO1lBQ0FJO1lBQ0FRO1lBQ0FNO1lBQ0FaO1FBQ0Y7a0JBRUNjLE1BQU1HLFFBQVE7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWV4QixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei1uZXh0anMvLi9kYXRhL2NvbnRleHQvRGF0YUJhc2VDb250ZXh0LnRzeD8wYjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvY29uZmlnXCI7XG5pbXBvcnQgUXVlc3Rhb01vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9xdWVzdGFvXCI7XG5pbXBvcnQgeyBRdWl6IH0gZnJvbSBcIi4uL1F1aXoubW9kZWxcIjtcblxuaW50ZXJmYWNlIElEYkNvbnRleHRQcm9wcyB7XG4gIGRhdGE/OiBhbnk7XG4gIGNyZWF0ZT86IChxdWl6PzogUXVpeikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdXBkYXRlPzogKGlkOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG4gIGxpc3Q/OiAoKSA9PiB2b2lkO1xuICBnZXRRdWl6QnlJZD86IChpZDogbnVtYmVyKSA9PiB2b2lkXG4gIGRlbGV0ZVF1aXo/OiAoaWQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuY29uc3QgRGJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJRGJDb250ZXh0UHJvcHM+KHt9KTtcblxuY29uc3QgY3JlYXRlID0gYXN5bmMgKHF1aXo6IFF1aXopID0+IHtcbiAgYXdhaXQgZGIuY29sbGVjdGlvbihcInF1aXpcIikuYWRkKHF1aXopO1xufTtcblxuY29uc3QgdXBkYXRlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHt9O1xuXG5jb25zdCBkZWxldGVRdWl6ID0gYXN5bmMgKHF1aXo6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWl6KVxuICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicXVpelwiKS5kb2MocXVpei5faWQpLmRlbGV0ZSgpO1xufTtcblxuY29uc3QgbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicXVpelwiKS5nZXQoKTtcbiAgY29uc29sZS5sb2coc25hcHNob3QuZG9jcylcbiAgY29uc3QgcXVpeiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoXG4gICAge19pZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpfVxuICAgICkpO1xuICByZXR1cm4gcXVpejtcbn07XG5cbmNvbnN0IGdldFF1aXpCeUlkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicXVpelwiKS5nZXQoKTtcbiAgY29uc29sZS5sb2coc25hcHNob3QuZG9jcylcbiAgY29uc3QgcXVpeiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoXG4gICAge19pZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpfVxuICAgICkpO1xuICByZXR1cm4gcXVpejtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGFCYXNlUHJvdmlkZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RGJDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgZ2V0UXVpekJ5SWQsXG4gICAgICAgIGRlbGV0ZVF1aXosXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0RiQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGJDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJkYiIsIkRiQ29udGV4dCIsImNyZWF0ZSIsInF1aXoiLCJjb2xsZWN0aW9uIiwiYWRkIiwidXBkYXRlIiwiaWQiLCJkZWxldGVRdWl6IiwiY29uc29sZSIsImxvZyIsImRvYyIsIl9pZCIsImRlbGV0ZSIsImxpc3QiLCJzbmFwc2hvdCIsImdldCIsImRvY3MiLCJtYXAiLCJkYXRhIiwiZ2V0UXVpekJ5SWQiLCJEYXRhQmFzZVByb3ZpZGVyIiwicHJvcHMiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/context/DataBaseContext.tsx\n");

/***/ }),

/***/ "./data/context/DataTransferContext.tsx":
/*!**********************************************!*\
  !*** ./data/context/DataTransferContext.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataTransferProvider\": () => (/* binding */ DataTransferProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransferContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction DataTransferProvider(props) {\n    const [questoes, setQuestoes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function sendData(questao) {\n        setQuestoes([\n            ...questoes,\n            questao\n        ]);\n    }\n    function clearList() {\n        setQuestoes([]);\n    }\n    function deleteItem(id) {\n        let newQuestions = questoes.filter((questao)=>questao.id !== id);\n        setQuestoes(newQuestions);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransferContext.Provider, {\n        value: {\n            questoes,\n            sendData,\n            clearList,\n            deleteItem\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/data/context/DataTransferContext.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRleHQvRGF0YVRyYW5zZmVyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQVNoRCxNQUFNRSxnQ0FBa0JGLG9EQUFhQSxDQUFpQixDQUFDO0FBRWhELFNBQVNHLHFCQUFxQkMsS0FBSyxFQUFFO0lBQzFDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBUSxFQUFFO0lBRWxELFNBQVNNLFNBQVVDLE9BQVksRUFBQztRQUM5QkYsWUFBWTtlQUFJRDtZQUFVRztTQUFRO0lBQ3BDO0lBRUEsU0FBU0MsWUFBWTtRQUNqQkgsWUFBWSxFQUFFO0lBQ2xCO0lBRUEsU0FBU0ksV0FBV0MsRUFBVSxFQUFFO1FBQzlCLElBQUlDLGVBQWVQLFNBQVNRLE1BQU0sQ0FBQ0wsQ0FBQUEsVUFBV0EsUUFBUUcsRUFBRSxLQUFLQTtRQUM3REwsWUFBWU07SUFDZDtJQUVBLHFCQUNFLDhEQUFDVixnQkFBZ0JZLFFBQVE7UUFDdkJDLE9BQU87WUFDTFY7WUFDQUU7WUFDQUU7WUFDQUM7UUFDRjtrQkFFQ04sTUFBTVksUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFRCxpRUFBZWQsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXotbmV4dGpzLy4vZGF0YS9jb250ZXh0L0RhdGFUcmFuc2ZlckNvbnRleHQudHN4PzQ5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGFvTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL3F1ZXN0YW9cIjtcblxuaW50ZXJmYWNlIElUcmFuc2ZlclByb3BzIHtcbiAgcXVlc3RvZXM/OiBhbnk7XG4gIHNlbmREYXRhPzogKGRhdGE6IGFueSkgPT4gdm9pZDtcbiAgY2xlYXJMaXN0PzogKCkgPT4gdm9pZDtcbiAgZGVsZXRlSXRlbT86IChpZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuY29uc3QgVHJhbnNmZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVHJhbnNmZXJQcm9wcz4oe30pO1xuXG5leHBvcnQgZnVuY3Rpb24gRGF0YVRyYW5zZmVyUHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3QgW3F1ZXN0b2VzLCBzZXRRdWVzdG9lc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuXG4gIGZ1bmN0aW9uIHNlbmREYXRhIChxdWVzdGFvOiBhbnkpeyAgICBcbiAgICBzZXRRdWVzdG9lcyhbLi4ucXVlc3RvZXMsIHF1ZXN0YW9dKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjbGVhckxpc3QoKSB7XG4gICAgICBzZXRRdWVzdG9lcyhbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKGlkOiBudW1iZXIpIHtcbiAgICBsZXQgbmV3UXVlc3Rpb25zID0gcXVlc3RvZXMuZmlsdGVyKHF1ZXN0YW8gPT4gcXVlc3Rhby5pZCAhPT0gaWQpO1xuICAgIHNldFF1ZXN0b2VzKG5ld1F1ZXN0aW9ucyk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPFRyYW5zZmVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgcXVlc3RvZXMsXG4gICAgICAgIHNlbmREYXRhLFxuICAgICAgICBjbGVhckxpc3QsXG4gICAgICAgIGRlbGV0ZUl0ZW1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVHJhbnNmZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2ZlckNvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhbnNmZXJDb250ZXh0IiwiRGF0YVRyYW5zZmVyUHJvdmlkZXIiLCJwcm9wcyIsInF1ZXN0b2VzIiwic2V0UXVlc3RvZXMiLCJzZW5kRGF0YSIsInF1ZXN0YW8iLCJjbGVhckxpc3QiLCJkZWxldGVJdGVtIiwiaWQiLCJuZXdRdWVzdGlvbnMiLCJmaWx0ZXIiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/context/DataTransferContext.tsx\n");

/***/ }),

/***/ "./firebase/config.tsx":
/*!*****************************!*\
  !*** ./firebase/config.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDveNTG0q79fMK76n_uIx-e8s0AWwgsdRo\",\n    authDomain: \"quiz-wtech.firebaseapp.com\",\n    projectId: \"quiz-wtech\",\n    storageBucket: \"quiz-wtech.appspot.com\",\n    messagingSenderId: \"816204686855\",\n    appId: \"1:816204686855:web:09d836d8210ea00a66eca2\"\n};\n// Initialize Firebase\nfunction iniciaFirebase() {\n    if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n        return firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n    }\n}\nconst db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore(iniciaFirebase());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jb25maWcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUcvQiw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxNQUFNQyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFFQSxzQkFBc0I7QUFFdEIsU0FBU0MsaUJBQWlCO0lBQ3hCLElBQUksQ0FBQ1IsNkRBQW9CLEVBQUU7UUFDekIsT0FBT0EsNkRBQXNCLENBQUNDO0lBQ2hDLENBQUM7QUFDSDtBQUNBLE1BQU1XLEtBQUtaLHlEQUFrQixDQUFDUTtBQUU5QixpRUFBZUksRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXotbmV4dGpzLy4vZmlyZWJhc2UvY29uZmlnLnRzeD9jY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIlxuXG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEdmVOVEcwcTc5Zk1LNzZuX3VJeC1lOHMwQVd3Z3NkUm9cIixcbiAgYXV0aERvbWFpbjogXCJxdWl6LXd0ZWNoLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwicXVpei13dGVjaFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInF1aXotd3RlY2guYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODE2MjA0Njg2ODU1XCIsXG4gIGFwcElkOiBcIjE6ODE2MjA0Njg2ODU1OndlYjowOWQ4MzZkODIxMGVhMDBhNjZlY2EyXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcblxuZnVuY3Rpb24gaW5pY2lhRmlyZWJhc2UoKSB7XG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIH1cbn1cbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKGluaWNpYUZpcmViYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiaW5pY2lhRmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZmlyZXN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/config.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_context_DataTransferContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/context/DataTransferContext */ \"./data/context/DataTransferContext.tsx\");\n/* harmony import */ var _data_context_DataBaseContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/context/DataBaseContext */ \"./data/context/DataBaseContext.tsx\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_DataBaseContext__WEBPACK_IMPORTED_MODULE_4__.DataBaseProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_DataTransferContext__WEBPACK_IMPORTED_MODULE_3__.DataTransferProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wellersongomes/workspace/quiz-nextjs/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRztBQUN5QztBQUNSO0FBRW5FLFNBQVNFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsMkVBQWdCQTtrQkFDZiw0RUFBQ0QsbUZBQW9CQTtzQkFDbkIsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXotbmV4dGpzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgeyBEYXRhVHJhbnNmZXJQcm92aWRlciB9IGZyb20gXCIuLi9kYXRhL2NvbnRleHQvRGF0YVRyYW5zZmVyQ29udGV4dFwiO1xuaW1wb3J0IHsgRGF0YUJhc2VQcm92aWRlciB9IGZyb20gXCIuLi9kYXRhL2NvbnRleHQvRGF0YUJhc2VDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxEYXRhQmFzZVByb3ZpZGVyPlxuICAgICAgPERhdGFUcmFuc2ZlclByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0RhdGFUcmFuc2ZlclByb3ZpZGVyPlxuICAgIDwvRGF0YUJhc2VQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiRGF0YVRyYW5zZmVyUHJvdmlkZXIiLCJEYXRhQmFzZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();