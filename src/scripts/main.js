/**
 * Main logic module for what should happen on initial page load for Giffygram
 */


// import needed functions from other modules
import { getPosts, usePostCollection, createPost, deletePost, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { PostEntry } from "./feed/PostEntry.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/Footer.js";

const applicationElement = document.querySelector(".giffygram");
//application element = selected area in index.html with class .giffygram

applicationElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
    //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
    const title = document.querySelector("input[name='postTitle']").value
    const url = document.querySelector("input[name='postURL']").value
    const description = document.querySelector("textarea[name='postDescription']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
      title: title,
      imageURL: url,
      description: description,
      userId: 1,
      timestamp: Date.now()
    }

    // be sure to import from the DataManager
    createPost(postObject)
      .then(response => {
        showPostList();
      })
  }
})


applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("delete")) {
    const postId = event.target.id.split("__")[1];
    deletePost(postId)
      .then(response => {
        showPostList();
      })
  }
})

const showPostEntry = () => {
  //Get a reference to the location on the DOM where the nav will display
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEntry();
}



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


//Home icon event listener
applicationElement.addEventListener("click", event => {
  if (event.target.id === "home") {
    console.log("Lets go home!")
  }
})



//Direct message icon event listener
applicationElement.addEventListener("click", event => {
  if (event.target.id === "directMessageIcon") {
    console.log("Would you like to send a message?")
  }
})



//logout button event listener
applicationElement.addEventListener("click", event => {
  //add click event listener
  if (event.target.id === "logout") {
    console.log("You clicked on logout")
  }
// if target with logout class is clicked, console log message
})



//edit button event listener
applicationElement.addEventListener("click", (event) => {

  if (event.target.id.startsWith("edit")) {
    console.log("post clicked", event.target.id.split("--"))
    console.log("the id is", event.target.id.split("--")[1])
  }
})




//footer dropdown menu eventlistener
applicationElement.addEventListener("change", event => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value)

    console.log(`User wants to see posts since ${yearAsNumber}`)
    //invoke a filter function passing the year as an argument
    showFilteredPosts(yearAsNumber);
  }
})


const showFilteredPosts = (year) => {
  //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);

  //filter the data
  //take post collection and if timestamp is bigger than epoch date, return post in the post list
  const filteredData = usePostCollection().filter(singlePost => {
    if (singlePost.timestamp >= epoch) {
      return singlePost
    }
  })
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = PostList(filteredData);
}





const showFooter = () => {
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = Footer();
}



const startGiffyGram = () => {
  showPostEntry();
  showPostList();
  showNavBar();
  showFooter();
}

startGiffyGram();
