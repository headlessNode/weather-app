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
    position: relative;
    width: 100%;
    min-height: 100vh;
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
}

.night{
    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);
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
    width: 50px;
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
}

.weather-card .temperature{
    font-size: 6rem;
}

.weather-card .icon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.weather-card .weather{
    font-size: 3rem;
    grid-row: 3/4;
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: 2rem 1fr;
    align-items: center;
    gap: 1rem;
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

.weather-card .region{
    font-size: 1.5rem;
    grid-row: 4/5;
}

.weather-card .current-day{
    font-size: 1.5rem;
    grid-row: 5/6;
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
  `, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,4BAA4B;IAC5B,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Dongle', sans-serif;\n}\n\n.scene-container{\n    position: relative;\n    width: 100%;\n    min-height: 100vh;\n}\n\n.scene{\n    position:fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    object-fit:cover;\n    bottom: 0%;    \n}\n\n.day{\n    background: linear-gradient(to bottom left, #A4CFC7 0%, #7BC3CA 30%, #D9E1CE 60%, #D5C4AF 100%);\n}\n\n.night{\n    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);\n}\n\n.card-container{\n    color: white;\n    position:absolute;\n    z-index: 2;\n    bottom: 0%;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: 4rem 1fr;\n}\n\n.search-container{\n    width: 300px;\n    height: 4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n.search-container input{\n    appearance: none;\n    outline: none;\n    border: none;\n    background: white;\n    height: 100%;\n    width: 250px;\n    text-indent: 5px;\n    font-size: 1.5rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    opacity: 0.7;\n}\n\n.search-btn{\n    cursor: pointer;\n    width: 50px;\n    height: 100%;\n    border: none;\n    background: white;\n    outline: none;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    opacity: 0.7;\n}\n\n.weather-card{\n    width: 768px;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.weather-card .temperature{\n    font-size: 6rem;\n}\n\n.weather-card .icon{\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.weather-card .weather{\n    font-size: 3rem;\n    grid-row: 3/4;\n    width: 100%;\n    text-align: center;\n    display: grid;\n    grid-template-rows: 2rem 1fr;\n    align-items: center;\n    gap: 1rem;\n}\n\n.weather .crnt-weather-details{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(160px, 1fr));\n    grid-template-rows: repeat(2,1fr);\n    align-items: center;\n    justify-items: center;\n    row-gap: 10px;\n}\n\n.crnt-weather-details > *{\n    display: grid;\n    width: 160px;\n    grid-template-columns: repeat(2,50%);\n    grid-template-rows: repeat(2,50%);\n    align-items: center;\n    justify-items: center;\n    font-size: 1.5rem;\n}\n\n.feels-like-icon, .humidity-icon, .wind-icon, .fahrenheit-icon{\n    grid-row: 1/3;\n    grid-column: 1/2;\n    width: 40px;\n    height: 40px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.weather-card .region{\n    font-size: 1.5rem;\n    grid-row: 4/5;\n}\n\n.weather-card .current-day{\n    font-size: 1.5rem;\n    grid-row: 5/6;\n}\n\n.weather-card .forecast-details{\n    width: 100%;\n    height: 100%;\n    grid-row: 6/7;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n}\n\n.forecast-details .tomorrow-forecast, .forecast-details .after-tomorrow{\n    font-size: 2rem;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    column-gap: 30%;\n    text-align: center;\n}\n\n@media screen and (max-width: 768px) {\n    .weather-card{\n        width: 100%;\n    }\n    .search-container{\n        width: 100%;\n    }\n}\n  "],"sourceRoot":""}]);
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
/* harmony export */   createInitialPage: () => (/* binding */ createInitialPage),
/* harmony export */   createWeatherCard: () => (/* binding */ createWeatherCard),
/* harmony export */   invalidLocation: () => (/* binding */ invalidLocation)
/* harmony export */ });
/* harmony import */ var _images_sky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sky.png */ "./src/images/sky.png");
/* harmony import */ var _images_humidityIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/humidityIcon.svg */ "./src/images/humidityIcon.svg");
/* harmony import */ var _images_windIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/windIcon.svg */ "./src/images/windIcon.svg");
/* harmony import */ var _images_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/fahrenheit.svg */ "./src/images/fahrenheit.svg");





function invalidLocation() {
  const search = document.querySelector('.search-city');
  alert(`${search.value} doesnot exist`);
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
  const sceneContainer = document.querySelector('.scene-container');
  if (weatherInfo.region.isDay === 'yes') {
    if (sceneContainer.classList.contains('night')) {
      sceneContainer.classList.remove('night');
    }
    sceneContainer.classList.add('day');
  } else {
    if (sceneContainer.classList.contains('day')) {
      sceneContainer.classList.remove('day');
    }
    sceneContainer.classList.add('night');
  }
}

function createWeatherCard(weatherInfo) {
  removeWeatherCard();
  changeSceneBackground(weatherInfo);
  const weatherCardContainer = document.querySelector('.card-container');
  weatherCardContainer.classList.toggle('card-present');
  const weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'weather-card');

  const currentWeatherDetails = addCurrentWeatherDetails(weatherInfo);

  const forecastDetails = document.createElement('div');
  forecastDetails.setAttribute('class', 'forecast-details');
  const forecast = addForecastDetails(weatherInfo);

  forecastDetails.appendChild(forecast.tomorrowForecast);
  forecastDetails.appendChild(forecast.dayAfterTomorrow);

  weatherCard.appendChild(currentWeatherDetails.temperature);
  weatherCard.appendChild(currentWeatherDetails.icon);
  weatherCard.appendChild(currentWeatherDetails.weather);
  weatherCard.appendChild(currentWeatherDetails.region);
  weatherCard.appendChild(currentWeatherDetails.currentDay);
  weatherCard.appendChild(forecastDetails);

  weatherCardContainer.appendChild(weatherCard);
}

function createInitialPage(weatherInfo) {
  // const wrapper = document.querySelector('.wrapper');

  const sceneContainer = document.createElement('div');
  sceneContainer.setAttribute('class', 'scene-container');
  document.body.appendChild(sceneContainer);
  changeSceneBackground(weatherInfo);
  const img = document.createElement('img');
  img.setAttribute('src', _images_sky_png__WEBPACK_IMPORTED_MODULE_0__);
  img.setAttribute('class', 'scene');

  sceneContainer.appendChild(img);

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
  (0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(location).then((response) => {
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
(0,_getWeatherInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultLocation).then((weatherInfo) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ21CO0FBQ0w7QUFDSTs7QUFFOUM7QUFDQSwyREFBYztBQUNkLEVBQUUsdURBQWlCO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFnQjtBQUNwQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2V2ZW50SGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2dldFdlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2NlbmUtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNjZW5le1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgYm90dG9tOiAwJTsgICAgXG59XG5cbi5kYXl7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjQTRDRkM3IDAlLCAjN0JDM0NBIDMwJSwgI0Q5RTFDRSA2MCUsICNENUM0QUYgMTAwJSk7XG59XG5cbi5uaWdodHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwRjFDMkUgMCUsICMxRTMzNTggMjUlLCAjMzI0RDgxIDUwJSwgIzQ2NkJBQSAxMDAlKTtcbn1cblxuLmNhcmQtY29udGFpbmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmcjtcbn1cblxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHRleHQtaW5kZW50OiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLnNlYXJjaC1idG57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWF0aGVyLWNhcmR7XG4gICAgd2lkdGg6IDc2OHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLndlYXRoZXItY2FyZCAudGVtcGVyYXR1cmV7XG4gICAgZm9udC1zaXplOiA2cmVtO1xufVxuXG4ud2VhdGhlci1jYXJkIC5pY29ue1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLndlYXRoZXItY2FyZCAud2VhdGhlcntcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ud2VhdGhlciAuY3JudC13ZWF0aGVyLWRldGFpbHN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICByb3ctZ2FwOiAxMHB4O1xufVxuXG4uY3JudC13ZWF0aGVyLWRldGFpbHMgPiAqe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTAlKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDUwJSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mZWVscy1saWtlLWljb24sIC5odW1pZGl0eS1pY29uLCAud2luZC1pY29uLCAuZmFocmVuaGVpdC1pY29ue1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItY2FyZCAucmVnaW9ue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtcm93OiA0LzU7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtZGF5e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtcm93OiA1LzY7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmZvcmVjYXN0LWRldGFpbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtcm93OiA2Lzc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmZvcmVjYXN0LWRldGFpbHMgLnRvbW9ycm93LWZvcmVjYXN0LCAuZm9yZWNhc3QtZGV0YWlscyAuYWZ0ZXItdG9tb3Jyb3d7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcbiAgICBjb2x1bW4tZ2FwOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC53ZWF0aGVyLWNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0ZBQStGO0FBQ25HOztBQUVBO0lBQ0ksK0ZBQStGO0FBQ25HOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNjZW5lLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zY2VuZXtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxuICAgIGJvdHRvbTogMCU7ICAgIFxcbn1cXG5cXG4uZGF5e1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNBNENGQzcgMCUsICM3QkMzQ0EgMzAlLCAjRDlFMUNFIDYwJSwgI0Q1QzRBRiAxMDAlKTtcXG59XFxuXFxuLm5pZ2h0e1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwRjFDMkUgMCUsICMxRTMzNTggMjUlLCAjMzI0RDgxIDUwJSwgIzQ2NkJBQSAxMDAlKTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3R0b206IDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnI7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgdGV4dC1pbmRlbnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnNlYXJjaC1idG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi53ZWF0aGVyLWNhcmR7XFxuICAgIHdpZHRoOiA3NjhweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAudGVtcGVyYXR1cmV7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuaWNvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLndlYXRoZXJ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlciAuY3JudC13ZWF0aGVyLWRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNjBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY3JudC13ZWF0aGVyLWRldGFpbHMgPiAqe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiw1MCUpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS1pY29uLCAuaHVtaWRpdHktaWNvbiwgLndpbmQtaWNvbiwgLmZhaHJlbmhlaXQtaWNvbntcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5yZWdpb257XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLXJvdzogNC81O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5jdXJyZW50LWRheXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdyaWQtcm93OiA1LzY7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmZvcmVjYXN0LWRldGFpbHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtcm93OiA2Lzc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWRldGFpbHMgLnRvbW9ycm93LWZvcmVjYXN0LCAuZm9yZWNhc3QtZGV0YWlscyAuYWZ0ZXItdG9tb3Jyb3d7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAud2VhdGhlci1jYXJke1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3NreS5wbmcnO1xuaW1wb3J0IEh1bWlkaXR5SWNvbiBmcm9tICcuLi9pbWFnZXMvaHVtaWRpdHlJY29uLnN2Zyc7XG5pbXBvcnQgV2luZEljb24gZnJvbSAnLi4vaW1hZ2VzL3dpbmRJY29uLnN2Zyc7XG5pbXBvcnQgRmFocmVuaGVpdEljb24gZnJvbSAnLi4vaW1hZ2VzL2ZhaHJlbmhlaXQuc3ZnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRMb2NhdGlvbigpIHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jaXR5Jyk7XG4gIGFsZXJ0KGAke3NlYXJjaC52YWx1ZX0gZG9lc25vdCBleGlzdGApO1xufVxuXG5mdW5jdGlvbiBhZGRDdXJyZW50V2VhdGhlckRldGFpbHMod2VhdGhlckluZm8pIHtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcGVyYXR1cmUnKTtcbiAgY29uc3QgZGVncmVlU2lnbiA9ICdcXHUwMEIwJztcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZS50ZW1wQ30ke2RlZ3JlZVNpZ259Q2A7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICBpZiAod2VhdGhlckluZm8ucmVnaW9uLmlzRGF5ID09PSAneWVzJykge1xuICAgIGljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSA2MCUsICNmZmQ3MDAgMCUsIHRyYW5zcGFyZW50IDcwJSknO1xuICB9IGVsc2Uge1xuICAgIGljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSA2MCUsIHJnYigyMDQsMjA0LDIwNCkgMCUsIHRyYW5zcGFyZW50IDcwJSknO1xuICB9XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXInKTtcbiAgd2VhdGhlci50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbjtcbiAgY29uc3QgY3JudFdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNybnRXZWF0aGVyRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NybnQtd2VhdGhlci1kZXRhaWxzJyk7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdodW1pZGl0eScpO1xuICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaHVtaWRpdHlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaHVtaWRpdHktaWNvbicpO1xuICBodW1pZGl0eUljb24uc3JjID0gSHVtaWRpdHlJY29uO1xuICBjb25zdCBodW1pZGl0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcbiAgY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLmh1bWlkaXR5fSVgO1xuXG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbik7XG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5SGVhZGluZyk7XG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5UGVyY2VudCk7XG5cbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZlZWxzLWxpa2UnKTtcbiAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmZWVsc0xpa2VJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmVlbHMtbGlrZS1pY29uJyk7XG4gIGZlZWxzTGlrZUljb24uaW5uZXJIVE1MID0gJzwhZG9jdHlwZSBodG1sPjxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIHN0eWxlPVwiZmlsbDpyZ2IoMjU1LDI1NSwyNTUpO1wiIGQ9XCJNIDMwIDM0IEwgMjYgMzQgQyAyNC44OTcgMzMuOTk3IDI0LjAwNCAzMy4xMDMgMjQgMzIgTCAyNCAyNSBDIDIyLjg5NyAyNC45OTcgMjIuMDA0IDI0LjEwMyAyMiAyMyBMIDIyIDE3IEMgMjEuOTY5IDE1LjMzIDIzLjMzMSAxMy45NjkgMjUgMTQgTCAzMSAxNCBDIDMyLjY3IDEzLjk2OSAzNC4wMzEgMTUuMzMgMzQgMTcgTCAzNCAyMyBDIDMzLjk5NyAyNC4xMDMgMzMuMTA0IDI0Ljk5NyAzMiAyNSBMIDMyIDMyIEMgMzEuOTk3IDMzLjEwMyAzMS4xMDQgMzMuOTk3IDMwIDM0IFogTSAyNSAxNiBDIDI0LjQzNSAxNS45NjYgMjMuOTY2IDE2LjQzNCAyNCAxNyBMIDI0IDIzIEwgMjYgMjMgTCAyNiAzMiBMIDMwIDMyIEwgMzAgMjMgTCAzMiAyMyBMIDMyIDE3IEMgMzIuMDM0IDE2LjQzNCAzMS41NjYgMTUuOTY2IDMxIDE2IEwgMjUgMTYgWiBNIDI4IDEzIEMgMjQuOTIxIDEzIDIyLjk5NyA5LjY2NyAyNC41MzYgNyBDIDI2LjA3NiA0LjMzMyAyOS45MjUgNC4zMzMgMzEuNDY0IDcgQyAzMS44MTUgNy42MDggMzIgOC4yOTggMzIgOSBDIDMxLjk5NCAxMS4yMDYgMzAuMjA3IDEyLjk5MyAyOCAxMyBaIE0gMjggNyBDIDI2LjQ2MSA3IDI1LjQ5OCA4LjY2NyAyNi4yNjggMTAgQyAyNy4wMzggMTEuMzMzIDI4Ljk2MyAxMS4zMzMgMjkuNzMyIDEwIEMgMjkuOTA4IDkuNjk2IDMwIDkuMzUxIDMwIDkgQyAyOS45OTcgNy44OTcgMjkuMTA0IDcuMDAzIDI4IDcgWiBNIDE0IDI0LjE4NCBMIDE0IDE2IEwgMTIgMTYgTCAxMiAyNC4xODQgQyA5LjgyMyAyNC45NTQgOS4yOTUgMjcuNzkyIDExLjA1MSAyOS4yOTMgQyAxMi44MDYgMzAuNzkzIDE1LjUyOCAyOS44MzEgMTUuOTUgMjcuNTYxIEMgMTYuMjIgMjYuMTA5IDE1LjM5MyAyNC42NzYgMTQgMjQuMTg0IFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDApXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVwiZmlsbDpyZ2IoMjU1LDI1NSwyNTUpO1wiIGQ9XCJNIDEzIDM0IEMgNy42MTcgMzQuMDA2IDQuMjQ2IDI4LjE4MiA2LjkzMiAyMy41MTcgQyA3LjIyNyAyMy4wMDUgNy41ODYgMjIuNTMyIDggMjIuMTEgTCA4IDExIEMgOCA3LjE1MSAxMi4xNjcgNC43NDUgMTUuNSA2LjY3IEMgMTcuMDQ3IDcuNTYzIDE4IDkuMjE0IDE4IDExIEwgMTggMjIuMTEgQyAyMS43NyAyNS45NTMgMTkuOTY2IDMyLjQzNiAxNC43NTMgMzMuNzc5IEMgMTQuMTggMzMuOTI2IDEzLjU5MiAzNC4wMDEgMTMgMzQgWiBNIDEzIDggQyAxMS4zNDQgOC4wMDIgMTAuMDAyIDkuMzQ0IDEwIDExIEwgMTAgMjIuOTgzIEwgOS42NjggMjMuMjgyIEMgNi43OTkgMjUuODQ3IDcuNzgyIDMwLjU1NyAxMS40MzggMzEuNzYgQyAxNS4wOTQgMzIuOTYyIDE4LjY4MSAyOS43NTYgMTcuODk1IDI1Ljk4OCBDIDE3LjY3NyAyNC45NDIgMTcuMTI5IDIzLjk5NCAxNi4zMzIgMjMuMjgyIEwgMTYgMjIuOTgzIEwgMTYgMTEgQyAxNS45OTkgOS4zNDQgMTQuNjU2IDguMDAyIDEzIDggWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDAsIDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMClcIj48L3BhdGg+PHBhdGggZGF0YS1uYW1lPVwiPFRyYW5zcGFyZW50IFJlY3RhbmdsZT5cIiBzdHlsZT1cImZpbGw6bm9uZVwiIGQ9XCJNIDQgNCBMIDM2IDQgTCAzNiAzNiBMIDQgMzYgTCA0IDQgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDAsIDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMClcIj48L3BhdGg+PC9zdmc+JztcbiAgY29uc3QgZmVlbHNMaWtlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmZWVsc0xpa2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZlZWxzIGxpa2UnO1xuICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZS5mZWVsc0xpa2V9JHtkZWdyZWVTaWdufUNgO1xuXG4gIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VJY29uKTtcbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZUhlYWRpbmcpO1xuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XG5cbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmQtc3BlZWQnKTtcbiAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2luZEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5kLWljb24nKTtcbiAgd2luZEljb24uc3JjID0gV2luZEljb247XG4gIGNvbnN0IHdpbmRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRIZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQgc3BlZWQnO1xuICBjb25zdCB3aW5kS3BoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRLcGgudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZS53aW5kS3BofUtQSGA7XG5cbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRIZWFkaW5nKTtcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRLcGgpO1xuXG4gIGNvbnN0IHRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBGLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcC1mJyk7XG4gIGNvbnN0IGZhaHJlbmhlaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZhaHJlbmhlaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFocmVuaGVpdC1pY29uJyk7XG4gIGZhaHJlbmhlaXRJY29uLnNyYyA9IEZhaHJlbmhlaXRJY29uO1xuICBjb25zdCBmYWhyZW5oZWl0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWhyZW5oZWl0SGVhZGluZy50ZXh0Q29udGVudCA9ICdGYWhyZW5oZWl0JztcbiAgY29uc3QgZmFocmVuaGVpdFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmFocmVuaGVpdFRlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZS50ZW1wRn0ke2RlZ3JlZVNpZ259RmA7XG5cbiAgdGVtcEYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdEljb24pO1xuICB0ZW1wRi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0SGVhZGluZyk7XG4gIHRlbXBGLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRUZW1wKTtcblxuICBjcm50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBjcm50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZCh0ZW1wRik7XG5cbiAgd2VhdGhlci5hcHBlbmRDaGlsZChjcm50V2VhdGhlckRldGFpbHMpO1xuXG4gIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZWdpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWdpb24nKTtcbiAgcmVnaW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8ucmVnaW9uLmNpdHl9LCAke3dlYXRoZXJJbmZvLnJlZ2lvbi5jb3VudHJ5fWA7XG5cbiAgY29uc3QgY3VycmVudERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50RGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3VycmVudC1kYXknKTtcbiAgY3VycmVudERheS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLnJlZ2lvbi5sb2NhbERheX0sICR7d2VhdGhlckluZm8ucmVnaW9uLmxvY2FsRGF0ZX1gO1xuXG4gIHJldHVybiB7XG4gICAgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHJlZ2lvbiwgY3VycmVudERheSwgaWNvbixcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkRm9yZWNhc3REZXRhaWxzKHdlYXRoZXJJbmZvKSB7XG4gIGNvbnN0IGRlZ3JlZVNpZ24gPSAnXFx1MDBCMCc7XG4gIGNvbnN0IHRvbW9ycm93Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LWZvcmVjYXN0Jyk7XG4gIGNvbnN0IHRvbW9ycm93RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvbW9ycm93RGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctZGF5Jyk7XG4gIHRvbW9ycm93RGF5LnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QudG9tb3Jyb3cuZGF5O1xuICBjb25zdCB0b21vcnJvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dUZW1wLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctdGVtcCcpO1xuICB0b21vcnJvd1RlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5tYXhUZW1wfSR7ZGVncmVlU2lnbn1DYDtcbiAgY29uc3QgdG9tb3Jyb3dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvbW9ycm93RGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LWRhdGUnKTtcbiAgdG9tb3Jyb3dEYXRlLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QudG9tb3Jyb3cuZGF0ZTtcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dDb25kaXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy1jb25kaXRpb24nKTtcbiAgdG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5jb25kaXRpb24udGV4dDtcblxuICB0b21vcnJvd0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93RGF5KTtcbiAgdG9tb3Jyb3dGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd1RlbXApO1xuICB0b21vcnJvd0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93RGF0ZSk7XG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5QWZ0ZXJUb21vcnJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FmdGVyLXRvbW9ycm93Jyk7XG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd0RheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FmdGVyLXRvbW9ycm93LWRheScpO1xuICBhZnRlclRvbW9ycm93RGF5LnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5kYXk7XG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFmdGVyVG9tb3Jyb3dUZW1wLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3ctdGVtcCcpO1xuICBhZnRlclRvbW9ycm93VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cubWF4VGVtcH0ke2RlZ3JlZVNpZ259Q2A7XG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3ctZGF0ZScpO1xuICBhZnRlclRvbW9ycm93RGF0ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cuZGF0ZTtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93Q29uZGl0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3ctY29uZGl0aW9uJyk7XG4gIGFmdGVyVG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93LmNvbmRpdGlvbi50ZXh0O1xuXG4gIGRheUFmdGVyVG9tb3Jyb3cuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0RheSk7XG4gIGRheUFmdGVyVG9tb3Jyb3cuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd1RlbXApO1xuICBkYXlBZnRlclRvbW9ycm93LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dEYXRlKTtcbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93Q29uZGl0aW9uKTtcblxuICByZXR1cm4geyB0b21vcnJvd0ZvcmVjYXN0LCBkYXlBZnRlclRvbW9ycm93IH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVdlYXRoZXJDYXJkKCkge1xuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICBpZiAod2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLXByZXNlbnQnKSkge1xuICAgIHdlYXRoZXJDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmQtcHJlc2VudCcpO1xuICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICAgIHdlYXRoZXJDYXJkQ29udGFpbmVyLnJlbW92ZUNoaWxkKHdlYXRoZXJDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTY2VuZUJhY2tncm91bmQod2VhdGhlckluZm8pIHtcbiAgY29uc3Qgc2NlbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtY29udGFpbmVyJyk7XG4gIGlmICh3ZWF0aGVySW5mby5yZWdpb24uaXNEYXkgPT09ICd5ZXMnKSB7XG4gICAgaWYgKHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnbmlnaHQnKSkge1xuICAgICAgc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmlnaHQnKTtcbiAgICB9XG4gICAgc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZGF5JykpIHtcbiAgICAgIHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RheScpO1xuICAgIH1cbiAgICBzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaWdodCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVySW5mbykge1xuICByZW1vdmVXZWF0aGVyQ2FyZCgpO1xuICBjaGFuZ2VTY2VuZUJhY2tncm91bmQod2VhdGhlckluZm8pO1xuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLXByZXNlbnQnKTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWNhcmQnKTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRldGFpbHMgPSBhZGRDdXJyZW50V2VhdGhlckRldGFpbHMod2VhdGhlckluZm8pO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JlY2FzdERldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdC1kZXRhaWxzJyk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gYWRkRm9yZWNhc3REZXRhaWxzKHdlYXRoZXJJbmZvKTtcblxuICBmb3JlY2FzdERldGFpbHMuYXBwZW5kQ2hpbGQoZm9yZWNhc3QudG9tb3Jyb3dGb3JlY2FzdCk7XG4gIGZvcmVjYXN0RGV0YWlscy5hcHBlbmRDaGlsZChmb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93KTtcblxuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMudGVtcGVyYXR1cmUpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMuaWNvbik7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy53ZWF0aGVyKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLnJlZ2lvbik7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy5jdXJyZW50RGF5KTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REZXRhaWxzKTtcblxuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsUGFnZSh3ZWF0aGVySW5mbykge1xuICAvLyBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcblxuICBjb25zdCBzY2VuZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY2VuZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NjZW5lLWNvbnRhaW5lcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjZW5lQ29udGFpbmVyKTtcbiAgY2hhbmdlU2NlbmVCYWNrZ3JvdW5kKHdlYXRoZXJJbmZvKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIEltYWdlKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NlbmUnKTtcblxuICBzY2VuZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHdlYXRoZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250YWluZXInKTtcbiAgc2NlbmVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmRDb250YWluZXIpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaC1jaXR5Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtY2l0eScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNpdHknKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGNpdHkgbmFtZScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWJ0bicpO1xuICBzZWFyY2hCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJzZWFyY2gtaWNvblwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiLTMuMiAtMy4yIDM4LjQgMzguNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjQ2IDI0LjQ1Yy02LjI5IDAtMTEuMzg5LTUuMDEtMTEuMzg5LTExLjIgMC02LjE5IDUuMDk5LTExLjIxIDExLjM4OS0xMS4yMSA2LjI5IDAgMTEuMzkgNS4wMiAxMS4zOSAxMS4yMSAwIDYuMTktNS4xIDExLjItMTEuMzkgMTEuMlptMTguMjI4IDUuOC04LjI1OS04LjEzYzIuMTYyLTIuMzUgMy40OTEtNS40NSAzLjQ5MS04Ljg3QzI2LjkyIDUuOTMgMjAuODk0IDAgMTMuNDYgMCA2LjAyNiAwIDAgNS45MyAwIDEzLjI1YzAgNy4zMSA2LjAyNiAxMy4yNCAxMy40NiAxMy4yNGExMy41MiAxMy41MiAwIDAgMCA4LjQ3Mi0yLjk2bDguMjkyIDguMTZjLjQwNS40IDEuMDYuNCAxLjQ2NCAwIC40MDUtLjM5LjQwNS0xLjA0IDAtMS40NFpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcblxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlclNlYXJjaCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVySW5mbyk7XG59XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVySW5mbyc7XG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyQ2FyZCwgaW52YWxpZExvY2F0aW9uIH0gZnJvbSAnLi9kb20nO1xuXG5mdW5jdGlvbiBzZWFyY2hGb3JtU3VibWl0KCkge1xuICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jaXR5Jyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlclNlYXJjaC52YWx1ZTtcbiAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY3JlYXRlV2VhdGhlckNhcmQocmVzcG9uc2UpO1xuICB9LCAoZXJyKSA9PiB7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluY2x1ZGVzKCc0MDAnKSkge1xuICAgICAgaW52YWxpZExvY2F0aW9uKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoRm9ybVN1Ym1pdDtcbiIsIi8vIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS5cbi8vIFlvdeKAmXJlIGdvaW5nIHRvIHdhbnQgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgYSBsb2NhdGlvblxuLy8gYW5kIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWExY2Q2MjNmOTZjMDRmOTg5ZmE4MzUyMzIzMDgxMiZxPSR7bG9jYXRpb259JmRheXM9M2AsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCAqIDEwMDApO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSAtIDIwMDA7XG4gICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGRheURhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICBjb25zdCB3ZWVrZGF5ID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4gICAgICBjb25zdCBkYXlUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5pc19kYXkgPT09IDEgPyAneWVzJyA6ICdubyc7XG5cbiAgICAgIGNvbnN0IHRvbW9ycm93Rm9yZWNhc3REYXRlID0gbmV3IERhdGUod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZV9lcG9jaCAqIDEwMDApO1xuICAgICAgY29uc3QgdG9tb3Jyb3dEYXRlID0gYCR7dG9tb3Jyb3dGb3JlY2FzdERhdGUuZ2V0RGF0ZSgpfSAke21vbnRoc1t0b21vcnJvd0ZvcmVjYXN0RGF0ZS5nZXRNb250aCgpXX0gJHt5ZWFyfWA7XG4gICAgICBjb25zdCB0b21vcnJvd0RheSA9IGAke3dlZWtkYXlbdG9tb3Jyb3dGb3JlY2FzdERhdGUuZ2V0RGF5KCldfWA7XG5cbiAgICAgIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3cgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlX2Vwb2NoICogMTAwMCk7XG4gICAgICBjb25zdCBkYXlBZnRlclRvbW9ycm93RGF0ZSA9IGAke2RheUFmdGVyVG9tb3Jyb3cuZ2V0RGF0ZSgpfSAke21vbnRoc1tkYXlBZnRlclRvbW9ycm93LmdldE1vbnRoKCldfSAke3llYXJ9YDtcbiAgICAgIGNvbnN0IGFmdGVyVG9tb3Jyb3dEYXkgPSBgJHt3ZWVrZGF5W2RheUFmdGVyVG9tb3Jyb3cuZ2V0RGF5KCldfWA7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0ge1xuICAgICAgICBjdXJyZW50V2VhdGhlcjoge1xuICAgICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICAgICAgdGVtcEM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgdGVtcEY6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICBmZWVsc0xpa2U6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgICB3aW5kS3BoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZvcmVjYXN0OiB7XG4gICAgICAgICAgdG9tb3Jyb3c6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbixcbiAgICAgICAgICAgIG1heFRlbXA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBkYXRlOiB0b21vcnJvd0RhdGUsXG4gICAgICAgICAgICBkYXk6IHRvbW9ycm93RGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF5QWZ0ZXJUb21vcnJvdzoge1xuICAgICAgICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLFxuICAgICAgICAgICAgbWF4VGVtcDogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgIGRhdGU6IGRheUFmdGVyVG9tb3Jyb3dEYXRlLFxuICAgICAgICAgICAgZGF5OiBhZnRlclRvbW9ycm93RGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgY291bnRyeTogd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgICBsb2NhbERhdGU6IGAke2RheURhdGV9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWAsXG4gICAgICAgICAgbG9jYWxEYXk6IGAke3dlZWtkYXlbZGF5XX1gLFxuICAgICAgICAgIGlzRGF5OiBkYXlUaW1lLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHdlYXRoZXJJbmZvO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHsgdGhyb3cgZXJyOyB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBzZWFyY2hGb3JtU3VibWl0IGZyb20gJy4vZXZlbnRIYW5kbGluZyc7XG5pbXBvcnQgeyBjcmVhdGVJbml0aWFsUGFnZSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2dldFdlYXRoZXJJbmZvJztcblxuY29uc3QgZGVmYXVsdExvY2F0aW9uID0gJ0xvbmRvbic7XG5nZXRXZWF0aGVyRGF0YShkZWZhdWx0TG9jYXRpb24pLnRoZW4oKHdlYXRoZXJJbmZvKSA9PiB7XG4gIGNyZWF0ZUluaXRpYWxQYWdlKHdlYXRoZXJJbmZvKTtcbn0pLnRoZW4oKCkgPT4ge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hGb3JtU3VibWl0KCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=