// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]");
    const result = document.querySelector("[data-result]");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get values from form inputs
      const entries = new FormData(event.target);
      const { dividend, divider } = Object.fromEntries(entries);
  
      // Check if values are missing
      if (!dividend || !divider) {
        result.innerText = "Division not performed. Both values are required in inputs. Try again";
        return;
      }
  
      // Parse values as numbers
      const parsedDividend = parseFloat(dividend);
      const parsedDivider = parseFloat(divider);
  
      // Check if values are valid numbers
      if (isNaN(parsedDividend) || isNaN(parsedDivider)) {
        result.innerText = "Division not performed. Invalid number provided. Try again";
        // Log an error in the console
        console.error("Invalid number provided. Try again");
        return;
      }
  
      // Check if the divider is zero
      if (parsedDivider === 0) {
        result.innerText = "Division not performed. Divider cannot be zero. Try again";
        // Log an error in the console
        console.error("Divider cannot be zero. Try again");
        return;
      }
  
      // Check if the result is a whole number
      const divisionResult = parsedDividend / parsedDivider;
      if (divisionResult % 1 !== 0) {
        result.innerText = "The result is not a whole number. Try again with different values";
        return;
      }
  
      // Display the result
      result.innerText = divisionResult;
    });
  });
  