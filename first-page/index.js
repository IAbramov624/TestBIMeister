window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    
    const blocks = document.querySelector(".blocks");
    const block = document.querySelectorAll(".block");
    const blockExpandedMain = document.querySelector(".block_expanded-main");
    const blockExpandedTitle = document.querySelector(".block_expanded-title");
    const text = document.querySelector(".text");
    const startButton = document.querySelector(".start_button");
    const mainTitle = document.querySelector(".wrapper_main_title");
    const secondTitle = document.querySelector(".wrapper_main_bcg");

    startButton.addEventListener("click", function() {
        mainTitle.classList.add("hide");
        secondTitle.classList.add("show");
        blocks.classList.add("animate-top");

        block.forEach(item => {
            item.classList.add("animate-height");
        });
    });

    blocks.addEventListener("click", function(event) {

        if (event.target.closest(".block")) {

            text.textContent = "Package must be replaced with ";
            blockExpandedMain.classList.add("show");
            blockExpandedTitle.classList.add("show");
            blockExpandedTitle.textContent = event.target.dataset.id;
            text.textContent = text.textContent + event.target.dataset.text;

        }

        blockExpandedMain.addEventListener("click", function() {
            blockExpandedMain.classList.remove("show");
            blockExpandedTitle.classList.remove("show");
        });

    })
});