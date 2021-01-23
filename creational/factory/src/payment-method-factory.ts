import IPaymentMethod from "./payment-method.interface";
import PaymentType from "../emuns/pyment-type";

import MasterCard from "./types/MasterCard";
import BitCoin from "./types/Bitcoin";
import Paypal from "./types/Paypal";
import Visa from "./types/Visa";

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
    if (type === PaymentType.Bitcoin) {
      return new BitCoin();
    }

    if (type === PaymentType.MasterCard) {
      return new MasterCard();
    }

    if (type === PaymentType.Visa) {
      return new Visa();
    }

    if (type === PaymentType.Paypal) {
      return new Paypal();
    }

    throw new Error("Invalido el metodo de pago");
  }
}
