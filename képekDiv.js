const leftBtn = document.querySelector(".picture-button-left-js");
const rightBtn = document.querySelector(".picture-button-right-js")
const pictureDiv = document.querySelector(".képek-div-js");
let pictureIndex= 50;

// képeket tartalmazó mappa

const galery = [];

for (let i =0 ; i < 122; i++){
     galery.push(`<img class="galery-img" src="./src/galery/${i}.jpg">`)
}



leftBtn.addEventListener("click", function(){
    console.log("left")
    pictureIndex= pictureIndex-1;
    pictureDiv.innerHTML = galery[pictureIndex];
})

rightBtn.addEventListener("click", function(){
    pictureIndex= pictureIndex+1;
    pictureDiv.innerHTML = galery[pictureIndex];
})

console.log(pictureIndex)
pictureDiv.innerHTML = galery[pictureIndex];