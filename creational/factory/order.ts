import PaymentType from "./emuns/pyment-type";
import PaymentMethodFactory from "./src/payment-method-factory";
import IPaymentMethod from "./src/payment-method.interface";

export default class Order {
  public paymentType?: IPaymentMethod;
  public commission: number = 0;

  constructor(private type: PaymentType, public amount: number) {}

  public create(): void {
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
    this.commission = this.paymentType.commission * this.amount;
  }
}
