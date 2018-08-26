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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/posts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var posts = [{
  codeName: "Jon Snow",
  realName: "Kit Harington",
  id: "1161022966406956503",
  display_src: "http://vignette4.wikia.nocookie.net/gameofthrones/images/5/56/Jon_Kill_the_Boy.jpg/revision/latest?cb=20150508120833",
  story: "Ned Stark's bastard son, Jon joined the Night's Watch. On a mission for Lord Commander Mormont, Jon infiltrated the wildlings by pretending to forsake his Night Watch brothers. In doing so, he fell in love with Ygritte, a wildling woman"
}, {
  codeName: "Arya Stark",
  realName: "Maisie Williams",
  id: "1160844458347054781",
  display_src: "http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest?cb=20140428152515",
  story: "The younger of the Stark daughters, Arya has put her survival skills to use as she continues to evade the Lannister forces that seek her. En route to the Twins in search of her mother and brother, she arrived at the castle after the Red Wedding."
}, {
  codeName: "Melisandre",
  realName: "Carice van Houten",
  id: "1154606670337393752",
  display_src: "http://vignette2.wikia.nocookie.net/gameofthrones/images/7/7c/Melisandre_The_Dance_of_Dragons.jpg/revision/latest?cb=20150604204859",
  story: "A Red priestess from Asshai, Melisandre worships the Lord of Light. Her visions have told her that Stannis is the true king and as his advisor, she has encouraged him to pursue the throne at all costs"
}, {
  codeName: "Tyrion Lannister",
  realName: "Peter Dinklage",
  id: "1157179863266871229",
  display_src: "http://vignette1.wikia.nocookie.net/gameofthrones/images/6/61/The_children_Tyrion_with_Bow_S4.png/revision/latest?cb=20140616190514",
  story: "What Tyrion lacks in size and strength, he makes up for in mental acuity. Former Hand of the King in his father's absence, he now serves as Master of Coin on the Small Council."
}, {
  codeName: "Ramsay Bolton",
  realName: "Iwan Rheon",
  id: "1126293663140399053",
  display_src: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ramsay-1920.jpg",
  story: "A bastard son of Roose Bolton, Ramsay's bloodlust is even stronger than his father's. After taking Winterfell, he captured Theon Greyjoy and slowly tortured him into submission."
}, {
  codeName: "Petyr Baelish",
  realName: "Aidan Gillen",
  id: "1117418173361145365",
  display_src: "http://vignette3.wikia.nocookie.net/gameofthrones/images/f/f8/Book_of_the_Stranger_05.jpg/revision/latest?cb=20160512165329",
  story: "Nakedly ambitious, Littlefinger left the Small Council to marry Lysa Arryn and secure the Vale to the Lannister's side. Beyond his official duties, he is the eyes and ears of King's Landing along with Varys."
}, {
  codeName: "Brienne of Tarth",
  realName: "Gwendoline Christie",
  id: "1162418651480049646",
  display_src: "http://vignette2.wikia.nocookie.net/gameofthrones/images/8/89/Brienne_Mother's_Mercy.jpg/revision/latest?cb=20150617011915",
  story: "Brienne is a highborn lady who would rather be a knight. As Catelyn Stark's envoy, she escorted Jaime Lannister back to Kings Landing. The two fighters developed a mutual respect for each other during their journey."
}, {
  codeName: "Lord Varys",
  realName: "Conleth Hill",
  id: "1152964002473690553",
  display_src: "https://pbs.twimg.com/profile_images/3542727378/d0599ead6fda6e428c5dbf106e7161fa.jpeg",
  story: "A eunuch and a member of the Small Council, Varys is also a master of disguise. Along with Littlefinger, he is always aware of what goes on in Court."
}, {
  codeName: "Daenerys Targaryen",
  realName: "Emilia Clarke",
  id: "1150824171912152320",
  display_src: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/daenarys-1024.jpg",
  story: "Princess of House Targaryen, Daenerys lives in exile in Essos with her advisors and dragons. Dany rallied the Unsullied of Astapor to her cause and continues to grow the army she needs to take back the throne."
}];
/* harmony default export */ __webpack_exports__["a"] = (posts);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_posts__ = __webpack_require__("./data/posts.js");
throw new Error("Cannot find module \"next/css\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "C:\\Users\\TheTo\\Desktop\\NexGoT\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: style(styles.header),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, " NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        className: style(styles.table),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        className: style(styles.th),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Character"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        className: style(styles.th),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Real Name"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.posts.map(function (post, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: style(styles.td),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, post.codeName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: style(styles.td),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: "/account?id=".concat(post.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, post.realName)));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return {
        posts: __WEBPACK_IMPORTED_MODULE_1__data_posts__["a" /* default */]
      };
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


var style = __WEBPACK_IMPORTED_MODULE_2_next_css___default()({
  th: {
    background: "#00cccc",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "12px",
    padding: "12px 35px"
  },
  header: {
    font: "15px Monaco",
    textAlign: "center"
  },
  table: {
    fontFamily: "Arial",
    margin: "25px auto",
    borderCollapse: "collapse",
    border: "1px solid #eee",
    borderBottom: "2px solid #00cccc"
  },
  td: {
    color: "#999",
    border: "1px solid #eee",
    padding: "12px 35px",
    borderCollapse: "collapse"
  },
  list: {
    padding: "50px",
    textAlign: "center"
  },
  photo: {
    display: "inline-block"
  },
  photoLink: {
    color: "#333",
    verticalAlign: "middle",
    cursor: "pointer",
    background: "#eee",
    display: "inline-block",
    width: "250px",
    height: "250px",
    lineHeight: "250px",
    margin: "10px",
    border: "2px solid transparent",
    ":hover": {
      borderColor: "blue"
    }
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map