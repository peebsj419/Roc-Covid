// Get the modal
var modal = document.getElementById("chatBotModal");

// Get the button that opens the modal
var btn1 = document.getElementById("chatbotBtn");
var btn2 = document.getElementById("chatbotBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks on the button, open the modal
function buttonClicked(e) {
    e.preventDefault();
    modal.style.display = "block";
}

btn1.addEventListener('click', buttonClicked);
btn2.addEventListener('click', buttonClicked);

// When the user clicks on <span>, close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById('chatbotIframe').src = document.getElementById('chatbotIframe').src;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}