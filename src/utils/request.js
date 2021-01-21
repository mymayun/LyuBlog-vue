import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.93:10861',
  timeout: 3000,
});

export default instance
