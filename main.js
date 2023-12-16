/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dongle', sans-serif;
}

.scene-container{
    position: absolute;
    width: 100%;
    height: 100vh;
}   

.scene-container .loader{
    display: grid;
    background-image: linear-gradient(to bottom left, #30cfd0 0%, #330867 100%);
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-items: center;
}

.loader .loading-container{
    height: 100px;
    width: 100px;
}

.loading-container .loading-anim{
    overflow: hidden;
    white-space: nowrap;
    animation-name: loading-animation;
    animation-duration: 800ms;
    animation-timing-function: steps(40, end);
    animation-iteration-count: infinite;
}

.scene{
    position:fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit:cover;
    bottom: 0%;    
}

.day{
    background: linear-gradient(to bottom left, #A4CFC7 0%, #7BC3CA 30%, #D9E1CE 60%, #D5C4AF 100%);
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}

.night{
    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}

.card-container{
    color: white;
    position:absolute;
    z-index: 2;
    bottom: 0%;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 4rem 1fr;
}

.anim-container{
    width: 100%;
    height: 300px;
    background: transparent;
    display: grid;
    justify-items: center;
}

#spinner{
    transform-origin: center;
    animation-name: anim-spin;
    animation-duration: 800ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.search-container{
    width: 300px;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.search-container input{
    appearance: none;
    outline: none;
    border: none;
    background: white;
    height: 100%;
    width: 250px;
    text-indent: 5px;
    font-size: 1.5rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    opacity: 0.7;
}

.search-btn{
    cursor: pointer;
    width: 2rem;
    height: 100%;
    border: none;
    background: white;
    outline: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.7;
}

.weather-card{
    width: 768px;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 300ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    padding-bottom: 20px;
}

.weather-card .card-header{
    display: grid;
    grid-template-rows: 2rem 6rem;
}

.card-header .region{
    font-size: 2rem;
    grid-row: 1/2;
    text-align: center;
}

.card-header .temperature{
    font-size: 6rem;
    grid-row: 2/3;
    text-align: center;
}

.weather-card .icon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.weather-card .weather{
    font-size: 3rem;
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: 2rem 1fr;
    align-items: center;
    gap: 1rem;
}

.weather-card .current-day{
    font-size: 2rem;
}

.weather .crnt-weather-details{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(160px, 1fr));
    grid-template-rows: repeat(2,1fr);
    align-items: center;
    justify-items: center;
    row-gap: 10px;
}

.crnt-weather-details > *{
    display: grid;
    width: 160px;
    grid-template-columns: repeat(2,50%);
    grid-template-rows: repeat(2,50%);
    align-items: center;
    justify-items: center;
    font-size: 1.5rem;
}

.feels-like-icon, .humidity-icon, .wind-icon, .fahrenheit-icon{
    grid-row: 1/3;
    grid-column: 1/2;
    width: 40px;
    height: 40px;
    display: grid;
    align-items: center;
    justify-items: center;
}

.weather-card .forecast-details{
    width: 100%;
    height: 100%;
    grid-row: 6/7;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
}

.forecast-details .tomorrow-forecast, .forecast-details .after-tomorrow{
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    column-gap: 30%;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .weather-card{
        width: 100%;
    }
    .search-container{
        width: 100%;
    }
}

@keyframes fade-in {
    to{
        opacity: 1;
    }
}
@keyframes anim-spin {
    0%{
        stroke-dasharray: 1 98;
        stroke-dashoffset: -100;
    }
    50%{
        stroke-dasharray: 80 10;
        stroke-dashoffset: -160;
    }
    100%{
        stroke-dasharray: 1 98;
        stroke-dashoffset: -300;
    }
}

@keyframes loading-animation {
    from{
        width: 80px;
        /* opacity: 0; */
        /* transform: scale(1); */
    }
    to{
        width: 109px;
        /* opacity: 1; */
        /* transform: scale(1.2); */
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Dongle', sans-serif;\n}\n\n.scene-container{\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n}   \n\n.scene-container .loader{\n    display: grid;\n    background-image: linear-gradient(to bottom left, #30cfd0 0%, #330867 100%);\n    height: 100vh;\n    width: 100vw;\n    align-items: center;\n    justify-items: center;\n}\n\n.loader .loading-container{\n    height: 100px;\n    width: 100px;\n}\n\n.loading-container .loading-anim{\n    overflow: hidden;\n    white-space: nowrap;\n    animation-name: loading-animation;\n    animation-duration: 800ms;\n    animation-timing-function: steps(40, end);\n    animation-iteration-count: infinite;\n}\n\n.scene{\n    position:fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    object-fit:cover;\n    bottom: 0%;    \n}\n\n.day{\n    background: linear-gradient(to bottom left, #A4CFC7 0%, #7BC3CA 30%, #D9E1CE 60%, #D5C4AF 100%);\n    opacity: 0;\n    animation-name: fade-in;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n\n}\n\n.night{\n    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);\n    opacity: 0;\n    animation-name: fade-in;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n\n}\n\n.card-container{\n    color: white;\n    position:absolute;\n    z-index: 2;\n    bottom: 0%;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: 4rem 1fr;\n}\n\n.anim-container{\n    width: 100%;\n    height: 300px;\n    background: transparent;\n    display: grid;\n    justify-items: center;\n}\n\n#spinner{\n    transform-origin: center;\n    animation-name: anim-spin;\n    animation-duration: 800ms;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n.search-container{\n    width: 300px;\n    height: 4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n.search-container input{\n    appearance: none;\n    outline: none;\n    border: none;\n    background: white;\n    height: 100%;\n    width: 250px;\n    text-indent: 5px;\n    font-size: 1.5rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    opacity: 0.7;\n}\n\n.search-btn{\n    cursor: pointer;\n    width: 2rem;\n    height: 100%;\n    border: none;\n    background: white;\n    outline: none;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    opacity: 0.7;\n}\n\n.weather-card{\n    width: 768px;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n    opacity: 0;\n    animation-name: fade-in;\n    animation-duration: 300ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    padding-bottom: 20px;\n}\n\n.weather-card .card-header{\n    display: grid;\n    grid-template-rows: 2rem 6rem;\n}\n\n.card-header .region{\n    font-size: 2rem;\n    grid-row: 1/2;\n    text-align: center;\n}\n\n.card-header .temperature{\n    font-size: 6rem;\n    grid-row: 2/3;\n    text-align: center;\n}\n\n.weather-card .icon{\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.weather-card .weather{\n    font-size: 3rem;\n    width: 100%;\n    text-align: center;\n    display: grid;\n    grid-template-rows: 2rem 1fr;\n    align-items: center;\n    gap: 1rem;\n}\n\n.weather-card .current-day{\n    font-size: 2rem;\n}\n\n.weather .crnt-weather-details{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(160px, 1fr));\n    grid-template-rows: repeat(2,1fr);\n    align-items: center;\n    justify-items: center;\n    row-gap: 10px;\n}\n\n.crnt-weather-details > *{\n    display: grid;\n    width: 160px;\n    grid-template-columns: repeat(2,50%);\n    grid-template-rows: repeat(2,50%);\n    align-items: center;\n    justify-items: center;\n    font-size: 1.5rem;\n}\n\n.feels-like-icon, .humidity-icon, .wind-icon, .fahrenheit-icon{\n    grid-row: 1/3;\n    grid-column: 1/2;\n    width: 40px;\n    height: 40px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.weather-card .forecast-details{\n    width: 100%;\n    height: 100%;\n    grid-row: 6/7;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n}\n\n.forecast-details .tomorrow-forecast, .forecast-details .after-tomorrow{\n    font-size: 2rem;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    column-gap: 30%;\n    text-align: center;\n}\n\n@media screen and (max-width: 768px) {\n    .weather-card{\n        width: 100%;\n    }\n    .search-container{\n        width: 100%;\n    }\n}\n\n@keyframes fade-in {\n    to{\n        opacity: 1;\n    }\n}\n@keyframes anim-spin {\n    0%{\n        stroke-dasharray: 1 98;\n        stroke-dashoffset: -100;\n    }\n    50%{\n        stroke-dasharray: 80 10;\n        stroke-dashoffset: -160;\n    }\n    100%{\n        stroke-dasharray: 1 98;\n        stroke-dashoffset: -300;\n    }\n}\n\n@keyframes loading-animation {\n    from{\n        width: 80px;\n        /* opacity: 0; */\n        /* transform: scale(1); */\n    }\n    to{\n        width: 109px;\n        /* opacity: 1; */\n        /* transform: scale(1.2); */\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/dom.js":
/*!***************************!*\
  !*** ./src/script/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoadingAnim: () => (/* binding */ addLoadingAnim),
/* harmony export */   createInitialPage: () => (/* binding */ createInitialPage),
/* harmony export */   createWeatherCard: () => (/* binding */ createWeatherCard),
/* harmony export */   initialPageLoader: () => (/* binding */ initialPageLoader),
/* harmony export */   invalidLocation: () => (/* binding */ invalidLocation),
/* harmony export */   removeInitialPageLoader: () => (/* binding */ removeInitialPageLoader),
/* harmony export */   removeLoadingAnim: () => (/* binding */ removeLoadingAnim),
/* harmony export */   removeWeatherCard: () => (/* binding */ removeWeatherCard),
/* harmony export */   resetToDefaultCard: () => (/* binding */ resetToDefaultCard)
/* harmony export */ });
/* harmony import */ var _images_sky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sky.png */ "./src/images/sky.png");
/* harmony import */ var _images_humidityIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/humidityIcon.svg */ "./src/images/humidityIcon.svg");
/* harmony import */ var _images_windIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/windIcon.svg */ "./src/images/windIcon.svg");
/* harmony import */ var _images_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/fahrenheit.svg */ "./src/images/fahrenheit.svg");
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/script/getWeatherInfo.js");






