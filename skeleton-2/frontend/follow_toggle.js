
function FollowToggle(el) {
    this.userId = el.dataset.userId;
    this.followState = el.dataset.followState;
    this.jqueryEl = $(el);
}


// module.exports = FollowToggle;
export default FollowToggle;