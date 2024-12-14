// Toggle function for Description and Ingredients sections
document.querySelectorAll('.toggle-title').forEach(title => {
  title.addEventListener('click', function () {
    const content = title.nextElementSibling;
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});

// Handle Add to Cart button click to show the modal
const addToCartButton = document.getElementById('AddToCart');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Open modal when "Add to Cart" is clicked
addToCartButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Handle quantity increase and decrease
let quantity = 1;
const quantityDisplay = document.getElementById('quantityDisplay');
const increaseQuantity = document.getElementById('increaseQuantity');
const decreaseQuantity = document.getElementById('decreaseQuantity');

increaseQuantity.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

decreaseQuantity.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

// Handle the submission of the order (displaying a receipt)
const submitOrderButton = document.getElementById('submitOrder');

submitOrderButton.addEventListener('click', () => {
  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;  // Generate a 6-digit random number
  const totalAmount = quantity * 250;  // Assuming ₱250 per cake
  
  const receipt = `Receipt:
  Order Number: ${orderNumber}
  Pickup Date: ${pickupDate}
  Pickup Time: ${pickupTime}
  Quantity: ${quantity}
  Total Amount: ₱${totalAmount}`;

  alert(receipt); // Show the receipt as an alert
  modal.style.display = 'none'; // Close the modal after order submission
});

