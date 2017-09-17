import fetch from 'isomorphic-fetch';


const Client = {
    getTenTheFarthestFollowers(username) {
        const url = 'api/distance?username=' + username;
        return fetch(url, {
            method: 'get',
            header: {
                accept: 'application/json',
            }
        }).then(this.checkStatus)
            .then(this.parseJson)
    },

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    },

    parseJson(response) {
        return response.json();
    }

};

export default Client