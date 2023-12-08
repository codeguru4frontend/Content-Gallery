// Get all thumbnail images and the full image element
const thumbImgs = document.querySelectorAll('.thumb-bar img');
const fullImg = document.querySelector('.full-img .displayed-img');

// Add click event listener to each thumbnail image
thumbImgs.forEach((thumbImg) => {
  thumbImg.addEventListener('click', () => {
    // Remove 'focused' class from previously focused image
    const prevFocused = document.querySelector('.focused');
    if (prevFocused) {
      prevFocused.classList.remove('focused');
    }
    // Add 'focused' class to newly focused image
    thumbImg.classList.add('focused');

    // Change source of full image to clicked thumbnail image
    fullImg.src = thumbImg.src;
  });
});

// Add click event listener to darken button
const darkenBtn = document.querySelector('.dark');
darkenBtn.addEventListener('click', () => {
  // Toggle 'dark' class on full image element
  fullImg.classList.toggle('dark');
});


