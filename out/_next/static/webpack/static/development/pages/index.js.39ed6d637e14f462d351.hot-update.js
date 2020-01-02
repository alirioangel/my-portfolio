webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/timeline/index.jsx":
/*!***************************************!*\
  !*** ./Components/timeline/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./Components/timeline/blocks/index.jsx");
/* harmony import */ var _timeline_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.styled */ "./Components/timeline/timeline.styled.js");
/* harmony import */ var _cv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv */ "./Components/timeline/cv.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/timeline/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Timeline = function Timeline() {
  return __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["TimelineWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _cv__WEBPACK_IMPORTED_MODULE_3__["CV"].map(function (item, index) {
    return __jsx(_blocks__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      title: item.title,
      dot: item.dot,
      subtitle: item.subtitle,
      date: item.date,
      description: item.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ })

})
//# sourceMappingURL=index.js.39ed6d637e14f462d351.hot-update.js.map