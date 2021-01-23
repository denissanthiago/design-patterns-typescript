import IPlublisher from "../publisher.interface";
import IConnector from "../connector.interface";

export default class InstagramPublisher implements IPlublisher {
  constructor(private connector: IConnector) {}

  publish(content: string) {
    console.log("Connector in publish", this.connector);
    console.log("Publish from Instagram");
    console.log("content : ", content);
  }
}
