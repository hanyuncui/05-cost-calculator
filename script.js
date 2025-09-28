//function to calculate the toatal cost of the pizza order
function calculateTotalCost(basePrice, toppingPrice, selectedToppings, deliveryCharge){
  let totalCost = basePrice + (toppingPrice * selectedToppings);
  if (deliveryCharge){
    totalCost += 5; // Add delivery charge
  }
  return totalCost;
}

//Event listener for the form submission
document.getElementById('pizza-order-form').addEventListener('submit', function(event){
  event.preventDefault();
  
  //Get selected size and set base price
  const size = document.getElementById('size').value;
  let basePrice;
  if (size === 'small'){
    basePrice = 8;
  } else if (size === 'medium'){
    basePrice = 10;
  } else if (size === 'large'){
    basePrice = 12;
  }


  //Bse price and topping price
  const basePrice = 10;
  const toppingPrice = 2;

  //Get selected toppings
  const toppings = document.querySelectorAll('input[name="topping"]:checked');
  const selectedToppings = toppings.length;

  //Check if delivery is selected
  const deliveryCharge = document.getElementById('delivery').checked;

  //calculate total cost
  const totalCost = calculateTotalCost(basePrice, toppingPrice, selectedToppings, deliveryCharge);

  //update the total cost on the page
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total Cost: $${totalCost}`;
});