/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/components/Modal.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
    this._modal = document.querySelector("#modal");
    this._modalBtn = document.querySelector("#modal-btn");
    this.addEventListeners();
  }
  return _createClass(Modal, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this._modalBtn.addEventListener("click", this.open.bind(this));
      window.addEventListener("click", this.outsideClick.bind(this));

      // the document.dispatchEvent() will trigger this since it
      // has a listener with "closeModal"
      document.addEventListener("closeModal", function () {
        _this.close();
      });
    }
  }, {
    key: "open",
    value: function open() {
      this._modal.style.display = "block";
    }
  }, {
    key: "close",
    value: function close() {
      this._modal.style.display = "none";
    }
  }, {
    key: "outsideClick",
    value: function outsideClick(e) {
      if (e.target === this._modal) {
        this.close();
      }
    }
  }]);
}();
/* harmony default export */ const components_Modal = (Modal);
;// ./src/services/IdeasApi.js
function IdeasApi_typeof(o) { "@babel/helpers - typeof"; return IdeasApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, IdeasApi_typeof(o); }
function IdeasApi_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function IdeasApi_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, IdeasApi_toPropertyKey(o.key), o); } }
function IdeasApi_createClass(e, r, t) { return r && IdeasApi_defineProperties(e.prototype, r), t && IdeasApi_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function IdeasApi_toPropertyKey(t) { var i = IdeasApi_toPrimitive(t, "string"); return "symbol" == IdeasApi_typeof(i) ? i : i + ""; }
function IdeasApi_toPrimitive(t, r) { if ("object" != IdeasApi_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != IdeasApi_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var IdeasApi = /*#__PURE__*/function () {
  function IdeasApi() {
    IdeasApi_classCallCheck(this, IdeasApi);
    // only for development
    // this.apiURL = "http://localhost:5000/api/ideas";

    // Set this to root/api/ideas during production
    // bundled JS will be on the same directory with backend
    // once deployed it should be domain/api/ideas
    this.apiURL = "/api/ideas";
  }
  return IdeasApi_createClass(IdeasApi, [{
    key: "getIdeas",
    value: function getIdeas() {
      return fetch(this.apiURL, {
        method: "GET"
      });
    }
  }, {
    key: "createIdea",
    value: function createIdea(data) {
      return fetch(this.apiURL, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "updateIdea",
    value: function updateIdea(id, data) {
      var url = "".concat(this.apiURL, "/").concat(id);
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "deleteIdea",
    value: function deleteIdea(id) {
      var url = "".concat(this.apiURL, "/").concat(id);
      var username = localStorage.getItem("username") ? localStorage.getItem("username") : "";
      console.log(username);
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username: username
        })
      });
    }
  }]);
}();
/* harmony default export */ const services_IdeasApi = (new IdeasApi());
;// ./src/components/IdealList.js
function IdealList_typeof(o) { "@babel/helpers - typeof"; return IdealList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, IdealList_typeof(o); }
function IdealList_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function IdealList_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, IdealList_toPropertyKey(o.key), o); } }
function IdealList_createClass(e, r, t) { return r && IdealList_defineProperties(e.prototype, r), t && IdealList_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function IdealList_toPropertyKey(t) { var i = IdealList_toPrimitive(t, "string"); return "symbol" == IdealList_typeof(i) ? i : i + ""; }
function IdealList_toPrimitive(t, r) { if ("object" != IdealList_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != IdealList_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Import API service

var IdeaList = /*#__PURE__*/function () {
  function IdeaList() {
    IdealList_classCallCheck(this, IdeaList);
    this.ideaListEl = document.querySelector("#idea-list");
    this.ideas = [];
    this.getIdeas(); // call fetchAPI()
    this.validTags = new Set();
    this.validTags.add("technology");
    this.validTags.add("software");
    this.validTags.add("business");
    this.validTags.add("education");
    this.validTags.add("health");
    this.validTags.add("inventions");
  }
  return IdealList_createClass(IdeaList, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.ideaListEl.addEventListener("click", function (e) {
        if (e.target.classList.contains("fa-times")) {
          e.stopImmediatePropagation();
          var ideaId = e.target.parentElement.parentElement.dataset.id;
          _this.deleteIdea(ideaId);
        }
      });
    }
  }, {
    key: "deleteIdea",
    value: function deleteIdea(ideaId) {
      var _this2 = this;
      services_IdeasApi.deleteIdea(ideaId).then(function (res) {
        _this2.getIdeas();
      })["catch"](function (err) {
        console.log(err);
        alert("You cannot delete this resource");
      });
    }
  }, {
    key: "addIdeaToList",
    value: function addIdeaToList(idea) {
      this.ideas.push(idea);
      this.render();
    }
  }, {
    key: "getIdeas",
    value: function getIdeas() {
      var _this3 = this;
      services_IdeasApi.getIdeas().then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.ideas = data.data;
        _this3.render();
      });
    }
  }, {
    key: "getTagClass",
    value: function getTagClass(tag) {
      tag = tag.toLowerCase();
      var tagClass = "";
      if (this.validTags.has(tag)) {
        tagClass = "tag-".concat(tag);
      } else {
        tagClass = "";
      }
      return tagClass;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      this.ideaListEl.innerHTML = this.ideas.map(function (idea) {
        var tagClass = _this4.getTagClass(idea.tag);
        var deleteBtn = idea.username === localStorage.getItem("username") ? " <button class=\"delete\"><i class=\"fas fa-times\"></i></button>" : "";
        return "\n               <div class=\"card\" data-id='".concat(idea._id, "'>\n           ").concat(deleteBtn, "\n          <h3>\n            ").concat(idea.text, "\n          </h3>\n          <p class=\"").concat(tagClass, " tag\">").concat(idea.tag.toUpperCase(), "</p>\n          <p>\n            Posted on <span class=\"date\">").concat(idea.date, "</span> by\n            <span class=\"author\">").concat(idea.username, "</span>\n          </p>\n        </div>\n        ");
      }).join("");
      this.addEventListeners();
    }
  }]);
}();
/* harmony default export */ const IdealList = (IdeaList);
;// ./src/components/IdeaForm.js
function IdeaForm_typeof(o) { "@babel/helpers - typeof"; return IdeaForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, IdeaForm_typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function IdeaForm_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function IdeaForm_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, IdeaForm_toPropertyKey(o.key), o); } }
function IdeaForm_createClass(e, r, t) { return r && IdeaForm_defineProperties(e.prototype, r), t && IdeaForm_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function IdeaForm_toPropertyKey(t) { var i = IdeaForm_toPrimitive(t, "string"); return "symbol" == IdeaForm_typeof(i) ? i : i + ""; }
function IdeaForm_toPrimitive(t, r) { if ("object" != IdeaForm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != IdeaForm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var IdeaForm = /*#__PURE__*/function () {
  function IdeaForm() {
    IdeaForm_classCallCheck(this, IdeaForm);
    this._formModal = document.querySelector("#form-modal");
    this.ideaList = new IdealList();
  }
  return IdeaForm_createClass(IdeaForm, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      this._form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var idea, newIdea, res;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value)) {
                _context.n = 1;
                break;
              }
              alert("Please enter all fields");
              return _context.a(2);
            case 1:
              // Save user to local storage
              localStorage.setItem("username", this._form.elements.username.value);
              e.preventDefault();
              idea = {
                text: this._form.elements.text.value,
                tag: this._form.elements.tag.value,
                username: this._form.elements.username.value
              }; // add to server
              _context.n = 2;
              return services_IdeasApi.createIdea(idea);
            case 2:
              newIdea = _context.v;
              _context.n = 3;
              return newIdea.json();
            case 3:
              res = _context.v;
              // add to front end
              this.ideaList.addIdeaToList(res.data);

              // Clear input fields
              this._form.elements.text.value = "";
              this._form.elements.tag.value = "";
              this._form.elements.username.value = "";
              this.render();

              // triggers any listeners with the Event object
              document.dispatchEvent(new Event("closeModal"));
            case 4:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }
      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      this._formModal.innerHTML = "\n        <form id=\"idea-form\">\n          <div class=\"form-control\">\n            <label for=\"idea-text\">Enter a Username</label>\n            <input type=\"text\" name=\"username\" id=\"username\" value=\"".concat(localStorage.getItem("username") ? localStorage.getItem("username") : "", "\"/>\n          </div>\n          <div class=\"form-control\">\n            <label for=\"idea-text\">What's Your Idea?</label>\n            <textarea name=\"text\" id=\"idea-text\"></textarea>\n          </div>\n          <div class=\"form-control\">\n            <label for=\"tag\">Tag</label>\n            <input type=\"text\" name=\"tag\" id=\"tag\" />\n          </div>\n          <button class=\"btn\" type=\"submit\" id=\"submit\">Submit</button>\n        </form>");
      this._form = document.querySelector("#idea-form");
      this.addEventListeners();
    }
  }]);
}();
/* harmony default export */ const components_IdeaForm = (IdeaForm);
;// ./src/index.js





// component created, cleaner and modular to edits
new components_Modal();
var ideaForm = new components_IdeaForm();
ideaForm.render();
new IdealList();
/******/ })()
;