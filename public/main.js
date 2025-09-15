/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://base-webpack/./node_modules/@fortawesome/fontawesome-free/css/all.css?\n}");

/***/ }),

/***/ "./src/components/IdeaForm.js":
/*!************************************!*\
  !*** ./src/components/IdeaForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_IdeasApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/IdeasApi */ \"./src/services/IdeasApi.js\");\n/* harmony import */ var _IdealList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdealList */ \"./src/components/IdealList.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar IdeaForm = /*#__PURE__*/function () {\n  function IdeaForm() {\n    _classCallCheck(this, IdeaForm);\n    this._formModal = document.querySelector(\"#form-modal\");\n    this.ideaList = new _IdealList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n  return _createClass(IdeaForm, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      this._form.addEventListener(\"submit\", this.handleSubmit.bind(this));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function () {\n      var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {\n        var idea, newIdea, res;\n        return _regenerator().w(function (_context) {\n          while (1) switch (_context.n) {\n            case 0:\n              if (!(!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value)) {\n                _context.n = 1;\n                break;\n              }\n              alert(\"Please enter all fields\");\n              return _context.a(2);\n            case 1:\n              // Save user to local storage\n              localStorage.setItem(\"username\", this._form.elements.username.value);\n              e.preventDefault();\n              idea = {\n                text: this._form.elements.text.value,\n                tag: this._form.elements.tag.value,\n                username: this._form.elements.username.value\n              }; // add to server\n              _context.n = 2;\n              return _services_IdeasApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createIdea(idea);\n            case 2:\n              newIdea = _context.v;\n              _context.n = 3;\n              return newIdea.json();\n            case 3:\n              res = _context.v;\n              // add to front end\n              this.ideaList.addIdeaToList(res.data);\n\n              // Clear input fields\n              this._form.elements.text.value = \"\";\n              this._form.elements.tag.value = \"\";\n              this._form.elements.username.value = \"\";\n              this.render();\n\n              // triggers any listeners with the Event object\n              document.dispatchEvent(new Event(\"closeModal\"));\n            case 4:\n              return _context.a(2);\n          }\n        }, _callee, this);\n      }));\n      function handleSubmit(_x) {\n        return _handleSubmit.apply(this, arguments);\n      }\n      return handleSubmit;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      this._formModal.innerHTML = \"\\n        <form id=\\\"idea-form\\\">\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"idea-text\\\">Enter a Username</label>\\n            <input type=\\\"text\\\" name=\\\"username\\\" id=\\\"username\\\" value=\\\"\".concat(localStorage.getItem(\"username\") ? localStorage.getItem(\"username\") : \"\", \"\\\"/>\\n          </div>\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"idea-text\\\">What's Your Idea?</label>\\n            <textarea name=\\\"text\\\" id=\\\"idea-text\\\"></textarea>\\n          </div>\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"tag\\\">Tag</label>\\n            <input type=\\\"text\\\" name=\\\"tag\\\" id=\\\"tag\\\" />\\n          </div>\\n          <button class=\\\"btn\\\" type=\\\"submit\\\" id=\\\"submit\\\">Submit</button>\\n        </form>\");\n      this._form = document.querySelector(\"#idea-form\");\n      this.addEventListeners();\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeaForm);\n\n//# sourceURL=webpack://base-webpack/./src/components/IdeaForm.js?\n}");

/***/ }),

