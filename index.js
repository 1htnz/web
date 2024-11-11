var password = "mepass";

function passcheck() {
    var passInput = document.getElementById('password-input');
    var message = document.getElementById('message');

    if (passInput.value !== password) {
        message.textContent = "Incorrect, try again.";
        passInput.value = '';
        return false;
    } else {
        window.location.href = "main.html";
        return false;
    }
}