window.onload = function () {
    setInterval(function () {
        if (!(window.location.href.toString().includes("/edit"))) {
            document.getElementById("divApplab").style = "margin: 0;    width: 100vw;    height: 100vh;    padding: 10px;    background-color: black;    position: fixed;    top: 0; left: 0;display: flex;justify-content: center;align-items: center;"

            let screen = document.querySelector(".screen");
            screen.style.left = (window.innerWidth / 2) - 160 + "px";
            screen.style.top = (window.innerHeight / 2) - 225 + "px";

            let topButtons = document.querySelectorAll(".WireframeButtons_button")
            for (let i = 0; i < topButtons.length; i = i + 1) {

                topButtons[i].parentElement.parentElement.style = "z-index:443;position:fixed;right:0;bottom:0;background-color:#4d575f;width:100vw;height:33px;display:flex;justify-content:right;";
                topButtons[i].style.backgroundColor = "blue";

            }
            topButtons[2].style.display = "none";
            topButtons[1].style.display = "none";

        }
    }, 1000);
    setTimeout(function () {
        if (!(window.location.href.includes("/edit"))) {

            let topButtons = document.querySelectorAll(".WireframeButtons_button")


            let shareButton = document.createElement("button");
            topButtons[0].parentElement.parentElement.appendChild(shareButton);


            let contentStyle = document.createElement("link");
            contentStyle.rel = "stylesheet";
            contentStyle.href = chrome.runtime.getURL("content.css");
            document.head.appendChild(contentStyle);

        }
    }, 1000);
}



