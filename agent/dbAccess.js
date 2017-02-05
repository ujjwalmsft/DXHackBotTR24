// Initialize Firebase
var config = {
apiKey: "AIzaSyBZxNSrqTiO0SIJPpZGoWxcAkUcMXEl_Qs",
authDomain: "dxbothack.firebaseapp.com",
databaseURL: "https://dxbothack.firebaseio.com",
storageBucket: "dxbothack.appspot.com",
messagingSenderId: "656831063104"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function fetchConvos (user_id, redflag, reason, trigger_msg) {
  database.ref('currConvos/' + user_id).set({
    redflag: redflag,
    reason : reason,
    trigger_msg: trigger_msg,
    timestamp: Date.now()
  });
}

var currConvoRef = firebase.database().ref('currConvos/');
currConvoRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
    console.log(snapshot.val());
});