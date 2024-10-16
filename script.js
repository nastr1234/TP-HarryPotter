async function loadData() {
    const response = await fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .catch((error) => alert("Erreur : " + error));

    console.log(response);

    let main = document.querySelector("main");
    main.innerHTML = "";  

    const limitedCharacters = response.slice(0, 12); 

    for (const character of limitedCharacters) {
        let div = document.createElement("div");
        const house = character.house || "Aucune maison"; 

        div.innerHTML = `
            <div>
                <picture>
                    <img src="${character.image}" alt="Image de ${character.name}" />
                </picture>
                <p>${character.name}</p>
                <p>Maison : ${house}</p>
            </div>`;
        main.appendChild(div); 
    }
}
