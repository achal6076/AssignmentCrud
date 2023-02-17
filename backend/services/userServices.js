// const {connection} = require('../connection/Database');
const userDb = require('../Repositories/userDb');
// const {servicesDeleteData} = require('../services/userservices');
const {deleteData,updateData} = require('../repositories/userdb');


function getAllData(callback){
    const showUser = 'select * from userdetails';
    const result = userDb.getAllData(showUser,function(error,res){
        console.log(res);
        callback(null,res);
        return result;
    });
}




function insertUser(user){
    let fName = user.fName;
    let lName = user.lName;
    let age = user.age;
    let email = user.email;
    let contact = user.contact;
    let password = user.password;
    let username = user.username;

    const abc = 'insert into userdetails (fName,lName,age,email,contact,password,username) values("'+fName+'","'+lName+'","'+age+'","'+email+'","'+contact+'","'+password+'","'+username+'")';
        // [fName,lName,age,email,contact,password,username];
        const res1 = userDb.insertUser(abc);
        console.log('data inserted userservices');
        return;
        
        
    
};

// function deleteUser(user){
//     let id = user.userid;
//     const deleteQuery = `delete from userdetails where userid =${id} `;
//     const resultdeleteQuery = userDb.deleteUser(deleteQuery);
//     console.log("user id"+id);
//     return resultdeleteQuery;
// }

const servicesDeleteData = (id)=>{
    const sqlQuery = `delete from userdetails where userid = ${id}`;
    return deleteData(sqlQuery);
}

const servicesUpdateData = (id , updateUser)=>{
    console.log(updateUser);
    const sqlQuery  = `update user set first_name = "${updateUser.fName}" , last_name = "${updateUser.lName}", user_name = "${updateUser.username}", email_id = "${updateUser.email}", mobile_number = "${updateUser.contact}", password = "${updateUser.password}" where user_id = ${id}`;
    return updateData(sqlQuery);
}


module.exports={getAllData,insertUser,servicesDeleteData,servicesUpdateData};

// connection.query(
//     'select * from userdetails',
//     function(err,result,field){
//        if(err){
//         console.log(err)
//        }else{
//         resp.send(result);
//         // resp.sendFile(__dirname+'/index.html');
//         console.log(result);
//        }
//     }
// )