import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { csvContents } from './home.js';
import { csvArray } from './home.js';
import { communityID } from './home.js';

// "Write" as in write to the csv locally, not to the cloud. For that, see arrayToCSVContents
export const write = async () => {
  parse();
};

arrayToCSVContents();

function arrayToCSVContents() {
    if(global.csvContents != "Blank"){
      global.csvContents = (global.csvArray).map(row => row.join(',')).join('\n');
      console.log("gabbagoop" + global.csvContents);
    }
}



export const parse = async () => {
    // unpack the csv contents
    let csvString = await AsyncStorage.getItem('local.csv');
    const rows = csvString.split("\n");

  // Find the maximum length of each column across all rows
  const colLengths = new Array(rows[0].split(",").length).fill(0);

  for (const row of rows) {
    const cells = row.split(",");
    for (let i = 0; i < cells.length; i++) {
      colLengths[i] = Math.max(colLengths[i], cells[i].length);
    }
  }

  // Create an empty 2D array to store the data
  const dataArray = [];

  // Loop through each row
  for (const row of rows) {
    // Split the row into cells by delimiter (comma by default)
    const cells = row.split(",");

    // Pad each cell with spaces to match the maximum column length
    const paddedCells = cells.map((cell, i) => cell.padEnd(colLengths[i] + 2)); // +2 for spacing

    // Push the padded cells array into the data array
    dataArray.push(paddedCells);
  }

  // Print the 2D array to the console
  for (const row of dataArray) {
    console.log(row.join("  "));
  }

  global.csvArray = dataArray;
};

