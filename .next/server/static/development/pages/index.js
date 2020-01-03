module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/burger/burger.styled.js":
/*!********************************************!*\
  !*** ./Components/burger/burger.styled.js ***!
  \********************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "burgerstyled__StyledBurger",
  componentId: "sc-4ftqs6-0"
})(["position:absolute;top:", ";left:1.5rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:20;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:", ";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:", ";}:nth-child(2){opacity:", ";transform:", ";}:nth-child(3){transform:", ";}}"], ({
  topM
}) => topM + 'px', ({
  theme,
  open
}) => open ? theme.colors.primaryLight : theme.colors.primaryLinks, ({
  open
}) => open ? 'rotate(45deg)' : 'rotate(0)', ({
  open
}) => open ? '0' : '1', ({
  open
}) => open ? 'translateX(20px)' : 'translateX(0)', ({
  open
}) => open ? 'rotate(-45deg)' : 'rotate(0)');

/***/ }),

/***/ "./Components/burger/index.jsx":
/*!*************************************!*\
  !*** ./Components/burger/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _burger_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.styled */ "./Components/burger/burger.styled.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/burger/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Burger = ({
  open,
  setOpen,
  topM
}) => {
  return __jsx(_burger_styled__WEBPACK_IMPORTED_MODULE_1__["StyledBurger"], {
    topM: topM,
    open: open,
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./Components/logo/index.jsx":
/*!***********************************!*\
  !*** ./Components/logo/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/logo/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Logo = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
  src: "/images/logo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./Components/menu/index.jsx":
/*!***********************************!*\
  !*** ./Components/menu/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.styled */ "./Components/menu/menu.styled.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ "./Components/logo/index.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_icons_icomoon_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/icomoon/Home */ "styled-icons/icomoon/Home");
/* harmony import */ var styled_icons_icomoon_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_icons_icomoon_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_icons_boxicons_solid_UserDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/boxicons-solid/UserDetail */ "styled-icons/boxicons-solid/UserDetail");
/* harmony import */ var styled_icons_boxicons_solid_UserDetail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_solid_UserDetail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-icons/fa-solid/GraduationCap */ "styled-icons/fa-solid/GraduationCap");
/* harmony import */ var styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-icons/icomoon/Books */ "styled-icons/icomoon/Books");
/* harmony import */ var styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_icons_remix_fill_Slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-icons/remix-fill/Slideshow */ "styled-icons/remix-fill/Slideshow");
/* harmony import */ var styled_icons_remix_fill_Slideshow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_icons_remix_fill_Slideshow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-icons/material/ContactMail */ "styled-icons/material/ContactMail");
/* harmony import */ var styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/menu/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];











const Menu = ({
  open,
  topM,
  setOpen
}) => {
  return __jsx(_menu_styled__WEBPACK_IMPORTED_MODULE_1__["StyledMenu"], {
    topM: topM,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Alirio A. Angel A.")), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(styled_icons_icomoon_Home__WEBPACK_IMPORTED_MODULE_4__["Home"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), "Inicio"))), __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(styled_icons_boxicons_solid_UserDetail__WEBPACK_IMPORTED_MODULE_5__["UserDetail"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), "Sobre mi"))), __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_6__["GraduationCap"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), "Educacion"))), __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_7__["Books"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), "Habilidades"))), __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(styled_icons_remix_fill_Slideshow__WEBPACK_IMPORTED_MODULE_8__["Slideshow"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), "Portafolio"))), __jsx("li", {
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_9__["ContactMail"], {
    size: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })), "Contactame")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./Components/menu/menu.styled.js":
/*!****************************************!*\
  !*** ./Components/menu/menu.styled.js ***!
  \****************************************/
/*! exports provided: StyledMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "menustyled__StyledMenu",
  componentId: "anris-0"
})(["display:flex;flex-direction:column;justify-content:center;background:", ";min-height:100vh;text-align:left;position:absolute;top:", ";left:0;z-index:10;transform:translateX(-100%);transform:", ";transition:transform 0.3s ease-in-out;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);section{display:flex;flex-direction:column;justify-content:stretch;align-items:center;position:absolute;left:0;top:0;z-index:10;width:100%;color:", ";height:25vh;background:", ";img{width:150px;height:100px;}}@media (max-width:", "){width:100%;}ul{padding:0;list-style-type:none;}i{padding-right:1rem;}li{font-size:0.7rem;text-transform:uppercase;padding:0.5rem 3rem;font-weight:bold;letter-spacing:0.2rem;color:", ";text-decoration:none;transition:color 0.3s linear;@media (max-width:", "){font-size:1.5rem;text-align:center;}&:hover{cursor:pointer;color:", ";}}"], ({
  theme
}) => theme.colors.primaryLight, ({
  topM
}) => topM - 7 + 'px', ({
  open
}) => open ? 'translateX(0)' : 'translateX(-100%)', ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primaryDark, ({
  theme
}) => theme.mobile, ({
  theme
}) => theme.colors.primaryLinks, ({
  theme
}) => theme.mobile, ({
  theme
}) => theme.colors.primaryHover);

/***/ }),

