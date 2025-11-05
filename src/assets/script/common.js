//.....................hamburger.............//
let hamburger = document.querySelector(".hamburger");

let offcanvasMain = document.querySelector(".offcanvas-main");

let main = document.querySelector("main");
let headerFullBody = document.querySelector("body");
// console.log(headerFullBody);

hamburger.addEventListener("click", () => {
  offcanvasMain.classList.toggle("offcanvas-slide-btm");
  setTimeout(() => {
    headerFullBody.classList.toggle("overflow-hidden");
  }, 450);
});
//.................offcanvas nav gone when click.............//
let offcanvasBoxAnchors = document.querySelectorAll(".offcanvas-box nav a");
let menuToggles = document.querySelectorAll(".menu-toggle");
// console.log(menuToggles);

// console.log(offcanvasBox);
offcanvasBoxAnchors.forEach((a) => {
  a.addEventListener("click", () => {
    menuToggles.forEach((btn) => {
      btn.checked = false;
    });
    offcanvasMain.classList.remove("offcanvas-slide-btm");
    headerFullBody.classList.remove("overflow-hidden");
  });
});
//..................section recent projects filter btn.............//
let projectFilterBtns = document.querySelectorAll(
  ".section-recent-projects .filter-btns a, .section-properties .filter-btns a"
);
let projectBox = document.querySelectorAll(".project-box");

// console.log(projectFilterBtns);
projectFilterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    projectFilterBtns.forEach((btn) => {
      btn.classList.remove("filter-btn-active");
    });
    filterBtn.classList.add("filter-btn-active");

    // project box show
    projectBox.forEach((box) => {
      box.classList.remove("project-box-active");
    });
    let projectId = filterBtn.getAttribute("data-projects");
    let mainProjectBox = document.querySelector(projectId);
    mainProjectBox.classList.add("project-box-active");
  });
});
//...................resect project anchor test slide prevent................//
document.querySelectorAll(".scroll-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-recent-projects").scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelectorAll(".scroll-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-properties").scrollIntoView({
      behavior: "smooth",
    });
  });
});

//....................hero text animation............//
const sr = ScrollReveal({
  duration: 1500,
  distance: "100px",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  opacity: 1,
  scale: 1,
  viewFactor: 0.15, // start when 15% visible
  reset: false,
  mobile: true,
});

sr.reveal(".hero-text .text-1 h1", {
  origin: "bottom",
  delay: 200,
});
sr.reveal(".hero-text .text-2 h1", {
  origin: "bottom",
  delay: 400,
});
sr.reveal(".hero-text .btm-text p", {
  origin: "bottom",
  delay: 700,
});
sr.reveal(".hero-text .hero-btn", {
  origin: "bottom",
  delay: 700,
});
sr.reveal(".hero-fixed-img .text", {
  origin: "bottom",
  delay: 1500,
  opacity: 0,
});
sr.reveal(".section-cta .cta-img-box", {
  origin: "bottom",
  distance: "200px",
  delay: 400,
  opacity: 1,
  scale: 0.95,
});
sr.reveal(
  ".section-cta .overlay-text h2, .section-cta .overlay-text .cta-btn",
  {
    origin: "bottom",
    delay: 600,
    opacity: 1,
    scale: 0.95,
    interval: 400,
  }
);
sr.reveal(
  ".about-box .mdl-img img , .section-recent-projects #project-box-one .card img, .section-blog .blog-card .img-box img",
  {
    opacity: 1,
    distance: "0px",
    origin: "center",
    delay: 300,
    duration: 800,
    reset: true,
    beforeReveal: function (el) {
      el.classList.add("revealed");
    },
  }
);

// Apply ScrollReveal to each .f-1 with different transform
const translateMap = [
  "-20%",
  "-40%",
  "0%",

  "-60%",
  "-20%",

  "-40%",
  "-20%",
  "-80%",
];

//...............accordion toggle.....................//

document.querySelectorAll(".accordion-heading").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionBox = header.parentElement;

    const body = accordionBox.querySelector(".accordion-body");
    const checkbox = accordionBox.querySelector(".menu-toggle");
    const isOpen = checkbox.checked;

    // Close all others
    document.querySelectorAll(".accordion-box").forEach((other) => {
      if (other !== accordionBox) {
        other.querySelector(".accordion-body").style.maxHeight = null;
        other.querySelector(".menu-toggle").checked = false;
      }
    });

    // Toggle current
    if (isOpen) {
      body.style.maxHeight = null;
      checkbox.checked = false;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      checkbox.checked = true;
    }
  });
});

//.....................trust number slide.................//

let numbers = document.querySelectorAll(".f-1");

for (let i = 1; i <= 5; i++) {
  // console.log(i);
  let numberDiv = document.createElement("span");
  numberDiv.classList.add("text-[48px]");

  let convertTextNode = document.createTextNode(i);
  // console.log(convertTextNode);

  numberDiv.appendChild(convertTextNode);
  // console.log(numberDiv);

  numbers.forEach((el) => {
    el.appendChild(numberDiv.cloneNode(true));
  });
}
// Apply ScrollReveal to each .f-1 with different transform in bottom
numbers.forEach((el, i) => {
  sr.reveal(el, {
    duration: 2000,
    distance: "80px",
    origin: "bottom",
    beforeReveal: () => {
      el.style.transform = `translateY(${translateMap[i] || "0%"})`;
    },
  });
});
