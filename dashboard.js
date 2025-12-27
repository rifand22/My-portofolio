// ambil elemen
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const page = document.querySelector(".page");

// klik tombol garis 3
btn.addEventListener("click", function (e) {
  e.stopPropagation(); // supaya tidak langsung ketutup

  menu.classList.toggle("active"); // buka / tutup menu
  page.classList.toggle("blur");   // blur halaman
  btn.classList.toggle("active");  // animasi garis
});

// klik di mana saja untuk menutup
document.addEventListener("click", function () {
  menu.classList.remove("active");
  page.classList.remove("blur");
  btn.classList.remove("active");
});

// supaya klik menu tidak menutup
menu.addEventListener("click", function (e) {
  e.stopPropagation();
});