/***/ "./Components/timeline/blocks/index.jsx":
/*!**********************************************!*\
  !*** ./Components/timeline/blocks/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dots */ "./Components/timeline/dots/index.jsx");
/* harmony import */ var _timeline_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeline.styled */ "./Components/timeline/timeline.styled.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/timeline/blocks/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TLBlock = ({
  title,
  dot,
  date,
  subtitle,
  description
}) => __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["TimelineBlock"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_dots__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, dot), __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["TimelineTitle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, title), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, subtitle), __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, date)), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, description))));

/* harmony default export */ __webpack_exports__["default"] = (TLBlock);

/***/ }),

/***/ "./Components/timeline/cv.js":
/*!***********************************!*\
  !*** ./Components/timeline/cv.js ***!
  \***********************************/
/*! exports provided: CV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CV", function() { return CV; });
const CV = [{
  title: 'Bachillerato en Ciencias',
  dot: 'B',
  subtitle: 'I.E María Montessori',
  date: '09/2005 - 08/2010',
  description: ' '
}, {
  title: 'Grado de Ingenieria en Computación',
  dot: 'G',
  subtitle: 'Universidad José Antonio Paez (UJAP)',
  date: '12/2015 - 03/2019',
  description: ' '
}, {
  title: 'Estudios en Platzi',
  dot: 'E',
  subtitle: 'I.E María Montessori',
  date: '09/2005 - 08/2010',
  description: ' '
}, {
  title: 'Analista de Software (QA)',
  dot: 'A',
  subtitle: 'I.E María Montessori',
  date: '09/2005 - 08/2010',
  description: `
      Trabajé como analista de QA para el equipo del sistema personalizado de la caja registradora de la EPA. Algunas de mis responsabilidades en este rol fueron:
      - Estimación, coordinación y planificación de actividades de QA.
      - Uso de la metodología SCRUM para el manejo del equipo.
      - Revisión de las funcionalidades del software antes de implementar una nueva versión en producción. 
      - Creación de casos de prueba.
      - Colaborar en el desarrollo de servicios REST.      
      `
}, {
  title: 'Freelancer',
  dot: 'F',
  subtitle: ' ',
  date: '09/2017 - actualidad',
  description: ` Desarrollando aplicaciones web bajo las siguientes tecnologias y lenguajes:
      Wordpress, JavaScript (Vanilla, ES6, React, NodeJS), PHP, MySQL, postgreSQL, mongoDB, Git y github. `
}];

/***/ }),

/***/ "./Components/timeline/dots/index.jsx":
/*!********************************************!*\
  !*** ./Components/timeline/dots/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timeline_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline.styled */ "./Components/timeline/timeline.styled.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/timeline/dots/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TLDot = props => __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_1__["TimelineDot"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (TLDot);

/***/ }),

