import React from "react";
import AddUser from "../../Components/Form/AddUserForm/AddUser";
import axios from "axios";

function add(values) {
  const addUser = async () => {
    console.log(values);
  };

  return <AddUser />;
}

export default add;

// const newPost = {
//     userId: 1,
//     title: 'A new post',
//     body: 'This is the body of the new post'
// };

// const sendPostRequest = async () => {
//     try {
//         const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
