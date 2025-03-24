import Product from '../models/Product';
import { ProductCategory }  from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const products: Product[] = [
  new Product(1,'Naranja', ProductCategory.Fruit, 10, ProductStatus.Active, 10,),
  new Product(2,'Cereza', ProductCategory.Fruit, 190, ProductStatus.Active, 12,),
  new Product(3,'Frutilla', ProductCategory.Fruit, 120, ProductStatus.Active, 3,),
  new Product(4,'Pera', ProductCategory.Fruit, 210, ProductStatus.Active, 0,),
  new Product(5,'Mandarina', ProductCategory.Fruit, 310, ProductStatus.Inactive, 20,),
  new Product(6,'Manzana', ProductCategory.Fruit, 15, ProductStatus.Active, 140,),
  new Product(7,'Banana', ProductCategory.Fruit, 132, ProductStatus.Active, 120,),
  new Product(8,'Kiwi', ProductCategory.Fruit, 11, ProductStatus.Inactive, 0,),
  new Product(9,'Lechuga', ProductCategory.Vegetables, 25, ProductStatus.Inactive, 5,),
  new Product(10, 'Entraña', ProductCategory.Meat, 80, ProductStatus.Active, 5),
  new Product(11, 'Bondiola', ProductCategory.Meat, 50, ProductStatus.Active, 9),
  new Product(12, 'Chorizo', ProductCategory.Meat, 20, ProductStatus.Active, 0),
  new Product(13, 'Morcilla', ProductCategory.Meat, 40, ProductStatus.Active, 3),
  new Product(14, 'Vacio', ProductCategory.Meat, 100, ProductStatus.Active, 1),
  new Product(15,'Lechuga', ProductCategory.Vegetables, 25, ProductStatus.Inactive, 5,),
  new Product(16, 'Papa', ProductCategory.Vegetables, 25, ProductStatus.Active, 1,),
  new Product(17,'Batata', ProductCategory.Vegetables, 25, ProductStatus.Inactive, 15,),
  new Product(18,'Tomate', ProductCategory.Vegetables, 25, ProductStatus.Active, 25,),
  new Product(19,'Hacelga', ProductCategory.Vegetables, 25, ProductStatus.Active, 35,),
  new Product(20,'Cebolla', ProductCategory.Vegetables, 25, ProductStatus.Active, 55,),
  new Product(21,'Rabano', ProductCategory.Vegetables, 25, ProductStatus.Active, 65,),

];

export default products;