function addLoadingAnim() {
  const weatherCardContainer = document.querySelector('.card-container');
  const animationContainer = document.createElement('div');
  animationContainer.setAttribute('class', 'anim-container');
  animationContainer.innerHTML = '<svg height="100%" width="100%" viewBox="0 0 500 500"><circle id="spinner" style="stroke-width: 7px; stroke-linecap: round; fill: none; stroke: rgb(230,158,143);" cx="250" cy="250" r="30"></circle></svg>';
  weatherCardContainer.appendChild(animationContainer);
}

function removeLoadingAnim() {
  const weatherCardContainer = document.querySelector('.card-container');
  const animationContainer = document.querySelector('.anim-container');
  weatherCardContainer.removeChild(animationContainer);
}

function addCurrentWeatherDetails(weatherInfo) {
  const temperature = document.createElement('p');
  temperature.setAttribute('class', 'temperature');
  const degreeSign = '\u00B0';
  temperature.textContent = `${weatherInfo.currentWeather.temperature.tempC}${degreeSign}C`;

  const icon = document.createElement('div');
  icon.setAttribute('class', 'icon');
  if (weatherInfo.region.isDay === 'yes') {
    icon.style.background = 'radial-gradient(circle at 30% 60%, #ffd700 0%, transparent 70%)';
  } else {
    icon.style.background = 'radial-gradient(circle at 30% 60%, rgb(204,204,204) 0%, transparent 70%)';
  }
  const weather = document.createElement('div');
  weather.setAttribute('class', 'weather');
  weather.textContent = weatherInfo.currentWeather.condition;
  const crntWeatherDetails = document.createElement('div');
  crntWeatherDetails.setAttribute('class', 'crnt-weather-details');

  const humidity = document.createElement('div');
  humidity.setAttribute('class', 'humidity');
  const humidityIcon = document.createElement('img');
  humidityIcon.setAttribute('class', 'humidity-icon');
  humidityIcon.src = _images_humidityIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
  const humidityHeading = document.createElement('div');
  humidityHeading.textContent = 'Humidity';
  const humidityPercent = document.createElement('div');
  humidityPercent.textContent = `${weatherInfo.currentWeather.temperature.humidity}%`;

  humidity.appendChild(humidityIcon);
  humidity.appendChild(humidityHeading);
  humidity.appendChild(humidityPercent);

  const feelsLike = document.createElement('div');
  feelsLike.setAttribute('class', 'feels-like');
  const feelsLikeIcon = document.createElement('div');
  feelsLikeIcon.setAttribute('class', 'feels-like-icon');
  feelsLikeIcon.innerHTML = '<!doctype html><svg width="40" height="40" viewBox="0 0 40 40"><path style="fill:rgb(255,255,255);" d="M 30 34 L 26 34 C 24.897 33.997 24.004 33.103 24 32 L 24 25 C 22.897 24.997 22.004 24.103 22 23 L 22 17 C 21.969 15.33 23.331 13.969 25 14 L 31 14 C 32.67 13.969 34.031 15.33 34 17 L 34 23 C 33.997 24.103 33.104 24.997 32 25 L 32 32 C 31.997 33.103 31.104 33.997 30 34 Z M 25 16 C 24.435 15.966 23.966 16.434 24 17 L 24 23 L 26 23 L 26 32 L 30 32 L 30 23 L 32 23 L 32 17 C 32.034 16.434 31.566 15.966 31 16 L 25 16 Z M 28 13 C 24.921 13 22.997 9.667 24.536 7 C 26.076 4.333 29.925 4.333 31.464 7 C 31.815 7.608 32 8.298 32 9 C 31.994 11.206 30.207 12.993 28 13 Z M 28 7 C 26.461 7 25.498 8.667 26.268 10 C 27.038 11.333 28.963 11.333 29.732 10 C 29.908 9.696 30 9.351 30 9 C 29.997 7.897 29.104 7.003 28 7 Z M 14 24.184 L 14 16 L 12 16 L 12 24.184 C 9.823 24.954 9.295 27.792 11.051 29.293 C 12.806 30.793 15.528 29.831 15.95 27.561 C 16.22 26.109 15.393 24.676 14 24.184 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"></path><path style="fill:rgb(255,255,255);" d="M 13 34 C 7.617 34.006 4.246 28.182 6.932 23.517 C 7.227 23.005 7.586 22.532 8 22.11 L 8 11 C 8 7.151 12.167 4.745 15.5 6.67 C 17.047 7.563 18 9.214 18 11 L 18 22.11 C 21.77 25.953 19.966 32.436 14.753 33.779 C 14.18 33.926 13.592 34.001 13 34 Z M 13 8 C 11.344 8.002 10.002 9.344 10 11 L 10 22.983 L 9.668 23.282 C 6.799 25.847 7.782 30.557 11.438 31.76 C 15.094 32.962 18.681 29.756 17.895 25.988 C 17.677 24.942 17.129 23.994 16.332 23.282 L 16 22.983 L 16 11 C 15.999 9.344 14.656 8.002 13 8 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"></path><path data-name="<Transparent Rectangle>" style="fill:none" d="M 4 4 L 36 4 L 36 36 L 4 36 L 4 4 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"></path></svg>';
  const feelsLikeHeading = document.createElement('div');
  feelsLikeHeading.textContent = 'Feels like';
  const feelsLikeTemp = document.createElement('div');
  feelsLikeTemp.textContent = `${weatherInfo.currentWeather.temperature.feelsLike}${degreeSign}C`;

  feelsLike.appendChild(feelsLikeIcon);
  feelsLike.appendChild(feelsLikeHeading);
  feelsLike.appendChild(feelsLikeTemp);

  const windSpeed = document.createElement('div');
  windSpeed.setAttribute('class', 'wind-speed');
  const windIcon = document.createElement('img');
  windIcon.setAttribute('class', 'wind-icon');
  windIcon.src = _images_windIcon_svg__WEBPACK_IMPORTED_MODULE_2__;
  const windHeading = document.createElement('div');
  windHeading.textContent = 'Wind speed';
  const windKph = document.createElement('div');
  windKph.textContent = `${weatherInfo.currentWeather.temperature.windKph}KPH`;

  windSpeed.appendChild(windIcon);
  windSpeed.appendChild(windHeading);
  windSpeed.appendChild(windKph);

  const tempF = document.createElement('div');
  tempF.setAttribute('class', 'temp-f');
  const fahrenheitIcon = document.createElement('img');
  fahrenheitIcon.setAttribute('class', 'fahrenheit-icon');
  fahrenheitIcon.src = _images_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_3__;
  const fahrenheitHeading = document.createElement('div');
  fahrenheitHeading.textContent = 'Fahrenheit';
  const fahrenheitTemp = document.createElement('div');
  fahrenheitTemp.textContent = `${weatherInfo.currentWeather.temperature.tempF}${degreeSign}F`;

  tempF.appendChild(fahrenheitIcon);
  tempF.appendChild(fahrenheitHeading);
  tempF.appendChild(fahrenheitTemp);

  crntWeatherDetails.appendChild(humidity);
  crntWeatherDetails.appendChild(feelsLike);
  crntWeatherDetails.appendChild(windSpeed);
  crntWeatherDetails.appendChild(tempF);

  weather.appendChild(crntWeatherDetails);

  const region = document.createElement('div');
  region.setAttribute('class', 'region');
  region.textContent = `${weatherInfo.region.city}, ${weatherInfo.region.country}`;

  const currentDay = document.createElement('div');
  currentDay.setAttribute('class', 'current-day');
  currentDay.textContent = `${weatherInfo.region.localDay}, ${weatherInfo.region.localDate}`;

  return {
    temperature, weather, region, currentDay, icon,
  };
}