/***/ "./Components/timeline/index.jsx":
/*!***************************************!*\
  !*** ./Components/timeline/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./Components/timeline/blocks/index.jsx");
/* harmony import */ var _timeline_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.styled */ "./Components/timeline/timeline.styled.js");
/* harmony import */ var _cv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv */ "./Components/timeline/cv.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Components/timeline/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Timeline = () => {
  return __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["TimelineWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_timeline_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, _cv__WEBPACK_IMPORTED_MODULE_3__["CV"].map((item, index) => __jsx(_blocks__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./Components/timeline/timeline.styled.js":
/*!************************************************!*\
  !*** ./Components/timeline/timeline.styled.js ***!
  \************************************************/
/*! exports provided: Container, TimelineDot, Card, CardContent, TimelineTitle, TimelineBlock, TimelineWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDot", function() { return TimelineDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineTitle", function() { return TimelineTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineBlock", function() { return TimelineBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineWrapper", function() { return TimelineWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__Container",
  componentId: "sc-13u0yyn-0"
})(["margin:0 auto;@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}@media screen and (max-width:767px){overflow:visible;}"]);
const TimelineDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__TimelineDot",
  componentId: "sc-13u0yyn-1"
})(["&{background:", ";width:50px;height:50px;border-radius:100%;box-shadow:", ";z-index:2;color:#fff;text-align:center;position:absolute;right:47.5%;h6{padding:0;font-size:30px;font-weight:bold;margin-top:8px;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}}@media screen and (max-width:767px){right:0;top:auto;}"], ({
  theme
}) => theme.colors.someCards, ({
  theme
}) => theme.boxShadow);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__Card",
  componentId: "sc-13u0yyn-2"
})(["box-shadow:", ";position:relative;margin:8px 0;width:45%;z-index:1;background:", ";position:relative;background:#fff;margin-bottom:5px;border-left:5px solid #1976d2;&:after{clear:both;content:'';display:table;}@media screen and (max-width:767px){width:100%;}"], ({
  theme
}) => theme.boxShadow, ({
  theme
}) => theme.colors.primaryHover);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__CardContent",
  componentId: "sc-13u0yyn-3"
})(["text-align:left;padding:1rem;border-radius:0 0 2px 2px;p{margin:0;color:inherit;text-align:justify;}div{margin-bottom:2rem;h6{font-size:1 rem;color:#666;text-align:left;padding:0;margin:0;}}"]);
const TimelineTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h6.withConfig({
  displayName: "timelinestyled__TimelineTitle",
  componentId: "sc-13u0yyn-4"
})(["font-size:1.4rem;margin:0;padding:0;font-weight:normal;"]);
const TimelineBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__TimelineBlock",
  componentId: "sc-13u0yyn-5"
})(["&{position:relative;}&:after{clear:both;content:'';display:table;}:nth-child(odd) ", "{:before{content:'';width:58px;height:4px;position:absolute;top:26px;left:100%;z-index:-2;opacity:0.4;background:", ";}}:nth-child(even) ", "{:before{content:'';width:58px;height:4px;position:absolute;top:26px;left:auto;right:100%;z-index:-2;opacity:0.4;background:", ";}"], Card, ({
  theme
}) => theme.colors.someCards, Card, ({
  theme
}) => theme.colors.someCards);
const TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyled__TimelineWrapper",
  componentId: "sc-13u0yyn-6"
})(["&{position:relative;}&:before{content:'';position:absolute;top:0;bottom:23px;left:50%;height:99.5%;width:4px;opacity:0.3;background:", ";}", ":nth-child(even) ", "{float:right;}"], ({
  theme
}) => theme.colors.someCards, TimelineBlock, Card);

/***/ }),

/***/ "./Containers/about/about.styled.js":
/*!******************************************!*\
  !*** ./Containers/about/about.styled.js ***!
  \******************************************/
/*! exports provided: CardWrapper, Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "aboutstyled__CardWrapper",
  componentId: "sc-1nrtpp4-0"
})(["padding:0 15px;margin:0 auto;@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}display:grid;justify-content:center;flex-direction:column;color:", ";padding:1rem 2rem;box-shadow:", ";background:", ";p{font-size:1.2rem;text-align:justify;margin:0 auto;padding-bottom:30px;}"], ({
  theme
}) => theme.colors.MainText, ({
  theme
}) => theme.boxShadow, ({
  theme
}) => theme.colors.primaryLight);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "aboutstyled__Buttons",
  componentId: "sc-1nrtpp4-1"
})(["background:", ";padding:0.7rem 2rem;margin:0 15px;font-size:1rem;a{color:", ";text-decoration:none;}border:0;box-shadow:", ";@media screen and (max-width:767px){margin:10px auto;width:70vw;}"], ({
  theme
}) => theme.colors.primaryHover, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.boxShadow);

/***/ }),

/***/ "./Containers/about/index.jsx":
/*!************************************!*\
  !*** ./Containers/about/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.styled */ "./Containers/about/about.styled.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/about/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AboutContainer = () => {
  return __jsx(_about_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Ingeniero en computaci\xF3n de profesi\xF3n, con una gran afinidad al desarrollo de software, UI, UX, Backend y manejo de datos. Mis habilidades profesionales se han desarrollado en el \xE1rea full-stack, como en la planificaci\xF3n de proyectos desempe\xF1ando diferentes posiciones en IT como: QA, desarrollo de aplicaciones web y m\xF3vil. Llevando el desarrollo de principio a fin. Busco cada d\xEDa mejorar mis habilidades rode\xE1ndome de otros desarrolladores, leyendo codigo, viendo diferentes cursos en plataformas online o leyendo libros."), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_about_styled__WEBPACK_IMPORTED_MODULE_1__["Buttons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    onClick: () => openTab(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "DESCARGAR CV")), __jsx(_about_styled__WEBPACK_IMPORTED_MODULE_1__["Buttons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "CONTACTAME"))));
};

const openTab = () => {
  const pdf = '/PDF/alirioangel-cv.pdf';
  const client = false;

  if (client) {
    console.log('clicked!!');
    window.open('/PDF/alirioangel-cv.pdf', '_blank');
  }

  return () => client;
};

/* harmony default export */ __webpack_exports__["default"] = (AboutContainer);

/***/ }),

