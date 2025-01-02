const testimonialContainer = document.querySelector(".testimonial");

fetch("testimonial.json")
  .then((response) => response.json())
  .then((data) => {
    const testimonial = data.testimonials;
    testimonial.forEach((review) => {
      const htmContent = `  <div class="profile-card shadow-cardShadow2 bg-slate-900 text-fuchsia-300 text-center space-y-4 px-5 py-4 rounded-lg">
      <h1 class="text-[1.5rem] font-semibold">${review.name}</h1>
      <p class="text-sm">${review.feedback}</p>
      <div class="w-[6rem] h-[6rem] rounded-[5rem] mx-auto">

        <img src="${review.profilePicture}" alt="testi-img" class="w-full h-full object-cover rounded-[5rem]">
      </div>
    </div>`
      testimonialContainer.innerHTML += htmContent;
    });
  })
  .catch((error) => console.error(`Error in Fetching: ${error}`));
