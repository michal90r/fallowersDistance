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

    getUserLocation(username) {
        return this._getUser(username).then(
            (user) => user.location
        );
    },

    getFollowersLocation(username) {
        return this._getUserFollowers(username)
            .then((followers) => (
                Promise.all(followers.map((follower) => this._getUser(follower.login)))
            ));

    },

    getFollowersDistance(username) {
        return Promise.all([
            this.getUserLocation(username),
            this.getFollowersLocation(username),
        ]).then(([userLocation, followers]) => {
            return Promise.all(followers.map((follower) => {
                    return Promise.all([
                        this._getDistance(userLocation, follower.location),
                        follower.login
                    ]).then(([distance, login]) => (
                        {
                            login: login,
                            distance: distance
                        }
                    ))
                })
            )
        })
    },

    getTenTheFarthest(username) {
        return this.getFollowersDistance(username)
            .then((followers) => followers.sort((a,b) => (
                parseFloat(b.distance) - parseFloat(a.distance)
            ))).then((result) => result.slice(0,10))
    }
};

export default Followers;