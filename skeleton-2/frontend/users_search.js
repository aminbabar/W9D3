import APISearchUtil from "./search_users_util";



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
    APISearchUtil.searchUsers(this.input.val()).then(this.onSuccess);
    // console.log(this.input.val());
    // })
}

UsersSearch.prototype.onSuccess = function() {
    debugger;
}

export default UsersSearch;