import IPaymentMethod from "../payment-method.interface";

export default class MasterCard implements IPaymentMethod {
  get commission(): number {
    return 0.7;
  }
}
