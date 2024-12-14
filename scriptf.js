  // Select all toggle titles
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

// Function to generate a random 6-digit order number
  function generateOrderNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
  }

  // Function to handle the 'Add to Cart' process
  document.getElementById('AddToCart').addEventListener('click', () => {
    // Prompt for details
    const pickupDate = prompt('Enter the pickup date (YYYY-MM-DD):');
    const pickupTime = prompt('Enter the pickup time (e.g., 14:00 for 2 PM):');
    const quantity = prompt('Enter the quantity of the item:');

    // Validate input
    if (!pickupDate || !pickupTime || isNaN(quantity) || quantity <= 0) {
      alert('Invalid input. Please try again and enter correct details.');
      return;
    }

    // Item price and calculation
    const itemPrice = 250; // Set price of one item
    const totalAmount = itemPrice * parseInt(quantity);

    // Generate a random 6-digit order number
    const orderNumber = generateOrderNumber();

    // Display the receipt in an alert box
    alert(
      `--- Receipt ---\n` +
      `Order Number: ${orderNumber}\n` +
      `Item: Chocolate Cake\n` +
      `Quantity: ${quantity}\n` +
      `Pickup Date: ${pickupDate}\n` +
      `Pickup Time: ${pickupTime}\n` +
      `Total Amount: ₱${totalAmount}\n\n` +
      `Thank you for ordering at Deniel's Bakery Shop!`
    );
  });
