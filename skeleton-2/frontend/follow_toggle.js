import APIUtil  from "./follow_api_util";

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
            APIUtil.unfollowUser(this.userId).then(success);
        } else {
            this.jqueryEl.text("Following")  
            APIUtil.followUser(this.userId).then(success);
        }
    });
}

FollowToggle.prototype.toggleState = function() {
    this.followState = !this.followState;
    this.jqueryEl.attr("data-initial-follow-state", this.followState);
}

// module.exports = FollowToggle;
export default FollowToggle;