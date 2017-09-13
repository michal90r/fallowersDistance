import React from 'react';


import '../App.css';

const List = (props) => (
    <div>
        {
            props.rows.map((row, index) => (
                <div
                    className="row"
                    key={index}
                >
                    <div>
                        <div className="nameCol">{row.username}</div>
                        <div className="distanceCol">{row.distance}</div>
                    </div>
                </div>
            ))
        }
    </div>
);

export default List;