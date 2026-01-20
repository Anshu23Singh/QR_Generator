// Select elements
const inputBox = document.querySelector("input");
const Btn = document.querySelector(".btn");
const qrImageBox = document.querySelector(".QR-image");

// Generate QR code
Btn.addEventListener("click", function () {
    const text = inputBox.value;

    // Check if input is empty
    if (text === "") {
        alert("Please enter text or URL");
        return;
    }

    // Create QR image
    qrImageBox.innerHTML = `
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}" alt="QR Code">`;
});
