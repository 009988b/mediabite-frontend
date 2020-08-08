import * as React from 'react';
import NavList from '../navlist/NavList';
import bg from './test.jpg';
import logo from './logo-inverted.png';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import MessageSent from '../messageSent/MessageSent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '33%',
      },
    },
    multiLine: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '76%',
        },
    },
  }),
);


export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const [nameEmpty, setNameEmpty] = React.useState(false);
    const [emailEmpty, setEmailEmpty] = React.useState(false);
    const [subjectEmpty, setSubjectEmpty] = React.useState(false);
    const [msgEmpty, setMsgEmpty] = React.useState(false);

    const [submitted, setSubmitted] = React.useState(false);

    const addMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        let validInputs: boolean = false;
        function validateEmail(email: string) {
            const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return re.test(email.toLowerCase());
        }
        event.preventDefault();
        //Lazy implementation -- I'm still learning React 
        const info = {
            'name' : name,
            'email' : email,
            'subject' : subject,
            'message' : msg
        }
        if (name === "") {
            setNameEmpty(true);
        }
        if (email === "" || !validateEmail(email)) {
            setEmailEmpty(true);
        }
        if (subject === "") {
            setSubjectEmpty(true);
        }
        if (msg === "") {
            setMsgEmpty(true);
        }
        if (name !== "") {
            setNameEmpty(false);
            if (email !== "" && validateEmail(email)) {
                setEmailEmpty(false);
                if (subject !== "") {
                    setSubjectEmpty(false);
                    if (msg !== "") {
                        setMsgEmpty(false);
                        validInputs = true;
                    }
                }
            }
        }
        
        console.log(info, validInputs);
        //if verification check && recaptcha
        if (validInputs) {
            var form: HTMLFormElement = (document.getElementById("form_") as HTMLFormElement);
            form.reset();
            axios.post("https://mediabite-backend.herokuapp.com/send", info,{
            headers: {
                'Content-Type': 'application/json',
            }}).then(
                response => {
                    console.log(response);
                }
                
            )
            let a: number;
            a = window.setTimeout(function() {
                setSubmitted(true);
            }, 1250);
        }
        
    }
    const classes = useStyles();
    if (submitted) {
        return (
            <MessageSent name={name}/>
        )
    } else return (
        <div>
            <body>
                <NavList />
                <div id="bg-container">
                    <img id="bg-img" src={bg} alt=""></img>
                    <div id="bg-txt">
                        <img src={logo} height="80px"></img>
                        <h2>We'd love to hear from you!</h2>
                        <h3>Send us the details on the type of project you're looking to hire for, and we'll be happy to get back to you with a free quote and information.</h3>
                    </div>
                </div>
            <div id="contact-txt">
                <div id="contact-form">
                <form id="form_" className={classes.multiLine} noValidate autoComplete="off">
                    <TextField error={nameEmpty} id="name_field" label="Name" variant="filled" value={name} onChange={e => setName(e.target.value)}/>
                    <br></br>
                    <TextField error={emailEmpty} id="email" label="Email" variant="filled" value={email} onChange={e => setEmail(e.target.value)}/>
                    <br></br>
                    <TextField error={subjectEmpty} id="subject" label="Subject" variant="filled" value={subject} onChange={e => setSubject(e.target.value)}/>
                    <TextField error={msgEmpty} id="message" label="Message" multiline variant="filled" rowsMax={12} value={msg} onChange={e => setMsg(e.target.value)}/>
                </form>
                <br />
                <Button variant="contained" color="primary" onClick={addMessage}>Send Message</Button>
                </div>
            </div>
            
            <div id="footer-content">
                <footer id="footer">
                    <p id="fuck">Site created by Sean O. <a href="https://github.com/009988b">github</a></p>
                </footer>    
            </div>
            </body>
        </div>
    );
}