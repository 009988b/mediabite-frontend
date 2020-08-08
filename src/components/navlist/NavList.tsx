import React from 'react';
import logo from './images/logo-inverted.png';
import {Button, AppBar, Toolbar, Box, useScrollTrigger, Slide, ButtonGroup} from '@material-ui/core';
import './NavList.css';

function HideOnScroll(props: any) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
}


export default function NavList(props: any) {
    return (
        <div id="nav">
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar id="tb" variant="regular">
                        <img src={logo} alt=""></img>
                        <Box m={1} />
                        <ButtonGroup size="large" variant="contained" id="btn-group">
                            <Button id="home-btn" href="/home">Home</Button>
                            <Button id="contact-btn" href="/contact">Pricing</Button>
                            <Button id="gallery-btn" href="/gallery">Gallery</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
}