function addForecastDetails(weatherInfo) {
  const degreeSign = '\u00B0';
  const tomorrowForecast = document.createElement('div');
  tomorrowForecast.setAttribute('class', 'tomorrow-forecast');
  const tomorrowDay = document.createElement('div');
  tomorrowDay.setAttribute('class', 'tomorrow-day');
  tomorrowDay.textContent = weatherInfo.forecast.tomorrow.day;
  const tomorrowTemp = document.createElement('div');
  tomorrowTemp.setAttribute('class', 'tomorrow-temp');
  tomorrowTemp.textContent = `${weatherInfo.forecast.tomorrow.maxTemp}${degreeSign}C`;
  const tomorrowDate = document.createElement('div');
  tomorrowDate.setAttribute('class', 'tomorrow-date');
  tomorrowDate.textContent = weatherInfo.forecast.tomorrow.date;
  const tomorrowCondition = document.createElement('div');
  tomorrowCondition.setAttribute('class', 'tomorrow-condition');
  tomorrowCondition.textContent = weatherInfo.forecast.tomorrow.condition.text;

  tomorrowForecast.appendChild(tomorrowDay);
  tomorrowForecast.appendChild(tomorrowTemp);
  tomorrowForecast.appendChild(tomorrowDate);
  tomorrowForecast.appendChild(tomorrowCondition);

  const dayAfterTomorrow = document.createElement('div');
  dayAfterTomorrow.setAttribute('class', 'after-tomorrow');
  const afterTomorrowDay = document.createElement('div');
  afterTomorrowDay.setAttribute('class', 'after-tomorrow-day');
  afterTomorrowDay.textContent = weatherInfo.forecast.dayAfterTomorrow.day;
  const afterTomorrowTemp = document.createElement('div');
  afterTomorrowTemp.setAttribute('class', 'after-tomorrow-temp');
  afterTomorrowTemp.textContent = `${weatherInfo.forecast.dayAfterTomorrow.maxTemp}${degreeSign}C`;
  const afterTomorrowDate = document.createElement('div');
  afterTomorrowDate.setAttribute('class', 'after-tomorrow-date');
  afterTomorrowDate.textContent = weatherInfo.forecast.dayAfterTomorrow.date;
  const afterTomorrowCondition = document.createElement('div');
  afterTomorrowCondition.setAttribute('class', 'after-tomorrow-condition');
  afterTomorrowCondition.textContent = weatherInfo.forecast.dayAfterTomorrow.condition.text;

  dayAfterTomorrow.appendChild(afterTomorrowDay);
  dayAfterTomorrow.appendChild(afterTomorrowTemp);
  dayAfterTomorrow.appendChild(afterTomorrowDate);
  dayAfterTomorrow.appendChild(afterTomorrowCondition);

  return { tomorrowForecast, dayAfterTomorrow };
}

function removeWeatherCard() {
  const weatherCardContainer = document.querySelector('.card-container');
  if (weatherCardContainer.classList.contains('card-present')) {
    weatherCardContainer.classList.toggle('card-present');
    const weatherCard = document.querySelector('.weather-card');
    weatherCardContainer.removeChild(weatherCard);
  }
}

function changeSceneBackground(weatherInfo) {
  const scene = document.querySelector('.scene');
  if (weatherInfo.region.isDay === 'yes') {
    if (scene.classList.contains('night')) {
      scene.classList.remove('night');
    }
    scene.classList.add('day');
  } else {
    if (scene.classList.contains('day')) {
      scene.classList.remove('day');
    }
    scene.classList.add('night');
  }
}

function createWeatherCard(weatherInfo) {
  const weatherCardContainer = document.querySelector('.card-container');
  removeWeatherCard();
  changeSceneBackground(weatherInfo);

  weatherCardContainer.classList.toggle('card-present');
  const weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'weather-card');

  const currentWeatherDetails = addCurrentWeatherDetails(weatherInfo);

  const cardHeader = document.createElement('div');
  cardHeader.setAttribute('class', 'card-header');
  cardHeader.appendChild(currentWeatherDetails.region);
  cardHeader.appendChild(currentWeatherDetails.temperature);

  const forecastDetails = document.createElement('div');
  forecastDetails.setAttribute('class', 'forecast-details');
  const forecast = addForecastDetails(weatherInfo);

  forecastDetails.appendChild(forecast.tomorrowForecast);
  forecastDetails.appendChild(forecast.dayAfterTomorrow);

  weatherCard.appendChild(cardHeader);
  weatherCard.appendChild(currentWeatherDetails.icon);
  weatherCard.appendChild(currentWeatherDetails.weather);
  weatherCard.appendChild(currentWeatherDetails.currentDay);
  weatherCard.appendChild(forecastDetails);

  weatherCardContainer.appendChild(weatherCard);
}

