

function multiplyImages() {

    amount = 100
    for (var i = 1; i<amount; i++) {
        let img_els = document.createElement("img");
        img_els.src ="https://vignette.wikia.nocookie.net/dragonball/images/1/1c/SnakeWayEp06.png/revision/latest?cb=20120531174715";
        document.body.appendChild(img_els)


    }

}


const newButton = document.createElement("button");
newButton.textContent = "cooltrick!";
document.body.appendChild(newButton);



var img = document.createElement("img");
img.src = "https://vignette.wikia.nocookie.net/dragonball/images/1/1c/SnakeWayEp06.png/revision/latest?cb=20120531174715";
document.body.appendChild(img);



img.style.height = "200px";
img.style.width = "200px";




multiplyImages();
