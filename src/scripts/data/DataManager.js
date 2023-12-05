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
  const userId = getLoggedInUser().id
  return fetch(`http://localhost:8088/posts?_expand=user`)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log("data with user", parsedResponse)
      postCollection = parsedResponse
      return parsedResponse;
    })
}

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8088/posts/${postId}`)
    .then(response => response.json())
}


export const updatePost = postObj => {
  return fetch(`http://localhost:8088/posts/${postObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postObj)

  })
    .then(response => response.json())
    .then(getPosts)
}
//uses PUT method to update post based on the given id, then returns updated list


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
//deletes post with matching post id then returns updated list of posts


let loggedInUser = {}

export const logoutUser = () => {
  loggedInUser = {}
} 

export const getLoggedInUser = () => {
  return loggedInUser;
}

export const setLoggedInUser = (userObj) => {
  loggedInUser = userObj;
}


export const loginUser = (userObj) => {
  return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      console.log("parsedUser", parsedUser) //data is returned as an array
      if (parsedUser.length > 0) {
        setLoggedInUser(parsedUser[0]);
        return getLoggedInUser();
      } else {
        //no user
        return false;
      }
    })
}


export const registerUser = (userObj) => {
  return fetch(`http://localhost:8088/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObj)
  })
    .then(response => response.json())
    .then(parsedUser => {
      setLoggedInUser(parsedUser);
      return getLoggedInUser();
    })
}
