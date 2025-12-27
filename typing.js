const texts = [
  "Web development",
  "Ai engginering",
  "Content creator",
  "Game dev begginer"
];
const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Mengetik
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1000); // jeda sebelum hapus
    }
  } else {
    // Menghapus
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  const speed = isDeleting ? 50 : 50;
  setTimeout(typeEffect, speed);
}

typeEffect();