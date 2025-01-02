const blogPostContainer = document.querySelector(".blog-post");
fetch("./jsons/blog.json")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts;
    posts.forEach((post) => {
      const truncatedContent =
        post.content.length > 100
          ? post.content.slice(0, 100) + ". . ."
          : post.content;
      const postHtml = `     
        <div class="card shadow-lg rounded-lg">
          <div class="w-full lg:h-[14rem] xs:h-[16rem] h-[10rem] rounded-tr-lg rounded-tl-lg overflow-hidden">
            <img
              src="${post.image}"
              alt="blog-post-img"
              class="w-full h-full object-cover rounded-tr-lg rounded-tl-lg hover:scale-110 transition-all ease-in duration-300"
            />
          </div>
          <div class="sm:p-5 p-3">
            <h1 class="font-bold text-[1.1rem]">${post.title}</h1>
            <p class="text-[0.7rem] my-2 flex justify-between items-center">
              <span class="bg-slate-800 text-fuchsia-300 py-1 px-2 rounded-md"
                >Author: ${post.author}</span
              >
              <span class="bg-slate-800 text-fuchsia-300 py-1 px-2 rounded-md"
                >${post.date}</span
              >
            </p>

            <p class="text-sm sm:my-5 my-2 sm:leading-7 leading-6" id="content-${post.id}">
              ${truncatedContent}
            </p>
            <div class="flex items-center justify-between">
              <button
                class="bg-slate-800 text-white py-2 px-4 cursor-pointer rounded-md text-sm  "
              >
                Read More
              </button>
              <p class="text-sm bg-fuchsia-300 py-2 px-4 rounded-lg ">
                ${post.likes} <i class="fa-regular fa-heart"></i>
              </p>
            </div>
          </div>
        </div>`
      blogPostContainer.innerHTML += postHtml;
    });
  })
  .catch((error) => console.error(`Error Fetching Blog Posts ${error}`));

// <h3 class="font-bold text-2xl ">
// <ul >
// ${post.comments
//       .map(
//         (comment) =>
//           `<li>${comment.username} : ${comment.comment} </li>`
//       )
//       .join("")}

//     </ul>
// </h3>
