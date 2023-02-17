const services = require('../services/userServices');
const{connection} = require('../connection/Database');
const {servicesDeleteData,servicesUpdateData} = require('../services/userservices');

// const getData=(req,resp) =>{
//     const result = services
// }

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

// const deleteUser = (req,res) =>{
//     console.log("hello");
//     const resultdeleteQuery = services.deleteUser(req.body);
//     return resultdeleteQuery;
// }



const controlDeleteData = (req,res)=>{
    const updateUserData = req.body;
    return servicesDeleteData(updateUserData.userId);
}

const controlUpdateData = (req,res)=>{
    const updateUserData = req.body;
    return servicesUpdateData(id, updateUserData);
}
module.exports={getAllData,insertUser,controlDeleteData,controlUpdateData};

