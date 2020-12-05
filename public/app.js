/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Article.js":
/*!***********************************!*\
  !*** ./src/components/Article.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _lib_moment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/moment.js */ \"./src/lib/moment.js\");\n/* harmony import */ var _lib_El_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/El.js */ \"./src/lib/El.js\");\n/**\n * This is the Article component, this will not put anything into\n * the DOM. It will just return a DOM element which we'll then use in the Articles component.\n */\n\n\n\n\nconst Article = (title, body, author, date, image) => {\n  const articleImage = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article__image\")\n    .append(new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"img\").src(image).build())\n    .build();\n\n  const articleTitle = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article__title\")\n    .text(title)\n    .build();\n\n  const articleInfo = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article__info\")\n    .text(`${author} . ${_lib_moment_js__WEBPACK_IMPORTED_MODULE_0__.default.timeSince(new Date(date))}`)\n    .build();\n\n  const articleBody = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article__body\")\n    .text(body)\n    .build();\n\n  const articleContent = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article__content\")\n    .append(articleTitle)\n    .append(articleInfo)\n    .append(articleBody)\n    .build();\n\n  return new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n    .className(\"article\")\n    .append(articleImage)\n    .append(articleContent)\n    .build();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);\n\n\n//# sourceURL=webpack://client/./src/components/Article.js?");

/***/ }),

/***/ "./src/components/Articles.js":
/*!************************************!*\
  !*** ./src/components/Articles.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Articles\n/* harmony export */ });\n/* harmony import */ var _Article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.js */ \"./src/components/Article.js\");\n/* harmony import */ var _lib_El_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/El.js */ \"./src/lib/El.js\");\n/**\n * This is the Articles component, when we initialize and call the render\n * function on it, it will put this html into the DOM :\n *\n *  <div class=\"article\">\n *   <div class=\"article__image\"><img src=\"https://picsum.photos/192/120?random=1\"></div>\n *   <div class=\"article__content\">\n *     <div class=\"article__title\">This is some text here and here and more and more</div>\n *     <div class=\"article__info\">John Doe . 4 days ago</div>\n *     <div class=\"article__body\">Some text here and more and more and more...</div>\n *   </div>\n *  </div>\n *\n */\n\n\n\n\nclass Articles {\n  constructor(articles) {\n    // The articles data\n    this.articles = articles;\n  }\n\n  render() {\n    // Create a parent div which we'll then put what we need on it\n    // and finally put it into the DOM.\n    const div = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\").build();\n    this.articles.forEach((obj) => {\n      // Create a new article element.\n      const article = (0,_Article_js__WEBPACK_IMPORTED_MODULE_0__.default)(\n        obj.title,\n        obj.body,\n        obj.author,\n        obj.date,\n        obj.image\n      );\n\n      div.appendChild(article);\n    });\n\n    // Because the Articles component will be the first child element\n    // of the root div element, we first check to see if we have it or not.\n    if (document.querySelector(\"#root\").children[0]) {\n      // Add our div element after our already existed component.\n      document\n        .querySelector(\"#root\")\n        .children[0].parentNode.insertBefore(\n          div,\n          document.querySelector(\"#root\").children[0].nextSibling\n        );\n      // Then remove the old component from the DOM.\n      document.querySelector(\"#root\").children[0].remove();\n    } else {\n      // If this component hasn't already been rendered, just put it to the DOM.\n      document.querySelector(\"#root\").appendChild(div);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://client/./src/components/Articles.js?");

