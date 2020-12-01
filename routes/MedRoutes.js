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

async function getMed(req, res, next) {
  let med;
  try {
  	//find record by id
    med = await Med.findById(req.params.id);
    
    //if no match, report error
    if (med == null) {
      return res.status(404).json({message: "Cannot find that Med record."});
    }
  }
   catch (err) {
   	//general error
    return res.status(500).json({ message: err.message });
  }
  
  res.med = med;
  //another id
  next();
} //end of getMed() function
//============================

// Define route to get just one record by ID
router.get("/:id", getMed, (req, res) => {
  res.json(res.med);
});

//Update one record field by field using Patch route
router.patch("/:id", getMed, async (req, res) => {
  
    res.drugcompany = req.body.drugcompany; //replace old entry with new entry
  

    res.Drugbrandname = req.body.Drugbrandname;
  
  
    res.Drugname = req.body.Drugname;
  
  
  try {
  	//try to save updates
    const updatedMed = await res.med.save();
    res.json(updatedMed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one record all at once using Put route
router.put("/:id", getMed, async (req, res) => {
  try {
    const updatedMed = await res.med.set(req.body);
    res.json(updatedMed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//Delete One record of a specified ID using"Delete" route
router.delete("/:id", getMed, async (req, res) => {
  try {
  	//delete record of the specified id
    await res.med.deleteOne();
    //feedback for user
    res.json({ message: "Drug record has been deleted"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});



 router.route('/:id').post(function (req, res) {
Med.findById(req.params.id, function (err, med) {
 if (!med)
 return next(new Error('Unable To Find Med With This Id'));
 else {
 
   med.drugcompany = req.body.drugcompany; //replace old entry with new entry
  

    med.Drugbrandname = req.body.Drugbrandname;

  
    med.Drugname = req.body.Drugname;
 
 med.save().then(emp => {
 res.json('Employee Updated Successfully');
 })
 .catch(err => {
 res.status(400).send("Unable To Update med");
 });
 }
 });
 });
 








module.exports = router;
