import GithubClient from './GithubClient'
import DystansClient from './DystansClient'


const Followers = {

    _getUserFollowers(username) {
        return GithubClient.getUserFollowers(username)
    },

    _getUser(username) {
        return GithubClient.getUser(username)
    },

    _getDistance(firstLocation, secondLocation) {
        return DystansClient.getDistance(firstLocation, secondLocation)
    },

    _getUserLocation(username) {
        return this._getUser(username).then(
            (user) => user.location
        );
    },

    _getFollowersLocation(username) {
        return this._getUserFollowers(username)
            .then((followers) => (
                Promise.all(followers.map((follower) => this._getUser(follower.login)))
            ));
    },

    _calculateFollowersDistance(userLocation, followers) {
        return Promise.all(followers.map((follower) => (
            Promise.all([
                this._getDistance(userLocation, follower.location),
                follower.login
            ]).then(([distance, login]) => ({
                username: login,
                distance: distance
            }))
        )))
    },

    _getFollowersDistance(username) {
        return Promise.all([
            this._getUserLocation(username),
            this._getFollowersLocation(username),
        ]).then(([userLocation, followers]) => (
            this._calculateFollowersDistance(userLocation, followers)
        ))
    },

    getTenTheFarthest(username) {
        return this._getFollowersDistance(username)
            .then((followers) => followers.sort((a, b) => (
                b.distance - a.distance
            ))).then((result) => result.slice(0, 10))
    }
};

export default Followers;