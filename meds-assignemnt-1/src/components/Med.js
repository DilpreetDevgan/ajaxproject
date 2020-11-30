//
import React, { useState, useEffect } from "react";
import MedDataService from "../services/MedsDataService";

const Med = props => {
  const initialMedState = {
    id: null,
    drugcompany: "",
    Drugbrandname: "",
    Drugname: "",
    published: false
  };
  const [currentMed, setCurrentMed] = useState(initialMedState);
  const [message, setMessage] = useState("");

  const getMed = id => {
    MedDataService.getOne(id)
      .then(response => {
        setCurrentMed(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMed(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentMed({ ...currentMed, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentMed.id,
      drugcompany: currentMed.drugcompany,
      Drugbrandname: currentMed.plant_common_name,
      Drugname: currentMed.Drugname,
      published: status
    };

    MedDataService.update(currentMed.id, data)
      .then(response => {
        setCurrentMed({ ...currentMed, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateMed = () => {
    MedDataService.update(currentMed.id, currentMed)
      .then(response => {
        console.log(response.data);
        setMessage("The plant record was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteMed = () => {
    MedDataService.remove(currentMed.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/meds");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
      <div>
      {currentMed ? (
        <div className="edit-form">
          <h4>Med</h4>
          <form>
            <div className="form-group">
              <label htmlFor="company">Drug Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={currentMed.drugcompany}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brandname">Drug Brand name</label>
              <input
                type="text"
                className="form-control"
                id="bname"
                name="bname"
                value={currentMed.Drugbrandname}
                onChange={handleInputChange}
              />
            </div>
             <div className="form-group">
              <label htmlFor="drugname">Drug name</label>
              <input
                type="text"
                className="form-control"
                id="dname"
                name="dname"
                value={currentMed.Drugname}
                onChange={handleInputChange}
              />
            </div>
           
            

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentMed.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentMed.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteMed}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMed}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on med</p>
        </div>
      )}
    </div>
  );
};

export default Med;