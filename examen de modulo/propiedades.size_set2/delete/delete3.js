const frutas = new Set(["manzana", "pera"]);
frutas.delete("manzana");
console.log(frutas.has("manzana"));