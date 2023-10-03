function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput");
    const binaryOutput = document.getElementById("binaryOutput");

    // Get the decimal number from user input
    const decimalNumber = parseInt(decimalInput.value);

    // Check if the input is a valid number
    if (!isNaN(decimalNumber)) {
        // Convert decimal to binary
        const binaryNumber = decimalNumber.toString(2);
        
        // Display the binary result
        binaryOutput.textContent = `Binary: ${binaryNumber}`;
    } else {
        // Display an error message if the input is not a valid number
        binaryOutput.textContent = "Please enter a valid decimal number.";
    }
}
