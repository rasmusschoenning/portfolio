// Slides: edit this list to add, remove or reorder projects.
// Each slide's caption is built the same way from these fields:
//   title       — project title, shown larger.
//   designedAt  — studio that designed the work, e.g. "Schønning Jart".
//   client      — the client/institution, e.g. "SMK, National Gallery of Denmark".
//   photography — photographer credit. Leave as "" if there is none to show.
// type "video" plays an mp4 (src) with a poster frame (poster) instead of a static image.
//
// Order below follows the order the images were uploaded (chronological).
const SLIDES = [
  {
    src: "images/rodin-1.jpg",
    title: "Rodin – Displacements",
    designedAt: "Studio Atlant",
    client: "Glyptoteket",
    photography: "Studio Atlant",
  },
  {
    src: "images/rodin-3.jpg",
    title: "Rodin – Displacements",
    designedAt: "Studio Atlant",
    client: "Glyptoteket",
    photography: "Studio Atlant",
  },
  {
    src: "images/rodin-2.jpg",
    title: "Rodin – Displacements",
    designedAt: "Studio Atlant",
    client: "Glyptoteket",
    photography: "Studio Atlant",
  },
  {
    src: "images/rodin-4.jpg",
    title: "Rodin – Displacements",
    designedAt: "Studio Atlant",
    client: "Glyptoteket",
    photography: "Studio Atlant",
  },
  {
    src: "images/dreyers-fond-1.jpg",
    title: "Dreyers Fond",
    designedAt: "Studio Atlant",
    client: "Dreyers Fond",
    photography: "",
  },
  {
    src: "images/huse-i-farver-1.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/huse-i-farver-2.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/huse-i-farver-3.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/huse-i-farver-4.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/huse-i-farver-5.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/huse-i-farver-6.jpg",
    title: "Huse i Farver",
    designedAt: "Studio Atlant",
    client: "Søren Vadstrup",
    photography: "Studio Atlant",
  },
  {
    src: "images/carl-bloch-3.jpg",
    title: "Carl Bloch – Seduced",
    designedAt: "Schønning Jart",
    client: "SMK, National Gallery of Denmark",
    photography: "SMK",
  },
  {
    src: "images/carl-bloch-4.jpg",
    title: "Carl Bloch – Seduced",
    designedAt: "Schønning Jart",
    client: "SMK, National Gallery of Denmark",
    photography: "SMK",
  },
  {
    src: "images/carl-bloch-1.jpg",
    title: "Carl Bloch – Seduced",
    designedAt: "Schønning Jart",
    client: "SMK, National Gallery of Denmark",
    photography: "SMK",
  },
  {
    src: "images/carl-bloch-2.jpg",
    title: "Carl Bloch – Seduced",
    designedAt: "Schønning Jart",
    client: "SMK, National Gallery of Denmark",
    photography: "SMK",
  },
  {
    src: "images/planetarisk-1.jpg",
    title: "Planetarisk Forsamling",
    designedAt: "Studio Atlant",
    client: "Planetarisk Forsamling",
    photography: "",
  },
  {
    src: "images/museion-1.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-3.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-4.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-5.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-6.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-7.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    src: "images/museion-8.jpg",
    title: "Medical Museion, Charlottenborg – The World Is In You",
    designedAt: "Schønning Jart",
    client: "Medical Museion",
    photography: "David Stjernholm",
  },
  {
    type: "video",
    src: "videos/bloom-bus.mp4",
    poster: "images/bloom-bus-poster.jpg",
    title: "Bloom Festival",
    designedAt: "Studio C",
    client: "Bloom Festival",
    photography: "",
  },
  {
    src: "images/ciff-2.jpg",
    title: "CIFF",
    designedAt: "Studio C",
    client: "",
    photography: "Emil Hartvig",
  },
  {
    src: "images/ciff-1.jpg",
    title: "CIFF",
    designedAt: "Studio C",
    client: "",
    photography: "Emil Hartvig",
  },
  {
    src: "images/golden-days-1.jpg",
    title: "Golden Days",
    designedAt: "Studio C",
    client: "Golden Days",
    photography: "Emil Hartvig",
  },
  {
    src: "images/golden-days-2.jpg",
    title: "Golden Days",
    designedAt: "Studio C",
    client: "Golden Days",
    photography: "Emil Hartvig",
  },
  {
    src: "images/ma-2.jpg",
    title: "M.A.",
    designedAt: "Studio C",
    client: "",
    photography: "Emil Hartvig",
  },
  {
    src: "images/ma-1.jpg",
    title: "M.A.",
    designedAt: "Studio C",
    client: "",
    photography: "Emil Hartvig",
  },
  {
    type: "video",
    src: "videos/nffs.mp4",
    poster: "images/nffs-poster.jpg",
    title: "Nyt Forum For Skrift",
    designedAt: "Schønning Jart",
    client: "Nyt Forum For Skrift",
    photography: "",
  },
  {
    src: "images/per-bak-jensen-1.jpg",
    title: "Per Bak Jensen – Jeg vil lære om livet",
    designedAt: "Studio Atlant",
    client: "Sorø Kunstmuseum",
    photography: "Narayana Press",
  },
  {
    type: "video",
    src: "videos/sitting-ugly.mp4",
    poster: "images/sitting-ugly-poster.jpg",
    title: "Sitting Ugly",
    designedWith: "Emil Willumsen & Kristoffer Sølling",
    client: "Self Initiated",
    photography: "",
  },
  {
    src: "images/smk-thy-2.jpg",
    title: "SMK Thy – Through the Lens",
    designedAt: "Schønning Jart",
    client: "SMK Thy, National Gallery of Denmark",
    photography: "",
  },
  {
    src: "images/smk-thy-1.jpg",
    title: "SMK Thy – Through the Lens",
    designedAt: "Schønning Jart",
    client: "SMK Thy, National Gallery of Denmark",
    photography: "",
  },
  {
    src: "images/climada-1.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
  {
    src: "images/climada-2.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
  {
    src: "images/climada-3.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
  {
    src: "images/climada-4.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
  {
    src: "images/climada-5.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
  {
    src: "images/climada-6.jpg",
    title: "Climada",
    designedAt: "Studio Atlant",
    client: "Climada",
    photography: "Studio Atlant",
  },
];

const SLIDE_DURATION = 6000; // ms

const frame = document.getElementById("slideFrame");
const creditEl = document.getElementById("credit");
const counterEl = document.getElementById("counter");
const stage = document.getElementById("slideshow");
const indexToggle = document.getElementById("indexToggle");
const indexPage = document.getElementById("indexPage");
const indexGrid = document.getElementById("indexGrid");

let current = 0;
let timer = null;
let indexOpen = false;

function buildSlides() {
  SLIDES.forEach((slide, i) => {
    const div = document.createElement("div");
    div.className = "slide" + (i === 0 ? " is-active" : "");
    div.dataset.index = i;

    if (slide.type === "video") {
      const video = document.createElement("video");
      video.src = slide.src;
      if (slide.poster) video.poster = slide.poster;
      video.controls = false;
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.autoplay = true;
      video.disablePictureInPicture = true;
      video.setAttribute("controlsList", "nodownload noplaybackrate nofullscreen");
      div.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = slide.title;
      img.loading = i === 0 ? "eager" : "lazy";
      div.appendChild(img);
    }

    frame.appendChild(div);
  });
}

function buildCreditText(slide) {
  const bits = [];
  if (slide.title) bits.push("Title: " + slide.title);
  if (slide.designedAt) bits.push("Designed at: " + slide.designedAt);
  if (slide.designedWith) bits.push("Designed with: " + slide.designedWith);
  if (slide.client) bits.push("Client: " + slide.client);
  if (slide.photography) bits.push("Photography: " + slide.photography);
  return bits.length ? bits.join(". ") + "." : "";
}

function pauseAllVideos() {
  frame.querySelectorAll("video").forEach((v) => v.pause());
}

function render() {
  const slideEls = frame.querySelectorAll(".slide");
  slideEls.forEach((el, i) => {
    el.classList.toggle("is-active", i === current);
  });
  const slide = SLIDES[current];
  creditEl.textContent = buildCreditText(slide);
  counterEl.textContent =
    String(current + 1).padStart(2, "0") + " / " + String(SLIDES.length).padStart(2, "0");
  pauseAllVideos();

  if (slide.type === "video") {
    const activeVideo = frame.querySelector(".slide.is-active video");
    if (activeVideo) {
      activeVideo.currentTime = 0;
      const playPromise = activeVideo.play();
      if (playPromise) playPromise.catch(() => {});
    }
  }
}

function goTo(index) {
  current = (index + SLIDES.length) % SLIDES.length;
  render();
  resetTimer();
}

function next() {
  goTo(current + 1);
}

function prev() {
  goTo(current - 1);
}

function resetTimer() {
  if (timer) clearTimeout(timer);
  if (SLIDES[current].type === "video") return; // let video play without auto-advancing
  timer = setTimeout(next, SLIDE_DURATION);
}

document.addEventListener("keydown", (e) => {
  if (indexOpen) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// ---------- Index grid ----------

function buildIndexCreditLine(slide) {
  const bits = [];
  if (slide.designedAt) bits.push("Designed at: " + slide.designedAt);
  if (slide.designedWith) bits.push("Designed with: " + slide.designedWith);
  if (slide.client) bits.push("Client: " + slide.client);
  if (slide.photography) bits.push("Photography: " + slide.photography);
  return bits.length ? bits.join(". ") + "." : "";
}

function buildIndexGrid() {
  SLIDES.forEach((slide, i) => {
    const item = document.createElement("div");
    item.className = "index-item";

    const thumb = document.createElement("div");
    thumb.className = "index-thumb";
    const thumbSrc = slide.type === "video" ? slide.poster : slide.src;

    const img = document.createElement("img");
    img.src = thumbSrc;
    img.alt = slide.title;
    img.loading = "lazy";
    thumb.appendChild(img);

    if (slide.type === "video") {
      const play = document.createElement("span");
      play.className = "index-play";
      thumb.appendChild(play);
    }

    const caption = document.createElement("div");
    caption.className = "index-caption";
    caption.textContent = buildCreditText(slide);

    item.appendChild(thumb);
    item.appendChild(caption);
    item.addEventListener("click", () => {
      closeIndex();
      goTo(i);
    });

    indexGrid.appendChild(item);
  });
}

function openIndex() {
  indexOpen = true;
  indexPage.classList.add("is-visible");
  stage.style.display = "none";
  document.getElementById("credit").parentElement.style.display = "none";
  counterEl.style.display = "none";
  indexToggle.textContent = "Close";
  if (timer) clearTimeout(timer);
  pauseAllVideos();
}

function closeIndex() {
  indexOpen = false;
  indexPage.classList.remove("is-visible");
  stage.style.display = "";
  document.getElementById("credit").parentElement.style.display = "";
  counterEl.style.display = "";
  indexToggle.textContent = "Index";
  resetTimer();
  if (SLIDES[current].type === "video") {
    const activeVideo = frame.querySelector(".slide.is-active video");
    if (activeVideo) {
      const playPromise = activeVideo.play();
      if (playPromise) playPromise.catch(() => {});
    }
  }
}

indexToggle.addEventListener("click", () => {
  if (indexOpen) {
    closeIndex();
  } else {
    openIndex();
  }
});

function init() {
  buildSlides();
  buildIndexGrid();
  render();
  resetTimer();

  stage.querySelector(".slide-nav-zone.prev").addEventListener("click", prev);
  stage.querySelector(".slide-nav-zone.next").addEventListener("click", next);
}

init();
