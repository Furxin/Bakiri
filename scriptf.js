// Toggle Description and Ingredients
const toggleTitles = document.querySelectorAll('.toggle-title');

toggleTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Find the next sibling element (toggle-content)
    const content = title.nextElementSibling;

    // Toggle the 'active' class and show/hide content
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Function to toggle the modal
const addToCartButton = document.getElementById('AddToCart');
const modal = document.getElementById('orderModal');
const closeButton = document.getElementById('submitOrder');

// Show the modal when 'Add to Cart' is clicked
addToCartButton.addEventListener('click', function() {
  modal.style.display = 'block'; // Show modal
});

// Hide the modal when 'Submit Order' is clicked
closeButton.addEventListener('click', function() {
  const pickupTime = document.getElementById('pickupTime').value;
  const quantity = document.getElementById('quantity').value;

  if (!pickupTime) {
    alert('Please select a valid pick-up time!');
    return;
  }

  const orderNumber = Math.floor(Math.random() * 1000000); // 6-digit order number
  const totalPrice = quantity * 250; // Price calculation

  // Display receipt
  alert(`
    Order Number: ${orderNumber}
    Quantity: ${quantity}
    Pick-up Time: ${pickupTime}
    Total: ₱${totalPrice}
  `);

  modal.style.display = 'none'; // Close modal after submission
});

// Quantity control functionality
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const quantityInput = document.getElementById('quantity');

// Increase quantity
increaseButton.addEventListener('click', function() {
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
});

// Decrease quantity
decreaseButton.addEventListener('click', function() {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
  }
});

// Close modal if clicked outside (optional)
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
