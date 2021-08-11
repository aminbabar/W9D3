/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_api_util.js":
/*!*************************************!*\
  !*** ./frontend/follow_api_util.js ***!
  \*************************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        return $.ajax({
            method: "POST",
            url: `/users/${id}/follow`,
            dataType: "JSON"
        });
    },
  
    unfollowUser: id => {
        return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`,
            dataType: "JSON"
        });
    }
  };
  
module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _follow_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_api_util */ "./frontend/follow_api_util.js");
/* harmony import */ var _follow_api_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_follow_api_util__WEBPACK_IMPORTED_MODULE_0__);


function FollowToggle(el) {
    // debugger
    this.userId = el.dataset.userId;
    this.followState = el.dataset.initialFollowState === "true";
    this.jqueryEl = $(el);
    this.render();
    this.handleClick();
    // .then(this.toggleState).then(this.render);
}

FollowToggle.prototype.render = function() {
    // debugger
    if (this.followState) {
        this.jqueryEl.text("Unfollow!");
    } else {
        this.jqueryEl.text("Follow!");
    }
}

FollowToggle.prototype.handleClick = function () {
    this.toggleState = this.toggleState.bind(this)
    this.render = this.render.bind(this)
    return this.jqueryEl.click( (e) => {
        e.preventDefault();
        const success = function () {
            this.toggleState();
            this.render();
        }.bind(this);
        this.jqueryEl.prop("disabled")
        if (this.followState) {
            _follow_api_util__WEBPACK_IMPORTED_MODULE_0___default().unfollowUser(this.userId).then(success);
        } else {
            _follow_api_util__WEBPACK_IMPORTED_MODULE_0___default().followUser(this.userId).then(success);
        }
        // console.log("clicked!")
    });
}

FollowToggle.prototype.toggleState = function() {
    this.followState = !this.followState;
    this.jqueryEl.attr("data-initial-follow-state", this.followState);
}

// module.exports = FollowToggle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowToggle);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");



$(document).ready( () => {
    const $buttons = $(".follow-toggle");
    const followToggleInstances = [];
    // debugger
    // $buttons.each ( (el) => {
    //     debugger
    //     followToggleInstances.push(new FollowToggle(el));
    // })
    // debugger
    for (let i = 0; i < $buttons.length; i++) {
        followToggleInstances.push(new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__.default($buttons[i]));
    }
    // debugger
} )

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map