/***/ "./Containers/contactme/contactme.styled.js":
/*!**************************************************!*\
  !*** ./Containers/contactme/contactme.styled.js ***!
  \**************************************************/
/*! exports provided: Container, FormStyles, Profile, ErrorMessage, Message, MainTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStyles", function() { return FormStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactmestyled__Container",
  componentId: "sc-1tvrxcr-0"
})(["position:relative;padding:2rem;overflow:hidden;font-size:1.5rem;margin-left:3rem;margin:0 auto;background:", ";@media (min-width:768px){width:750px;padding:0;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}@media screen and (max-width:767px){overflow:visible;}box-shadow:", ";"], ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.boxShadow);
const FormStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "contactmestyled__FormStyles",
  componentId: "sc-1tvrxcr-1"
})(["display:grid;text-align:left;justify-content:flex-start;padding:2rem;input,textarea{margin-bottom:1rem;border-radius:0.2rem;padding:0.375rem 0.75rem;font-size:1rem;box-shadow:none;border:1px solid;::placeholder{font-size:1rem;font-family:'roboto';}}textarea{font-size:1rem;width:30vw;height:auto;font-family:'roboto';resize:none;}button{background-color:", ";border:1px solid black;border-radius:4px;padding:0.5rem 0.5rem;color:white;transition:0.3s ease-in-out;&:hover{background-color:", ";transform:translateY(-3px);box-shadow:5px 5px 10px rgba(0,50,50,0.5);}}@media screen and (max-width:767px){overflow:visible;margin:100px 0 0 0;justify-content:center;input,textarea{width:70vw;padding:0;}h1{font-size:1.5rem;}}"], ({
  theme
}) => theme.colors.primaryLinks, ({
  theme
}) => theme.colors.primaryHover);
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactmestyled__Profile",
  componentId: "sc-1tvrxcr-2"
})(["position:absolute;top:0;right:0;z-index:1;float:right !important;img{width:400px;height:auto;display:block;max-width:100%;}div{top:0;z-index:1;position:absolute;border-style:solid;border-width:100vw 0 0 20vw;border-color:rgba(223,50,50,0) transparent transparent ", ";}@media screen and (max-width:767px){position:absolute;bottom:85%;top:auto;left:0;width:150px;height:auto;margin-right:auto;margin-left:auto;z-index:1;background-color:transparent;img{width:150px;height:150px;border-radius:50%;box-shadow:", ";}div{display:none;}}"], ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.boxShadow);
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactmestyled__ErrorMessage",
  componentId: "sc-1tvrxcr-3"
})(["color:#f22;font-size:0.8rem;"]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactmestyled__Message",
  componentId: "sc-1tvrxcr-4"
})(["color:#04f;font-size:0.8rem;"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "contactmestyled__MainTitle",
  componentId: "sc-1tvrxcr-5"
})(["@media screen and (max-width:767px){margin-bottom:120px;}"]);

/***/ }),

/***/ "./Containers/contactme/index.jsx":
/*!****************************************!*\
  !*** ./Containers/contactme/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contactme_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactme.styled */ "./Containers/contactme/contactme.styled.js");
