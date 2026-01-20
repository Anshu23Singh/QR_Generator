const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const qrimg = document.querySelector(".QR-image");

btn.addEventListener("click", ()=>{
    const text  = input.value;

    if(text===""){
        alert("Enter any text or URL");
        return;
    }

    qrimg.innerHTML = `<img src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}"+text alt="QR Code">`
});