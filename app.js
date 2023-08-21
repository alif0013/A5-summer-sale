let total = 0;
let totalDiscount = 0;
let grandTotal = 0
let serialNumber = 1;
function handleClickCard(element) {
    const selectedProducts = document.getElementById("dynamic-cart-name-container")
    const productName = element.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    // li.innerText = productName;
    li.innerText = serialNumber + ". " + productName;
    serialNumber++;
    selectedProducts.appendChild(li);

    const price = element.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total-price").innerText = total.toFixed(2);
    // make purchase button enable by condition
    const makePurchaseBtn = document.getElementById("make-purchase");
    if (total > 0) {
        makePurchaseBtn.removeAttribute('disabled');
    } else {
        makePurchaseBtn.setAttribute('disabled', 'true');
    }

    const applyBtn = document.getElementById("apply-button");
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');

    } else {
        applyBtn.setAttribute('disabled', 'true');

    }
}

// cupon code calculation 
function calculationByCupon(cupon) {
    const inputCupon = document.getElementById("apply-Code");
    const inputCuponValue = inputCupon.value;
    inputCupon.value = ' ';

    if (inputCuponValue != 'SELL200') {
        alert("the cupon is not valid");
    } else {

        totalDiscount = (20 / 100) * total.toFixed(2);
        document.getElementById("total-discount").innerText = totalDiscount.toFixed(2);

        grandTotal = total - totalDiscount;
        document.getElementById("grand-total").innerText = grandTotal.toFixed(2);
    }
}
function setDefaultValue() {
    document.getElementById("total-price").innerText = "0.00";
    document.getElementById("total-discount").innerText = "0.00";
    document.getElementById("grand-total").innerText = "0.00";
    document.getElementById("dynamic-cart-name-container").innerText = " ";
}