const leftBtn = document.querySelector(".picture-button-left-js");
const rightBtn = document.querySelector(".picture-button-right-js")
const pictureDiv = document.querySelector(".képek-div-js");
let pictureIndex= 1;

// képeket tartalmazó mappa

const galery = [];

for (let i =0 ; i < 120; i++){
     galery.push(`<img class="galery-img" src="./src/galery/${i}.jpg">`)
}



leftBtn.addEventListener("click", function(){
    if (pictureIndex > 0 ){
    pictureIndex= pictureIndex-1;
    pictureDiv.innerHTML = galery[pictureIndex]
    }else{
        pictureIndex = 0
    };
})

rightBtn.addEventListener("click", function(){
    if(pictureIndex < 119){
    pictureIndex= pictureIndex+1;
    pictureDiv.innerHTML = galery[pictureIndex]
    } else{
        pictureIndex=119
    };
})

console.log(pictureIndex)
pictureDiv.innerHTML = galery[pictureIndex];