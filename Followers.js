import GithubClient from './GithubClient'


const Followers = {

    _getUserFollowers(username) {
        return GithubClient.getUserFollowers(username)
    },

    _getUser(username) {
        return GithubClient.getUser(username)
    },

    getUserLocation(username) {
        return this._getUser(username).then(
            (user) => user.location
        );
        /*.catch((error) => (
            res.status(500).json({
                success: false,
                message: 'There was an error when interfacing with Github'
                error: error
            })
        ))*/
    },

    followersLocation(username) {
        return this._getUserFollowers(username)
            .then((followers) => (
                Promise.all(followers.map((follower) => this._getUser(follower.login)))
            ));

    }
};

export default Followers;