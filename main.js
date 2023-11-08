let rayitas = document.getElementById('rayitas');
let menu = document.getElementById('menu');
let miImagen = document.getElementById('miImagen');
let miImagen2 = document.getElementById('miImagen2');
let miImagen3 = document.getElementById('miImagen3');
let miImagen4 = document.getElementById('miImagen4');
let miImagen5 = document.getElementById('miImagen5');
let miImagen6 = document.getElementById('miImagen6');
let miImagen7 = document.getElementById('miImagen7');
let miModal = document.getElementById('miModal');
let miModal2 = document.getElementById('miModal2');
let miModal3= document.getElementById('miModal3');
let miModal4 = document.getElementById('miModal4');
let miModal5 = document.getElementById('miModal5');
const imagenModal = document.getElementById('imagenModal'); 
const cerrarModal = document.getElementById('cerrarModal');
let abrime = document.getElementById('abrime');
let pantallita = document.getElementById('pantallita');
let volvemo = document.getElementById('volvemo');



rayitas.addEventListener("click", () => {
    menu.style.display = "block";
    // Evita el desplazamiento en el fondo
    //document.body.style.overflow = "hidden"; 
    });

cerrar.addEventListener("click", () => {
    menu.style.display = "none";
    // Habilita el desplazamiento en el fondo
    //document.body.style.overflow = "auto"; 
    //esto es para que si cerras el menu header el menu btn se mantenga cerrado
    if(menu.style.display= "none"){
        pantallita.style.display = "none"
        console.log("o sea que si el menu esta cerrado el btn esta cerrado")
    }
    });   

abrime.addEventListener("click", () =>{
    console.log("Hola soy un btn")
    pantallita.style.display = "flex";
})    

volvemo.addEventListener("click", () => {
    console.log("esto cierra las redes")
    pantallita.style.display = "none"
})

miImagen.addEventListener("click", () => {
        miModal.style.display = "block";
        imagenModal.src = miImagen.src;
        console.log("Hola, soy el reglamento y estas son reglas de la 1 a la 6")
    });  

miImagen2.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen2.src;
    console.log("Hola, soy el reglamento y estas son reglas de la 7 a la 13")
    }); 

miImagen3.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen3.src;
    console.log("Hola, soy el reglamento y estas son reglas de la 14 a la 19")
    }); 

miImagen4.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen4.src;
    console.log("Hola, soy el reglamento y estas son reglas de la 20 a la 26")
    });
    
miImagen5.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen5.src;
    console.log("Hola, soy el reglamento y aca termino. Cumplime, dale?")
    }); 

miImagen6.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen6.src;
    console.log("Hola, soy la IBJJ")
    }); 

miImagen7.addEventListener("click", () => {
    miModal.style.display = "block";
    imagenModal.src = miImagen7.src;
    console.log("Hola, soy la IBJJ")
    }); 

cerrarModal.addEventListener("click", () => {
    miModal.style.display = "none";
    });





