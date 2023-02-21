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
  console.log("firstname lengthis " + fName.length);
  console.log("lastname lengthis " + lName.length);
  console.log("username lengthis " + username.length);

  function User(fName, lName, username, email, age, contact, password) {
    // this.userId = userId;
    this.fName = fName;
    this.lName = lName;
    this.username = username;
    this.email = email;
    this.age = age;
    this.contact = contact;
    this.password = password;
  }
  const user = new User(fName, lName, username, email, age, contact, password);
  console.log(user);
  //   regex validataion start here
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regPhone = /^\d{10}$/;

  if (!nameRegex.test(fName)) {
    alert("Please Enter valid First Name.");

    return false;
  } else if (!nameRegex.test(lName)) {
    alert("Please Enter valid Last Name.");

    return false;
  } else if (!nameRegex.test(username)) {
    alert("Please Enter valid User Name.");

    return false;
  } else if (!regEmail.test(email)) {
    alert("Please enter valid Email.");

    return false;
  } else if (age <= 0 && age >= 200) {
    alert("Please enter valid Age.");

    return false;
  } else if (!regPhone.test(contact)) {
    alert("Contact should be 10 digits.");

    return false;
  } else if (m.has(email)) {
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

    document.getElementById("counter").innerHTML =
      "Total Registerd user is : " + userCounter;

    insert(user);
    reset();
  }

  function insert(user) {
    console.log("function insert start"),
      $(document).ready(function () {
        $.ajax({
          url: "http://localhost:5003/insert",
          type: "POST",
          dataType: "json",
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
  // dataShow();
}

function reset() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("password").value = "";
}
function hideSignIn() {
  document.getElementById("signindiv").style.display = "block";
}
// document.getElementById("showdata").addEventListener("click", dataShow);
// data show api
function dataShow() {
  // $(document).ready(function () {
  $.ajax({
    url: "http://localhost:5003/show",
    type: "GET",
    success: function (result) {
      // console.log(result);
      var tabledata = "";
      for (i = 0; i < result.length; i++) {
        var obj = result[i];
        tabledata +=
          "<tr><td>" +
          obj.userid +
          "</td><td>" +
          obj.fName +
          "</td><td>" +
          obj.lName +
          "</td><td>" +
          obj.username +
          "</td><td>" +
          obj.email +
          "</td><td>" +
          obj.age +
          "</td><td>" +
          obj.contact +
          "</td><td>" +
          obj.password +
          "</td></tr>";
      }
      document.getElementById("display").innerHTML = tabledata;
      console.log("test", result);
    },
    error: function (error) {
      console.log(error);
    },
  });
  // });
}

deleteUser = () => {
  let id = document.getElementById("id").value;
  console.log("user Enterd" + id);
  userDelete(id);
  // console.log("user delete successfully....");
};
function userDelete(id) {
  // $(document).ready(function () {

  $.ajax({
    url: "http://localhost:5003/delete/" + id + "/",
    type: "POST",
    data: obj,
    success: function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
  // });
  console.log("user delete successfully....");
}

// function userDelete(){
//   let id = document.getElementById("id").value;
//   let obj={id}
//   console.log("fghj");
//   console.log(obj.id);;
//   $.ajax({
//       url:"http://localhost:5003/delete",
//       type:"POST",
//       data:obj,
//       success: function(result){
//           console.log("Hello",result);

//       },
//       error:function(error){
//           console.log(error);
//       }
//   })
// }

function deleteApi() {
  //e.preventDefault();
  const userId = parseInt(document.getElementById("deleteUserId").value);

  console.log(userId);
  const obj = {
    userId,
  };
  $.ajax({
    url: "http://localhost:5003/deleteuser",
    type: "POST",
    //dataType:"json",
    data: obj,

    success: function (result) {
      console.log(result);
    },
    error: function () {
      console.log("error");
    },
  });
}
function signIn() {
  //e.preventDefault();
  const email = document.getElementById("signemail").value;
  const password = document.getElementById("signpassword").value;
  // console.log(email);
  // console.log(password);
  const cred = {
    email,
    password,
  };
  $.ajax({
    url: "http://localhost:5003/signIn",
    type: "POST",
    data: cred,
    success: function (result) {
      // displayDetails(result);
      console.log(result);
      // console.log("loggedin successfully")
    },
    error: function (error) {
      console.log(error);
    },
  });
  document.getElementById("signemail").value = "";
  document.getElementById("signpassword").value = "";
}

// function signIn() {
//   let userName = document.getElementById("signusername").value;
//   let contact = document.getElementById("signpassword").value;
// console.log(userName);
// console.log(contact);
//   let result = false;
//   for (let i = 0; i < userData.length; i++) {
//     if (userName == userData[i].username && contact == userData[i].contact) {
//       result = true;
//     }
//   }
//   if (result == true) {
//     alert("logged successfully");
//   } else {
//     alert("not valid");
//   }
// }
