var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-write-us");
if (popup) {
    var close = popup.querySelector(".modal-close");
    var username = popup.querySelector("[name=username]");
    var form = popup.querySelector("form");
    var email = popup.querySelector("[name=email]");
    var message = popup.querySelector("[name=message]");


    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("username");
    } catch (err) {
        isStorageSupport = false;
    }


    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storage) {
            username.value = storage;
            email.focus();
        } else {
            username.focus();
        }
    });


    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });


    form.addEventListener("submit", function(evt) {
        if (!username.value || !email.value || !message.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("username", username.value);
            }
        }
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });

}

var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
if (mapPopup) {
    var mapClose = mapPopup.querySelector(".modal-close");



    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains("modal-show")) {
                mapPopup.classList.remove("modal-show");
            }
        }
    });
}

var buyButton = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-basket");
if (buyPopup) {
    var buyClose = buyPopup.querySelector(".modal-close");


    for (index = 0; index < buyButton.length; index++) {
        button = buyButton[index];
        button.addEventListener("click", function(evt) {
            buyPopup.classList.add("modal-show");
            evt.preventDefault();
        });
    }

    buyClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (buyPopup.classList.contains("modal-show")) {
                buyPopup.classList.remove("modal-show");
            }
        }
    });
}