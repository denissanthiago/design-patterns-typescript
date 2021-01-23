import { assert } from "chai";
import Product from "./src/product";
import BasePrice from "./src/base-price";
import SpecialPriceDecorator from "./src/decorators/special-price.decorator";
import VipCustomerDecorator from "./src/decorators/vip-customer.decorator";

describe("Product price", () => {
  it("base price", () => {
    const product = new Product("Iphnoe 12", 2000);
    let specialPrice = new BasePrice();

    product.setSpecialPrice(specialPrice.calculate(product.price));

    assert.isTrue(product.specialPrice === 0);
  });

  it("special price discount", () => {
    const product = new Product("Samsung eco 270", 1000);
    let specialPrice = new BasePrice();

    specialPrice = new SpecialPriceDecorator(specialPrice);
    product.setSpecialPrice(specialPrice.calculate(product.price));

    assert.isTrue(product.price > product.specialPrice);
  });

  it("vip discount price", () => {
    const product = new Product("samsung evo 270", 1000);
    let vipPrice = new BasePrice();

    vipPrice = new VipCustomerDecorator(vipPrice);
    product.setSpecialPrice(vipPrice.calculate(product.price));

    assert.isTrue(product.price > product.specialPrice);
  });

  it("special price and vip, discount price", () => {
    const product = new Product("Samsung evo 270", 1000);
    let specialPrice = new BasePrice();

    specialPrice = new SpecialPriceDecorator(specialPrice);
    specialPrice = new VipCustomerDecorator(specialPrice);

    product.setSpecialPrice(specialPrice.calculate(product.price));
    assert.isTrue(product.price > product.specialPrice);
  });
});
