import axios from 'axios'
const baseUrl = 'http://localhost:3001/systems'

// getting all the systems from json file
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// get specific system
const getSystem = (sysid) => {
    const request = axios.get(`${baseUrl}/${sysid}`)
    return request.then(response => response.data)
}

// deleting a system
const remove = (sysid) => {
    const request = axios.delete(`${baseUrl}/${sysid}`)
    return request
}

// creating a new system
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// updating a system 
const update = (sysid, newObject) => {
    const request = axios.put(`${baseUrl}/${sysid}`, newObject)
    return request.then(response => response.data)
}


const systemsService = {
    getAll,
    getSystem,
    remove,
    create,
    update
}

export default systemsService