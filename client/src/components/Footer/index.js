import React from 'react';

function Footer() {
    return (
        <div>
            <div>  
                <div>
                    <h5 className="footTitle">Our Company</h5>
                    <ul>
                        <li>About Wayo</li>
                        <li>Careers</li>
                        <li>Legal</li>
                        <li>Privacy & Cookies</li>
                        <li>Corporate Info</li>
                    </ul>
                </div>
                <div>
                    <h5 className="footTitle">Find Us On</h5>
                    <ul>
                        <li>Github</li>
                        <li>Discord</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div>
                    <h5 className="footTitle">Sign up for Wayo Updates</h5>
                    <p>By entering your email address below, you consent to receiving our 
                        newsletter with access to our latest collections, events and initiatives. 
                        More details on this are provided in our Privacy Policy
                    </p>
                    <form>
                        <input
                            className='nes-input'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                        />
                        <button className='nes-btn is-primary' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <h6>© 2021 Wayo Clothing Brand LLC. All rights reserved.</h6>
            </div>
        </div> 
    );
};

export default Footer;