(()=>{let e=document.querySelector("#menu-bar"),o=document.querySelector(".navbar");e.onclick=()=>{e.classList.toggle("fa-times"),o.classList.toggle("active")},window.onscroll=()=>{e.classList.remove("fa-times"),o.classList.remove("active"),window.scrollY>60?document.querySelector("#scroll-top").classList.add("active"):document.querySelector("#scroll-top").classList.remove("active")},window.onload=void setInterval((function(){document.querySelector(".loader-container").classList.add("fade-out")}),3e3)})();