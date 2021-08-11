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