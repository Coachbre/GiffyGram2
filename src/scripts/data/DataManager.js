export const getUsers = () => {

  return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
      // do something with response here
      return parsedResponse;
    })
}
//fetch data from users database, turn response to json, then take parsedresponse and return data

export const getPosts = () => {

  return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
      // do something with response here
      return parsedResponse;
    })
}

const loggedInUser = {
  id: 1,
  name: "Bryan",
  email: "bryan@bn.com"
}

export const getLoggedInUser = () => {
  return loggedInUser;
}
