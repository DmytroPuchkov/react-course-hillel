import axios from "axios";

const API = `https://66db1d46f47a05d55be71aad.mockapi.io/users`;

const services = {
  get: (id) =>
    axios(id ? API + `/${id}` : API)
      .then(({ data }) => data)
      .catch(error => console.log(error)),
  delete: (id) =>
    axios
      .delete(API + `/${id}`)
      .then(({ data }) => data)
      .catch(error => console.log(error)),
  put: (id, item) =>
    axios
      .put(API + `/${id}`, item)
      .then(({ data }) => data)
      .catch(error => console.log(error)),
  post: (item) =>
    axios
      .post(API, item)
      .then(({ data }) => data)
      .catch(error => console.log(error))
}

export default services;

// services.get();
// services.get(id);
// services.delete(id);
// services.put(id, { ...item, priority: !item.priority });
// services.post(item);