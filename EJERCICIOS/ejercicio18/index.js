const nombre = "Diego";
const apellido = "Vistoso"

const objeto = {
    nombre,
    apellido
}

//Almacena el objeto anterior en la SessionStorage
//localStorage.setItem("objeto", JSON.stringify(objeto));

//Almacena el objeto anterior en la LocalStorage
//sessionStorage.setItem("objeto", JSON.stringify(objeto)); 

const minutos = new Date()
//document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(minutos.getTime() + 2 * 60000)}`
