 const user = {
    name: "Doe",
    firstname: "John",
    email: "john.doe@hello.bk",
    password: "1234",
    isAdmin: true,
  };

  const user2 = {
    name: "Zole",
    firstname: "Camille",
    email: "Zole_C.@mailg.net",
    password: "5678",
    isAdmin: true,
  };

  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");



  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
// console.log(username);
// console.log(password);

// console.log(user.name);
// console.log(user.password);



      if (username === user.name && password === user.password) {
          alert("Vous êtes loggé avec succes Bravo !! ");
       
          document.cookie=1;
          location.href = "index.html";
          
         
      } else if (username === user2.name && password === user2.password) {
        alert("Vous êtes loggé avec succes Bravo !! ");
      
      
        document.cookie=2;
        location.href = "index.html";
      
        } else {
           document.cookie=3;
        loginErrorMsg.style.opacity = 1;
        }
        })
 
       
  