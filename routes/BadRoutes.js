//routes 
const express =  require('express');
const router = express.Router();
const Bad = require("../models/Bad");
//Med - Bad , med -bad
router.get("/",async(req,res)=>{
try{
	const bad= await Bad.find();
	res.json(bad);
	
}	
	catch(err){
		res.status(500).json({message:err.message});
		
	}
	
});

router.post("/bads",async(req,res)=>{
	const bad = new Bad({
		name:req.body.name,
		status:req.body.status,
	    img:req.body.img,
         nickname:req.body.nickname ,//portrayed,
		portrayed:req.body.portrayed
		
		
		
		
	});
	
	
try{
	const newbad = await bad.save();
	res.json(newbad)
	
}	
	catch(err){
		
		res.status(400).json({message:err.message});
		
	}
	
	
});

async function getBad(req, res, next) {
  let bad;
  try {
  	//find record by id
    bad = await Bad.findById(req.params.id);
    
    //if no match, report error
    if (bad == null) {
      return res.status(404).json({message: "Cannot find that Med record."});
    }
  }
   catch (err) {
   	//general error
    return res.status(500).json({ message: err.message });
  }
  
  res.bad = bad;
  //another id
  next();
} //end of getMed() function
//============================

// Define route to get just one record by ID
router.get("/:id", getBad, (req, res) => {
  res.json(res.bad);
});

//Update one record field by field using Patch route
router.patch("/:id", getBad, async (req, res) => {
  
   
    
       res.name = req.body.name,
		res.status = req.body.status,
	    res.img = req.body.img,
         res.nickname = req.body.nickname//portrayed
		res.portrayed = req.body.portrayed
		
  
  
  try {
  	//try to save updates
    const updatedBad = await res.bad.save();
    res.json(updatedBad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one record all at once using Put route
router.put("/:id", getBad, async (req, res) => {
  try {
    const updatedBad = await res.bad.set(req.body);
    res.json(updatedBad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//Delete One record of a specified ID using"Delete" route
router.delete("/:id", getBad, async (req, res) => {
  try {
  	//delete record of the specified id
    await res.bad.deleteOne();
    //feedback for user
    res.json({ message: "Character record has been deleted"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});



 router.route('/:id').post(function (req, res) {
Bad.findById(req.params.id, function (err, bad) {
 if (!bad)
 return next(new Error('Unable To Find character With This Id'));
 else {
 
  
        bad.name = req.body.name,
		bad.status = req.body.status,
	    bad.img = req.body.img,
         bad.nickname = req.body.nickname//portrayed
		bad.portrayed = req.body.portrayed
		
  
    
    
    
 
 bad.save().then(emp => {
 res.json('Character Updated Successfully');
 })
 .catch(err => {
 res.status(400).send("Unable To Update character");
 });
 }
 });
 });
 






module.exports = router;
