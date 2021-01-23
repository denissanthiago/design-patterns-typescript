import { expect } from "chai";
import "mocha";

import Order from "./order";
import PaymentType from "./emuns/pyment-type";

// compare payment method test
import Visa from "./src/types/Visa";
import BitCoin from "./src/types/Bitcoin";
import MasterCard from "./src/types/MasterCard";
import Paypal from "./src/types/Paypal";

const order1 = new Order(PaymentType.Bitcoin, 100);
const order2 = new Order(PaymentType.Visa, 100);
const order3 = new Order(PaymentType.MasterCard, 100);
const order4 = new Order(PaymentType.Paypal, 100);

order1.create();
order2.create();
order3.create();
order4.create();

describe("Order - Bitcoin", () => {
  it("order must be paid to Bitcoin", () => {
    expect(true).to.equal(order1.paymentType instanceof BitCoin);
  });
});

describe("Order - Visa", () => {
  it("order must be paid to Visa", () => {
    expect(true).to.equal(order2.paymentType instanceof Visa);
  });
});

describe("Order - MasterCard", () => {
  it("order must be paid to masterCard", () => {
    expect(true).to.equal(order3.paymentType instanceof MasterCard);
  });
});

describe("Order - Paypal", () => {
  it("order must be paid to Paypal", () => {
    expect(true).to.equal(order4.paymentType instanceof Paypal);
  });
});
