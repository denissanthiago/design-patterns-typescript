export default class Product {
  public specialPrice: number = 0;
  public discount: number = 0;

  constructor(public name: string, public price: number) {}

  setSpecialPrice(input: number): void {
    if (this.price > input) {
      this.specialPrice = input;
      this.discount = 1 - this.specialPrice / this.price;
    }
  }
}