/***/ }),

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Articles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.js */ \"./src/components/Articles.js\");\n/* harmony import */ var _lib_El_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/El.js */ \"./src/lib/El.js\");\n/* harmony import */ var _lib_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/request.js */ \"./src/lib/request.js\");\n/**\n * This is the Pagination component, when we initialize and call the render\n * function on it, it will put this html into the DOM:\n *\n *  <div class=\"pagination\">\n *     <div class=\"pagination__buttons\">\n *      <button class=\"pagination__prev pagination__button--disabled\"><img src=\"./prev-icon.svg\" /></button>\n *      <button class=\"pagination__page pagination__page--selected\">1</a>\n *      <button class=\"pagination__page\">2</a>\n *      <button class=\"pagination__page\">3</a>\n *       .\n *       .\n *       .\n *      <button class=\"pagination__next\"><img src=\"./next-icon.svg\" /></button>\n *    </div>\n *    <span class=\"pagination__info\">1 - 12 of 413 articles</span>\n *  </div>\n *\n */\n\n\n\n\n\nclass Pagination {\n  constructor(data) {\n    // Our pagination data\n    this.data = data;\n  }\n\n  // Sends a request to server to grab the new pagination and articles\n  // data and then re-renders the components\n  async fetchAndRender(page) {\n    // Scroll smoothly to the top\n    window.scroll({\n      top: 0,\n      behavior: \"smooth\",\n    });\n\n    const { articlesData, paginationData } = await _lib_request_js__WEBPACK_IMPORTED_MODULE_2__.default.get(\n      `/api/articles?page=${page}`\n    );\n\n    // Re-render the pagination and the articles\n    new _Articles_js__WEBPACK_IMPORTED_MODULE_0__.default(articlesData).render();\n    new Pagination(paginationData).render();\n  }\n\n  // This will populate and return our pagination pages\n  renderPaginationPages() {\n    const div = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\").className(\"pagination__pages\").build();\n    for (let i = 1; i <= this.data.totalPages; i++) {\n      div.appendChild(\n        new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"button\")\n          .className(\n            `pagination__page ${\n              this.data.currentPage === i ? \"pagination__page--selected\" : \"\"\n            }`\n          )\n          .text(i)\n          .disabled(this.data.currentPage === i)\n          .onClick(async (e) => {\n            e.preventDefault();\n            // We don't want anything to happen when we click on the page button\n            // that represents the page number that we are currently on\n            if (this.data.currentPage === i) return;\n            this.fetchAndRender(i);\n          })\n          .build()\n      );\n    }\n    return div;\n  }\n\n  render() {\n    // The previous button\n    const paginationPrev = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"button\")\n      .className(\n        `pagination__prev ${\n          this.data.currentPage === 1 ? \"pagination__button--disabled\" : \"\"\n        }`\n      )\n      .disabled(this.data.currentPage === 1)\n      .onClick(async (e) => {\n        e.preventDefault();\n        if (this.data.currentPage === 1) return;\n        this.fetchAndRender(this.data.currentPage - 1);\n      })\n      .append(new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"img\").src(\"./prev-icon.svg\").build())\n      .build();\n\n    // The next button\n    const paginationNext = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"button\")\n      .className(\n        `pagination__next ${\n          this.data.totalPages === this.data.currentPage\n            ? \"pagination__button--disabled\"\n            : \"\"\n        }`\n      )\n      .disabled(this.data.totalPages === this.data.currentPage)\n      .onClick(async (e) => {\n        e.preventDefault();\n        if (this.data.totalPages === this.data.currentPage) return;\n        this.fetchAndRender(this.data.currentPage + 1);\n      })\n      .append(new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"img\").src(\"./next-icon.svg\").build())\n      .build();\n\n    // The pagination info text\n    const paginationInfo = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"span\")\n      .className(\"pagination__info\")\n      .text(\n        `${this.data.showingFrom} - ${this.data.showingUntil} of ${this.data.totalResults} articles`\n      )\n      .build();\n\n    // All pagination buttons\n    const paginationButtons = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n      .className(\"pagination__buttons\")\n      .append(paginationPrev)\n      .append(this.renderPaginationPages())\n      .append(paginationNext)\n      .build();\n\n    // The final pagination element\n    const div = new _lib_El_js__WEBPACK_IMPORTED_MODULE_1__.default(\"div\")\n      .className(\"pagination\")\n      .append(paginationButtons)\n      .append(paginationInfo)\n      .build();\n\n    // Finally put the div element we created into the DOM\n    if (document.querySelector(\"#root\").children[1])\n      document.querySelector(\"#root\").children[1].remove();\n    document.querySelector(\"#root\").appendChild(div);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\n\n\n//# sourceURL=webpack://client/./src/components/Pagination.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Articles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Articles.js */ \"./src/components/Articles.js\");\n/* harmony import */ var _components_Pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Pagination.js */ \"./src/components/Pagination.js\");\n/* harmony import */ var _lib_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/request.js */ \"./src/lib/request.js\");\n\n\n\n\nclass App {\n  constructor() {\n    // Our pagination data\n    this.pagination = null;\n    // Our articles data\n    this.articles = null;\n  }\n\n  // Fetch the articles from the server\n  async fetch(cb) {\n    const { articlesData, paginationData } = await _lib_request_js__WEBPACK_IMPORTED_MODULE_2__.default.get(\n      \"/api/articles?page=1\"\n    );\n\n    this.articles = articlesData;\n    this.pagination = paginationData;\n\n    cb();\n  }\n\n  /**\n   * Maybe I should name this function something else because the render function\n   * on our other classes will put something into the DOM. But his function will just\n   * initialize and call the render function on the other classes.\n   */\n  render() {\n    this.fetch(() => {\n      /**\n       * Notice that the order here doesn't matter, if we want it work like React,\n       * we have to set up a virtual DOM and then have another object which it's purpose\n       * will be to get the virtual DOM and then put that into the DOM (ReactDOM job is actually just that).\n       * Virtual DOM is just any representation of the DOM elements, for that we can use JSX to\n       * make our job easier and actually doing that is way easier than what you might think!\n       */\n      new _components_Articles_js__WEBPACK_IMPORTED_MODULE_0__.default(this.articles).render();\n      new _components_Pagination_js__WEBPACK_IMPORTED_MODULE_1__.default(this.pagination).render();\n    });\n  }\n}\n\nnew App().render();\n\n\n//# sourceURL=webpack://client/./src/index.js?");

