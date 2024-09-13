import axios from 'axios';

const API = `https://api.github.com/users/`;

const userService = {
  get: (username) => 
    axios.get(`${API}${username}`)
      .then(({ data }) => data)
      .catch(error => console.log(error)),

  getRepos: (username) =>
    axios.get(`${API}${username}/repos?per_page=100`)
      .then(({ data }) => data)
      .catch(error => console.log(error)),
};

export default userService;
