
const Joi = require('joi');

const register= Joi.object({

    fName: Joi.string()
        .alphanum()
        .min(5)
        .max(7)
        .required()
    // fName: Joi.string().alphanum().min(3).max(30).required(),
   
    // lName: Joi.string().alphanum().min(3).max(30).required(),

    // email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // // cpass: Joi.ref('pass');
    // fName: Joi.string().alphanum().min(3).max(30).required(),
//   lfName: Joi.string().alphanum().min(3).max(30).required(),


});
const middleware = () => { 
    return (req, res, next) => { 
    const { error } = Joi.validate(req.body, register); 
    const valid = error == null; 
    
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
   
      console.log("error", message); 
     res.status(422).json({ error: message }) } 
    } 
  } 

module.exports=middleware;  