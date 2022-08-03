

const API = "https://pokeapi.co/api/v2/";

const menuHisui  = document.querySelector(".hisui-menu");


menuHisui.addEventListener('click',()=>{
    alert("Sin funcionamiento hasta que en la API habiliten Sprites")
})



async function fetchPokemon (urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return  data;
}

const printPokemon= async (urlApi)=>{
    try {

        const pokemon = await fetchPokemon(`${urlApi}pokemon/${"ditto"}`);
        console.log(pokemon);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.types[0].type.name);

        if(pokemon.types[1]){
            console.log(pokemon.types[1].type.name);
        } else 
        {
            console.log("none");
        }

      
      
        

    } catch (error) {
       
        alert(error)
        
    }
}

printPokemon(API);

/*
Hall Galar
1 inteleon
2 Cinderace
3 Corviknight
4 Scyther
5 Obstagoon
6 Gyarados

Hall Hisui
1 Ursaluna
2 Voltor
3 Ponyta
4 Decidueye
5 zoroark
6 Kleavor
*/