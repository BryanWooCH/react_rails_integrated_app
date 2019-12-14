export const save = async (itemName, dataString) => {
  const data = JSON.stringify(dataString)
  localStorage.setItem(itemName, data)
  return { message: 'Added to local storage!' }
}

export const get = async (itemName) => {
  let data = localStorage.getItem(itemName)
  data = data ? JSON.parse(data) : []
  return { [itemName]: data }
}