export default function DatabaseTest({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });


  let documentHTML = `
  <style>

  .submitButton{
      font-size: 35pt;
      font-family: 'Verdana';
      background-color: lightgrey;
      color: #7E7E7E;
      aspect-ratio: 1 / 1;
      border: none;
      border-radius: 10%;
      width: 47%;
      margin-left: 2%;
      margin-top: 2%;
  }

  #warningText {
    font-size: 35pt;
    font-family: 'Verdana';
    color: #CECECE;
    text-align:center;
    margin: 15%;
  }

</style>


<button class="submitButton" onclick="handleWrite()"> <img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2cy4sdRRSHa5CIC58ENOrGxFdUXPggRkTMSlciKIOP7O9SSHSYO7frd052+geIqPhGxAfiK7oR/wHNMorEJ6MGjIou1AiJaTmhh9vezKSrb9vdh3t/HxwIpOCeqq/PdFVXd4VACCGEEEIIIYQQQgjpBFW9EcBeixjjDRz2nlDVMwG8LCJ5OQC8aP9HMd3LeHdSRik+VNWzKMWHjJxS/MnIKcWfjJxS/MnIKcWfjJxS/MnIKcWfjJxS/MnIKcWfjJxS/MnIKcWfjJxSNmZBRN6oMYh//U9tTgaA1yyH5L+rs46q3ltDxuGU9kWbwzWk3NP3OLhBRF6qIWN7jPG6qrbWxtrWkPJC3+PgBgBvp8oIIYRUIdY2VQqAt/oeBzcAkFQZdYXUkIK19nPPysrKRQB+SpExjZAqKfbbqnrh3ItYZ2/8y4mB+lRVt00O1DRCjCzLLheRAxNtD3EvfgMWFxfPUNVdIrJbVXduNBWdVkjBAoBbi9/YZb/JymhIbCZk/lDVswHcDeBhEXlMRJ62APC4rQ8Gg8Em70IGg8EmAPdZzmv5W1+sT9Y362PwDoA7RGQ/gKMVA/ZJk5tobFmI5WY5VkyTjwJ4H8DtwRuj0ehSSy5hLVGO/V6FAPigZl/eUdVLggdUdQeAH2t2wOLEejOovoUUM7F8ivhBVW8OfQLgJgB/TtkBe950pzchAO6atj8i8kdvU+jRaHSxXRUNkp960GKLQmKM1zfpk4isquqW0DUi8nrDxA94vYfIqYvHWgHg1dD1fcPuAQ0S/j7GeLXjWdb2htV/otP7iV0BiYn9bY8/AHxkISLvARgNh8PN3tchw+Fws+Va5Hwyf+uL9SnxonsldLXVKiK/JyT0hKqeP2sr9eFweAGAJxP6/1vTBXASthBKSOaZWX90IiLPJYzDbW3msJbI7ook/ml7lhEdCLGFoPW1IoeHQtuIyFLFYHzTdg7RgRADwLcVF+ejoYMk9lUMxsF5ESIiByuE7Gs7BwopQSEFrJAS/JM1hhVSwAopwQoZwwopYIWUYIWMYYUUsEJKsELGsEIKWCElWCFjWCEFrJASrJAxrJACVkgJVsgYVsh/3wo57X7I5Ec+bUAhBcvLy+dVbJ8eX1paOie0DIWUON0hA/YRaegACjn1jfuv1xHyVVdvolPIBPbel309C+BjC/t3W++CrQeFOINCnEEhzqAQZ1CIMyjEGS6EiMgjFY8tvgtzgoisVgjZ20USDyZ8PXRZmHFUdVvCV2T3d5HIzqoHe3Zc34wfmbdg52slPODc0XomdlgLgJ+rkgHwZpZlW8OMkWXZ1hQZduRTZwfbAHg+oUrWYrX4qnUWYjW13wCeDV1hew0AjtWQMm9xXFWvDV1iV4CDjuceA8BToWtU9VwAn/XdefEXX3T5xHlSylUAfnUwCLmT+CXGeGUvMkpSrhCRzx0MRt5zHOpiHz8JK1H7Nt1uZg4GJu8ybHJj9wzb5w/esJlF8UH9kb4HStqPIzaxiTFeE7xTLB5viTE+ICJ77NzCWQgR2WN9shU4TzMlhBBCCCGEEEIIIWHO+RcNp9v5dcTlxgAAAABJRU5ErkJggg==><br> Upload</button>
<button class="submitButton" onclick="read()"> <img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2cTYwlUxTH7/gWEx9h4WNjhDE+NhOCRARhh2VnfERY9a7F06Rf3rv//xkSnwsSEUGGWIgEkdBDLCSWNmNhMUQmwqQxYYYQwUgwT45UJ0/nPXXrvVu3rqrzS86uUnXO+VX1u/dW3XbOMAzDMAzDMAzDMAzDMIwkALie5IMaInKdtb0her3eiSRXSY42xFsicoKJSQyApyfIWI+nTEj6p+O3aUIA/GpPSUJEZOt/PB3/hB6TMqdO472/pEyIHtN0np3Bm5C88CYkL7wJyQtvQvLCm5C88CYkL7wJyQtvQvLCm5C88CYkL7wJyQtvQvLCm5C88CYkL7wJyQtvQvLCm5BqiMhmALcAuIfkoySfnxQAniR51/Ly8klNCxGRzd77u4ucJuartWhNWpse73IHwLUk3wFwuKxhGz5K+LJKA31kISJyKcn9FXM+DGA3gGtcbgwGg3M0uSoFTYh9InJMaiGLi4vH6rXnzF2/BTvb5YCIXAHgmzkLWr/rbkotRERujpE7ya9F5HLXJAAu02+gIhU0AnBvaiEke7HyJ/mL9367a4LBYHCW3hURixmRXGhAyI7INayJyJkuNSRfi1kIgEOho62YQvSaeu3ItbzqUv9ukDwSsYifAdzQ4CjrRs0hYj1Hkv6e6B0QmNjvAPYAeH9KvAvgMRE5t+l5yHA43ELy8SKnafnu0ZoCn5JXXApE5DiSPwUk9IyInNq2mXq/3z8NwLMB9f+oQ2pXNzoRCkjmhbYvnZB8MaAPV9eZw3oid5Qk8VfdowyfgRCdCGqtJTnc7uqG5AMlzfii7hx8BkIUXfIpuTnvdwmS2FnSjL1dEUJyb4mQna0QIiJH1S1kaWnp+HnzbLUQbRCAhwB8VZxnDcBg0oLjrEIWFhaO1nOOrTAcBPCEbpGbJec2C9kE4L0p51vVofa8QvQcAN6ecvwHoSvNnRCia1glhe0el1JVSCGj7PXAnTPk3U4hAF4uazDGpFQREihjppl1m4WELsWsaoNDhRSrCpP+ucCk5r1RNe/WCiG5FChkpA3Wdw4BQraHyiiiN0Pe7RQiIidXfI36caRj1uNzzaFq3q0VonjvLyR5oEITY8UBvfYsObdaiCIiW2O9nw+Mb0Xk4lnzbb2QxFLmktEZIYmkzC2jU0JqlhJFRueE1CQlmoxOCoksJaqMzgqJJCW6jE4LmVNKLTJc14XMKKU2GUrnhVSUUqsMxYSES6ldhmJCxhCRbfqad8rHzttcAkzIBkTkDACPkPywiIf7/f7pLhEmJDNMSGaYkMwwIZmRhRCSyyXj//2uI3DyKG9cyH0pkrgtYPdQpQ04/0dE5LyAXWQ7UiRyVcAs+XX9GtG1l00A3izrg279qz2T4vvYQyHfOek2MdcyhsPhlhAZAL7TXiVJCsBLFRb49O/sRy2JtdC6AexyqdClCQB/VJDStfgzxVrav9A7IIPCRzkGgOdcavRLPwCfNF0884vP6tp9HLoM/kMGTRhlEt977y9oRMaYlPNJfppBM0YNx75Uy/6l6COqe9P1xyyDxoxShg5u9DdjZWXlFJcbOrIoNtQfbLpRrD90f+Iu7/1FLneKyeOV3vtbdd+F/j+TNgTJntakM/Bkkz7DMAzDMAzDMAzDMAzDcHnyN4e3uFJjoqCjAAAAAElFTkSuQmCC><br> Download</button>

<div id=warningText>
Be sure to only upload/download when you have a stable internet connection.
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

let fname = "` + communityID + `";
let globalContents = "` + (global.csvContents).replace("\n", /#/g) + `";


  function handleWrite(){
      console.log("TESTTTT!!");
      writeEntry(fname, globalContents);
  }

function writeEntry(name, CSVcontent) {
  const newEntry = {
        content: CSVcontent
  };

  firestore.collection("csv-files").doc(name).set(newEntry);
  alert("Successfully uploaded entry '" + fname + "' to database.");
}

function read() {
  firestore.collection("csv-files").doc(fname).get()
    .then((doc) => {
      if (doc.exists) {
        Object.keys(doc.data()).forEach(key => {
          console.log(key + ": ", doc.data()[key].content);
        });
        // You can do further processing with the data here
        window.ReactNativeWebView.postMessage([JSON.stringify(doc.data())]);
        alert("Successfully retrieved entry '" + fname + "' from database.");
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}



</script>
  `;

async function onMessage(event) {
    let content = JSON.parse(event.nativeEvent.data).content; // Parse the received data

    try {
        // store the content locally
        await AsyncStorage.setItem('local.csv', content.replace(/#/g, "\n"));
        console.log('Content successfully written locally');
    } catch (error) {
        console.error('Error writing content to AsyncStorage:', error);
    }

    // perform a test read on locally-stored content
    const retrievedContent = await AsyncStorage.getItem('local.csv');
    console.log('Retrieved content:', retrievedContent);

    // put it in a global variable
    global.csvContents = retrievedContent;
    write();
    navigation.navigate('tabsHome', {}); 
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
