alert("bdjshbfjsbdhjhjjbj");
document.addEventListener("DOMContentLoaded", function() {
    alert("vdhfvdshf dhvjhd ")
    const buttonElem = document.getElementById("clickMe");
    const bodyElem = document.body;
    if (buttonElem) {
        let isWhite = false;

        buttonElem.addEventListener("click", () => {
            console.log("Button clicked");

            if (isWhite) {
                bodyElem.style.backgroundColor = "";
            } else {
                bodyElem.style.backgroundColor = "#CEDEBD";
            }
            isWhite = !isWhite;
        });
    } else {
        console.error("Button element or body element not found.");
    }
});