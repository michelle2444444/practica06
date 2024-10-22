export function saveFavoriteProduct(product) {
    localStorage.setItem("favoriteProduct", product);
    console.log(`${product} ha sido guardado como tu favorito.`);
  }
  
  export function getFavoriteProduct() {
    const favoriteProduct = localStorage.getItem("favoriteProduct");
    if (favoriteProduct) {
      console.log(`Tu producto favorito es: ${favoriteProduct}`);
    } else {
      console.log("Aún no tienes un producto favorito guardado.");
    }
  }