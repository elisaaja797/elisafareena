// ====== SEMBUNYIKAN SEMUA SECTION SAAT AWAL ======
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none";
  });
});

// ====== FUNCTION TAMPILKAN SECTION ======
function showSection(sectionId) {
  document.getElementById("mainMenu").style.display = "none";

  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

// ====== KEMBALI KE MENU ======
function backMenu() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById("mainMenu").style.display = "block";
}

// ====== BUKA CV ======
function openCV() {
  window.open("https://drive.google.com/YOUR_CV_LINK", "_blank");
}

// ====== PORTFOLIO BUTTONS ======
document.addEventListener("DOMContentLoaded", function () {

  const ilustrasiBtn = document.getElementById("ilustrasiBtn");
  const manualBtn = document.getElementById("manualBtn");
  const logoBtn = document.getElementById("logoBtn");

  if (ilustrasiBtn) {
    ilustrasiBtn.addEventListener("click", function () {
      window.open("https://drive.google.com/YOUR_ILUSTRASI_LINK", "_blank");
    });
  }

  if (manualBtn) {
    manualBtn.addEventListener("click", function () {
      window.open("https://drive.google.com/YOUR_MANUAL_LINK", "_blank");
    });
  }

  if (logoBtn) {
    logoBtn.addEventListener("click", function () {
      window.open("https://drive.google.com/YOUR_LOGO_LINK", "_blank");
    });
  }

});