/* harmony import */ var styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-icons/material/ContactMail */ "styled-icons/material/ContactMail");
/* harmony import */ var styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/contactme/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const Form = () => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  });
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    name: '',
    email: '',
    message: ''
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg
        }
      });
      setInputs({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg
        }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => _objectSpread({}, prev, {
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => _objectSpread({}, prevStatus, {
      submitting: true
    }));
    axios__WEBPACK_IMPORTED_MODULE_8___default()({
      method: 'POST',
      url: 'https://formspree.io/mgeodpob',
      data: inputs
    }).then(res => {
      console.log(res);
      handleServerResponse(true, 'Gracias por enviar tu mensaje!');
    }).catch(error => {
      handleServerResponse(false, 'Lo siento ha ocurrido un error!');
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["MainTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(styled_icons_material_ContactMail__WEBPACK_IMPORTED_MODULE_10__["ContactMail"], {
    size: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), " Cont\xE1ctame para formar parte de tu equipo!"), __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["FormStyles"], {
    method: "POST",
    onSubmit: handleOnSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Nombre"), __jsx("input", {
    required: true,
    value: inputs.name,
    id: "name",
    onChange: handleOnChange,
    type: "text",
    name: "name",
    placeholder: "Nombre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Correo"), __jsx("input", {
    required: true,
    value: inputs.email,
    id: "email",
    onChange: handleOnChange,
    type: "email",
    name: "_replyto",
    placeholder: "name@example.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Mensaje"), __jsx("textarea", {
    required: true,
    value: inputs.message,
    id: "message",
    onChange: handleOnChange,
    name: "message",
    cols: "30",
    placeholder: "Describe aqui tu mensaje",
    rows: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, !status.submitting ? !status.submitted ? 'Envía tu mensaje' : 'Enviado' : 'Enviando, por favor espere..'), status.info.error && __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"], {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, status.info.msg)), __jsx(_contactme_styled__WEBPACK_IMPORTED_MODULE_9__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("img", {
    src: "/images/contact.png",
    alt: "Image profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./Containers/curriculum/index.jsx":
/*!*****************************************!*\
  !*** ./Containers/curriculum/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/fa-solid/GraduationCap */ "styled-icons/fa-solid/GraduationCap");
/* harmony import */ var styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/timeline */ "./Components/timeline/index.jsx");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/curriculum/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CurriculumContainer = () => __jsx("div", {
  id: "education",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(styled_icons_fa_solid_GraduationCap__WEBPACK_IMPORTED_MODULE_1__["GraduationCap"], {
  size: "60",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), " Educaci\xF3n y Experiencia"), __jsx(_Components_timeline__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (CurriculumContainer);

/***/ }),

/***/ "./Containers/footer/index.jsx":
/*!*************************************!*\
  !*** ./Containers/footer/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/footer/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer__FooterStyles",
  componentId: "sc-8c9slk-0"
})(["margin:10vh 0 0 0;width:100%;height:12vh;background-color:", ";color:white;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-direction:column;p{margin:0;padding:0;@media screen and (max-width:600px){margin:0;}}a{color:white;}"], ({
  theme
}) => theme.colors.primaryHover);

const Footer = () => __jsx(FooterStyles, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Portafolio Realizado con ", __jsx("a", {
  href: "https://nextjs.org/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Next.js")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Copyright \xA9 Alirio A. Angel A."));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Containers/header/header.styled.js":
/*!********************************************!*\
  !*** ./Containers/header/header.styled.js ***!
  \********************************************/
/*! exports provided: BackgroundHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundHeader", function() { return BackgroundHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BackgroundHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyled__BackgroundHeader",
  componentId: "sc-1inmey-0"
})(["position:relative;display:block;width:100%;height:300px;background:url(/images/background-header.jpg) no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;"]);

/***/ }),

/***/ "./Containers/header/index.jsx":
/*!*************************************!*\
  !*** ./Containers/header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _Components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/menu */ "./Components/menu/index.jsx");
/* harmony import */ var _Components_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/burger */ "./Components/burger/index.jsx");
/* harmony import */ var _header_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.styled */ "./Containers/header/header.styled.js");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/header/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = props => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const node = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["useOnClickOutside"])(node, () => setOpen(false));
  const topM = TopMove();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_4__["BackgroundHeader"], {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_Components_burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    topM: topM,
    open: open,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_Components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    topM: topM,
    open: open,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), props.children);
};

const TopMove = () => {
  const client = false;
  const [topM, setTopM] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(7);

  const HandleTop = () => {
    const body = document.getElementById('__next');
    let topm = window.scrollY <= 0 ? 3 : window.scrollY + 7 >= body.offsetHeight - window.innerHeight ? body.offsetHeight - window.innerHeight : window.scrollY + 7;
    setTopM(topm);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const body = document.getElementById('__next');

    if (client) {
      window.addEventListener('scroll', HandleTop);
    }

    if (body.offsetHeight - window.innerHeight == window.scrollY) {
      window.removeEventListener('scroll', HandleTop);
    }

    return () => client && window.removeEventListener('scroll', HandleTop);
  }, []);
  return topM;
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Containers/home/home.styled.js":
/*!****************************************!*\
  !*** ./Containers/home/home.styled.js ***!
  \****************************************/
