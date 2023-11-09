/**
 * Main logic module for what should happen on initial page load for Giffygram
 */


// import needed functions from other modules
import { getPosts, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  })
}
//runs getPosts from datamanager then adds each to the postlist


const startGiffyGram = () => {
  showPostList();
}
//function to run showpostlist
startGiffyGram();
