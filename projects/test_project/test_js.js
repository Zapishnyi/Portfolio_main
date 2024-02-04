const trigger = document.querySelector(".trigger")
const wrapper = document.querySelector(".wrapper")


const observer  = new IntersectionObserver((entries)=>{
          entries[0].isIntersecting?wrapper.className="wrapper visible":wrapper.className="wrapper";
})
observer.observe(trigger)
// intersectionObserver.observe(trigger);