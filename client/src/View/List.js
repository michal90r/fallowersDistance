import React from 'react';


import '../App.css';

const List = (props) => (
    <div>
        {
            props.users.map((user, index) => (
                <div
                    className="row"
                    key={index}
                >
                    <div>
                        <div className="nameCol">{user.username}</div>
                        <div className="distanceCol">{user.distance}</div>
                    </div>
                </div>
            ))
        }
    </div>
);

export default List;