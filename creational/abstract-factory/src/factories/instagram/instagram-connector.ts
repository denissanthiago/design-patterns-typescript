import IConnector from "../connector.interface";

export default class InstagramConnector implements IConnector {
  open(): void {
    console.log("Open connection Intagram");
  }

  close(): void {
    console.log("Close connection Instagram");
  }
}
