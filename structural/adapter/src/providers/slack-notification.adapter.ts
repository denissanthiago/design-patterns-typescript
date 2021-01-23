import INotification from "./notification.interface";
import SlackNotification from "./slack-notification";

export default class SalckAdapterNotification implements INotification {
  constructor(private slackNotification: SlackNotification) {}

  public post(tittle: string, message: string): void {
    this.slackNotification.send("ChannelId", tittle, message);
  }
}
