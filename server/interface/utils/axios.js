import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${porcess.env.PORT} || 3000`,
  headers: {}
})

export default instance
