const firebaseConfig = {
    apiKey: "AIzaSyAaplUoqlq0B3TlGPTv3QnWEePKIqn3djU",
    authDomain: "assist-1b2c0.firebaseapp.com",
    databaseURL: "https://assist-1b2c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "assist-1b2c0",
    storageBucket: "assist-1b2c0.appspot.com",
    messagingSenderId: "866716072724",
    appId: "1:866716072724:web:6eccb8eaf8ed9a5a102001",
    measurementId: "G-7D0QKYFNK0"
};
firebase.initializeApp(firebaseConfig);
const conn = firebase.database().ref('/webData/uploadedText');
conn.on('child_added', displayData);

function displayData(data, prevChildKey){
    const datapoint = data.val();
    document.getElementById('reminders').value += datapoint.audio
}
