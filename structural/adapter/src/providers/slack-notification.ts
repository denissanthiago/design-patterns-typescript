export default class SlackNotification {
  public send(channelId: string, tittle: string, message: string): void {
    console.log(` Send meessage ${channelId} ${tittle} ${message}`);
  }
}
