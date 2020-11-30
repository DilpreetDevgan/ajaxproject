//routes 
const express =  require('express');
const router = express.Router();
const Med = require("../models/med.js");

router.get("/",async(req,res)=>{
try{
	const med= await Med.find();
	res.json(med);
	
}	
	catch(err){
		res.status(500).json({message:err.message});
		
	}
	
});

router.post("/meds",async(req,res)=>{
	const med = new Med({
		drugcompany:req.body.drugcompany,
		Drugbrandname:req.body.Drugbrandname,
		Drugname:req.body.Drugname
		
		
	});
	
	
try{
	const newmed = await med.save();
	res.json(newmed)
	
}	
	catch(err){
		
		res.status(400).json({message:err.message});
		
	}
	
	
});













module.exports = router;
