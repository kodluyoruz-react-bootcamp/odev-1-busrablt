"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

 async function getData(id) {
  try { 
      
    const user = await _axios2.default.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const  posts = await _axios2.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    console.log(user.data, posts.data)
      
  } catch (e) { 
      console.log(e)
      
  }  
} exports.default = getData;