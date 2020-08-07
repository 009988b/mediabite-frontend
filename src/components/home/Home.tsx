import * as React from 'react';
import {Button, AppBar, Toolbar, Box} from '@material-ui/core';
import logo from './images/logo-inverted2.png';
import panorama from './images/fdsa.jpg';
import NavList from '../navlist/NavList'

export default function Home() {
    return (
        <div>
            <body>
                <NavList />
                <div id="panoContainer">
                    <img id="pano" src={panorama}></img>
                    <div id="panoText">
                        <img src={logo} width="302px" height="214px"></img>
                    </div>
                </div>
                <div id="pitch">
                    <h3>Convert Prospects into Customers</h3>
                    <p>Properties with virtual tours get on average 50-70% more page views compared to still images.</p>
                    <p>Give your viewers the ability to 'walk' around the property from the comfort of their own home.</p>
                    <p>Designed for both desktop and mobile viewing, our virtual tours provide an unparalleled immersive experience.</p>
                    <Button id="consultation" variant="contained" href="contact">Free Consultation</Button>
                </div>
                <h2>Featured Tours</h2>
                <div id="tour1">
                    <div id="embedTourContainer">
                        <iframe id="bra" allow="vr;accelerometer;gyroscope;fullscreen" src="https://tours.mediabite360.com/tours/cMrUioeNfrpp" width="75%" height="600"></iframe>
                    </div>
                    <Button id="newTab" variant="contained" href="https://tours.mediabite360.com/tours/cMrUioeNfrpp">Open in new tab (Recommended for mobile)</Button>
                </div>
                <div id="tour2">
                    <div id="embedTourContainer">
                        <iframe id="bra" allow="vr;accelerometer;gyroscope;fullscreen" src="https://tours.mediabite360.com/tours/z2BowJCjHnoT" width="75%" height="600"></iframe>
                    </div>
                    <Button id="newTab" variant="contained" href="https://tours.mediabite360.com/tours/z2BowJCjHnoT">Open in new tab (Recommended for mobile)</Button>
                </div>
                <div id="tour2">
                    <div id="embedTourContainer">
                        <iframe id="bra" allow="vr;accelerometer;gyroscope;fullscreen" src="https://tours.mediabite360.com/tours/Z-iX2Uv9ZEUo" width="75%" height="600"></iframe>
                    </div>
                    <Button id="newTab" variant="contained" href="https://tours.mediabite360.com/tours/Z-iX2Uv9ZEUo">Open in new tab (Recommended for mobile)</Button>
                </div>
            </body>
            <footer id="footer">   
                <p>Site created by Sean O. <a href="https://github.com/009988b">github</a></p></footer>
        </div>
    );
}