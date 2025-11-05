//.....................hero image scroll animation..............//
let heroImgBox = document.querySelector(".hero-image .img-box");
// console.log(heroImgBox);

window.addEventListener("scroll", (e) => {
  let windowScrollPosition = window.scrollY;
  let maxScroll = document.body.clientHeight - window.innerHeight;
  let scrollFraction = windowScrollPosition / maxScroll;

  let minWidth = 70;
  let maxWidth = 900;
  // linear interpolation
  let width = minWidth + (maxWidth - minWidth) * scrollFraction;
  heroImgBox.style.width = `${Math.min(Math.max(width, minWidth), maxWidth)}%`;

  if (window.innerWidth < 768) {
    let minWidth = 85;
    let maxWidth = 800;
    // linear interpolation
    let width = minWidth + (maxWidth - minWidth) * scrollFraction;
    heroImgBox.style.width = `${Math.min(
      Math.max(width, minWidth),
      maxWidth
    )}%`;
  }
});

//...................trust number show.............//

//...................blog post horizontal scroll............//

//..............testimonial slide.................//
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonial-splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    height: "100%",
    arrows: false,
    pagination: false,
    gap: "0",
    keyboard: "global",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });
  splide.mount();
});

//....................blog-splide................//
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".blog-splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    height: "100%",
    arrows: false,
    pagination: false,
    gap: "0",
    keyboard: "global",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });
  splide.mount();

  // Play / Pause buttons
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  playBtn.addEventListener("click", () => splide.Components.Autoplay.play());
  pauseBtn.addEventListener("click", () => splide.Components.Autoplay.pause());
});
