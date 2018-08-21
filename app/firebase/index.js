import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyC99n94rXs-NXaW8Y1frQX6CjkQpo6Yr4U",
        authDomain: "todo-app-7b8df.firebaseapp.com",
        databaseURL: "https://todo-app-7b8df.firebaseio.com",
        projectId: "todo-app-7b8df",
        storageBucket: "todo-app-7b8df.appspot.com",
        messagingSenderId: "982918776680"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;