

const API = "https://pokeapi.co/api/v2/";

const menuHisui  = document.querySelector(".hisui-menu");
const ball1 = document.querySelector("#ball-uno");
const ball2 = document.querySelector("#ball-dos");
const ball3 = document.querySelector("#ball-tres");
const ball4 = document.querySelector("#ball-cuatro");
const ball5 = document.querySelector("#ball-cinco");
const ball6 = document.querySelector("#ball-seis");
const namePokemonDex = document.querySelector(".name_poke");
const numberPokemonDex = document.querySelector(".Number");
const imgPokemonDex = document.querySelector(".img-pokemon");
const btnTypeOne = document.querySelector(".btn-left");
const btnTypeTwo = document.querySelector(".btn-right");

menuHisui.addEventListener('click',()=>{
    alert("Sin funcionamiento hasta que en la API habiliten Sprites")
});

ball1.addEventListener('click', async ()=>{
    
    const array1 =await deleteType(API,1,"type_1_c","type_2_c")
    const array2 =await deleteType(API,2,"type_1_co","type_2_co")
    const array3 =await deleteType(API,3,"type_1_s","type_2_s")
    const array4 =await deleteType(API,4,"type_1_o","type_2_o")
    const array5 =await deleteType(API,5,"type_1_g","type_2_g")

    let arrayType=[array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]


    changePokemon(0,"nombre_i","id_i","img_i","type_1_i","type_2_i",arrayType);
});

ball2.addEventListener('click',async ()=>{
    
    const array1 =await deleteType(API,0,"type_1_i","type_2_i")
    const array2 =await deleteType(API,2,"type_1_co","type_2_co")
    const array3 =await deleteType(API,3,"type_1_s","type_2_s")
    const array4 =await deleteType(API,4,"type_1_o","type_2_o")
    const array5 =await deleteType(API,5,"type_1_g","type_2_g")

    let arrayType=[array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]



    changePokemon(1,"nombre_c","id_c","img_c","type_1_c","type_2_c",arrayType);
});

ball3.addEventListener('click',async ()=>{
    
    const array1 =await deleteType(API,1,"type_1_c","type_2_c")
    const array2 =await deleteType(API,0,"type_1_i","type_2_i")
    const array3 =await deleteType(API,3,"type_1_s","type_2_s")
    const array4 =await deleteType(API,4,"type_1_o","type_2_o")
    const array5 =await deleteType(API,5,"type_1_g","type_2_g")

    let arrayType=[array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]



    changePokemon(2,"nombre_co","id_co","img_co","type_1_co","type_2_co",arrayType);
});

ball4.addEventListener('click',async ()=>{
  
    const array1 =await deleteType(API,1,"type_1_c","type_2_c")
    const array2 =await deleteType(API,2,"type_1_co","type_2_co")
    const array3 =await deleteType(API,0,"type_1_i","type_2_i")
    const array4 =await deleteType(API,4,"type_1_o","type_2_o")
    const array5 =await deleteType(API,5,"type_1_g","type_2_g")

    let arrayType = [array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]



    changePokemon(3,"nombre_s","id_s","img_s","type_1_s","type_2_s",arrayType);
});

ball5.addEventListener('click',async ()=>{
  
    const array1 =await deleteType(API,1,"type_1_c","type_2_c")
    const array2 =await deleteType(API,2,"type_1_co","type_2_co")
    const array3 =await deleteType(API,3,"type_1_s","type_2_s")
    const array4 =await deleteType(API,1,"type_1_i","type_2_i")
    const array5 =await deleteType(API,5,"type_1_g","type_2_g")

   let arrayType=[array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]



    changePokemon(4,"nombre_o","id_o","img_o","type_1_o","type_2_o",arrayType);
});

ball6.addEventListener('click',async ()=>{
   
    const array1 =await deleteType(API,1,"type_1_c","type_2_c")
    const array2 =await deleteType(API,2,"type_1_co","type_2_co")
    const array3 =await deleteType(API,3,"type_1_s","type_2_s")
    const array4 =await deleteType(API,4,"type_1_o","type_2_o")
    const array5 =await deleteType(API,0,"type_1_i","type_2_i")

    let arrayType = [array1[0],array1[1],array2[0],array2[1],array3[0],array3[1],array4[0],array4[1],array5[0],array5[1]]

   
    changePokemon(5,"nombre_g","id_g","img_g","type_1_g","type_2_g",arrayType);
});


async function fetchPokemon (urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return  data;
}


