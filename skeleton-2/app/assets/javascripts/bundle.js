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

    this.toggleState = this.toggleState.bind(this)
    this.render = this.render.bind(this)
    this.render();
    this.handleClick();
    // .then(this.toggleState).then(this.render);
}

FollowToggle.prototype.render = function() {
    if (this.followState) {
        this.jqueryEl.text("Unfollow!");
    } else {
        this.jqueryEl.text("Follow!");
    }
}

FollowToggle.prototype.handleClick = function () {
 
    
    return this.jqueryEl.click( (e) => {
        this.jqueryEl.prop("disabled", true);
        e.preventDefault();
        const success = function () {
            this.toggleState();
            this.render();
            this.jqueryEl.prop("disabled", false);
        }.bind(this);
        if (this.followState) {
            this.jqueryEl.text("Unfollowing")
            _follow_api_util__WEBPACK_IMPORTED_MODULE_0___default().unfollowUser(this.userId).then(success);
        } else {
            this.jqueryEl.text("Following")  
            _follow_api_util__WEBPACK_IMPORTED_MODULE_0___default().followUser(this.userId).then(success);
        }
    });
}

FollowToggle.prototype.toggleState = function() {
    this.followState = !this.followState;
    this.jqueryEl.attr("data-initial-follow-state", this.followState);
}

// module.exports = FollowToggle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowToggle);

/***/ }),

/***/ "./frontend/search_users_util.js":
/*!***************************************!*\
  !*** ./frontend/search_users_util.js ***!
  \***************************************/
/***/ ((module) => {

const APISearchUtil = {
    searchUsers: queryVal => {
        return $.ajax({
            method: "GET",
            url: `/users/search`,
            dataType: "JSON"
        });
    }
};

module.exports = APISearchUtil;

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_users_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_users_util */ "./frontend/search_users_util.js");
/* harmony import */ var _search_users_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_users_util__WEBPACK_IMPORTED_MODULE_0__);




function UsersSearch(el) {
    this.jqueryEl = $(el);
    this.input = this.jqueryEl.children("input")
    this.ul = this.jqueryEl.children("ul");
    // debugger;
    this.onSuccess = this.onSuccess.
    this.input.on("input", this.handleInput.bind(this))
    this.handleInput();

}


UsersSearch.prototype.handleInput = function() {
    let that = this;
    // debugger
    // this.input.on("input", ()=> {
    _search_users_util__WEBPACK_IMPORTED_MODULE_0___default().searchUsers(this.input.val()).then(this.onSuccess);
    // console.log(this.input.val());
    // })
}

UsersSearch.prototype.onSuccess = function() {
    debugger;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersSearch);

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
/* harmony import */ var _users_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js");




$( () => {
    const $buttons = $(".follow-toggle");
    // const followToggleInstances = [];
    $buttons.each ( (i, el) => {
        new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__.default(el);
    })


    const $usersSearch = $(".users-search")
    $usersSearch.each ((i, el) => {
        new _users_search__WEBPACK_IMPORTED_MODULE_1__.default(el);
    }); 
    // for (let i = 0; i < $buttons.length; i++) {
    //     // followToggleInstances.push(new FollowToggle($buttons[i]));
    //     new FollowToggle($buttons[i]);
    // }


    // debugger
} )

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map