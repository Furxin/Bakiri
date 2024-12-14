document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Toggle Functionality
  const toggleTitles = document.querySelectorAll('.toggle-title');
  toggleTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Add to Cart Functionality
  const addToCartButton = document.getElementById('AddToCart');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      const pickupDate = prompt('Enter the pickup date (YYYY-MM-DD):');
      const pickupTime = prompt('Enter the pickup time (e.g., 14:00 for 2 PM):');
      const quantity = prompt('Enter the quantity of the item:');

      // Validate user input
      if (!pickupDate || !pickupTime || isNaN(quantity) || quantity <= 0) {
        alert('Invalid input. Please try again and enter correct details.');
        return;
      }

      const itemPrice = 250; // Price per item
      const totalAmount = itemPrice * parseInt(quantity);

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
    });
  }
});
