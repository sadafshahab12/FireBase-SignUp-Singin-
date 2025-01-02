const callToActionContainer = document.querySelector(".callToAction");

fetch("./jsons/calltoaction.json")
  .then((response) => response.json())
  .then((data) => {
    const callToAction = data.callToAction;
    callToAction.forEach((action) => {
      const htmContent = `
         <div
          class=" shadow-md py-4 xs:px-8 px-4 space-y-3 group hover:bg-fuchsia-300 rounded-md border bg-white text-slate-950"
        >
        <div class= "flex items-center justify-between border-b pb-2">

          <h1 class="xs:text-xl text-lg font-semibold ">${action.title}</h1>
          <i class="${action.icon} xs:text-xl text-lg"></i>
          </div>
          <p class="text-sm xs:leading-7 leading-6">${action.tagline}</p>
          <button
            class="text-sm border border-slate-900 rounded-md py-2 px-4 group-hover:bg-slate-900 group-hover:text-fuchsia-300 transition-all ease-in duration-200"
          >
            ${action.buttonText}
          </button>
        </div>
    `;
      callToActionContainer.innerHTML += htmContent;
    });
  })
  .catch((error) => console.error(`Error in fetching: ${error}`));
