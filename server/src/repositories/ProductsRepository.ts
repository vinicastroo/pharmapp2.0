import Product from '../models/Product';

class ProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  public findIndexById(id: string): number {
    const findProductIndex = this.products.findIndex(
      product => id === product.id,
    );

    return findProductIndex;
  }

  public find(id: string): Product | boolean {
    const findProductIndex = this.products.findIndex(
      product => id === product.id,
    );

    if (findProductIndex !== -1) {
      return this.products[findProductIndex];
    }

    return false;
  }

  public create(description: string, value: string, date: Date): Product {
    const product = new Product(description, value, date);

    this.products.push(product);

    return product;
  }

  public all(): Product[] {
    return this.products;
  }

  public update(
    id: string,
    description: string,
    value: string,
    date: Date,
    indexId: number,
  ): Product {
    this.products[indexId] = {
      id,
      description,
      value,
      date,
    };

    return this.products[indexId];
  }

  public delete(indexId: number): Product[] {
    this.products.splice(indexId, 1);
    return this.products;
  }
}

export default ProductsRepository;
