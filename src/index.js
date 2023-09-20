//Challenge 1
document.addEventListener("DOMContentLoaded", getImages);

const imgContainer = document.querySelector("#dog-image-container");

function getImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.setAttribute("src", imageUrl);
                imgContainer.appendChild(img);
            });
        });
}

//Challenge 2 and 3
document.addEventListener("DOMContentLoaded", getBreeds);
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const list = document.querySelector("#dog-breeds");
const dropdown = document.querySelector("#breed-dropdown");
let breedsArray = []


function getBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message);
        breedsArray.forEach((breed) =>{
            const li = document.createElement("li");
            li.innerText = breed;
            li.addEventListener("click", () =>{
                li.style.color = "red"
            });
            dropdown.addEventListener("change", filterBreeds);
            function filterBreeds(event){
                if (breed.startsWith(event.target.value)){
                    list.appendChild(li);
                }
            }
            
            
        });
        console.log(breedsArray);

    });
};



