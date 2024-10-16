//api ne marche pas , je garde le code precedent pour ne pas rester bloquer
//async function loadData() {
 //   const response = await fetch("https://hp-api.onrender.com/api/characters")
   //     .then((response) => response.json())
    //    .catch((error) => alert("Erreur : " + error));
//
   // console.log(response);

   // let main = document.querySelector("main");
   // main.innerHTML = "";  

   // const limitedCharacters = response.slice(0, 12); 

   // for (const character of limitedCharacters) {
       // let div = document.createElement("div");
       // const house = character.house || "Aucune maison"; 

        //div.innerHTML = `
         //   <div>
           //     <picture>
           //         <img src="${character.image}" alt="Image de ${character.name}" />
            //    </picture>
             //   <p>${character.name}</p>
              //  <p>Maison : ${house}</p>
          //  </div>`;
      //  main.appendChild(div); 
  //  }
//}


document.querySelectorAll('.houses img').forEach((houseImage) => {
    houseImage.addEventListener('click', function () {
        const selectedHouse = this.dataset.house;
        filterCharactersByHouse(selectedHouse);
    });
});

function filterCharactersByHouse(house) {
    const characters = document.querySelectorAll('.characters > div');

    characters.forEach((character) => {
        const characterHouse = character.getAttribute('maison'); 
        if (characterHouse === house || !house) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none'; 
        }
    });
}

const characterDivs = document.querySelectorAll('.characters > div');
characterDivs.forEach((div) => {
    const characterName = div.querySelector('p').innerText; 
    if (characterName.includes('Harry') || characterName.includes('Ron') || characterName.includes('Hermione') || characterName.includes('Mcgonagall')) {
        div.setAttribute('maison', 'Gryffindor');
    } else if (characterName.includes('Cedric')) {
        div.setAttribute('maison', 'Hufflepuff');
    } else if (characterName.includes('Cho')) {
        div.setAttribute('maison', 'Ravenclaw');
    } else if (characterName.includes('Draco')) {
        div.setAttribute('maison', 'Slytherin');
    } else {
        div.setAttribute('maison', 'Aucune maison');
    }
});

div.addEventListener('click', () => {
    const params = new URLSearchParams({
        name: characterName,
        house: house,
        image: characterImage
    });

    window.location.href = `details.html?${params.toString()}`;
});