/*! exports provided: CardWrapper, Card, Profile, CardContent, InfoHeadings, InfoDetails, Container, SocialBar, GithubIcon, LinkedInIcon, TwitterIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoHeadings", function() { return InfoHeadings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetails", function() { return InfoDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialBar", function() { return SocialBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubIcon", function() { return GithubIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInIcon", function() { return LinkedInIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__CardWrapper",
  componentId: "sc-15zmsvd-0"
})(["display:grid;justify-content:center;align-content:center;position:relative;padding-top:15px;padding-bottom:30px;overflow:visible;width:100%;height:auto;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__Card",
  componentId: "sc-15zmsvd-1"
})(["box-shadow:", ";position:relative;margin:8px 0;width:100%;overflow:hidden;-webkit-transition:height 1s,color 1s,margin 1s;transition:height 1s,color 1s,margin 1s;z-index:1;background:", ";@media screen and (max-width:767px){position:relative;width:100%;overflow:visible;z-index:1;}"], ({
  theme
}) => theme.boxShadow, ({
  theme
}) => theme.colors.primaryHover);
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__Profile",
  componentId: "sc-15zmsvd-2"
})(["position:absolute;right:0;z-index:1;float:right !important;img{width:400px;height:auto;display:block;max-width:100%;}div{top:0;z-index:1;position:absolute;border-style:solid;border-width:400px 0 0 100px;border-color:rgba(223,50,50,0) transparent transparent ", ";}@media screen and (max-width:767px){position:absolute;bottom:85%;left:0;width:150px;height:auto;margin-right:auto;margin-left:auto;z-index:1;background-color:transparent;img{width:150px;height:150px;border-radius:50%;box-shadow:", ";}div{display:none;}}@media (min-width:780px){div{left:-3px;}}"], ({
  theme
}) => theme.colors.primaryHover, ({
  theme
}) => theme.boxShadow);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__CardContent",
  componentId: "sc-15zmsvd-3"
})(["padding:10px;border-radius:0 0 2px 2px;p{margin:0;color:inherit;text-align:center;}@media screen and (max-width:767px){padding:20px 0 0 0;}"]);
const InfoHeadings = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__InfoHeadings",
  componentId: "sc-15zmsvd-4"
})(["max-width:514px;color:", ";h4{font-family:'Roboto';font-size:2rem;padding-left:3rem;text-align:left;text-transform:uppercase;display:block;width:100%;font-weight:900;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}h6{font-family:'Roboto';font-size:1.6rem;padding-left:3rem;text-align:left;text-transform:capitalize;display:block;width:100%;font-weight:300;margin-top:-30px;margin-bottom:30px;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}@media screen and (max-width:767px){h4{padding:0 20px;}h6{padding:0 20px;}}"], ({
  theme
}) => theme.colors.primaryLight);
const InfoDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__InfoDetails",
  componentId: "sc-15zmsvd-5"
})(["display:table;margin:0;max-width:100%;padding:0;max-width:515px;margin-top:-30px;ul{text-align:left;list-style-type:none;li{clear:both;span{display:block;float:left;color:", ";line-height:26px;font-size:15px;font-weight:400;i{padding-left:2px;}}}}@media screen and (max-width:767px){ul{padding:0 20px;}h6{padding:0 20px;}}"], ({
  theme
}) => theme.colors.primaryLight);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__Container",
  componentId: "sc-15zmsvd-6"
})(["margin:0 auto;@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}"]);
const SocialBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "homestyled__SocialBar",
  componentId: "sc-15zmsvd-7"
})(["display:grid;justify-content:center;width:100%;grid-template-columns:repeat(3,60px);margin:40px 0 0 0;padding:30px 0;gap:25px;@media (min-width:768px){justify-content:flex-start;padding-left:3rem;}@media (min-width:1200px){justify-content:center;}"]);
const socialIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "homestyled__socialIcon",
  componentId: "sc-15zmsvd-8"
})(["box-shadow:", ";width:50px;height:50px;border-radius:50px;border:0;i{color:", ";}:hover{opacity:0.6;transition:0.6s opacity;}"], ({
  theme
}) => theme.boxShadow, ({
  theme
}) => theme.colors.primaryLight);
const GithubIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(socialIcon).withConfig({
  displayName: "homestyled__GithubIcon",
  componentId: "sc-15zmsvd-9"
})(["background:#222;"]);
const LinkedInIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(socialIcon).withConfig({
  displayName: "homestyled__LinkedInIcon",
  componentId: "sc-15zmsvd-10"
})(["background:#006;"]);
const TwitterIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(socialIcon).withConfig({
  displayName: "homestyled__TwitterIcon",
  componentId: "sc-15zmsvd-11"
})(["background:#6af;"]);

/***/ }),

/***/ "./Containers/home/index.jsx":
/*!***********************************!*\
  !*** ./Containers/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.styled */ "./Containers/home/home.styled.js");
