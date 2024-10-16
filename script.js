async function loadData() {
    const response = await fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .catch((error) => alert("Erreur : " + error));

    console.log(response);
    let main = document.querySelector(".characters");
    main.innerHTML = "";  
    const limitedCharacters = response.slice(0, 12); 
    const charactersArray = [];

    for (const character of limitedCharacters) {
        let div = document.createElement("div");

        const characterName = character.name;
        let maison = 'Aucune maison';
        if (characterName.includes('Harry') || characterName.includes('Ron') || characterName.includes('Hermione') || characterName.includes('Mcgonagall')) {
            maison = 'Gryffindor';
        } else if (characterName.includes('Cedric')) {
            maison = 'Hufflepuff';
        } else if (characterName.includes('Cho')) {
            maison = 'Ravenclaw';
        } else if (characterName.includes('Draco')) {
            maison = 'Slytherin';
        }

        div.innerHTML = `
            <div class="character"> 
                <img src="${character.image}" alt="Image de ${character.name}" />
                <p>${character.name}</p>
            </div>`;
        
        div.setAttribute('maison', maison); 
        main.appendChild(div); 
        charactersArray.push(div); 

        div.addEventListener('click', () => {
            const params = new URLSearchParams({
                name: characterName,
                house: maison, 
                image: character.image
            });
            window.location.href = `details.html?${params.toString()}`;
        });
    }

    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', () => {
        charactersArray.sort((a, b) => {
            const nameA = a.querySelector('p').innerText.toLowerCase(); 
            const nameB = b.querySelector('p').innerText.toLowerCase(); 
            return nameA.localeCompare(nameB); 
        });

        main.innerHTML = ''; 

        charactersArray.forEach((div) => {
            main.appendChild(div);
        });
    });
}

function filterCharactersByHouse(house) {
    const characters = document.querySelectorAll('.characters > div');

    characters.forEach((character) => {
        const characterHouse = character.getAttribute('maison'); 
        if (characterHouse === house || house === 'Aucune maison') {
            character.style.display = 'block';
        } else {
            character.style.display = 'none'; 
        }
    });
}
document.querySelectorAll('.houses img').forEach((houseImage) => {
    houseImage.addEventListener('click', function () {
        const selectedHouse = this.getAttribute('maison'); 
        filterCharactersByHouse(selectedHouse);
    });
});

loadData();
