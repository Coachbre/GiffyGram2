export const getUsers = () => {

  return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
      // do something with response here
      return parsedResponse;
    })
}
//fetch data from users database, turn response to json, then take parsedresponse and return data

let postCollection = [];

export const usePostCollection = () => {
  //spread operator makes a copy and returns it
  return [...postCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
    })
}

export const createPost = postObj => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postObj)

  })
    .then(response => response.json())
    .then(getPosts)
}



export const deletePost = postId => {
  return fetch(`http://localhost:8088/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }

  })
    .then(response => response.json())
    .then(getPosts)
}


const loggedInUser = {
  id: 1,
  name: "Bryan",
  email: "bryan@bn.com"
}

export const getLoggedInUser = () => {
  return loggedInUser;
}
