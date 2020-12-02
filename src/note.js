import React, { useState, useEffect } from "react";
import  fire  from "./fire";
import "firebase/storage";
import './note.css';
import firebase from "firebase";
import Files from './files';
const Note = () => {
    const [name, setName] = useState("");
    const [Date, setDate] = useState("");
    const [message, setMessage] = useState("");
 
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    var json = { 
      "name":name,
      "Date": Date, 
      "message": message 
    }
    var jsonString = JSON.stringify(json);
    // create a Blob from the JSON-string
  

  var blob = new Blob([jsonString], {type: "application/json"})
    var storageRef = firebase.storage().ref();
    // Create a reference to the file you are about to create
    // the reference points to "/BUCKET_NAME/FILE_NAME.json"
    var filename=name.concat(".json");
    var fileRef = storageRef.child(filename);
    // upload you blob into the storage 
    fileRef.put(blob).then(function(snapshot) {
      console.log('Uploaded a blob!');
       alert("Your message has been submitted👍");

    });
    setName("");
    setDate("");
    setMessage("");  

  };
 
  return (
  	<>
    <form className="form" onSubmit={handleSubmit}>
      <h2>Nong Notes</h2>

      
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

     
      <input type="date"
        placeholder="Date"
        value={Date}
        onChange={(e) => setDate(e.target.value)}
      />

      
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">
        Submit
      </button>
    </form>
 <Files/>
</>
  );
};

export default Note;