const printPokemon= async (urlApi)=>{
    try {

        const inteleon = await fetchPokemon(`${urlApi}pokemon/${"inteleon"}`);
        const cinderace = await fetchPokemon(`${urlApi}pokemon/${"cinderace"}`);
        const corviknight = await fetchPokemon(`${urlApi}pokemon/${"corviknight"}`);
        const scyther = await fetchPokemon(`${urlApi}pokemon/${"scyther"}`);
        const obstagoon = await fetchPokemon(`${urlApi}pokemon/${"obstagoon"}`);
        const gyarados = await fetchPokemon(`${urlApi}pokemon/${"gyarados"}`);

   

        const  arrayInteleon =  await typePokemon(urlApi,"inteleon");
        const  arrayCinderace =  await typePokemon(urlApi,"cinderace");
        const  arrayCorviknight =  await typePokemon(urlApi,"corviknight");
        const  arrayScyther =  await typePokemon(urlApi,"scyther");
        const  arrayObstagoon =  await typePokemon(urlApi,"obstagoon");
        const  arrayGyarados =  await typePokemon(urlApi,"gyarados");

        const obj_inteleon = {
            nombre_i: inteleon.name,
            id_i: inteleon.id,
            type_1_i: arrayInteleon[0] ,
            type_2_i: arrayInteleon[1],
            img_i: inteleon.sprites["front_default"]
            }

        const obj_cinderace = {
            nombre_c: cinderace.name,
            id_c: cinderace.id,
            type_1_c: arrayCinderace[0] ,
            type_2_c: arrayCinderace[1],
            img_c: cinderace.sprites["front_default"]
            }

        const obj_corviknight = {
            nombre_co: corviknight.name,
            id_co: corviknight.id,
            type_1_co: arrayCorviknight[0] ,
            type_2_co: arrayCorviknight[1],
            img_co: corviknight.sprites["front_default"]
            }
            
        const obj_scyther = {
            nombre_s: scyther.name,
            id_s: scyther.id,
            type_1_s: arrayScyther[0] ,
            type_2_s: arrayScyther[1],
            img_s: scyther.sprites["front_default"]
            }
            
        const obj_obstagoon = {
            nombre_o: obstagoon.name,
            id_o: obstagoon.id,
            type_1_o: arrayObstagoon[0] ,
            type_2_o: arrayObstagoon[1],
            img_o: obstagoon.sprites["front_default"]
            }
            
            
        const obj_gyarados = {
            nombre_g: gyarados.name,
            id_g: gyarados.id,
            type_1_g: arrayGyarados[0] ,
            type_2_g: arrayGyarados[1],
            img_g: gyarados.sprites["front_shiny"]
            }            

            return [obj_inteleon,obj_cinderace,obj_corviknight,obj_scyther,obj_obstagoon,obj_gyarados]
        }
        catch (error) {
       
            alert(error)
    }
}

const typePokemon = async (urlApi,poke)=>{
    const pokeType = await fetchPokemon(`${urlApi}pokemon/${poke}`);
    if (pokeType.types[1]) {
        return [
            pokeType.types[0].type.name,
            pokeType.types[1].type.name
        ];
      
    } else {
       return [
        pokeType.types[0].type.name,
        "None"
    ];
    }
}

const changePokemon = async (index,nombres,id, imagen,tipo1, tipo2,arrayTipos)=>{
    const data = await printPokemon(API);
    const nombre = data[index][nombres];
    namePokemonDex.innerText = nombre[0].toUpperCase()+nombre.substring(1);
    numberPokemonDex.innerText = data[index][id];
    imgPokemonDex.src = data[index][imagen];
    btnTypeOne.innerText = data[index][tipo1];
    btnTypeTwo.innerText = data[index][tipo2];
    btnTypeOne.classList.remove("btn-color");
    btnTypeTwo.classList.remove("btn-color");

    btnTypeOne.classList.remove(colorType(arrayTipos[0]));
    btnTypeTwo.classList.remove(colorType(arrayTipos[1]));
    btnTypeOne.classList.remove(colorType(arrayTipos[2]));
    btnTypeTwo.classList.remove(colorType(arrayTipos[3]));
    btnTypeOne.classList.remove(colorType(arrayTipos[4]));
    btnTypeTwo.classList.remove(colorType(arrayTipos[5]));
    btnTypeOne.classList.remove(colorType(arrayTipos[6]));
    btnTypeTwo.classList.remove(colorType(arrayTipos[7]));
    btnTypeOne.classList.remove(colorType(arrayTipos[8]));
    btnTypeTwo.classList.remove(colorType(arrayTipos[9]));

    console.log(arrayTipos)

    btnTypeOne.classList.add(colorType(data[index][tipo1]));
    btnTypeTwo.classList.add(colorType(data[index][tipo2]));
    

}

const deleteType = async (API,index, tipo1, tipo2)=>{
    const data = await printPokemon(API);
    const eliminar1 = data[index][tipo1];
    const eliminar2 = data[index][tipo2];
    return [eliminar1,eliminar2]
}

const colorType = (type)=>{
    switch (type) {
        case "fire":
                return "fire_p"
            break;
        case "water":
                return "water_p"
            break;
        case "flying":
                return "fly_p"
            break;                       
        case "bug":
                return "bug_p"
            break;
        case "grass":
                return "grass_p"
            break;  
        case "normal":
                return "normal_p"
            break; 
        case "electric":
                return "electric_p"
            break;     
        case "ice":
                return "ice_p"
            break; 
        case "fighting":
                return "fighting_p"
            break;    
        case "poison":
                return "poison_p"
            break; 
        case "ground":
                return "ground_p"
            break;     
        case "spychic":
                return "spychic_p"
            break; 
        case "rock":
                return "rock_p"
            break; 
        case "ghost":
                return "ghost_p"
            break; 
        case "dragon":
                return "dragon_p"
            break;     
        case "dark":
                return "dark_p"
            break; 
        case "steel":
                return "steel_p"
            break;         
        case "fairy":
                return "fairy_p"
            break;                                                 
        default:
                return "none_p"
            break;
    }
}

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
