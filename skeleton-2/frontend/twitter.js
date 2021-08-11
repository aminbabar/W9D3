
import FollowToggle from "./follow_toggle";
import UsersSearch from "./users_search";

$( () => {
    const $buttons = $(".follow-toggle");
    // const followToggleInstances = [];
    $buttons.each ( (i, el) => {
        new FollowToggle(el);
    })


    const $usersSearch = $(".users-search")
    $usersSearch.each ((i, el) => {
        new UsersSearch(el);
    }); 
    // for (let i = 0; i < $buttons.length; i++) {
    //     // followToggleInstances.push(new FollowToggle($buttons[i]));
    //     new FollowToggle($buttons[i]);
    // }


    // debugger
} )