function resetToDefaultCard() {
  const defaultLocation = 'London';
  (0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(defaultLocation).then((response) => {
    removeLoadingAnim();
    createWeatherCard(response);
  });
}

function invalidLocation() {
  const search = document.querySelector('.search-city');
  if (search.value === '') {
    alert('Search bar cannot be empty');
  } else {
    alert(`${search.value} doesnot exist`);
  }
  resetToDefaultCard();
}

function initialPageLoader() {
  const sceneContainer = document.querySelector('.scene-container');
  const loader = document.createElement('loader');
  loader.setAttribute('class', 'loader');
  const loadingContainer = document.createElement('div');
  loadingContainer.setAttribute('class', 'loading-container');
  const loadingAnim = document.createElement('h1');
  loadingAnim.setAttribute('class', 'loading-anim');
  loadingAnim.textContent = 'Loading . . .';

  loadingContainer.appendChild(loadingAnim);
  loader.appendChild(loadingContainer);

  sceneContainer.appendChild(loader);
}

function removeInitialPageLoader() {
  const sceneContainer = document.querySelector('.scene-container');
  const loader = document.querySelector('.loader');
  sceneContainer.removeChild(loader);
}

function createInitialPage(weatherInfo) {
  const sceneContainer = document.querySelector('.scene-container');
  const img = document.createElement('img');
  img.setAttribute('src', _images_sky_png__WEBPACK_IMPORTED_MODULE_0__);
  img.setAttribute('class', 'scene');
  sceneContainer.appendChild(img);
  changeSceneBackground(weatherInfo);

  const weatherCardContainer = document.createElement('div');
  weatherCardContainer.setAttribute('class', 'card-container');
  sceneContainer.appendChild(weatherCardContainer);

  const searchContainer = document.createElement('form');
  searchContainer.setAttribute('class', 'search-container');

  const userSearch = document.createElement('input');
  userSearch.setAttribute('type', 'text');
  userSearch.setAttribute('name', 'search-city');
  userSearch.setAttribute('id', 'search-city');
  userSearch.setAttribute('class', 'search-city');
  userSearch.setAttribute('placeholder', 'Enter city name');
  userSearch.setAttribute('autocomplete', 'off');
  const searchBtn = document.createElement('button');
  searchBtn.setAttribute('class', 'search-btn');
  searchBtn.setAttribute('type', 'submit');
  searchBtn.innerHTML = '<svg class="search-icon" width="100%" height="100%" viewBox="-3.2 -3.2 38.4 38.4" xmlns="http://www.w3.org/2000/svg"><path d="M13.46 24.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2Zm18.228 5.8-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87C26.92 5.93 20.894 0 13.46 0 6.026 0 0 5.93 0 13.25c0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 0 0 8.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44Z" fill="#000" fill-rule="evenodd"/></svg>';

  searchContainer.appendChild(userSearch);
  searchContainer.appendChild(searchBtn);
  weatherCardContainer.appendChild(searchContainer);
  createWeatherCard(weatherInfo);
}


/***/ }),

/***/ "./src/script/eventHandling.js":
/*!*************************************!*\
  !*** ./src/script/eventHandling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/script/getWeatherInfo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/script/dom.js");



function searchFormSubmit() {
  const userSearch = document.querySelector('.search-city');
  const location = userSearch.value;
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeWeatherCard)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addLoadingAnim)();
  (0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(location).then((response) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeLoadingAnim)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createWeatherCard)(response);
  }, (err) => {
    if (err.message.includes('400')) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.invalidLocation)();
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchFormSubmit);


/***/ }),

/***/ "./src/script/getWeatherInfo.js":
/*!**************************************!*\
  !*** ./src/script/getWeatherInfo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Write the functions that hit the API.
// You’re going to want functions that can take a location
// and return the weather data for that location. For now, just console.log() the information.

function getWeatherData(location) {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=a1cd623f96c04f989fa83523230812&q=${location}&days=3`, { mode: 'cors' })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json();
      }
    })
    .then((weatherData) => {
      const date = new Date(weatherData.location.localtime_epoch * 1000);
      const year = date.getFullYear() - 2000;
      const month = date.getMonth();
      const dayDate = date.getDate();
      const day = date.getDay();
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const dayTime = weatherData.current.is_day === 1 ? 'yes' : 'no';

      const tomorrowForecastDate = new Date(weatherData.forecast.forecastday[1].date_epoch * 1000);
      const tomorrowDate = `${tomorrowForecastDate.getDate()} ${months[tomorrowForecastDate.getMonth()]} ${year}`;
      const tomorrowDay = `${weekday[tomorrowForecastDate.getDay()]}`;

      const dayAfterTomorrow = new Date(weatherData.forecast.forecastday[2].date_epoch * 1000);
      const dayAfterTomorrowDate = `${dayAfterTomorrow.getDate()} ${months[dayAfterTomorrow.getMonth()]} ${year}`;
      const afterTomorrowDay = `${weekday[dayAfterTomorrow.getDay()]}`;

      const weatherInfo = {
        currentWeather: {
          condition: weatherData.current.condition.text,
          temperature: {
            tempC: weatherData.current.temp_c,
            tempF: weatherData.current.temp_f,
            humidity: weatherData.current.humidity,
            feelsLike: weatherData.current.feelslike_c,
            windKph: weatherData.current.wind_kph,
          },
        },
        forecast: {
          tomorrow: {
            condition: weatherData.forecast.forecastday[1].day.condition,
            maxTemp: weatherData.forecast.forecastday[1].day.maxtemp_c,
            date: tomorrowDate,
            day: tomorrowDay,
          },
          dayAfterTomorrow: {
            condition: weatherData.forecast.forecastday[2].day.condition,
            maxTemp: weatherData.forecast.forecastday[2].day.maxtemp_c,
            date: dayAfterTomorrowDate,
            day: afterTomorrowDay,
          },
        },
        region: {
          city: weatherData.location.name,
          country: weatherData.location.country,
          localDate: `${dayDate} ${months[month]} ${year}`,
          localDay: `${weekday[day]}`,
          isDay: dayTime,
        },
      };

      return weatherInfo;
    })
    .catch((err) => { throw err; });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


/***/ }),

/***/ "./src/images/fahrenheit.svg":
/*!***********************************!*\
  !*** ./src/images/fahrenheit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e49ba87e252ad90a3ef.svg";

/***/ }),

/***/ "./src/images/humidityIcon.svg":
/*!*************************************!*\
  !*** ./src/images/humidityIcon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295e85f5fae4b743233c.svg";

/***/ }),

/***/ "./src/images/sky.png":
/*!****************************!*\
  !*** ./src/images/sky.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df424114d68932faee8d.png";

/***/ }),

/***/ "./src/images/windIcon.svg":
/*!*********************************!*\
  !*** ./src/images/windIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bf4288d7608fd86b1ba.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _eventHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandling */ "./src/script/eventHandling.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/script/dom.js");
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/script/getWeatherInfo.js");





