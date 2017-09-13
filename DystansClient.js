import fetch from 'isomorphic-fetch';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log('Error communicating with dystans.org');
        console.error(error);
        throw error;
    }
}

function parseJson(response) {
    return response.json();
}

function parseDistance(data) {
    return {
        distance: data.distance,
    }
}

const DYSTANS_BASE_URI = "http://www.dystans.org";

const DystansClient = {

    _get(url) {
        return fetch(url, {
            method: 'get'
        }).then(checkStatus)
            .then(parseJson)
    },

    getDistance(firstLocation, secoundLocation) {
        return this._get(
            DYSTANS_BASE_URI + "/route.json?stops=" + firstLocation + "|" + secoundLocation
        ).then((data) => parseDistance(data));
    }
};

export default DystansClient;