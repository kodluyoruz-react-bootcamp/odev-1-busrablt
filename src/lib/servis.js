import axios from "axios"

export default async function getData(id) {
  try { 
      
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const  posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    console.log(user.data, posts.data)
      
  } catch (e) { 
      console.log(e)
      
  }  
}