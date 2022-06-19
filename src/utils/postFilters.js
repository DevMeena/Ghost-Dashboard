/*eslint-disable */

export const noMetaDesc = (posts) => {
  let filteredPosts = posts.filter((post) => {
    if (post.meta_description === null) return post;
  });
  return filteredPosts;
};

export const longMetaDesc = (posts) => {
  let filteredPosts = posts.filter((post) => {
    if (post.meta_description !== null && post.meta_description.length > 160)
      return post;
  });
  return filteredPosts;
};

export const tooLongUrl = (posts) => {
  let filteredPosts = posts.filter((post) => {
    if (post.url !== null && post.url.length > 100) return post;
  });
  return filteredPosts;
};

export const noFeatImg = (posts) => {
  let filteredPosts = posts.filter((post) => {
    if (!post.featured) return post;
  });
  return filteredPosts;
};

export const tooShortPost = (posts) => {
  let filteredPosts = posts.filter((post) => {
    console.log(post.html.length);
    if (post.html === null || post.html.length <= 250) return post;
  });
  return filteredPosts;
};

export const tooLongPost = (posts) => {
  let filteredPosts = posts.filter((post) => {
    if (post.html !== null && post.html.length > 1500) return post;
  });
  return filteredPosts;
};

/*eslint-enable */
