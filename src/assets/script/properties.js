//....................fetch from properties.json.................//
let getCurrentCategory = () => {
  let urlParams = new URLSearchParams(window.location.search);
  // console.log(urlParams);

  return urlParams.get("category");
};
// fetch from json
async function loadAndDisplayItems() {
  let categoryId = getCurrentCategory();
  // console.log(categoryId);//townhouse
  let titleElement = document.querySelector(".category-title");

  let propertiesContainer = document.querySelector(".properties-container");

  if (!categoryId) {
    propertiesContainer.textContent = "No category found";
    return;
  }
  titleElement.textContent = `loading... ${categoryId.toUpperCase()} property lists`;

  try {
    const response = await fetch("assets/properties.json");

    if (!response.ok) {
      throw new Error("failed to load");
    }
    let allProperties = await response.json();
    // console.log(allProperties);
    let filteredProperties = allProperties.filter((property) => {
      return property.category === categoryId;
    });
    // console.log(filteredProperties);

    //update heading title
    titleElement.textContent = `${categoryId}`;

    if (filteredProperties.length === 0) {
      propertiesContainer.innerHTML = `<p>Nothing to show in this category</p>`;
      return;
    }
    propertiesContainer.innerHTML = "";

    filteredProperties.forEach((property) => {
      const card = document.createElement("div");

      card.setAttribute = ("data-property-id", property.id);

      card.innerHTML = `
      <div class="card card-1 w-full h-auto grid grid-rows-[500px_auto] p-8 bg-white">
              <!-- img-box -->
              <div class="img-box w-full h-full overflow-hidden flex-center relative">
                <img loading="lazy"
                  src=${property.images[0]}
                  alt="ready to move property image" class="img-set">
                <p class="w-fit text-nowrap absolute top-[10px] right-[10px] py-2 px-3 bg-white rounded-2xl">
                  ${property.specifications.type}</p>
              </div>
              <!-- info box -->
              <div class="info w-full h-auto flex flex-col items-start justify-between pt-4">

                <div class="w-full">
                  <div class="info-top w-full flex justify-start items-center gap-2">
                    <h3 class="text-[24px] font-medium tracking-[.6px] w-full">${property.name}
                    </h3>

                  </div>
                  <p class="inline-block mt-2 text-[#333]">
                    <span><i class="ri-map-pin-2-line"></i></span>
                    ${property.address}
                  </p>
                </div>

                <h5 class="text-[24px] font-medium my-4">${property.price}</h5>
                <div class="project-btn w-full h-auto flex flex-col justify-center items-start gap-8">
                  <!-- property info -->
                  <div class="property-info">
                    <ul class="w-full h-full flex justify-start items-center gap-6">
                      <li class="w-fit flex items-center gap-2">
                        <div class="img">
                          <img src="../src/assets/images/properties/icon/measure.svg" alt="icon image for properties">
                        </div>
                        <p class="text-[#333]">${property.specifications.carpet_area}</p>
                      </li>
                      <li class="w-fit flex items-center gap-2">
                        <div class="img">
                          <img src="../src/assets/images/properties/icon/bed.svg" alt="icon image for properties">
                        </div>
                        <p class="text-[#333]">${property.specifications.bedrooms}</p>
                      </li>
                      <li class="w-fit flex items-center gap-2">
                        <div class="img">
                          <img src="../src/assets/images/properties/icon/bathroom.svg" alt="icon image for properties">
                        </div>
                        <p class="text-[#333]">${property.specifications.bathrooms}</p>
                      </li>
                      <li class="w-fit flex items-center gap-2">
                        <div class="img">
                          <img src="../src/assets/images/properties/icon/kitchen.svg" alt="icon image for properties">
                        </div>
                        <p class="text-[#333]">${property.specifications.kitchen}</p>
                      </li>
                    </ul>
                  </div>
                  <a class="btn-style btn-style-outline">
                    <div class="btn-slide">
                      <span>View</span> <span>Property</span>
                      <span><i class="ri-corner-down-right-fill"></i></span>
                    </div>
                    <div class="btn-hover">
                      <span>View</span> <span>Property</span>
                      <span><i class="ri-corner-down-right-fill"></i></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
      `;

      card.addEventListener("click", () => {
        window.location.href = `property_details.html?id=${property.id}`;
      });
      propertiesContainer.appendChild(card);
    });
  } catch (error) {
    // catch any error
    console.error("data loading error");
  }
}
loadAndDisplayItems();

