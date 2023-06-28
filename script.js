// saat di scroll akan menjalankan fungsi myFunction
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
