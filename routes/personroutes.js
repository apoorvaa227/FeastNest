const express = require('express');
const route = express();
const person = require('../models/person');

route.get('/' , async (req , res) =>
{
    try
    {
        const User = await person.find();
        if( !User)
        {
            res.status(404).send("user not found");
        }
        else 
        {
            res.status(200).json(User);
        }
    }
    catch(err)
    {
        res.status(500).json({ error: err.message });
    }
})
route.patch('/:id' , async (req , res) => 
{ 
 try
 {
    const id = req.params.id;
    const data = req.body;
    const user = await person.findByIdAndUpdate(id , data , {new : true});
    if(!user)
    {
        res.status(404).send("user not found");
    }
    else
    {
        res.status(200).json(user);
    }
 }
    catch(err)
    {
        res.status(500).json({ error: err.message });
    }
})
route.delete('/:id' , async (req , res) =>
{
    try
    {
        const id = req.params.id;
        const user = await person.findByIdAndDelete(id);
        if(!user)
        {
            res.status(404).send("user not found");
        }
        else
        {
            res.status(200).json(user);
        }
    }
    catch(err)
    {
        res.status(500).json({ error: err.message });
    }
})





















// route.get('/:email' , async  (req , res) =>
//     {
//         try 
//         {
//             const User = await person.findOne({email: req.params.email});
//             if( !User)
//             {
//                  res.status(404).send("user not found");
//             }
//             else 
//            {
//                 res.status(200).json(User);
//            }
//         }
//         catch(err)
//         {
//             res.status(500).json({ error: err.message });
//         }
       
//     });
 route.get('/:workType', async (req, res) => {
            try {
                const working = req.params.workType;
                console.log("Working param: ", working);  // Add this to see what the URL param is
                    const user = await person.findOne({ work: working });
                    console.log("Users found: ", user);  // Add this to see what Mongoose is returning
                    if (user.length === 0) {
                        console.log("user not found");
                        res.status(404).send("user not found");
                    } else {
                        res.status(200).json(user);
                    }
                } 
             catch (err) {
                console.log("error in this code ", err);
                res.status(500).json({ error: err.message });
            }
        });

          
route.post( '/' , async (req , res) =>
    {
        // sbse phele data ko fetch krna h jo client ne bheja h fr vo body parse me aayega aur parse hoga aur fr req.body me save hoga 
        // Client Request → Server Receives Request → Body-parser Parses Data → Data Available in req.body → Server Processes Data
        // var newperson = new person();
        // newperson.name = data.name;
        // newperson.age = data.age;
        // newperson.work = data.work;
        // newperson.email = data.email;
        // aise bhi data ko save kr skteh pr data bht bda hota h to isse acha h ki data ko ek variable me store krke usko save kr de
    try 
 {
         // await new person(req.body).save();
        var data = req.body; 
        var newperson = new person(data);
        const person1 = await newperson.save();
        res.status(201).json(person1); 
        console.log("data is saved");
    }
    catch (err) 
    {
        console.log("error in this code " , err);
        res.status(500).json({ error: err.message }); 
    }
    }
    );
        
module.exports = route;

