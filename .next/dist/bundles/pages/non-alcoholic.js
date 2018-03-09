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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = '/Users/bingex/Projects/ssr-next-demo/components/Grid.js';





var Grid = function Grid(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-226534208' + ' ' + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      props.cocktails.map(function (_ref) {
        var idDrink = _ref.idDrink,
            strDrink = _ref.strDrink,
            strDrinkThumb = _ref.strDrinkThumb;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          {
            key: idDrink,
            as: '/cocktail/' + idDrink,
            href: '/cocktail?id=' + idDrink,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              style: { backgroundImage: 'url(' + strDrinkThumb },
              className: 'jsx-226534208' + ' ' + 'cocktail',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-226534208' + ' ' + 'cocktail-info',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              strDrink
            )
          )
        );
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '226534208',
        css: '.wrapper.jsx-226534208{max-width:1200px;margin:70px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:40px;}.cocktail.jsx-226534208{width:280px;height:300px;background-size:cover;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);margin:10px;border-radius:4px;position:relative;cursor:pointer;-webkit-transition:all 0.3s;transition:all 0.3s;}.cocktail.jsx-226534208:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.cocktail.jsx-226534208:hover .cocktail-info.jsx-226534208{background:rgba(255,235,59,0.8);}.cocktail-info.jsx-226534208{-webkit-transition:all 0.3s;transition:all 0.3s;position:absolute;bottom:0;left:0;width:100%;background:rgba(255,255,255,0.8);color:#000000;border-bottom-right-radius:4px;border-bottom-left-radius:4px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBRzRCLEFBT0wsQUFXVSxBQUdhLEFBR2YsWUFoQlAsS0FQSSxRQVFLLE9BYXhCLEVBcEJlLGFBUTZCLENBZXhCLGtCQUNULFNBQ0YsR0FSVCxJQVNhLElBakJDLE9Ba0J3QixLQWpCbEIsVUFUSCxRQVVHLFVBaUJKLFFBaEJDLE1BaUJnQixTQWhCWCxnQkFYRCxNQTRCVyxhQTNCaEMsYUFXQSxJQWlCYyxZQUNDLDBFQUNNLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJjb21wb25lbnRzL0dyaWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JpbmdleC9Qcm9qZWN0cy9zc3ItbmV4dC1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xuXG5jb25zdCBHcmlkID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAge3Byb3BzLmNvY2t0YWlscy5tYXAoKHsgaWREcmluaywgc3RyRHJpbmssIHN0ckRyaW5rVGh1bWIgfSkgPT4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIGtleT17aWREcmlua31cbiAgICAgICAgICBhcz17YC9jb2NrdGFpbC8ke2lkRHJpbmt9YH1cbiAgICAgICAgICBocmVmPXtgL2NvY2t0YWlsP2lkPSR7aWREcmlua31gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29ja3RhaWxcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3RyRHJpbmtUaHVtYn1gIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2NrdGFpbC1pbmZvXCI+e3N0ckRyaW5rfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvY2t0YWlsIHtcbiAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgLmNvY2t0YWlsOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB9XG4gICAgICAgIC5jb2NrdGFpbDpob3ZlciAuY29ja3RhaWwtaW5mbyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzNSwgNTksIDAuOCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvY2t0YWlsLWluZm8ge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0= */\n/*@ sourceURL=components/Grid.js */'
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = '/Users/bingex/Projects/ssr-next-demo/components/Header.js';





