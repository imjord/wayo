import React from 'react';
import Placeholder from '../../assets/PlaceholderImg.jpg';
import './Landing.css';

function Landing() {
    return (
        <div>
            <div>
                <img src={Placeholder} alt="Friends hanging out" className="first" >
                </img>
            </div>
            <div>
                <img src={Placeholder} alt="Friends hanging out" >
                </img>
                <img src={Placeholder} alt="Friends hanging out" >
                </img>
            </div>
        </div>
    )
}

export default Landing;