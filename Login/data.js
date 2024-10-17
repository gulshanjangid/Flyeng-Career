const firebaseConfig = {
  apiKey: "AIzaSyD5ZrEoD4jJQMf9azvTPzpUMzv4xR1BP-w",
  authDomain: "flyengcareer-1da58.firebaseapp.com",
  databaseURL: "https://flyengcareer-1da58-default-rtdb.firebaseio.com",
  projectId: "flyengcareer-1da58",
  storageBucket: "flyengcareer-1da58.appspot.com",
  messagingSenderId: "788047855405",
  appId: "1:788047855405:web:1e00d95bf6ebff92b59da4",
  measurementId: "G-YMD7W7WQE3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var datab = firebase.database().ref('data');

function UserRegister() {
  var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
   
}).catch(function (error){
   var errorcode = error.code;
   var errormsg = error.message;
});
}

const auth = firebase.auth();

function SignIn() {
  var email = document.getElementById('eemail').value;
  var password = document.getElementById('lpassword').value;
  const promise = auth.signInWithEmailAndPassword(email, password);
  
  promise
    .then(function() {
      // User is successfully logged in
      window.location.replace("https://flyengcareer.com");
    })
    .catch(function(error) {
      alert(error.message);
    });
}


document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
    name: getId('fname'),
    email: getId('eemail'),
    password: getId('lpassword')
  });
  alert("Welcome to FlyengCareer");
  console.log("sent");
  document.getElementById('form').reset();
});

function getId(id) {
  return document.getElementById(id).value;
}

function checkAuthState() {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is logged in
      const userName = user.displayName || user.email;
      const userInfo = document.getElementById('user-info');
      userInfo.textContent = 'Hello, ' + userName;
      userInfo.style.display = 'block';
      
      // Show the user's name on the home screen
      const homeUserName = document.getElementById('home-user-name');
      if (homeUserName) {
        homeUserName.textContent = 'Hello, ' + userName;
      }

      // Add logout functionality
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.style.display = 'block';
        logoutBtn.addEventListener('click', function() {
          auth.signOut()
            .then(function() {
              // Sign-out successful
              console.log('Sign out successful.');
              userInfo.style.display = 'none';
              if (homeUserName) {
                homeUserName.textContent = '';
              }
            })
            .catch(function(error) {
              // Handle errors
              console.error(error.message);
            });
        });
      }
    } else {
      // User is not logged in
      const userInfo = document.getElementById('user-info');
      if (userInfo) {
        userInfo.style.display = 'none';
      }
    }
  });
}

checkAuthState();

const scrollToTopButton = document.getElementById("scrollToTopButton");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});