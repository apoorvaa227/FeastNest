const express = require('express');
const route = express();
const menuitem = require('../models/menu');

route.post('/' , async (req , res) => 
    {
      try
      {
        var data = req.body;
        var newmenuitem = new menuitem(data);
        const menu1 = await newmenuitem.save();
        res.status(201).json(menu1);
      }
      catch(err)
      {
        console.log( " error is " + err.message);
       res.status(500).json({ error: err.message });
      }
    }
    )
  route.get('/' , async (req , res) => 
    {
        try
        {
            const menu = await menuitem.find();
            if( !menu)
            {
                res.status(404).send("menu not found");
            }
            else
            {
                res.status(200).json(menu);
            }
        }
        catch(err)
        {
            res.status(500).json({ error: err.message });
        }
    }
    )
    
    route.get('/:cost', async (req, res) => {
        try {
            const cost = Number(req.params.cost);  // Convert path param to number
            if (!isNaN(cost)) {  // Check if it's a valid number
                const menu = await menuitem.find({ price: cost });
                console.log('Users found: ', menu); // Debugging statement
                if (menu && menu.length === 0) {  // Check if no menu found
                    res.status(404).send("menu not found");
                } else {
                    res.status(200).json(menu);
                }
            } else {
                res.send("please enter a valid number");
            }
        } catch (error) {
            console.log("error in this code", error);
            res.status(500).json({ error: error.message });
        }
    });
    
    
    
module.exports = route;