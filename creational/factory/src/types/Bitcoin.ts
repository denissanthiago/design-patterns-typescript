import IPaymentMethod from "../payment-method.interface";

export default class BitCoin implements IPaymentMethod {
  get commission(): number {
    return 0.4;
  }
}
