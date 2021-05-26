import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9084'
})

export default instance