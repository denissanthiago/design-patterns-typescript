import IDiscount from "../interfaces/discount.interface";

export default class VipCustomerDecorator implements IDiscount {
  constructor(private readonly decorator: IDiscount) {}

  private readonly dicountAmount: number = 0.05;

  calculate(input: number): number {
    console.log(`${this.constructor.name} discount applied`);

    input = input * (1 - this.dicountAmount);

    return this.decorator.calculate(input);
  }
}
