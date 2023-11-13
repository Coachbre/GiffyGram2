/**
 * Main logic module for what should happen on initial page load for Giffygram
 */


// import needed functions from other modules
import { getPosts, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/Footer.js";

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  })
}
//runs getPosts from datamanager then adds each to the postlist

const showNavBar = () => {
  //Get a reference to the location on the DOM where the nav will display
  const navElement = document.querySelector("nav");
  navElement.innerHTML = NavBar();
}

//logout button event listener
const applicationElement = document.querySelector(".giffygram");
//application element = selected area in main with class .giffygram
applicationElement.addEventListener("click", event => {
  //add click event listener
  if (event.target.id === "logout") {
    console.log("You clicked on logout")
  }
// if target with logout class is clicked, console log message
})

//footer dropdown menu eventlistener
applicationElement.addEventListener("change", event => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value)

    console.log(`User wants to see posts since ${yearAsNumber}`)
  }
})

const showFooter = () => {
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = Footer();
}

const startGiffyGram = () => {
  showPostList();
  showNavBar();
  showFooter();
}

startGiffyGram();
