document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("header a");
    const currentUrl = window.location.href;
  
    links.forEach(link => {
        link.classList.remove("active");
        link.classList.add("inactive"); 

        if (link.href === currentUrl) {
          link.classList.add("active"); 
          link.classList.remove("inactive"); 
        }
      });
    });
