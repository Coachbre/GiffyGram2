
export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div>${postObject.description}</div>
        <div><button id="edit--${postObject.id}">Edit</button></div>
      </section>
    `
}
//html representation for each post
