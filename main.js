// Page
const movingBg = document.getElementById("moving-bg");
const voucher = document.getElementById("voucher");
const member = document.getElementById("member");
const qrCode = document.getElementById("qrCode");

const passwordInput = document.getElementById("Password");
const password = document.getElementById("password");

function moveBackground(targetElement) {
  // Dapatkan posisi elemen target relatif terhadap body/viewport
  const targetRect = targetElement.getBoundingClientRect();
  const containerRect = document
    .getElementById("containerSwapMode")
    .getBoundingClientRect();

  // Hitung posisi `top` dan `left` relatif ke container
  const newTop = targetRect.top - containerRect.top;
  const newLeft = targetRect.left - containerRect.left;

  // Terapkan perubahan posisi menggunakan style
  movingBg.style.top = `${newTop}px`;
  movingBg.style.left = `${newLeft}px`;

  // Opsi: Jika ingin mengubah ukuran juga
  movingBg.style.width = `${targetRect.width}px`;
  movingBg.style.height = `${targetRect.height}px`;
}

// Tambahkan event listener untuk setiap elemen target
voucher.addEventListener("click", () => {
  moveBackground(voucher);
  voucher.classList.add("text-white");
  member.classList.remove("text-white");
  qrCode.classList.remove("text-white");

  password.classList.add("hidden");
});

member.addEventListener("click", () => {
  moveBackground(member);
  voucher.classList.remove("text-white");
  member.classList.add("text-white");
  qrCode.classList.remove("text-white");

  password.classList.remove("hidden");
});

qrCode.addEventListener("click", () => {
  moveBackground(qrCode);
  voucher.classList.remove("text-white");
  member.classList.remove("text-white");
  qrCode.classList.add("text-white");

  password.classList.add("hidden");
});

// Pindahkan background ke posisi target 1 saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  moveBackground(voucher);
  voucher.classList.add("text-white");

  password.classList.add("hidden");
});

// Password
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  if (eye.classList.contains("fa-eye")) {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }

  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";

  passwordInput.setAttribute("type", type);
});

// Function Menu Harga
const priceMenu = document.getElementById("priceMenu");
const navbar = document.getElementById("navbar");

function closeMenu() {
  priceMenu.classList.remove("translate-0");
  priceMenu.classList.add("-translate-y-full");
  navbar.classList.remove("-translate-y-full");
  navbar.classList.add("translate-0");
}

function openMenu() {
  priceMenu.classList.remove("-translate-y-full");
  priceMenu.classList.add("translate-0");
  navbar.classList.remove("translate-0");
  navbar.classList.add("-translate-y-full");
}

// Alert
function openAlert() {
  const alert = document.getElementById("alert");

  alert.classList.remove("scale-0");
  alert.classList.add("scale-100");
}

function closeAlert() {
  const alert = document.getElementById("alert");

  alert.classList.remove("scale-100");
  alert.classList.add("scale-0");

  moveBackground(voucher);
  voucher.classList.add("text-white");
  member.classList.remove("text-white");
  qrCode.classList.remove("text-white");
}

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  speed: 500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
