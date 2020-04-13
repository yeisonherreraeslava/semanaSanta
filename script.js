var nombres=["Paola", "Samy", "Tomy", "Andrea", "Carlos", "Miguel","Jorge"]
var mezclaElementos = [3, "Hola", 2, 1, "Mundo", 1.5, 4 + 5]

var productos = [
    {
        imagen  :   'imagenes/mobileHTC.jpg',
        titulo  :   'HTC',
        clase   :   'mobiles',
        precio  :   1200

    },
    {
        imagen  :   'imagenes/mobileIphone.jpg',
        titulo  :   'Iphone',
        clase   :   'mobiles',
        precio  :   900

    },
    {
        imagen  :   'imagenes/mobileSamsung.jpg',
        titulo  :   'Samsung',
        clase   :   'mobiles',
        precio  :   1800

    },
    {
        imagen  :   'imagenes/computerDesktop.jpg',
        titulo  :   'DeskTop PC',
        clase   :   'computer',
        precio  :   1200

    },
    {
        imagen  :   'imagenes/computerGamer.jpg',
        titulo  :   'Gamer PC',
        clase   :   'computer',
        precio  :   2200

    },
    {
        imagen  :   'imagenes/camisetaAmerica.jpg',
        titulo  :   'America',
        clase   :   'camisetas',
        precio  :   100

    },
    {
        imagen  :   'imagenes/camisetaMillos.jpg',
        titulo  :   'Millos',
        clase   :   'camisetas',
        precio  :   800

    },
    {
        imagen  :   'imagenes/camisetaNacional.jpg',
        titulo  :   'Nacional',
        clase   :   'camisetas',
        precio  :   200

    }
]

function insertarProductos(){
    var divProductos = document.querySelector('#productos-mercado')
    divProductos.innerHTML += `<div class="row justify-content-center" >
      <div class="col-4 ">
        <p>Celular marca: ${productos[1].titulo} </p>
        <p>Precio: ${productos[1].precio} </p>
        <img src= ${productos[1].imagen} width="120 px" height="150 px" alt="" > 
      </div>
     
    </div>`
}

function filtrarProductos() {
    var divProductos = document.querySelector('#productos-mercado')
    divProductos.innerHTML =""
    productos.forEach(function(elemento,index){
        console.log(elemento.clase)
        if ((elemento.clase == document.querySelector('#selector-producto').value) || (document.querySelector('#selector-producto').value == "Todo") ) {
           console.log("entro")

            divProductos.innerHTML += `<div class="row justify-content-center" >
      <div class="col-4 ">
        <p>Celular marca: ${productos[index].titulo} </p>
        <p>Precio: ${productos[index].precio} </p>
        <img src= ${productos[index].imagen} width="120 px" height="150 px" alt="" > 
        </div>     
        </div>`
        } 
    });
    
   
    
}


function eliminarProductos(){
    var divProductos = document.querySelector('#productos-mercado')
    divProductos.innerHTML=  ""
}


function borrarResultados(){

    document.querySelector('#respuesta-ejercicio1').value =""
    document.querySelector('#respuesta-ejercicio2').value =""
    document.querySelector('#respuesta-ejercicio3').value =""
    document.querySelector('#respuesta-ejercicio4').value =""

}


function ejecutarEjercicio1() {
    var cadena = new String(document.querySelector('#input-texto').value);
    if (cadena.includes("adios")) {
        document.querySelector('#respuesta-ejercicio1').value = cadena.replace("adios","hasta pronto")
    } else{
        document.querySelector('#respuesta-ejercicio1').value = "La frase no contiene la palabra adios "
    }
}

function ejecutarEjercicio2() {
    var cadena = new String(document.querySelector('#input-texto').value);
    if (cadena.includes(" ")) {
       var cadena1 = cadena.split(" ")
        document.querySelector('#respuesta-ejercicio2').value = `${cadena1[0].toLowerCase()} ${cadena1[1].toUpperCase()}`
    }else{
        document.querySelector('#respuesta-ejercicio2').value = "La frase no contiene minimo dos palabras "
    }

}


function ejecutarEjercicio3() {
    var cadena2=[]
    var cadena1=[]
    var validacion = false
    var cadena = new String(document.querySelector('#input-texto').value);
    if (cadena.includes(" ")) {
       cadena1 = cadena.split(" ")
    } else{
       cadena1 = cadena.split("")
    }
       cadena1 = cadena1.join('').split("")
       cadena1.forEach((elemento,index) => cadena2[index]=elemento)
       cadena2.reverse();
       cadena1.forEach(function(elemento,index){
            if (cadena2[index] == elemento){
                validacion = true
            }else{
                validacion = false
            }
        })
       if (validacion) {
        document.querySelector('#respuesta-ejercicio3').value = "la frase o palabra SI es palíndromo"
       } else {
        document.querySelector('#respuesta-ejercicio3').value = "la frase o palabra NO es palíndromo" 
       }
}

function ejecutarEjercicio4() {
    var cadena1=["manzana", "naranja", "limón", "uva", "piña", "fresa"]
    var cadena2=[]
    cadena1.forEach((elemento,index) => cadena2[index]=elemento)
    cadena2.reverse()
    document.querySelector('#respuesta-ejercicio4').value = "El array invertido es: "
    cadena2.forEach((elemento,index) => document.querySelector('#respuesta-ejercicio4').value+= `${index}-${elemento}, `)
}

function ejecutarEjercicio5() {
    document.querySelector('#respuesta-ejercicio5').value =  "El arregol original: " + nombres + "\nEl arreglo organizado: " + Array.of(...nombres).sort()
    
}

function ejecutarEjercicio6() {
    var cadena1 = Array.of(...nombres)
    var arrayParaEliminar = ["Paola", "Andrea"]; 
    arrayParaEliminar.forEach(function(elementoAEliminar){
        if (cadena1.indexOf(elementoAEliminar) >=0 ) {
            cadena1.splice(cadena1.indexOf(elementoAEliminar),1)
            document.querySelector('#respuesta-ejercicio6').value = "El arregol original: " + nombres + "\nEl arreglo sin elementos: " + cadena1
        }
    });
    
}

function ejecutarEjercicio7() {
    document.querySelector('#respuesta-ejercicio7').value =  "El arregol original: " + mezclaElementos + "\nEl arreglo organizado: " + Array.of(...mezclaElementos).sort()
    
}

function ejecutarEjercicio8() {
    document.querySelector('#respuesta-ejercicio8').value =  "El nombre de la mascota puede ser: " + nombres[Math.floor(Math.random() * nombres.length)]
    
}
