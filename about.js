document.querySelectorAll('.learn-more').forEach((button) => {
    button.addEventListener('click', () => {
      alert('Learn More button clicked!');
    });
  });


  let currentIndex = 0;


function showImage(index) {
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;


    // Hide all images
    images.forEach(image => image.classList.remove('active'));


    // Show the image at the current index
    images[index].classList.add('active');
}


function scrollImages(direction) {
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;


    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    }


    showImage(currentIndex);
}


// Initialize the first image
showImage(currentIndex);


