const { json } = require('body-parser');
    const mysql = require('mysql2')

    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'crud'
    });



    connection.query(
        'select * from `userdetails` ',
        function(err,result,fields){
            if(err){
                throw err;
            }
            console.log(result);
            console.log("connected to server");
        }
    );




const express = require('express');
const app = express();
const port = 5003;




var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());
// app.use(express.static('frontend'));


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})






app.listen(port,()=>{
    console.log("server is running");
})




// show all users data 
// app.get('/',(req,resp) =>{
//             resp.sendFile(__dirname+'/frontend/index.html');
//         }
//     );


// app.post('/',(req,res) =>{
//     console.log(req.body);
// });

// show all users data
app.get('/show',(req,resp) =>{
    connection.query(
        'select * from userdetails',
        function(err,result,field){
            resp.send(result);
            // resp.sendFile(__dirname+'/index.html');
        }
    )

});


// show data by given id

app.get('/show/(:id)',(req,resp) =>{
    let id = req.params.id;
    connection.query(
        'select * from userdetails where userid = '+id,
        function(err,result,field){
            resp.send(result);
        }
    )

});

// insert userdata

app.post('/insert',(req,resp) =>{
    let fName = req.body.fName;
    let username = req.body.username;
    let email = req.body.email;
    let age = req.body.age;
    let contact = req.body.contact;
    let password = req.body.password;
    let lName = req.body.lName;

  


    connection.query(
        'insert into userdetails (fName,lName,age,email,contact,password,username) values(?,?,?,?,?,?,?)',
        [fName,lName,age,email,contact,password,username],
        function(err,result,field){
            if(err){
                console.log(err)
            }else{
                console.log('saved successfully');
            }
            resp.send('<h1>User data added</h1>');

        }
    )
});


// delete by userid

app.delete('/delete/(:id)',(req,resp) =>{

    let id = req.params.id;
    console.log(id);
    connection.query('delete from userdetails where userid = '+ id,
    function(err,result,field){
        if(err){
            console.log(err);
        }else{
            console.log('deleted...');
        }
        resp.send('deleted...')
    }
    )
})


// update user data by given user id


app.put('/update/(:id)',(req,resp) =>{
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
        resp.send('update');
    }
    )

})