const firebaseConfig = { //Firebase parameters
    apiKey: "AIzaSyAaplUoqlq0B3TlGPTv3QnWEePKIqn3djU",
    authDomain: "assist-1b2c0.firebaseapp.com",
    databaseURL: "https://assist-1b2c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "assist-1b2c0",
    storageBucket: "assist-1b2c0.appspot.com",
    messagingSenderId: "866716072724",
    appId: "1:866716072724:web:6eccb8eaf8ed9a5a102001",
    measurementId: "G-7D0QKYFNK0"
};
firebase.initializeApp(firebaseConfig);  //Initialise database
const conn = firebase.database().ref('/webData/uploadedText');
conn.on('child_added', tabulateData); //Run function whenever something is added to database

function tabulateData(data, prevChildKey){ 
    //Insert each piece of data as cell in a HTML table
    const table = document.getElementById('reminder-table');
    let tableRow = table.insertRow();
    let cell0 = tableRow.insertCell(0);
    let datapoint = data.val(); 
    cell0.innerHTML = datapoint.audio;
}
