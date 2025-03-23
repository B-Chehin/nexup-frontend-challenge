import Product from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';
import { ProductCategory } from '../models/ProductCategory';

// Change the return type if necessary
export const products: Product[] = [
    new Product(1, "Naranja", ProductCategory.Fruit, 10, ProductStatus.Active, 10),
    new Product(2, "Lechuga", ProductCategory.Vegetables, 19.99, ProductStatus.Inactive, 5),
    new Product(3, "Entraña", ProductCategory.Meat, 50, ProductStatus.Active, 0),
    new Product(3, "Milanesa", ProductCategory.Meat, 30, ProductStatus.Active, 20),
];
