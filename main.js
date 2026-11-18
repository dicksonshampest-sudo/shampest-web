// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
  });
}

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentGallery = [];
let currentIndex = 0;

function openLightbox(index, galleryItems) {
  currentGallery = galleryItems;
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const item = currentGallery[currentIndex];
  lightboxImg.src = item.src;
  lightboxCaption.textContent = item.caption || '';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

function navigateLightbox(direction) {
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < currentGallery.length) {
    currentIndex = newIndex;
    updateLightbox();
  }
}

// ===== HOME GALLERY =====
document.addEventListener('DOMContentLoaded', () => {
  const homeGalleryItems = document.querySelectorAll('#homeGallery .gallery-item');
  const galleryArray = [];
  homeGalleryItems.forEach((item, idx) => {
    const img = item.querySelector('img');
    galleryArray.push({
      src: img.src,
      caption: img.alt || `Photo ${idx+1}`
    });
    item.addEventListener('click', () => {
      openLightbox(idx, galleryArray);
    });
  });
});