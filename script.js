function showMessage() {
    document.getElementById("success-msg").textContent =
      "Thanks for your message! I'll get back to you soon.";
    return false; // Prevent form submission
  }


  document.getElementById("year").textContent = new Date().getFullYear();


//   /// Initialize Firebase
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDT8EY6AsYfEN8I2LnuZNeY1YJIa62NLrI",
//   authDomain: "porfolio-b0273.firebaseapp.com",
//   projectId: "porfolio-b0273",
//   storageBucket: "porfolio-b0273.firebasestorage.app",
//   messagingSenderId: "458326254553",
//   appId: "1:458326254553:web:04a0d2f07aea781d982fc8",
//   measurementId: "G-LP6YRLLGWJ"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// // Save data from contact form
// function showMessage() {
//   const name = document.querySelector("input[placeholder='Your Name']").value;
//   const email = document.querySelector("input[placeholder='Your Email']").value;
//   const message = document.querySelector("textarea").value;

//   if (name && email && message) {
//     const newMessageRef = db.ref("contacts").push();
//     newMessageRef.set({
//       name: name,
//       email: email,
//       message: message,
//       timestamp: new Date().toISOString()
//     });

//     document.getElementById("success-msg").textContent =
//       "Thanks! Your message has been submitted.";
//   } else {
//     document.getElementById("success-msg").textContent =
//       "Please fill in all fields.";
//   }

//   return false; // Prevent form reload
// }


