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

router.post("/",async(req,res)=>{
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

async function getid(req,res,next){
let med;
	try{
		med = await Med.findById(req.params.id);
	if(med==null){
	return	res.status(404).json({message:err.message});
	}	

	}
	catch(err){
		res.status(500).json({message:err.message});
		
	}
	res.med = med;
	next();
}

router.get("/:id",getid,async(res,req)=>{
	
res.json(res.med);	
	
});
router.patch("/:id",getid,async(req,res)=>{
if(req.body.drugcompany != null){
	res.drugcompany = req.body.drugcompany;
}if(req.body.Drugbrandname != null){
	res.Drugbrandname = req.body.Drugbrandname;
}
if(req.body.Drugname != null){
	res.Drugname  = req.body.Drugname ;
}

	try{
		const updatmed = await res.med.save();
		res.json(updatmed);
		
		
	}catch(err){
		res.status(400).json({message:err.message});
	}
	
	
});

router.put("/:id",getid,async(res,req)=>{
try{
	const updatemed = await res.med.set(req.body);
	res.json(updatemed);
	
	
}	catch(err){
	res.status(400).json({message:err.message});
	
}
	
	
});


router.delete("/:id",getid,async(req,res)=>{
try{
	await res.med.deleteOne();
	
}	
catch(err){
	res.status(500).json({message:err.message});
}
});













module.exports = router;
