const userDb = require('../Repositories/userDb');
const {deleteData,updateData} = require('../repositories/userdb');
const schema = require('../validation/validation');




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
        console.log("userservicesreached...")
        const res1 = userDb.insertUser(abc);
        console.log('data inserted userservices');
        return;  
};





const servicesDeleteData = (id)=>{
    const sqlQuery = `delete from userdetails where userid = ${id}`;
    return deleteData(sqlQuery);
}





const servicesUpdateData = (id , updateUser)=>{
    console.log(updateUser);
    const sqlQuery  = `update userdetails set fName = "${updateUser.fName}" , lName = "${updateUser.lName}", username = "${updateUser.username}", email = "${updateUser.email}", contact = "${updateUser.contact}", password = "${updateUser.password}" where userid = ${id}`;
    return updateData(sqlQuery);
}



const signIn = async (cred)=>{
    const sqlQuery = `Select * from userdetails where email = "${cred.email}"`;
    const result = await userDb.signIn(sqlQuery);
    return new Promise((resolve)=>{
        resolve(result);
    })
}



module.exports={getAllData,insertUser,servicesDeleteData,servicesUpdateData,signIn};
