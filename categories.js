const categoriesContainer = document.querySelector(".catagories");

fetch("./jsons/catagories.json")
  .then((response) => response.json())
  .then((data) => {
    const categories = data.categories;
    categories.forEach((category) => {
      const htmlContent = `
    <div class="card shadow-cardShadow rounded-lg p-5 hover:scale-105 transition-all duration-300 ease-in-out bg-slate-800 text-white space-y-4">
              <h1 class="lg:text-[1.5rem] text-[1.25rem] text-center font-semibold">${category.category}</h1>
              <div class="lg:w-[10rem] w-[7rem] lg:h-[10rem] h-[7rem] mx-auto hover:scale-110 transition-all duration-300 ease-in-out ">
                <img
                  src="${category.images}"
                  alt="img"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-center text-sm lg:leading-7 leading-6">${category.description}</p>
            </div>
    `
      categoriesContainer.innerHTML += htmlContent;
    });
  })
  .catch((error) => `Error in Fetching ${console.error(error)}`);
