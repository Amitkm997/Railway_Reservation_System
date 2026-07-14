const quantityInputs = document.querySelectorAll(".quantity");
const removeButtons = document.querySelectorAll(".remove-btn");

const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

const shipping = 500;

// Calculate Cart Total
function calculateTotal() {

    let sumtotal = 0;

    quantityInputs.forEach((input) => {

        const price = Number(input.dataset.price);
        const quantity = Number(input.value);

        sumtotal = sumtotal + (price * quantity);

    });

    subtotalElement.textContent = `Rs${sumtotal}`;

    const total = sumtotal + shipping;

    totalElement.textContent = `Rs${total}`;
}

// Quantity Change Event
quantityInputs.forEach((input) => {

    input.addEventListener("change", () => {

        if (input.value < 1) {
            input.value = 1;
        }

        calculateTotal();

    });

});

// Remove Product Event
removeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const cartCard = button.parentElement;

        cartCard.remove();

        calculateTotal();

    });

});

// Initial Calculation
// calculateTotal();