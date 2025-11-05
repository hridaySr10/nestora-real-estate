//...............data show by fetching.................//

let getPropertyId = () => {
  let propertyUrlId = new URLSearchParams(window.location.search);
  // console.log(propertyUrlId);
  return propertyUrlId.get("id");
};

//fetch
async function loadPropertyDetails() {
  let productId = getPropertyId();
  // console.log(productId);//T001

  let propertyDetailsBox = document.querySelector(".page-property-details");

  if (!productId) {
    propertyDetailsBox.textContent = "No property found";
    return;
  }
  try {
    let response = await fetch("../src/assets/properties.json");
    if (!response.ok) {
      throw new Error("failed to load");
    }

    let allPropertyDetails = await response.json();
    // console.log(allPropertyDetails);
    let filteredPropertyDetails = allPropertyDetails.filter(
      (propertyDetails) => {
        return propertyDetails.id === productId;
      }
    );
    // console.log(filteredPropertyDetails);

    if (filteredPropertyDetails.length === 0) {
      propertyDetailsBox.innerHTML = `<p>Nothing to show in this category</p>`;
      return;
    }
    propertyDetailsBox.innerHTML = "";

    filteredPropertyDetails.forEach((pd) => {
      let details = document.createElement("div");

      details.innerHTML = `
        <!-- ========== Start section-property image ========== -->
    <section class="splide w-full h-[800px] overflow-hidden property-images " id="property-details-splide"
      aria-label="property details splide overflow-hidden">
      <div class="splide__track w-full h-full">
        <ul class="splide__list w-full h-full">
          <li class="splide__slide w-full h-full bg-amber-50 overflow-hidden">
            <img src="${pd.images[0]}" alt="property details image" class="img-set">
          </li>
          <li class="splide__slide w-full h-full bg-amber-200 overflow-hidden">
            <img src="${pd.images[1]}" alt="property details image" class="img-set">
          </li>
          <li class="splide__slide w-full h-full bg-amber-600 overflow-hidden">
            <img src="${pd.images[2]}" alt="property details image" class="img-set">
          </li>
          <li class="splide__slide w-full h-full bg-amber-400 overflow-hidden">
            <img src="${pd.images[3]}" alt="property details image" class="img-set">
          </li>
        </ul>
      </div>
    </section>
    <!-- ========== End section-property image ========== -->
    <section class="section-property-details w-full h-auto overflow-hidden">
      <div class="container">
        <div class="property-details-grid-box w-full h-full grid grid-rows-[280px_1fr] gap-24">
          <!-- heading -->
          <div class="property-heading bg-[#FBF8F2] w-full h-full flex-center !flex-col gap-4 mt-4">
            <h1 class="section-heading !text-center uppercase">${pd.name}</h1>
            <div class="proprty-side-details w-full flex justify-center items-center gap-4">
              <p class="py-1 px-3 !text-[16px] border-1 rounded-3xl border-solid border-[#333]">${pd.specifications.type}</p>
              <p class="py-1 px-3 !text-[16px] border-1 rounded-3xl border-solid border-[#333]">${pd.price_digit}</p>
            </div>
          </div>
          <!-- property details start -->
          <div class="property-details w-full h-full grid grid-cols-[520px_1fr] gap-16 pt-4">
            <!-- left-desc-main -->
            <div class="left-details w-full h-full flex flex-col justify-between">
              <div>
                <!-- location -->
                <div class="property-location border-b-1 border-solid border-[#33333344] pb-4 ">
                  <div class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                    Location</div>
                  <p class=" font-[400] text-[#333]">${pd.address}</p>
                </div>
                <!-- desc flex -->
                <div class="property-description w-full flex justify-between items-start gap-8">

                  <!-- left-desc -->
                  <div class="left-desc flex flex-col justify-start items-start w-full h-auto py-4 gap-4">
                    <!-- area -->
                    <div class="property-area w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        living area</div>
                      <p class=" font-[400] text-[#333]">${pd.specifications.carpet_area}</p>
                    </div>
                    <!-- type -->
                    <div class="property-type w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        Property type</div>
                      <p class=" font-[400] text-[#333]">${pd.specifications.type}</p>
                    </div>
                    <!-- facing -->
                    <div class="property-facing w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        Facing Direction
                      </div>
                      <p class=" font-[400] text-[#333]">${pd.facing_direction}</p>
                    </div>
                  </div>
                  <!-- right-desc -->
                  <div class="right-desc flex flex-col justify-start items-start w-full h-auto py-4 gap-4">
                    <!-- bedrooms -->
                    <div class="property-area w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        Bedrooms</div>
                      <p class=" font-[400] text-[#333]">${pd.specifications.bedrooms}</p>
                    </div>
                    <!-- bathrooms -->
                    <div class="property-type w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        Bathrooms</div>
                      <p class=" font-[400] text-[#333]">${pd.specifications.bathrooms}</p>
                    </div>
                    <!-- kitchen -->
                    <div class="property-facing w-full border-b-1 border-solid border-[#33333344] py-4">
                      <div
                        class="text-[16px] sm:text-[18px] font-[500] text-black uppercase tracking-[1px] mb-1 sm:mb-2">
                        Kitchen</div>
                      <p class=" font-[400] text-[#333]">${pd.specifications.kitchen}</p>
                    </div>
                  </div>

                </div>
              </div>
              <!-- btn -->
              <div class="btn w-full h-auto property-details-btn">
                <a href="#" class="btn-style btn-style-outline !w-full">
                  <div class="btn-slide flex-center">
                    <span>Ask for</span> <span>details</span>
                    <span><i class="ri-corner-down-right-fill"></i></span>
                  </div>
                  <div class="btn-hover flex-center w-full">
                    <span>Ask for</span> <span>details</span>
                    <span><i class="ri-corner-down-right-fill"></i></span>
                  </div>
                </a>
              </div>

            </div>
            <!-- right-desc-main -->
            <div class="right-details w-[800px] justify-self-end flex flex-col items-start justify-start gap-16">

              <!-- big desc -->
              <div class="top-desc">
                <p class="text-[#333333] !leading-[1.7]">
                ${pd.description}
                </p>
              </div>
              <!-- facilities -->

              <div class="btm facilities">
                <h5 class="text-[2rem] font-[600]">Property Amenities</h5>
                <div class="amenities-box w-full flex flex-wrap items-start justify-start mt-5 gap-5">
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-shield-line text-[#333] !text-[20px]"></i></span>
                    ₹85,00,000
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-tree-line text-[#333] !text-[20px]"></i></span>
                    Garden Space
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-fire-line text-[#333] !text-[20px]"></i></span>
                    Fireplace
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-ping-pong-line text-[#333] !text-[20px]"></i></span>
                    Gaming Facilities
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-wifi-line text-[#333] !text-[20px]"></i></span>
                    High-Speed Internet
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><img
                        src="https://cdn.prod.website-files.com/67af217c54a1be5521c1a630/67b2ce568c92c6e1ebc173a2_ic-pool.svg"
                        alt=""></span>
                    Swimming Pool
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><i class="ri-contrast-drop-2-line"></i></span>
                    Water Filtration
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><img
                        src="https://cdn.prod.website-files.com/67af217c54a1be5521c1a630/67b2ce7fb192f4effd931414_ic-kitchen.svg"
                        alt="svg icon"></span>
                    Modern Kitchen
                  </p>
                  <p class="py-1 px-3 !text-[18px] text-[#333] bg-[#FBF8F2] rounded-3xl flex-center gap-2">
                    <span><img
                        src="https://cdn.prod.website-files.com/67af217c54a1be5521c1a630/67b2cea158524a9ae4f905cc_ic-maintenance.svg"
                        alt="svg icon"></span>
                    Maintenance Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ========== End section-property-details ========== -->
      `;

      propertyDetailsBox.appendChild(details);

      var splide = new Splide("#property-details-splide", {
        type: "loop",
        perPage: 1,
        focus: "center",
        rewind: true,
        autoplay: true,
        interval: 3500,
        pauseOnHover: false,
        height: "100%",
        padding: "5rem",
        arrows: true,
        pagination: true,
        gap: "1rem",
        keyboard: "global",
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        breakpoints: {
          720: {
            padding: "0",
            arrows: false,
          },
        },
      });

      splide.mount();
    });
  } catch {}
}
loadPropertyDetails();