/***/ "./src/components/IdealList.js":
/*!*************************************!*\
  !*** ./src/components/IdealList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_IdeasApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/IdeasApi */ \"./src/services/IdeasApi.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// Import API service\n\nvar IdeaList = /*#__PURE__*/function () {\n  function IdeaList() {\n    _classCallCheck(this, IdeaList);\n    this.ideaListEl = document.querySelector(\"#idea-list\");\n    this.ideas = [];\n    this.getIdeas(); // call fetchAPI()\n    this.validTags = new Set();\n    this.validTags.add(\"technology\");\n    this.validTags.add(\"software\");\n    this.validTags.add(\"business\");\n    this.validTags.add(\"education\");\n    this.validTags.add(\"health\");\n    this.validTags.add(\"inventions\");\n  }\n  return _createClass(IdeaList, [{\n    key: \"addIdeaToList\",\n    value: function addIdeaToList(idea) {\n      this.ideas.push(idea);\n      this.render();\n    }\n  }, {\n    key: \"getIdeas\",\n    value: function getIdeas() {\n      var _this = this;\n      _services_IdeasApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIdeas().then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        _this.ideas = data.data;\n        _this.render();\n      });\n    }\n  }, {\n    key: \"getTagClass\",\n    value: function getTagClass(tag) {\n      tag = tag.toLowerCase();\n      var tagClass = \"\";\n      if (this.validTags.has(tag)) {\n        tagClass = \"tag-\".concat(tag);\n      } else {\n        tagClass = \"\";\n      }\n      return tagClass;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n      this.ideaListEl.innerHTML = this.ideas.map(function (idea) {\n        var tagClass = _this2.getTagClass(idea.tag);\n        return \"\\n               <div class=\\\"card\\\">\\n          <button class=\\\"delete\\\"><i class=\\\"fas fa-times\\\"></i></button>\\n          <h3>\\n            \".concat(idea.text, \"\\n          </h3>\\n          <p class=\\\"\").concat(tagClass, \" tag\\\">\").concat(idea.tag.toUpperCase(), \"</p>\\n          <p>\\n            Posted on <span class=\\\"date\\\">\").concat(idea.date, \"</span> by\\n            <span class=\\\"author\\\">\").concat(idea.username, \"</span>\\n          </p>\\n        </div>\\n        \");\n      }).join(\"\");\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeaList);\n\n//# sourceURL=webpack://base-webpack/./src/components/IdealList.js?\n}");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n    this._modal = document.querySelector(\"#modal\");\n    this._modalBtn = document.querySelector(\"#modal-btn\");\n    this.addEventListeners();\n  }\n  return _createClass(Modal, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n      this._modalBtn.addEventListener(\"click\", this.open.bind(this));\n      window.addEventListener(\"click\", this.outsideClick.bind(this));\n\n      // the document.dispatchEvent() will trigger this since it\n      // has a listener with \"closeModal\"\n      document.addEventListener(\"closeModal\", function () {\n        _this.close();\n      });\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this._modal.style.display = \"block\";\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this._modal.style.display = \"none\";\n    }\n  }, {\n    key: \"outsideClick\",\n    value: function outsideClick(e) {\n      if (e.target === this._modal) {\n        this.close();\n      }\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://base-webpack/./src/components/Modal.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://base-webpack/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_IdeaForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IdeaForm */ \"./src/components/IdeaForm.js\");\n/* harmony import */ var _components_IdealList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IdealList */ \"./src/components/IdealList.js\");\n/* harmony import */ var _services_IdeasApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/IdeasApi */ \"./src/services/IdeasApi.js\");\n\n\n\n\n\n\n\n// component created, cleaner and modular to edit\nnew _components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar ideaForm = new _components_IdeaForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nideaForm.render();\nnew _components_IdealList__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n// PLAYING WITH FETCH()\n\n// async function fetchData() {\n//   let assignItHere;\n//   IdeasApi.getIdeas()\n//     .then((res) => {\n//       return res.json();\n//     })\n//     .then((data) => {\n//       assignItHere = data.data; // should mutate with {data: {somedata}}\n//     });\n//   console.log(assignItHere); // should return with mutated value\n// }\n\n// fetchData();\n\n//# sourceURL=webpack://base-webpack/./src/index.js?\n}");

/***/ }),

/***/ "./src/services/IdeasApi.js":
/*!**********************************!*\
  !*** ./src/services/IdeasApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar IdeasApi = /*#__PURE__*/function () {\n  function IdeasApi() {\n    _classCallCheck(this, IdeasApi);\n    this.apiURL = \"http://localhost:5000/api/ideas\";\n  }\n  return _createClass(IdeasApi, [{\n    key: \"getIdeas\",\n    value: function getIdeas() {\n      return fetch(this.apiURL, {\n        method: \"GET\"\n      });\n    }\n  }, {\n    key: \"createIdea\",\n    value: function createIdea(data) {\n      return fetch(this.apiURL, {\n        method: \"POST\",\n        headers: {\n          \"Content-type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      });\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new IdeasApi());\n\n//# sourceURL=webpack://base-webpack/./src/services/IdeasApi.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;