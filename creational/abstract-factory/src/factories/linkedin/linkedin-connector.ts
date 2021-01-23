import IConnector from "../connector.interface";

export default class LinkedinConnector implements IConnector {
  open(): void {
    console.log("Connected to linkedin");
  }

  close(): void {
    console.log("Close Connection linkedin");
  }
}
