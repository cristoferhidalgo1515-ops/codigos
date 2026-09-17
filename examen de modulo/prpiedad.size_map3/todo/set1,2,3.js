//estan los set,los get y delete

//metodos set

//ejercicio1
const precios = new Map ();
precios.set("manzana", 1.50);

//ejercicio2
precios.set(101, "descuento");

//ejercicio3
precios.set(true, "modo activo");
 
//metodo get

//ejercicio 1
precios.get("manzana");

//ejercicio 2
console.log(precios.get("pera")); //undefined

//ejercicio 3
let clavebuscada = true;
console.log(precios.get(clavebuscada));

//metodo has

//ejercicio1
console.log(precios.has("manzana"));

//ejercicio2
console.log(precios.has("naranja"));

//metodo delete 

//ejercicio1
precios.delete("manzana");

//ejercicio2
precios.delete("uvas")
console.log(precios.size);



