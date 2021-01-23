import IDiscount from "./interfaces/discount.interface";

export default class BasePrice implements IDiscount {
  calculate(input: number): number {
    console.log();
    return input;
  }
}
