webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__CardWrapper",
  componentId: "sc-15zmsvd-0"
})(["display:grid;justify-content:center;align-content:center;position:relative;padding-top:15px;padding-bottom:30px;overflow:visible;width:100%;height:auto;"]);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__Card",
  componentId: "sc-15zmsvd-1"
})(["box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);position:relative;margin:8px 0;width:100%;overflow:hidden;-webkit-transition:height 1s,color 1s,margin 1s;transition:height 1s,color 1s,margin 1s;z-index:1;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primaryHover;
});
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__Profile",
  componentId: "sc-15zmsvd-2"
})(["position:absolute;right:0;z-index:1;float:right !important;img{width:400px;height:auto;display:block;max-width:100%;}div{top:0;z-index:1;position:absolute;border-style:solid;border-width:400px 0 0 100px;border-color:rgba(223,50,50,0) transparent transparent ", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primaryHover;
});
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__CardContent",
  componentId: "sc-15zmsvd-3"
})(["padding:10px;border-radius:0 0 2px 2px;p{margin:0;color:inherit;text-align:center;}"]);
var InfoHeadings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__InfoHeadings",
  componentId: "sc-15zmsvd-4"
})(["max-width:514px;color:", ";h4{font-family:'Roboto';font-size:2rem;padding-left:3rem;text-align:left;text-transform:uppercase;display:block;width:100%;font-weight:900;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}h6{font-family:'Roboto';font-size:1.6rem;padding-left:3rem;text-align:left;text-transform:capitalize;display:block;width:100%;font-weight:300;margin-top:-30px;margin-bottom:30px;text-shadow:2px 2px 4px rgba(0,0,0,0.29);}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primaryLight;
});
var InfoDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__InfoDetails",
  componentId: "sc-15zmsvd-5"
})(["display:table;margin:0;max-width:100%;padding:0;max-width:515px;margin-top:-30px;ul{text-align:left;list-style-type:none;li{clear:both;span{display:block;float:left;color:", ";line-height:26px;font-size:15px;font-weight:400;i{padding-left:2px;}}}}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primaryLight;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__Container",
  componentId: "sc-15zmsvd-6"
})(["margin:0 auto;@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1100px;}"]);
var SocialBar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__SocialBar",
  componentId: "sc-15zmsvd-7"
})(["display:grid;justify-content:center;width:100%;grid-template-columns:repeat(3,60px);margin:40px 0 0 0;padding:30px 0;gap:25px;"]);
var socialIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "homestyled__socialIcon",
  componentId: "sc-15zmsvd-8"
})(["box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);width:50px;height:50px;border-radius:50px;border:0;i{color:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primaryLight;
});
var GithubIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(socialIcon).withConfig({
  displayName: "homestyled__GithubIcon",
  componentId: "sc-15zmsvd-9"
})(["background:#222;"]);
var LinkedInIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(socialIcon).withConfig({
  displayName: "homestyled__LinkedInIcon",
  componentId: "sc-15zmsvd-10"
})(["background:#006;"]);
var TwitterIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(socialIcon).withConfig({
  displayName: "homestyled__TwitterIcon",
  componentId: "sc-15zmsvd-11"
})(["background:#6af;"]);

/***/ })

})
//# sourceMappingURL=index.js.f7bd5b5a3b2e4170be76.hot-update.js.map