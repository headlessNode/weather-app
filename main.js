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

  const searchContainer = document.createElement('div');
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
  const submitBtn = document.querySelector('.search-btn');
  submitBtn.addEventListener('click', _eventHandling__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNtQjtBQUNMO0FBQ0k7O0FBRTlDO0FBQ0EsMkRBQWM7QUFDZCxFQUFFLHVEQUFpQjtBQUNuQixDQUFDO0FBQ0Q7QUFDQSxzQ0FBc0Msc0RBQWdCO0FBQ3RELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHQvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9ldmVudEhhbmRsaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9nZXRXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnRG9uZ2xlJywgc2Fucy1zZXJpZjtcbn1cblxuLnNjZW5lLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5zY2VuZXtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBvYmplY3QtZml0OmNvdmVyO1xuICAgIGJvdHRvbTogMCU7ICAgIFxufVxuXG4uZGF5e1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI0E0Q0ZDNyAwJSwgIzdCQzNDQSAzMCUsICNEOUUxQ0UgNjAlLCAjRDVDNEFGIDEwMCUpO1xufVxuXG4ubmlnaHR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMEYxQzJFIDAlLCAjMUUzMzU4IDI1JSwgIzMyNEQ4MSA1MCUsICM0NjZCQUEgMTAwJSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBib3R0b206IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnI7XG59XG5cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zZWFyY2gtYnRue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4ud2VhdGhlci1jYXJke1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLnRlbXBlcmF0dXJle1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbn1cblxuLndlYXRoZXItY2FyZCAuaWNvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53ZWF0aGVyLWNhcmQgLndlYXRoZXJ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLndlYXRoZXIgLmNybnQtd2VhdGhlci1kZXRhaWxze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMTBweDtcbn1cblxuLmNybnQtd2VhdGhlci1kZXRhaWxzID4gKntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDUwJSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiw1MCUpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZmVlbHMtbGlrZS1pY29uLCAuaHVtaWRpdHktaWNvbiwgLndpbmQtaWNvbiwgLmZhaHJlbmhlaXQtaWNvbntcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLWNhcmQgLnJlZ2lvbntcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBncmlkLXJvdzogNC81O1xufVxuXG4ud2VhdGhlci1jYXJkIC5jdXJyZW50LWRheXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBncmlkLXJvdzogNS82O1xufVxuXG4ud2VhdGhlci1jYXJkIC5mb3JlY2FzdC1kZXRhaWxze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXJvdzogNi83O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5mb3JlY2FzdC1kZXRhaWxzIC50b21vcnJvdy1mb3JlY2FzdCwgLmZvcmVjYXN0LWRldGFpbHMgLmFmdGVyLXRvbW9ycm93e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgY29sdW1uLWdhcDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAud2VhdGhlci1jYXJke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtGQUErRjtBQUNuRzs7QUFFQTtJQUNJLCtGQUErRjtBQUNuRzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0RvbmdsZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zY2VuZS1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uc2NlbmV7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvYmplY3QtZml0OmNvdmVyO1xcbiAgICBib3R0b206IDAlOyAgICBcXG59XFxuXFxuLmRheXtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjQTRDRkM3IDAlLCAjN0JDM0NBIDMwJSwgI0Q5RTFDRSA2MCUsICNENUM0QUYgMTAwJSk7XFxufVxcblxcbi5uaWdodHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMEYxQzJFIDAlLCAjMUUzMzU4IDI1JSwgIzMyNEQ4MSA1MCUsICM0NjZCQUEgMTAwJSk7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHRleHQtaW5kZW50OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5zZWFyY2gtYnRue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJke1xcbiAgICB3aWR0aDogNzY4cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLnRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmljb257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC53ZWF0aGVye1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLndlYXRoZXIgLmNybnQtd2VhdGhlci1kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmNybnQtd2VhdGhlci1kZXRhaWxzID4gKntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDUwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsNTAlKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZlZWxzLWxpa2UtaWNvbiwgLmh1bWlkaXR5LWljb24sIC53aW5kLWljb24sIC5mYWhyZW5oZWl0LWljb257XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAucmVnaW9ue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuY3VycmVudC1kYXl7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLXJvdzogNS82O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXJvdzogNi83O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1kZXRhaWxzIC50b21vcnJvdy1mb3JlY2FzdCwgLmZvcmVjYXN0LWRldGFpbHMgLmFmdGVyLXRvbW9ycm93e1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLndlYXRoZXItY2FyZHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlcy9za3kucG5nJztcbmltcG9ydCBIdW1pZGl0eUljb24gZnJvbSAnLi4vaW1hZ2VzL2h1bWlkaXR5SWNvbi5zdmcnO1xuaW1wb3J0IFdpbmRJY29uIGZyb20gJy4uL2ltYWdlcy93aW5kSWNvbi5zdmcnO1xuaW1wb3J0IEZhaHJlbmhlaXRJY29uIGZyb20gJy4uL2ltYWdlcy9mYWhyZW5oZWl0LnN2Zyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkTG9jYXRpb24oKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY2l0eScpO1xuICBhbGVydChgJHtzZWFyY2gudmFsdWV9IGRvZXNub3QgZXhpc3RgKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VycmVudFdlYXRoZXJEZXRhaWxzKHdlYXRoZXJJbmZvKSB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IGRlZ3JlZVNpZ24gPSAnXFx1MDBCMCc7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUudGVtcEN9JHtkZWdyZWVTaWdufUNgO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgaWYgKHdlYXRoZXJJbmZvLnJlZ2lvbi5pc0RheSA9PT0gJ3llcycpIHtcbiAgICBpY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNjAlLCAjZmZkNzAwIDAlLCB0cmFuc3BhcmVudCA3MCUpJztcbiAgfSBlbHNlIHtcbiAgICBpY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNjAlLCByZ2IoMjA0LDIwNCwyMDQpIDAlLCB0cmFuc3BhcmVudCA3MCUpJztcbiAgfVxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyJyk7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci5jb25kaXRpb247XG4gIGNvbnN0IGNybnRXZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcm50V2VhdGhlckRldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjcm50LXdlYXRoZXItZGV0YWlscycpO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaHVtaWRpdHknKTtcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGh1bWlkaXR5SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5LWljb24nKTtcbiAgaHVtaWRpdHlJY29uLnNyYyA9IEh1bWlkaXR5SWNvbjtcbiAgY29uc3QgaHVtaWRpdHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5SGVhZGluZy50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSc7XG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eVBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZS5odW1pZGl0eX0lYDtcblxuICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eUljb24pO1xuICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eUhlYWRpbmcpO1xuICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmZWVsc0xpa2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWVscy1saWtlJyk7XG4gIGNvbnN0IGZlZWxzTGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZlZWxzLWxpa2UtaWNvbicpO1xuICBmZWVsc0xpa2VJY29uLmlubmVySFRNTCA9ICc8IWRvY3R5cGUgaHRtbD48c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBzdHlsZT1cImZpbGw6cmdiKDI1NSwyNTUsMjU1KTtcIiBkPVwiTSAzMCAzNCBMIDI2IDM0IEMgMjQuODk3IDMzLjk5NyAyNC4wMDQgMzMuMTAzIDI0IDMyIEwgMjQgMjUgQyAyMi44OTcgMjQuOTk3IDIyLjAwNCAyNC4xMDMgMjIgMjMgTCAyMiAxNyBDIDIxLjk2OSAxNS4zMyAyMy4zMzEgMTMuOTY5IDI1IDE0IEwgMzEgMTQgQyAzMi42NyAxMy45NjkgMzQuMDMxIDE1LjMzIDM0IDE3IEwgMzQgMjMgQyAzMy45OTcgMjQuMTAzIDMzLjEwNCAyNC45OTcgMzIgMjUgTCAzMiAzMiBDIDMxLjk5NyAzMy4xMDMgMzEuMTA0IDMzLjk5NyAzMCAzNCBaIE0gMjUgMTYgQyAyNC40MzUgMTUuOTY2IDIzLjk2NiAxNi40MzQgMjQgMTcgTCAyNCAyMyBMIDI2IDIzIEwgMjYgMzIgTCAzMCAzMiBMIDMwIDIzIEwgMzIgMjMgTCAzMiAxNyBDIDMyLjAzNCAxNi40MzQgMzEuNTY2IDE1Ljk2NiAzMSAxNiBMIDI1IDE2IFogTSAyOCAxMyBDIDI0LjkyMSAxMyAyMi45OTcgOS42NjcgMjQuNTM2IDcgQyAyNi4wNzYgNC4zMzMgMjkuOTI1IDQuMzMzIDMxLjQ2NCA3IEMgMzEuODE1IDcuNjA4IDMyIDguMjk4IDMyIDkgQyAzMS45OTQgMTEuMjA2IDMwLjIwNyAxMi45OTMgMjggMTMgWiBNIDI4IDcgQyAyNi40NjEgNyAyNS40OTggOC42NjcgMjYuMjY4IDEwIEMgMjcuMDM4IDExLjMzMyAyOC45NjMgMTEuMzMzIDI5LjczMiAxMCBDIDI5LjkwOCA5LjY5NiAzMCA5LjM1MSAzMCA5IEMgMjkuOTk3IDcuODk3IDI5LjEwNCA3LjAwMyAyOCA3IFogTSAxNCAyNC4xODQgTCAxNCAxNiBMIDEyIDE2IEwgMTIgMjQuMTg0IEMgOS44MjMgMjQuOTU0IDkuMjk1IDI3Ljc5MiAxMS4wNTEgMjkuMjkzIEMgMTIuODA2IDMwLjc5MyAxNS41MjggMjkuODMxIDE1Ljk1IDI3LjU2MSBDIDE2LjIyIDI2LjEwOSAxNS4zOTMgMjQuNjc2IDE0IDI0LjE4NCBaXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwKVwiPjwvcGF0aD48cGF0aCBzdHlsZT1cImZpbGw6cmdiKDI1NSwyNTUsMjU1KTtcIiBkPVwiTSAxMyAzNCBDIDcuNjE3IDM0LjAwNiA0LjI0NiAyOC4xODIgNi45MzIgMjMuNTE3IEMgNy4yMjcgMjMuMDA1IDcuNTg2IDIyLjUzMiA4IDIyLjExIEwgOCAxMSBDIDggNy4xNTEgMTIuMTY3IDQuNzQ1IDE1LjUgNi42NyBDIDE3LjA0NyA3LjU2MyAxOCA5LjIxNCAxOCAxMSBMIDE4IDIyLjExIEMgMjEuNzcgMjUuOTUzIDE5Ljk2NiAzMi40MzYgMTQuNzUzIDMzLjc3OSBDIDE0LjE4IDMzLjkyNiAxMy41OTIgMzQuMDAxIDEzIDM0IFogTSAxMyA4IEMgMTEuMzQ0IDguMDAyIDEwLjAwMiA5LjM0NCAxMCAxMSBMIDEwIDIyLjk4MyBMIDkuNjY4IDIzLjI4MiBDIDYuNzk5IDI1Ljg0NyA3Ljc4MiAzMC41NTcgMTEuNDM4IDMxLjc2IEMgMTUuMDk0IDMyLjk2MiAxOC42ODEgMjkuNzU2IDE3Ljg5NSAyNS45ODggQyAxNy42NzcgMjQuOTQyIDE3LjEyOSAyMy45OTQgMTYuMzMyIDIzLjI4MiBMIDE2IDIyLjk4MyBMIDE2IDExIEMgMTUuOTk5IDkuMzQ0IDE0LjY1NiA4LjAwMiAxMyA4IFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDApXCI+PC9wYXRoPjxwYXRoIGRhdGEtbmFtZT1cIjxUcmFuc3BhcmVudCBSZWN0YW5nbGU+XCIgc3R5bGU9XCJmaWxsOm5vbmVcIiBkPVwiTSA0IDQgTCAzNiA0IEwgMzYgMzYgTCA0IDM2IEwgNCA0IFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDApXCI+PC9wYXRoPjwvc3ZnPic7XG4gIGNvbnN0IGZlZWxzTGlrZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlSGVhZGluZy50ZXh0Q29udGVudCA9ICdGZWVscyBsaWtlJztcbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUuZmVlbHNMaWtlfSR7ZGVncmVlU2lnbn1DYDtcblxuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSWNvbik7XG4gIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VIZWFkaW5nKTtcbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRlbXApO1xuXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kU3BlZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5kLXNwZWVkJyk7XG4gIGNvbnN0IHdpbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdpbmRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZC1pY29uJyk7XG4gIHdpbmRJY29uLnNyYyA9IFdpbmRJY29uO1xuICBjb25zdCB3aW5kSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kSGVhZGluZy50ZXh0Q29udGVudCA9ICdXaW5kIHNwZWVkJztcbiAgY29uc3Qgd2luZEtwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kS3BoLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUud2luZEtwaH1LUEhgO1xuXG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kSWNvbik7XG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kSGVhZGluZyk7XG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kS3BoKTtcblxuICBjb25zdCB0ZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wRi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAtZicpO1xuICBjb25zdCBmYWhyZW5oZWl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmYWhyZW5oZWl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhaHJlbmhlaXQtaWNvbicpO1xuICBmYWhyZW5oZWl0SWNvbi5zcmMgPSBGYWhyZW5oZWl0SWNvbjtcbiAgY29uc3QgZmFocmVuaGVpdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmFocmVuaGVpdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnRmFocmVuaGVpdCc7XG4gIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhaHJlbmhlaXRUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUudGVtcEZ9JHtkZWdyZWVTaWdufUZgO1xuXG4gIHRlbXBGLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRJY29uKTtcbiAgdGVtcEYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdEhlYWRpbmcpO1xuICB0ZW1wRi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0VGVtcCk7XG5cbiAgY3JudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICBjcm50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQodGVtcEYpO1xuXG4gIHdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JudFdlYXRoZXJEZXRhaWxzKTtcblxuICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVnaW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVnaW9uJyk7XG4gIHJlZ2lvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLnJlZ2lvbi5jaXR5fSwgJHt3ZWF0aGVySW5mby5yZWdpb24uY291bnRyeX1gO1xuXG4gIGNvbnN0IGN1cnJlbnREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VycmVudERheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2N1cnJlbnQtZGF5Jyk7XG4gIGN1cnJlbnREYXkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5yZWdpb24ubG9jYWxEYXl9LCAke3dlYXRoZXJJbmZvLnJlZ2lvbi5sb2NhbERhdGV9YDtcblxuICByZXR1cm4ge1xuICAgIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCByZWdpb24sIGN1cnJlbnREYXksIGljb24sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEZvcmVjYXN0RGV0YWlscyh3ZWF0aGVySW5mbykge1xuICBjb25zdCBkZWdyZWVTaWduID0gJ1xcdTAwQjAnO1xuICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvbW9ycm93Rm9yZWNhc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy1mb3JlY2FzdCcpO1xuICBjb25zdCB0b21vcnJvd0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0RheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LWRheScpO1xuICB0b21vcnJvd0RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93LmRheTtcbiAgY29uc3QgdG9tb3Jyb3dUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvbW9ycm93VGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LXRlbXAnKTtcbiAgdG9tb3Jyb3dUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uZm9yZWNhc3QudG9tb3Jyb3cubWF4VGVtcH0ke2RlZ3JlZVNpZ259Q2A7XG4gIGNvbnN0IHRvbW9ycm93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy1kYXRlJyk7XG4gIHRvbW9ycm93RGF0ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93LmRhdGU7XG4gIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvbW9ycm93Q29uZGl0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctY29uZGl0aW9uJyk7XG4gIHRvbW9ycm93Q29uZGl0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QudG9tb3Jyb3cuY29uZGl0aW9uLnRleHQ7XG5cbiAgdG9tb3Jyb3dGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0RheSk7XG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dUZW1wKTtcbiAgdG9tb3Jyb3dGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0RhdGUpO1xuICB0b21vcnJvd0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93Q29uZGl0aW9uKTtcblxuICBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheUFmdGVyVG9tb3Jyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdycpO1xuICBjb25zdCBhZnRlclRvbW9ycm93RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy1kYXknKTtcbiAgYWZ0ZXJUb21vcnJvd0RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cuZGF5O1xuICBjb25zdCBhZnRlclRvbW9ycm93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93VGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FmdGVyLXRvbW9ycm93LXRlbXAnKTtcbiAgYWZ0ZXJUb21vcnJvd1RlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5mb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93Lm1heFRlbXB9JHtkZWdyZWVTaWdufUNgO1xuICBjb25zdCBhZnRlclRvbW9ycm93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93RGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FmdGVyLXRvbW9ycm93LWRhdGUnKTtcbiAgYWZ0ZXJUb21vcnJvd0RhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93LmRhdGU7XG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FmdGVyLXRvbW9ycm93LWNvbmRpdGlvbicpO1xuICBhZnRlclRvbW9ycm93Q29uZGl0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5jb25kaXRpb24udGV4dDtcblxuICBkYXlBZnRlclRvbW9ycm93LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dEYXkpO1xuICBkYXlBZnRlclRvbW9ycm93LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dUZW1wKTtcbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93RGF0ZSk7XG4gIGRheUFmdGVyVG9tb3Jyb3cuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbik7XG5cbiAgcmV0dXJuIHsgdG9tb3Jyb3dGb3JlY2FzdCwgZGF5QWZ0ZXJUb21vcnJvdyB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVXZWF0aGVyQ2FyZCgpIHtcbiAgY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgaWYgKHdlYXRoZXJDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1wcmVzZW50JykpIHtcbiAgICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLXByZXNlbnQnKTtcbiAgICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKTtcbiAgICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5yZW1vdmVDaGlsZCh3ZWF0aGVyQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2NlbmVCYWNrZ3JvdW5kKHdlYXRoZXJJbmZvKSB7XG4gIGNvbnN0IHNjZW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLWNvbnRhaW5lcicpO1xuICBpZiAod2VhdGhlckluZm8ucmVnaW9uLmlzRGF5ID09PSAneWVzJykge1xuICAgIGlmIChzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ25pZ2h0JykpIHtcbiAgICAgIHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25pZ2h0Jyk7XG4gICAgfVxuICAgIHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2RheScpKSB7XG4gICAgICBzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkYXknKTtcbiAgICB9XG4gICAgc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmlnaHQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckluZm8pIHtcbiAgcmVtb3ZlV2VhdGhlckNhcmQoKTtcbiAgY2hhbmdlU2NlbmVCYWNrZ3JvdW5kKHdlYXRoZXJJbmZvKTtcbiAgY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgd2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1wcmVzZW50Jyk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jYXJkJyk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gYWRkQ3VycmVudFdlYXRoZXJEZXRhaWxzKHdlYXRoZXJJbmZvKTtcblxuICBjb25zdCBmb3JlY2FzdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yZWNhc3REZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3QtZGV0YWlscycpO1xuICBjb25zdCBmb3JlY2FzdCA9IGFkZEZvcmVjYXN0RGV0YWlscyh3ZWF0aGVySW5mbyk7XG5cbiAgZm9yZWNhc3REZXRhaWxzLmFwcGVuZENoaWxkKGZvcmVjYXN0LnRvbW9ycm93Rm9yZWNhc3QpO1xuICBmb3JlY2FzdERldGFpbHMuYXBwZW5kQ2hpbGQoZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdyk7XG5cbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLnRlbXBlcmF0dXJlKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLmljb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMud2VhdGhlcik7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy5yZWdpb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMuY3VycmVudERheSk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGV0YWlscyk7XG5cbiAgd2VhdGhlckNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFBhZ2Uod2VhdGhlckluZm8pIHtcbiAgLy8gY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbiAgY29uc3Qgc2NlbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NlbmVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY2VuZS1jb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY2VuZUNvbnRhaW5lcik7XG4gIGNoYW5nZVNjZW5lQmFja2dyb3VuZCh3ZWF0aGVySW5mbyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBJbWFnZSk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NjZW5lJyk7XG5cbiAgc2NlbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG4gIHNjZW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDYXJkQ29udGFpbmVyKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaC1jaXR5Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtY2l0eScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNpdHknKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGNpdHkgbmFtZScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWJ0bicpO1xuICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJzZWFyY2gtaWNvblwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiLTMuMiAtMy4yIDM4LjQgMzguNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjQ2IDI0LjQ1Yy02LjI5IDAtMTEuMzg5LTUuMDEtMTEuMzg5LTExLjIgMC02LjE5IDUuMDk5LTExLjIxIDExLjM4OS0xMS4yMSA2LjI5IDAgMTEuMzkgNS4wMiAxMS4zOSAxMS4yMSAwIDYuMTktNS4xIDExLjItMTEuMzkgMTEuMlptMTguMjI4IDUuOC04LjI1OS04LjEzYzIuMTYyLTIuMzUgMy40OTEtNS40NSAzLjQ5MS04Ljg3QzI2LjkyIDUuOTMgMjAuODk0IDAgMTMuNDYgMCA2LjAyNiAwIDAgNS45MyAwIDEzLjI1YzAgNy4zMSA2LjAyNiAxMy4yNCAxMy40NiAxMy4yNGExMy41MiAxMy41MiAwIDAgMCA4LjQ3Mi0yLjk2bDguMjkyIDguMTZjLjQwNS40IDEuMDYuNCAxLjQ2NCAwIC40MDUtLjM5LjQwNS0xLjA0IDAtMS40NFpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcblxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlclNlYXJjaCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVySW5mbyk7XG59XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVySW5mbyc7XG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyQ2FyZCwgaW52YWxpZExvY2F0aW9uIH0gZnJvbSAnLi9kb20nO1xuXG5mdW5jdGlvbiBzZWFyY2hGb3JtU3VibWl0KCkge1xuICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jaXR5Jyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlclNlYXJjaC52YWx1ZTtcbiAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY3JlYXRlV2VhdGhlckNhcmQocmVzcG9uc2UpO1xuICB9LCAoZXJyKSA9PiB7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluY2x1ZGVzKCc0MDAnKSkge1xuICAgICAgaW52YWxpZExvY2F0aW9uKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoRm9ybVN1Ym1pdDtcbiIsIi8vIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS5cbi8vIFlvdeKAmXJlIGdvaW5nIHRvIHdhbnQgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgYSBsb2NhdGlvblxuLy8gYW5kIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWExY2Q2MjNmOTZjMDRmOTg5ZmE4MzUyMzIzMDgxMiZxPSR7bG9jYXRpb259JmRheXM9M2AsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCAqIDEwMDApO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSAtIDIwMDA7XG4gICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGRheURhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICBjb25zdCB3ZWVrZGF5ID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4gICAgICBjb25zdCBkYXlUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5pc19kYXkgPT09IDEgPyAneWVzJyA6ICdubyc7XG5cbiAgICAgIGNvbnN0IHRvbW9ycm93Rm9yZWNhc3REYXRlID0gbmV3IERhdGUod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZV9lcG9jaCAqIDEwMDApO1xuICAgICAgY29uc3QgdG9tb3Jyb3dEYXRlID0gYCR7dG9tb3Jyb3dGb3JlY2FzdERhdGUuZ2V0RGF0ZSgpfSAke21vbnRoc1t0b21vcnJvd0ZvcmVjYXN0RGF0ZS5nZXRNb250aCgpXX0gJHt5ZWFyfWA7XG4gICAgICBjb25zdCB0b21vcnJvd0RheSA9IGAke3dlZWtkYXlbdG9tb3Jyb3dGb3JlY2FzdERhdGUuZ2V0RGF5KCldfWA7XG5cbiAgICAgIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3cgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlX2Vwb2NoICogMTAwMCk7XG4gICAgICBjb25zdCBkYXlBZnRlclRvbW9ycm93RGF0ZSA9IGAke2RheUFmdGVyVG9tb3Jyb3cuZ2V0RGF0ZSgpfSAke21vbnRoc1tkYXlBZnRlclRvbW9ycm93LmdldE1vbnRoKCldfSAke3llYXJ9YDtcbiAgICAgIGNvbnN0IGFmdGVyVG9tb3Jyb3dEYXkgPSBgJHt3ZWVrZGF5W2RheUFmdGVyVG9tb3Jyb3cuZ2V0RGF5KCldfWA7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0ge1xuICAgICAgICBjdXJyZW50V2VhdGhlcjoge1xuICAgICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICAgICAgdGVtcEM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgdGVtcEY6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICBmZWVsc0xpa2U6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgICB3aW5kS3BoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZvcmVjYXN0OiB7XG4gICAgICAgICAgdG9tb3Jyb3c6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbixcbiAgICAgICAgICAgIG1heFRlbXA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBkYXRlOiB0b21vcnJvd0RhdGUsXG4gICAgICAgICAgICBkYXk6IHRvbW9ycm93RGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF5QWZ0ZXJUb21vcnJvdzoge1xuICAgICAgICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLFxuICAgICAgICAgICAgbWF4VGVtcDogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgIGRhdGU6IGRheUFmdGVyVG9tb3Jyb3dEYXRlLFxuICAgICAgICAgICAgZGF5OiBhZnRlclRvbW9ycm93RGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgY291bnRyeTogd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgICBsb2NhbERhdGU6IGAke2RheURhdGV9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWAsXG4gICAgICAgICAgbG9jYWxEYXk6IGAke3dlZWtkYXlbZGF5XX1gLFxuICAgICAgICAgIGlzRGF5OiBkYXlUaW1lLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHdlYXRoZXJJbmZvO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHsgdGhyb3cgZXJyOyB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBzZWFyY2hGb3JtU3VibWl0IGZyb20gJy4vZXZlbnRIYW5kbGluZyc7XG5pbXBvcnQgeyBjcmVhdGVJbml0aWFsUGFnZSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2dldFdlYXRoZXJJbmZvJztcblxuY29uc3QgZGVmYXVsdExvY2F0aW9uID0gJ0xvbmRvbic7XG5nZXRXZWF0aGVyRGF0YShkZWZhdWx0TG9jYXRpb24pLnRoZW4oKHdlYXRoZXJJbmZvKSA9PiB7XG4gIGNyZWF0ZUluaXRpYWxQYWdlKHdlYXRoZXJJbmZvKTtcbn0pLnRoZW4oKCkgPT4ge1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hGb3JtU3VibWl0KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9