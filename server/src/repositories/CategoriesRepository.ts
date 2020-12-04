import Category from '../models/Category';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public findIndexById(id: string): number {
    const findCategoryIndex = this.categories.findIndex(
      category => id === category.id,
    );

    return findCategoryIndex;
  }

  public find(id: string): Category | boolean {
    const findCategoryIndex = this.categories.findIndex(
      category => id === category.id,
    );

    if (findCategoryIndex !== -1) {
      return this.categories[findCategoryIndex];
    }

    return false;
  }

  public create(description: string, date: Date): Category {
    const category = new Category(description, date);

    this.categories.push(category);

    return category;
  }

  public all(): Category[] {
    return this.categories;
  }

  public update(
    id: string,
    description: string,
    date: Date,
    indexId: number,
  ): Category {
    this.categories[indexId] = {
      id,
      description,
      date,
    };

    return this.categories[indexId];
  }

  public delete(indexId: number): Category[] {
    this.categories.splice(indexId, 1);
    return this.categories;
  }
}

export default CategoriesRepository;
