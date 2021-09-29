import React from 'react';
import Placeholder from '../../assets/PlaceholderImg.jpg';
import './Landing.css';

function Landing() {
    return (
        <div>
            <div className="landingContainer">
                <img src={Placeholder} alt="Friends hanging out" className="firstImg" >
                </img>
            </div>
            <div className="secondContainer">
                <img src={Placeholder} alt="Friends hanging out" className="secondImg">
                </img>
                <img src={Placeholder} alt="Friends hanging out" className="thirdImg">
                </img>
            </div>
        </div>
    )
}

export default Landing;