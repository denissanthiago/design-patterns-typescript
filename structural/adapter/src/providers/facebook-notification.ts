import INotification from "./notification.interface";

export default class FacebookNotification implements INotification {
  public post(title: string, message: string): void {
    console.log(`Sending post ${title} ${message}`);
  }
}
