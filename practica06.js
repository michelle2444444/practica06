// Importamos las funciones necesarias desde los archivos respectivos
import { listProducts, products } from "./product.js";
import { saveFavoriteProduct, getFavoriteProduct } from "./almacenar.js";

// Mostrar todos los productos disponibles
console.log("Lista de productos disponibles:");
listProducts();

// Guardar un producto favorito en localStorage (Validamos que el producto exista)
const selectFavoriteProduct = (index) => {
  if (index >= 0 && index < products.length) {
    saveFavoriteProduct(products[index]);
    console.log(`Producto favorito guardado: ${products[index].name}`);
  } else {
    console.error("Índice de producto no válido.");
  }
};

// Mostrar el producto favorito guardado
const showFavoriteProduct = () => {
  const favoriteProduct = getFavoriteProduct();
  if (favoriteProduct) {
    console.log(`Tu producto favorito es: ${favoriteProduct.name}`);
  } else {
    console.log("No has guardado ningún producto favorito.");
  }
};

// Interacción: Guardar y mostrar el producto favorito
const index = 0; // Índice del producto a guardar como favorito (puede ser dinámico)
selectFavoriteProduct(index);
showFavoriteProduct();

// Ejemplo para listar y seleccionar un producto diferente
console.log("\nSeleccionando un nuevo producto como favorito:");
const newIndex = 2; // Cambia este valor para seleccionar otro producto
selectFavoriteProduct(newIndex);
showFavoriteProduct();
