let userName = document.querySelector('#user_name').value;
let save = document.querySelector('#save');

let database = firebase.database()

save.onclick = function() {
    function writeUserData(userName) {
        firebase.database().ref("users/").set({
            "username": userName
        }) 
        
    }
} 
