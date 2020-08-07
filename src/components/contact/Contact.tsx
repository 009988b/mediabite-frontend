import * as React from 'react';
import NavList from '../navlist/NavList';
import bg from './test.jpg';
import logo from './logo-inverted.png';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

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
    const [fname, setFName] = React.useState("");
    const [lname, setLName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const [fNameEmpty, setFNameEmpty] = React.useState(false);
    const [lNameEmpty, setLNameEmpty] = React.useState(false);
    const [emailEmpty, setEmailEmpty] = React.useState(false);
    const [subjectEmpty, setSubjectEmpty] = React.useState(false);
    const [msgEmpty, setMsgEmpty] = React.useState(false);


    const addMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        function validateEmail(email: string) {
            const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return re.test(email.toLowerCase());
        }
        event.preventDefault();
        //Lazy implementation -- I'm still learning React 
        const info = {
            'first_name' : fname,
            'last_name' : lname,
            'email' : email,
            'subject' : subject,
            'message' : msg
            /*response: [
                {'first_name' : fname},
                {'last_name' : lname},
                {'email' : email},
                {'subject' : subject},
                {'message' : msg}
            ],    */
        }
        //POST
        /*axios.post("/send", JSON.stringify(info))
        .then(response => {
            console.log("g")
            console.log(response);
        }).catch(error => {
            console.log(error);
        });*/
        console.log(info);
        axios.post("https://mediabite-backend.herokuapp.com/send", info,{
            headers: {
                'Content-Type': 'application/json',
        }}).then(
            response => {
                console.log(response);
            }
        )
    }
    const classes = useStyles();
    return (
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
                <form id="form_" className={classes.root} noValidate autoComplete="off">
                    <TextField error={fNameEmpty} id="first_name" label="First Name" variant="filled" value={fname} onChange={e => setFName(e.target.value)}/>
                    <TextField error={lNameEmpty} id="last_name" label="Last Name" variant="filled" value={lname} onChange={e => setLName(e.target.value)}/>
                    <br></br>   
                </form>
                <form id="form_" className={classes.multiLine} noValidate autoComplete="off">
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