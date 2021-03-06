import React from 'react';

import VeniceBeach from '../../assets/venice-beach-skate-park.jpg';
import TeensHangingOut from '../../assets/teenagers-hanging-out.jpg';
import FriendGroup from '../../assets/friend-group.jpg';
import './Landing.css';

function Landing() {
    return (
        <div>
            <div className="landingContainer">
                <img src={VeniceBeach} alt=" at the skatepark" className="firstImg" >
                </img>
            </div>
            <div className="secondContainer">
                <img src={TeensHangingOut} alt=" teens hanging out" className="secondImg">
                </img>
                <img src={FriendGroup} alt="Friends hanging out" className="thirdImg">
                </img>
            </div>
        </div>
    )
}

export default Landing;