import INotification from "./src/providers/notification.interface";
import FacebookNotification from "./src/providers/facebook-notification";
import SalckAdapterNotification from "./src/providers/slack-notification.adapter";
import SlackNotification from "./src/providers/slack-notification";
import NotificationService from "./src/services/notification.service";

const providers: INotification[] = [
  new FacebookNotification(),
  new SalckAdapterNotification(new SlackNotification()),
];

const notificationService = new NotificationService(providers);

notificationService.post("Hey Coders", "como estan!");
