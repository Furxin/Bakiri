// Get the modal and button elements
const modal = document.getElementById('modal');
const addToCartBtn = document.getElementById('AddToCart');
const closeBtn = document.querySelector('.modal-footer button'); // Close button inside modal
const decreaseBtn = document.getElementById('decreaseQuantity');
const increaseBtn = document.getElementById('increaseQuantity');
const quantityDisplay = document.getElementById('quantityDisplay');
const pickupDateInput = document.getElementById('pickupDate');
const pickupTimeInput = document.getElementById('pickupTime');
const submitOrderBtn = document.getElementById('submitOrder');

// Initialize quantity and product price
let quantity = 1;
const productPrice = 250; // Price for the chocolate cake (₱250)

// Toggle function for Description and Ingredients
const toggleSections = document.querySelectorAll('.toggle-title');

toggleSections.forEach(title => {
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

// Show modal when "Add to Cart" is clicked
addToCartBtn.addEventListener('click', function() {
  modal.style.display = 'flex'; // Display modal
});

// Close the modal when close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide modal
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide modal if clicked outside
  }
});

// Adjust quantity
decreaseBtn.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

increaseBtn.addEventListener('click', function() {
  quantity++;
  quantityDisplay.textContent = quantity;
});

// Handle order submission
submitOrderBtn.addEventListener('click', function() {
  const pickupDate = pickupDateInput.value;
  const pickupTime = pickupTimeInput.value;
  
  // Check if date and time are provided
  if (!pickupDate || !pickupTime) {
    alert('Please select a pickup date and time.');
    return;
  }

  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random order number

  // Calculate the total amount
  const totalAmount = productPrice * quantity;

  // Generate the receipt
  const receipt = `
    <div style="font-family: 'Fauna One', serif; padding: 20px; border: 2px solid #f8be49; max-width: 400px; margin: 20px auto; text-align: center;">
      <h2>Order Receipt</h2>
      <p><strong>Order Number:</strong> #${orderNumber}</p>
      <p><strong>Product:</strong> Chocolate Cake</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Pickup Date:</strong> ${pickupDate}</p>
      <p><strong>Pickup Time:</strong> ${pickupTime}</p>
      <p><strong>Total Amount:</strong> ₱${totalAmount}</p>
    </div>
  `;

  // Display the receipt (you can append it to the body or display in another way)
  document.body.innerHTML += receipt;

  // Hide the modal after order submission
  modal.style.display = 'none';
});

