import { ProductStatus } from './ProductStatus';
import { ProductCategory } from './ProductCategory';

class Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  status: ProductStatus;
  stock: number;

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    price: number,
    status: ProductStatus,
    stock: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.status = status;
    this.stock = stock;
  }
  
  // Método para formatear el precio
  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  // Método para verificar si el producto está activo
  isActive() {
    return this.status === ProductStatus.ACTIVE;
  }

  // Método para verificar si el producto está en stock
  isInStock() {
    return this.stock > 0;
  }
}


export default Product;

