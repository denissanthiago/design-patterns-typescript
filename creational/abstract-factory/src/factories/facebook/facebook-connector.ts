import IConnector from "../connector.interface";

export default class FacebookConnector implements IConnector {
  open(): void {
    // Logic connector valid
    console.log("Connected to facebook");
  }

  close(): void {
    // Logic disconnected valid
    console.log("Diconnected to facebook");
  }
}
