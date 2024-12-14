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

// Modal related
const modal = document.getElementById("modal");
const addToCartButton = document.getElementById("AddToCart");
const closeModal = document.querySelector(".close");

addToCartButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Open the modal when Add to Cart is clicked
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // Close the modal
});

// Submit Order Button Functionality
const submitOrderButton = document.getElementById('submitOrder');

submitOrderButton.addEventListener('click', () => {
  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;
  
  // Validate if pickup time is within 6 AM and 9 PM
  const hours = parseInt(pickupTime.split(":")[0]);
  if (hours < 6 || hours > 21) {
    alert("Pickup time must be between 6:00 AM and 9:00 PM.");
    return; // Prevent order submission if time is invalid
  }

  const orderNumber = Math.floor(Math.random() * 900000) + 100000;  // Generate a 6-digit random number
  const totalAmount = 250;  // Assuming ₱250 per cake
  
  const receipt = `Receipt:
  Order Number: ${orderNumber}
  Pickup Date: ${pickupDate}
  Pickup Time: ${pickupTime}
  Quantity: 1
  Total Amount: ₱${totalAmount}`;

  alert(receipt); // Show the receipt as an alert
  modal.style.display = 'none'; // Close the modal after order submission
});
