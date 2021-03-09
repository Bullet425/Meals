export default class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    ingredients,
    price,
    isVegetarian
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.price = price;
    this.isVegetarian = isVegetarian;
  }
}
