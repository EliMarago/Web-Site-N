document.getElementById("logo").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = window.location.origin + "/index.html";
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//typing text
const text = "Il punto cassa più smart per la tua attività";
const target = document.getElementById("typing-text");

let i = 0;
function type(){
  if(i<text.length){
    target.textContent += text.charAt(i)
    i++
    setTimeout(type,90)
  }else{
    target.classList.remove("blinking")
    target.style.borderRight = "none"
  }
}
target.textContent = ""
target.classList.add("blinking")  
type();