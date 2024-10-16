async function loadData() {
   const response = await fetch("https://hp-api.onrender.com/api/characters")
       .then((response) => response.json())
        .catch((error) => alert("Erreur : " + error));

 console.log(response);

    let main = document.querySelector(".characters");
    main.innerHTML = "";  

    const limitedCharacters = response.slice(0, 12); 

    for (const character of limitedCharacters) {
        let div = document.createElement("div");

        div.innerHTML = `
          <div class="character.name"> 
                <img src="${character.image}" alt="Image de ${character.name}" />
               <p>${character.name}</p>
           </div>`;
        main.appendChild(div); 
    }
}

loadData();
