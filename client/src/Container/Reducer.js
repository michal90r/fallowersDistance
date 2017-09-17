import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,
} from './Actions';

const initialState = {
    users: [],
    isLoading: false,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                users: action.users,
                isLoading: false
            });
        default: {
            return state
        }
    }
}