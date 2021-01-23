import INotification from "../providers/notification.interface";

export default class NotificationService {
  constructor(private providers: INotification[]) {}

  public post(title: string, message: string): void {
    this.providers.forEach((provider) => provider.post(title, message));
  }
}
