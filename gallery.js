// ===== FULL GALLERY PAGE =====
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');
  if (galleryItems.length > 0) {
    const galleryArray = [];
    galleryItems.forEach((item, idx) => {
      const img = item.querySelector('img');
      galleryArray.push({
        src: img.src,
        caption: img.alt || `Photo ${idx+1}`
      });
      item.addEventListener('click', () => {
        // Use the global openLightbox from main.js
        if (typeof openLightbox === 'function') {
          openLightbox(idx, galleryArray);
        }
      });
    });
  }
});