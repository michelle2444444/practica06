export const products = [
    "iPhone 13",
    "MacBook",
    "iPad",
  ];
  
  export function listProducts() {
    console.log("Lista de productos disponibles:");
    products.forEach((product) => {
      console.log(product);
    });
  }