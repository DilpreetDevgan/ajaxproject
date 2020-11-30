//
import React, { useState } from "react";
import MedDataService from "../services/MedsDataService";

const AddMed = () => {
  const initialMedState = {
    id: null,
    drugcompany: "",
    Drugbrandname: "",
    Drugname: "",
    published: false
  };
  const [med, setMed] = useState(initialMedState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMed({ ...med, [name]: value });
  };

  const saveMed = () => {
    var data = {
      drugcompany: med.drugcompany,
      Drugbrandname: med.Drugbrandname,
      Drugname: med.Drugname
    };

    MedDataService.create(data)
      .then(response => {
        setMed({
          id: response.data.id,
          drugcompany: response.data.drugcompany,
          Drugbrandname: response.data.Drugbrandname,
          Drugname: response.data.Drugname,
           published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMed = () => {
    setMed(initialMedState);
    setSubmitted(false);
  };

  return (
   <div className="submit-form">
      {submitted ? (
        <div>
          <h4>New med record created successfully!</h4>
          <button className="btn btn-success" onClick={newMed}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Company">Drug Company</label>
            <input
              type="text"
              className="form-control"
              id="Company"
              required
              defaultValue={med.drugcompany}
              onChange={handleInputChange}
              name="Company"
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand_name">Drug Brand name</label>
            <input
              type="text"
              className="form-control"
              id="bname"
              required
              defaultValue={med.Drugbrandname}
              onChange={handleInputChange}
              name="bname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="drug_name">Drug  Name</label>
            <input
              type="text"
              className="form-control"
              id="dname"
              required
              defaultValue={med.Drugname}
              onChange={handleInputChange}
              name="sname"
            />
          </div>
          
          <button onClick={saveMed} className="btn btn-success">
            Submit
          </button>
           &nbsp;  &nbsp;
        
          <button className="btn btn-success">Clear</button>
          
          
        </div>
      )}
    </div>
  );
};

export default AddMed;