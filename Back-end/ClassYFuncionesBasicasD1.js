class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
      this.getFullName = function(){
        console.log(`${this.nombre } ${this.apellido}` )  
    }
     this.addMascotas = function(otraMascota){
         mascotas.push(otraMascota)
         otraMascota='dinosaurio'
         
     }
     //deberia funcionar porque push devuelve el length nuevo del array
    this.countMascotas = function(){
        console.log(mascotas)
    }
    this.addLibro = function(otroLibro){
        otroLibro={name:'', author:''}
        libros.push(otroLibro)
        otroLibro={name:'pepito el otro librito', author: 'xxxx'}
         console.log(this.libros)
    }
    this.getBookNames = function (bookNames){
     bookNames = this.libros.name
     console.log(bookNames)
    }
    
    }
    
}

const Usuario1 = new Usuario ("Martina", 
"Granato", 
[{name: "Juegos del hambre", author: "x"},{name:"Legend", author: "xx"},{name:"Maze runner", author:"xxx"}], 
["perro", "gato"] );

