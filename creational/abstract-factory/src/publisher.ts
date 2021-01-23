import IAbstractFactory from "./abstract-factory.interface";

export default class Publisher {
  constructor(private content: string) {}

  /**
   * send
   */
  public send(factory: IAbstractFactory) {
    const connector = factory.getConnector();
    const publisher = factory.getPublisher(connector);

    connector.open();
    publisher.publish(this.content);
    connector.close();
  }
}
