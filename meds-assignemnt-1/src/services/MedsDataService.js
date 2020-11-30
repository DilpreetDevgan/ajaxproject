//
//services/PlantDataService.js
import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const getOne = id => {
  return http.get(`/meds/${id}`);
};

const create = data => {
  return http.post("/meds", data);
};

const update = (id, data) => {
  return http.put(`/meds/${id}`, data);
};

const remove = id => {
  return http.delete(`/meds/${id}`);
};

/*const removeAll = () => {
  return http.delete(`/plants`);
};*/

const findByDrugbrandname = Drugbrandname => {
  return http.get(`/meds?Drugbrandname=${Drugbrandname}`);
};

const findByDrugname = Drugname => {
  return http.get(`/meds?Drugname=${Drugname}`);
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  findByDrugbrandname,
 findByDrugname
};