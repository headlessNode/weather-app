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

.day{
    background: linear-gradient(to bottom left, #A4CFC7 0%, #7BC3CA 30%, #D9E1CE 50%, #D5C4AF 100%);
}

.night{
    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);
}

.search-container{
    width: 768px;
    height: 2rem;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 5px;
}

.search-container input{
    appearance: none;
    outline: none;
    border: none;
    background: #ccc;
    height: 100%;
    width: 95%;
    text-indent: 5px;
    font-size: large;
}

.search-btn{
    cursor: pointer;
    width: 5%;
    height: 100%;
    border: none;
    background: #ccc;
    outline: none;
}

.scene-container{
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: auto;
}

.scene{
    position:fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit:cover;
    bottom: 0%;    
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
    grid-template-rows: 2rem 1fr;
    gap: 10px;
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
}

.weather .crnt-weather-details{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(160px, 1fr));
    grid-template-rows: repeat(2,1fr);
    align-items: center;
    justify-items: center;
    /* column-gap: 20%; */
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
    border: 1px solid red;
}

.forecast-details .tomorrow-forecast, .forecast-details .after-tomorrow{
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    column-gap: 30%;
    text-align: center;
    border: 1px solid green;
}

@media screen and (max-width: 768px) {
    .weather-card{
        width: 100%;
    }
    .search-container{
        width: 100%;
    }
}
  `, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Dongle', sans-serif;\n}\n\n.day{\n    background: linear-gradient(to bottom left, #A4CFC7 0%, #7BC3CA 30%, #D9E1CE 50%, #D5C4AF 100%);\n}\n\n.night{\n    background: linear-gradient(to bottom left, #0F1C2E 0%, #1E3358 25%, #324D81 50%, #466BAA 100%);\n}\n\n.search-container{\n    width: 768px;\n    height: 2rem;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.search-container input{\n    appearance: none;\n    outline: none;\n    border: none;\n    background: #ccc;\n    height: 100%;\n    width: 95%;\n    text-indent: 5px;\n    font-size: large;\n}\n\n.search-btn{\n    cursor: pointer;\n    width: 5%;\n    height: 100%;\n    border: none;\n    background: #ccc;\n    outline: none;\n}\n\n.scene-container{\n    position: relative;\n    width: 100%;\n    min-height: 100vh;\n    overflow: auto;\n}\n\n.scene{\n    position:fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    object-fit:cover;\n    bottom: 0%;    \n}\n\n.card-container{\n    color: white;\n    position:absolute;\n    z-index: 2;\n    bottom: 0%;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    grid-template-rows: 2rem 1fr;\n    gap: 10px;\n}\n\n.weather-card{\n    width: 768px;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.weather-card .temperature{\n    font-size: 6rem;\n}\n\n.weather-card .icon{\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.weather-card .weather{\n    font-size: 3rem;\n    grid-row: 3/4;\n    width: 100%;\n    text-align: center;\n    display: grid;\n}\n\n.weather .crnt-weather-details{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(160px, 1fr));\n    grid-template-rows: repeat(2,1fr);\n    align-items: center;\n    justify-items: center;\n    /* column-gap: 20%; */\n    row-gap: 10px;\n}\n\n.crnt-weather-details > *{\n    display: grid;\n    width: 160px;\n    grid-template-columns: repeat(2,50%);\n    grid-template-rows: repeat(2,50%);\n    align-items: center;\n    justify-items: center;\n    font-size: 1.5rem;\n}\n\n.feels-like-icon, .humidity-icon, .wind-icon, .fahrenheit-icon{\n    grid-row: 1/3;\n    grid-column: 1/2;\n    width: 40px;\n    height: 40px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.weather-card .region{\n    font-size: 1.5rem;\n    grid-row: 4/5;\n}\n\n.weather-card .current-day{\n    font-size: 1.5rem;\n    grid-row: 5/6;\n}\n\n.weather-card .forecast-details{\n    width: 100%;\n    height: 100%;\n    grid-row: 6/7;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n    border: 1px solid red;\n}\n\n.forecast-details .tomorrow-forecast, .forecast-details .after-tomorrow{\n    font-size: 2rem;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    column-gap: 30%;\n    text-align: center;\n    border: 1px solid green;\n}\n\n@media screen and (max-width: 768px) {\n    .weather-card{\n        width: 100%;\n    }\n    .search-container{\n        width: 100%;\n    }\n}\n  "],"sourceRoot":""}]);
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
/* harmony export */   createWeatherCard: () => (/* binding */ createWeatherCard)
/* harmony export */ });
/* harmony import */ var _images_sky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sky.png */ "./src/images/sky.png");
/* harmony import */ var _images_humidityIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/humidityIcon.svg */ "./src/images/humidityIcon.svg");
/* harmony import */ var _images_windIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/windIcon.svg */ "./src/images/windIcon.svg");
/* harmony import */ var _images_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/fahrenheit.svg */ "./src/images/fahrenheit.svg");





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
  console.log(weatherInfo);
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
      console.log(weatherData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ21CO0FBQ0w7QUFDSTs7QUFFOUM7QUFDQSwyREFBYztBQUNkLEVBQUUsdURBQWlCO0FBQ25CLENBQUM7QUFDRDtBQUNBLHNDQUFzQyxzREFBZ0I7QUFDdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdC9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2V2ZW50SGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2dldFdlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCBzYW5zLXNlcmlmO1xufVxuXG4uZGF5e1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI0E0Q0ZDNyAwJSwgIzdCQzNDQSAzMCUsICNEOUUxQ0UgNTAlLCAjRDVDNEFGIDEwMCUpO1xufVxuXG4ubmlnaHR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMEYxQzJFIDAlLCAjMUUzMzU4IDI1JSwgIzMyNEQ4MSA1MCUsICM0NjZCQUEgMTAwJSk7XG59XG5cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5zZWFyY2gtYnRue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zY2VuZS1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2NlbmV7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgICBib3R0b206IDAlOyAgICBcbn1cblxuLmNhcmQtY29udGFpbmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ud2VhdGhlci1jYXJke1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLnRlbXBlcmF0dXJle1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbn1cblxuLndlYXRoZXItY2FyZCAuaWNvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53ZWF0aGVyLWNhcmQgLndlYXRoZXJ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi53ZWF0aGVyIC5jcm50LXdlYXRoZXItZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIC8qIGNvbHVtbi1nYXA6IDIwJTsgKi9cbiAgICByb3ctZ2FwOiAxMHB4O1xufVxuXG4uY3JudC13ZWF0aGVyLWRldGFpbHMgPiAqe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTAlKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDUwJSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mZWVscy1saWtlLWljb24sIC5odW1pZGl0eS1pY29uLCAud2luZC1pY29uLCAuZmFocmVuaGVpdC1pY29ue1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItY2FyZCAucmVnaW9ue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtcm93OiA0LzU7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtZGF5e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtcm93OiA1LzY7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmZvcmVjYXN0LWRldGFpbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtcm93OiA2Lzc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5mb3JlY2FzdC1kZXRhaWxzIC50b21vcnJvdy1mb3JlY2FzdCwgLmZvcmVjYXN0LWRldGFpbHMgLmFmdGVyLXRvbW9ycm93e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgY29sdW1uLWdhcDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAud2VhdGhlci1jYXJke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksK0ZBQStGO0FBQ25HOztBQUVBO0lBQ0ksK0ZBQStGO0FBQ25HOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdEb25nbGUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGF5e1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNBNENGQzcgMCUsICM3QkMzQ0EgMzAlLCAjRDlFMUNFIDUwJSwgI0Q1QzRBRiAxMDAlKTtcXG59XFxuXFxuLm5pZ2h0e1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwRjFDMkUgMCUsICMxRTMzNTggMjUlLCAjMzI0RDgxIDUwJSwgIzQ2NkJBQSAxMDAlKTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3NjhweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICB0ZXh0LWluZGVudDogNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2NlbmUtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zY2VuZXtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxuICAgIGJvdHRvbTogMCU7ICAgIFxcbn1cXG5cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJke1xcbiAgICB3aWR0aDogNzY4cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLnRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmljb257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC53ZWF0aGVye1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi53ZWF0aGVyIC5jcm50LXdlYXRoZXItZGV0YWlsc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDE2MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGNvbHVtbi1nYXA6IDIwJTsgKi9cXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmNybnQtd2VhdGhlci1kZXRhaWxzID4gKntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDUwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsNTAlKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZlZWxzLWxpa2UtaWNvbiwgLmh1bWlkaXR5LWljb24sIC53aW5kLWljb24sIC5mYWhyZW5oZWl0LWljb257XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAucmVnaW9ue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuY3VycmVudC1kYXl7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLXJvdzogNS82O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXJvdzogNi83O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmZvcmVjYXN0LWRldGFpbHMgLnRvbW9ycm93LWZvcmVjYXN0LCAuZm9yZWNhc3QtZGV0YWlscyAuYWZ0ZXItdG9tb3Jyb3d7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLndlYXRoZXItY2FyZHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlcy9za3kucG5nJztcbmltcG9ydCBIdW1pZGl0eUljb24gZnJvbSAnLi4vaW1hZ2VzL2h1bWlkaXR5SWNvbi5zdmcnO1xuaW1wb3J0IFdpbmRJY29uIGZyb20gJy4uL2ltYWdlcy93aW5kSWNvbi5zdmcnO1xuaW1wb3J0IEZhaHJlbmhlaXRJY29uIGZyb20gJy4uL2ltYWdlcy9mYWhyZW5oZWl0LnN2Zyc7XG5cbmZ1bmN0aW9uIGFkZEN1cnJlbnRXZWF0aGVyRGV0YWlscyh3ZWF0aGVySW5mbykge1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wZXJhdHVyZScpO1xuICBjb25zdCBkZWdyZWVTaWduID0gJ1xcdTAwQjAnO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLnRlbXBDfSR7ZGVncmVlU2lnbn1DYDtcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gIGlmICh3ZWF0aGVySW5mby5yZWdpb24uaXNEYXkgPT09ICd5ZXMnKSB7XG4gICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDYwJSwgI2ZmZDcwMCAwJSwgdHJhbnNwYXJlbnQgNzAlKSc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDYwJSwgcmdiKDIwNCwyMDQsMjA0KSAwJSwgdHJhbnNwYXJlbnQgNzAlKSc7XG4gIH1cbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlcicpO1xuICB3ZWF0aGVyLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIuY29uZGl0aW9uO1xuICBjb25zdCBjcm50V2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3JudC13ZWF0aGVyLWRldGFpbHMnKTtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5Jyk7XG4gIGNvbnN0IGh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBodW1pZGl0eUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdodW1pZGl0eS1pY29uJyk7XG4gIGh1bWlkaXR5SWNvbi5zcmMgPSBIdW1pZGl0eUljb247XG4gIGNvbnN0IGh1bWlkaXR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eUhlYWRpbmcudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xuICBjb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHlQZXJjZW50LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUuaHVtaWRpdHl9JWA7XG5cbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJY29uKTtcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlIZWFkaW5nKTtcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50KTtcblxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmVlbHMtbGlrZScpO1xuICBjb25zdCBmZWVsc0xpa2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWVscy1saWtlLWljb24nKTtcbiAgZmVlbHNMaWtlSWNvbi5pbm5lckhUTUwgPSAnPCFkb2N0eXBlIGh0bWw+PHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggc3R5bGU9XCJmaWxsOnJnYigyNTUsMjU1LDI1NSk7XCIgZD1cIk0gMzAgMzQgTCAyNiAzNCBDIDI0Ljg5NyAzMy45OTcgMjQuMDA0IDMzLjEwMyAyNCAzMiBMIDI0IDI1IEMgMjIuODk3IDI0Ljk5NyAyMi4wMDQgMjQuMTAzIDIyIDIzIEwgMjIgMTcgQyAyMS45NjkgMTUuMzMgMjMuMzMxIDEzLjk2OSAyNSAxNCBMIDMxIDE0IEMgMzIuNjcgMTMuOTY5IDM0LjAzMSAxNS4zMyAzNCAxNyBMIDM0IDIzIEMgMzMuOTk3IDI0LjEwMyAzMy4xMDQgMjQuOTk3IDMyIDI1IEwgMzIgMzIgQyAzMS45OTcgMzMuMTAzIDMxLjEwNCAzMy45OTcgMzAgMzQgWiBNIDI1IDE2IEMgMjQuNDM1IDE1Ljk2NiAyMy45NjYgMTYuNDM0IDI0IDE3IEwgMjQgMjMgTCAyNiAyMyBMIDI2IDMyIEwgMzAgMzIgTCAzMCAyMyBMIDMyIDIzIEwgMzIgMTcgQyAzMi4wMzQgMTYuNDM0IDMxLjU2NiAxNS45NjYgMzEgMTYgTCAyNSAxNiBaIE0gMjggMTMgQyAyNC45MjEgMTMgMjIuOTk3IDkuNjY3IDI0LjUzNiA3IEMgMjYuMDc2IDQuMzMzIDI5LjkyNSA0LjMzMyAzMS40NjQgNyBDIDMxLjgxNSA3LjYwOCAzMiA4LjI5OCAzMiA5IEMgMzEuOTk0IDExLjIwNiAzMC4yMDcgMTIuOTkzIDI4IDEzIFogTSAyOCA3IEMgMjYuNDYxIDcgMjUuNDk4IDguNjY3IDI2LjI2OCAxMCBDIDI3LjAzOCAxMS4zMzMgMjguOTYzIDExLjMzMyAyOS43MzIgMTAgQyAyOS45MDggOS42OTYgMzAgOS4zNTEgMzAgOSBDIDI5Ljk5NyA3Ljg5NyAyOS4xMDQgNy4wMDMgMjggNyBaIE0gMTQgMjQuMTg0IEwgMTQgMTYgTCAxMiAxNiBMIDEyIDI0LjE4NCBDIDkuODIzIDI0Ljk1NCA5LjI5NSAyNy43OTIgMTEuMDUxIDI5LjI5MyBDIDEyLjgwNiAzMC43OTMgMTUuNTI4IDI5LjgzMSAxNS45NSAyNy41NjEgQyAxNi4yMiAyNi4xMDkgMTUuMzkzIDI0LjY3NiAxNCAyNC4xODQgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5OTk5OTk5OTk5OTk5OTksIDAsIDAsIDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMClcIj48L3BhdGg+PHBhdGggc3R5bGU9XCJmaWxsOnJnYigyNTUsMjU1LDI1NSk7XCIgZD1cIk0gMTMgMzQgQyA3LjYxNyAzNC4wMDYgNC4yNDYgMjguMTgyIDYuOTMyIDIzLjUxNyBDIDcuMjI3IDIzLjAwNSA3LjU4NiAyMi41MzIgOCAyMi4xMSBMIDggMTEgQyA4IDcuMTUxIDEyLjE2NyA0Ljc0NSAxNS41IDYuNjcgQyAxNy4wNDcgNy41NjMgMTggOS4yMTQgMTggMTEgTCAxOCAyMi4xMSBDIDIxLjc3IDI1Ljk1MyAxOS45NjYgMzIuNDM2IDE0Ljc1MyAzMy43NzkgQyAxNC4xOCAzMy45MjYgMTMuNTkyIDM0LjAwMSAxMyAzNCBaIE0gMTMgOCBDIDExLjM0NCA4LjAwMiAxMC4wMDIgOS4zNDQgMTAgMTEgTCAxMCAyMi45ODMgTCA5LjY2OCAyMy4yODIgQyA2Ljc5OSAyNS44NDcgNy43ODIgMzAuNTU3IDExLjQzOCAzMS43NiBDIDE1LjA5NCAzMi45NjIgMTguNjgxIDI5Ljc1NiAxNy44OTUgMjUuOTg4IEMgMTcuNjc3IDI0Ljk0MiAxNy4xMjkgMjMuOTk0IDE2LjMzMiAyMy4yODIgTCAxNiAyMi45ODMgTCAxNiAxMSBDIDE1Ljk5OSA5LjM0NCAxNC42NTYgOC4wMDIgMTMgOCBaXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwKVwiPjwvcGF0aD48cGF0aCBkYXRhLW5hbWU9XCI8VHJhbnNwYXJlbnQgUmVjdGFuZ2xlPlwiIHN0eWxlPVwiZmlsbDpub25lXCIgZD1cIk0gNCA0IEwgMzYgNCBMIDM2IDM2IEwgNCAzNiBMIDQgNCBaXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwKVwiPjwvcGF0aD48L3N2Zz4nO1xuICBjb25zdCBmZWVsc0xpa2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZSc7XG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLmZlZWxzTGlrZX0ke2RlZ3JlZVNpZ259Q2A7XG5cbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZUljb24pO1xuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSGVhZGluZyk7XG4gIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZC1zcGVlZCcpO1xuICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3aW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmQtaWNvbicpO1xuICB3aW5kSWNvbi5zcmMgPSBXaW5kSWNvbjtcbiAgY29uc3Qgd2luZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2luZCBzcGVlZCc7XG4gIGNvbnN0IHdpbmRLcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEtwaC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLndpbmRLcGh9S1BIYDtcblxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEhlYWRpbmcpO1xuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEtwaCk7XG5cbiAgY29uc3QgdGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcEYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wLWYnKTtcbiAgY29uc3QgZmFocmVuaGVpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZmFocmVuaGVpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYWhyZW5oZWl0LWljb24nKTtcbiAgZmFocmVuaGVpdEljb24uc3JjID0gRmFocmVuaGVpdEljb247XG4gIGNvbnN0IGZhaHJlbmhlaXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhaHJlbmhlaXRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZhaHJlbmhlaXQnO1xuICBjb25zdCBmYWhyZW5oZWl0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWhyZW5oZWl0VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLnRlbXBGfSR7ZGVncmVlU2lnbn1GYDtcblxuICB0ZW1wRi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0SWNvbik7XG4gIHRlbXBGLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRIZWFkaW5nKTtcbiAgdGVtcEYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdFRlbXApO1xuXG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGNybnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICBjcm50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY3JudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHRlbXBGKTtcblxuICB3ZWF0aGVyLmFwcGVuZENoaWxkKGNybnRXZWF0aGVyRGV0YWlscyk7XG5cbiAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlZ2lvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlZ2lvbicpO1xuICByZWdpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVySW5mby5yZWdpb24uY2l0eX0sICR7d2VhdGhlckluZm8ucmVnaW9uLmNvdW50cnl9YDtcblxuICBjb25zdCBjdXJyZW50RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnREYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW50LWRheScpO1xuICBjdXJyZW50RGF5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8ucmVnaW9uLmxvY2FsRGF5fSwgJHt3ZWF0aGVySW5mby5yZWdpb24ubG9jYWxEYXRlfWA7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgcmVnaW9uLCBjdXJyZW50RGF5LCBpY29uLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRGb3JlY2FzdERldGFpbHMod2VhdGhlckluZm8pIHtcbiAgY29uc3QgZGVncmVlU2lnbiA9ICdcXHUwMEIwJztcbiAgY29uc3QgdG9tb3Jyb3dGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0ZvcmVjYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctZm9yZWNhc3QnKTtcbiAgY29uc3QgdG9tb3Jyb3dEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dEYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy1kYXknKTtcbiAgdG9tb3Jyb3dEYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5kYXk7XG4gIGNvbnN0IHRvbW9ycm93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd1RlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b21vcnJvdy10ZW1wJyk7XG4gIHRvbW9ycm93VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93Lm1heFRlbXB9JHtkZWdyZWVTaWdufUNgO1xuICBjb25zdCB0b21vcnJvd0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9tb3Jyb3dEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9tb3Jyb3ctZGF0ZScpO1xuICB0b21vcnJvd0RhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC50b21vcnJvdy5kYXRlO1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0NvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvbW9ycm93LWNvbmRpdGlvbicpO1xuICB0b21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LnRvbW9ycm93LmNvbmRpdGlvbi50ZXh0O1xuXG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dEYXkpO1xuICB0b21vcnJvd0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93VGVtcCk7XG4gIHRvbW9ycm93Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dEYXRlKTtcbiAgdG9tb3Jyb3dGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgY29uc3QgZGF5QWZ0ZXJUb21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlBZnRlclRvbW9ycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3cnKTtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93RGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWZ0ZXItdG9tb3Jyb3ctZGF5Jyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVySW5mby5mb3JlY2FzdC5kYXlBZnRlclRvbW9ycm93LmRheTtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd1RlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy10ZW1wJyk7XG4gIGFmdGVyVG9tb3Jyb3dUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5tYXhUZW1wfSR7ZGVncmVlU2lnbn1DYDtcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWZ0ZXJUb21vcnJvd0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy1kYXRlJyk7XG4gIGFmdGVyVG9tb3Jyb3dEYXRlLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdy5kYXRlO1xuICBjb25zdCBhZnRlclRvbW9ycm93Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFmdGVyVG9tb3Jyb3dDb25kaXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZnRlci10b21vcnJvdy1jb25kaXRpb24nKTtcbiAgYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJJbmZvLmZvcmVjYXN0LmRheUFmdGVyVG9tb3Jyb3cuY29uZGl0aW9uLnRleHQ7XG5cbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93RGF5KTtcbiAgZGF5QWZ0ZXJUb21vcnJvdy5hcHBlbmRDaGlsZChhZnRlclRvbW9ycm93VGVtcCk7XG4gIGRheUFmdGVyVG9tb3Jyb3cuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0RhdGUpO1xuICBkYXlBZnRlclRvbW9ycm93LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gIHJldHVybiB7IHRvbW9ycm93Rm9yZWNhc3QsIGRheUFmdGVyVG9tb3Jyb3cgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlV2VhdGhlckNhcmQoKSB7XG4gIGNvbnN0IHdlYXRoZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gIGlmICh3ZWF0aGVyQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtcHJlc2VudCcpKSB7XG4gICAgd2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1wcmVzZW50Jyk7XG4gICAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkJyk7XG4gICAgd2VhdGhlckNhcmRDb250YWluZXIucmVtb3ZlQ2hpbGQod2VhdGhlckNhcmQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNjZW5lQmFja2dyb3VuZCh3ZWF0aGVySW5mbykge1xuICBjb25zdCBzY2VuZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1jb250YWluZXInKTtcbiAgaWYgKHdlYXRoZXJJbmZvLnJlZ2lvbi5pc0RheSA9PT0gJ3llcycpIHtcbiAgICBpZiAoc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduaWdodCcpKSB7XG4gICAgICBzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCduaWdodCcpO1xuICAgIH1cbiAgICBzY2VuZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXknKSkge1xuICAgICAgc2NlbmVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGF5Jyk7XG4gICAgfVxuICAgIHNjZW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJJbmZvKSB7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbiAgcmVtb3ZlV2VhdGhlckNhcmQoKTtcbiAgY2hhbmdlU2NlbmVCYWNrZ3JvdW5kKHdlYXRoZXJJbmZvKTtcbiAgY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgd2VhdGhlckNhcmRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1wcmVzZW50Jyk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jYXJkJyk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gYWRkQ3VycmVudFdlYXRoZXJEZXRhaWxzKHdlYXRoZXJJbmZvKTtcblxuICBjb25zdCBmb3JlY2FzdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yZWNhc3REZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3QtZGV0YWlscycpO1xuICBjb25zdCBmb3JlY2FzdCA9IGFkZEZvcmVjYXN0RGV0YWlscyh3ZWF0aGVySW5mbyk7XG5cbiAgZm9yZWNhc3REZXRhaWxzLmFwcGVuZENoaWxkKGZvcmVjYXN0LnRvbW9ycm93Rm9yZWNhc3QpO1xuICBmb3JlY2FzdERldGFpbHMuYXBwZW5kQ2hpbGQoZm9yZWNhc3QuZGF5QWZ0ZXJUb21vcnJvdyk7XG5cbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLnRlbXBlcmF0dXJlKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzLmljb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMud2VhdGhlcik7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscy5yZWdpb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMuY3VycmVudERheSk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGV0YWlscyk7XG5cbiAgd2VhdGhlckNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFBhZ2Uod2VhdGhlckluZm8pIHtcbiAgLy8gY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbiAgY29uc3Qgc2NlbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NlbmVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY2VuZS1jb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY2VuZUNvbnRhaW5lcik7XG4gIGNoYW5nZVNjZW5lQmFja2dyb3VuZCh3ZWF0aGVySW5mbyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBJbWFnZSk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NjZW5lJyk7XG5cbiAgc2NlbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG4gIHNjZW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDYXJkQ29udGFpbmVyKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaC1jaXR5Jyk7XG4gIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtY2l0eScpO1xuICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWNpdHknKTtcbiAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGNpdHkgbmFtZScpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLWJ0bicpO1xuICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJzZWFyY2gtaWNvblwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiLTMuMiAtMy4yIDM4LjQgMzguNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjQ2IDI0LjQ1Yy02LjI5IDAtMTEuMzg5LTUuMDEtMTEuMzg5LTExLjIgMC02LjE5IDUuMDk5LTExLjIxIDExLjM4OS0xMS4yMSA2LjI5IDAgMTEuMzkgNS4wMiAxMS4zOSAxMS4yMSAwIDYuMTktNS4xIDExLjItMTEuMzkgMTEuMlptMTguMjI4IDUuOC04LjI1OS04LjEzYzIuMTYyLTIuMzUgMy40OTEtNS40NSAzLjQ5MS04Ljg3QzI2LjkyIDUuOTMgMjAuODk0IDAgMTMuNDYgMCA2LjAyNiAwIDAgNS45MyAwIDEzLjI1YzAgNy4zMSA2LjAyNiAxMy4yNCAxMy40NiAxMy4yNGExMy41MiAxMy41MiAwIDAgMCA4LjQ3Mi0yLjk2bDguMjkyIDguMTZjLjQwNS40IDEuMDYuNCAxLjQ2NCAwIC40MDUtLjM5LjQwNS0xLjA0IDAtMS40NFpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcblxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlclNlYXJjaCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuICB3ZWF0aGVyQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVySW5mbyk7XG59XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVySW5mbyc7XG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyQ2FyZCB9IGZyb20gJy4vZG9tJztcblxuZnVuY3Rpb24gc2VhcmNoRm9ybVN1Ym1pdCgpIHtcbiAgY29uc3QgdXNlclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY2l0eScpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZXJTZWFyY2gudmFsdWU7XG4gIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNyZWF0ZVdlYXRoZXJDYXJkKHJlc3BvbnNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaEZvcm1TdWJtaXQ7XG4iLCIvLyBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgaGl0IHRoZSBBUEkuXG4vLyBZb3XigJlyZSBnb2luZyB0byB3YW50IGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIGEgbG9jYXRpb25cbi8vIGFuZCByZXR1cm4gdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhhdCBsb2NhdGlvbi4gRm9yIG5vdywganVzdCBjb25zb2xlLmxvZygpIHRoZSBpbmZvcm1hdGlvbi5cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1hMWNkNjIzZjk2YzA0Zjk4OWZhODM1MjMyMzA4MTImcT0ke2xvY2F0aW9ufSZkYXlzPTNgLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigod2VhdGhlckRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwKTtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgLSAyMDAwO1xuICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBkYXlEYXRlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgY29uc3Qgd2Vla2RheSA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuICAgICAgY29uc3QgZGF5VGltZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaXNfZGF5ID09PSAxID8gJ3llcycgOiAnbm8nO1xuXG4gICAgICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0RGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGVfZXBvY2ggKiAxMDAwKTtcbiAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZSA9IGAke3RvbW9ycm93Rm9yZWNhc3REYXRlLmdldERhdGUoKX0gJHttb250aHNbdG9tb3Jyb3dGb3JlY2FzdERhdGUuZ2V0TW9udGgoKV19ICR7eWVhcn1gO1xuICAgICAgY29uc3QgdG9tb3Jyb3dEYXkgPSBgJHt3ZWVrZGF5W3RvbW9ycm93Rm9yZWNhc3REYXRlLmdldERheSgpXX1gO1xuXG4gICAgICBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV3IERhdGUod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZV9lcG9jaCAqIDEwMDApO1xuICAgICAgY29uc3QgZGF5QWZ0ZXJUb21vcnJvd0RhdGUgPSBgJHtkYXlBZnRlclRvbW9ycm93LmdldERhdGUoKX0gJHttb250aHNbZGF5QWZ0ZXJUb21vcnJvdy5nZXRNb250aCgpXX0gJHt5ZWFyfWA7XG4gICAgICBjb25zdCBhZnRlclRvbW9ycm93RGF5ID0gYCR7d2Vla2RheVtkYXlBZnRlclRvbW9ycm93LmdldERheSgpXX1gO1xuXG4gICAgICBjb25zdCB3ZWF0aGVySW5mbyA9IHtcbiAgICAgICAgY3VycmVudFdlYXRoZXI6IHtcbiAgICAgICAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgICAgICAgIHRlbXBDOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgIHRlbXBGOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgZmVlbHNMaWtlOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgd2luZEtwaDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmb3JlY2FzdDoge1xuICAgICAgICAgIHRvbW9ycm93OiB7XG4gICAgICAgICAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24sXG4gICAgICAgICAgICBtYXhUZW1wOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgZGF0ZTogdG9tb3Jyb3dEYXRlLFxuICAgICAgICAgICAgZGF5OiB0b21vcnJvd0RheSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRheUFmdGVyVG9tb3Jyb3c6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbixcbiAgICAgICAgICAgIG1heFRlbXA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBkYXRlOiBkYXlBZnRlclRvbW9ycm93RGF0ZSxcbiAgICAgICAgICAgIGRheTogYWZ0ZXJUb21vcnJvd0RheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZWdpb246IHtcbiAgICAgICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgbG9jYWxEYXRlOiBgJHtkYXlEYXRlfSAke21vbnRoc1ttb250aF19ICR7eWVhcn1gLFxuICAgICAgICAgIGxvY2FsRGF5OiBgJHt3ZWVrZGF5W2RheV19YCxcbiAgICAgICAgICBpc0RheTogZGF5VGltZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB3ZWF0aGVySW5mbztcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7IHRocm93IGVycjsgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2VhcmNoRm9ybVN1Ym1pdCBmcm9tICcuL2V2ZW50SGFuZGxpbmcnO1xuaW1wb3J0IHsgY3JlYXRlSW5pdGlhbFBhZ2UgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVySW5mbyc7XG5cbmNvbnN0IGRlZmF1bHRMb2NhdGlvbiA9ICdMb25kb24nO1xuZ2V0V2VhdGhlckRhdGEoZGVmYXVsdExvY2F0aW9uKS50aGVuKCh3ZWF0aGVySW5mbykgPT4ge1xuICBjcmVhdGVJbml0aWFsUGFnZSh3ZWF0aGVySW5mbyk7XG59KS50aGVuKCgpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoRm9ybVN1Ym1pdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==