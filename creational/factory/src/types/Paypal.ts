import IPaymentMethod from "../payment-method.interface";

export default class Paypal implements IPaymentMethod {
  get commission(): number {
    return 0.8;
  }
}
