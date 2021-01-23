import IPaymentMethod from "../payment-method.interface";

export default class Visa implements IPaymentMethod {
  get commission(): number {
    return 0.5;
  }
}
