const nombre = "Diego";
const apellido = "Vistoso"

const objeto = {
    nombre,
    apellido
}

//Almacena el objeto anterior en la SessionStorage
//sessionStorage.setItem("objeto", JSON.stringify(objeto)); 

//Almacena el objeto anterior en la LocalStorage
//localStorage.setItem("objeto", JSON.stringify(objeto));

const minutos = new Date()
//Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
//document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(minutos.getTime() + 2 * 60000)}`
