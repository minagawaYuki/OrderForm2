function todaytxt() {
    var Today = new Date(); 
    var month = Today.getMonth() + 1;
    var date = Today.getDate();
    var year = Today.getFullYear();
    return month + "/" + date + "/ " + year;
}

function startform() {
    document.order.formdate.value = todaytxt();
    document.order.product.focus();
    document.order.sub1.value = "0.00";
    document.order.sub2.value = "0.00";
    document.order.sub3.value = "0.00";
    document.order.total.value = "0.00";
}

function totalPrice() {
    var s1 = eval(document.order.sub1.value);
    var s2 = eval(document.order.sub2.value);
    var s3 = eval(document.order.sub3.value);
    var num = eval(s1 + "+" + s2 + "+" + s3);
    if(num) {
        document.order.total.value = (Math.round(num * 10) / 10).toString();
    }
}

function orderPrice() {
    itemIndex = document.order.product.selectedIndex;
    itemValue = document.order.product.options[itemIndex].value;
    qtyIndex = document.order.qty.selectedIndex;
    qtyOrdered = document.order.qty.options[qtyIndex].value;
    if(eval(itemValue && qtyOrdered)) {
        document.order.sub1.value = eval(itemValue * qtyOrdered).toString();
        document.order.sub2.value = eval(itemValue * qtyOrdered * 0.05).toString();
    }
    totalPrice();
}

function shippingPrice1() {
    document.order.sub3.value = "7.95";
    totalPrice();
}

function shippingPrice2() {
    document.order.sub3.value = "9.95";
    totalPrice();
}

function shippingPrice3() {
    document.order.sub3.value = "12.95";
    totalPrice();
}

function submitButton() {
    window.alert("Form Submitted");
}

function cancelButton() {
    window.alert("Form Cleared");
}