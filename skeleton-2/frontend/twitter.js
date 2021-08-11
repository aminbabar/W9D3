
import FollowToggle from "./follow_toggle";

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
        followToggleInstances.push(new FollowToggle($buttons[i]));
    }
    // debugger
} )
