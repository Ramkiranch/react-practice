import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hey {props.name}! How are you doing?</p>
            <p>I am doing great man! Let's chill today.</p>
        </div>
    )
}

export default UserOutput;