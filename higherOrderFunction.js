import { posts } from "./posts.js";

//forEach

posts.forEach((post) => {
  console.log(post);
});

console.clear();

//filter

const filterdPosts = posts.filter((post) => {
    return post.userId === 7;
})

console.log(filterdPosts);

// map

const mappedPosts = filteredPosts.map(post =>{
    return post.id * 10;
})