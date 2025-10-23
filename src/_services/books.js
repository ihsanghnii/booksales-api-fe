import API from "../_api"

//ada suatu fenomena kode bersifat async, karena async maka harus membuat sebuah arrow function yg bersifat aysnc juga
export const getBooks = async () => {
  const { data } = await API.get("/books")
  return data.data
}

export const createBook = async (data) => {
  try {
    const response = await API.post("/books", data)
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
}