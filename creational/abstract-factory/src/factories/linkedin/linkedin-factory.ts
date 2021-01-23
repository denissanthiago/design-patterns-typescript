import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import LinkedinConnector from "./linkedin-connector";
import IPlublisher from "../publisher.interface";
import LinkedinPublisher from "./linkedin-publisher";

export default class LinkedinFactory implements IAbstractFactory {
  getConnector(): IConnector {
    return new LinkedinConnector();
  }

  getPublisher(connector: IConnector): IPlublisher {
    return new LinkedinPublisher(connector);
  }
}
