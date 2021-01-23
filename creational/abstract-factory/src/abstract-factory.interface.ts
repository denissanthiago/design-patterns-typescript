import IConnector from "./factories/connector.interface";
import IPlublisher from "./factories/publisher.interface";

export default interface IAbstractFactory {
  getConnector(): IConnector;
  getPublisher(connector: IConnector): IPlublisher;
}
