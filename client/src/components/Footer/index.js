import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core'


import "./Footer.css";

const useStyles = makeStyles((theme) => 
    createStyles({
        gridContainer: {
            margin: 'auto'
        },

        gridEl: {
            justifyContent: 'left'
        }

    })
);



function Footer() {
    const classes = useStyles();
    return (
        <div className="footerBg">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                className={classes.gridContainer}
            >  
                <Grid
                    container
                    direction="column"
                    item xs={6} sm={6} md={4} lg={6} xl={6}
                    className={classes.gridEl}
                >
                    <h5 className="footTitle">Our Company</h5>
                    <ul className="footList">
                        <a href="About" target="_blank" rel="noreferrer"><li>About Wayo</li></a>
                        <a href="Careers" target="_blank" rel="noreferrer"><li>Careers</li></a>
                        <a href="Legal" target="_blank" rel="noreferrer"><li>Legal</li></a>
                        <a href="Privacy" target="_blank" rel="noreferrer"><li>Privacy & Cookies</li></a>
                        <a href="Corporate" target="_blank" rel="noreferrer"><li>Corporate Info</li></a>
                    </ul>
                </Grid>
                <Grid
                    container
                    direction="column"
                    item xs={6} sm={6} md={6} lg={6} xl={6}
                >
                    <h5 className="footTitle">Find Us On</h5>
                    <ul className="footList">
                        <a href="https://github.com/imjord/wayo-clothing-brand-.01" target="_blank" rel="noreferrer"><li>Github</li></a>
                        <a href="https://discord.com/" target="_blank" rel="noreferrer"><li>Discord</li></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer"><li>Facebook</li></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><li>Twitter</li></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><li>Instagram</li></a>
                        <a href="https://youtube.com/" target="_blank" rel="noreferrer"><li>YouTube</li></a>
                    </ul>
                </Grid>
                <Grid
                    container
                    direction="column"
                >
                    <h5 className="footTitle">Sign up for Wayo Updates</h5>
                    <p className="footPara">By entering your email address below, you consent to receiving our 
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
                </Grid>
            </Grid>
            <div>
                <h6 className="rights">© 2021 Wayo Clothing Brand LLC. All rights reserved.</h6>
            </div>
        </div> 
    );
};

export default Footer;