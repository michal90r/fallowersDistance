import Client from '../Client'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';

function fetchUsersRequest() {
    return {type: FETCH_USERS_REQUEST};
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    };
}

export function fetchUsers(username) {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        Client.getTenTheFarthestFollowers(username).then((users) => {
            dispatch(fetchUsersSuccess(users))
        })
    }
}