const services = require('../services/userServices');
const{connection} = require('../connection/Database');
const {servicesDeleteData,servicesUpdateData} = require('../services/userservices');






const getAllData =(req,res)=>{
    const result = services.getAllData(function(err,result){
        return res.send(result);
    });
    return result;

};



const insertUser = (req,res) =>{
    const res1 = services.insertUser(req.body);
    res.send("done...")
    return res1;

}




const controlDeleteData = (req,res)=>{
    const updateUserData = req.body;
    return servicesDeleteData(updateUserData.userId);
}





const controlUpdateData = (req,res)=>{
    const updateUserData = req.body;
    res.send("data Updated...");
    return servicesUpdateData(updateUserData.email, updateUserData.password);
}






const signIn = async (req, res)=>{
    const cred = req.body;
    const temp = await services.signIn(cred);
    /*
    if(temp.length==0){
        res.send("Please Enter Email and Password");
    }else */if(temp.password===cred.password){
        console.log("data print..");
        res.send({
            userid: (temp[0].userid),
            fName: temp[0].fName,
            lName: temp[0].lName,
            username: temp[0].username,
            email: temp[0].email,
            createdAt: temp[0].createdAt,
            updatedAt: temp[0].createdAt

        });
    }else{
        res.send("Incorrect password")
    }
}


module.exports={getAllData,insertUser,controlDeleteData,controlUpdateData, signIn};

