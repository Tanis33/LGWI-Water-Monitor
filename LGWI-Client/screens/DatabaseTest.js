import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function DatabaseTest({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });


  let documentHTML = `
  <style>
  .inputBox {
      width: 70%;
      height: 10vh;
      font-family: monospace;
      appearance: none;
      border: none;
      margin-top: 5vh;
      border-radius: 2vh;
      outline: none;
      background-color:#b8d8e8;
      padding: .4em;
      color: rgb(58, 52, 52);
      font-size: 20pt;
  }

  .textInput {
      font-size: 20pt;
      font-family: 'Geneva';
  }

  .submitButton{
      font-size: 20pt;
      font-family: 'Geneva';
      background-color: #f3cece;
      border: none;
      border-radius: 1vw;
      width: 20%;
      margin-top: 5vh;
  }
</style>

<div class="textInput">
  Filename: <input class=inputBox id="filenameIN" type="text"><br>
  Content: <input class=inputBox id="contentIN" type="text"><br>
  <button class="submitButton" onclick="handleWrite()">Write</button>
</div>

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script>  
const firebaseConfig = {
  apiKey: "AIzaSyAqShP9wzIwu-YLljSmcBy2KOBZzzZRoog",
  authDomain: "lgwi-csv.firebaseapp.com",
  projectId: "lgwi-csv",
  storageBucket: "lgwi-csv.appspot.com",
  messagingSenderId: "949701907108",
  appId: "1:949701907108:web:6e22714f0abe16c7a54c31",
  measurementId: "G-0DLF9N9XKY"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const firestore = firebase.firestore();
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<script>

  function handleWrite(){
      writeEntry(document.getElementById('filenameIN').value, document.getElementById('contentIN').value);
  }


// log your ip address, tehehe :3
function writeEntry(name, CSVcontent) {
  const newEntry = {
        content: CSVcontent
  };

  // Add the entry to the database
  firestore.collection("csv-files").doc(name).set(newEntry);
}

</script>
  `;

  function onMessage(data) {
    //alert(data.nativeEvent.data);
    navigation.navigate(data.nativeEvent.data);
  }

  return (
    <WebView
      mixedContentMode="compatibility"
      onMessage={onMessage}
      allowFileAccess={true}
      originWhitelist={['*']}
      source={{
        html: documentHTML
      }}
    />
  );
}
