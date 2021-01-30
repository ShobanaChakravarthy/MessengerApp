import { FormControl, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const[inp,setInp]=useState("");
  const[msgs,setMsgs]=useState([]);
  const[userName,setUserName]=useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

useEffect(() => {
  //when the page loads 
  // read the content from db and whenever smthng changes in db, take snapshot of changes and update here
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setMsgs(snapshot.docs.map(doc=> ({id:doc.id, message:doc.data()})))
  })

}, [])

  const sendMsg = (e) =>{
    e.preventDefault();
    //adding the data into db, id will be auto populated
    // timestamp to get the firebase server time
    db.collection('messages').add({
      message: inp,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInp("");
    console.log(msgs);
  }
  return (
    <div className="App">
      {/* messenger logo */}
      <img  src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-messenger-logo" />
      <h1>Messenger</h1>
      <h2>Welcome {userName}!</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="Enter message" value={inp} type="text" onChange={e=>setInp(e.target.value)}/>
          <IconButton className="app_iconButton" disabled={!inp} variant="contained"  onClick={sendMsg} type="submit">
            <SendIcon fontSize="large" style={{ color: "white" }}/>
          </IconButton>
          {/* <Button disabled={!inp} variant="contained" color="primary" onClick={sendMsg} type="submit">Send Message</Button> */}
        </FormControl>
      </form>
      {/* Flip move is to give a small animation when new msg is added and getting displayed in screen */}
      <FlipMove>
        {msgs.map(({id,message})=><Message key={id} user={userName} message={message}/>)}
      </FlipMove>
    </div>
  );
}

export default App;
