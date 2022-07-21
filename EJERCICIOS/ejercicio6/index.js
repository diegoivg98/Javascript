const lista_compra = ["pan", "huevo", "aceite", "cereal", "leche"];
console.log(lista_compra);

lista_compra.push("Aceite de Girasol");
console.log(lista_compra);

lista_compra.pop();
console.log(lista_compra);

const peliculas = [
    { 
        titulo: "SAW", 
        director: "James Wan", 
        fecha: new Date(2004, 0, 29) 
    },
        
    {
        titulo: "Silent Hill", 
        director: "Christophe Gans", 
        fecha: new Date(2006, 3, 21) 
    },

    { 
        titulo: "Spiderman",
        director: "Sam Raimi",
        fecha: new Date(2002, 4, 3)
    }
];

const peliculas2 = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

const directores = peliculas.map(pelicula => pelicula.director);
console.log(directores);

const titulos = peliculas.map(pelicula => pelicula.titulo);
console.log(titulos);

const director_titulo = directores.concat(titulos);
console.log(director_titulo);

const director_titulo_prop = [...directores, ...titulos];
console.log(director_titulo_prop);
