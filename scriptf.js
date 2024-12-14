document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Toggle Functionality
  const toggleTitles = document.querySelectorAll('.toggle-title');
  toggleTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Modal and Add to Cart Functionality
  const addToCartButton = document.getElementById('AddToCart');
  const cartModal = document.getElementById('cartModal');
  const confirmOrderButton = document.getElementById('confirmOrder');
  const quantityDisplay = document.getElementById('quantity');
  let quantity = 1;

  const increaseQuantityButton = document.getElementById('increaseQuantity');
  const decreaseQuantityButton = document.getElementById('decreaseQuantity');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      // Show the modal when 'Add to Cart' is clicked
      cartModal.style.display = 'block';
    });
  }

  // Increase and Decrease Quantity
  increaseQuantityButton.addEventListener('click', () => {
    quantity++;
    quantityDisplay.value = quantity;
  });

  decreaseQuantityButton.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.value = quantity;
    }
  });

  // Confirm Order and Generate Receipt
  confirmOrderButton.addEventListener('click', () => {
    const pickupDate = document.getElementById('pickupDate').value;
    const pickupTime = document.getElementById('pickupTime').value;

    if (!pickupDate || !pickupTime) {
      alert('Please select both pickup date and time.');
      return;
    }

    const itemPrice = 250; // Price per item
    const totalAmount = itemPrice * quantity;

    // Generate a random order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    // Display a detailed receipt
    const receipt = `
      --- Receipt ---
      Order Number: ${orderNumber}
      Item: Chocolate Cake
      Quantity: ${quantity}
      Pickup Date: ${pickupDate}
      Pickup Time: ${pickupTime}
      Total Amount: ₱${totalAmount}

      Thank you for ordering at Deniel's Bakery Shop!
    `;

    alert(receipt);

    // Close the modal after confirming the order
    cartModal.style.display = 'none';
  });

  // Close the modal if user clicks outside the modal content
  window.onclick = function(event) {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  };
});
