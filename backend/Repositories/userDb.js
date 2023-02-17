const { connection } = require("../connection/Database");

// showing all the userdetails

function getAllData(abc, callback) {
  let result;

  connection.query(abc, function (err, res) {
    if (err) {
      return console.log(err);
    }
    result = res;
    console.log(result);
    return callback(null, result);
  });
}

function insertUser(abc) {
  return connection.query(abc, function (err, result, fields) {
    console.log(result);
  });
  console.log("interted...");
}

// function deleteUser(abc){
//     return connection.query(abc, function(err,result,fields){
//         console.log(result);
//     })
// }

const deleteData = (sqlQuery)=>{
  return connection.query(
      sqlQuery,
      (err,result)=>{
      if(err){
          return console.log(err);
      }
      else
      {
          console.log("Record deleted!!");
      }
  })
}

const updateData = (sqlQuery)=>{
  return connection.query(
      sqlQuery,
      (err,result)=>{
      if(err){
          return console.log(err);
      }
      else
      {
          console.log("Record updated!!" + result);
      }
  })
}

module.exports = { getAllData, insertUser, deleteData, updateData };
