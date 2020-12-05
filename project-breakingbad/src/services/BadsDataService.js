//

import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const getOne = id => {
  return http.get(`/bads/${id}`);
};

const create = data => {
  return http.post("/bads", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = id => {
  return http.delete(`/${id}`);
};


export default {
  getAll,
  getOne,
  create,
  update,
  remove,

};