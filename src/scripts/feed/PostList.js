import { Post } from "./Post.js";

export const PostList = (allPosts) => {
  let postHTML = "";
  //initialize postHTML as empty variable
  //Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
  for (const postObject of allPosts) {
   
    postHTML += Post(postObject)
  }
  return postHTML;

}
