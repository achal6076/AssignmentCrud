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
    console.log("userDbreached...");
    console.log(result);
  });
  // console.log(user);
}





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

const signIn = async (sqlQuery)=>{
  return new Promise((resolve, reject)=>{
      connection.query(sqlQuery, (err, res)=>{
          if(err){
            console.log("error...")
              return reject(err);
          }
          //console.log(res);
          console.log("logged in")
          resolve(res);
      })
  })
}





module.exports = { getAllData, insertUser, deleteData, updateData, signIn };
