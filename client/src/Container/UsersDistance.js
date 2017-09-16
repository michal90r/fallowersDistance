import React from 'react';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

import {Followers} from '../View/Followers'

function reducer(state = [
    {
        username: "aigeano",
        distance: 11963
    },
    {
        username: "monica017",
        distance: 9189
    },
    {
        username: "fxrcode",
        distance: 3609
    },
    {
        username: "stuartpb",
        distance: 193
    },
    {
        username: "jb55",
        distance: 2
    },
    {
        username: "kbwatts",
        distance: 2
    }
], action) {
    switch (action.type) {
        case 'SEARCH_USER': {
            // eslint-disable-next-line
            const searchUser = {
                username: action.username,
            };
            return //:TODO
        }
        default: {
            return state
        }
    }
}

function searchUser(username) {
    return {
        type: 'SEARCH_USER',
        username: username,
    };
}



const store = createStore(reducer);

const mapStateToFollowersProps = (state) => {
    return {
        usersDistance : state
    };
};

const mapDispatchToFollowersProps = (dispatch) => (
    {
        onFormSubmit: (e) => (
            dispatch(searchUser(e.username))
        )
    }
);

const UsersDistance = connect(
    mapStateToFollowersProps,
    mapDispatchToFollowersProps
)(Followers);


const WrappedUserDistance = () => (
    <Provider store={store}>
        <UsersDistance/>
    </Provider>
);

export default WrappedUserDistance;