const searchModal = document.getElementById("searchModal");
const openSearchBtn = document.getElementById("openSearchBtn");
const closeSearchBtn = document.getElementById("closeSearchBtn");


openSearchBtn.onclick = function() {
    searchModal.style.display = "block";
}
closeSearchBtn.onclick = function() {
    searchModal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == searchModal) {
      searchModal.style.display = "none";
    }
  }
  function searchFunction() {
    const query = document.getElementById("searchInput").value;
    alert("Siz qidirgan: " + query);
    searchModal.style.display = "none"; 
  }




  // Elementlarni olish
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

// Burger tugmasi bosilganda menyuni ochish va yopish
burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
}

// Sahifaning yuqorisiga qaytarish funksiyasi
function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector(".close");
menu.addEventListener("click", () => {
    menuMobile.classList.add("activ");
})
close.addEventListener("click", () => {
    menuMobile.classList.remove("activ");
})