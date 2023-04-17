const firebaseConfig = {
    apiKey: "AIzaSyCZtqv8YYaeYIFU7wmLmsp80mZa0P5qDRA",
    authDomain: "herdairy.firebaseapp.com",
    projectId: "herdairy",
    storageBucket: "herdairy.appspot.com",
    messagingSenderId: "8157175480",
    appId: "1:8157175480:web:84e04e1493ab41dbda1e4d",
    measurementId: "G-GCEQHLJXFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);