// script.js
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];
  
  let currentIndex = 0;
  
  function updateMainImage() {
    const mainImage = document.getElementById('main-image');
    mainImage.src = images[currentIndex];
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentIndex) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    });
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
  }
  
  function selectImage(index) {
    currentIndex = index;
    updateMainImage();
  }
  
  // Initialize gallery
  updateMainImage();
  