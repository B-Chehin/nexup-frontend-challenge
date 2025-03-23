// src/data/data.ts
import Product from '../models/Product';
import { ProductCategory }  from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const products: Product[] = [
  new Product(1,'Naranja', ProductCategory.Fruit, 1200, ProductStatus.Active, 10,),
  new Product(2,'Lechuga', ProductCategory.Vegetables, 25, ProductStatus.Inactive, 5,),
  new Product(3, 'Entraña', ProductCategory.Meat, 80, ProductStatus.Active, 5),
  new Product(4, 'Bondiola', ProductCategory.Meat, 50, ProductStatus.Active, 9),
  new Product(5, 'Chorizo', ProductCategory.Meat, 20, ProductStatus.Active, 0),
  new Product(6, 'Morcilla', ProductCategory.Meat, 40, ProductStatus.Active, 3),
  new Product(7, 'Vacio', ProductCategory.Meat, 100, ProductStatus.Active, 1),
];

export default products;