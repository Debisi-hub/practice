document.querySelectorAll(".nav-links a").forEach(link => {
    
    if (link.href === window.location.href) {
    link.classList.add("active");
    }
    
    
    link.addEventListener("click", function() {
    document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    });
    });
    


    const toggleBtn = document.querySelector(".why-verify .right p a");
const extraInfo = document.querySelector(".extra-info");
const chevron = document.querySelector(".why-verify .right i");

toggleBtn.addEventListener("click", function(e) {
    e.preventDefault();

    extraInfo.classList.toggle("show");
    chevron.classList.toggle("rotate");

    // toggle link text
    toggleBtn.textContent = extraInfo.classList.contains("show") ? "Hide" : "Show";
});
