module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/bingex/Projects/ssr-next-demo/components/Layout.js";


var Layout = function Layout(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			className: "jsx-3770854562",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 2
			}
		},
		props.children,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "3770854562",
			css: "body{margin:0;padding:0;background:#31313c;font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdxQixBQUdjLFNBQ0MsVUFDUyxtQkFDSSx1QkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JpbmdleC9Qcm9qZWN0cy9zc3ItbmV4dC1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuXHQ8ZGl2PlxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0Ym9keSB7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzMxMzEzYztcblx0XHRcdFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */"
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/cocktail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");

var _jsxFileName = '/Users/bingex/Projects/ssr-next-demo/pages/cocktail.js';



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Cocktail = function Cocktail(_ref) {
	var cocktail = _ref.cocktail,
	    nums = _ref.nums;
	return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		},
		__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
			'div',
			{
				className: 'jsx-3072621230' + ' ' + 'wrapper',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 6
				}
			},
			__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', {
				style: { backgroundImage: 'url(' + cocktail.strDrinkThumb + ')' },
				className: 'jsx-3072621230' + ' ' + 'image',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}),
			__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				'div',
				{
					className: 'jsx-3072621230' + ' ' + 'info',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'h6',
					{
						className: 'jsx-3072621230' + ' ' + 'info-title',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 12
						}
					},
					'name'
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'p',
					{
						className: 'jsx-3072621230' + ' ' + 'info-text',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 13
						}
					},
					cocktail.strDrink
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'h6',
					{
						className: 'jsx-3072621230' + ' ' + 'info-title',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 15
						}
					},
					'category'
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'p',
					{
						className: 'jsx-3072621230' + ' ' + 'info-text',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					},
					cocktail.strCategory
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'h6',
					{
						className: 'jsx-3072621230' + ' ' + 'info-title',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					},
					'ingredients'
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					{
						className: 'jsx-3072621230' + ' ' + 'info-ingredients',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					},
					nums.map(function (item) {
						var ingredient = cocktail['strIngredient' + item];
						var measure = cocktail['strMeasure' + item];
						if (ingredient) {
							return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'span',
								{ key: item, className: 'jsx-3072621230',
									__source: {
										fileName: _jsxFileName,
										lineNumber: 25
									}
								},
								'\u2022 ',
								ingredient,
								' ',
								__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'span',
									{
										className: 'jsx-3072621230' + ' ' + 'measure',
										__source: {
											fileName: _jsxFileName,
											lineNumber: 27
										}
									},
									'( ',
									measure,
									')'
								)
							);
						} else {
							return null;
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'h6',
					{
						className: 'jsx-3072621230' + ' ' + 'info-title',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 36
						}
					},
					'instructions'
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'p',
					{
						className: 'jsx-3072621230' + ' ' + 'info-text',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					},
					cocktail.strInstructions
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
			styleId: '3072621230',
			css: '.wrapper.jsx-3072621230{padding:40px;max-width:1200px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.image.jsx-3072621230{width:600px;height:600px;background-size:cover;border-radius:4px;}.info-title.jsx-3072621230{margin:0px 40px;color:#8585a7;font-size:12px;}.info-text.jsx-3072621230{margin:8px 0 30px 40px;color:#84c2e2;line-height:1.5em;max-width:400px;}.info-ingredients.jsx-3072621230{margin:10px 0 30px 40px;color:#84c2e2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info-ingredients.jsx-3072621230 span.jsx-3072621230{margin-bottom:7px;}.measure.jsx-3072621230{color:#5d8ba2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvY2t0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDYyxBQUdrQixBQU1ELEFBTUksQUFLTyxBQU1DLEFBTU4sQUFHSixZQXpCRCxDQU5JLENBZ0NsQixFQXBCZSxFQWlCZixLQVplLENBTUEsQ0FoQlEsS0FOUixBQVlDLE9BS0csQ0FNTCxNQXRCQSxDQVlkLEVBTm1CLFFBV0YsVUFWakIsTUFXQSx5Q0FLdUIsTUF0QnZCLHdFQXVCQSIsImZpbGUiOiJwYWdlcy9jb2NrdGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmluZ2V4L1Byb2plY3RzL3Nzci1uZXh0LWRlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IENvY2t0YWlsID0gKHsgY29ja3RhaWwsIG51bXMgfSkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvY2t0YWlsLnN0ckRyaW5rVGh1bWJ9KWAgfX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cblx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj5uYW1lPC9oNj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5mby10ZXh0XCI+e2NvY2t0YWlsLnN0ckRyaW5rfTwvcD5cblxuXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPmNhdGVnb3J5PC9oNj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5mby10ZXh0XCI+e2NvY2t0YWlsLnN0ckNhdGVnb3J5fTwvcD5cblxuXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPmluZ3JlZGllbnRzPC9oNj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWluZ3JlZGllbnRzXCI+XG5cdFx0XHRcdFx0e251bXMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5ncmVkaWVudCA9IGNvY2t0YWlsW2BzdHJJbmdyZWRpZW50JHtpdGVtfWBdO1xuXHRcdFx0XHRcdFx0Y29uc3QgbWVhc3VyZSA9IGNvY2t0YWlsW2BzdHJNZWFzdXJlJHtpdGVtfWBdO1xuXHRcdFx0XHRcdFx0aWYgKGluZ3JlZGllbnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2l0ZW19PlxuXHRcdFx0XHRcdFx0XHRcdFx0JmJ1bGw7IHtpbmdyZWRpZW50fXsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtZWFzdXJlXCI+KCB7bWVhc3VyZX0pPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPmluc3RydWN0aW9uczwvaDY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImluZm8tdGV4dFwiPntjb2NrdGFpbC5zdHJJbnN0cnVjdGlvbnN9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRwYWRkaW5nOiA0MHB4O1xuXHRcdFx0XHRtYXgtd2lkdGg6IDEyMDBweDtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHR9XG5cdFx0XHQuaW1hZ2Uge1xuXHRcdFx0XHR3aWR0aDogNjAwcHg7XG5cdFx0XHRcdGhlaWdodDogNjAwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHRcdC5pbmZvLXRpdGxlIHtcblx0XHRcdFx0bWFyZ2luOiAwcHggNDBweDtcblx0XHRcdFx0Y29sb3I6ICM4NTg1YTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblx0XHRcdC5pbmZvLXRleHQge1xuXHRcdFx0XHRtYXJnaW46IDhweCAwIDMwcHggNDBweDtcblx0XHRcdFx0Y29sb3I6ICM4NGMyZTI7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdH1cblx0XHRcdC5pbmZvLWluZ3JlZGllbnRzIHtcblx0XHRcdFx0bWFyZ2luOiAxMHB4IDAgMzBweCA0MHB4O1xuXHRcdFx0XHRjb2xvcjogIzg0YzJlMjtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdH1cblx0XHRcdC5pbmZvLWluZ3JlZGllbnRzIHNwYW4ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHR9XG5cdFx0XHQubWVhc3VyZSB7XG5cdFx0XHRcdGNvbG9yOiAjNWQ4YmEyO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9MYXlvdXQ+XG4pO1xuXG5Db2NrdGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG5cdGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdGBodHRwczovL3d3dy50aGVjb2NrdGFpbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWBcblx0KTtcblx0Y29uc3QgY29ja3RhaWwgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29ja3RhaWw6IGNvY2t0YWlsLmRyaW5rcyA/IGNvY2t0YWlsLmRyaW5rc1swXSA6IHt9LFxuXHRcdG51bXM6IEFycmF5LmZyb20oQXJyYXkoMTUpLmtleXMoKSlcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvY2t0YWlsO1xuIl19 */\n/*@ sourceURL=pages/cocktail.js */'
		})
	);
};

Cocktail.getInitialProps = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
		var id, res, cocktail;
		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						id = context.query.id;
						_context.next = 3;
						return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);

					case 3:
						res = _context.sent;
						_context.next = 6;
						return res.json();

					case 6:
						cocktail = _context.sent;
						return _context.abrupt('return', {
							cocktail: cocktail.drinks ? cocktail.drinks[0] : {},
							nums: Array.from(Array(15).keys())
						});

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref2.apply(this, arguments);
	};
}();

/* harmony default export */ __webpack_exports__["default"] = (Cocktail);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cocktail.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=cocktail.js.map