var Header = function Header(_ref) {
  var router = _ref.router;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2821834025',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: '/alcoholic', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2821834025' + ' ' + ((router.pathname === '/alcoholic' ? 'active' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'Alcoholic'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: '/non-alcoholic', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2821834025' + ' ' + ((router.pathname === '/non-alcoholic' ? 'active' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'Non alcoholic'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2821834025' + ' ' + ((router.pathname === '/about' ? 'active' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'About'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2821834025',
      css: 'div.jsx-2821834025{height:60px;background:#46465a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:40px;font-family:sans-serif;position:fixed;top:0;left:0;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);z-index:1;}a.jsx-2821834025{color:#f4f4f4;font-size:14px;text-decoration:none;margin-right:20px;text-transform:uppercase;}.active.jsx-2821834025{color:#3ad4c3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHcUIsQUFjRSxBQU9BLFlBcEJLLEVBY0osQUFPakIsZUFOdUIsRUFkUixtQkFlSyxrQkFDTyx5QkFDM0IsWUFoQnFCLDZGQUNELGtCQUNLLHVCQUNSLGVBQ1QsTUFDQyxPQUNJLFdBQytCLHVDQUNoQyxVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iaW5nZXgvUHJvamVjdHMvc3NyLW5leHQtZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyByb3V0ZXIgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxMaW5rIGhyZWY9XCIvYWxjb2hvbGljXCI+XG4gICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9hbGNvaG9saWMnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgIEFsY29ob2xpY1xuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL25vbi1hbGNvaG9saWNcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL25vbi1hbGNvaG9saWMnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgIE5vbiBhbGNvaG9saWNcbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2FjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ2NDY1YTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgICAuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMzYWQ0YzM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(Header));

/***/ }),

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

/***/ "./components/RandomButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/bingex/Projects/ssr-next-demo/components/RandomButton.js";


var RandomButton = function RandomButton(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			className: "jsx-2053321835" + " " + "random-btn",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 2
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
			width: "40px",
			height: "40px",
			src: "data:image/svg+xml;base64,\nPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzEzMTNDIiBkPSJNNTUuMjU3LDE1Ny4xMTZ2MS45NjRjMC0wLjYwMiwwLjE1OC0xLjIwNCwwLjIxNS0xLjc5Mkw1NS4yNTcsMTU3LjExNnoiIGRhdGEtb3JpZ2luYWw9IiNBMDA0MUUiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjMzEzMTNjIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzEzMTNDIiBkPSJNMTk1LjkyMSw0MjkuNTUyYy0xNC4yNTIsMC0yOS4xNTEtMTQuNDU0LTMzLjI1MS0zMi4yNjJjLTQuMTE1LTE3LjgyMyw0LjEwMS0zMi4yNjIsMTguMzU0LTMyLjI2MiAgIGMxNC4yNTIsMCwyOS4xNTEsMTQuNDM5LDMzLjI2NiwzMi4yNjJDMjE4LjM5LDQxNS4wOTgsMjEwLjE3NSw0MjkuNTUyLDE5NS45MjEsNDI5LjU1MiBNMTE1Ljg2OCwzMjIuMDExICAgYy0xNC4yNTIsMC0yOS4xNTEtMTQuNDM5LTMzLjI1MS0zMi4yNjJjLTQuMTE1LTE3LjgwOCw0LjEwMS0zMi4yNDcsMTguMzU0LTMyLjI0N3MyOS4xNTEsMTQuNDM5LDMzLjI1MSwzMi4yNDcgICBDMTM4LjMzOCwzMDcuNTczLDEzMC4xMjEsMzIyLjAxMSwxMTUuODY4LDMyMi4wMTEgTTI0MS42NjIsMzE2LjgwNmMtMi4wOTQtMC45NjEtNC4xMTUtMi4wNzktNS45MDctMy41MTNMNjMuMzYsMTc0Ljk2OCAgIGMtNS40MDUtNC4zNzMtOC4xMDEtMTAuMTI0LTguMTAxLTE1Ljg4N3YxNzUuNDc3YzAsMjkuMjc5LDE1LjY3MiwzNS42MTcsMTUuNjcyLDM1LjYxN3MxMzkuODMxLDEwOS45MzUsMTY1Ljk0MiwxMzAuNDY3ICAgYzIuOTM5LDIuMzA5LDUuNDA1LDMuNzEzLDcuNTcxLDQuNTZjLTEuNjItMi40OTUtMi43ODEtNS4zNzctMi43ODEtOC42NlYzMTYuODA2SDI0MS42NjJ6IiBkYXRhLW9yaWdpbmFsPSIjQTAwNDFFIiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzMxMzEzYyI+PC9wYXRoPgo8L2c+PGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzEzMTNDIiBkPSJNNDM2LjM2NCwyNjQuODkyYy0zLjU5OSwxNS45ODgtMTYuNjc2LDI4LjkyMS0yOS4xNzksMjguOTIxYy0xMi41MDMsMC0xOS43MTYtMTIuOTMzLTE2LjEwMy0yOC45MjEgICBjMy41OTktMTUuOTU5LDE2LjY2MS0yOC45MDcsMjkuMTY0LTI4LjkwN0M0MzIuNzY1LDIzNS45ODQsNDM5Ljk3NywyNDguOTMyLDQzNi4zNjQsMjY0Ljg5MiBNMzkyLjQzLDMzOC4wOTEgICBjLTMuNjI4LDE2LjgwNS0xNi44NzYsMzAuNDEzLTI5LjU1MywzMC40MTNjLTEyLjY2MSwwLTE5Ljk1OS0xMy42MDctMTYuMzE4LTMwLjQxM2MzLjY1Ni0xNi44MDUsMTYuOTA1LTMwLjQxMywyOS41NjYtMzAuNDEzICAgQzM4OC44MDIsMzA3LjY3OCwzOTYuMDg2LDMyMS4yODYsMzkyLjQzLDMzOC4wOTEgTTM0MS42OTksNDEzLjY3Yy0zLjQ3LDE2LjI4OS0xNi4wNDUsMjkuNDk1LTI4LjA3NSwyOS40OTUgICBjLTEyLjAxNiwwLTE4Ljk1Ni0xMy4yMDYtMTUuNDg2LTI5LjQ5NWMzLjQ3LTE2LjMwMywxNi4wNDUtMjkuNTA5LDI4LjA2MS0yOS41MDlDMzM4LjIyOSwzODQuMTYxLDM0NS4xNywzOTcuMzY3LDM0MS42OTksNDEzLjY3ICAgIE00NDguNjI0LDE3My43NjlMMjc1LjA4MiwzMTMuMjk5Yy0xLjQ2MiwxLjE3Ni0zLjA2OCwyLjE2Ni00Ljc0NywzLjAyNnYxODAuMjIzYzAsMy4zNDEtMS4xOSw2LjI2Ni0yLjg2OCw4LjgwNCAgIGMyLjIyMy0wLjgzMiw0LjgwMy0yLjI5NCw3Ljg3Mi00LjcwM2MyNi4xMTEtMjAuNTMzLDE2Ni4xNDItMTMwLjQ2NywxNjYuMTQyLTEzMC40NjdzMTUuMjU2LTYuMzM3LDE1LjI1Ni0zNS42MTdWMTU3Ljg4MiAgIEM0NTYuNzM5LDE2My42NDYsNDU0LjAyOSwxNjkuMzk2LDQ0OC42MjQsMTczLjc2OSIgZGF0YS1vcmlnaW5hbD0iI0REMkU0NCIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiMzMTMxM2MiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMTMxM0MiIGQ9Ik00NTYuNjU5LDE1Ny4xODFjMC4wMTUsMC4yMywwLjA4NiwwLjQ1OSwwLjA4NiwwLjcwMnYtMC43NzRMNDU2LjY1OSwxNTcuMTgxeiIgZGF0YS1vcmlnaW5hbD0iI0REMkU0NCIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiMzMTMxM2MiPjwvcGF0aD4KPC9nPjxwYXRoIHN0eWxlPSJmaWxsOiM0NjQ2NUEiIGQ9Ik0yNjMuMTY0LDEyMy42NjRjMjMuMDg1LDAsNDEuODEyLDE0Ljk2OSw0MS44MTIsMzMuNDUycy0xOC43MjcsMzMuNDUyLTQxLjgxMiwzMy40NTIgIGMtMjMuMSwwLTQxLjgxMi0xNC45NjktNDEuODEyLTMzLjQ1MlMyNDAuMDY0LDEyMy42NjQsMjYzLjE2NCwxMjMuNjY0IE00NDguNjM1LDE0MS45ODlMMjc0LjQ3Nyw2LjU2ICBjLTEwLjc5Ny04Ljc0Ny0yOC41MDYtOC43NDctMzkuMzE3LDBMNjMuMzU0LDE0My4xOTNjLTQuODMyLDMuOTE1LTcuMzg0LDguOTQ3LTcuODg2LDE0LjA5NWMtMC4wNTcsMC42MDItMC4yMTUsMS4xOS0wLjIxNSwxLjc5MiAgYzAsNS43NjQsMi42OTYsMTEuNTE0LDguMTAxLDE1Ljg4OGwxNzIuMzk1LDEzOC4zMjVjMS43OTIsMS40MzQsMy44MTUsMi41NTIsNS45MDcsMy41MTN2MTc5LjczNmMwLDMuMjgzLDEuMTYyLDYuMTY2LDIuNzgxLDguNjYgIGMyLjU5Niw0LjAxNSw2LjY4Miw2Ljc5NiwxMS41NTcsNi43OTZjNC44MTgsMCw4Ljg3NS0yLjcyNCwxMS40NzEtNi42NTNjMS42NzctMi41MzgsMi44NjgtNS40NjMsMi44NjgtOC44MDRWMzE2LjMxOSAgYzEuNjc3LTAuODYsMy4yODMtMS44NDksNC43NDctMy4wMjZsMTczLjU1NS0xMzkuNTNjNS40MDUtNC4zNzMsOC4xMDEtMTAuMTI0LDguMTAxLTE1Ljg4N2MwLTAuMjMtMC4wNzItMC40NTktMC4wODYtMC42ODggIEM0NTYuNDUsMTUxLjY1Myw0NTMuODEyLDE0Ni4xNzYsNDQ4LjYzNSwxNDEuOTg5IiBkYXRhLW9yaWdpbmFsPSIjRUE1OTZFIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjNDY0NjVhIj48L3BhdGg+PGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2My4xNjQsMTkwLjU2OGMyMy4wODUsMCw0MS44MTItMTQuOTY5LDQxLjgxMi0zMy40NTJzLTE4LjcyNy0zMy40NTItNDEuODEyLTMzLjQ1MiAgIGMtMjMuMSwwLTQxLjgxMiwxNC45NjktNDEuODEyLDMzLjQ1MlMyNDAuMDY0LDE5MC41NjgsMjYzLjE2NCwxOTAuNTY4IiBkYXRhLW9yaWdpbmFsPSIjRkZGRkZGIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQyMC4yNSwyMzUuOTc5Yy0xMi41MDMsMC0yNS41NjYsMTIuOTQ4LTI5LjE2NSwyOC45MDdjLTMuNjEzLDE1Ljk4OCwzLjU5OSwyOC45MjEsMTYuMTAzLDI4LjkyMSAgIHMyNS41OC0xMi45MzMsMjkuMTc5LTI4LjkyMUM0MzkuOTgxLDI0OC45MjcsNDMyLjc2OCwyMzUuOTc5LDQyMC4yNSwyMzUuOTc5IiBkYXRhLW9yaWdpbmFsPSIjRkZGRkZGIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM3Ni4xMjgsMzA3LjY3M2MtMTIuNjYxLDAtMjUuOTEsMTMuNjA3LTI5LjU1MiwzMC40MTNjLTMuNjQzLDE2LjgwNiwzLjY0MiwzMC40MTMsMTYuMzAzLDMwLjQxMyAgIGMxMi42NzUsMCwyNS45MjUtMTMuNjA3LDI5LjU2Ni0zMC40MTNDMzk2LjEsMzIxLjI4LDM4OC44MDMsMzA3LjY3MywzNzYuMTI4LDMwNy42NzMiIGRhdGEtb3JpZ2luYWw9IiNGRkZGRkYiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzI2LjIwOSwzODQuMTU1Yy0xMi4wMywwLTI0LjU5MSwxMy4yMDYtMjguMDYxLDI5LjUwOWMtMy40NywxNi4yODksMy40NywyOS40OTUsMTUuNDg2LDI5LjQ5NSAgIGMxMi4wMywwLDI0LjYwNi0xMy4yMDYsMjguMDc1LTI5LjQ5NUMzNDUuMTY1LDM5Ny4zNjEsMzM4LjIzOSwzODQuMTU1LDMyNi4yMDksMzg0LjE1NSIgZGF0YS1vcmlnaW5hbD0iI0ZGRkZGRiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+PGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTFFOEVEIiBkPSJNMTAwLjk2OSwyNTcuNTAyYy0xNC4yNTIsMC0yMi40NjksMTQuNDM5LTE4LjM1NCwzMi4yNDdjNC4xMDEsMTcuODIzLDE4Ljk5OSwzMi4yNjIsMzMuMjUxLDMyLjI2MiAgIHMyMi40NjktMTQuNDM5LDE4LjM1NC0zMi4yNjJDMTMwLjEyLDI3MS45NDEsMTE1LjIyMSwyNTcuNTAyLDEwMC45NjksMjU3LjUwMiIgZGF0YS1vcmlnaW5hbD0iI0UxRThFRCIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9ImZpbGw6I0UxRThFRCIgZD0iTTE4MS4wMjksMzY1LjAyOGMtMTQuMjUyLDAtMjIuNDY5LDE0LjQzOS0xOC4zNjgsMzIuMjYyYzQuMTE1LDE3LjgwOCwxOS4wMTQsMzIuMjYyLDMzLjI2NiwzMi4yNjIgICBjMTQuMjUyLDAsMjIuNDY5LTE0LjQ1NCwxOC4zNTQtMzIuMjYyQzIxMC4xOCwzNzkuNDY2LDE5NS4yODEsMzY1LjAyOCwxODEuMDI5LDM2NS4wMjgiIGRhdGEtb3JpZ2luYWw9IiNFMUU4RUQiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+",
			className: "jsx-2053321835",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 3
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
			className: "jsx-2053321835" + " " + "pulse",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "2053321835",
			css: ".random-btn.jsx-2053321835{position:fixed;bottom:20px;border:3px solid #2fa799;right:30px;cursor:pointer;height:70px;width:70px;border-radius:50%;background-color:#3ad4c3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:0.4s;transition:0.4s;box-sizing:border-box;}.pulse.jsx-2053321835{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:9999px;background-color:#3ad4c3;opacity:0.9;z-index:-1;pointer-events:none;-webkit-animation:sonarWave-jsx-2053321835 2s linear infinite;animation:sonarWave-jsx-2053321835 2s linear infinite;}@-webkit-keyframes sonarWave-jsx-2053321835{from{opacity:0.4;}to{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);opacity:0;}}@keyframes sonarWave-jsx-2053321835{from{opacity:0.4;}to{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmFuZG9tQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNjLEFBR29CLEFBZ0JHLEFBZUwsQUFHTyxZQUZwQixHQS9CWSxHQWdCTixNQUNDLEdBaEJrQixJQWlCZCxXQUNDLFVBakJELEVBa0JVLFNBakJOLE1BK0JKLE1BYmMsR0FqQmIsQ0ErQlosV0E5QlcsVUFpQkMsQ0FoQk0sV0FpQlAsT0FoQmMsSUFpQkwsb0JBQ21CLENBakIxQiwwRUFDVSx5Q0FpQnhCLDBEQWhCb0IsNkZBQ0gsd0NBQ00sc0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvUmFuZG9tQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iaW5nZXgvUHJvamVjdHMvc3NyLW5leHQtZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJhbmRvbUJ1dHRvbiA9IHByb3BzID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJyYW5kb20tYnRuXCI+XG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCI0MHB4XCJcblx0XHRcdGhlaWdodD1cIjQwcHhcIlxuXHRcdFx0c3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcblBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEV4TGprNU9TQTFNVEV1T1RrNUlpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBMU1URXVPVGs1SURVeE1TNDVPVGs3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElpQjNhV1IwYUQwaU5URXlJaUJvWldsbmFIUTlJalV4TWlJZ1kyeGhjM005SWlJK1BHYytQR2MrQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak16RXpNVE5ESWlCa1BTSk5OVFV1TWpVM0xERTFOeTR4TVRaMk1TNDVOalJqTUMwd0xqWXdNaXd3TGpFMU9DMHhMakl3TkN3d0xqSXhOUzB4TGpjNU1rdzFOUzR5TlRjc01UVTNMakV4Tm5vaUlHUmhkR0V0YjNKcFoybHVZV3c5SWlOQk1EQTBNVVVpSUdOc1lYTnpQU0lpSUdSaGRHRXRiMnhrWDJOdmJHOXlQU0lqTXpFek1UTmpJajQ4TDNCaGRHZytDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qTXpFek1UTkRJaUJrUFNKTk1UazFMamt5TVN3ME1qa3VOVFV5WXkweE5DNHlOVElzTUMweU9TNHhOVEV0TVRRdU5EVTBMVE16TGpJMU1TMHpNaTR5TmpKakxUUXVNVEUxTFRFM0xqZ3lNeXcwTGpFd01TMHpNaTR5TmpJc01UZ3VNelUwTFRNeUxqSTJNaUFnSUdNeE5DNHlOVElzTUN3eU9TNHhOVEVzTVRRdU5ETTVMRE16TGpJMk5pd3pNaTR5TmpKRE1qRTRMak01TERReE5TNHdPVGdzTWpFd0xqRTNOU3cwTWprdU5UVXlMREU1TlM0NU1qRXNOREk1TGpVMU1pQk5NVEUxTGpnMk9Dd3pNakl1TURFeElDQWdZeTB4TkM0eU5USXNNQzB5T1M0eE5URXRNVFF1TkRNNUxUTXpMakkxTVMwek1pNHlOakpqTFRRdU1URTFMVEUzTGpnd09DdzBMakV3TVMwek1pNHlORGNzTVRndU16VTBMVE15TGpJME4zTXlPUzR4TlRFc01UUXVORE01TERNekxqSTFNU3d6TWk0eU5EY2dJQ0JETVRNNExqTXpPQ3d6TURjdU5UY3pMREV6TUM0eE1qRXNNekl5TGpBeE1Td3hNVFV1T0RZNExETXlNaTR3TVRFZ1RUSTBNUzQyTmpJc016RTJMamd3Tm1NdE1pNHdPVFF0TUM0NU5qRXROQzR4TVRVdE1pNHdOemt0TlM0NU1EY3RNeTQxTVROTU5qTXVNellzTVRjMExqazJPQ0FnSUdNdE5TNDBNRFV0TkM0ek56TXRPQzR4TURFdE1UQXVNVEkwTFRndU1UQXhMVEUxTGpnNE4zWXhOelV1TkRjM1l6QXNNamt1TWpjNUxERTFMalkzTWl3ek5TNDJNVGNzTVRVdU5qY3lMRE0xTGpZeE4zTXhNemt1T0RNeExERXdPUzQ1TXpVc01UWTFMamswTWl3eE16QXVORFkzSUNBZ1l6SXVPVE01TERJdU16QTVMRFV1TkRBMUxETXVOekV6TERjdU5UY3hMRFF1TlRaakxURXVOakl0TWk0ME9UVXRNaTQzT0RFdE5TNHpOemN0TWk0M09ERXRPQzQyTmxZek1UWXVPREEyU0RJME1TNDJOako2SWlCa1lYUmhMVzl5YVdkcGJtRnNQU0lqUVRBd05ERkZJaUJqYkdGemN6MGlJaUJrWVhSaExXOXNaRjlqYjJ4dmNqMGlJek14TXpFell5SStQQzl3WVhSb1BnbzhMMmMrUEdjK0NnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pNekV6TVRORElpQmtQU0pOTkRNMkxqTTJOQ3d5TmpRdU9Ea3lZeTB6TGpVNU9Td3hOUzQ1T0RndE1UWXVOamMyTERJNExqa3lNUzB5T1M0eE56a3NNamd1T1RJeFl5MHhNaTQxTURNc01DMHhPUzQzTVRZdE1USXVPVE16TFRFMkxqRXdNeTB5T0M0NU1qRWdJQ0JqTXk0MU9Ua3RNVFV1T1RVNUxERTJMalkyTVMweU9DNDVNRGNzTWprdU1UWTBMVEk0TGprd04wTTBNekl1TnpZMUxESXpOUzQ1T0RRc05ETTVMamszTnl3eU5EZ3VPVE15TERRek5pNHpOalFzTWpZMExqZzVNaUJOTXpreUxqUXpMRE16T0M0d09URWdJQ0JqTFRNdU5qSTRMREUyTGpnd05TMHhOaTQ0TnpZc016QXVOREV6TFRJNUxqVTFNeXd6TUM0ME1UTmpMVEV5TGpZMk1Td3dMVEU1TGprMU9TMHhNeTQyTURjdE1UWXVNekU0TFRNd0xqUXhNMk16TGpZMU5pMHhOaTQ0TURVc01UWXVPVEExTFRNd0xqUXhNeXd5T1M0MU5qWXRNekF1TkRFeklDQWdRek00T0M0NE1ESXNNekEzTGpZM09Dd3pPVFl1TURnMkxETXlNUzR5T0RZc016a3lMalF6TERNek9DNHdPVEVnVFRNME1TNDJPVGtzTkRFekxqWTNZeTB6TGpRM0xERTJMakk0T1MweE5pNHdORFVzTWprdU5EazFMVEk0TGpBM05Td3lPUzQwT1RVZ0lDQmpMVEV5TGpBeE5pd3dMVEU0TGprMU5pMHhNeTR5TURZdE1UVXVORGcyTFRJNUxqUTVOV016TGpRM0xURTJMak13TXl3eE5pNHdORFV0TWprdU5UQTVMREk0TGpBMk1TMHlPUzQxTURsRE16TTRMakl5T1N3ek9EUXVNVFl4TERNME5TNHhOeXd6T1RjdU16WTNMRE0wTVM0Mk9Ua3NOREV6TGpZM0lDQWdJRTAwTkRndU5qSTBMREUzTXk0M05qbE1NamMxTGpBNE1pd3pNVE11TWprNVl5MHhMalEyTWl3eExqRTNOaTB6TGpBMk9Dd3lMakUyTmkwMExqYzBOeXd6TGpBeU5uWXhPREF1TWpJell6QXNNeTR6TkRFdE1TNHhPU3cyTGpJMk5pMHlMamcyT0N3NExqZ3dOQ0FnSUdNeUxqSXlNeTB3TGpnek1pdzBMamd3TXkweUxqSTVOQ3czTGpnM01pMDBMamN3TTJNeU5pNHhNVEV0TWpBdU5UTXpMREUyTmk0eE5ESXRNVE13TGpRMk55d3hOall1TVRReUxURXpNQzQwTmpkek1UVXVNalUyTFRZdU16TTNMREUxTGpJMU5pMHpOUzQyTVRkV01UVTNMamc0TWlBZ0lFTTBOVFl1TnpNNUxERTJNeTQyTkRZc05EVTBMakF5T1N3eE5qa3VNemsyTERRME9DNDJNalFzTVRjekxqYzJPU0lnWkdGMFlTMXZjbWxuYVc1aGJEMGlJMFJFTWtVME5DSWdZMnhoYzNNOUlpSWdaR0YwWVMxdmJHUmZZMjlzYjNJOUlpTXpNVE14TTJNaVBqd3ZjR0YwYUQ0S0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTXpNVE14TTBNaUlHUTlJazAwTlRZdU5qVTVMREUxTnk0eE9ERmpNQzR3TVRVc01DNHlNeXd3TGpBNE5pd3dMalExT1N3d0xqQTROaXd3TGpjd01uWXRNQzQzTnpSTU5EVTJMalkxT1N3eE5UY3VNVGd4ZWlJZ1pHRjBZUzF2Y21sbmFXNWhiRDBpSTBSRU1rVTBOQ0lnWTJ4aGMzTTlJaUlnWkdGMFlTMXZiR1JmWTI5c2IzSTlJaU16TVRNeE0yTWlQand2Y0dGMGFENEtQQzluUGp4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNME5qUTJOVUVpSUdROUlrMHlOak11TVRZMExERXlNeTQyTmpSak1qTXVNRGcxTERBc05ERXVPREV5TERFMExqazJPU3cwTVM0NE1USXNNek11TkRVeWN5MHhPQzQzTWpjc016TXVORFV5TFRReExqZ3hNaXd6TXk0ME5USWdJR010TWpNdU1Td3dMVFF4TGpneE1pMHhOQzQ1TmprdE5ERXVPREV5TFRNekxqUTFNbE15TkRBdU1EWTBMREV5TXk0Mk5qUXNNall6TGpFMk5Dd3hNak11TmpZMElFMDBORGd1TmpNMUxERTBNUzQ1T0RsTU1qYzBMalEzTnl3MkxqVTJJQ0JqTFRFd0xqYzVOeTA0TGpjME55MHlPQzQxTURZdE9DNDNORGN0TXprdU16RTNMREJNTmpNdU16VTBMREUwTXk0eE9UTmpMVFF1T0RNeUxETXVPVEUxTFRjdU16ZzBMRGd1T1RRM0xUY3VPRGcyTERFMExqQTVOV010TUM0d05UY3NNQzQyTURJdE1DNHlNVFVzTVM0eE9TMHdMakl4TlN3eExqYzVNaUFnWXpBc05TNDNOalFzTWk0Mk9UWXNNVEV1TlRFMExEZ3VNVEF4TERFMUxqZzRPR3d4TnpJdU16azFMREV6T0M0ek1qVmpNUzQzT1RJc01TNDBNelFzTXk0NE1UVXNNaTQxTlRJc05TNDVNRGNzTXk0MU1UTjJNVGM1TGpjek5tTXdMRE11TWpnekxERXVNVFl5TERZdU1UWTJMREl1TnpneExEZ3VOallnSUdNeUxqVTVOaXcwTGpBeE5TdzJMalk0TWl3MkxqYzVOaXd4TVM0MU5UY3NOaTQzT1Raak5DNDRNVGdzTUN3NExqZzNOUzB5TGpjeU5Dd3hNUzQwTnpFdE5pNDJOVE5qTVM0Mk56Y3RNaTQxTXpnc01pNDROamd0TlM0ME5qTXNNaTQ0TmpndE9DNDRNRFJXTXpFMkxqTXhPU0FnWXpFdU5qYzNMVEF1T0RZc015NHlPRE10TVM0NE5Ea3NOQzQzTkRjdE15NHdNalpzTVRjekxqVTFOUzB4TXprdU5UTmpOUzQwTURVdE5DNHpOek1zT0M0eE1ERXRNVEF1TVRJMExEZ3VNVEF4TFRFMUxqZzROMk13TFRBdU1qTXRNQzR3TnpJdE1DNDBOVGt0TUM0d09EWXRNQzQyT0RnZ0lFTTBOVFl1TkRVc01UVXhMalkxTXl3ME5UTXVPREV5TERFME5pNHhOellzTkRRNExqWXpOU3d4TkRFdU9UZzVJaUJrWVhSaExXOXlhV2RwYm1Gc1BTSWpSVUUxT1RaRklpQmpiR0Z6Y3owaVlXTjBhWFpsTFhCaGRHZ2lJR1JoZEdFdGIyeGtYMk52Ykc5eVBTSWpORFkwTmpWaElqNDhMM0JoZEdnK1BHYytDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUmtaR1JrWkdPeUlnWkQwaVRUSTJNeTR4TmpRc01Ua3dMalUyT0dNeU15NHdPRFVzTUN3ME1TNDRNVEl0TVRRdU9UWTVMRFF4TGpneE1pMHpNeTQwTlRKekxURTRMamN5Tnkwek15NDBOVEl0TkRFdU9ERXlMVE16TGpRMU1pQWdJR010TWpNdU1Td3dMVFF4TGpneE1pd3hOQzQ1TmprdE5ERXVPREV5TERNekxqUTFNbE15TkRBdU1EWTBMREU1TUM0MU5qZ3NNall6TGpFMk5Dd3hPVEF1TlRZNElpQmtZWFJoTFc5eWFXZHBibUZzUFNJalJrWkdSa1pHSWlCamJHRnpjejBpSWo0OEwzQmhkR2crQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkdSa1pHT3lJZ1pEMGlUVFF5TUM0eU5Td3lNelV1T1RjNVl5MHhNaTQxTURNc01DMHlOUzQxTmpZc01USXVPVFE0TFRJNUxqRTJOU3d5T0M0NU1EZGpMVE11TmpFekxERTFMams0T0N3ekxqVTVPU3d5T0M0NU1qRXNNVFl1TVRBekxESTRMamt5TVNBZ0lITXlOUzQxT0MweE1pNDVNek1zTWprdU1UYzVMVEk0TGpreU1VTTBNemt1T1RneExESTBPQzQ1TWpjc05ETXlMamMyT0N3eU16VXVPVGM1TERReU1DNHlOU3d5TXpVdU9UYzVJaUJrWVhSaExXOXlhV2RwYm1Gc1BTSWpSa1pHUmtaR0lpQmpiR0Z6Y3owaUlqNDhMM0JoZEdnK0NnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pSa1pHUmtaR095SWdaRDBpVFRNM05pNHhNamdzTXpBM0xqWTNNMk10TVRJdU5qWXhMREF0TWpVdU9URXNNVE11TmpBM0xUSTVMalUxTWl3ek1DNDBNVE5qTFRNdU5qUXpMREUyTGpnd05pd3pMalkwTWl3ek1DNDBNVE1zTVRZdU16QXpMRE13TGpReE15QWdJR014TWk0Mk56VXNNQ3d5TlM0NU1qVXRNVE11TmpBM0xESTVMalUyTmkwek1DNDBNVE5ETXprMkxqRXNNekl4TGpJNExETTRPQzQ0TURNc016QTNMalkzTXl3ek56WXVNVEk0TERNd055NDJOek1pSUdSaGRHRXRiM0pwWjJsdVlXdzlJaU5HUmtaR1JrWWlJR05zWVhOelBTSWlQand2Y0dGMGFENEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HUmtaR1JrWTdJaUJrUFNKTk16STJMakl3T1N3ek9EUXVNVFUxWXkweE1pNHdNeXd3TFRJMExqVTVNU3d4TXk0eU1EWXRNamd1TURZeExESTVMalV3T1dNdE15NDBOeXd4Tmk0eU9Ea3NNeTQwTnl3eU9TNDBPVFVzTVRVdU5EZzJMREk1TGpRNU5TQWdJR014TWk0d015d3dMREkwTGpZd05pMHhNeTR5TURZc01qZ3VNRGMxTFRJNUxqUTVOVU16TkRVdU1UWTFMRE01Tnk0ek5qRXNNek00TGpJek9Td3pPRFF1TVRVMUxETXlOaTR5TURrc016ZzBMakUxTlNJZ1pHRjBZUzF2Y21sbmFXNWhiRDBpSTBaR1JrWkdSaUlnWTJ4aGMzTTlJaUkrUEM5d1lYUm9QZ284TDJjK1BHYytDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUlRGRk9FVkVJaUJrUFNKTk1UQXdMamsyT1N3eU5UY3VOVEF5WXkweE5DNHlOVElzTUMweU1pNDBOamtzTVRRdU5ETTVMVEU0TGpNMU5Dd3pNaTR5TkRkak5DNHhNREVzTVRjdU9ESXpMREU0TGprNU9Td3pNaTR5TmpJc016TXVNalV4TERNeUxqSTJNaUFnSUhNeU1pNDBOamt0TVRRdU5ETTVMREU0TGpNMU5DMHpNaTR5TmpKRE1UTXdMakV5TERJM01TNDVOREVzTVRFMUxqSXlNU3d5TlRjdU5UQXlMREV3TUM0NU5qa3NNalUzTGpVd01pSWdaR0YwWVMxdmNtbG5hVzVoYkQwaUkwVXhSVGhGUkNJZ1kyeGhjM005SWlJK1BDOXdZWFJvUGdvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwVXhSVGhGUkNJZ1pEMGlUVEU0TVM0d01qa3NNelkxTGpBeU9HTXRNVFF1TWpVeUxEQXRNakl1TkRZNUxERTBMalF6T1MweE9DNHpOamdzTXpJdU1qWXlZelF1TVRFMUxERTNMamd3T0N3eE9TNHdNVFFzTXpJdU1qWXlMRE16TGpJMk5pd3pNaTR5TmpJZ0lDQmpNVFF1TWpVeUxEQXNNakl1TkRZNUxURTBMalExTkN3eE9DNHpOVFF0TXpJdU1qWXlRekl4TUM0eE9Dd3pOemt1TkRZMkxERTVOUzR5T0RFc016WTFMakF5T0N3eE9ERXVNREk1TERNMk5TNHdNamdpSUdSaGRHRXRiM0pwWjJsdVlXdzlJaU5GTVVVNFJVUWlJR05zWVhOelBTSWlQand2Y0dGMGFENEtQQzluUGp3dlp6NGdQQzl6ZG1jK1wiXG5cdFx0Lz5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1bHNlXCIgLz5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQucmFuZG9tLWJ0biB7XG5cdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0Ym90dG9tOiAyMHB4O1xuXHRcdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjMmZhNzk5O1xuXHRcdFx0XHRyaWdodDogMzBweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0XHRcdHdpZHRoOiA3MHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzYWQ0YzM7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjRzO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0fVxuXHRcdFx0LnB1bHNlIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDk5OTlweDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzNhZDRjMztcblx0XHRcdFx0b3BhY2l0eTogMC45O1xuXHRcdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdGFuaW1hdGlvbjogc29uYXJXYXZlIDJzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdH1cblxuXHRcdFx0QGtleWZyYW1lcyBzb25hcldhdmUge1xuXHRcdFx0XHRmcm9tIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMik7XG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21CdXR0b247XG4iXX0= */\n/*@ sourceURL=components/RandomButton.js */"
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (RandomButton);

/***/ }),

/***/ "./helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomItems;
function getRandomItems(count, input_array) {
  var result_array = [];

  while (result_array.length < count) {
    var random_item = input_array[Math.floor(Math.random() * input_array.length)];
    if (result_array.indexOf(random_item) === -1) {
      result_array.push(random_item);
    }
  }

  return result_array;
}

/***/ }),

/***/ "./pages/non-alcoholic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Grid__ = __webpack_require__("./components/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RandomButton__ = __webpack_require__("./components/RandomButton.js");

var _jsxFileName = '/Users/bingex/Projects/ssr-next-demo/pages/non-alcoholic.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var Alcoholic = function Alcoholic(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Grid__["a" /* default */], { cocktails: props.cocktails, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RandomButton__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    })
  );
};

Alcoholic.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            cocktails: data.drinks ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getRandomItems */])(16, data.drinks) : []
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Alcoholic);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/non-alcoholic.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=non-alcoholic.js.map