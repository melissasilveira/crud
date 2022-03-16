import client from '../provider/client'

const apiCode = '0m6h415'

export const getTasks = () => {
  return client.get(`/${apiCode}`)
}

export const editTask = () => {
  return client.put(`/${apiCode}`)
}

export const postTask = () => {
  return client.post(`/${apiCode}`)
}

export const deleteTask = () => {
  return client.delete(`/${apiCode}`)
}
