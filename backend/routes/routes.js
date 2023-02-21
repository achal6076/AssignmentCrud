const userController = require('../controller/userController');
const express = require("express");
const router = express.Router();
const {connection} = require("../connection/Database");
var bodyParser = require("body-parser");
const register = require("../validation/validation");
const {controlDeleteData,controlUpdateData} = require('../controller/usercontroller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));




router.get('/show',userController.getAllData);


router.post('/insert',userController.insertUser);

router.post('/deleteuser',controlDeleteData);

// router.post('/login',controlUpdateData);
router.post("/signIn", userController.signIn);
// router.get('/fetchuser', controlFetchData);
// router.get('/show',(req,resp) =>{
//     connection.query(
//         'select * from userdetails',
//         function(err,result,field){
//            if(err){
//             console.log(err)
//            }else{
//             resp.send(result);
//             // resp.sendFile(__dirname+'/index.html');
//             console.log(result);
//            }
//         }
//     )

// });



// router.post('/insert',(req,resp) =>{
//     let fName = req.body.fName;
//     let username = req.body.username;
//     let email = req.body.email;
//     let age = req.body.age;
//     let contact = req.body.contact;
//     let password = req.body.password;
//     let lName = req.body.lName;


//     connection.query(
//         'insert into userdetails (fName,lName,age,email,contact,password,username) values(?,?,?,?,?,?,?)',
//         [fName,lName,age,email,contact,password,username],
//         function(err,result,field){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log('saved successfully');
//             }
//             resp.send('<h1>User data added</h1>');

//         }
//     )
// });




// router.delete('/delete/(:id)',(req,resp) =>{

//     let id = req.params.id;
//     console.log(id);
//     connection.query('delete from userdetails where userid = '+ id,
//     function(err,result,field){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(`user ${id} deleted`);
//         }
//         resp.send('deleted...')
//     }
//     )
// })





router.put('/update/(:id)',(req,resp) =>{
    let id = req.params.id;
    let fName = req.body.fName;
    let lName = req.body.lName;
    let age = req.body.age;
    let email = req.body.email;
    let contact = req.body.contact;
    let password = req.body.password;
    let username = req.body.username;
    connection.query("UPDATE userdetails SET fName='"+fName+"', lName='"+lName+"', age='"+age+"', email='"+email+"', contact='"+contact+", password='"+password+", username='"+username+"' WHERE userid="+id, 
    function(err,result,field){
        if(err){
            console.log(err);
        }else{
            console.log('updated...');
        }
        resp.send('data update....');
    }
    )

})








module.exports = router;