const defaultLocation = 'London';
(0,_dom__WEBPACK_IMPORTED_MODULE_2__.initialPageLoader)();
(0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultLocation).then((weatherInfo) => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeInitialPageLoader)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createInitialPage)(weatherInfo);
}).then(() => {
  const searchForm = document.querySelector('.search-container');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_eventHandling__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkU5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNtQjtBQUN1QztBQUN4Qzs7QUFFOUM7QUFDQSx1REFBaUI7QUFDakIsMkRBQWM7QUFDZCxFQUFFLDZEQUF1QjtBQUN6QixFQUFFLHVEQUFpQjtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHQvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9ldmVudEhhbmRsaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9nZXRXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgc2Fucy1zZXJpZjtcbn1cblxuLnNjZW5lLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0gICBcblxuLnNjZW5lLWNvbnRhaW5lciAubG9hZGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMzBjZmQwIDAlLCAjMzMwODY3IDEwMCUpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGVyIC5sb2FkaW5nLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nLWFuaW17XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBsb2FkaW5nLWFuaW1hdGlvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDQwLCBlbmQpO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uc2NlbmV7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgICBib3R0b206IDAlOyAgICBcbn1cblxuLmRheXtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNBNENGQzcgMCUsICM3QkMzQ0EgMzAlLCAjRDlFMUNFIDYwJSwgI0Q1QzRBRiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxufVxuXG4ubmlnaHR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMEYxQzJFIDAlLCAjMUUzMzU4IDI1JSwgIzMyNEQ4MSA1MCUsICM0NjZCQUEgMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cblxuLmNhcmQtY29udGFpbmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmcjtcbn1cblxuLmFuaW0tY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzcGlubmVye1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbS1zcGluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uc2VhcmNoLWJ0bntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLndlYXRoZXItY2FyZHtcbiAgICB3aWR0aDogNzY4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLndlYXRoZXItY2FyZCAuY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gNnJlbTtcbn1cblxuLmNhcmQtaGVhZGVyIC5yZWdpb257XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXIgLnRlbXBlcmF0dXJle1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlYXRoZXItY2FyZCAuaWNvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53ZWF0aGVyLWNhcmQgLndlYXRoZXJ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtZGF5e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLndlYXRoZXIgLmNybnQtd2VhdGhlci1kZXRhaWxze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMTBweDtcbn1cblxuLmNybnQtd2VhdGhlci1kZXRhaWxzID4gKntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDUwJSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiw1MCUpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZmVlbHMtbGlrZS1pY29uLCAuaHVtaWRpdHktaWNvbiwgLndpbmQtaWNvbiwgLmZhaHJlbmhlaXQtaWNvbntcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmZvcmVjYXN0LWRldGFpbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtcm93OiA2Lzc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmZvcmVjYXN0LWRldGFpbHMgLnRvbW9ycm93LWZvcmVjYXN0LCAuZm9yZWNhc3QtZGV0YWlscyAuYWZ0ZXItdG9tb3Jyb3d7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcbiAgICBjb2x1bW4tZ2FwOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC53ZWF0aGVyLWNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIHRve1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYW5pbS1zcGluIHtcbiAgICAwJXtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSA5ODtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAgMTA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTYwO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxIDk4O1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTMwMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24ge1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAvKiBvcGFjaXR5OiAwOyAqL1xuICAgICAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDEwOXB4O1xuICAgICAgICAvKiBvcGFjaXR5OiAxOyAqL1xuICAgICAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMik7ICovXG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLDJCQUEyQjtJQUMvQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2NlbmUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn0gICBcXG5cXG4uc2NlbmUtY29udGFpbmVyIC5sb2FkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzMwY2ZkMCAwJSwgIzMzMDg2NyAxMDAlKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2FkZXIgLmxvYWRpbmctY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZy1hbmlte1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZGluZy1hbmltYXRpb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDQwLCBlbmQpO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuLnNjZW5le1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcXG4gICAgYm90dG9tOiAwJTsgICAgXFxufVxcblxcbi5kYXl7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI0E0Q0ZDNyAwJSwgIzdCQzNDQSAzMCUsICNEOUUxQ0UgNjAlLCAjRDVDNEFGIDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbn1cXG5cXG4ubmlnaHR7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzBGMUMyRSAwJSwgIzFFMzM1OCAyNSUsICMzMjREODEgNTAlLCAjNDY2QkFBIDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbn1cXG5cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmcjtcXG59XFxuXFxuLmFuaW0tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NwaW5uZXJ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW0tc3BpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICB0ZXh0LWluZGVudDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uc2VhcmNoLWJ0bntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLndlYXRoZXItY2FyZHtcXG4gICAgd2lkdGg6IDc2OHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmNhcmQtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gNnJlbTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIC5yZWdpb257XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIgLnRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuaWNvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLndlYXRoZXJ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5jdXJyZW50LWRheXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlciAuY3JudC13ZWF0aGVyLWRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNjBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY3JudC13ZWF0aGVyLWRldGFpbHMgPiAqe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiw1MCUpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS1pY29uLCAuaHVtaWRpdHktaWNvbiwgLndpbmQtaWNvbiwgLmZhaHJlbmhlaXQtaWNvbntcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXJvdzogNi83O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1kZXRhaWxzIC50b21vcnJvdy1mb3JlY2FzdCwgLmZvcmVjYXN0LWRldGFpbHMgLmFmdGVyLXRvbW9ycm93e1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLndlYXRoZXItY2FyZHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgdG97XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbS1zcGluIHtcXG4gICAgMCV7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxIDk4O1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XFxuICAgIH1cXG4gICAgNTAle1xcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAgMTA7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTE2MDtcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSA5ODtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24ge1xcbiAgICBmcm9te1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAvKiBvcGFjaXR5OiAwOyAqL1xcbiAgICAgICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHdpZHRoOiAxMDlweDtcXG4gICAgICAgIC8qIG9wYWNpdHk6IDE7ICovXFxuICAgICAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMik7ICovXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWFnZXMvc2t5LnBuZyc7XG5pbXBvcnQgSHVtaWRpdHlJY29uIGZyb20gJy4uL2ltYWdlcy9odW1pZGl0eUljb24uc3ZnJztcbmltcG9ydCBXaW5kSWNvbiBmcm9tICcuLi9pbWFnZXMvd2luZEljb24uc3ZnJztcbmltcG9ydCBGYWhyZW5oZWl0SWNvbiBmcm9tICcuLi9pbWFnZXMvZmFocmVuaGVpdC5zdmcnO1xuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZ2V0V2VhdGhlckluZm8nO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9hZGluZ0FuaW0oKSB7XG4gIGNvbnN0IHdlYXRoZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGFuaW1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbmltYXRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhbmltLWNvbnRhaW5lcicpO1xuICBhbmltYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPjxjaXJjbGUgaWQ9XCJzcGlubmVyXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6IDdweDsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBmaWxsOiBub25lOyBzdHJva2U6IHJnYigyMzAsMTU4LDE0Myk7XCIgY3g9XCIyNTBcIiBjeT1cIjI1MFwiIHI9XCIzMFwiPjwvY2lyY2xlPjwvc3ZnPic7XG4gIHdlYXRoZXJDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFuaW1hdGlvbkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMb2FkaW5nQW5pbSgpIHtcbiAgY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW0tY29udGFpbmVyJyk7XG4gIHdlYXRoZXJDYXJkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGFuaW1hdGlvbkNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1cnJlbnRXZWF0aGVyRGV0YWlscyh3ZWF0aGVySW5mbykge1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wZXJhdHVyZScpO1xuICBjb25zdCBkZWdyZWVTaWduID0gJ1xcdTAwQjAnO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLnRlbXBDfSR7ZGVncmVlU2lnbn1DYDtcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gIGlmICh3ZWF0aGVySW5mby5yZWdpb24uaXNEYXkgPT09ICd5ZXMnKSB7XG4gICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDYwJSwgI2ZmZDcwMCAwJSwgdHJhbnNwYXJlbnQgNzAlKSc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDYwJSwgcmdiKDIwNCwyMDQsMjA0KSAwJSwgdHJhbnNwYXJlbnQgNzAlKSc7XG4gIH1cbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlcicpO1xuICB3ZWF0aGVyLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIuY29uZGl0aW9uO1xuICBjb25zdCBjcm50V2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3JudC13ZWF0aGVyLWRldGFpbHMnKTtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5Jyk7XG4gIGNvbnN0IGh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBodW1pZGl0eUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdodW1pZGl0eS1pY29uJyk7XG4gIGh1bWlkaXR5SWNvbi5zcmMgPSBIdW1pZGl0eUljb247XG4gIGNvbnN0IGh1bWlkaXR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eUhlYWRpbmcudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xuICBjb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHlQZXJjZW50LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUuaHVtaWRpdHl9JWA7XG5cbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJY29uKTtcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlIZWFkaW5nKTtcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50KTtcblxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmVlbHMtbGlrZScpO1xuICBjb25zdCBmZWVsc0xpa2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWVscy1saWtlLWljb24nKTtcbiAgZmVlbHNMaWtlSWNvbi5pbm5lckhUTUwgPSAnPCFkb2N0eXBlIGh0bWw+PHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggc3R5bGU9XCJmaWxsOnJnYigyNTUsMjU1LDI1NSk7XCIgZD1cIk0gMzAgMzQgTCAyNiAzNCBDIDI0Ljg5NyAzMy45OTcgMjQuMDA0IDMzLjEwMyAyNCAzMiBMIDI0IDI1IEMgMjIuODk3IDI0Ljk5NyAyMi4wMDQgMjQuMTAzIDIyIDIzIEwgMjIgMTcgQyAyMS45NjkgMTUuMzMgMjMuMzMxIDEzLjk2OSAyNSAxNCBMIDMxIDE0IEMgMzIuNjcgMTMuOTY5IDM0LjAzMSAxNS4zMyAzNCAxNyBMIDM0IDIzIEMgMzMuOTk3IDI0LjEwMyAzMy4xMDQgMjQuOTk3IDMyIDI1IEwgMzIgMzIgQyAzMS45OTcgMzMuMTAzIDMxLjEwNCAzMy45OTcgMzAgMzQgWiBNIDI1IDE2IEMgMjQuNDM1IDE1Ljk2NiAyMy45NjYgMTYuNDM0IDI0IDE3IEwgMjQgMjMgTCAyNiAyMyBMIDI2IDMyIEwgMzAgMzIgTCAzMCAyMyBMIDMyIDIzIEwgMzIgMTcgQyAzMi4wMzQgMTYuNDM0IDMxLjU2NiAxNS45NjYgMzEgMTYgTCAyNSAxNiBaIE0gMjggMTMgQyAyNC45MjEgMTMgMjIuOTk3IDkuNjY3IDI0LjUzNiA3IEMgMjYuMDc2IDQuMzMzIDI5LjkyNSA0LjMzMyAzMS40NjQgNyBDIDMxLjgxNSA3LjYwOCAzMiA4LjI5OCAzMiA5IEMgMzEuOTk0IDExLjIwNiAzMC4yMDcgMTIuOTkzIDI4IDEzIFogTSAyOCA3IEMgMjYuNDYxIDcgMjUuNDk4IDguNjY3IDI2LjI2OCAxMCBDIDI3LjAzOCAxMS4zMzMgMjguOTYzIDExLjMzMyAyOS43MzIgMTAgQyAyOS45MDggOS42OTYgMzAgOS4zNTEgMzAgOSBDIDI5Ljk5NyA3Ljg5NyAyOS4xMDQgNy4wMDMgMjggNyBaIE0gMTQgMjQuMTg0IEwgMTQgMTYgTCAxMiAxNiBMIDEyIDI0LjE4NCBDIDkuODIzIDI0Ljk1NCA5LjI5NSAyNy43OTIgMTEuMDUxIDI5LjI5MyBDIDEyLjgwNiAzMC43OTMgMTUuNTI4IDI5LjgzMSAxNS45NSAyNy41NjEgQyAxNi4yMiAyNi4xMDkgMTUuMzkzIDI0LjY3NiAxNCAyNC4xODQgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDAsIDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMClcIj48L3BhdGg+PHBhdGggc3R5bGU9XCJmaWxsOnJnYigyNTUsMjU1LDI1NSk7XCIgZD1cIk0gMTMgMzQgQyA3LjYxNyAzNC4wMDYgNC4yNDYgMjguMTgyIDYuOTMyIDIzLjUxNyBDIDcuMjI3IDIzLjAwNSA3LjU4NiAyMi41MzIgOCAyMi4xMSBMIDggMTEgQyA4IDcuMTUxIDEyLjE2NyA0Ljc0NSAxNS41IDYuNjcgQyAxNy4wNDcgNy41NjMgMTggOS4yMTQgMTggMTEgTCAxOCAyMi4xMSBDIDIxLjc3IDI1Ljk1MyAxOS45NjYgMzIuNDM2IDE0Ljc1MyAzMy43NzkgQyAxNC4xOCAzMy45MjYgMTMuNTkyIDM0LjAwMSAxMyAzNCBaIE0gMTMgOCBDIDExLjM0NCA4LjAwMiAxMC4wMDIgOS4zNDQgMTAgMTEgTCAxMCAyMi45ODMgTCA5LjY2OCAyMy4yODIgQyA2Ljc5OSAyNS44NDcgNy43ODIgMzAuNTU3IDExLjQzOCAzMS43NiBDIDE1LjA5NCAzMi45NjIgMTguNjgxIDI5Ljc1NiAxNy44OTUgMjUuOTg4IEMgMTcuNjc3IDI0Ljk0MiAxNy4xMjkgMjMuOTk0IDE2LjMzMiAyMy4yODIgTCAxNiAyMi45ODMgTCAxNiAxMSBDIDE1Ljk5OSA5LjM0NCAxNC42NTYgOC4wMDIgMTMgOCBaXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwKVwiPjwvcGF0aD48cGF0aCBkYXRhLW5hbWU9XCI8VHJhbnNwYXJlbnQgUmVjdGFuZ2xlPlwiIHN0eWxlPVwiZmlsbDpub25lXCIgZD1cIk0gNCA0IEwgMzYgNCBMIDM2IDM2IEwgNCAzNiBMIDQgNCBaXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwKVwiPjwvcGF0aD48L3N2Zz4nO1xuICBjb25zdCBmZWVsc0xpa2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZSc7XG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLmZlZWxzTGlrZX0ke2RlZ3JlZVNpZ259Q2A7XG5cbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZUljb24pO1xuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSGVhZGluZyk7XG4gIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZC1zcGVlZCcpO1xuICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3aW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmQtaWNvbicpO1xuICB3aW5kSWNvbi5zcmMgPSBXaW5kSWNvbjtcbiAgY29uc3Qgd2luZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2luZCBzcGVlZCc7XG4gIGNvbnN0IHdpbmRLcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEtwaC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLndpbmRLcGh9S1BIYDtcblxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEhlYWRpbmcpO1xuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEtwaCk7XG5cbiAgY29uc3QgdGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcEYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wLWYnKTtcbiAgY29uc3QgZmFocmVuaGVpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZmFocmVuaGVpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYWhyZW5oZWl0LWljb24nKTtcbiAgZmFocmVuaGVpdEljb24uc3JjID0gRmFocmVuaGVpdEljb247XG4gIGNvbnN0IGZhaHJlbmhlaXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhaHJlbmhlaXRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZhaHJlbmhlaXQnO1xuICBjb25zdCBmYWhyZW5oZWl0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWhyZW5oZWl0VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLnRlbXBGfSR7ZGVncmVlU2lnbn1GYDtcblxuICB0ZW1wRi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0SWNvbik7XG4gIHRlbXBGLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRIZWFkaW5nKTtcbiAgdGVtcEYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdFRlbXApO1xuXG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICBjcm50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHRlbXBGKTtcblxuICB3ZWF0aGVyLmFwcGVuZENoaWxkKGNybnRXZWF0aGVyRGV0YWlscyk7XG5cbiAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlZ2lvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlZ2lvbicpO1xuICByZWdpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5yZWdpb24uY2l0eX0sICR7d2VhdGhlckluZm8ucmVnaW9uLmNvdW50cnl9YDtcblxuICBjb25zdCBjdXJyZW50RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnREYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW50LWRheScpO1xuICBjdXJyZW50RGF5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8ucmVnaW9uLmxvY2FsRGF5fSwgJHt3ZWF0aGVySW5mby5yZWdpb24ubG9jYWxEYXRlfWA7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgcmVnaW9uLCBjdXJyZW50RGF5LCBpY29uLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRGb3JlY2FzdERldGFpbHMod2VhdGhlckluZm8pIHtcbiAgY29uc3QgZGVncmVlU2lnbiA9ICdcXHUwMEIwJztcbiAgY29uc3QgdG9tb3Jyb3dGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0ZvcmVjYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctZm9yZWNhc3QnKTtcbiAgY29uc3QgdG9tb3Jyb3dEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dEYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy1kYXknKTtcbiAgdG9tb3Jyb3dEYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5kYXk7XG4gIGNvbnN0IHRvbW9ycm93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd1RlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy10ZW1wJyk7XG4gIHRvbW9ycm93VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93Lm1heFRlbXB9JHtkZWdyZWVTaWdufUNgO1xuICBjb25zdCB0b21vcnJvd0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctZGF0ZScpO1xuICB0b21vcnJvd0RhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5kYXRlO1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0NvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LWNvbmRpdGlvbicpO1xuICB0b21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93LmNvbmRpdGlvbi50ZXh0O1xuXG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dEYXkpO1xuICB0b21vcnJvd0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93VGVtcCk7XG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dEYXRlKTtcbiAgdG9tb3Jyb3dGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgY29uc3QgZGF5QWZ0ZXJUb21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlBZnRlclRvbW9ycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3cnKTtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93RGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3ctZGF5Jyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93LmRheTtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd1RlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy10ZW1wJyk7XG4gIGFmdGVyVG9tb3Jyb3dUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5tYXhUZW1wfSR7ZGVncmVlU2lnbn1DYDtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy1kYXRlJyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXRlLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5kYXRlO1xuICBjb25zdCBhZnRlclRvbW9ycm93Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFmdGVyVG9tb3Jyb3dDb25kaXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy1jb25kaXRpb24nKTtcbiAgYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cuY29uZGl0aW9uLnRleHQ7XG5cbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93RGF5KTtcbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93VGVtcCk7XG4gIGRheUFmdGVyVG9tb3Jyb3cuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0RhdGUpO1xuICBkYXlBZnRlclRvbW9ycm93LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gIHJldHVybiB7IHRvbW9ycm93Rm9yZWNhc3QsIGRheUFmdGVyVG9tb3Jyb3cgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdlYXRoZXJDYXJkKCkge1xuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICBpZiAod2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLXByZXNlbnQnKSkge1xuICAgIHdlYXRoZXJDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmQtcHJlc2VudCcpO1xuICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICAgIHdlYXRoZXJDYXJkQ29udGFpbmVyLnJlbW92ZUNoaWxkKHdlYXRoZXJDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTY2VuZUJhY2tncm91bmQod2VhdGhlckluZm8pIHtcbiAgY29uc3Qgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKTtcbiAgaWYgKHdlYXRoZXJJbmZvLnJlZ2lvbi5pc0RheSA9PT0gJ3llcycpIHtcbiAgICBpZiAoc2NlbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCduaWdodCcpKSB7XG4gICAgICBzY2VuZS5jbGFzc0xpc3QucmVtb3ZlKCduaWdodCcpO1xuICAgIH1cbiAgICBzY2VuZS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc2NlbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXknKSkge1xuICAgICAgc2NlbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGF5Jyk7XG4gICAgfVxuICAgIHNjZW5lLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJJbmZvKSB7XG4gIGNvbnN0IHdlYXRoZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gIHJlbW92ZVdlYXRoZXJDYXJkKCk7XG4gIGNoYW5nZVNjZW5lQmFja2dyb3VuZCh3ZWF0aGVySW5mbyk7XG5cbiAgd2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1wcmVzZW50Jyk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jYXJkJyk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gYWRkQ3VycmVudFdlYXRoZXJEZXRhaWxzKHdlYXRoZXJJbmZvKTtcblxuICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWhlYWRlcicpO1xuICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy5yZWdpb24pO1xuICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy50ZW1wZXJhdHVyZSk7XG5cbiAgY29uc3QgZm9yZWNhc3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcmVjYXN0RGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvcmVjYXN0LWRldGFpbHMnKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBhZGRGb3JlY2FzdERldGFpbHMod2VhdGhlckluZm8pO1xuXG4gIGZvcmVjYXN0RGV0YWlscy5hcHBlbmRDaGlsZChmb3JlY2FzdC50b21vcnJvd0ZvcmVjYXN0KTtcbiAgZm9yZWNhc3REZXRhaWxzLmFwcGVuZENoaWxkKGZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cpO1xuXG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMuaWNvbik7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy53ZWF0aGVyKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLmN1cnJlbnREYXkpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERldGFpbHMpO1xuXG4gIHdlYXRoZXJDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDYXJkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VG9EZWZhdWx0Q2FyZCgpIHtcbiAgY29uc3QgZGVmYXVsdExvY2F0aW9uID0gJ0xvbmRvbic7XG4gIGdldFdlYXRoZXJEYXRhKGRlZmF1bHRMb2NhdGlvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZW1vdmVMb2FkaW5nQW5pbSgpO1xuICAgIGNyZWF0ZVdlYXRoZXJDYXJkKHJlc3BvbnNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkTG9jYXRpb24oKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY2l0eScpO1xuICBpZiAoc2VhcmNoLnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCdTZWFyY2ggYmFyIGNhbm5vdCBiZSBlbXB0eScpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KGAke3NlYXJjaC52YWx1ZX0gZG9lc25vdCBleGlzdGApO1xuICB9XG4gIHJlc2V0VG9EZWZhdWx0Q2FyZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkZXIoKSB7XG4gIGNvbnN0IHNjZW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLWNvbnRhaW5lcicpO1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb2FkZXInKTtcbiAgbG9hZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyJyk7XG4gIGNvbnN0IGxvYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9hZGluZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvYWRpbmctY29udGFpbmVyJyk7XG4gIGNvbnN0IGxvYWRpbmdBbmltID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbG9hZGluZ0FuaW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2FkaW5nLWFuaW0nKTtcbiAgbG9hZGluZ0FuaW0udGV4dENvbnRlbnQgPSAnTG9hZGluZyAuIC4gLic7XG5cbiAgbG9hZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkaW5nQW5pbSk7XG4gIGxvYWRlci5hcHBlbmRDaGlsZChsb2FkaW5nQ29udGFpbmVyKTtcblxuICBzY2VuZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW5pdGlhbFBhZ2VMb2FkZXIoKSB7XG4gIGNvbnN0IHNjZW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLWNvbnRhaW5lcicpO1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gIHNjZW5lQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxvYWRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsUGFnZSh3ZWF0aGVySW5mbykge1xuICBjb25zdCBzY2VuZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1jb250YWluZXInKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIEltYWdlKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NlbmUnKTtcbiAgc2NlbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgY2hhbmdlU2NlbmVCYWNrZ3JvdW5kKHdlYXRoZXJJbmZvKTtcblxuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG4gIHNjZW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDYXJkQ29udGFpbmVyKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHNlYXJjaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1jb250YWluZXInKTtcblxuICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWFyY2gtY2l0eScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWNpdHknKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1jaXR5Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBjaXR5IG5hbWUnKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1idG4nKTtcbiAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc2VhcmNoQnRuLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwic2VhcmNoLWljb25cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIi0zLjIgLTMuMiAzOC40IDM4LjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMy40NiAyNC40NWMtNi4yOSAwLTExLjM4OS01LjAxLTExLjM4OS0xMS4yIDAtNi4xOSA1LjA5OS0xMS4yMSAxMS4zODktMTEuMjEgNi4yOSAwIDExLjM5IDUuMDIgMTEuMzkgMTEuMjEgMCA2LjE5LTUuMSAxMS4yLTExLjM5IDExLjJabTE4LjIyOCA1LjgtOC4yNTktOC4xM2MyLjE2Mi0yLjM1IDMuNDkxLTUuNDUgMy40OTEtOC44N0MyNi45MiA1LjkzIDIwLjg5NCAwIDEzLjQ2IDAgNi4wMjYgMCAwIDUuOTMgMCAxMy4yNWMwIDcuMzEgNi4wMjYgMTMuMjQgMTMuNDYgMTMuMjRhMTMuNTIgMTMuNTIgMCAwIDAgOC40NzItMi45Nmw4LjI5MiA4LjE2Yy40MDUuNCAxLjA2LjQgMS40NjQgMCAuNDA1LS4zOS40MDUtMS4wNCAwLTEuNDRaXCIgZmlsbD1cIiMwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG5cbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJTZWFyY2gpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcbiAgd2VhdGhlckNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckluZm8pO1xufVxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZ2V0V2VhdGhlckluZm8nO1xuaW1wb3J0IHtcbiAgY3JlYXRlV2VhdGhlckNhcmQsIGludmFsaWRMb2NhdGlvbiwgcmVtb3ZlV2VhdGhlckNhcmQsIGFkZExvYWRpbmdBbmltLCByZW1vdmVMb2FkaW5nQW5pbSxcbn0gZnJvbSAnLi9kb20nO1xuXG5mdW5jdGlvbiBzZWFyY2hGb3JtU3VibWl0KCkge1xuICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jaXR5Jyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlclNlYXJjaC52YWx1ZTtcbiAgcmVtb3ZlV2VhdGhlckNhcmQoKTtcbiAgYWRkTG9hZGluZ0FuaW0oKTtcbiAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVtb3ZlTG9hZGluZ0FuaW0oKTtcbiAgICBjcmVhdGVXZWF0aGVyQ2FyZChyZXNwb25zZSk7XG4gIH0sIChlcnIpID0+IHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJzQwMCcpKSB7XG4gICAgICBpbnZhbGlkTG9jYXRpb24oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hGb3JtU3VibWl0O1xuIiwiLy8gV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IGhpdCB0aGUgQVBJLlxuLy8gWW914oCZcmUgZ29pbmcgdG8gd2FudCBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSBhIGxvY2F0aW9uXG4vLyBhbmQgcmV0dXJuIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoYXQgbG9jYXRpb24uIEZvciBub3csIGp1c3QgY29uc29sZS5sb2coKSB0aGUgaW5mb3JtYXRpb24uXG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YTFjZDYyM2Y5NmMwNGY5ODlmYTgzNTIzMjMwODEyJnE9JHtsb2NhdGlvbn0mZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMCk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpIC0gMjAwMDtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZGF5RGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgICBjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbiAgICAgIGNvbnN0IGRheVRpbWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmlzX2RheSA9PT0gMSA/ICd5ZXMnIDogJ25vJztcblxuICAgICAgY29uc3QgdG9tb3Jyb3dGb3JlY2FzdERhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlX2Vwb2NoICogMTAwMCk7XG4gICAgICBjb25zdCB0b21vcnJvd0RhdGUgPSBgJHt0b21vcnJvd0ZvcmVjYXN0RGF0ZS5nZXREYXRlKCl9ICR7bW9udGhzW3RvbW9ycm93Rm9yZWNhc3REYXRlLmdldE1vbnRoKCldfSAke3llYXJ9YDtcbiAgICAgIGNvbnN0IHRvbW9ycm93RGF5ID0gYCR7d2Vla2RheVt0b21vcnJvd0ZvcmVjYXN0RGF0ZS5nZXREYXkoKV19YDtcblxuICAgICAgY29uc3QgZGF5QWZ0ZXJUb21vcnJvdyA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGVfZXBvY2ggKiAxMDAwKTtcbiAgICAgIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3dEYXRlID0gYCR7ZGF5QWZ0ZXJUb21vcnJvdy5nZXREYXRlKCl9ICR7bW9udGhzW2RheUFmdGVyVG9tb3Jyb3cuZ2V0TW9udGgoKV19ICR7eWVhcn1gO1xuICAgICAgY29uc3QgYWZ0ZXJUb21vcnJvd0RheSA9IGAke3dlZWtkYXlbZGF5QWZ0ZXJUb21vcnJvdy5nZXREYXkoKV19YDtcblxuICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSB7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyOiB7XG4gICAgICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgICAgICB0ZW1wQzogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgICAgICAgICB0ZW1wRjogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICBodW1pZGl0eTogd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIGZlZWxzTGlrZTogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgIHdpbmRLcGg6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9yZWNhc3Q6IHtcbiAgICAgICAgICB0b21vcnJvdzoge1xuICAgICAgICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLFxuICAgICAgICAgICAgbWF4VGVtcDogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgIGRhdGU6IHRvbW9ycm93RGF0ZSxcbiAgICAgICAgICAgIGRheTogdG9tb3Jyb3dEYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXlBZnRlclRvbW9ycm93OiB7XG4gICAgICAgICAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24sXG4gICAgICAgICAgICBtYXhUZW1wOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgZGF0ZTogZGF5QWZ0ZXJUb21vcnJvd0RhdGUsXG4gICAgICAgICAgICBkYXk6IGFmdGVyVG9tb3Jyb3dEYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgY2l0eTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICAgIGxvY2FsRGF0ZTogYCR7ZGF5RGF0ZX0gJHttb250aHNbbW9udGhdfSAke3llYXJ9YCxcbiAgICAgICAgICBsb2NhbERheTogYCR7d2Vla2RheVtkYXldfWAsXG4gICAgICAgICAgaXNEYXk6IGRheVRpbWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gd2VhdGhlckluZm87XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4geyB0aHJvdyBlcnI7IH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IHNlYXJjaEZvcm1TdWJtaXQgZnJvbSAnLi9ldmVudEhhbmRsaW5nJztcbmltcG9ydCB7IGNyZWF0ZUluaXRpYWxQYWdlLCBpbml0aWFsUGFnZUxvYWRlciwgcmVtb3ZlSW5pdGlhbFBhZ2VMb2FkZXIgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVySW5mbyc7XG5cbmNvbnN0IGRlZmF1bHRMb2NhdGlvbiA9ICdMb25kb24nO1xuaW5pdGlhbFBhZ2VMb2FkZXIoKTtcbmdldFdlYXRoZXJEYXRhKGRlZmF1bHRMb2NhdGlvbikudGhlbigod2VhdGhlckluZm8pID0+IHtcbiAgcmVtb3ZlSW5pdGlhbFBhZ2VMb2FkZXIoKTtcbiAgY3JlYXRlSW5pdGlhbFBhZ2Uod2VhdGhlckluZm8pO1xufSkudGhlbigoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlYXJjaEZvcm1TdWJtaXQoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==