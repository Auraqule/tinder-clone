import axios from "axios";

const instance = axios.create({
  baseURL: "https://auraqule-tinder-clone.herokuapp.com",
});

export default instance;
