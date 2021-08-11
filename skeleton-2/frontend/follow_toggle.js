import APIUtil  from "./follow_api_util";

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
            APIUtil.unfollowUser(this.userId).then(success);
        } else {
            APIUtil.followUser(this.userId).then(success);
        }
        // console.log("clicked!")
    });
}

FollowToggle.prototype.toggleState = function() {
    this.followState = !this.followState;
    this.jqueryEl.attr("data-initial-follow-state", this.followState);
}

// module.exports = FollowToggle;
export default FollowToggle;