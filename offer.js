const offerContainer = document.querySelector(".offer");

fetch("./jsons/offer.json")
  .then((response) => response.json())
  .then((data) => {
    const offer = data.offer;
    offer.forEach((offers) => {
      const htmlContent = `
    <div class="flex justify-center items-center flex-col space-y-4 shadow-lg p-5 rounded-lg">
          <h1 class="text-[1.1rem] font-semibold text-center">${offers.title}</h1>
          <div class="border h-24 w-24 flex justify-center items-center rounded-[10rem]">
          <i class="${offers.icon} text-5xl "></i>
          </div>
          <p class="text-sm text-gray-500 leading-7 text-center">${offers.description}</p>
        </div>
    `;
      offerContainer.innerHTML += htmlContent;
    });
  })
  .catch((error) => console.error(`Error in Fecthing ${error}`));
