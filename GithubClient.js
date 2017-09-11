import fetch from 'isomorphic-fetch';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log('Error communicating with Github:');
        console.error(error);
        throw error;
    }
}

function parseJson(response) {
    return response.json();
}

function parseUser(user) {
    return {
        location: user.location,
        followers: user.followers
    }
}

const GITHUB_BASE_URI = "https://api.github.com";

const GithubClient = {

    _get(url) {
        return fetch(url, {
            method: 'get'
        }).then(checkStatus)
            .then(parseJson)
    },

    getUser(userName) {
        return this._get(
            GITHUB_BASE_URI + "/users/" + userName
        ).then((data) => parseUser(data));
    }
};

export default GithubClient;