class User {
    constructor({nombre, apellido, libros, mascostas}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascostas = mascostas;
    }

    getFullname () {
        return `${this.nombre} ${this.apellido}`;
    }    
     addMascotas = (pet = '') => {
        return this.mascostas.push(pet);
    }

    countMascotas (){
        return this.mascostas.length;
    }

    addBook(titulo, autor){
        return this.libros.push({titulo, autor});
        
    }
    getBookNames (){
        return this.libros.map(libros => libros.titulo);
       
    }
   
}

let data = {
    nombre: 'juan',
    apellido: 'perez',
    libros: [
        {titulo: 'el principito', autor: 'Gabriel Garcia Marquez'},
        {titulo: 'el señor de los anillos', autor: 'J.R.R. Tolkien'},
        {titulo: 'el hobbit', autor: 'J.R.R. Tolkien'},
        {titulo: 'la naranja mecánica', autor: 'George Orwell'},
        {titulo: 'la isla del tesoro', autor: 'J.R.R. Tolkien'},
        {titulo: 'la muerte de la luz', autor: 'J.R.R. Tolkien'},
        {titulo: 'la isla del tesoro', autor: 'J.R.R. Tolkien'}
        
    ],
    mascostas: [ 'perro', 'gato', 'pez', 'pajaro', 'loro']
}

let juan = new User(data);
console.log(juan.getFullname());
console.log(juan.addMascotas('caballo'));
console.log(juan.countMascotas());
console.log(juan.addBook('la muerte de la luz','J.R.R. Tolkien'));
console.log(juan.getBookNames());