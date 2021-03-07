module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/articles/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articles\", function() { return articles; });\nconst articles = [{\n  id: '1',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  excerpt: 'GitHub today announced a bunch of new features at its virtual GitHub...',\n  body: 'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?'\n}, {\n  id: '2',\n  title: 'What’s multi-cloud? And why should developers care?',\n  excerpt: 'Most developers don’t care about multi-cloud. But they should...',\n  body: 'Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers'\n}, {\n  id: '3',\n  title: 'Here is how to make your website more accessible',\n  excerpt: 'An accessible website is one that’s optimized for all people, including those with disabilities...',\n  body: 'There are many things to consider when setting up a website, and accessibility is one factor that can sometimes be overlooked. An accessible website is one that’s optimized for all people, including those with impaired vision or hearing, motor difficulties, or learning disabilities'\n}, {\n  id: '4',\n  title: 'Why open ecosystems are the future of app development',\n  excerpt: 'When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...',\n  body: 'We can’t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzPzg4NWEiXSwibmFtZXMiOlsiYXJ0aWNsZXMiLCJpZCIsInRpdGxlIiwiZXhjZXJwdCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHlEQUZUO0FBR0VDLFNBQU8sRUFDTCx5RUFKSjtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURzQixFQVN0QjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUscURBRlQ7QUFHRUMsU0FBTyxFQUFFLGtFQUhYO0FBSUVDLE1BQUksRUFDRjtBQUxKLENBVHNCLEVBZ0J0QjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUsa0RBRlQ7QUFHRUMsU0FBTyxFQUNMLG9HQUpKO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBaEJzQixFQXdCdEI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHVEQUZUO0FBR0VDLFNBQU8sRUFDTCw0R0FKSjtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQXhCc0IsQ0FBakIiLCJmaWxlIjoiLi9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW1xuICB7XG4gICAgaWQ6ICcxJyxcbiAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgIGV4Y2VycHQ6XG4gICAgICAnR2l0SHViIHRvZGF5IGFubm91bmNlZCBhIGJ1bmNoIG9mIG5ldyBmZWF0dXJlcyBhdCBpdHMgdmlydHVhbCBHaXRIdWIuLi4nLFxuICAgIGJvZHk6XG4gICAgICAnR2l0SHViIHRvZGF5IGFubm91bmNlZCBhIGJ1bmNoIG9mIG5ldyBmZWF0dXJlcyBhdCBpdHMgdmlydHVhbCBHaXRIdWIgVW5pdmVyc2UgY29uZmVyZW5jZSBpbmNsdWRpbmcgZGFyayBtb2RlLCBhdXRvLW1lcmdlIHB1bGwgcmVxdWVzdHMsIGFuZCBFbnRlcnByaXNlIFNlcnZlciAzLjAuIEluIHRoZSBwYXN0IGNvdXBsZSBvZiB5ZWFycywgYWxtb3N0IGFsbCBtYWpvciBhcHBzIGhhdmUgcm9sbGVkIG91dCBhIGRhcmsgdGhlbWUgZm9yIGl0cyB1c2Vycywgc28gd2h5IG5vdCBHaXRIdWI/JyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMicsXG4gICAgdGl0bGU6ICdXaGF04oCZcyBtdWx0aS1jbG91ZD8gQW5kIHdoeSBzaG91bGQgZGV2ZWxvcGVycyBjYXJlPycsXG4gICAgZXhjZXJwdDogJ01vc3QgZGV2ZWxvcGVycyBkb27igJl0IGNhcmUgYWJvdXQgbXVsdGktY2xvdWQuIEJ1dCB0aGV5IHNob3VsZC4uLicsXG4gICAgYm9keTpcbiAgICAgICdNb3N0IGRldmVsb3BlcnMgZG9u4oCZdCBjYXJlIGFib3V0IG11bHRpLWNsb3VkLiBCdXQgdGhleSBzaG91bGQuIFdoZXRoZXIgZGV2ZWxvcGVycyBrbm93IGl0IG9yIG5vdCwgdGhlaXIgY29tcGFuaWVzIGxpa2VseSBhbHJlYWR5IGhhdmUgYSBtdWx0aS1jbG91ZCBlbnZpcm9ubWVudC4gICAgTXVsdGktY2xvdWQgaXMgYSBzdHJhdGVneSB3aGVyZSBhIGJ1c2luZXNzIHNlbGVjdHMgZGlmZmVyZW50IHNlcnZpY2VzIGZyb20gZGlmZmVyZW50IGNsb3VkIHByb3ZpZGVycycsXG4gIH0sXG4gIHtcbiAgICBpZDogJzMnLFxuICAgIHRpdGxlOiAnSGVyZSBpcyBob3cgdG8gbWFrZSB5b3VyIHdlYnNpdGUgbW9yZSBhY2Nlc3NpYmxlJyxcbiAgICBleGNlcnB0OlxuICAgICAgJ0FuIGFjY2Vzc2libGUgd2Vic2l0ZSBpcyBvbmUgdGhhdOKAmXMgb3B0aW1pemVkIGZvciBhbGwgcGVvcGxlLCBpbmNsdWRpbmcgdGhvc2Ugd2l0aCBkaXNhYmlsaXRpZXMuLi4nLFxuICAgIGJvZHk6XG4gICAgICAnVGhlcmUgYXJlIG1hbnkgdGhpbmdzIHRvIGNvbnNpZGVyIHdoZW4gc2V0dGluZyB1cCBhIHdlYnNpdGUsIGFuZCBhY2Nlc3NpYmlsaXR5IGlzIG9uZSBmYWN0b3IgdGhhdCBjYW4gc29tZXRpbWVzIGJlIG92ZXJsb29rZWQuIEFuIGFjY2Vzc2libGUgd2Vic2l0ZSBpcyBvbmUgdGhhdOKAmXMgb3B0aW1pemVkIGZvciBhbGwgcGVvcGxlLCBpbmNsdWRpbmcgdGhvc2Ugd2l0aCBpbXBhaXJlZCB2aXNpb24gb3IgaGVhcmluZywgbW90b3IgZGlmZmljdWx0aWVzLCBvciBsZWFybmluZyBkaXNhYmlsaXRpZXMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICc0JyxcbiAgICB0aXRsZTogJ1doeSBvcGVuIGVjb3N5c3RlbXMgYXJlIHRoZSBmdXR1cmUgb2YgYXBwIGRldmVsb3BtZW50JyxcbiAgICBleGNlcnB0OlxuICAgICAgJ1doZW4gYXBwIHN0b3JlcyBlbnRlcmVkIHRoZSBtYWluc3RyZWFtIHRlY2ggY3VsdHVyZSwgdGhleSBleHBvc2VkIGRldmVsb3BlcnMgdG8gYW4gYXVkaWVuY2Ugb2YgbWlsbGlvbnMuLi4nLFxuICAgIGJvZHk6XG4gICAgICAnV2UgY2Fu4oCZdCBnZXQgZW5vdWdoIG9mIG91ciBtb2JpbGUgYXBwcy4gVGhlcmUgd2VyZSAyMDQgYmlsbGlvbiBhcHBzIGRvd25sb2FkcyBsYXN0IHllYXIsIGFuZCB0aGF0IG51bWJlciBpcyByaXNpbmcgaW4gMjAyMC4gIFdoZW4gYXBwIHN0b3JlcyBlbnRlcmVkIHRoZSBtYWluc3RyZWFtIHRlY2ggY3VsdHVyZSwgdGhleSBleHBvc2VkIGRldmVsb3BlcnMgdG8gYW4gYXVkaWVuY2Ugb2YgbWlsbGlvbnMgd2hvIHdlcmUga2VlbiB0byBhZG9wdCB0aGUgaW5ub3ZhdGl2ZSBjYXBhYmlsaXRpZXMnLFxuICB9LFxuXSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/api/articles/index.js":
/*!*************************************!*\
  !*** ./pages/api/articles/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data.js */ \"./data.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"articles\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXJ0aWNsZXMvaW5kZXguanM/ZGNkMCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImFydGljbGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN6Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLGlEQUFyQjtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FydGljbGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcnRpY2xlc30gZnJvbSAnLi4vLi4vLi4vZGF0YS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbihhcnRpY2xlcylcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/articles/index.js\n");

/***/ })

/******/ });