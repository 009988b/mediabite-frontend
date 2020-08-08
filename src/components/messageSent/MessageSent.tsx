import React from 'react';
import NavList from '../navlist/NavList';
import logo from '../home/images/logo-inverted2.png';
import bg from '../home/images/seamless-panoramic.jpg';
import { Button } from '@material-ui/core';

export default function MessageSent(props: any) {
    return (
        <body>
                <NavList />
                <div id="bg-container">
                    <img id="bg-img" src={bg} alt=""></img>
                    <div id="bg-txt">
                        <img id="logo-img" src={logo} height="160px"></img>
                    </div>
                </div>
                    <div id="bottom-container">
                        <h2>Thanks for reaching out, {props.name}!</h2>
                        <h3>We'll be responding to your inquiry shortly.</h3>
                        <br />
                        <Button variant="contained" href="/home">Back to home</Button>
                        <br />
                    </div>
        </body>
    );
}