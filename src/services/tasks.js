import client from '../provider/client'

const apiCode = '0m6h415'

export const getTasks = () => {
  return client.get(`/${apiCode}`)
}

export const getTask = (id) => {
  return client.get(`/${apiCode}/${id}`)
}

export const editTask = (id, body) => {
  return client.put(`/${apiCode}/${id}`, body)
}

export const postTask = (data) => {
  return client.post(`/${apiCode}`, data)
}

export const deleteTask = (id) => {
  return client.delete(`/${apiCode}/${id}`)
}
