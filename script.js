let userData = [];
let userCounter = 0;

let m = new Map();

function storeAndShowuserData() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let contact = document.getElementById("contact").value;
  let password = document.getElementById("password").value;

  function User(fName, lName, username, email,age, contact,password) {
    // this.userId = userId;
    this.fName = fName;
    this.lName = lName;
    this.username = username;
    this.email = email;
    this.age = age;
    this.contact = contact;
    this.password = password;
  }
  const user = new User(fName, lName, username, email, age,contact ,password);
  console.log(user);
  console.log("yahan pr user print");
  //   regex validataion start here

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;

    if (fName.length > 15 ) {

      alert("First Name should be greated than 5 charcter");

      // return false;
    } else if (lName.length < 5 ) {

      alert("Last Name should be greated than 5 charcter");

      return false;
    } else if (username.length < 5 ) {

      alert("Last Name should be greated than 5 charcter");

      return false;
    } else if (email == "" || !regEmail.test(email)) {
      alert("Please enter valid Email.");

      return false;
    } else if (age == "" || age.length >3) {
      alert("Please enter valid phone Number.");

      return false;
    } else if (contact.length < 10) {
      alert("contact should be greather than 7 character");

      return false;
    }else if(m.has(email)){
      alert("This email is already used please enter another email !");
    } else {
  userCounter++;

  // let user = {
  //   fName: fName,
  //   lName: lastname,
  //   username: username,
  //   email: email,
  //   contact: phone,
  //   contact: contact
  // };

  // console.log(user);

  m.set(email, contact);

  // console.log(m);
  userData.push(user);


  let dataDisplay = "";

  for (let i = 0; i < userData.length; i++) {
    dataDisplay += "<tr> <td>USER" + (i + 1) + "</td>";
    dataDisplay += "<td>" + userData[i].fName + "</td>";
    dataDisplay += "<td> " + userData[i].lName + "</td>";
    dataDisplay += "<td> " + userData[i].username + "</td>";
    dataDisplay += "<td> " + userData[i].email + "</td>";
    dataDisplay += "<td> " + userData[i].age + "</td>";
    dataDisplay += "<td> " + userData[i].contact + "</td>";
    dataDisplay += "<td> " + userData[i].password + "</td></tr>";
  }
  document.getElementById("display").innerHTML = dataDisplay;
  document.getElementById("counter").innerHTML =
    "Total Registerd user is : " + userCounter;
  //   reset();
  function reset() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("password").value = "";
  }

  //   console.log("yahaa par user print ho rha hai.....");
  //   console.log(userData);
  //   console.log("yahaa par user print ho rha hai.....");
  insert(user);
}

//   }

//   console.log(user);
//   insert();

//   console.log("data sve ho rha ");

function signIn() {
  let userName = document.getElementById("signusername").value;
  let contact = document.getElementById("signcontact").value;

  //   console.log("testin...");
  //   console.log(userName);
  //   console.log(contact);

  let result = false;
  for (let i = 0; i < userData.length; i++) {
    if (userName == userData[i].username && contact == userData[i].contact) {
      result = true;
    }
  }
  if (result == true) {
    alert("logged successfully");
  } else {
    alert("not valid");
  }
}

function hideSignIn() {
  document.getElementById("signindiv").style.display = "block";
}

function dataShow() {
  $(document).ready(function () {
    $.ajax({
      url: "http://localhost:5001/show",
      type: "GET",
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
}

function insert(user) {
  console.log("function insert start"),
    $(document).ready(function () {
      $.ajax({
        url: "http://localhost:5001/insert",
        type: "POST",
        //   Headers: {
        //     Accept: "application.json",
        //     "Content-Type": "application/json",
        //   },
        data: user,
        success: function (result) {
          console.log(result);
          console.log("data saved successfully...");
        },
        error: function (error) {
          console.log(error);
        },
      });
    });
}
}