/***/ }),

/***/ "./src/lib/El.js":
/*!***********************!*\
  !*** ./src/lib/El.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ El\n/* harmony export */ });\n/**\n * This class is responsible for creating DOM elements.\n *\n * The El object has been formed into a class just to make it easier\n * to maintain and read the code. You can remove the class syntax and convert\n * it to es5 if you want but it will be more verbose. You can do that like this:\n *  First create the constructor function like so:\n *  function EL(elName) { this.el = document.createElement(elName); }\n *  Remember that a constructor function is just a function, nothing more.\n *  We just call it a constructor function and make the function name capitalized\n *  by convention because we need to call it later with the 'new' operator like this:\n *  new El('whatever').whatever()...;\n *  The new operator here will first create an empty object and then it will attach the\n *  function to that object so that the 'this' keyword will point to the right object and\n *  therefore we can do something like this: this.el = ...\n *  Without the new operator the 'this' keyword will NOT WORK AS WE WANT IT TO BE.\n *  Once the constructor function has been created we now need to add our methods on it like so:\n *  El.prototype.className = function (className) {\n *    this.el.setAttribute(\"class\", className);\n *    return this;\n *  }\n *  Notice that we add the methods on the prototype of the object and not on the object.\n *  We do that because of the efficiency reasons. When we create a new function it will\n *  occupy a memory space, so whenever we are creating a new object we are creating each methods\n *  again for EACH one of those objects. But when we add the methods to the prototype, each El object\n *  can then reference those methods on the memory instead of having them on itself.\n *  Alright, after we added the methods on the prototype we just use the El function like before.\n *\n * -----\n * This design pattern that you see here is called the builder patter.\n */\n\nclass El {\n  constructor(elName) {\n    this.el = document.createElement(elName);\n  }\n\n  // Will set the class of the element\n  className(className) {\n    this.el.setAttribute(\"class\", className);\n    return this;\n  }\n\n  // Set the text of an element\n  text(text) {\n    this.el.appendChild(document.createTextNode(text));\n    return this;\n  }\n\n  // Set the src attribute of an element\n  src(src) {\n    this.el.setAttribute(\"src\", src);\n    return this;\n  }\n\n  // Sets the disabled attribute of an element to false or true\n  disabled(boolean) {\n    if (boolean === true) {\n      this.el.disabled = true;\n    } else this.el.disabled = false;\n\n    return this;\n  }\n\n  // Adds an onclick event listener on an element\n  onClick(func) {\n    this.el.addEventListener(\"click\", func);\n    return this;\n  }\n\n  // Append a DOM element to the element. We might call this function multiple times\n  // to append different elements to the element.\n  append(element) {\n    this.el.appendChild(element);\n    return this;\n  }\n\n  // At the end once we configured the element we call this which will\n  // return the final DOM element\n  build() {\n    return this.el;\n  }\n}\n\n\n//# sourceURL=webpack://client/./src/lib/El.js?");

/***/ }),

