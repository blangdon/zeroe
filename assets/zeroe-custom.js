// console.log('bundle script init');

// var form = document.querySelector('form[is="product-form"]');

// var productIdInput = form.querySelector('input[name="product-id"]');
// var idInput = form.querySelector('input[name="id"]');
// var originalProductId = productIdInput.value;
// var originalId = idInput.value;
// var override = false;
// var checkboxSet = false;
// var numberSet = 2;

// form.addEventListener(
//   "submit",
//   function (event) {
//     console.log("Form submitted!");
//     // Find all quantity inputs inside the form being submitted
//     const quantityInputs = form.querySelectorAll('input[name="quantity"]');

//     quantityInputs.forEach((input) => {
//       input.value = numberSet;

//       // Trigger change event so apps like Koala detect it
//       const changeEvent = new Event("change", { bubbles: true });
//       input.dispatchEvent(changeEvent);

//       console.log("Quantity forced to 3 for:", input);
//     });

//     // Don't prevent form submit — let it continue naturally
//   },
//   { capture: true }
// ); // Important: { capture: true } runs before other app listeners

// // Select all list items by their class
// var wrongItems1 = document.querySelectorAll(
//   ".koala-deal__tiers__list-item.tier-53cedbfc-82ce-400b-94fc-4f3c0754918f"
// );
// var wrongItems2 = document.querySelectorAll(
//   ".koala-deal__tiers__list-item.tier-080e4451-7c0d-4773-b65c-b9994cc0ddbb"
// );
// var listItems = document.querySelectorAll(
//   ".koala-deal__tiers__list-item.tier-e03114df-2b9a-412a-a403-730cd5e8f78d"
// );

// // Check if any list items exist
// if (listItems.length > 0) {
//   // Loop through each list item and add a click event listener
//   listItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       console.log("List item clicked:", item);

//       // Add your custom logic here

//       const input = document.querySelector('input[value="50g"]');

//       if (input && input.checked) {
//         overideForm(); // Call the override function
//       } else {
//         revertForm(4); // Call the override function
//       }
//     });
//   });
// } else {
//   console.error("No list items with the specified class found.");
// }

// // Check if any list items exist
// if (wrongItems1.length > 0) {
//   // Loop through each list item and add a click event listener
//   wrongItems1.forEach((item) => {
//     item.addEventListener("click", () => {
//       console.log("List item clicked:", item);
//       revertForm(1); // Call the override function
//       // Add your custom logic here
//     });
//   });
// } else {
//   console.error("No list items with the specified class found.");
// }

// // Check if any list items exist
// if (wrongItems2.length > 0) {
//   // Loop through each list item and add a click event listener
//   wrongItems2.forEach((item) => {
//     item.addEventListener("click", () => {
//       console.log("List item clicked:", item);
//       revertForm(2); // Call the override function
//       // Add your custom logic here
//     });
//   });
// } else {
//   console.error("No list items with the specified class found.");
// }

// function revertForm(number) {
//   override = false;
//   console.log("Reverting form...");
//   console.log("originalProductId:", originalProductId);
//   console.log("originalId:", originalId);

//   if (!checkboxSet) {
//     var checkbox = document.querySelector('input[value="50g"]');
//     var checkbox2 = document.querySelector('input[value="300g"]');

//     checkbox.addEventListener("change", (event) => {
//       console.log("Checkbox state changed:", event.target.checked);
//       if (event.target.checked) {
//         overideForm(); // Call the override function
//       }
//     });

//     checkbox2.addEventListener("change", (event) => {
//       console.log("Checkbox state changed:", event.target.checked);
//       if (event.target.checked) {
//         if (override) revertForm(4);
//       }
//     });
//     checkboxSet = true;
//   }

//   if (productIdInput) {
//     productIdInput.value = originalProductId;
//   }

//   // Modify fields
//   if (idInput) {
//     idInput.value = originalId;
//   }

//   numberSet = number;

//   var updatedFormData = new FormData(form);
//   for (const [name, value] of updatedFormData.entries()) {
//     console.log(`After: ${name} = ${value}`);
//   }
// }

// function overideForm() {
//   override = true;
//   console.log("Overriding form...");
//   console.log("originalProductId:", originalProductId);
//   console.log("originalId:", originalId);

//   if (!checkboxSet) {
//     var checkbox = document.querySelector('input[value="50g"]');
//     var checkbox2 = document.querySelector('input[value="300g"]');

//     checkbox.addEventListener("change", (event) => {
//       console.log("Checkbox state changed:", event.target.checked);
//       if (event.target.checked) {
//         overideForm(); // Call the override function
//       }
//     });

//     checkbox2.addEventListener("change", (event) => {
//       console.log("Checkbox state changed:", event.target.checked);
//       if (event.target.checked) {
//         if (override) revertForm(4);
//       }
//     });
//     checkboxSet = true;
//   }

//   // Modify fields
//   if (productIdInput) {
//     productIdInput.value = "10080990560530";
//   }

//   // Modify fields
//   if (idInput) {
//     idInput.value = "51094530064658";
//   }

//   numberSet = 1;

//   var updatedFormData = new FormData(form);
//   for (const [name, value] of updatedFormData.entries()) {
//     console.log(`After: ${name} = ${value}`);
//   }
// }

// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log('init override form');
//     overideForm();
// });

