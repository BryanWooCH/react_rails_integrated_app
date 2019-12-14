import axios from 'axios'
import * as clientSync from './clientSync'

const APIDomain = window.location.hostname === 'localhost' ? 'http://localhost:3000/api/' : 'http://prod-api-url.com/api/'
const syncFailed = () => console.log('Failed to connect to server...persisting data to local storage in browser.')

export const save = async (route, data) => {
  return axios
    .post(APIDomain + route, { data })
    .then(res => res.data)
    .catch(() => {
      syncFailed()
      return clientSync.save(route, data)
    })
}

export const get = async (route) => {
  return axios
    .get(APIDomain + route)
    .then(res => res.data)
    .catch(() => {
      syncFailed()
      return clientSync.get(route)
    })
}
