import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";

import InstagramConnector from "./instagram-connector";
import IPlublisher from "../publisher.interface";
import InstagramPublisher from "./instagram-publisher";

export default class InstagramFactory implements IAbstractFactory {
  getConnector(): IConnector {
    return new InstagramConnector();
  }

  getPublisher(connector: IConnector): IPlublisher {
    return new InstagramPublisher(connector);
  }
}