/* harmony import */ var styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/material/Email */ "styled-icons/material/Email");
/* harmony import */ var styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_icons_boxicons_solid_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/boxicons-solid/Phone */ "styled-icons/boxicons-solid/Phone");
/* harmony import */ var styled_icons_boxicons_solid_Phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_solid_Phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_icons_icomoon_Location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/icomoon/Location */ "styled-icons/icomoon/Location");
/* harmony import */ var styled_icons_icomoon_Location__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_icons_icomoon_Location__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/boxicons-logos/Twitter */ "styled-icons/boxicons-logos/Twitter");
/* harmony import */ var styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_icons_boxicons_logos_Github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-icons/boxicons-logos/Github */ "styled-icons/boxicons-logos/Github");
/* harmony import */ var styled_icons_boxicons_logos_Github__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_logos_Github__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_icons_boxicons_logos_Linkedin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-icons/boxicons-logos/Linkedin */ "styled-icons/boxicons-logos/Linkedin");
/* harmony import */ var styled_icons_boxicons_logos_Linkedin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_logos_Linkedin__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/home/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const HomeContainer = () => __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
  id: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["Profile"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/profile.jpg",
  alt: "Image profile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})), __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["InfoHeadings"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Alirio Angel"), __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Software engineer")), __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["InfoDetails"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_2__["Email"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})), "alirioangelarenas@gmail.com")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(styled_icons_boxicons_solid_Phone__WEBPACK_IMPORTED_MODULE_3__["Phone"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
})), "+58(424)-3057367")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx(styled_icons_icomoon_Location__WEBPACK_IMPORTED_MODULE_4__["Location"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
})), "Valencia - Venezuela"))))), __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["SocialBar"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["GithubIcon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/alirioangel",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx(styled_icons_boxicons_logos_Github__WEBPACK_IMPORTED_MODULE_6__["Github"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
})))), __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["LinkedInIcon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.linkedin.com/in/alirioangel/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx(styled_icons_boxicons_logos_Linkedin__WEBPACK_IMPORTED_MODULE_7__["Linkedin"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
})))), __jsx(_home_styled__WEBPACK_IMPORTED_MODULE_1__["TwitterIcon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("a", {
  href: "https://twitter.com/_AlirioAngel",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_5__["Twitter"], {
  size: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (HomeContainer);

/***/ }),

/***/ "./Containers/skills/index.jsx":
/*!*************************************!*\
  !*** ./Containers/skills/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skills_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.styled */ "./Containers/skills/skills.styled.js");
/* harmony import */ var styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/icomoon/Books */ "styled-icons/icomoon/Books");
/* harmony import */ var styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/Containers/skills/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SkillsContainer = () => {
  return __jsx("div", {
    id: "skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(styled_icons_icomoon_Books__WEBPACK_IMPORTED_MODULE_2__["Books"], {
    size: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), " Habilidades"), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "professional",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Profesionales")), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "C++"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "60%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "JAVASCRIPT"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "80%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "NODEJS"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "90%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "MONGODB"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "70%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))), __jsx("div", {
    className: "personal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Personales")), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "COMUNICACION"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "90%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "RESOLUCION DE PROBLEMAS"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "90%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "PROACTIVIDAD"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "90%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "CONSTANCIA"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "100%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }))), __jsx("div", {
    className: "software",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Software")), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "VSCODE"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "80%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "UNREAL"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "60%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "UNITY"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "60%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["SkillBar"], {
    percent: "80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "POSTMAN"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "80%"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }))), __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Mas sobre mis habilidades")), __jsx(_skills_styled__WEBPACK_IMPORTED_MODULE_1__["TextSkills"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Durante casi 3 a\xF1os me centre en el entorno de Javascript aprendiendo multiples tecnologias para el desarrollo web tanto en el front-end como en el backend. Sin embargo, mi curiosidad y ganas de aprender mas alla me han llevado a conocer otros lenguajes y software normalmente especializados al area de los videojuegos para seguir lo que me apasiona."))));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillsContainer);

/***/ }),

/***/ "./Containers/skills/skills.styled.js":
/*!********************************************!*\
  !*** ./Containers/skills/skills.styled.js ***!
  \********************************************/
/*! exports provided: Container, Title, SkillBar, TextSkills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillBar", function() { return SkillBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSkills", function() { return TextSkills; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "skillsstyled__Container",
  componentId: "tqnh68-0"
})(["padding:0 15px;margin:0 auto;display grid;grid-template-areas:' professional personal software' ' text         text     text    ';grid-gap:2%;background:", ";box-shadow:", ";.personal{margin:0;grid-area:personal;}.professional{margin:0;grid-area:professional;}.software{margin:0;grid-area:software;}.text{grid-area:text;margin:-20px 0 50px 0;}@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}@media screen and (max-width:767px){grid-row-gap:30px;grid-template-areas:'professional' 'personal' 'software' 'text';}"], ({
  theme
}) => theme.colors.primaryHover, ({
  theme
}) => theme.boxShadow);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "skillsstyled__Title",
  componentId: "tqnh68-1"
})(["margin-top:1rem;margin-bottom:-20px;h3{color:", ";font-family:'Roboto';font-size:1.4rem;text-align:center;text-transform:capitalize;display:block;width:100%;font-weight:300;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}"], ({
  theme
}) => theme.colors.primaryLight);
const SkillBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "skillsstyled__SkillBar",
  componentId: "tqnh68-2"
})(["position:relative;display:block;margin-bottom:17px;margin-top:45px;background:", ";height:4px;margin:45px 0;h5{color:", ";font-family:'Roboto';font-weight:100;position:absolute;top:-15px;left:0;}span{position:absolute;top:5px;color:", ";font-size:0.7rem;right:0;}div{background:", ";width:", ";height:4px;position:absolute;top:0;}"], ({
  theme
}) => theme.colors.primaryFocus, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primaryLight, ({
  percent
}) => percent + '%' || false);
const TextSkills = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "skillsstyled__TextSkills",
  componentId: "tqnh68-3"
})(["color:", ";font-size:1rem;text-align:justify;padding:0 2rem;margin 0 auto;"], ({
  theme
}) => theme.colors.primaryLight);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/header */ "./Containers/header/index.jsx");
/* harmony import */ var _Containers_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/home */ "./Containers/home/index.jsx");
/* harmony import */ var _Containers_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/about */ "./Containers/about/index.jsx");
/* harmony import */ var _Containers_curriculum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/curriculum */ "./Containers/curriculum/index.jsx");
/* harmony import */ var _Containers_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/skills */ "./Containers/skills/index.jsx");
/* harmony import */ var _Containers_contactme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/contactme */ "./Containers/contactme/index.jsx");
/* harmony import */ var _Containers_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/footer */ "./Containers/footer/index.jsx");
var _jsxFileName = "/Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];