/***/ "./src/lib/moment.js":
/*!***************************!*\
  !*** ./src/lib/moment.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n * The object that we'll use to work with Date objects.\n *\n * The Moment object has been formed into a class just to make it easier\n * to read the code. You could just as easily remove the class syntax and instead\n * just create a Moment object and add the methods to it afterwards like so:\n * const Moment = {};\n * Moment.timeSince = (date) => {...}\n * And then just export the object:\n * export default Moment;\n *\n * As of now this Moment object has only one method called 'timeSince' which is\n * responsible for calculating how old a date object is.\n *\n * ---\n * If you have used the date libraries like 'moment.js' you might notice\n * that this object works in a similar way.\n */\n\nclass Moment {\n  /**\n   * Calculates how old a Date object is.\n   * @param {Date} date the object that we need to find out how old it is.\n   * @returns {string} will say since when the date object is for, if it reaches\n   * years it will say 'X years ago', if it doesn't reach years but months it'll say\n   * 'X months ago', similarly 'X days ago', 'X hours ago', or 'Just now'.\n   */\n  timeSince(date) {\n    // First find out how old is the object and then divide that\n    // by 1000 milliseconds to get the total seconds\n    const seconds = Math.floor((new Date() - date) / 1000);\n\n    // 31536000 second is 1 year.\n    let interval = Math.floor(seconds / 31536000);\n    if (interval > 1) return interval + \" years ago\";\n\n    // 2592000 second is 1 month.\n    interval = Math.floor(seconds / 2592000);\n    if (interval > 1) return interval + \" months ago\";\n\n    // 86400 second is 1 day.\n    interval = Math.floor(seconds / 86400);\n    if (interval > 1) return interval + \" days ago\";\n\n    // 3600 second is 1 hour.\n    interval = Math.floor(seconds / 3600);\n    if (interval > 1) return interval + \" hours ago\";\n\n    // 60 second is 1 minute.\n    interval = Math.floor(seconds / 60);\n    if (interval > 1) return interval + \" minutes ago\";\n\n    // If the difference is less than two minutes just return 'Just now'.\n    return \"Just now\";\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Moment());\n\n\n//# sourceURL=webpack://client/./src/lib/moment.js?");

/***/ }),

/***/ "./src/lib/request.js":
/*!****************************!*\
  !*** ./src/lib/request.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n * The object that we'll use for our requests.\n *\n * The Request object has been formed into a class just to make it easier\n * to read the code. You could just as easily remove the class syntax and instead\n * just create a Request object and add the methods to it afterwards like so:\n * const Request = {};\n * Request.get = (url) => {...}\n * And then just export the object:\n * export default Request;\n *\n * As of now this Request object has only one method called 'get' which is\n * responsible for sending get requests.\n *\n * ---\n * If you have used http request packages like axios, you might notice\n * that this object works in a similar way.\n *\n * @TODO If you want to use this object in your projects make sure\n * to add other methods needed for it like the POST, PATCH, DELETE... requests.\n * Those will be very similar to the get function that we have right now but you also\n * need to pass an object for them along with the url parameter to send.\n */\n\nclass Request {\n  /**\n   * Sends a get request\n   * @param {string} url what the request will be sent to.\n   * @returns {promise} will be resolved with the responseText property that\n   * we'll have after the xml ajax request has been successful.\n   */\n  get(url) {\n    return new Promise((resolve, reject) => {\n      try {\n        const xmlHttp = new XMLHttpRequest();\n        xmlHttp.open(\"GET\", url, false); // false means to send the request synchronously\n        xmlHttp.send(null);\n\n        resolve(JSON.parse(xmlHttp.responseText));\n      } catch (e) {\n        reject(e);\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Request());\n\n\n//# sourceURL=webpack://client/./src/lib/request.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;