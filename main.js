// PUNTOS SEGUNDA PREENTREGA
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO

// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un alerta al usuario, 
// diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su compra.


const productos = []

class Data {
    constructor(nombre, precio, cantidad, categoria, id){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.id = id
    }

    hacerProducto(){
        return(this.nombre + this.precio + this.cantidad + this.categoria + this.id)
    }
}

function crearProducto(nombre, precio, cantidad, categoria, id) {
    let producto = new Data(nombre, precio, cantidad, categoria, id)
    productos.push(producto)

    return producto
}

const remera = crearProducto("remera", 500, 3, "ropa", 1234)
const canguro = crearProducto("canguro", 1300, 1, "ropa", 567)
const campera = crearProducto("campera", 2000, 5, "ropa", 73264)
const zapatos = crearProducto("zapatos", 5000, 10, "calzado", 7394)
const pantalon = crearProducto("pantalon", 3000, 6, "ropa", 93873)


//SORT////////
    const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre))
    console.log(productosOrdenados)

//////////////

alert("Bienvenido a nuestra tienda! A continuación verá nuestra lista de productos")

let todosLosProductos = productos.map((productos) => productos.nombre + " $" + productos.precio)

alert(todosLosProductos.join(" - "))

let elegido = prompt("Agrega a tu carrito un producto de la lista anterior")

if (elegido == "campera" || elegido == "canguro" || elegido == "pantalon" || elegido == "remera" || elegido == "zapatos"){
    switch(elegido){
        case "campera": 
            alert(`el producto ${elegido} esta siendo preparado para ir a su domicilio, se debitará $ ${campera.precio} de su tarjeta de crédito`)
        //precio = 2000
        break;

        case "canguro":
            alert(`el producto ${elegido} esta siendo preparado para ir a su domicilio, se debitará $ ${canguro.precio} de su tarjeta de crédito`)
        //precio = 1300
        break;
        
        case "pantalon": 
            alert(`el producto ${elegido} esta siendo preparado para ir a su domicilio, se debitará $ ${pantalon.precio} de su tarjeta de crédito`)
        //precio = 3000
        break;
        
        case "remera": 
            alert(`el producto ${elegido} esta siendo preparado para ir a su domicilio, se debitará $ ${remera.precio} de su tarjeta de crédito`)
        //precio = 500
        break;
        
        case "zapatos":
            alert(`el producto ${elegido} esta siendo preparado para ir a su domicilio, se debitará $ ${zapatos.precio} de su tarjeta de crédito`)
        //precio = 5000
        break;

        default:
        break;
    }

    alert("Muchas gracias por su compra!")

} else if(elegido != "campera" || elegido != "canguro" || elegido != "pantalon" || elegido != "remera" || elegido != "zapatos"){
    alert("Por favor, regrese al inicio y elija una prenda de nuestra lista de productos")
    alert("Vuelva pronto!")
}