const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Containers_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_Containers_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_Containers_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_Containers_curriculum__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(_Containers_skills__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(_Containers_contactme__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx(_Containers_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOnClickOutside = (ref, handler) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alirioangel/desarrollos/repositorios/proyectos_personales/my-portfolio/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-icons/boxicons-logos/Github":
/*!*****************************************************!*\
  !*** external "styled-icons/boxicons-logos/Github" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/boxicons-logos/Github");

/***/ }),

/***/ "styled-icons/boxicons-logos/Linkedin":
/*!*******************************************************!*\
  !*** external "styled-icons/boxicons-logos/Linkedin" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/boxicons-logos/Linkedin");

/***/ }),

/***/ "styled-icons/boxicons-logos/Twitter":
/*!******************************************************!*\
  !*** external "styled-icons/boxicons-logos/Twitter" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/boxicons-logos/Twitter");

/***/ }),

/***/ "styled-icons/boxicons-solid/Phone":
/*!****************************************************!*\
  !*** external "styled-icons/boxicons-solid/Phone" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/boxicons-solid/Phone");

/***/ }),

/***/ "styled-icons/boxicons-solid/UserDetail":
/*!*********************************************************!*\
  !*** external "styled-icons/boxicons-solid/UserDetail" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/boxicons-solid/UserDetail");

/***/ }),

/***/ "styled-icons/fa-solid/GraduationCap":
/*!******************************************************!*\
  !*** external "styled-icons/fa-solid/GraduationCap" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/fa-solid/GraduationCap");

/***/ }),

/***/ "styled-icons/icomoon/Books":
/*!*********************************************!*\
  !*** external "styled-icons/icomoon/Books" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/icomoon/Books");

/***/ }),

/***/ "styled-icons/icomoon/Home":
/*!********************************************!*\
  !*** external "styled-icons/icomoon/Home" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/icomoon/Home");

/***/ }),

/***/ "styled-icons/icomoon/Location":
/*!************************************************!*\
  !*** external "styled-icons/icomoon/Location" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/icomoon/Location");

/***/ }),

/***/ "styled-icons/material/ContactMail":
/*!****************************************************!*\
  !*** external "styled-icons/material/ContactMail" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/material/ContactMail");

/***/ }),

/***/ "styled-icons/material/Email":
/*!**********************************************!*\
  !*** external "styled-icons/material/Email" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/material/Email");

/***/ }),

/***/ "styled-icons/remix-fill/Slideshow":
/*!****************************************************!*\
  !*** external "styled-icons/remix-fill/Slideshow" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/remix-fill/Slideshow");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map